import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@material-ui/core';

export default function EditChef() {
  let navigate = useNavigate();

  const { ch_id } = useParams();

  const [chef, setChef] = useState({
    chef_id: '',
    name: '',
    email: '',
    password: '',
    address: '',
    telephone: '',
  });

  const { chef_id, name, email, password, address, telephone } = chef;

  const onInputChange = (e) => {
    setChef({ ...chef, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadChef();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/chef/${chef_id}`, chef);
    navigate('/');
  };

  const loadChef = async () => {
    const result = await axios.get(`http://localhost:5000/chef/${chef_id}`);
    setChef(result.data);
  };

  return (
    <Container maxWidth="md">
      <div className="row">
        <div className="col-md-12">
          <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white">
            <Typography variant="h4" align="center" gutterBottom>
              Edit Chef
            </Typography>

            <form onSubmit={(e) => onSubmit(e)}>

            <TextField
                label="ID"
                fullWidth
                placeholder="Enter Chef ID"
                name="chef_id"
                value={chef_id}
                onChange={(e) => onInputChange(e)}
                margin="normal"
            />

            <TextField
                label="Name"
                fullWidth
                placeholder="Enter Chef Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                margin="normal"
            />

            <TextField
                label="Email"
                fullWidth
                placeholder="Enter Chef Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                margin="normal"
            />

            <TextField
                label="Password"
                fullWidth
                placeholder="Enter Chef Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                margin="normal"
            />

            <TextField
                label="Address"
                fullWidth
                placeholder="Enter Chef Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                margin="normal"
            />   

            <TextField
                label="Telephone"
                fullWidth
                placeholder="Enter Chef Telephone"
                name="telephone"
                value={telephone}
                onChange={(e) => onInputChange(e)}
                margin="normal"
            />   

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Update
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





// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios';

// export default function EditChef() {

//     let navigate=useNavigate();

//     const {chef_id}=useParams()

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

//     useEffect(()=>{
//         loadChef()
//     },[]);

//     const onSubmit=async (e) => {
//         e.preventDefault();
//         await axios.put(`http://localhost:8080/chef/${chef_id}`,chef);
//         navigate("/")
//     };

//     const loadChef =async ()=>{
//         const result=await axios.get(`http://localhost:8080/chef/${chef_id}`)
//         setChef(result.data)
//     };

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white'>
//                 <h2 className='text-center m-4'>Edit Chef</h2>

//                 <form onSubmit={(e)=>onSubmit(e)}>
//                     <div className='mb-3'>
//                         <label htmlFor="Name" className="form-label">
//                             Name
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Chef Name"
//                             name="name"
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
//                             name="username"
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
//                             name="email"
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
//                             name="password"
//                             value={chef_password}
//                             onChange={(e)=>onInputChange(e)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-outline-primary">
//                         Update
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
