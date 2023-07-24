import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';

export default function EditTable() {
  let navigate = useNavigate();
  const { table_id } = useParams();

  const [table, setTable] = useState({
    table_name: '',
    table_price: '',
    persons: '',
    place_desc: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const { table_name, table_price, persons, place_desc } = table;

  const onInputChange = (e) => {
    setTable({ ...table, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTable();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/tables/${table_id}`, table);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsUpdated(false);
    navigate('/tables');
  };

  const loadTable = async () => {
    const result = await axios.get(`http://localhost:5000/tables/${table_id}`);
    setTable(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit Table Details
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Table Name"
              variant="outlined"
              fullWidth
              name="table_name"
              value={table_name}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Table Price"
              variant="outlined"
              fullWidth
              name="table_price"
              value={table_price}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Persons"
              variant="outlined"
              fullWidth
              name="persons"
              value={persons}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Table Name"
              variant="outlined"
              fullWidth
              name="table_name"
              value={table_name}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Place Description"
              variant="outlined"
              fullWidth
              name="place_desc"
              value={place_desc}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button component={Link} to="/tables" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
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