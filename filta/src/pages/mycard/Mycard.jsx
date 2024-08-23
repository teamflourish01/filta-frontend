import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../mycard/mycard.css";

import plus from "../../images/plus.png";

const Mycard = () => {
  const navigate = useNavigate();

  const handleCreateNewCardClick = () => {
    navigate('/createcard');
  };

  return (
    <>
      <div className="mycardcontainer">
        <div className="img-flex" onClick={handleCreateNewCardClick}>
          <div className="img-bg">
            <img src={plus} alt="Create new card" />
          </div>
          <p className="card-text">Create new card</p>
        </div>
      </div>
    </>
  );
};

export default Mycard;
