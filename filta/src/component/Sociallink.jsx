import React from 'react'
import profile from "../images/profile.png"
import share from "../images/share.png"
const Sociallink = () => {
  return (
    <div className="right-align">
      <div className="profile-flex">
        <img src={profile} alt="Profile" />
        <div className="profile-info">
          <p>Ajay Gadhavi</p>
          <p>ajaygadhavi045@gmail.com</p>
        </div>
      </div>
      <div className="cardgadhvvi">
        <p>Card live preview</p>
        <p className="view">View Card</p>
      </div>
      <div className="share-card-box"></div>
      <button className="ShareCard">
        Share your card <img src={share} alt="Share" />
      </button>
    </div>
  )
}

export default Sociallink