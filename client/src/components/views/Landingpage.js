import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import CardItem from "../card/CardItem";
import Footer from "../Footer/Footer";
import { listProducts } from "../../actions/productActions";

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
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const products = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Header />
        <br />
      </div>
      <div>
        <Grid container spacing={3} className={classes.gridContainer}>
          {products.products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <CardItem />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <br />
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}
