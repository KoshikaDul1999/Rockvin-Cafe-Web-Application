import { Typography, Pagination } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Product() {

    const [recproducts,setRecProducts]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const {rec_id}=useParams()

    useEffect(() => {
        loadRecProducts();
    },[]);

    const loadRecProducts = async () => {
        const result = await axios.get("http://localhost:5000/recomended_foods");
        setRecProducts(result.data);
    };

    const deleteRecProduct = async (rec_id) => {
        const result = await axios.delete(`http://localhost:5000/recomended_foods/${rec_id}`)
        loadRecProducts()
    };

    // Pagination change event handler
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate start and end index of products for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the products array based on the current page
    const currentRecProducts = recproducts.slice(startIndex, endIndex);
    const firstFiveRecProducts = currentRecProducts.slice(0, 5); // Get the first five products

    return (
        <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>

            <div>
                <Typography.Title level={4}> Recomended Products</Typography.Title>
                <Link className='btn btn-primary' to="/addnewrecomendedproduct">Add recomended product</Link>
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
                            firstFiveRecProducts.map((recomended_foods, index) =>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{recomended_foods.rec_name}</td>
                                    <td>{recomended_foods.rec_img}</td>
                                    <td>{recomended_foods.rec_price}</td>
                                    {/*<td>{foods.product_desc}</td>*/}
                                    <td>{recomended_foods.type_id}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewrecomendedproduct/${recomended_foods.rec_id}`}
                                        >
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                        to={`/editrecomendedproduct/${recomended_foods.rec_id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteRecProduct(recomended_foods.rec_id)}
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
                            total={recproducts.length}
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
