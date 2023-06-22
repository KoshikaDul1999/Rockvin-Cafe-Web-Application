import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@material-ui/core';

export default function EditFood() {
  let navigate = useNavigate();
  const { product_id } = useParams();

  const [food, setFood] = useState({
    food_id: '',
    food_name: '',
    food_price: '',
    food_img: '',
    food_desc: '',
    food_cat_id: '',
  });

  const { food_id, food_name, food_price, food_img, food_desc, food_cat_id } = food;

  const onInputChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadFood();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/foods/${product_id}`, food);
    navigate('/menu');
  };

  const loadFood = async () => {
    const result = await axios.get(`http://localhost:5000/foods/${product_id}`);
    setFood(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit Food
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <TextField
          label="Food ID"
          variant="outlined"
          fullWidth
          name="food_id"
          value={food_id}
          onChange={(e) => onInputChange(e)}
          margin="normal"
        />
        <TextField
          label="Food Name"
          variant="outlined"
          fullWidth
          name="food_name"
          value={food_name}
          onChange={(e) => onInputChange(e)}
          margin="normal"
        />
        <TextField
          label="Food Price"
          variant="outlined"
          fullWidth
          name="food_price"
          value={food_price}
          onChange={(e) => onInputChange(e)}
          margin="normal"
        />
        <TextField
          label="Food Image"
          variant="outlined"
          fullWidth
          name="food_img"
          value={<img src={`/images/foods/${food.food_img}`} alt={food.food_name} className="product-image" style={{ width: '150px', height: '200px' }} />}
          onChange={(e) => onInputChange(e)}
          margin="normal"
        />
        <TextField
          label="Food Description"
          variant="outlined"
          fullWidth
          name="food_desc"
          value={food_desc}
          onChange={(e) => onInputChange(e)}
          margin="normal"
        />
        <TextField
          label="Food Category"
          variant="outlined"
          fullWidth
          name="food_cat_id"
          value={food_cat_id}
          onChange={(e) => onInputChange(e)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
        <Button component={Link} to="/menu" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
          Cancel
        </Button>
      </form>
    </Container>
  );
}