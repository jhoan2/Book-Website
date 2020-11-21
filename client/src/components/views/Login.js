import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from '@material-ui/core';

export default function Login() {
  return (
    <div>
      <Header />
      <br />
      <Box height="100%" width="100%" display="inline-block">
        <Paper elevation={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            spacing={3}
          >
            <Grid item>
              <Typography>Log into your account</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="filled-read-only-input"
                label="Email"
                type="email"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-read-only-input"
                label="Password"
                type="password"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <Button size="large" variant="contained">
                Log In
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <br />
      <Footer />
    </div>
  );
}
