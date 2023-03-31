import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { getComments, getOrders } from "../../API";
import { useEffect, useState } from "react";

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
                width={40}
                src="https://www.google.com/search?q=rockvin+cafe&tbm=isch&ved=2ahUKEwiWqIisidP9AhVG3XMBHTjWCuYQ2-cCegQIABAA&oq=rockvin+cafe&gs_lcp=CgNpbWcQAzIJCAAQgAQQChAYOgQIIxAnOgQIABBDOggIABCABBCxAzoFCAAQgARQ4wtYqkRgwUhoAHAAeACAAdwBiAHaEZIBBjAuMTEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=BwgMZNaIFca6z7sPuKyrsA4&bih=746&biw=1536#imgrc=P-isEsOesa3gyM"
            >
            </Image>
            <Typography.Title>RockVin Cafe and Surfer's Inn</Typography.Title>
            <Space>
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
            </Drawer>
        </div>
    );
}

export default AppHeader
