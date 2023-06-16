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

const categories = ['Category 1', 'Category 2', 'Category 3']; // Replace with your actual categories

const ProductUploadForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');

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
            label="Product Name"
            fullWidth
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            label="Product Price"
            fullWidth
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <TextField
            label="Product Description"
            fullWidth
            multiline
            rows={4}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <Box mt={2}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProductImage(e.target.files[0])}
            />
          </Box>
          <FormControl fullWidth>
            <InputLabel id="category-label">Product Category</InputLabel>
            <Select
              labelId="category-label"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
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