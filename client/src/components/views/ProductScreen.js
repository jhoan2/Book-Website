import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Grid } from "@material-ui/core";
import { listProductsDetails } from "../../actions/productActions";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  footer: {
    height: "50px",
  },
}));

export default function ProductScreen(match) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const product = productDetails.product;
  const loading = product.loading;
  const error = product.error;

  useEffect(() => {
    dispatch(listProductsDetails(match.match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <div>
        <Header />
        <br />
      </div>
      <div>
        {loading ? (
          <h2>loading</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Grid container>
            <Grid item>
              <img src={product.imageCover} alt={product.name} />
            </Grid>
          </Grid>
        )}
      </div>
      <div>
        <br />
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}
