import React from "react";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import '../fblogin/fblogin.css';

function Fblogin() {
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log('Facebook login success:', response);
    // Navigate to home page with Facebook user data
    navigate("/admin", { state: { user: response, loginType: "facebook" } });
  };

  const componentClicked = (data) =>{
    console.log(data);
  }

  return (
    <>
    {/* <button className="social-button facebook-button"> */}
    <div className="fb-button-hidden">
      <FacebookLogin
        appId="1170897080841590"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        onClick={componentClicked}
      />
    </div>
    {/* </button> */}
    </>
  );
}

export default Fblogin;
