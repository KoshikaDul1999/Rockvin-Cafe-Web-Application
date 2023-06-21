// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import img1 from "../Images/logo/res-logo.png";
// import { Image } from "antd";
// import { useNavigate } from 'react-router-dom';

// function SignUp() {
//   const[username, setUsername] = useState("");
//   // const [formData, setFormData] = useState({
//   //   fullName: '',
//   //   email: '',
//   //   password: ''
//   // });

//   // const navigate = useNavigate();

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
  
//   //   // Perform form validation
//   //   if (!formData.fullName || !formData.email || !formData.password) {
//   //     // Handle form validation errors or display error messages to the user
//   //     console.log("Please fill in all fields.");
//   //     return;
//   //   }
  
//   //   // Store the form data in local storage or any other desired storage mechanism
//   //   localStorage.setItem('registrationData', JSON.stringify(formData));
  
//   //   // Perform any necessary actions or display success message to the user
//   //   console.log("Registration successful");
//   //   navigate('/home');
//   // };
  

//   // const handleChange = (event) => {
//   //   setFormData({
//   //     ...formData,
//   //     [event.target.name]: event.target.value
//   //   });
//   // };

//   // const defaultTheme = createTheme();

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Image width={100} src={img1} />
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} >
//                 <TextField
//                   autoComplete="given-name"
//                   name="fullName"
//                   required
//                   fullWidth
//                   id="fullName"
//                   label="Full Name"
//                   autoFocus
//                   value={formData.fullName}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
// );
// }

// export default SignUp;




// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import img1 from "../Images/logo/res-logo.png";
// // import { Image } from "antd";
// // import {useNavigate} from 'react-router-dom';

// // function SignUp() {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: ''
// //   });

// //   const navigate = useNavigate(); 

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       // Send the form data to the Spring Boot endpoint
// //       const response = await axios.post("http://localhost:8080/api/auth/register", formData);
// //         console.log("Success")
// //         navigate('/home');
// //         console.log(response.data); // Display the response from the backend

// //       // Handle any further actions or display success message to the user
// //     } catch (error) {
// //       console.error(error);
// //       // Handle error scenarios or display error message to the user
// //     }
// //   };

// //   const handleChange = (event) => {
// //     setFormData({
// //       ...formData,
// //       [event.target.name]: event.target.value
// //     });
// //   };

// //   const defaultTheme = createTheme();

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             /*background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// //             borderRadius: '10px',
// //             padding: '20px',
// //             boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',*/
// //           }}
// //         >
// //           <Image width={100} src={img1} />
// //           <Typography component="h1" variant="h5">
// //             Sign up
// //           </Typography>
// //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12} >
// //                 <TextField
// //                   autoComplete="given-name"
// //                   name="fullName"
// //                   required
// //                   fullWidth
// //                   id="fullName"
// //                   label="Full Name"
// //                   autoFocus
// //                   value={formData.fullName}
// //                   onChange={handleChange}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   type="password"
// //                   id="password"
// //                   autoComplete="new-password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                 />
// //               </Grid>
// //               {/*<Grid item xs={12}>
// //                 <FormControlLabel
// //                   control={<Checkbox value="allowExtraEmails" color="primary" />}
// //                   label="I want to receive inspiration, marketing promotions and updates via email."
// //                   />
// //         </Grid>*/}
// //           </Grid>
// //         <Button
// //           type="submit"
// //           fullWidth
// //           variant="contained"
// //           sx={{ mt: 3, mb: 2 }}
// //         >
// //           Sign Up
// //         </Button>
// //         <Grid container justifyContent="flex-end">
// //           <Grid item>
// //             <Link href="/" variant="body2">
// //               Already have an account? Sign in
// //             </Link>
// //           </Grid>
// //         </Grid>
// //       </Box>
// //     </Box>
// //   </Container>
// // </ThemeProvider>
// // );
// // }

// // export default SignUp;



// /*import React, { useState } from "react";
// import axios from "axios";
// import { Form, Button, Alert } from "react-bootstrap";
// import "./register.css";

// function RegistrationForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   //const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   function handleSubmit(event) {
//     event.preventDefault();

//     setIsLoading(true);

//     axios
//       .post("http://localhost:8080/api/auth/register", {
//         firstName,
//         lastName,
//         email,
//         password,
//         //confirmPassword,
//       })
//       .then((response) => {
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPassword("");
//         //setConfirmPassword("");
//         setError("");
//         setIsLoading(false);
//         // Handle successful registration
//       })
//       .catch((error) => {
//         setError(error.response.data.message);
//         setIsLoading(false);
//       });
//   }

//   return (
//     <div className="register-container">
//     <h1 className="rHead">Register New Admin</h1>
//     <Form onSubmit={handleSubmit}>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form.Group controlId="firstName">
//         <Form.Label className="form-label">First Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//           required
//           className="form-control"
//         />
//       </Form.Group>
//       <Form.Group controlId="lastName">
//         <Form.Label className="form-label">Last Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(event) => setLastName(event.target.value)}
//           required
//           className="form-control"
//         />
//       </Form.Group>
//       <Form.Group controlId="email">
//         <Form.Label className="form-label">Email Address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="E-mail"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//           className="form-control"
//         />
//       </Form.Group>
//       <Form.Group controlId="password">
//         <Form.Label className="form-label">Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//           className="form-control"
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit" disabled={isLoading}>
//         {isLoading ? "Loading..." : "Submit"}
//       </Button>
//     </Form>
//     </div>
//   );
// }

// export default RegistrationForm; */


// /*import React, { useState, useEffect } from 'react';
// import { Form, Formik } from 'react-hook-form';
// import { Button, Col, FormGroup, FormLabel, Row } from 'react-bootstrap';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const handleSubmit = () => {
//       const data = {
//         username,
//         email,
//         password,
//         confirmPassword,
//       };
//       axios.post('/api/register', data).then((res) => {
//         if (res.status === 201) {
//           // Redirect to the login page
//           window.location.href = '/login';
//         } else {
//           setError(res.message);
//         }
//       });
//     };
//     return () => {
//       // Remove event listeners
//     };
//   }, [username, password, email, confirmPassword]);

//   return (
//     <Formik
//       initialValues={{
//         username,
//         email,
//         password,
//         confirmPassword,
//       }}
//       onSubmit={handleSubmit}
//     >
//       {({ errors, isValid }) => (
//         <Form>
//           <Row>
//             <Col sm="12">
//               <FormGroup>
//                 <FormLabel>Username</FormLabel>
//                 <input
//                   type="text"
//                   name="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your username"
//                   isValid={!errors.username}
//                   helperText={errors.username}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//             <Col sm="12">
//               <FormGroup>
//                 <FormLabel>Email</FormLabel>
//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   isValid={!errors.email}
//                   helperText={errors.email}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//             <Col sm="12">
//               <FormGroup>
//                 <FormLabel>Password</FormLabel>
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   isValid={!errors.password}
//                   helperText={errors.password}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//             <Col sm="12">
//               <FormGroup>
//                 <FormLabel>Confirm Password</FormLabel>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm your password"
//                   isValid={!errors.confirmPassword}
//                   helperText={errors.confirmPassword}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//             <Col sm="12">
//               <Button
//                 type="submit"
//                 disabled={!isValid}
//                 variant="primary"
//               >
//                 Register
//               </Button>
//             </Col>
//           </Row>
//           {error && <p>{error}</p>}
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Register;  */