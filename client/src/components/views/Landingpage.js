import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import CardItem from "../card/CardItem";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  footer: {
    height: "50px",
  },
}));

export default function Landingpage() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Header />
        <br />
      </div>
      <div>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardItem />
          </Grid>
        </Grid>
      </div>
      <div>
        <br />
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}
