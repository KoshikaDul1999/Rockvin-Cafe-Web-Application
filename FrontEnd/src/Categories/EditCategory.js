import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';

export default function EditCategory() {
  let navigate = useNavigate();
  const { category_id } = useParams();

  const [category, setCategory] = useState({
    cate_name: '',
    cate_desc: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);
  const { cate_name, cate_desc } = category;
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!cate_name.trim()) {
      newErrors.cate_name = "Category name is required";
    }

    if (!cate_desc.trim()) {
      newErrors.cate_desc = "Category description is required";
    }

    setValidationErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  }

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
    try {
      await axios.put(`http://localhost:5000/categories/${category_id}`, category);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  }
  };

  const handleClose = () => {
    setIsUpdated(false);
    navigate('/category');
  };

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:5000/category/${category_id}`);
    setCategory(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit category
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Category Name"
              variant="outlined"
              fullWidth
              name="cate_name"
              value={cate_name}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.cate_name)}
              helperText={validationErrors.cate_name}
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
              error={Boolean(validationErrors.cate_desc)}
              helperText={validationErrors.cate_desc}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button component={Link} to="/category" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={isUpdated} onClose={handleClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography variant="body1" align="center">
            <FaCheckCircle style={{ marginRight: 5 }} />
            Successfully updated.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}






// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { TextField, Button, Typography, Container } from '@material-ui/core';

// export default function EditCategory() {
//   let navigate = useNavigate();
//   const { category_id } = useParams();

//   const [category, setCategory] = useState({
//     cate_id: '',
//     cate_name: '',
//     cate_desc: '',
//   });

//   const { cate_id, cate_name, cate_desc } = category;

//   const onInputChange = (e) => {
//     setCategory({ ...category, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadCategory();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:5000/categories/${category_id}`, category);
//     navigate('/category');
//   };

//   const loadCategory = async () => {
//     const result = await axios.get(`http://localhost:5000/category/${category_id}`);
//     setCategory(result.data);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Edit category
//       </Typography>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <TextField
//           label="Category ID"
//           variant="outlined"
//           fullWidth
//           name="cate_id"
//           value={cate_id}
//           onChange={(e) => onInputChange(e)}
//           margin="normal"
//         />
//         <TextField
//           label="Category Name"
//           variant="outlined"
//           fullWidth
//           name="cate_name"
//           value={cate_name}
//           onChange={(e) => onInputChange(e)}
//           margin="normal"
//         />
//         <TextField
//           label="Category Description"
//           variant="outlined"
//           fullWidth
//           name="cate_desc"
//           value={cate_desc}
//           onChange={(e) => onInputChange(e)}
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Update
//         </Button>
//         <Button component={Link} to="/category" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
//           Cancel
//         </Button>
//       </form>
//     </Container>
//   );
// }



// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios';

// export default function EditCategory() {

//     let navigate=useNavigate();

//     const {category_id}=useParams()

//     const [category,setCategory]=useState({
//         id:"",
//         title:"",
//         description:"",
//     });

//     const{id,title,description} = category;

//     const onInputChange = (e) => {
//         setCategory({...category, [e.target.name]: e.target.value});
//     };

//     useEffect(()=>{
//         loadCategory()
//     },[]);

//     const onSubmit=async (e) => {
//         e.preventDefault();
//         await axios.put(`http://localhost:5000/categories/${category_id}`,category);
//         navigate("/category")
//     };

//     const loadCategory =async ()=>{
//         const result=await axios.get(`http://localhost:5000/category/${category_id}`)
//         setCategory(result.data)
//     };

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-primary text-white'>
//                 <h2 className='text-center m-4'>Edit category</h2>

//                 <form onSubmit={(e)=>onSubmit(e)}>
//                     <div className='mb-3'>
//                         <label htmlFor="Name" className="form-label">
//                             Category ID
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Category Name"
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
//                             placeholder="Enter Category Name"
//                             name="title"
//                             value={title}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="Description" className="form-label">
//                         Category Description
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter category Discription"
//                             name="description"
//                             value={description}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-outline-success">
//                         Update
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
