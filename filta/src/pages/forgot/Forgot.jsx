import React from "react";
import filta from "../../images/Frame.png";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../pages/forgot/forgot.css";

function Forgot() {
  return (
    <>
      <div>
        <div className="forgot-container">
          <div className="signup-page">
            <div className="forgot-form-container">
            <Link to="/login">
                  <div className="back-arrow-forgot">
                    <FaArrowLeft />
                  </div>
                </Link>
              <div className="arrow-logo-content">
                
                <div className="logo-container-forgot">
                  <img src={filta} alt="filta-logo" className="filta-logo" />
                </div>
              </div>

              <div className="forgot-tabs">
                <div className="forgot-up-top-text">
                  We all forget sometimes. Submit your email and we will send
                  you instructions to reset your password.
                </div>
                <div className="email-row">
                  <div className="input-field-forgot">Email</div>
                  <div className="input-group-forgot">
                    <input type="email" className="input-forgot" />
                  </div>
                </div>
                <Link to="/login">
                  <button type="submit" className="btn-signup">
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
