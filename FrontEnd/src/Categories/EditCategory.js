import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function EditCategory() {

    let navigate=useNavigate();

    const {category_id}=useParams()

    const [category,setCategory]=useState({
        id:"",
        title:"",
        description:"",
    });

    const{id,title,description} = category;

    const onInputChange = (e) => {
        setCategory({...category, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadCategory()
    },[]);

    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/categories/${category_id}`,category);
        navigate("/category")
    };

    const loadCategory =async ()=>{
        const result=await axios.get(`http://localhost:5000/category/${category_id}`)
        setCategory(result.data)
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-primary text-white'>
                <h2 className='text-center m-4'>Edit category</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor="Name" className="form-label">
                            Category ID
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Category Name"
                            name="id"
                            value={id}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Name" className="form-label">
                            Category Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Category Name"
                            name="title"
                            value={title}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Description" className="form-label">
                        Category Description
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter category Discription"
                            name="description"
                            value={description}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-success">
                        Update
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
