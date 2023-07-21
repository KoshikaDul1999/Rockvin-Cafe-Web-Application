import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';

function Reports() {
  const [dailySales, setDailySales] = useState(null);
  useEffect(() => {
    fetchDailySales();
  }, []);

  const fetchDailySales = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sales/daily');
      setDailySales(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="SideMenuAndPageContent">
      <SideMenu />
      <PageContent></PageContent>
        <div>
          <Typography.Title level={4}>Daily Sales Report</Typography.Title>
          {dailySales && (
            <div>
              {dailySales.map((sale) => (
                <div key={sale.orderid}>
                  <p>Order ID: {sale.orderid}</p>
                  <p>User: {sale.user.fname} {sale.user.lname}</p>
                  <p>Food: {sale.food.food_name}</p>
                  <p>Total Price: {sale.totalprice}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  );
}

export default Reports;