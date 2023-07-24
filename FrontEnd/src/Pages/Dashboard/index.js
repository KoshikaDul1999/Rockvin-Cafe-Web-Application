import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined, ContainerOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd"
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
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
        
        axios
            .get("http://localhost:5000/api/sales/total")
            .then((res) => {
              const totalRevenue = res.data.totalSalesAmount;
              setRevenue(totalRevenue);
            })
            .catch((error) => {
              console.log(error);
            })   
      
    }, []);    

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
       
            <Space size={20} direction="vertical">
                <Typography.Title level={3}>Admin Dashboard</Typography.Title>
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
    // const [dataSource, setDataSource] = useState([])
    // const [loading, setLoading] = useState(false) 

    // useEffect(() => {
    //     setLoading(true);
    //     getOrders().then(res=>{
    //         setDataSource(res.products.splice(0, 3));
    //         setLoading(false);
    //     });  
    // }, []);

    // return (
    //     <>
    //     <Typography.Text strong style={{ fontSize: 18 }}>Recent Orders</Typography.Text>
    //     <Table
    //         columns={[
    //             {
    //                 title: "Title",
    //                 dataIndex: "title",
    //             },
    //             {
    //                 title: "Quantity",
    //                 dataIndex: "quantity",
    //             },
    //             {
    //                 title: "Price",
    //                 dataIndex: "price",
    //                 render:(value)=><span>Rs.{value}</span>
    //             },
    //         ]}
    //         loading={loading}
    //         dataSource={dataSource}
    //         pagination={false}
    //     ></Table>
    //     </>
    // );
    const [orders,setOrders]=useState([]);
    const { orderid }=useParams()

    useEffect(() => {
        loadOrders();
    },[]);

    const loadOrders = async () => {
        try {
          const result = await axios.get("http://localhost:5000/OrderDetails");
          const orders = result.data;
          // Fetch food details for each order
          const orderDetailsWithFood = await Promise.all(
            orders.map(async (order) => {
              const foodResult = await axios.get(`http://localhost:5000/Foods/${order.food_id}`);
              const food = foodResult.data;
              return { ...order, food_name: food.food_name };
            })
          );
          setOrders(orderDetailsWithFood);
        } catch (error) {
          console.log(error.message);
        }
      };
      
    return (
            <div>
                <Typography.Title level={4}>Recent Orders</Typography.Title>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Food Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map((orderdetails,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{orderdetails.food_name}</td>
                                    <td>{orderdetails.quantity}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/vieworder/${orderdetails.orderid}`}
                                        >
                                            Show
                                        </Link>

                                    </td>
                                </tr> 
                            ))
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
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