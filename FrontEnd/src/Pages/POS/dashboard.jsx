import React, { useState } from 'react';
import './POSDashboard.css'; 

const POSDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('cash');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='tab-box'>
      <div className="tabs">
        <button
          className={selectedTab === 'cash' ? 'active' : ''}
          onClick={() => handleTabChange('cash')}
        >
          Cash Payment     
        </button>
        <button
          className={selectedTab === 'card' ? 'active' : ''}
          onClick={() => handleTabChange('card')}
        >
          Card Payment
        </button>
        
      </div>

      
    </div>
  );
};

export default POSDashboard;
