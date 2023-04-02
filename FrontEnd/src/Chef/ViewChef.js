import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewChef() {

    const [chef,setChef]=useState({
        chef_name:"",
        chef_username:"",
        chef_email:"",
        chef_password:"",
    });

    const {chef_id}=useParams();

    useEffect(()=>{
        loadChef()
    },[])

    const loadChef = async () => {
        const result=await axios.get(`http://localhost:8080/chef/${chef_id}`)
        setChef(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white'>
                <h2 className='text-center m-4'>Chef Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of Chef Id : {chef.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Chef Name : </b>
                                {chef.chef_name}
                            </li>
                            <li className='list-group-item'>
                                <b>Chef UserName : </b>
                                {chef.chef_username}
                            </li>
                            <li className='list-group-item'>
                                <b>Chef Email : </b>
                                {chef.chef_email}
                            </li>
                            <li className='list-group-item'>
                                <b>Chef Password : </b>
                                {chef.chef_password}
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
