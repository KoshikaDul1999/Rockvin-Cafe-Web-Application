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
import Register from './Register'
import Main from './Main';


function App() {
  return (
    <div className='App'>
       <AppHeader/>
       {/* <div className="SideMenuAndPageContent"> */}
        {/* <SideMenu/> */}
       {/* </div> */}
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='home' element={<Main/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          {/* <Route path='*' element={<NoMatch/>}></Route> */}
        </Routes>
       <AppFooter />
    </div>
  );
}

export default App;