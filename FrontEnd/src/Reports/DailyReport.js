import React, { useEffect, useState } from 'react';
import { Typography, DatePicker, Space, Table } from 'antd';
import SideMenu from '../Components/SideMenu';
import PageContent from '../Components/PageContent';
import axios from 'axios';
import moment from 'moment';

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
    },
    {
      title: 'User Name',
      dataIndex: 'user',
      key: 'user',
      render: (user) => `${user.fname} ${user.lname}`,
    },
    {
      title: 'Food',
      dataIndex: 'food',
      key: 'food',
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
      dataIndex: 'totalprice * quantity',
      render: (text, record) => record.totalprice * record.quantity,
    },
  ];

  // Calculate the total income for the selected date
  const dailyTotalIncome = dailySales
    ? dailySales.reduce((acc, sale) => acc + sale.totalprice * sale.quantity, 0)
    : 0;

  return (
    <div className="SideMenuAndPageContent">
      <SideMenu />
      <PageContent></PageContent>
      <div>
          <Typography.Title level={4}>Daily Sales Report</Typography.Title>
          <Space direction="vertical" style={{ marginBottom: 16 }}>
            <DatePicker onChange={handleDateChange} />
          </Space>
          {dailySales && dailySales.length > 0 ? (
            <Table
              columns={columns}
              dataSource={dailySales}
              rowKey={(record) => record.orderid}
            />
          ) : (
            <Typography.Text>Select the date</Typography.Text>
          )}
          {selectedDate && (
            <div>
              Total income on {selectedDate.format('MMMM Do, YYYY')}: Rs. {dailyTotalIncome}
            </div>
          )}
        </div>
    </div>
  );
}

export default Reports;