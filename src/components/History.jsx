import React from 'react';

function History({ history }) {
  return (
    <div className="card" style={{ animationDelay: '0.3s' }}>
      <h2>Recent Predictions</h2>
      {history.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No predictions made yet.</p>
      ) : (
        <ul className="history-list">
          {history.map((item, idx) => (
            <li key={idx} className="history-item">
              <div>
                <div className="details">
                  <span>PM2.5: {item['PM2.5']}</span>
                  <span>PM10: {item['PM10']}</span>
                </div>
                <div className="details" style={{ marginTop: '5px' }}>
                     <span>NO2: {item['NO2']}</span>
                     <span>CO: {item['CO']}</span>
                </div>
              </div>
              <div className="aqi">
                AQI: {item.predicted_aqi}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
