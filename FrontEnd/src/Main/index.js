import { Space } from "antd";
import '../Main/style.css';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <div className='App'>
       <AppHeader/>
       <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
       </div> 
       <AppFooter />
    </div>
  );
}

export default Main;