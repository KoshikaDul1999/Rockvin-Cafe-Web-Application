import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd"
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

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
    const [menu, setInventry] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
      getOrders().then((res) => {
        setOrders(res.total);
      });

      getInventory().then((res) => {
        setInventry(res.total);
      });

      getCustomers().then((res) => {
        setCustomers(res.total);
      });

      getOrders().then((res) => {
        setRevenue(res.discountedTotal);
      });
    }, []);
    

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard icon={
                    <ShoppingCartOutlined 
                        style={{ 
                            color: "green", 
                            backgroundColor:"rgba(0,255,0,0.25",
                            borderRadius: 20, 
                            fontSize: 24,
                            padding: 8,
                        }}
                    />
                    } 
                    title={"Orders"} 
                    value={orders} 
                />

                <DashboardCard icon={
                    <ShoppingOutlined 
                        style={{ 
                            color: "purple", 
                            backgroundColor:"rgba(0,255,255,0.25",
                            borderRadius: 20, 
                            fontSize: 24,
                            padding: 8,
                        }}
                    />
                } 
                    title={"Menus"} 
                    value={menu} 
                />

                <DashboardCard icon={
                    <UserOutlined 
                        style={{ 
                            color: "red", 
                            backgroundColor:"rgba(255,0,0,0.25",
                            borderRadius: 20, 
                            fontSize: 24,
                            padding: 8,
                        }}
                    />
                } 
                    title={"Customers"} 
                    value={customers} 
                />

                <DashboardCard icon={
                    <DollarCircleOutlined 
                        style={{ 
                            color: "blue", 
                            backgroundColor:"rgba(0,0,255,0.25",
                            borderRadius: 20, 
                            fontSize: 24,
                            padding: 8,
                        }}
                    />
                } 
                    title={"Revenue"} 
                    value={revenue} 
                />  
            </Space>
            <Space>
                <RecentOrders />
                <DashboardChart />
            </Space>
        </Space>
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