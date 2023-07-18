import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import SideMenu from '../../Components/SideMenu';
import PageContent from '../../Components/PageContent';
import axios from 'axios';

function Reports() {
  const [dailySales, setDailySales] = useState(null);
  const [weeklySales, setWeeklySales] = useState(null);
  const [monthlySales, setMonthlySales] = useState(null);

  useEffect(() => {
    fetchDailySales();
    fetchWeeklySales();
    fetchMonthlySales();
  }, []);

  const fetchDailySales = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sales/daily');
      setDailySales(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeeklySales = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sales/weekly');
      setWeeklySales(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMonthlySales = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sales/monthly');
      setMonthlySales(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="SideMenuAndPageContent">
      <SideMenu />
      <PageContent>
        <div>
          <Typography.Title level={4}>Reports</Typography.Title>
          {/* Render the daily, weekly, and monthly sales reports */}
          {dailySales && (
            <div>
              <Typography.Title level={5}>Daily Sales</Typography.Title>
              {/* Render the daily sales report */}
              {dailySales.map((sale) => (
                <div key={sale.orderid}>
                  <p>Order ID: {sale.orderid}</p>
                  <p>User ID: {sale.user_id}</p>
                  {/* Display other relevant fields */}
                </div>
              ))}
            </div>
          )}
          {weeklySales && (
            <div>
              <Typography.Title level={5}>Weekly Sales</Typography.Title>
              {/* Render the weekly sales report */}
              {weeklySales.map((sale) => (
                <div key={sale.orderid}>
                  <p>Order ID: {sale.orderid}</p>
                  <p>User ID: {sale.user_id}</p>
                  {/* Display other relevant fields */}
                </div>
              ))}
            </div>
          )}
          {monthlySales && (
            <div>
              <Typography.Title level={5}>Monthly Sales</Typography.Title>
              {/* Render the monthly sales report */}
              {monthlySales.map((sale) => (
                <div key={sale.orderid}>
                  <p>Order ID: {sale.orderid}</p>
                  <p>User ID: {sale.user_id}</p>
                  {/* Display other relevant fields */}
                </div>
              ))}
            </div>
          )}
        </div>
      </PageContent>
    </div>
  );
}

export default Reports;


// import React from 'react';
// import { Typography } from "antd";
// import SideMenu from '../../Components/SideMenu';
// import PageContent from '../../Components/PageContent';

//   function Reports() {
//     return (
//       <div className="SideMenuAndPageContent">
//         <SideMenu></SideMenu>
//         <PageContent></PageContent>
  
//         <div>
//           <Typography.Title level={4}>Reports</Typography.Title>
          
//         </div>
//       </div>
//     );
//   }
  
//   export default Reports;
