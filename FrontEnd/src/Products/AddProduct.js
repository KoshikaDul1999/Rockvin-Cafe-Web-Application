import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {Select,MenuItem,FormControl,InputLabel,Box} from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';


const ProductUploadForm = () => {
  //const [food_id, setFoodID] = useState('');
  const [food_name, setFoodName] = useState('');
  const [food_price, setFoodPrice] = useState('');
  const [food_image, setFoodImage] = useState(null);
  const [food_desc, setFoodDescription] = useState('');
  const [food_cat_id, setFoodCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const [isAdded, setIsAdded] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  let navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!food_name.trim()) {
      newErrors.food_name = "Food Name is required";
    }

    if (!food_price.trim()) {
      newErrors.food_price = "Price is required";
    }else if (!Number.isInteger(Number(food_price))) {
        newErrors.food_price = "Invalid price format. Please enter a valid integer.";
      }
    
    if (!food_desc.trim()) {
      newErrors.food_desc = "Description is required";
    }

    if (!food_image) {
      newErrors.food_image = "Image is required";
    }

    if (!food_cat_id.trim()) {
      newErrors.food_cat_id = "Must be selected";
    }

    setValidationErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories!", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
  
    if (isFormValid) {
    // Create a FormData object and append form data
    const formData = new FormData();
    formData.append('food_name', food_name);
    formData.append('food_price', food_price);
    formData.append('food_image', food_image);
    formData.append('food_desc', food_desc);

    const matchingCategory = categories.find((category) => category.cate_name === food_cat_id);

    console.log(matchingCategory.cate_id)

    formData.append(
      'food_cat_id', matchingCategory.cate_id);

    console.log(formData);

    try {
      axios.post('http://localhost:5000/foods', formData);
      axios.post('http://localhost:5000/upload', formData);

      setIsAdded(true);

      // Handle successful form submission
      console.log('Form submitted successfully');

      // Reset the form fields
      //setFoodID('');
      setFoodName('');
      setFoodPrice('');
      setFoodImage(null);
      setFoodDescription('');
      setFoodCategory('');
    } catch (error) {
      // Handle the error
      console.error('Error submitting form:', error);
    }
  }
  };

  const handleFileChange = (e) => {
    setFoodImage(e.target.files[0]);
  };

  const handleClose = () => {
    setIsAdded(false);
    navigate('/menu');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={2}>
        <form onSubmit={handleFormSubmit}>
          {/* <TextField
            label="Product ID"
            fullWidth
            value={food_id}
            onChange={(e) => setFoodID(e.target.value)}
          /> */}
          <TextField
            label="Product Name"
            fullWidth
            value={food_name}
            onChange={(e) => setFoodName(e.target.value)}
            error={Boolean(validationErrors.food_name)}
            helperText={validationErrors.food_name}
          />
          <TextField
            label="Product Price"
            fullWidth
            value={food_price}
            onChange={(e) => setFoodPrice(e.target.value)}
            error={Boolean(validationErrors.food_price)}
            helperText={validationErrors.food_price}
          />
          <Box mt={2}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              error={Boolean(validationErrors.food_image)}
              helperText={validationErrors.food_image}
            />
          </Box>
          <TextField
            label="Product Description"
            fullWidth
            multiline
            rows={4}
            value={food_desc}
            onChange={(e) => setFoodDescription(e.target.value)}
            error={Boolean(validationErrors.food_desc)}
            helperText={validationErrors.food_desc}
          />
          <FormControl fullWidth>
            <InputLabel id="category-label">Product Category</InputLabel>
            <Select
              labelId="category-label"
              value={food_cat_id}
              onChange={(e) => setFoodCategory(e.target.value)}
              error={Boolean(validationErrors.food_cat_id)}
              helperText={validationErrors.food_cat_id}
            >
              {categories.map((category) => (
                <MenuItem key={category.cate_id} value={category.cate_name}>
                  {category.cate_name}
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
      <Dialog open={isAdded} onClose={handleClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <FaCheckCircle style={{ marginRight: 5 }} />
            Successfully Added.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};


export default ProductUploadForm;