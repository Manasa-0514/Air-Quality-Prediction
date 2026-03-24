from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pickle
import os
import warnings
from pymongo import MongoClient
from datetime import datetime
import warnings

warnings.filterwarnings('ignore', category=UserWarning)

app = Flask(__name__)
CORS(app)

# Paths based on execution context (running from backend/ or project root)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model.pkl')
STATIC_PATH = os.path.join(BASE_DIR, 'static')

# MongoDB configuration
MONGO_URI = 'mongodb://localhost:27017/'

# Load the trained model
print(f"Loading model from {MODEL_PATH}...")
try:
    with open(MODEL_PATH, 'rb') as f:
        model = pickle.load(f)
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

try:
    client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
    # The ping command is cheap and does not require auth.
    client.admin.command('ping')
    db = client['air_quality']
    history_collection = db['prediction_history']
    print("Connected to MongoDB successfully.")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    db = None
    history_collection = None

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded on server.'}), 500

    try:
        data = request.json
        pm25 = float(data.get('PM2.5', 0))
        pm10 = float(data.get('PM10', 0))
        no2 = float(data.get('NO2', 0))
        co = float(data.get('CO', 0))

        # Create feature array matching the training columns: ['PM2.5', 'PM10', 'NO2', 'CO']
        features = [[pm25, pm10, no2, co]]
        prediction = model.predict(features)[0]

        # Save prediction to MongoDB
        if history_collection is not None:
            history_collection.insert_one({
                'pm25': pm25,
                'pm10': pm10,
                'no2': no2,
                'co': co,
                'predicted_aqi': float(prediction),
                'timestamp': datetime.now()
            })

        return jsonify({'predicted_aqi': round(prediction, 2)})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/history', methods=['GET'])
def history():
    try:
        if history_collection is None:
            return jsonify([])

        cursor = history_collection.find().sort('timestamp', -1).limit(50)
        history_data = []
        for doc in cursor:
            history_data.append({
                'PM2.5': doc.get('pm25', 0),
                'PM10': doc.get('pm10', 0),
                'NO2': doc.get('no2', 0),
                'CO': doc.get('co', 0),
                'predicted_aqi': round(doc.get('predicted_aqi', 0), 2),
                'timestamp': doc.get('timestamp')
            })
        return jsonify(history_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/static/<path:filename>')
def serve_static(filename):
    """Serve EDA graphs from the static folder"""
    if os.path.exists(os.path.join(STATIC_PATH, filename)):
        return send_from_directory(STATIC_PATH, filename)
    else:
        return jsonify({'error': 'File not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
