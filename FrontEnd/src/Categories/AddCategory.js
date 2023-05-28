import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AddCategory() {

    let navigate=useNavigate()

    const [category,setCategory]=useState({
        category_name:"",
        category_desc:"",
    });

    const{category_name,category_desc} = category;

    const onInputChange = (e) => {
        setCategory({...category, [e.target.name]: e.target.value});
    };

    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/category",category)
        navigate("/category")
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-15 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-primary text-white'>
                <h2 className='text-center m-4'>Register category</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor="Name" className="form-label">
                            Category Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter category Name"
                            name="category_name"
                            value={category_name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Username" className="form-label">
                            Category Description
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter category Description"
                            name="category_desc"
                            value={category_desc}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-success">
                        ADD
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/category">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
