import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PredictionPage from './pages/PredictionPage';
import DataDashboardPage from './pages/DataDashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="app-main-layout">
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="/dashboard" element={<DataDashboardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
