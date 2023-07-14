import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined, ContainerOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd"
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';
import axios from "axios";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Dashboard() {

    const [orders, setOrders] = useState(0);
    const [categories, setCategories] = useState(0);
    const [menu, setInventry] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {

        axios
            .get("http://localhost:5000/OrderDetailsCount")
            .then((res) => {
                setOrders(res.data.count);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get("http://localhost:5000/CategoryCount")
            .then((res) => {
                setCategories(res.data.count);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get("http://localhost:5000/FoodsCount")
            .then((res) => {
                setInventry(res.data.count);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get("http://localhost:5000/CustomersCount")
            .then((res) => {
                setCustomers(res.data.count);
            })
            .catch((error) => {
                console.log(error);
            })

      getOrders().then((res) => {
        setRevenue(res.discountedTotal);
      });
    }, []);
    

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
       
            <Space size={20} direction="vertical">
                <Typography.Title level={4}>Admin Dashboard</Typography.Title>
                <Space direction="horizontal">
                    <DashboardCard icon={
                        <ShoppingCartOutlined 
                            style={{ 
                                color: "green", 
                                backgroundColor:"rgba(0,255,0,0.25",
                                borderRadius: 20, 
                                fontSize: 24,
                                padding: 18,
                            }}
                        />
                        } 
                        title={
                            <Typography.Text strong style={{ fontSize: 16 }}>
                                Orders
                            </Typography.Text>
                        } 
                        value={orders} 
                    />
                    <DashboardCard icon={
                        <ContainerOutlined 
                            style={{ 
                                color: "yellow", 
                                backgroundColor:"rgba(0,0,255,0.25",
                                borderRadius: 20, 
                                fontSize: 24,
                                padding: 18,
                            }}
                        />
                    } 
                        title={
                            <Typography.Text strong style={{ fontSize: 16 }}>
                                Categories
                            </Typography.Text>
                        } 
                        value={categories} 
                    />
                    <DashboardCard icon={
                        <ShoppingOutlined 
                            style={{ 
                                color: "purple", 
                                backgroundColor:"rgba(0,255,255,0.25",
                                borderRadius: 20, 
                                fontSize: 24,
                                padding: 18,
                            }}
                        />
                    } 
                        title={
                            <Typography.Text strong style={{ fontSize: 16 }}>
                                Menus
                            </Typography.Text>
                        } 
                        value={menu} 
                    />

                    <DashboardCard icon={
                        <UserOutlined 
                            style={{ 
                                color: "red", 
                                backgroundColor:"rgba(255,0,0,0.25",
                                borderRadius: 20, 
                                fontSize: 24,
                                padding: 18,
                            }}
                        />
                    } 
                        title={
                            <Typography.Text strong style={{ fontSize: 16 }}>
                                Customers
                            </Typography.Text>
                        } 
                        value={customers} 
                    />

                    <DashboardCard icon={
                        <DollarCircleOutlined 
                            style={{ 
                                color: "blue", 
                                backgroundColor:"rgba(0,0,255,0.25",
                                borderRadius: 20, 
                                fontSize: 24,
                                padding: 18,
                            }}
                        />
                    } 
                        title={
                            <Typography.Text strong style={{ fontSize: 16 }}>
                                Revenue
                            </Typography.Text>
                        } 
                        value={revenue} 
                    />  
                </Space>
                <Space>
                    <RecentOrders />
                    <DashboardChart />
                </Space>
            </Space>

        </div> 
    ); 
}

function DashboardCard({title,value ,icon}){
    return (
        <Card>
        <Space direction="horizontal">
            {icon}
            <Statistic title={title} value={value} />
        </Space>
        </Card>
    );
}

function RecentOrders() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true);
        getOrders().then(res=>{
            setDataSource(res.products.splice(0, 3));
            setLoading(false);
        });  
    }, []);

    return (
        <>
        <Typography.Text>Recent Orders</Typography.Text>
        <Table
            columns={[
                {
                    title: "Title",
                    dataIndex: "title",
                },
                {
                    title: "Quantity",
                    dataIndex: "quantity",
                },
                {
                    title: "Price",
                    dataIndex: "price",
                    render:(value)=><span>Rs.{value}</span>
                },
            ]}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
        ></Table>
        </>
    );
}

function DashboardChart(){

    const [revenueData, setRevenueData] = useState({
        labels:[],
        datasets:[],
    });

    useEffect(() => {
        getRevenue().then((res) => {
            const labels = res.carts.map((cart) => {
                return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
                return cart.discountedTotal;
            });

            const dataSource = {
                labels,
                datasets: [
                  {
                    label: "Revenue",
                    data: data,
                    backgroundColor: "rgba(255, 0, 0, 1 )",
                  },
                ],
              };

              setRevenueData(dataSource);

        });
    }, []);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Order Revenue',
          },
        },
      };

    return (
        <Card style={{width: 500, height:350}}>
            <Bar options={options} data={revenueData} />;
        </Card>
    );
}

export default Dashboard;