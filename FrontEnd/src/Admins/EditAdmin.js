import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

export default function EditAdmin() {
  let navigate = useNavigate();

  const { ad_id } = useParams();

  const [admin, setAdmin] = useState({
    admin_id: '',
    admin_name: '',
    admin_email: '',
    admin_password: '',
  });

  const { admin_id, admin_name, admin_email, admin_password } = admin;

  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadAdmin();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/admin/${ad_id}`, admin);
    navigate('/');
  };

  const loadAdmin = async () => {
    const result = await axios.get(`http://localhost:5000/admin/${ad_id}`);
    setAdmin(result.data);
  };

  return (
    <Container maxWidth="md">
      <div className="row">
        <div className="col-md-12">
          <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white">
            <Typography variant="h4" align="center" gutterBottom>
              Edit Admin
            </Typography>

            <form onSubmit={(e) => onSubmit(e)}>
               <div className="mb-3">
                <label htmlFor="ID" className="form-label">
                  Name
                </label>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Enter Admin ID"
                  name="admin_id"
                  value={admin_id}
                  onChange={(e) => onInputChange(e)}
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Enter Admin Name"
                  name="admin_name"
                  value={admin_name}
                  onChange={(e) => onInputChange(e)}
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-Mail
                </label>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Enter Admin Email Address"
                  name="admin_email"
                  value={admin_email}
                  onChange={(e) => onInputChange(e)}
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Password
                </label>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Enter Admin Password"
                  name="admin_password"
                  value={admin_password}
                  onChange={(e) => onInputChange(e)}
                  fullWidth
                />
              </div>
              <Button type="submit" variant="outlined" color="primary">
                Update
              </Button>
              <Link className="btn btn-outline-danger mx-2" to="/profile">
                Cancel
              </Link>
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

// export default function EditAdmin() {

//     let navigate=useNavigate();

//     const {id}=useParams()

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

//     useEffect(()=>{
//         loadAdmin()
//     },[]);

//     const onSubmit=async (e) => {
//         e.preventDefault();
//         await axios.put(`http://localhost:8080/admin/${id}`,admin);
//         navigate("/")
//     };

//     const loadAdmin =async ()=>{
//         const result=await axios.get(`http://localhost:8080/admin/${id}`)
//         setAdmin(result.data)
//     };

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white'>
//                 <h2 className='text-center m-4'>Edit Admin</h2>

//                 <form onSubmit={(e)=>onSubmit(e)}>
//                     <div className='mb-3'>
//                         <label htmlFor="Name" className="form-label">
//                             Name
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Admin Name"
//                             name="name"
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
//                             name="username"
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
//                             name="email"
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
//                             name="password"
//                             value={admin_password}
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
