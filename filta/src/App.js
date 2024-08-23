import logo from './logo.svg';
import appstyle from './app.module.css';
import Mycard from './pages/mycard/Mycard';
import Sidebar from './component/sidebar/Sidebar';
import Login from './pages/login/Login';
import { Route , Routes } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Signup from './pages/signup/Signup';
import Digitalcard from './pages/digitalcard/Digitalcard';
import Forgot from './pages/forgot/Forgot';

function App() {
  return (
    <>
    {/* <Login/> */}
   
    {/* <div className={appstyle.appflex}> */}
    {/* <Sidebar/> */}
    <Routes>
      <Route path='/' element={<Digitalcard/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin/*' element={<AllRoutes/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
    </Routes>
    {/* </div> */}
    </>
  );
}

export default App;
