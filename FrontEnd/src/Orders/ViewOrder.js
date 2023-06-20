import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewOrder() {
  const [order, setOrder] = useState({
    uid: '',
    foodid: '',
    // food_name: '',
    quantity: '',
    totalprice: '',
    stutus: '',
    time: '',
    order_from: '',
    pickup_time: '',
  });

  const { order_id } = useParams();

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:5000/OrderDetails/${order_id}`);
    setOrder(result.data);
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Order Details</Typography>} />
        <List>
          <ListItem>
            <ListItemText primary="Order ID" secondary={orderdetails.orderid} />
          </ListItem>
          <ListItem>
            <ListItemText primary="User ID" secondary={orderdetails.uid} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food ID" secondary={orderdetails.foodid} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Quantity" secondary={orderdetails.quantity} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Total Price" secondary={orderdetails.totalprice} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Status" secondary={orderdetails.stutus} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Time" secondary={orderdetails.time} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Order From" secondary={orderdetails.order_from} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pickup Time" secondary={orderdetails.pickup_time} />
          </ListItem>
        </List>
      </Card>
      <Button component={Link} to="/order" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
        Back to Home
      </Button>
    </Container>
  );
}
