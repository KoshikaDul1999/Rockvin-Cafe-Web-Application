import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Profile() {

    const [admins,setAdmins]=useState([]);

    const {admin_id}=useParams()

    useEffect(() => {
        loadAdmins();
    },[]);

    const loadAdmins = async () => {
        const result = await axios.get("http://localhost:5000/admins");
        setAdmins(result.data);
    };

    const deleteAdmin = async (id) => {
        const result = await axios.delete(`http://localhost:8080/admin/${id}`)
        loadAdmins()
    }



    const [chefs,setChefs]=useState([]);

    const {chef_id}=useParams()

    useEffect(() => {
        loadChefs();
    },[]);

    const loadChefs = async () => {
        const result = await axios.get("http://localhost:5000/chefs");
        setChefs(result.data);
    };

    const deleteChef = async (chef_id) => {
        const result = await axios.delete(`http://localhost:5000/chef/${chef_id}`)
        loadChefs()
    }



    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>

            <div>
                <Typography.Title level={4}>Admin Profile</Typography.Title>
                <Link className='btn btn-dark' to="/addnewadmin">Add New Admin</Link>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            admins.map((admin,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{admin.admin_name}</td>
                                    <td>{admin.admin_email}</td>
                                    <td>{admin.admin_password}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewadmin/${admin.admin_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editadmin/${admin.admin_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteAdmin(admin.admin_id)}
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
                <Typography.Title level={4}>Chef Profile</Typography.Title>
                <Link className='btn btn-info' to="/addnewchef">Add New Chef</Link>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-info">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Password</th>
                                <th scope="col">Address</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            chefs.map((chef,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{chef.name}</td>
                                    <td>{chef.email}</td>
                                    <td>{chef.password}</td>
                                    <td>{chef.address}</td>
                                    <td>{chef.telephone}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewchef/${chef.chef_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editchef/${chef.chef_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteChef(chef.chef_id)}
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
export default Profile