import React, { useState } from 'react';
import { Typography } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Reports() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [weeklySales, setWeeklySales] = useState([]);
  const [weeklyTotalIncome, setWeeklyTotalIncome] = useState(null);

  const handleDateChange = (date) => {
    setSelectedStartDate(date);
    setSelectedEndDate(date ? new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000) : null);
  };

  const fetchWeeklySales = async () => {
    try {
      if (!selectedStartDate || !selectedEndDate) return;

      const startDate = selectedStartDate.toISOString();
      const endDate = selectedEndDate.toISOString();
      const response = await axios.get('http://localhost:5000/api/sales', {
        params: {
          startDate,
          endDate,
        },
      });
      setWeeklySales(response.data);

      // Calculate the weekly total income
      const totalIncome = response.data.reduce((total, sale) => {
        const unitPrice = sale.totalprice;
        const quantity = sale.quantity;
        const totalAmount = unitPrice * quantity;
        return total + totalAmount;
      }, 0);
      setWeeklyTotalIncome(totalIncome);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="SideMenuAndPageContent" style={{ display: 'flex' }}>
      <SideMenu />
      <PageContent />
        <div>
          <Typography.Title level={4}>Weekly Report</Typography.Title>
          <DatePicker
            selected={selectedStartDate}
            onChange={handleDateChange}
            selectsStart
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            inline
            dateFormat="dd/MM/yyyy"
          />
          <DatePicker
            selected={selectedEndDate}
            onChange={(date) => setSelectedEndDate(date)}
            selectsEnd
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            inline
            dateFormat="dd/MM/yyyy"
            minDate={selectedStartDate ? new Date(selectedStartDate.getTime() + 24 * 60 * 60 * 1000) : null}
            maxDate={selectedStartDate ? new Date(selectedStartDate.getTime() + 6 * 24 * 60 * 60 * 1000) : null}
          />
          <button onClick={fetchWeeklySales}>Fetch Weekly Sales</button>
        </div>
      
      <div style={{ flex: 1, marginLeft: '20px' }}>
        {weeklySales.length > 0 ? (
          <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
            <thead>
              <tr style={{ border: '1px solid #ddd', background: '#f2f2f2' }}>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Order ID</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>User Name</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Food</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Unit Price</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Quantity</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {weeklySales.map((sale) => {
                const unitPrice = sale.totalprice;
                const quantity = sale.quantity;
                const totalAmount = unitPrice * quantity;

                return (
                  <tr key={sale.orderid} style={{ border: '1px solid #ddd' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{sale.orderid}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{`${sale.user.fname} ${sale.user.lname}`}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{sale.food.food_name}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{unitPrice}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{quantity}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{totalAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>Select the week</p>
        )}

        {weeklyTotalIncome !== null && (
          <div style={{ marginTop: '30px', fontSize: '40px', fontWeight: 'bold' }}>
            <Typography.Text>
              Total income on {selectedStartDate?.toLocaleDateString()} to {selectedEndDate?.toLocaleDateString()}:
              Rs. {weeklyTotalIncome}
            </Typography.Text>
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
//   const [weeklySales, setWeeklySales] = useState(null);

//   useEffect(() => {
//     fetchWeeklySales();
//   }, []);

//   const fetchWeeklySales = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/sales/weekly');
//       setWeeklySales(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="SideMenuAndPageContent">
//       <SideMenu />
//       <PageContent></PageContent>
//         <div>
//           <Typography.Title level={4}>Weekly Report</Typography.Title>
//           {weeklySales && (
//             <div>
//               {weeklySales.map((sale) => (
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