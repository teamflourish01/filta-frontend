import React, { useState } from "react";
import "../../pages/login/login.css";
import filta from "../../images/Frame.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Glogin from "../../component/glogin/Glogin";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-page">
          <div className="login-form-container">
            <div className="logo-container">
              <img src={filta} alt="filta-logo" className="filta-logo" />
            </div>
            <div className="login-title">Log in</div>
            <div className="login-tabs">
              <div className="email-row">
                <div className="input-field">Email</div>
                <div className="input-group">
                  <input type="email" className="input" />
                </div>
              </div>
              <div className="email-row">
                <div className="input-field pt">Password</div>
                <div className="input-group password-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                  />
                  <span className="eye-icon" onClick={togglePasswordVisibility}>
                    <span className="eyes">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </span>
                </div>
              </div>
              <div className="forget-me-container">
                <div className="checkbox-row">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className="remember-me">
                    Remember me
                  </label>
                </div>
                <div className="forget-content">
                  <Link to='/forgot' className="forget-text">Forgot Password?</Link>
                </div>
              </div>
              <Link to='/admin'>
              <button type="submit" className="btn-login">
                Sign in
              </button>
              </Link>
              <div className="divider">
                <span className="line"></span>
                <span className="or-text">OR</span>
                <span className="line"></span>
              </div>
              <Glogin />
              <div className="new-to-filta">
                <p className="text-center">
                  <span className="new-text">New to filta ?{" "}</span>
                  <Link to='/' className="create-account">Create account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
