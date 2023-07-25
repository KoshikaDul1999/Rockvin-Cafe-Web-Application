import React, { useEffect, useState } from 'react';
import { Typography, DatePicker, Space, Table } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';


function Reports() {
  const [dailySales, setDailySales] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchDailySales();
  }, [selectedDate]);

  const fetchDailySales = async () => {
    try {
      if (!selectedDate) {
        setDailySales(null);
        return;
      }

      const response = await axios.get(
        `http://localhost:5000/api/sales/daily?date=${selectedDate.format('YYYY-MM-DD')}`
      );

      const salesData = response.data;

      // Check if there are sales data for the selected date
      if (salesData.length > 0) {
        setDailySales(salesData);
      } else {
        setDailySales(null); // Reset the dailySales state to null
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      dataIndex: 'totalprice * quantity',
      render: (text, record) => record.totalprice * record.quantity,
      width: '20%',
      align: 'center',
    },
  ];

  // Calculate the total income for the selected date
  const dailyTotalIncome = dailySales
    ? dailySales.reduce((acc, sale) => acc + sale.totalprice * sale.quantity, 0)
    : 0;

  const getMostOrderedFood = () => {
      if (!dailySales || dailySales.length === 0) {
        return null;
  }

  const foodCountMap = dailySales.reduce((map, sale) => {
        const foodName = sale.food.food_name;
        map[foodName] = (map[foodName] || 0) + sale.quantity;
        return map;
  }, {});
  
  const mostOrderedFood = Object.keys(foodCountMap).reduce((a, b) =>
        foodCountMap[a] > foodCountMap[b] ? a : b
  );
  
      return mostOrderedFood;
    };
  
    const mostOrderedFood = getMostOrderedFood();
  
    // Chart data and options
    const chartData = {
      labels: dailySales ? dailySales.map((sale) => sale.food.food_name) : [],
      datasets: [
        {
          label: 'Quantity',
          data: dailySales ? dailySales.map((sale) => sale.quantity) : [],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };
  
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      maintainAspectRatio: false, // Disable aspect ratio to control height and width
      height: 400, // Set the height of the chart
      width: '100%', // Set the width of the chart to 100% of its container
    };

  return (
    <div className="SideMenuAndPageContent" style={{ display: 'flex' }}>
      <SideMenu />
      <PageContent />
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <Typography.Title level={4}>Daily Sales Report</Typography.Title>
        <Space direction="vertical" style={{ marginBottom: 16 }}>
          <DatePicker onChange={handleDateChange} />
        </Space>
        {dailySales && dailySales.length > 0 ? (
          <Table
            columns={columns}
            dataSource={dailySales}
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

                  <div style={{ marginTop: '20px' }}>
                    Most ordered food item: {mostOrderedFood}
                  </div>
                  <div style={{ marginTop: '20px', height: '400px', width: '100%' }}>
                    <Bar data={chartData} options={chartOptions} />
                  </div>
                </>
              );
            }}
          />
        ) : (
          <div style={{ marginTop: '20px' }}>
            <Typography.Text>Select the date</Typography.Text>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;
