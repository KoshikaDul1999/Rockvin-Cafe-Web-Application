import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';
import axios from 'axios';

export default function AddCategory() {
  let navigate = useNavigate();

  const [category, setCategory] = useState({
    cate_id: '',
    cate_name: '',
    cate_desc: '',
  });

  const { cate_id, cate_name, cate_desc } = category;

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/category', category);
    navigate('/category');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add new Category
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Category ID"
              variant="outlined"
              fullWidth
              name="cate_id"
              value={cate_id}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Category Name"
              variant="outlined"
              fullWidth
              name="cate_name"
              value={cate_name}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Category Description"
              variant="outlined"
              fullWidth
              name="cate_desc"
              value={cate_desc}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              ADD
            </Button>
            <Button component={Link} to="/category" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}



// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// export default function AddCategory() {

//     let navigate=useNavigate()

//     const [category,setCategory]=useState({
//         id:"",
//         title:"",
//         description:"",
//     });

//     const{id,title,description} = category;

//     const onInputChange = (e) => {
//         setCategory({...category, [e.target.name]: e.target.value});
//     };

//     const onSubmit=async (e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:5000/category",category)
//         navigate("/category")
//     };

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-15 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-primary text-white'>
//                 <h2 className='text-center m-4'>Add new Category</h2>

//                 <form onSubmit={(e)=>onSubmit(e)}>
//                     <div className='mb-3'>
//                         <label htmlFor="ID" className="form-label">
//                             Category ID
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter category ID"
//                             name="id"
//                             value={id}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="Name" className="form-label">
//                             Category Name
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter category Name"
//                             name="title"
//                             value={title}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="Username" className="form-label">
//                             Category Description
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter category Description"
//                             name="description"
//                             value={description}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-outline-success">
//                         ADD
//                     </button>
//                     <Link className="btn btn-outline-danger mx-2" to="/category">
//                         Cancel
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }
