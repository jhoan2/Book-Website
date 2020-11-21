import React from 'react';
import Header from './components/Header/Header';
import CardItem from './components/card/CardItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: '50px',
        paddingRight: '50px',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <br/>
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
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardItem />
                </Grid>
            </Grid>
            <br />
            <Footer />
        </div>

    )};


export default App;