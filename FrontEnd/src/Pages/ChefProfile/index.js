import { Typography } from "antd";
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie'; 
import { Button, TextField } from '@material-ui/core';
import ChefSideMenu from '../../Components/ChefSideMenu';
import PageContent from '../../Components/PageContent';

function Profile() {

  let navigate = useNavigate();

  const [cookies] = useCookies(['email']);
  console.log(cookies.email)

  const { email } = useParams();
  const [editingAdmin, setEditingAdmin] = useState(false);
  
  const [systemusers, setSystemusers] = useState([]);

  const { sysusr_name, sysusr_email, sysusr_password, role } = systemusers;

  const onInputChange = (e) => {
    setSystemusers({ ...systemusers, [e.target.name]: e.target.value });
  };

  const onEditAdmin = async (id) => {
    const result = await axios.get(`http://localhost:5000/admin/${cookies.email}`);
    setSystemusers(result.data);
    console.log(result.data)
    setEditingAdmin(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/admin/${cookies.email}`, systemusers);
    navigate('/chefprofile');
  };

  const onCancelEdit = () => {
    setEditingAdmin(false);
  };

  useEffect(() => {
    onEditAdmin();
  },[]);

  return (
    <div className="SideMenuAndPageContent">
      <ChefSideMenu></ChefSideMenu>
      <PageContent></PageContent>

      <div>
        <Typography.Title level={4}>System User Profiles</Typography.Title>
        <div className="container">
          <div className="py-4">
            {(
              <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-light text-white">
                <Typography variant="h1" align="center" gutterBottom>
                  Update Profile
                </Typography>

                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                      Name
                    </label>
                    <TextField
                      type="text"
                      className="form-control"
                      placeholder="Enter System User Name"
                      name="sysusr_name"
                      value={systemusers.sysusr_name}
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
                      placeholder="Enter System User Email "
                      name="sysusr_email"
                      value={systemusers.sysusr_email}
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
                      placeholder="Enter System User Password"
                      name="sysusr_password"
                      value={systemusers.sysusr_password}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

//   let navigate = useNavigate();
//   const [cookies] = useCookies(['email']);
//   console.log(cookies.email)

//   const [chef, setChef] = useState([]);

//   const [isUpdated, setIsUpdated] = useState(false);

//   const { chef_name, chef_email, chef_password, chef_address, chef_telephone } = chef;

//   const onInputChange = (e) => {
//     setChef({ ...chef, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadChef();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/admin/${cookies.email}`, chef);
//       setIsUpdated(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleClose = () => {
//     setIsUpdated(false);
//     navigate('/');
//   };

//   const loadChef = async () => {
//     const result = await axios.get(`http://localhost:5000/admin/${cookies.email}`);
//     setChef(result.data);
//   };

//   return (
//     <div className="SideMenuAndPageContent">
//       <ChefSideMenu />
//       <PageContent />

//       <Container maxWidth="md">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white">
//               <Typography variant="h4" align="center" gutterBottom>
//                 Edit Profile
//               </Typography>
//               <form onSubmit={(e) => onSubmit(e)}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Name"
//                       variant="outlined"
//                       fullWidth
//                       name="chef.chef_name"
//                       value={chef.chef_name}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Email"
//                       variant="outlined"
//                       fullWidth
//                       name="chef.chef_email"
//                       value={chef.chef_email}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Password"
//                       variant="outlined"
//                       fullWidth
//                       name="chef.chef_password"
//                       value={chef.chef_password}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Address"
//                       variant="outlined"
//                       fullWidth
//                       name="chef.chef_address"
//                       value={chef.chef_address}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Telephone"
//                       variant="outlined"
//                       fullWidth
//                       name="chef.chef_telephone"
//                       value={chef.chef_telephone}
//                       onChange={(e) => onInputChange(e)}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" color="primary">
//                       Update
//                     </Button>
//                     <Button
//                       component={Link}
//                       to="/chefprofile"
//                       variant="contained"
//                       color="secondary"
//                       style={{ marginLeft: 10 }}
//                     >
//                       Cancel
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>

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
//     </div>
//   );
// }

// export default Profile;