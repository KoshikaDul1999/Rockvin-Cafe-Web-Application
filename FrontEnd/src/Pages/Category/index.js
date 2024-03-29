import { Typography } from "antd";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';

function Category() {

  const [categories,setCategories]=useState([]);

  const {category_id}=useParams()

  useEffect(() => {
    loadCategories();
  },[]);

  const loadCategories = async () => {
    const result = await axios.get("http://localhost:5000/categories");
    setCategories(result.data);
  };

//   const deleteCategory = async (category_id) => {
//     const result = await axios.delete(`http://localhost:5000/category/${category_id}`);
//     loadCategories();

//     // Show a confirmation popup
//     const confirmDelete = window.confirm("Are you sure you want to delete this category?");
//     if (!confirmDelete) {
//       // Do not delete the category
//       console.log("Category was not deleted.");
//     } else {
//       // Delete the category
//       const result = await axios.delete(`http://localhost:5000/category/${category_id}`);
//       loadCategories();
//     }
//   };

    const deleteCategory = async (category_id) => {
        // Show a confirmation popup
        const confirmDelete = window.confirm("Are you sure you want to delete this category?");
        if (confirmDelete) {
        // Delete the category
        await axios.delete(`http://localhost:5000/category/${category_id}`);
        loadCategories();
        } else {
        // Do not delete the category
        console.log("Category was not deleted.");
        }
    };
  

  return (
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
      <div>
        <Typography.Title level={4}>Our Category</Typography.Title>
        <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link>
        <div className="container">
          <div className="py-4">
            <table className="table border shadow-inner, table-primary">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Category Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{category.cate_name}</td>
                    <td>{category.cate_desc}</td>
                    <td>
                      <Link
                        className='btn btn-primary mx-2'
                        to={`/viewcategory/${category.cate_id}`}
                      >
                        View
                      </Link>

                      <Link
                        className='btn btn-outline-primary mx-2'
                        to={`/editcategory/${category.cate_id}`}
                      >
                        Edit
                      </Link>

                      <button
                        className='btn btn-danger mx-2'
                        onClick={() => deleteCategory(category.cate_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;



// import { Typography } from "antd";
// import { Link, useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../Components/SideMenu';
// import PageContent from '../../Components/PageContent';

// function Category() {

//     const [categories,setCategories]=useState([]);

//     const {category_id}=useParams()

//     useEffect(() => {
//         loadCategories();
//     },[]);

//     const loadCategories = async () => {
//         const result = await axios.get("http://localhost:5000/categories");
//         setCategories(result.data);
//     };

//     const deleteCategory = async (category_id) => {
//         const result = await axios.delete(`http://localhost:5000/category/${category_id}`)
//         loadCategories()
//     }

//     return (
//         <div className="SideMenuAndPageContent">
//         <SideMenu></SideMenu>
//         <PageContent></PageContent>
//             <div>
//                 <Typography.Title level={4}>Our Category</Typography.Title>
//                 <Link className='btn btn-primary' to="/addnewcategory">Add New category</Link>
//                 <div className="container">
//                     <div className="py-4">
//                         <table className="table border shadow-inner, table-primary">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th scope="col">ID</th>
//                                 <th scope="col">Category Name</th>
//                                 <th scope="col">Category Description</th>
//                                 <th scope="col">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             categories.map((category,index)=>(
//                                 <tr>
//                                     <th scope="row" key={index}>{index+1}</th>
//                                     <td>{category.cate_name}</td>
//                                     <td>{category.cate_desc}</td>
//                                     <td>
//                                         <Link className='btn btn-primary mx-2'
//                                             to={`/viewcategory/${category.cate_id}`}
//                                         >
//                                             View
//                                         </Link>

//                                         <Link className='btn btn-outline-primary mx-2'
//                                         to={`/editcategory/${category.cate_id}`}
//                                         >
//                                             Edit
//                                         </Link>

//                                         <button className='btn btn-danger mx-2'
//                                             onClick={() => deleteCategory(category.cate_id)}
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
//                 </div>
//             </div>
//         </div>
//     ); 
// }
// export default Category


// import { Typography } from 'antd';
// import Modal from 'antd/lib/modal';
// import { Link, useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../Components/SideMenu';
// import PageContent from '../../Components/PageContent';
// import 'antd/dist/antd.css';

// function Category() {
//   const [categories, setCategories] = useState([]);
//   const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
//   const [deletingCategoryId, setDeletingCategoryId] = useState('');
//   const { category_id } = useParams();

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const loadCategories = async () => {
//     const result = await axios.get('http://localhost:5000/categories');
//     setCategories(result.data);
//   };

//   const deleteCategory = async (category_id) => {
//     await axios.delete(`http://localhost:5000/category/${category_id}`);
//     loadCategories();
//     setDeleteConfirmVisible(false);
//     setDeletingCategoryId('');
//   };

//   const showDeleteConfirm = (category_id) => {
//     setDeletingCategoryId(category_id);
//     setDeleteConfirmVisible(true);
//   };
  
//   const handleDeleteConfirm = () => {
//     deleteCategory(deletingCategoryId);
//   };
  
//   const handleDeleteCancel = () => {
//     setDeleteConfirmVisible(false);
//     setDeletingCategoryId('');
//   };

  
//   return (
//     <div className="SideMenuAndPageContent">
//       <SideMenu />
//       <PageContent>
//         <div>
//           <Typography.Title level={4}>Our Category</Typography.Title>
//           <Link className="btn btn-primary" to="/addnewcategory">
//             Add New Category
//           </Link>
//           <div className="container">
//             <div className="py-4">
//               <table className="table border shadow-inner, table-primary">
//                 <thead className="thead-dark">
//                   <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Category Name</th>
//                     <th scope="col">Category Description</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categories.map((category, index) => (
//                     <tr key={index}>
//                       <th scope="row">{index + 1}</th>
//                       <td>{category.cate_name}</td>
//                       <td>{category.cate_desc}</td>
//                       <td>
//                         <Link
//                           className="btn btn-primary mx-2"
//                           to={`/viewcategory/${category.cate_id}`}
//                         >
//                           View
//                         </Link>

//                         <Link
//                           className="btn btn-outline-primary mx-2"
//                           to={`/editcategory/${category.cate_id}`}
//                         >
//                           Edit
//                         </Link>

//                         <button
//                           className="btn btn-danger mx-2"
//                           onClick={() => showDeleteConfirm(category.cate_id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </PageContent>

//       <Modal
//         title="Confirmation"
//         visible={deleteConfirmVisible}
//         onOk={handleDeleteConfirm}
//         onCancel={handleDeleteCancel}
//       >
//         <p>Are you sure you want to delete this category?</p>
//       </Modal>
//     </div>
//   );
// }

// export default Category;




