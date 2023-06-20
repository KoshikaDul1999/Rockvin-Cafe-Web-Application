import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Order() {

    const [orders,setOrders]=useState([]);

    const {orderid}=useParams()

    useEffect(() => {
        loadOrders();
    },[]);

    const loadOrders = async () => {
        const result = await axios.get("http://localhost:5000/OrderDetails");
        setOrders(result.data);
    };

    const deleteOrder = async (orderid) => {
        const result = await axios.delete(`http://localhost:5000/OrderDetails/${orderid}`)
        loadOrders()
    }

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
            <div>
                <Typography.Title level={4}>Our Orders</Typography.Title>
                {/* <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link> */}
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Food Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">time</th>
                                <th scope="col">pickup_time</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map((orderdetails,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{orderdetails.orderid}</td>
                                    <td>{orderdetails.foodid}</td>
                                    <td>{orderdetails.quantity}</td>
                                    <td>{orderdetails.price}</td>
                                    <td>{orderdetails.status}</td>
                                    <td>{orderdetails.time}</td>
                                    <td>{orderdetails.pickup_time}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/vieworder/${orderdetails.orderid}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editorder/${orderdetails.orderid}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteOrder(orderdetails.orderid)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr> 
                            ))
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
export default Order