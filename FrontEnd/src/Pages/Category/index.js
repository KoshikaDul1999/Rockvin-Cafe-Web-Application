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
        const result = await axios.get("http://localhost:8080/categories");
        setCategories(result.data);
    };

    const deleteCategory = async (category_id) => {
        const result = await axios.delete(`http://localhost:8080/category/${category_id}`)
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
                            categories.map((category,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{category.category_name}</td>
                                    <td>{category.category_desc}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewcategory/${category.category_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editcategory/${category.category_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteCategory(category.category_id)}
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