import { Space } from "antd";
import './style.css';
import AppHeader from '../Components/AppHeader';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import AppFooter from '../Components/AppFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div className='Main'>
       {/*<AppHeader/>*/}
       <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
       </div> 
       {/*<AppFooter />*/}
    </div>
  );
}

export default Main;