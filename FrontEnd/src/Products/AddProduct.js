import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Box,
} from '@mui/material';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Beverages', 'Dessert']; // Replace with your actual categories

const ProductUploadForm = () => {
  const [food_id, setFoodID] = useState('');
  const [food_name, setFoodName] = useState('');
  const [food_price, setFoodPrice] = useState('');
  const [food_image, setFoodImage] = useState('');
  const [food_desc, setFoodDescription] = useState('');
  const [food_cat_id, setFoodCategory] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform your submit logic here
    // You can access the form data using the state variables (productName, productPrice, etc.)
  };

  return (
    <Container maxWidth="sm">
      <Box mt={2}>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Product ID"
            fullWidth
            value={food_id}
            onChange={(e) => setFoodID(e.target.value)}
          />
          <TextField
            label="Product Name"
            fullWidth
            value={food_name}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <TextField
            label="Product Price"
            fullWidth
            value={food_price}
            onChange={(e) => setFoodPrice(e.target.value)}
          />
          <Box mt={2}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFoodImage(e.target.files[0])}
            />
          </Box>
          <TextField
            label="Product Description"
            fullWidth
            multiline
            rows={4}
            value={food_desc}
            onChange={(e) => setFoodDescription(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="category-label">Product Category</InputLabel>
            <Select
              labelId="category-label"
              value={food_cat_id}
              onChange={(e) => setFoodCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Upload Product
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProductUploadForm;