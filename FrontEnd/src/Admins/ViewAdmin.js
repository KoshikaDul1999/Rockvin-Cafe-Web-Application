import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';

export default function ViewAdmin() {
  const [systemusers, setSystemusers] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    loadSystemusers();
  }, []);

  const loadSystemusers = async () => {
    console.log(id);
    try {
      const response = await axios.get(`http://localhost:5000/admin/${id}`);
      console.log(response.data);
      setSystemusers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (systemusers === null) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md">
      <div className="row">
        <div className="col-md-12">
          <Card
            className="border rounded p-4 mt-2 shadow p-3 mb-2"
            style={{ background: '#1f1f1f', color: '#ffffff' }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              System User Details
            </Typography>

            <List>
              <ListItem key={systemusers.sysusr_id}>
                <ListItemText
                  primary="System User Name :"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      style={{ color: '#ff9800' }}
                    >
                      {systemusers.sysusr_name}
                    </Typography>
                  }
                  style={{ color: '#ffffff' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="System User Email :"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      style={{ color: '#ff9800' }}
                    >
                      {systemusers.sysusr_email}
                    </Typography>
                  }
                  style={{ color: '#ffffff' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="System User Password :"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      style={{ color: '#ff9800' }}
                    >
                      {systemusers.sysusr_password}
                    </Typography>
                  }
                  style={{ color: '#ffffff' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="System User Role :"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      style={{ color: '#ff9800' }}
                    >
                      {systemusers.role}
                    </Typography>
                  }
                  style={{ color: '#ffffff' }}
                />
              </ListItem>
            </List>

            <Button
              component={Link}
              to="/profile"
              variant="contained"
              color="primary"
              fullWidth
            >
              Back to Home
            </Button>
          </Card>
        </div>
      </div>
    </Container>
  );
}




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Card,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from '@material-ui/core';

// export default function ViewAdmin() {
//   const [systemusers, setSystemusers] = useState({
//     sysusr_name: '',
//     sysusr_email: '',
//     sysusr_password: '',
//     role: '',
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadSystemusers();
//   }, []);

//   const loadSystemusers = async () => {
//     console.log(id);
//     const result = await axios.get(`http://localhost:5000/admin/${id}`);
//     console.log(result.data);
//     setSystemusers(result.data);
//   };

//   return (
//     <Container maxWidth="md">
//       <div className="row">
//         <div className="col-md-12">
//           <Card
//             className="border rounded p-4 mt-2 shadow p-3 mb-2"
//             style={{ background: '#1f1f1f', color: '#ffffff' }} // Change background and text color here
//           >
//             <Typography variant="h4" align="center" gutterBottom>
//               System User Details
//             </Typography>

//             <List>
//               <ListItem>
//                 <ListItemText
//                   primary="System User Name :"
//                   secondary={
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       style={{ color: '#ff9800' }} // Change secondary text color here
//                     >
//                       {systemusers.sysusr_name}
//                     </Typography>
//                   }
//                   style={{ color: '#ffffff' }} // Change primary text color here
//                 />
//               </ListItem>
//               <ListItem>
//                 <ListItemText
//                   primary="System User Email :"
//                   secondary={
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       style={{ color: '#ff9800' }} // Change secondary text color here
//                     >
//                       {systemusers.sysusr_email}
//                     </Typography>
//                   }
//                   style={{ color: '#ffffff' }} // Change primary text color here
//                 />
//               </ListItem>
//               <ListItem>
//                 <ListItemText
//                   primary="System User Password :"
//                   secondary={
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       style={{ color: '#ff9800' }} // Change secondary text color here
//                     >
//                       {systemusers.sysusr_password}
//                     </Typography>
//                   }
//                   style={{ color: '#ffffff' }} // Change primary text color here
//                 />
//               </ListItem>
//               <ListItem>
//                 <ListItemText
//                   primary="System User Role :"
//                   secondary={
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       style={{ color: '#ff9800' }} // Change secondary text color here
//                     >
//                       {systemusers.role}
//                     </Typography>
//                   }
//                   style={{ color: '#ffffff' }} // Change primary text color here
//                 />
//               </ListItem>
//             </List>

//             <Button
//               component={Link}
//               to="/profile"
//               variant="contained"
//               color="primary"
//               fullWidth
//             >
//               Back to Home
//             </Button>
//           </Card>
//         </div>
//       </div>
//     </Container>
//   );
// }







// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// export default function ViewAdmin() {

//     const [admin,setAdmin]=useState({
//         admin_name:"",
//         admin_username:"",
//         admin_email:"",
//         admin_password:"",
//     });

//     const {id}=useParams();

//     useEffect(()=>{
//         loadAdmin()
//     },[])

//     const loadAdmin = async () => {
//         const result=await axios.get(`http://localhost:8080/admin/${id}`)
//         setAdmin(result.data)
//     }

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white'>
//                 <h2 className='text-center m-4'>Admin Details</h2>
//                 <div className='card'>
//                     <div className='card-header'>
//                         Details of Admin Id : {admin.id}
//                         <ul className='list-group list-group-flush'>
//                             <li className='list-group-item'>
//                                 <b>Admin Name : </b>
//                                 {admin.admin_name}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Admin UserName : </b>
//                                 {admin.admin_username}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Admin Email : </b>
//                                 {admin.admin_email}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Admin Password : </b>
//                                 {admin.admin_password}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <Link className="btn btn-primary my-2" to={"/profile"}>
//                     Back to Home
//                 </Link>
//             </div>
//         </div>
//     </div>
//   )
// }
