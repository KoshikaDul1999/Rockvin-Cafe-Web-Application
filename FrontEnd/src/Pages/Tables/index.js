import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Table() {

  const [tables,setTables]=useState([]);

  const {table_id}=useParams()

  useEffect(() => {
    loadTables();
  },[]);

  const loadTables = async () => {
    const result = await axios.get("http://localhost:5000/tables");
    setTables(result.data);
  };

    const deleteTable = async (table_id) => {
        // Show a confirmation popup
        const confirmDelete = window.confirm("Are you sure you want to delete this table?");
        if (confirmDelete) {
        // Delete the category
        await axios.delete(`http://localhost:5000/tables/${table_id}`);
        loadTables();
        } else {
        // Do not delete the category
        console.log("Table was not deleted.");
        }
    };
  
  return (
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
      <div>
        <Typography.Title level={4}>Our Tables</Typography.Title>
        {/* <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link> */}
        <div className="container">
          <div className="py-4">
            <table className="table border shadow-inner, table-primary">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Table Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Persons</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tables.map((table, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{table.table_name}</td>
                    <td>{table.table_price}</td>
                    <td>{table.persons}</td>
                    <td>{table.place_desc}</td>
                    <td>
                      <Link
                        className='btn btn-outline-primary mx-2'
                        to={`/edittable/${table.table_id}`}
                      >
                        Edit
                      </Link>

                      <button
                        className='btn btn-danger mx-2'
                        onClick={() => deleteTable(table.table_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;