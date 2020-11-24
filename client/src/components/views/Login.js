import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    minHeight: "75vh",
  },
  footer: {
    height: "50px",
  },
});

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Header />
        <br />
      </div>
      <div>
        <Paper elevation={3} className={classes.paper}>
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
      </div>
      <div>
        <br />
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}
