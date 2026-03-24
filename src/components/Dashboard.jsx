import React from 'react';

function Dashboard({ apiBaseUrl }) {
  // We expect the backend to have these static files created by train_model.py
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Data Exploratory Dashboard</h2>
        <div className="dashboard-graphs">
          <div className="graph-card">
            <h3 style={{fontSize: '1rem', marginBottom: '10px', color: 'var(--text-muted)'}}>AQI Trend Over Time</h3>
            <img src={`${apiBaseUrl}/static/aqi_trend.png`} alt="AQI Trend" className="graph-img" />
          </div>
          
          <div className="graph-card">
            <h3 style={{fontSize: '1rem', marginBottom: '10px', color: 'var(--text-muted)'}}>Top Cities by AQI</h3>
            <img src={`${apiBaseUrl}/static/aqi_city_comparison.png`} alt="City Comparison" className="graph-img" />
          </div>

          <div className="graph-card" style={{ gridColumn: '1 / -1' }}>
            <h3 style={{fontSize: '1rem', marginBottom: '10px', color: 'var(--text-muted)'}}>Feature Correlation</h3>
            <img src={`${apiBaseUrl}/static/correlation_heatmap.png`} alt="Correlation Heatmap" className="graph-img" style={{maxHeight: '400px', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
