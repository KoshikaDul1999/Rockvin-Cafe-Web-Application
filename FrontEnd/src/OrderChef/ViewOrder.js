import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewOrder() {
  const [order, setOrder] = useState({
    orderid: '',
    user_name: '',
    food_name: '',
    quantity: '',
    totalprice: '',
    status: '',
    order_from: '',
    pickup_time: '',
  });

  const { order_id } = useParams();

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/OrderDetails/${order_id}`);
      const orderData = result.data;
      console.log('Order Data:', orderData);
      
      const userResult = await axios.get(`http://localhost:5000/user/${orderData.user_id}`);
      const user = userResult.data;
      console.log('User Data:', user);
      
      const foodResult = await axios.get(`http://localhost:5000/foods/${orderData.food_id}`);
      const food = foodResult.data;
      console.log('Food Data:', food);
      
      setOrder({
        orderid: orderData.orderid,
        user_name: user.fname + ' ' + user.lname,
        food_name: food.food_name,
        quantity: orderData.quantity,
        totalprice: orderData.totalprice,
        status: orderData.status,
        order_from: orderData.order_from,
        pickup_time: orderData.pickup_time,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Order Details</Typography>} />
        <List>
          <ListItem>
            <ListItemText primary="Order ID:" secondary={order.orderid} />
          </ListItem>
          <ListItem>
            <ListItemText primary="User Name:" secondary={order.user_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food Name:" secondary={order.food_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Quantity:" secondary={order.quantity} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Total Price:" secondary={order.totalprice} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Status:" secondary={order.status} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Order From:" secondary={order.order_from} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pickup Time:" secondary={order.pickup_time} />
          </ListItem>
        </List>
      </Card>
      <Button component={Link} to="/cheforders" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
        Back to Home
      </Button>
    </Container>
  );
}
