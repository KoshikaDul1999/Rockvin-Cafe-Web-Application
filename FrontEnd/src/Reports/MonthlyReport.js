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
      width: '15%',
      align: 'center',
    },
    {
      title: 'User Name',
      dataIndex: 'user',
      key: 'user',
      render: (user) => `${user.fname} ${user.lname}`,
      width: '25%',
      align: 'center',
    },
    {
      title: 'Food',
      dataIndex: 'food',
      key: 'food',
      render: (food) => food.food_name,
      width: '20%',
      align: 'center',
    },
    {
      title: 'Unit Price',
      dataIndex: 'totalprice',
      key: 'totalprice',
      width: '15%',
      align: 'center',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '15%',
      align: 'center',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (_, record) => record.quantity * record.totalprice,
      width: '20%',
      align: 'center',
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

  let totalIncome = 0;
  if (monthlySales.length > 0) {
    // Calculate the total income for the selected month
    totalIncome = monthlySales.reduce((total, sale) => total + sale.totalprice, 0);
  }

  return (
    <div className="SideMenuAndPageContent" style={{ display: 'flex' }}>
      <SideMenu />
      <PageContent />
      <div style={{ flex: 1, marginLeft: '20px' }}>
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
          <Table
            dataSource={monthlySales}
            columns={columns}
            pagination={false}
            bordered
            summary={(pageData) => {
              let totalQuantity = 0;
              let totalAmount = 0;
              pageData.forEach((data) => {
                totalQuantity += data.quantity;
                totalAmount += data.quantity * data.totalprice;
              });

              return (
                <>
                  <Table.Summary.Row style={{ background: '#f2f2f2' }}>
                    <Table.Summary.Cell index={0} colSpan={4} align="center">
                      Total
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="center">
                      {totalQuantity}
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="center">
                      {totalAmount.toFixed(2)}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
        ) : (
          <div style={{ marginTop: '20px' }}>
            <Typography.Text>Select the Month</Typography.Text>
          </div>
        )}

        {/* {monthlySales.length > 0 && (
          <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
            <Typography.Text>
              Total income of {selectedMonth?.format('MMMM YYYY')}: Rs. {totalIncome.toFixed(2)}
            </Typography.Text>
          </div>
        )} */}
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