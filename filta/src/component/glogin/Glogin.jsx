import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import fb from "../../images/Rectangle.png";
import goggle from "../../images/goggle.png";
import sso from "../../images/sso.png";
import Fblogin from "../fblogin/Fblogin.jsx";
import axios from "axios";

function Glogin() {
  const navigate = useNavigate();

  // const handleGoogleLoginSuccess = (credentialResponse) => {
  //   try {
  //     // Decode JWT token from Google
  //     const decodedToken = jwtDecode(credentialResponse.credential);
  //     console.log("Google login success:", decodedToken);

  //     // Navigate to home page with Google user data
  //     navigate("/admin", { state: { user: decodedToken, loginType: "google" } });
  //   } catch (error) {
  //     console.error("Error decoding Google token:", error);
  //   }
  // };

  // const handleGoogleLoginError = (error) => {
  //   console.error("Google Login Error:", error);
  // };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        console.log("Full Credential Response:", response); 

        if (response?.access_token) {
          const { access_token } = response;
          // Fetch user info from Google API
          const userInfoResponse = await axios.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );

          console.log("User Info:", userInfoResponse.data);

          navigate("/admin", {
            state: { user: userInfoResponse.data, loginType: "google" },
          });
        } else {
          throw new Error("No access token found in response");
        }
      } catch (error) {
        console.error("Error handling Google login:", error);
      }
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
    },
  });

  return (
    <div className="flex-social-btn">
      <button className="social-button facebook-button" onClick={login}>
        <div className="fb-btn">
          <img src={goggle} alt="" />
          <span>Continue with Google</span>
        </div>
      </button>

      <button
        className="social-button facebook-button"
        onClick={() =>
          document.querySelector(".fb-button-hidden button").click()
        }
      >
        <Fblogin />
        <div className="fb-btn">
          <div>
            <img src={fb} alt="" />
          </div>
          <div>
            <span>Continue with Facebook</span>
          </div>
        </div>
      </button>

      <button
        className="social-button facebook-button"
        onClick={() =>
          document.querySelector(".fb-button-hidden button").click()
        }
      >
        <Fblogin />
        <div className="fb-btn">
          <div>
            <img src={sso} alt="" />
          </div>
          <div>
            <span>Continue with SSO</span>
          </div>
        </div>
      </button>

      {/* <h2>Or Login with Facebook</h2>
      <Fblogin /> */}
    </div>
  );
}

export default Glogin;
