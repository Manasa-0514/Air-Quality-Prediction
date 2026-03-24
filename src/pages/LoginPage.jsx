import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login, bypass real auth for now
    navigate('/home');
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, padding: '2rem' }}>
      <div className="card glass-panel" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="submit-btn" style={{ marginTop: '0.5rem' }}>Login</button>
        </form>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
