import { Typography, Pagination } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Product() {

    const [products,setProducts]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const {product_id}=useParams()

    useEffect(() => {
        loadProducts();
    },[]);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:5000/foods");
        setProducts(result.data);
    };

    const deleteProduct = async (product_id) => {
        const result = await axios.delete(`http://localhost:5000/foods/${product_id}`)
        loadProducts()
    };

    // Pagination change event handler
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate start and end index of products for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the products array based on the current page
    const currentProducts = products.slice(startIndex, endIndex);
    const firstFiveProducts = currentProducts.slice(0, 5); // Get the first five products

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>

            <div>
                <Typography.Title level={4}> Our Products</Typography.Title>
                <Link className='btn btn-primary' to="/addnewproduct">Add New product</Link>
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow-inner, table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Product Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            firstFiveProducts.map((foods, index) =>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{foods.name}</td>
                                    <td>{foods.img}</td>
                                    <td>{foods.price}</td>
                                    {/*<td>{foods.product_desc}</td>*/}
                                    <td>{foods.type_id}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewproduct/${foods.id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editproduct/${foods.id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteProduct(foods.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr> 
                            ))
                            
                        }
                        </tbody>
                        </table>
                        {/* Pagination component */}
                        <Pagination
                            current={currentPage}
                            total={products.length}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    ); 
}
export default Product


/*import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import { Link } from 'react-router-dom'

function Menu() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    
    useEffect(() => {
        setLoading(true)
        getInventory().then(res=>{
            setDataSource(res.products)
            setLoading(false);
        })
    }, [])
    
    return (
        <Space size={20} direction='vertical'>
            <Typography.Title level={4}>Menu List</Typography.Title>
            <Link className='btn btn-warning' to="/addnewmenu">Add New Menu</Link>
            <Table 
                loading={loading}
                columns={[
                    {
                        title:"TiTle",
                        dataIndex:'title',
                    },
                    {
                        title:"Price",
                        dataIndex:'price',
                        render:(value)=><span>Rs.{value}</span>
                    },
                    {
                        title:"Rating",
                        dataIndex:'rating',
                        render:(rating)=>{
                            return <Rate value={rating} allowHalf disabled/>
                        } 
                    },
                    {
                        title:"Stock",
                        dataIndex:'stock',
                    },
                    {
                        title:"Thumbnail",
                        dataIndex:'thumbnail',
                        render:(link)=>{
                            return <Avatar src={link} />
                        }
                    },
                    {
                        title:"Brand",
                        dataIndex:'brand',
                    },
                    {
                        title:"Category",
                        dataIndex:'category',
                    },
            ]}
            dataSource={dataSource}
            pagination={{
                pageSize: 6,
            }}
            ></Table>
        </Space>
    ); 
}
export default Menu;*/