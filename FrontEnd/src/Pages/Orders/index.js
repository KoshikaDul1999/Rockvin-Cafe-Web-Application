import { Typography, Modal  } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Order() {

    const [orders,setOrders]=useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

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

      const deleteOrder = async (orderid) => {
        const orderToDelete = orders.find((order) => order.orderid === orderid);
    
        if (!orderToDelete) {
          console.log("Order not found");
          return;
        }
    
        if (orderToDelete.status !== 2) {
          setErrorMessage("Order is not prepared. Cannot delete.");
          return;
        }
    
        setSelectedOrder(orderToDelete);
      };
    
      const confirmDelete = async () => {
        try {
          await axios.delete(`http://localhost:5000/OrderDetails/${selectedOrder.orderid}`);
          loadOrders();
        } catch (error) {
          console.log(error.message);
        } finally {
          setSelectedOrder(null);
        }
      };

    // const deleteOrder = async (orderid) => {
    //     // Show a confirmation popup
    //     const confirmDelete = window.confirm("Are you sure you want to delete this order");
    //     if (confirmDelete) {
    //     // Delete the category
    //     await axios.delete(`http://localhost:5000/OrderDetails/${orderid}`);
    //     loadOrders();
    //     } else {
    //     // Do not delete the category
    //     console.log("Order was not deleted.");
    //     }
    // };

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
                                <th scope="col">Status</th>
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
                                    <td>{orderdetails.status}</td>
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
            <Modal title="Error" visible={Boolean(errorMessage)} onCancel={() => setErrorMessage("")} footer={null}>
                {errorMessage}
            </Modal>
            <Modal title="Confirm Deletion" visible={Boolean(selectedOrder)} onCancel={() => setSelectedOrder(null)} onOk={confirmDelete}>
                Are you sure you want to delete this order?
            </Modal>
        </div>
    ); 
}
export default Order