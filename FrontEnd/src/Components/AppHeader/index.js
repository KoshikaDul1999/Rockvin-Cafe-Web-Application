import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { getComments, getOrders } from "../../API";
import { useEffect, useState } from "react";
import img1 from "../../Images/logo/res-logo.png";
const { Text, Link } = Typography;

function AppHeader(){
    const [comments, setComments] = useState([])
    const [orders, setOrders] = useState([])
    const [commentsOpen, setCommentsOpen] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    useEffect(() => {
      getComments().then(res=>{
        setComments(res.comments)
      });

      getOrders().then(res=>{
        setOrders(res.products)
      });

    }, [])
    

    return (
        <div className="AppHeader">
            <Image
                width={100}
                height={80}
                src={img1}
            >
            </Image>
            <Typography.Title strong type="warning">RockVin Cafe and Surfer's Inn</Typography.Title>
            {/* <Space>
                <Badge count={comments.length} dot>
                    <MailOutlined style={{ fontSize: 24 }} 
                        onClick={() => {
                            setCommentsOpen(true);
                        }}
                    />
                </Badge>
                <Badge count={orders.length}>
                    <BellFilled style={{ fontSize: 24 }}
                        onClick={() => {
                            setNotificationsOpen(true);
                        }}
                    />
                </Badge>
            </Space>
            <Drawer title="Comments" 
                open={commentsOpen} 
                onClose={()=>{
                    setCommentsOpen(false);
                }}
                maskClosable>
                <List 
                    dataSource={comments} 
                    renderItem={(item)=>{
                        return<List.Item>{item.body}</List.Item>
                    }}
                ></List>
            </Drawer>
            <Drawer title="Notifications" 
                open={notificationsOpen} 
                onClose={()=>{
                    setNotificationsOpen(false);
                }}
                maskClosable>
                <List
                    dataSource={orders} 
                    renderItem={(item)=>{
                        return (
                            <List.Item>
                                <Typography.Text strong>{item.title}</Typography.Text>{" "}
                                has been ordered!
                            </List.Item>
                        );
                    }}
                ></List>
            </Drawer> */}
            <div>
                <button className="btn btn-danger btn-sm">Log out</button>
            </div>
        </div>
    );
}

export default AppHeader
