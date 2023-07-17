import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';

export default function EditCategory() {
  let navigate = useNavigate();
  const { category_id } = useParams();

  const [category, setCategory] = useState({
    cate_id: '',
    cate_name: '',
    cate_desc: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const { cate_id, cate_name, cate_desc } = category;

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/categories/${category_id}`, category);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsUpdated(false);
    navigate('/category');
  };

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:5000/category/${category_id}`);
    setCategory(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit category
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Category ID"
              variant="outlined"
              fullWidth
              name="cate_id"
              value={cate_id}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Category Name"
              variant="outlined"
              fullWidth
              name="cate_name"
              value={cate_name}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Category Description"
              variant="outlined"
              fullWidth
              name="cate_desc"
              value={cate_desc}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button component={Link} to="/category" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={isUpdated} onClose={handleClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography variant="body1" align="center">
            <FaCheckCircle style={{ marginRight: 5 }} />
            Successfully updated.
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
}
