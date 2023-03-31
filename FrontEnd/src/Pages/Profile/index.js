import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {

    const [admins,setAdmins]=useState([]);

    const {id}=useParams()

    useEffect(() => {
        loadAdmins();
    },[]);

    const loadAdmins = async () => {
        const result = await axios.get("http://localhost:8080/admins");
        setAdmins(result.data);
    };

    const deleteAdmin = async (id) => {
        const result = await axios.delete(`http://localhost:8080/admin/${id}`)
        loadAdmins()
    }

    return (
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
                            <th scope="col">User Name</th>
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
                                <td>{admin.admin_username}</td>
                                <td>{admin.admin_email}</td>
                                <td>{admin.admin_password}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2'
                                        to={`/viewadmin/${admin.id}`}
                                    >
                                        View
                                    </Link>

                                    <Link className='btn btn-outline-primary mx-2'
                                    to={`/editadmin/${admin.id}`}
                                    >
                                        Edit
                                    </Link>

                                    <button className='btn btn-danger mx-2'
                                        onClick={() => deleteAdmin(admin.id)}
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
    ); 
}
export default Profile