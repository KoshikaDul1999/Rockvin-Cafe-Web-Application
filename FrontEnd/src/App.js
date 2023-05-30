import {Routes, Route} from 'react-router-dom';
import { Space } from "antd";
import './App.css';
import './Main/style.css';
import Login from './Login';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './Register'
import Main from './Main';



//import Login from "./Login/index";

import Dashboard from "./Pages/Dashboard";
import Menu from "./Pages/Menu";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import POS from "./Pages/POS";
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";
import AddAdmin from "./Admins/AddAdmin";
import EditAdmin from "./Admins/EditAdmin";
import ViewAdmin from "./Admins/ViewAdmin";
import AddChef from "./Chef/AddChef";
import EditChef from "./Chef/EditChef";
import ViewChef from "./Chef/ViewChef";
import Category from "./Pages/Category";
import AddCategory from "./Categories/AddCategory";
import EditCategory from "./Categories/EditCategory";
import ViewCategory from "./Categories/ViewCategory";
import AddProduct from "./Products/AddProduct";
import EditProduct from "./Products/EditProduct";
import ViewProduct from "./Products/ViewProduct";



function App() {
  return (
    <div className='App'>
       <AppHeader/>
       {/* <div className="SideMenuAndPageContent"> */}
        {/* <SideMenu/> */}
       {/* </div> */}
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          {/*<Route path='home' element={<Main/>}></Route>*/}
          <Route path='register' element={<Register/>}></Route>
          {/* <Route path='*' element={<NoMatch/>}></Route> */}


          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/pos" element={<POS />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route exact path='/addnewadmin' element={<AddAdmin />} />
          <Route exact path='/editadmin/:id' element={<EditAdmin />} />
          <Route exact path='/viewadmin/:id' element={<ViewAdmin />} />

          <Route exact path='/addnewchef' element={<AddChef />} />
          <Route exact path='/editchef/:chef_id' element={<EditChef />} />
          <Route exact path='/viewchef/:chef_id' element={<ViewChef />} />

          <Route exact path="/addnewcategory" element={<AddCategory />} />
          <Route exact path="/editcategory/:category_id" element={<EditCategory />} />
          <Route exact path="/viewcategory/:category_id" element={<ViewCategory />} />

          <Route exact path="/addnewproduct" element={<AddProduct />} />
          <Route exact path="/editproduct/:product_id" element={<EditProduct />} />
          <Route exact path="/viewproduct/:product_id" element={<ViewProduct />} />

        </Routes>
       <AppFooter />
    </div>
  );
}

export default App;








/*import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='App'>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <AppHeader />
          <div className="SideMenuAndPageContent">
            <SideMenu></SideMenu>
            <PageContent></PageContent>
          </div>
          <AppFooter />
        </>
      )}
    </div>
  );
}

export default App;*/