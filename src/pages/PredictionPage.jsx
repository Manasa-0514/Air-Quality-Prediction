import React, { useState, useEffect } from 'react';
import PredictionForm from '../components/PredictionForm';
import ResultDisplay from '../components/ResultDisplay';
import History from '../components/History';
import './PredictionPage.css';

const API_BASE_URL = 'http://localhost:5000/api';

const PredictionPage = () => {
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/history`);
      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error('Failed to fetch history', err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePredict = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.predicted_aqi !== undefined) {
        setPrediction(data.predicted_aqi);
        fetchHistory(); // Refresh history
      } else {
        alert("Prediction failed: " + data.error);
      }
    } catch (err) {
      alert("Error connecting to backend");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container glass-container">
      <header className="page-header">
        <h1>AQI Predictor</h1>
        <p>Enter pollutant levels to predict the Air Quality Index</p>
      </header>
      
      <div className="main-content">
        <div className="left-column">
          <PredictionForm onPredict={handlePredict} loading={loading} />
          <ResultDisplay prediction={prediction} />
        </div>
        
        <div className="right-column">
          <History history={history} />
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
