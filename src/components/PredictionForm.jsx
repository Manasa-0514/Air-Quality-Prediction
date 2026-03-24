import React, { useState } from 'react';

function PredictionForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    'PM2.5': '',
    'PM10': '',
    'NO2': '',
    'CO': ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <div className="card" style={{ animationDelay: '0.1s' }}>
      <h2>Predict AQI</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>PM2.5 (µg/m³)</label>
          <input 
            type="number" 
            step="0.01" 
            name="PM2.5" 
            value={formData['PM2.5']} 
            onChange={handleChange} 
            required 
            placeholder="e.g. 45.2" 
          />
        </div>
        <div className="form-group">
          <label>PM10 (µg/m³)</label>
          <input 
            type="number" 
            step="0.01" 
            name="PM10" 
            value={formData['PM10']} 
            onChange={handleChange} 
            required 
            placeholder="e.g. 90.5" 
          />
        </div>
        <div className="form-group">
          <label>NO2 (µg/m³)</label>
          <input 
            type="number" 
            step="0.01" 
            name="NO2" 
            value={formData['NO2']} 
            onChange={handleChange} 
            required 
            placeholder="e.g. 20.1" 
          />
        </div>
        <div className="form-group">
          <label>CO (mg/m³)</label>
          <input 
            type="number" 
            step="0.01" 
            name="CO" 
            value={formData['CO']} 
            onChange={handleChange} 
            required 
            placeholder="e.g. 0.8" 
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict AQI'}
        </button>
      </form>
    </div>
  );
}

export default PredictionForm;
