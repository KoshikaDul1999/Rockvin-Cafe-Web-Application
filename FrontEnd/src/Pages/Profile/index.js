import { Typography } from "antd";
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Profile() {
  let navigate = useNavigate();

  const { email } = useParams();
  const [admins, setAdmins] = useState([]);
  const { admin_id } = useParams();
  const [editingAdmin, setEditingAdmin] = useState(false);

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

  useEffect(() => {
    loadAdmins();
  },[]);

  const loadAdmins = async () => {
    const result = await axios.get("http://localhost:5000/admins");
    setAdmins(result.data);
  };

  const deleteAdmin = async (id) => {
    // Show a confirmation popup
    const confirmDelete = window.confirm("Are you sure you want to delete this system user?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:5000/admin/${id}`);
      loadAdmins();
    } else {
      console.log("System User was not deleted.");
    }
  };

  const onEditAdmin = async (id) => {
    const result = await axios.get(`http://localhost:5000/admin/${email}`);
    setSystemusers(result.data);
    setEditingAdmin(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/admin/${email}`, systemusers);
    navigate('/profile');
  };

  const loadSystemusers = async () => {
    const result = await axios.get(`http://localhost:5000/admin/${email}`);
    setSystemusers(result.data);
  };

  const onCancelEdit = () => {
    setEditingAdmin(false);
  };

  const onUpdateAdmin = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/admin/${admin_id}`, systemusers);
    setEditingAdmin(false);
    loadAdmins();
  };

  return (
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>

      <div>
        <Typography.Title level={4}>System User Profiles</Typography.Title>
        <Link className='btn btn-dark' to="/addnewadmin">Add New System User</Link>
        <div className="container">
          <div className="py-4">
            <table className="table border shadow-inner, table-dark">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Password</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((systemuser, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{systemuser.sysusr_name}</td>
                    <td>{systemuser.sysusr_email}</td>
                    <td>{systemuser.sysusr_password}</td>
                    <td>{systemuser.role}</td>
                    <td>
                      <button className='btn btn-danger mx-2'
                        onClick={() => deleteAdmin(systemuser.sysusr_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Add the EditAdmin form below the table */}
            {editingAdmin && (
              <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white">
                <Typography variant="h4" align="center" gutterBottom>
                  Edit System User
                </Typography>

                <form onSubmit={onUpdateAdmin}>
                  {/* <div className="mb-3">
                    <label htmlFor="ID" className="form-label">
                      ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter System User ID"
                      name="sysusr_id"
                      value={sysusr_id}
                      onChange={(e) => setSystemusers({ ...systemusers, sysusr_id: e.target.value })}
                      fullWidth
                    />
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter System User Name"
                      name="sysusr_name"
                      value={sysusr_name}
                      onChange={(e) => setSystemusers({ ...systemusers, sysusr_name: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      E-Mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter System User Email "
                      name="sysusr_email"
                      value={sysusr_email}
                      onChange={(e) => setSystemusers({ ...systemusers, sysusr_email: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter System User Password"
                      name="sysusr_password"
                      value={sysusr_password}
                      onChange={(e) => setSystemusers({ ...systemusers, sysusr_password: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Role" className="form-label">
                      Role
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter System User Role"
                      name="role"
                      value={role}
                      onChange={(e) => setSystemusers({ ...systemusers, role: e.target.value })}
                      fullWidth
                    />
                  </div>
                  <Button type="submit" variant="outlined" color="primary">
                    Update
                  </Button>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => onCancelEdit()}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}

            {/* Show the EditAdmin form without using edit button */}
            {!editingAdmin && (
              <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-light text-white">
                <Typography variant="h1" align="center" gutterBottom>
                  Update Admin Profile
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
                  value={sysusr_name}
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
                  value={sysusr_email}
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
                  value={sysusr_password}
                  onChange={(e) => onInputChange(e)}
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Role
                </label>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Enter System User Email "
                  name="role"
                  value={role}
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
                 





// import { Typography } from "antd";
// import { Link, useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../Components/SideMenu';
// import PageContent from '../../Components/PageContent';

// function Profile() {

//     const [admins,setAdmins]=useState([]);

//     const {admin_id}=useParams()

//     useEffect(() => {
//         loadAdmins();
//     },[]);

//     const loadAdmins = async () => {
//         const result = await axios.get("http://localhost:5000/admins");
//         setAdmins(result.data);
//     };

//     // const deleteAdmin = async (id) => {
//     //     const result = await axios.delete(`http://localhost:5000/admin/${id}`)
//     //     loadAdmins()
//     // }

//     const deleteAdmin = async (id) => {
//         // Show a confirmation popup
//         const confirmDelete = window.confirm("Are you sure you want to delete this system user?");
//         if (confirmDelete) {
//             await axios.delete(`http://localhost:5000/admin/${id}`);
//             loadAdmins();
//         } else {
//             console.log("System User was not deleted.");
//         }
//     };



//     // const [chefs,setChefs]=useState([]);

//     // const {chef_id}=useParams()

//     // useEffect(() => {
//     //     loadChefs();
//     // },[]);

//     // const loadChefs = async () => {
//     //     const result = await axios.get("http://localhost:5000/chefs");
//     //     setChefs(result.data);
//     // };

//     // const deleteChef = async (id) => {
//     //     const result = await axios.delete(`http://localhost:5000/chef/${id}`)
//     //     loadChefs()
//     // }



//     return (
//         <div className="SideMenuAndPageContent">
//         <SideMenu></SideMenu>
//         <PageContent></PageContent>

//             <div>
//                 <Typography.Title level={4}>System User Profiles</Typography.Title>
//                 <Link className='btn btn-dark' to="/addnewadmin">Add New System User</Link>
//                 <div className="container">
//                     <div className="py-4">
//                         <table className="table border shadow-inner, table-dark">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th scope="col">ID</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">E-mail</th>
//                                 <th scope="col">Password</th>
//                                 <th scope="col">Role</th>
//                                 <th scope="col">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             admins.map((systemuser,index)=>(
//                                 <tr>
//                                     <th scope="row" key={index}>{index+1}</th>
//                                     <td>{systemuser.sysusr_name}</td>
//                                     <td>{systemuser.sysusr_email}</td>
//                                     <td>{systemuser.sysusr_password}</td>
//                                     <td>{systemuser.role}</td>
//                                     <td>
//                                         {/* <Link className='btn btn-primary mx-2'
//                                             to={`/viewadmin/${systemuser.sysusr_id}`}
//                                         >
//                                             View
//                                         </Link>

//                                         <Link className='btn btn-outline-primary mx-2'
//                                         to={`/editadmin/${systemuser.sysusr_id}`}
//                                         >
//                                             Edit
//                                         </Link> */}

//                                         <button className='btn btn-danger mx-2'
//                                             onClick={() => deleteAdmin(systemuser.sysusr_id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr> 
//                             ))
//         }
//                         </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 {/* <Typography.Title level={4}>Chef Profile</Typography.Title>
//                 <Link className='btn btn-info' to="/addnewchef">Add New Chef</Link>
//                 <div className="container">
//                     <div className="py-4">
//                         <table className="table border shadow-inner, table-info">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th scope="col">ID</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">E-mail</th>
//                                 <th scope="col">Password</th>
//                                 <th scope="col">Address</th>
//                                 <th scope="col">Telephone</th>
//                                 <th scope="col">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             chefs.map((chef,index)=>(
//                                 <tr>
//                                     <th scope="row" key={index}>{index+1}</th>
//                                     <td>{chef.chef_name}</td>
//                                     <td>{chef.chef_email}</td>
//                                     <td>{chef.chef_password}</td>
//                                     <td>{chef.chef_address}</td>
//                                     <td>{chef.chef_telephone}</td>
//                                     <td>
//                                         <Link className='btn btn-primary mx-2'
//                                             to={`/viewchef/${chef.chef_id}`}
//                                         >
//                                             View
//                                         </Link>

//                                         <Link className='btn btn-outline-primary mx-2'
//                                         to={`/editchef/${chef.chef_id}`}
//                                         >
//                                             Edit
//                                         </Link>

//                                         <button className='btn btn-danger mx-2'
//                                             onClick={() => deleteChef(chef.chef_id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr> 
//                             ))
//                         }
//                         </tbody>
//                         </table>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     ); 
// }
// export default Profile