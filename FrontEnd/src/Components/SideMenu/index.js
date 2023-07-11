import { Menu } from "antd";
import { AppstoreOutlined, MenuFoldOutlined, ShoppingCartOutlined, UserOutlined, DesktopOutlined, FileDoneOutlined, IdcardOutlined, HolderOutlined, ShopOutlined, CoffeeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SideMenu(){
    const location = useLocation()
    const [selectedKeys, setSelectedKeys] = useState('/')

    useEffect(() => {
      const pathName = location.pathname
      setSelectedKeys(pathName)
    }, [location.pathname])
    

    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            <Menu
            className="SideMenuVertical"
            mode="vertical"
            onClick={(item)=>{
                //item.key
                navigate(item.key);
            }}
                selectedKeys={[selectedKeys]}
                items={[
                {
                    label: "Dashboard",
                    icon: <AppstoreOutlined />,
                    key:'/dashboard',
                }, 
                {
                    label: "Menu",
                    icon: <MenuFoldOutlined />,
                    key:'/menu',
                },
                {
                    label: "Category",
                    icon: <HolderOutlined />,
                    key:'/category',
                },
                {
                    label: "POS",
                    icon: <DesktopOutlined />,
                    key:'/productView',
                },
                {
                    label: "Orders",
                    icon: <ShoppingCartOutlined />,
                    key:'/orders',
                },
                {
                    label: "Customers",
                    icon: <UserOutlined />,
                    key:'/customers',
                },
                // {
                //     label: "Recomended Foods",
                //     icon: <ShopOutlined />,
                //     key:'/recomendedfoods',
                // },
                // {
                //     label: "Offer Foods",
                //     icon: <CoffeeOutlined />,
                //     key:'/offerfoods',
                // },
                {
                    label: "Reports",
                    icon: <FileDoneOutlined />,
                    key:'/reports',
                },
                {
                    label: "Profile",
                    icon: <IdcardOutlined />,
                    key:'/profile',
                },
                ]}
            ></Menu>
            <div>
                <button>Log out</button>
            </div>
        </div>
    );
}

export default SideMenu
