import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Cutomer() {

    const [customers,setCustomers]=useState([]);

    const {customer_id}=useParams()

    useEffect(() => {
        loadCustomers();
    },[]);

    const loadCustomers = async () => {
        const result = await axios.get("http://localhost:5000/customers");
        setCustomers(result.data);
    };

    const deleteCustomer = async (customer_id) => {
        const result = await axios.delete(`http://localhost:5000/customer/${customer_id}`)
        loadCustomers();
    }

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
            <div>
                <Typography.Title level={4}>Our Customers</Typography.Title>
                <Link className='btn btn-primary' to="/addnewcategory">Add New Customer</Link>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Customer Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            customers.map((customer,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{customer.cate_name}</td>
                                    <td>{customer.cate_desc}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewcategory/${customer.cate_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editcategory/${customer.cate_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteCustomer(customer.cate_id)}
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
export default Cutomer