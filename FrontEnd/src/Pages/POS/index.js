import { Typography } from "antd";
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function POS() {
    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>

            <div>
                <Typography.Title level={4}>POS</Typography.Title>
            </div>

        </div>
    ); 
}
export default POS