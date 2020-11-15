import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardHeader, Grid, CardContent, Divider, Typography } from '@material-ui/core';
import './card.css';
import book from './assets/book.jpg';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import GradeIcon from '@material-ui/icons/Grade';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function CardItem() {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
              <CardHeader 
                avatar={ 
                  <Avatar className={classes.avatar}>
                    J
                 </Avatar>}
                title='The E-Myth Revisited'
                subheader='November 14, 2020'
              />           
              <Divider />
              <CardMedia 
                className={classes.media} 
                image={book}
                title='The E-Myth Revisited'
              />
              <Divider />
              <CardContent>
                <Grid container className={classes.root} spacing={2} >
                  <Grid item xs={1} >
                    <GradeIcon></GradeIcon>
                  </Grid>
                  <Grid item xs={5} >
                    <Typography display='inline' >4/5 Rating</Typography>
                  </Grid>
                  <Grid item xs={1} >
                    <MenuBookIcon>2</MenuBookIcon>
                  </Grid>
                  <Grid item xs={5} >
                    <Typography display='inline' >Bussiness</Typography>
                  </Grid>
                  <Grid item xs={1} >
                    <FeaturedVideoIcon></FeaturedVideoIcon>
                  </Grid>
                  <Grid item xs={5} >
                    <Typography display='inline' >26 Reviews</Typography>
                  </Grid>
                  <Grid item xs={1} >
                    <PermMediaIcon></PermMediaIcon>
                  </Grid>
                  <Grid item xs={5} >
                    <Typography display='inline' >Book</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

    )
}

export default CardItem;
