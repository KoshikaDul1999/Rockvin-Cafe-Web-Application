import { Space } from "antd";
import './App.css';
import Login from './Login';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Login />
       <AppHeader/>
       <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
       </div> 
       <AppFooter />
    </div>
  );
}

export default App;
