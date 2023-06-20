import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Card, CardHeader } from '@material-ui/core';

export default function AddChef() {
  let navigate = useNavigate();

  const [chef, setChef] = useState({
    chef_id: '',
    chef_name: '',
    chef_email: '',
    chef_password: '',
    chef_address: '',
    chef_telephone: '',
  });

  const { chef_id, chef_name, chef_email, chef_password, chef_address, chef_telephone } = chef;

  const onInputChange = (e) => {
    setChef({ ...chef, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/chef', chef);
    navigate('/profile');
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Register Chef</Typography>} />
        <form onSubmit={(e) => onSubmit(e)} style={{ padding: '1rem' }}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label="Chef ID"
                placeholder="Enter Chef ID"
                name="chef_id"
                value={chef_id}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Chef Name"
                placeholder="Enter Chef Name"
                name="chef_name"
                value={chef_name}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Chef Email"
                placeholder="Enter Chef Email Address"
                name="chef_email"
                value={chef_email}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                placeholder="Enter Chef Password"
                name="chef_password"
                value={chef_password}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                placeholder="Enter Chef Address"
                name="chef_address"
                value={chef_address}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telephone"
                placeholder="Enter Chef Telephone"
                name="chef_telephone"
                value={chef_telephone}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button component={Link} to="/profile" variant="contained" color="secondary" style={{ marginLeft: '1rem' }}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}




// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// export default function AddChef() {

//     let navigate=useNavigate()

//     const [chef,setChef]=useState({
//         chef_name:"",
//         chef_username:"",
//         chef_email:"",
//         chef_password:"",
//     });

//     const{chef_name,chef_username,chef_email,chef_password} = chef;

//     const onInputChange = (e) => {
//         setChef({...chef, [e.target.name]: e.target.value});
//     };

//     const onSubmit=async (e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:8080/chef",chef)
//         navigate("/profile")
//     };

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-15 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white'>
//                 <h2 className='text-center m-4'>Register Chef</h2>

//                 <form onSubmit={(e)=>onSubmit(e)}>
//                     <div className='mb-3'>
//                         <label htmlFor="Name" className="form-label">
//                             Name
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Chef Name"
//                             name="chef_name"
//                             value={chef_name}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="Username" className="form-label">
//                             Username
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Chef Username"
//                             name="chef_username"
//                             value={chef_username}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="Email" className="form-label">
//                             E-Mail
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Chef Email Address"
//                             name="chef_email"
//                             value={chef_email}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="Email" className="form-label">
//                             Password
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Chef Password"
//                             name="chef_password"
//                             value={chef_password}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-outline-primary">
//                         Submit
//                     </button>
//                     <Link className="btn btn-outline-danger mx-2" to="/profile">
//                         Cancel
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }
