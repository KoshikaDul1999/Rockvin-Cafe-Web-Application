import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';

export default function EditCustomer() {
  let navigate = useNavigate();
  const { customer_id } = useParams();

  const [customer, setCustomer] = useState({
    phoneno: '',
    fname: '',
    lname: '',
    address: '',
    city: '',
    emailaddress: '',
  });
  const [isUpdated, setIsUpdated] = useState(false);
  const { phoneno, fname, lname, address, city, emailaddress } = customer;
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!fname.trim()) {
      newErrors.fname = "First Name is required";
    }

    if (!lname.trim()) {
      newErrors.lname = "Last Name is required";
    }

    if (!emailaddress.trim()){
      newErrors.emailaddress = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(emailaddress)){
      newErrors.emailaddress = "Invalid email format";
    }

    if (!phoneno.trim()) {
      newErrors.phoneno = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(phoneno)) {
      newErrors.phoneno = "Invalid telephone number";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required";
    }
    
    if (!city.trim()) {
      newErrors.city = "City is required";
    }

    setValidationErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  }

  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCustomer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.put(`http://localhost:5000/user/${customer_id}`, customer);
        setIsUpdated(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClose = () => {
    setIsUpdated(false);
    navigate('/customers');
  };

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:5000/user/${customer_id}`);
    setCustomer(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit Customer Details
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Customer First Name"
              variant="outlined"
              fullWidth
              name="fname"
              value={fname}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.fname)}
              helperText={validationErrors.fname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer Last Name"
              variant="outlined"
              fullWidth
              name="lname"
              value={lname}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.lname)}
              helperText={validationErrors.lname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer Mobile"
              variant="outlined"
              fullWidth
              name="phoneno"
              value={phoneno}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.phoneno)}
              helperText={validationErrors.phoneno}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer Address"
              variant="outlined"
              fullWidth
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.address)}
              helperText={validationErrors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer City"
              variant="outlined"
              fullWidth
              name="city"
              value={city}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.city)}
              helperText={validationErrors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer Email"
              variant="outlined"
              fullWidth
              name="emailaddress"
              value={emailaddress}
              onChange={(e) => onInputChange(e)}
              error={Boolean(validationErrors.emailaddress)}
              helperText={validationErrors.emailaddress}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button component={Link} to="/customers" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
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
// import { TextField, Button, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
// import { FaCheckCircle } from 'react-icons/fa';

// import { validatePhoneNumber, validateEmailAddress } from 'D:/Lectures/University/Level 03/Level 3 Semester 1/Group Project/Cafe/Web/Rockvin-Cafe-Web-Application/Node_Backend/controllers/UserController';

// export default function EditCustomer() {
//   let navigate = useNavigate();
//   const { customer_id } = useParams();

//   const [customer, setCustomer] = useState({
//     phoneno: '',
//     fname: '',
//     lname: '',
//     address: '',
//     city: '',
//     emailaddress: '',
//   });
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [error, setError] = useState('');

//   const { phoneno, fname, lname, address, city, emailaddress } = customer;

//   const onInputChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadCustomer();
//   }, []);

//   const validateForm = () => {
//     if (!validatePhoneNumber(phoneno)) {
//       setError('Invalid phone number');
//       return false;
//     }

//     if (!validateEmailAddress(emailaddress)) {
//       setError('Invalid email address');
//       return false;
//     }

//     return true;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5000/user/${customer_id}`, customer);
//       setIsUpdated(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleClose = () => {
//     setIsUpdated(false);
//     navigate('/customers');
//   };

//   const loadCustomer = async () => {
//     const result = await axios.get(`http://localhost:5000/user/${customer_id}`);
//     setCustomer(result.data);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Edit Customer Details
//       </Typography>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               label="Customer First Name"
//               variant="outlined"
//               fullWidth
//               name="fname"
//               value={fname}
//               onChange={(e) => onInputChange(e)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Customer Last Name"
//               variant="outlined"
//               fullWidth
//               name="lname"
//               value={lname}
//               onChange={(e) => onInputChange(e)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Customer Mobile"
//               variant="outlined"
//               fullWidth
//               name="phoneno"
//               value={phoneno}
//               onChange={(e) => onInputChange(e)}
//               error={!!error}
//               helperText={error || ''}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Customer Address"
//               variant="outlined"
//               fullWidth
//               name="address"
//               value={address}
//               onChange={(e) => onInputChange(e)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Customer City"
//               variant="outlined"
//               fullWidth
//               name="city"
//               value={city}
//               onChange={(e) => onInputChange(e)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Customer Email"
//               variant="outlined"
//               fullWidth
//               name="emailaddress"
//               value={emailaddress}
//               onChange={(e) => onInputChange(e)}
//               error={!!error}
//               helperText={error || ''}
//             />
//           </Grid>
//           <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary">
//               Update
//             </Button>
//             <Button component={Link} to="/customers" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
//               Cancel
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <Dialog open={isUpdated} onClose={handleClose}>
//         <DialogTitle>Success</DialogTitle>
//         <DialogContent>
//           <Typography variant="body1" align="center">
//             <FaCheckCircle style={{ marginRight: 5 }} />
//             Successfully updated.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }
