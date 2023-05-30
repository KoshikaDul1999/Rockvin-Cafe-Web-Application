import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Category() {

    const [categories,setCategories]=useState([]);

    const {category_id}=useParams()

    useEffect(() => {
        loadCategories();
    },[]);

    const loadCategories = async () => {
        const result = await axios.get("http://localhost:5000/categories");
        setCategories(result.data);
    };

    const deleteCategory = async (category_id) => {
        const result = await axios.delete(`http://localhost:5000/category/${category_id}`)
        loadCategories()
    }

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
            <div>
                <Typography.Title level={4}>Our Category</Typography.Title>
                <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Category Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            categories.map((food_types,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{food_types.title}</td>
                                    <td>{food_types.description}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewcategory/${food_types.id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editcategory/${food_types.id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteCategory(food_types.id)}
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
export default Category