import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login logic goes here");
  };

  return (
    <div className="login-container">
      {/* Background Overlay for deeper contrast */}
      <div className="bg-overlay"></div>
      
      <div className="login-card">
        {/* Top Section: Branding/Welcome */}
        <div className="login-header">
          <div className="header-content">
            <p className="sub-text">WELCOME TO THE</p>
            <h1>WEBSITE</h1>
            <p className="description">
              Sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. 
              tempor incididunt ut labore et magn aliqua.
            </p>
            {/* Navigates to Signup page */}
            <button 
                className="create-account-btn" 
                onClick={() => navigate("/signup")}
            >
                Create Account
            </button>
          </div>
        </div>

        {/* Bottom Section: Form */}
        <div className="login-form-section">
          <h2>USER LOGIN</h2>
          <p className="welcome-back">Welcome back</p>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" placeholder="Username" required />
            </div>
            
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember
              </label>
              <a href="#forgot" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit-btn">LOGIN</button>
          </form>
          
          {/* Mobile-friendly link to signup */}
          <p className="form-footer-text mobile-only-text">
            Don't have an account?{" "}
            <span className="link-span" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;