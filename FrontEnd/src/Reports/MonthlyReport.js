import React, { useEffect, useState } from 'react';
import { Typography, Input, Button, Table } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';

function Reports() {
  const [monthlySales, setMonthlySales] = useState(null);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

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
      title: 'Total Price',
      dataIndex: 'totalprice',
      key: 'totalprice',
    },
  ];

  const fetchMonthlySales = async () => {
    try {
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
        <Input
          placeholder="Enter Month (1-12)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={{ marginRight: '10px', width: '120px' }}
        />
        <Input
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ marginRight: '10px', width: '120px' }}
        />
        <Button type="primary" onClick={fetchMonthlySales}>
          Fetch Sales
        </Button>
        {monthlySales && (
          <div style={{ marginTop: '20px' }}>
            <Table dataSource={monthlySales} columns={columns} />
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