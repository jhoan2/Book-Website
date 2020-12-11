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
  imageCover: {
    maxWidth: "50vw",
    maxHeight: "50vw",
    backgroundImage: "contain",
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
          <Grid container justify="center" alignItems="center">
            <Grid item xs={10} sm={7} md={7} lg={7}>
              <img
                src={product.imageCover}
                alt={product.name}
                className={classes.imageCover}
              />
            </Grid>
            <Grid item xs={10} sm={3} md={3} lg={3}>
              <h2>{product.name}</h2>

              <h4>Description:</h4>
              <p>{product.description}</p>

              <h4>Category:</h4>
              <p>{product.Category}</p>

              <h4>Media Type:</h4>
              <p>{product.mediaType}</p>

              <h4>Average rating</h4>
              <p>{product.ratingAverage}/5</p>
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
