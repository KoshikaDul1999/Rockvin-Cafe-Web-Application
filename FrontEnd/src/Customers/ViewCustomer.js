import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewCustomer() {
  const [customer, setCustomer] = useState({
    phoneno: '',
    fname: '',
    lname: '',
    address: '',
    city: '',
    emailaddress: '',
  });

  const { customer_id } = useParams();

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:5000/user/${customer_id}`);
    setCustomer(result.data);
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Customer Details</Typography>} />
        <List>
          <ListItem>
            <ListItemText primary="Customer ID" secondary={customer.userid} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer First Name" secondary={customer.fname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer Last Name" secondary={customer.lname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer Phone number" secondary={customer.phoneno} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer Address" secondary={customer.address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer City" secondary={customer.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer Email" secondary={customer.emailaddress} />
          </ListItem>
        </List>
      </Card>
      <Button component={Link} to="/customers" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
        Back to Home
      </Button>
    </Container>
  );
}