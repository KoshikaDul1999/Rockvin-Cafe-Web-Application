import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';

export default function ViewAdmin() {
  const [admin, setAdmin] = useState({
    admin_id: '',
    admin_name: '',
    admin_email: '',
    admin_password: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    const result = await axios.get(`http://localhost:5000/admin/${id}`);
    setAdmin(result.data);
  };

  return (
    <Container maxWidth="md">
      <div className="row">
        <div className="col-md-12">
          <Card className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-dark text-white">
            <Typography variant="h4" align="center" gutterBottom>
              Admin Details
            </Typography>

            {/* <CardHeader
              title={`Details of Admin Id : ${admin.id}`}
              className="bg-primary text-white"
            /> */}

            <List>
              <ListItem>
                <ListItemText primary="Admin ID :" secondary={admin.admin_id} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Admin Name :" secondary={admin.admin_name} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Admin UserName :"
                  secondary={admin.admin_username}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Admin Email :" secondary={admin.admin_email} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Admin Password :"
                  secondary={admin.admin_password}
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
