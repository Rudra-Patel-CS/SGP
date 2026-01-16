import React from "react";
import "./Login.css";
import signupImg from "../assets/product4.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="bg-overlay"></div>

      <div className="login-card signup-card-wide">

        {/* LEFT IMAGE SECTION (FIXED) */}
        <div className="signup-image-box">
          <img
            src={signupImg}
            alt="Vloom Handicraft"
            className="signup-side-img"
          />

          <div className="image-overlay-text">
            <h2>Join Vloom</h2>
            <p>Handmade • Authentic • Local</p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="login-form-section">
          <h2>Create Account</h2>
          <p className="welcome-back">
            Be part of handcrafted excellence
          </p>

          <form className="login-form">
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <span className="icon">📧</span>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="input-group">
              <span className="icon">🛡️</span>
              <input type="password" placeholder="Confirm Password" required />
            </div>

            <button type="submit" className="login-submit-btn">
              SIGN UP
            </button>
          </form>

          <p className="form-footer-text">
            Already have an account?{" "}
            <span className="link-span" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
