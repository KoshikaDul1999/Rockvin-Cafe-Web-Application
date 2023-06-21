import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Cutomer() {

    const [users,setUsers]=useState([]);

    const {user_id}=useParams()

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/user");
        setUsers(result.data);
    };

    const deleteUser = async (customer_id) => {
        const result = await axios.delete(`http://localhost:5000/user/${user_id}`)
        loadUsers();
    }

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
            <div>
                <Typography.Title level={4}>Our Users</Typography.Title>
                {/* <Link className='btn btn-primary' to="/addnewcategory">Add New Customer</Link> */}
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Customer Telephone</th>
                                <th scope="col">Customer First Name</th>
                                <th scope="col">Customer Last Name</th>
                                <th scope="col">Customer Address</th>
                                <th scope="col">Customer City</th>
                                <th scope="col">Customer Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{user.phoneno}</td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.address}</td>
                                    <td>{user.city}</td>
                                    <td>{user.emailaddress}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewcategory/${user.userid}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editcategory/${user.userid}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteUser(user.userid)}
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