import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import axios from 'axios';
import ChefSideMenu from '../../Components/ChefSideMenu';
import PageContent from '../../Components/PageContent';
import { FaCheckCircle } from 'react-icons/fa';

function Profile() {
  let navigate = useNavigate();
  const { c_id } = useParams();

  const [chef, setChef] = useState({
    chef_name: '',
    chef_email: '',
    chef_password: '',
    chef_address: '',
    chef_telephone: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const { chef_name, chef_email, chef_password, chef_address, chef_telephone } = chef;

  const onInputChange = (e) => {
    setChef({ ...chef, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadChef();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/chef/${c_id}`, chef);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsUpdated(false);
    navigate('/');
  };

  const loadChef = async () => {
    const result = await axios.get(`http://localhost:5000/chef/${c_id}`);
    setChef(result.data);
  };

  return (
    <div className="SideMenuAndPageContent">
      <ChefSideMenu />
      <PageContent />

      <Container maxWidth="md">
        <div className="row">
          <div className="col-md-12">
            <div className="border rounded p-4 mt-2 shadow p-3 mb-2 bg-info text-white">
              <Typography variant="h4" align="center" gutterBottom>
                Edit Profile
              </Typography>
              <form onSubmit={(e) => onSubmit(e)}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      name="chef_name"
                      value={chef_name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="chef_email"
                      value={chef_email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      name="chef_password"
                      value={chef_password}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      name="chef_address"
                      value={chef_address}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Telephone"
                      variant="outlined"
                      fullWidth
                      name="chef_telephone"
                      value={chef_telephone}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Update
                    </Button>
                    <Button
                      component={Link}
                      to="/chefprofile"
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: 10 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </Container>

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
    </div>
  );
}

export default Profile;