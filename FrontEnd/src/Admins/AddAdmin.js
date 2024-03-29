import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';
import { RollerSkating } from '@mui/icons-material';

export default function AddAdmin() {
  let navigate = useNavigate();

  const [systemusers, setSystemusers] = useState({
    sysusr_name: '',
    sysusr_email: '',
    sysusr_password: '',
    role: '',
  });

  const [isAdded, setIsAdded] = useState(false);

  const { sysusr_name, sysusr_email, sysusr_password, role } = systemusers;
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!sysusr_name.trim()) {
      newErrors.sysusr_name = " Name is required";
    }

    if (!sysusr_email.trim()){
      newErrors.sysusr_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(sysusr_email)){
      newErrors.sysusr_email = "Invalid email format";
    }

    if (!sysusr_password.trim()) {
      newErrors.sysusr_password = "Password is required";
    } else if (sysusr_password.length < 6){
      newErrors.sysusr_password = "Password must be at least 6 characters";
    }
    
    if (!role.trim()) {
      newErrors.role = "Role is required";
    }

    setValidationErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  }

  const onInputChange = (e) => {
    setSystemusers({ ...systemusers, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      try {
        await axios.post('http://localhost:5000/admin', systemusers)
        setIsAdded(true);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const handleClose = () => {
    setIsAdded(false);
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
                error={Boolean(validationErrors.sysusr_name)}
                helperText={validationErrors.sysusr_name}
                margin="normal"
              />

              <TextField
                label="Email"
                fullWidth
                placeholder="Enter System User Email "
                name="sysusr_email"
                value={sysusr_email}
                onChange={(e) => onInputChange(e)}
                error={Boolean(validationErrors.sysusr_email)}
                helperText={validationErrors.sysusr_email}
                margin="normal"
              />

              <TextField
                label="Password"
                fullWidth
                placeholder="Enter System User Password"
                name="sysusr_password"
                value={sysusr_password}
                onChange={(e) => onInputChange(e)}
                error={Boolean(validationErrors.sysusr_password)}
                helperText={validationErrors.sysusr_password}
                margin="normal"
              />

              <TextField
                label="Role"
                fullWidth
                placeholder="Enter System User Role"
                name="role"
                value={role}
                onChange={(e) => onInputChange(e)}
                error={Boolean(validationErrors.role)}
                helperText={validationErrors.role}
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
      <Dialog open={isAdded} onClose={handleClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <FaCheckCircle style={{ marginRight: 5 }} />
            Successfully Added.
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
