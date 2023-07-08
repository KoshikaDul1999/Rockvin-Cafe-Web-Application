import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Profile() {

    // const [admins,setAdmins]=useState([]);

    // const {admin_id}=useParams()

    // useEffect(() => {
    //     loadAdmins();
    // },[]);

    // const loadAdmins = async () => {
    //     const result = await axios.get("http://localhost:5000/admins");
    //     setAdmins(result.data);
    // };

    // const deleteAdmin = async (id) => {
    //     const result = await axios.delete(`http://localhost:5000/admin/${id}`)
    //     loadAdmins()
    // }



    const [chefs,setChefs]=useState([]);

    const {chef_id}=useParams()

    useEffect(() => {
        loadChefs();
    },[]);

    const loadChefs = async () => {
        const result = await axios.get("http://localhost:5000/chefs");
        setChefs(result.data);
    };

    const deleteChef = async (id) => {
        const result = await axios.delete(`http://localhost:5000/chef/${id}`)
        loadChefs()
    }



    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>

            <div>
                {/* <Typography.Title level={4}>System User Profiles</Typography.Title>
                <Link className='btn btn-dark' to="/addnewadmin">Add New System User</Link>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Password</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            admins.map((systemuser,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{systemuser.sysusr_name}</td>
                                    <td>{systemuser.sysusr_email}</td>
                                    <td>{systemuser.sysusr_password}</td>
                                    <td>{systemuser.role}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewadmin/${systemuser.sysusr_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editadmin/${systemuser.sysusr_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteAdmin(systemuser.sysusr_id)}
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
                </div> */}
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
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            chefs.map((systemuser,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{systemuser.sysusr_name}</td>
                                    <td>{systemuser.sysusr_email}</td>
                                    <td>{systemuser.sysusr_password}</td>
                                    <td>{systemuser.role}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewchef/${systemuser.sysusr_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editchef/${systemuser.sysusr_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteChef(systemuser.sysusr_id)}
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