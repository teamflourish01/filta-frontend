import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Mycard from "./pages/mycard/Mycard";
import appstyle from "./app.module.css";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return (
    <>
      <div className={appstyle.appflex}>
        <div className="di">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="admin/mycard" element={Mycard} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AllRoutes;
