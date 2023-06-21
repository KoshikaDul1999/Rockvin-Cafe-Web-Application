import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewFood() {
  const [food, setFood] = useState({
    food_name: '',
    food_price: '',
    food_img: '',
    food_desc: '',
    food_cat_id: '',
  });

  const { product_id } = useParams();

  useEffect(() => {
    loadFood();
  }, []);

  const loadFood = async () => {
    const result = await axios.get(`http://localhost:5000/foods/${product_id}`);
    setFood(result.data);
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Food Details</Typography>} />
        <List>
          <ListItem>
            <ListItemText primary="Food ID" secondary={food.food_id} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food Name" secondary={food.food_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food Price" secondary={food.food_price} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food Image" secondary={food.food_img} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food Description" secondary={food.food_desc} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Food Category" secondary={food.food_cat_id} />
          </ListItem>
        </List>
      </Card>
      <Button component={Link} to="/menu" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
        Back to Home
      </Button>
    </Container>
  );
}
