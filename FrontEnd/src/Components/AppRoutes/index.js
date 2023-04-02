import { Route, Routes } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../../Pages/Dashboard";
import Menu from "../../Pages/Menu";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";
import FOS from "../../Pages/FOS";
import Reports from "../../Pages/Reports";
import Profile from "../../Pages/Profile";
import AddAdmin from "../../Admins/AddAdmin";
import EditAdmin from "../../Admins/EditAdmin";
import ViewAdmin from "../../Admins/ViewAdmin";
import AddChef from "../../Chef/AddChef";
import EditChef from "../../Chef/EditChef";
import ViewChef from "../../Chef/ViewChef";
import Category from "../../Pages/Category";


function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/fos" element={<FOS />}></Route>
                <Route path="/reports" element={<Reports />}></Route>
                <Route path="/profile" element={<Profile />}></Route>

                <Route exact path='/addnewadmin' element={<AddAdmin />} />
                <Route exact path='/editadmin/:id' element={<EditAdmin />} />
                <Route exact path='/viewadmin/:id' element={<ViewAdmin />} />

                <Route exact path='/addnewchef' element={<AddChef />} />
                <Route exact path='/editchef/:chef_id' element={<EditChef />} />
                <Route exact path='/viewchef/:chef_id' element={<ViewChef />} />
            </Routes>
    )
}

export default AppRoutes
