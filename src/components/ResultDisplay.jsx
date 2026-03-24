import React from 'react';

function ResultDisplay({ prediction }) {
  if (prediction === null) return null;

  return (
    <div className="card" style={{ marginTop: '2rem', animationDelay: '0.2s' }}>
      <h2>Prediction Result</h2>
      <div className="result-display">
        <div className="aqi-value">{prediction}</div>
        <div className="aqi-label">Predicted Air Quality Index</div>
      </div>
    </div>
  );
}

export default ResultDisplay;
