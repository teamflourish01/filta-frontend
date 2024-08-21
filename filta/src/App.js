import logo from './logo.svg';
import appstyle from './app.module.css';
import Mycard from './pages/mycard/Mycard';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div className={appstyle.appflex}>
    <Sidebar/>
    <Mycard/>
    </div>
  );
}

export default App;
