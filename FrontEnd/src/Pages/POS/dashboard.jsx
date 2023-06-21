import React, { useState } from 'react';
import './POSDashboard.css'; // Update the CSS file name if needed

const POSDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('breakfast');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='tab-box'>
      <div className="tabs">
        {/* <button
          className={selectedTab === 'breakfast' ? 'active' : ''}
          onClick={() => handleTabChange('breakfast')}
        >
          Breakfast
        </button> */}
        <a href="/productview" className={selectedTab === 'breakfast' ? 'active' : ''}>Breakfast</a>
        <button
          className={selectedTab === 'lunch' ? 'active' : ''}
          onClick={() => handleTabChange('lunch')}
        >
          Lunch
        </button>
        <button
          className={selectedTab === 'dinner' ? 'active' : ''}
          onClick={() => handleTabChange('dinner')}
        >
          Dinner
        </button>
        <button
          className={selectedTab === 'beverages' ? 'active' : ''}
          onClick={() => handleTabChange('beverages')}
        >
          Beverages
        </button>
      </div>

      
    </div>
  );
};

export default POSDashboard;
