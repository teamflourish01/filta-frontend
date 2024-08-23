import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Createcard from './pages/mycard/Createcard';


import logo from './logo.svg';
import appstyle from './app.module.css';
import Mycard from './pages/mycard/Mycard';
import Sidebar from './component/sidebar/Sidebar';
import Sociallink from './component/Sociallink';

function App() {
  return (
    <div className={appstyle.appflex}>
    <Sidebar/>
    <Routes>
      <Route exact path="/createcard" element={<Createcard />} />
      <Route exact path="/" element={<Mycard />} />
      <Route exact path="/Sociallink" element={<Sociallink />} />


    </Routes>
    {/* <Mycard/> */}
    
    </div>
  );
}

export default App;
