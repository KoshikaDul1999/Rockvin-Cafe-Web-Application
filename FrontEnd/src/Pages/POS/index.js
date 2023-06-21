import { Typography } from "antd";
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

import POSDashboard from "./dashboard";
// import ProductView from './productView.jsx';
// import Cart from './cart';



function POS() {
    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>

            <div>
                <Typography.Title level={4}>Point Of Sales</Typography.Title>
                <POSDashboard />
                {/* <ProductView/>
                <Cart/> */}
                
            </div>

        </div>
    ); 
}


export default POS