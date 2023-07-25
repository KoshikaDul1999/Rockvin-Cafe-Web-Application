import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Table } from 'antd';

const PdfReport = ({ dailySales, mostOrderedFood }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Sales Report</Text>
      </View>
      <View style={styles.content}>
        {dailySales && dailySales.length > 0 ? (
          <>
            <Table style={styles.table} dataSource={dailySales} pagination={false}>
              <Table.Column title="Order ID" dataIndex="orderid" key="orderid" align="center" />
              <Table.Column
                title="User Name"
                dataIndex="user"
                key="user"
                render={(user) => `${user.fname} ${user.lname}`}
                align="center"
              />
              <Table.Column
                title="Food"
                dataIndex="food"
                key="food"
                render={(food) => food.food_name}
                align="center"
              />
              <Table.Column
                title="Unit Price"
                dataIndex="totalprice"
                key="totalprice"
                align="center"
              />
              <Table.Column title="Quantity" dataIndex="quantity" key="quantity" align="center" />
              <Table.Column
                title="Total Amount"
                dataIndex="totalprice * quantity"
                render={(text, record) => record.totalprice * record.quantity}
                align="center"
              />
            </Table>
            <Text style={styles.mostOrderedFood}>Most ordered food item: {mostOrderedFood}</Text>
          </>
        ) : (
          <Text style={styles.noData}>No sales data available for the selected date.</Text>
        )}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginBottom: 40,
  },
  mostOrderedFood: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default PdfReport;
