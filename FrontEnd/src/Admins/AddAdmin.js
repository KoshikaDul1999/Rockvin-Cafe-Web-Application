import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { RollerSkating } from '@mui/icons-material';

export default function AddAdmin() {
  let navigate = useNavigate();

  const [systemusers, setSystemusers] = useState({
    sysusr_name: '',
    sysusr_email: '',
    sysusr_password: '',
    role: '',
  });

  const { sysusr_name, sysusr_email, sysusr_password, role } = systemusers;

  const onInputChange = (e) => {
    setSystemusers({ ...systemusers, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/admin', systemusers);
    navigate('/profile');
  };

  return (
    <Container maxWidth="md">
      <div className="row">
        <div className="col-md-12">
          <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-light text-white">
            <Typography variant="h4" align="center" gutterBottom>
              Register System User
            </Typography>

            <form onSubmit={(e) => onSubmit(e)}>
            {/* <TextField
                label="ID"
                fullWidth
                placeholder="Enter System User ID"
                name="sysusr_id"
                value={sysusr_id}
                onChange={(e) => onInputChange(e)}
                margin="normal"
              /> */}

              <TextField
                label="Name"
                fullWidth
                placeholder="Enter System User Name"
                name="sysusr_name"
                value={sysusr_name}
                onChange={(e) => onInputChange(e)}
                margin="normal"
              />

              <TextField
                label="Email"
                fullWidth
                placeholder="Enter System User Email "
                name="sysusr_email"
                value={sysusr_email}
                onChange={(e) => onInputChange(e)}
                margin="normal"
              />

              <TextField
                label="Password"
                fullWidth
                placeholder="Enter System User Password"
                name="sysusr_password"
                value={sysusr_password}
                onChange={(e) => onInputChange(e)}
                margin="normal"
              />

              <TextField
                label="Role"
                fullWidth
                placeholder="Enter System User Role"
                name="role"
                value={role}
                onChange={(e) => onInputChange(e)}
                margin="normal"
              />

              <Button
                type="submit"
                variant="outlined"
                color="primary"
                fullWidth
              >
                Submit
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/profile"
                fullWidth
              >
                Cancel
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}




// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// export default function AddAdmin() {

//     let navigate=useNavigate()

//     const [admin,setAdmin]=useState({
//         admin_name:"",
//         admin_username:"",
//         admin_email:"",
//         admin_password:"",
//     });

//     const{admin_name,admin_username,admin_email,admin_password} = admin;

//     const onInputChange = (e) => {
//         setAdmin({...admin, [e.target.name]: e.target.value});
//     };

//     const onSubmit=async (e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:8080/admin",admin)
//         navigate("/profile")
//     };

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-15 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white'>
//                 <h2 className='text-center m-4'>Register Admin</h2>

//                 <form onSubmit={(e)=>onSubmit(e)}>
//                     <div className='mb-3'>
//                         <label htmlFor="Name" className="form-label">
//                             Name
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Admin Name"
//                             name="admin_name"
//                             value={admin_name}
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
//                             placeholder="Enter Admin Username"
//                             name="admin_username"
//                             value={admin_username}
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
//                             placeholder="Enter Admin Email Address"
//                             name="admin_email"
//                             value={admin_email}
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
//                             placeholder="Enter Admin Password"
//                             name="admin_password"
//                             value={admin_password}
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
