import React, { useState } from 'react';
import { Typography, DatePicker, Button, Table } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';

function Reports() {
  const [monthlySales, setMonthlySales] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderid',
      key: 'orderid',
    },
    {
      title: 'User',
      dataIndex: 'user',
      render: (user) => `${user.fname} ${user.lname}`,
    },
    {
      title: 'Food',
      dataIndex: 'food',
      render: (food) => food.food_name,
    },
    {
      title: 'Unit Price',
      dataIndex: 'totalprice',
      key: 'totalprice',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (_, record) => record.quantity * record.totalprice,
    },
  ];

  const fetchMonthlySales = async () => {
    try {
      if (!selectedMonth) {
        return; // Exit early if no month is selected
      }

      const year = selectedMonth.year();
      const month = selectedMonth.month() + 1; // Months are zero-based

      // Make the API call with the selected month and year
      const response = await axios.get(
        `http://localhost:5000/api/sales/monthly?month=${month}&year=${year}`
      );
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
        <DatePicker.MonthPicker
          allowClear={false}
          value={selectedMonth}
          onChange={setSelectedMonth}
          style={{ marginRight: '10px', width: '120px' }}
        />
        <Button type="primary" onClick={fetchMonthlySales}>
          Fetch Monthly Sales
        </Button>
        {monthlySales.length > 0 ? (
          <div style={{ marginTop: '20px' }}>
            <Table dataSource={monthlySales} columns={columns} />
          </div>
        ) : (
          <div style={{ marginTop: '20px' }}>
            <Typography.Text>No data available for the selected month.</Typography.Text>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;





// import React, { useEffect, useState } from 'react';
// import { Typography } from 'antd';
// import SideMenu from '../Components/SideMenu';
// import PageContent from '../Components/PageContent';
// import axios from 'axios';

// function Reports() {
//   const [monthlySales, setMonthlySales] = useState(null);

//   useEffect(() => {
//     fetchMonthlySales();
//   }, []);

//   const fetchMonthlySales = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/sales/monthly');
//       setMonthlySales(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="SideMenuAndPageContent">
//       <SideMenu />
//       <PageContent></PageContent>
//         <div>
//           <Typography.Title level={4}>Monthly Report</Typography.Title>
//           {monthlySales && (
//             <div>
//               {monthlySales.map((sale) => (
//                 <div key={sale.orderid}>
//                   <p>Order ID: {sale.orderid}</p>
//                   <p>User: {sale.user.fname} {sale.user.lname}</p>
//                   <p>Food: {sale.food.food_name}</p>
//                   <p>Total Price: {sale.totalprice}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
      
//     </div>
//   );
// }

// export default Reports;