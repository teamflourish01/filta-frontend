import React from "react";
import { Link } from 'react-router-dom';
import flita from "../../images/logo.png";
import "../sidebar/sidebar.css"
import mycard from "../../images/megacard.png";
import contact from "../../images/contact.png";
import accesories from "../../images/accesories.png";
import insight from "../../images/insight.png";
import support from "../../images/support.png";
// import Dashbord from "./Dashbord";
import setting from "../../images/setting.png";
// import Contact from "./Contact";

const Sidebar = () => {
  return (
    <>
      <div className="side-main">
        <div className="sidebar-conatiner">
          <div className="sidebar-header">
            <h2>
              <img src={flita} alt="" srcset="" />
            </h2>
          </div>
          <div className="sidebar-menu">
            <ul className="sidebar-ul">
              <div className="profile">
                <img src={mycard} alt="" srcset="" className="icon" />
                <li className="card">
                  <Link to="admin/mycard">My Cards</Link>
                </li>
              </div>
              <div className="profile">
                <img src={contact} alt="" srcset="" className="icon" />
                <li className="contact">
                  <a href="/Contact">Contacts</a>
                </li>
              </div>
              <div className="profile">
                <img src={accesories} alt="" srcset="" className="icon" />
                <li className="accessories">
                  <a href="/Accessories">Accessories</a>
                </li>
              </div>
              <div className="profile">
                <img src={insight} alt="" srcset="" className="icon" />
                <li className="insights">
                  <a href="/insight">Insights</a>
                </li>
              </div>
              <div className="profile">
                <img src={support} alt="" srcset="" className="icon" />
                <li className="support">
                  <a href="/support">Support</a>
                </li>
              </div>
              <div className="profile">
              <img src={setting} alt="" srcset="" />
              <li className="setting">
                <a href="/setting">Settings</a>
              </li>
              </div>
            </ul>
          </div>
          <div className="sidebar-footer">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
