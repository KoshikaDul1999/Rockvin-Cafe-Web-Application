import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';

function Reports() {
  const [monthlySales, setMonthlySales] = useState(null);

  useEffect(() => {
    fetchMonthlySales();
  }, []);

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
      <PageContent></PageContent>
        <div>
          <Typography.Title level={4}>Monthly Report</Typography.Title>
          {monthlySales && (
            <div>
              {monthlySales.map((sale) => (
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