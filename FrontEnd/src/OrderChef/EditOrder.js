import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';

export default function EditOrder() {
  let navigate = useNavigate();
  const { order_id } = useParams();

  const [order, setOrder] = useState({
    status: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const { status } = order;

  const onInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadOrder();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/OrderDetails/${order_id}`, order);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsUpdated(false);
    navigate('/orders');
  };

  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:5000/OrderDetails/${order_id}`);
    setOrder(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit Order Status
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Current Order Status: {status === '0' ? 'Order is added to queue' : status === '1' ? 'Order is preparing' : status === '2' ? 'Order is prepared' : ''}
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Order Status"
              variant="outlined"
              fullWidth
              name="status"
              value={status}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button component={Link} to="/cheforders" variant="contained" color="secondary" style={{ marginLeft: 10 }}>
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
            Order Status Updated.
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