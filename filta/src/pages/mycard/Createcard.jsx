import React,{useState}from "react";

import "../mycard/createcard.css";
import whiteplus from "../../images/whiteplus.png";
import content from "../../images/content.png";
import design from "../../images/design.png";
import qr from "../../images/qr.png";
import profilepic from "../../images/profilepic.png";
import sociallink from "../../images/sociallink.png";
import email from "../../images/email.png";
import profile from "../../images/profile.png"
import leftarrow from "../../images/leftarrow.png";
import share from "../../images/share.png";
const Createcard = () => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
  };
  return (
    <>
      <div className="createcard-container">
        <div className="createcard-flex">
          <div className="create-card">
            <p>Create New card</p>
            <img src={whiteplus} alt="" srcset="" />
          </div>

          <div className="createcard-dot">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="pr-content">
          <div className="Profile-container">
            <div className="content-flex">
              <div className="content">
                <img src={content} alt="" srcset="" />
                <p>Content</p>
              </div>
              <div className="design">
                <img src={design} alt="" srcset="" />
                <p>Design</p>
              </div>
              <div className="qr-code">
                <img src={qr} alt="" srcset="" />
                <p>QR Code</p>
              </div>
            </div>
            <div className="hr-line"></div>
            <div className="profile-social-padding">
            <div className="profile-social-flex">
      <div
        className={`profile ${active === 'profile' ? 'active' : ''}`}
        onClick={() => handleClick('profile')}
      >
        <img src={profilepic} alt="" />
        <p>Profile</p>
      </div>
      <div
        className={`social-link ${active === 'social-link' ? 'active' : ''}`}
        onClick={() => handleClick('social-link')}
      >
        <img src={sociallink} alt="" />
        <p>Social Links</p>
      </div>
      <div
        className={`email-signature ${active === 'email-signature' ? 'active' : ''}`}
        onClick={() => handleClick('email-signature')}
      >
        <img src={email} alt="" />
        <p>Email Signature</p>
      </div>
    </div>
            </div>
            <div className="hr-line"></div>
            <div className="layout-form-flex">
              <div className="left-align">
                <div className="left-align-flex">
                  <p>Card Layout :</p>
                  <div className="arrrow">
                    <p>Left Align</p>
                    <img src={leftarrow} alt="" srcset="" />
                  </div>
                </div>
                <div className="cover-profile-flex">
                  <p className="profile-picture">Profile Picture</p>
                  <p className="cover-photo">Cover Photo</p>
                  <p className="company-logo">Company Logo</p>
                </div>
                <div className="select-background">
                  <div className="select-file-flex">
                    <div className="select-file">
                      <p className="select-text">
                        <span>Select</span> file or drag and drop here
                      </p>
                    </div>
                    <div className="select"></div>
                    <div className="select-file">
                      <p className="select-text">
                        <span>Select</span> file or drag and drop here
                      </p>
                    </div>
                  </div>
                  <div className="div-pixel">
                    <div>(Use : 450x450 pixel)</div>
                    <div>(Use : 780x300 pixel)</div>
                    <div>(Use : 440x440 pixel)</div>
                  </div>
                </div>
                <div className="photo-style-container">
                  <div className="photo-style">
                    <p>Photo Style</p>
                  </div>
                </div>
                <div className="circle-square">
                  <div className="circle">
                    <div className="circle-img"></div>
                    <p className="circle-padding">Circle</p>
                  </div>
                  <div className="square">
                    <div className="square-img"></div>
                    <p className="square-padding">Square</p>
                  </div>
                </div>
                <div className="information">
                  <div className="name-location-flex">
                    <div className="name">
                      <label>Name</label>
                      <input type="text" />
                    </div>
                    <div className="location">
                      <label>Location</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="job-title">
                    <div className="name-location-flex">
                      <div className="name">
                        <label>Job Title</label>
                        <input type="text" />
                      </div>
                      <div className="location">
                        <label>Company</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="photo-style-container">
                    <div className="photo-style">
                      <p>Heading</p>
                    </div>
                  </div>
                  <div className="title">
                    <label>Title</label>
                    <input type="text" />
                  </div>

                  <div className="bio">
                    <label>Bio</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="right-align">
              <div className="profile-flex">
              <img src={profile} alt="" srcset="" />
              <div className="profile-info">

                <p>Ajay Gadhavi</p>
                <p>ajaygadhavi045@gmail.com</p>
                </div>
              </div>
              <div className="cardgadhvvi">
                <p>Card live previwe</p>
                <p className="view">View Card</p>
              </div>
              <div className="share-card-box">
              </div>
                <button className="ShareCard">
                Share your card <img src={share} alt="" srcset="" /> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createcard;
