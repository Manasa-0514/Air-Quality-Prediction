import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="glass-navbar">
      <div className="navbar-logo">
        <Link to="/home">AirSense</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
        <Link to="/prediction" className={location.pathname === '/prediction' ? 'active' : ''}>Prediction</Link>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Data Dashboard</Link>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
