import React from 'react'
import { Toolbar, Grid, Link, Typography } from '@material-ui/core';
import './footer.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerLink: {
        color: '#D7CEB2'
    },
}));
const Footer = () => {
    const classes =useStyles();
    return (
        <div>
                <Toolbar variant='regular' className='toolbar'>
                    <Grid container >
                        <Grid item xs={3} >
                            <Link href="#" className={classes.footerLink}>
                                <Typography align='center'>
                                    About Us
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="#" className={classes.footerLink}>
                                <Typography align='center'>
                                    Contact
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="#" className={classes.footerLink}>
                                <Typography align='center'>
                                    Careers
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={3} >
                            <Link href="#" className={classes.footerLink}>
                                <Typography align='center'>
                                    © 2020 by John Hoang
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>                
        </div>
    )
}

export default Footer;