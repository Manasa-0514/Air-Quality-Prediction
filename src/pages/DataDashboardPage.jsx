import React from 'react';
import Dashboard from '../components/Dashboard';

const API_BASE_URL = 'http://localhost:5000/api';

const DataDashboardPage = () => {
  return (
    <div className="page-container glass-container">
      <header className="page-header" style={{textAlign: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem'}}>Data Exploratory Dashboard</h1>
        <p style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}>Explore historical trends and relationships among pollutants</p>
      </header>
      
      <Dashboard apiBaseUrl={API_BASE_URL} />
    </div>
  );
};

export default DataDashboardPage;
