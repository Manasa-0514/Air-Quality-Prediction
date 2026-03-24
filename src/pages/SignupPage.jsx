import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate successful signup and take user back to login
    navigate('/');
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, padding: '2rem' }}>
      <div className="card glass-panel" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="submit-btn" style={{ marginTop: '0.5rem' }}>Sign Up</button>
        </form>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
