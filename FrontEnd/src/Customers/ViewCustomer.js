import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardHeader, List, ListItem, ListItemText, Button } from '@material-ui/core';

export default function ViewCategory() {
  const [category, setCategory] = useState({
    cate_name: '',
    cate_desc: '',
  });

  const { category_id } = useParams();

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:5000/category/${category_id}`);
    setCategory(result.data);
  };

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '2rem' }}>
        <CardHeader title={<Typography variant="h4">Category Details</Typography>} />
        <List>
          <ListItem>
            <ListItemText primary="Category ID" secondary={category.cate_id} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Category Name" secondary={category.cate_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Category Description" secondary={category.cate_desc} />
          </ListItem>
        </List>
      </Card>
      <Button component={Link} to="/category" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
        Back to Home
      </Button>
    </Container>
  );
}