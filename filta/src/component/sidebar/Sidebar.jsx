import React from "react";
import { Link } from 'react-router-dom';
import flita from "../../images/logo.png";
// import "../sidebar/sidebar.css"
import style from "./sidebar.module.css"
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
      <div className={style.sidemain}>
        <div className={style.sidebarconatiner}>
          <div className={style.sidebarheader}>
            <h2>
              <img src={flita} alt="" srcset="" />
            </h2>
          </div>
          <div className={style.sidebarmenu}>
            <ul className={style.sidebarul}>
              <div className={style.profile}>
                <img src={mycard} alt="" srcset="" className={style.icon} />
                <li className={style.card}>
                  <Link to="/mycard">My Cards</Link>
                </li>
              </div>
              <div className={style.profile}>
                <img src={contact} alt="" srcset="" className={style.icon} />
                <li className={style.contact}>
                  <Link href="/Contact">Contacts</Link>
                </li>
              </div>
              <div className={style.profile}>
                <img src={accesories} alt="" srcset="" className={style.icon} />
                <li className={style.accessories}>
                  <a href="/Accessories">Accessories</a>
                </li>
              </div>
              <div className={style.profile}>

                <img src={insight} alt="" srcset="" className={style.icon} />
                <li className={style.insights}>
                  <a href="/insight">Insights</a>
                </li>
              </div>
              <div className={style.profile}>
                <img src={support} alt="" srcset="" className={style.icon} />
                <li className={style.support}>
                  <a href="/support">Support</a>
                </li>
              </div>
              <div className={style.profile}>

              <img src={setting} alt="" srcset="" />
              <li className={style.setting}>
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
