import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Customer() {

    const [users,setUsers]=useState([]);

    const {user_id}=useParams()

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/user");
        setUsers(result.data);
    };

    // const deleteUser = async (user_id) => {
    //     const result = await axios.delete(`http://localhost:5000/user/${user_id}`)
    //     loadUsers();
    // }

    const deleteUser = async (user_id) => {
        // Show a confirmation popup
        const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
        if (confirmDelete) {
        // Delete the category
        await axios.delete(`http://localhost:5000/user/${user_id}`);
        loadUsers();
        } else {
        // Do not delete the category
        console.log("Customer was not deleted.");
        }
    };

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
            <div>
                <Typography.Title level={4}>Our Users</Typography.Title>
                {/* <Link className='btn btn-primary' to="/addnewcustomer">Add New Customer</Link> */}
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Customer First Name</th>
                                <th scope="col">Customer Telephone</th>
                                <th scope="col">Customer Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{user.fname}</td>
                                    <td>{user.phoneno}</td>
                                    <td>{user.emailaddress}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewcustomer/${user.userid}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editcustomer/${user.userid}`}
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
export default Customer