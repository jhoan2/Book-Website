import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import book from "../../components/card/assets/book.jpg";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  footer: {
    height: "50px",
  },
}));

export default function ProductScreen() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Header />
        <br />
      </div>
      <div>
        <p>hello</p>
      </div>
      <div>
        <br />
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}
