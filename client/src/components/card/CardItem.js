import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardHeader, Grid, CardContent, Divider, Typography, Button } from '@material-ui/core';
import './card.css';
import book from './assets/book.jpg';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import GradeIcon from '@material-ui/icons/Grade';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import SaveIcon from '@material-ui/icons/Save';

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
  cardButtons: {
    paddingTop: '20px'
  }
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
                  <Grid item xs={1} sm={2}>
                    <GradeIcon></GradeIcon>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                    <Typography display='inline' >4/5 Rating</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2}>
                    <MenuBookIcon>2</MenuBookIcon>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                    <Typography display='inline' >Business</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2}>
                    <FeaturedVideoIcon></FeaturedVideoIcon>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                    <Typography display='inline' >26 Reviews</Typography>
                  </Grid>
                  <Grid item xs={1} sm={2}>
                    <PermMediaIcon></PermMediaIcon>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                    <Typography display='inline' >Book</Typography>
                  </Grid>
                </Grid>
                <Grid container 
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
                    <Grid item xs={3} >
                      <Button variant='contained'>Details</Button>
                    </Grid>
                </Grid>
              </CardContent>
            </Card>

    )
}

export default CardItem;
