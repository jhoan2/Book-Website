import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardHeader,
  Grid,
  CardContent,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";
import "./card.css";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import GradeIcon from "@material-ui/icons/Grade";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardButtons: {
    paddingTop: "20px",
  },
}));

function CardItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>J</Avatar>}
        title={props.product.name}
      />
      <Divider />
      <Link to={`/product/${props.product._id}`}>
        <CardMedia
          className={classes.media}
          image={props.product.imageCover}
          title={props.product.name}
        />
      </Link>
      <Divider />
      <CardContent>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={1} sm={2}>
            <GradeIcon></GradeIcon>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Typography display="inline">
              {props.product.ratingAverage}/5 Rating
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2}>
            <MenuBookIcon>2</MenuBookIcon>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Typography display="inline">{props.product.Category}</Typography>
          </Grid>
          <Grid item xs={1} sm={2}>
            <FeaturedVideoIcon></FeaturedVideoIcon>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Typography display="inline">
              {props.product.reviews} Reviews
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2}>
            <PermMediaIcon></PermMediaIcon>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Typography display="inline">{props.product.mediaType}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-end"
          justify="space-around"
          className={classes.cardButtons}
        >
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/product/${props.product._id}`}>
              <Button variant="contained">Details</Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardItem;
