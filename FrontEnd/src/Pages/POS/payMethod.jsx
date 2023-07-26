import React, { useState } from 'react';
import './POSDashboard.css'; 

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-list">
      <li><a href="../Dashboard/"><i className="fa-solid fa-home"></i></a></li>
        <li><a href="/productView">Breakfast</a></li>
        <li><a href="/lunchView">Lunch</a></li>
        <li><a href="/dinnerView">Dinner</a></li>
        <li><a href="beveragesView">Beverages</a></li>
        <li><a href="/viewcart" className='btn btn-primary'><i class="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </nav>
  );
};

const POSDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('cash');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  

  return (
    <div>
      <div className="header">
        <NavigationBar />
        <br></br>
      </div>
      <div className='tab-box'>
      <div className="tabs">
        <a href='/cashPay'><button
          className={selectedTab === 'cash' ? 'active' : ''}
          onClick={() => handleTabChange('cash')}
        >
          Cash Payment
        </button></a>
        {/* <button
          className={selectedTab === 'card' ? 'active' : ''}
          onClick={() => handleTabChange('card')}
        >
          Card Payment
        </button> */}
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>

      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
    
)};

export default POSDashboard;
