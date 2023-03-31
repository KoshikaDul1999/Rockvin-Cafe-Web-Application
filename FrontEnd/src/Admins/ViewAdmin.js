import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewAdmin() {

    const [admin,setAdmin]=useState({
        admin_name:"",
        admin_username:"",
        admin_email:"",
        admin_password:"",
    });

    const {id}=useParams();

    useEffect(()=>{
        loadAdmin()
    },[])

    const loadAdmin = async () => {
        const result=await axios.get(`http://localhost:8080/admin/${id}`)
        setAdmin(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white'>
                <h2 className='text-center m-4'>Admin Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of Admin Id : {admin.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name : </b>
                                {admin.admin_name}
                            </li>
                            <li className='list-group-item'>
                                <b>UserName : </b>
                                {admin.admin_username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email : </b>
                                {admin.admin_email}
                            </li>
                            <li className='list-group-item'>
                                <b>Password : </b>
                                {admin.admin_password}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/profile"}>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  )
}
