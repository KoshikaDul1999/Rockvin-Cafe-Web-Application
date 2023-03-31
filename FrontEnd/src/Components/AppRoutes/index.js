import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Menu from "../../Pages/Menu";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";
import FOS from "../../Pages/FOS";
import Reports from "../../Pages/Reports";
import Profile from "../../Pages/Profile";

function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/fos" element={<FOS />}></Route>
                <Route path="/reports" element={<Reports />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
    )
}

export default AppRoutes
