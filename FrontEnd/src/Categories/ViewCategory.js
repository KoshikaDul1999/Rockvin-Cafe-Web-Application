import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewCategory() {
  const [category, setCategory] = useState({
    cate_name: '',
    cate_desc: '',
  });

  const { category_id } = useParams();

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:5000/category/${category_id}`);
    setCategory(result.data);
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Category Details</Typography>} />
        <List>
          <ListItem>
            <ListItemText primary="Category ID" secondary={category.cate_id} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Category Name" secondary={category.cate_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Category Description" secondary={category.cate_desc} />
          </ListItem>
        </List>
      </Card>
      <Button component={Link} to="/category" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
        Back to Home
      </Button>
    </Container>
  );
}




// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// export default function Viewcategory() {

//     const [category,setCategory]=useState({
//         category_name:"",
//         category_desc:"",
//     });

//     const {category_id}=useParams();

//     useEffect(()=>{
//         loadCategory()
//     },[])

//     const loadCategory = async () => {
//         const result=await axios.get(`http://localhost:5000/category/${category_id}`)
//         setCategory(result.data)
//     }

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-16 offset-md-3 border rounded p-4 mt-2 shadow p-3 mb-2 bg-primary text-white'>
//                 <h2 className='text-center m-4'>Category Details</h2>
//                 <div className='card'>
//                     <div className='card-header'>
//                         Details of Category Id : {category.id}
//                         <ul className='list-group list-group-flush'>
//                             <li className='list-group-item'>
//                                 <b>Category Name : </b>
//                                 {category.title}
//                             </li>
//                             <li className='list-group-item'>
//                                 <b>Category Description : </b>
//                                 {category.description}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <Link className="btn btn-success my-2" to={"/category"}>
//                     Back to Home
//                 </Link>
//             </div>
//         </div>
//     </div>
//   )
// }
