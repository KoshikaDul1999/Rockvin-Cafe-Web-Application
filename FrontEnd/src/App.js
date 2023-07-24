import {Routes, Route} from 'react-router-dom';
import './App.css';
import './Main/style.css';
import Login from './Login';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import LoginAppHeader from './Components/LoginAppHeader';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register'


//import Login from "./Login/index";

import Dashboard from "./Pages/Dashboard";
import Menu from "./Pages/Menu";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import POS from "./Pages/POS";
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";
import Category from "./Pages/Category";
import Table from './Pages/Tables';
import Booking from './Pages/Bookings';
import OfferFoodsProduct from "./Pages/OfferFoods";
import RecomendedFoodsProduct from "./Pages/RecomendedFoods";
import ChefOrders from "./Pages/ChefOrders";
import ChefProfile from "./Pages/ChefProfile";


import AddAdmin from "./Admins/AddAdmin";
import EditAdmin from "./Admins/EditAdmin";
import ViewAdmin from "./Admins/ViewAdmin";

import AddChef from "./Chef/AddChef";
import EditChef from "./Chef/EditChef";
import ViewChef from "./Chef/ViewChef";

import AddCategory from "./Categories/AddCategory";
import EditCategory from "./Categories/EditCategory";
import ViewCategory from "./Categories/ViewCategory";

import AddProduct from "./Products/AddProduct";
import EditProduct from "./Products/EditProduct";
import ViewProduct from "./Products/ViewProduct";

import ViewCustomer from "./Customers/ViewCustomer";
import EditCustomer from "./Customers/EditCustomer";

import ViewOrder from "./Orders/ViewOrder";
import EditOrder from "./Orders/EditOrder";

import ChefViewOrder from "./OrderChef/ViewOrder";
import ChefEditOrder from "./OrderChef/EditOrder";

import DailyReport from "./Reports/DailyReport";
import WeeklyReport from "./Reports/WeeklyReport";
import MonthlyReport from "./Reports/MonthlyReport";

import EditTable from './Tables/EditTables';

import AddOfferProduct from "./OffProFoods/AddOffFoods";

import AddRecomendedProduct from "./RecProFoods/AddRecProducts";

//pages

import ProductView from './Pages/POS/productView';
import LunchView from './Pages/POS/lunchView';
import DinnerView from './Pages/POS/dinnerView';
import BeveragesView from './Pages/POS/beveragesView';
import PayMethod from './Pages/POS/payMethod';
import CashPay from './Pages/POS/cashPay';

import CartPage from './Pages/POS/cart';




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
          {/* <Route path='register' element={<Register/>}></Route> */}
          {/* <Route path='*' element={<NoMatch/>}></Route> */}


          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/pos" element={<POS />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/tables" element={<Table />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/offerfoods" element={<OfferFoodsProduct />}></Route>
          <Route path="/recomendedfoods" element={<RecomendedFoodsProduct />}></Route>
          <Route path="/cheforders" element={<ChefOrders />}></Route>
          <Route path="/chefprofile" element={<ChefProfile />}></Route>

          <Route exact path='/addnewadmin' element={<AddAdmin />} />
          <Route exact path='/editadmin/:sysusr_id ' element={<EditAdmin />} />
          <Route exact path='/viewadmin/:sysusr_id ' element={<ViewAdmin />} />

          <Route exact path='/addnewchef' element={<AddChef />} />
          <Route exact path='/editchef/:chef_id' element={<EditChef />} />
          <Route exact path='/viewchef/:chef_id' element={<ViewChef />} />

          <Route exact path="/addnewcategory" element={<AddCategory />} />
          <Route exact path="/editcategory/:category_id" element={<EditCategory />} />
          <Route exact path="/viewcategory/:category_id" element={<ViewCategory />} />

          <Route exact path="/addnewproduct" element={<AddProduct />} />
          <Route exact path="/editproduct/:product_id" element={<EditProduct />} />
          <Route exact path="/viewproduct/:product_id" element={<ViewProduct />} />

          <Route exact path="/viewcustomer/:customer_id" element={<ViewCustomer />} />
          <Route exact path="/editcustomer/:customer_id" element={<EditCustomer />} />

          <Route exact path="/vieworder/:order_id" element={<ViewOrder />} />
          <Route exact path="/editorder/:order_id" element={<EditOrder />} />

          <Route exact path="/chefvieworder/:order_id" element={<ChefViewOrder />} />
          <Route exact path="/chefeditorder/:order_id" element={<ChefEditOrder />} />

          <Route exact path="/reports/daily" element={<DailyReport />} />
          <Route exact path="/reports/weekly" element={<WeeklyReport />} />
          <Route exact path="/reports/monthly" element={<MonthlyReport />} />

          <Route exact path="/edittable/:table_id" element={<EditTable />} />

          <Route exact path="/addnewofferfoodproduct" element={<AddOfferProduct />} />

          <Route exact path="/addnewrecomendedproduct" element={<AddRecomendedProduct />}></Route>

          <Route path='/productview' element={<ProductView />} />
          <Route path='/lunchView' element={<LunchView />} />

          <Route path='/viewcart' element={<CartPage />} />
          <Route path='/dinnerView' element={<DinnerView />} />
          <Route path='/beveragesView' element={<BeveragesView />} />
          <Route path='/payMethod' element={<PayMethod />} />
          <Route path='/cashPay' element={<CashPay />} />

          <Route></Route>

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