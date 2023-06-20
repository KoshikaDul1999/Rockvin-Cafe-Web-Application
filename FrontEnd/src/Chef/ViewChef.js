import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewChef() {
  const [chef, setChef] = useState({
    chef_id: '',
    chef_name: '',
    chef_email: '',
    chef_password: '',
    chef_address: '',
    chef_telephone: '',
  });

  const { chef_id } = useParams();

  useEffect(() => {
    loadChef();
  }, []);

  const loadChef = async () => {
    const result = await axios.get(`http://localhost:5000/chef/${chef_id}`);
    setChef(result.data);
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Chef Details</Typography>} />
        <div>
          <div className="card-header">
            <List>
            <ListItem>
                <ListItemText primary={<b>Chef Id: </b>} secondary={chef.chef_id} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<b>Chef Name: </b>} secondary={chef.chef_name} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<b>Chef Email: </b>} secondary={chef.chef_email} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<b>Chef Password: </b>} secondary={chef.chef_password} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<b>Chef Address: </b>} secondary={chef.chef_address} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<b>Chef Telephone: </b>} secondary={chef.chef_telephone} />
              </ListItem>
            </List>
          </div>
        </div>
        <Button component={Link} to="/profile" variant="contained" color="primary" style={{ margin: '1rem' }}>
          Back to Home
        </Button>
      </Card>
    </Container>
  );
}




// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// export default function ViewChef() {

//     const [chef,setChef]=useState({
//         chef_name:"",
//         chef_username:"",
//         chef_email:"",
//         chef_password:"",
//     });

//     const {chef_id}=useParams();

//     useEffect(()=>{
//         loadChef()
//     },[])

//     const loadChef = async () => {
//         const result=await axios.get(`http://localhost:8080/chef/${chef_id}`)
//         setChef(result.data)
//     }

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white'>
//                 <h2 className='text-center m-4'>Chef Details</h2>
//                 <div className='card'>
//                     <div className='card-header'>
//                         Details of Chef Id : {chef.id}
//                         <ul className='list-group list-group-flush'>
//                             <li className='list-group-item'>
//                                 <b>Chef Name : </b>
//                                 {chef.chef_name}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Chef UserName : </b>
//                                 {chef.chef_username}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Chef Email : </b>
//                                 {chef.chef_email}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Chef Password : </b>
//                                 {chef.chef_password}
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
