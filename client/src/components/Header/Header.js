import React from 'react'
import { Toolbar, Typography, IconButton, Button, ButtonGroup } from '@material-ui/core';
import './header.css';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Link } from  "react-router-dom";

const Header = () => {
    return (
        <div>
                <Toolbar variant='regular' className='toolbar'>
                    <Link to='/'>
                        <IconButton >
                            <LibraryBooksIcon className='homeIcon' />
                        </IconButton>
                    </Link>
                    <Typography variant='h6' >
                        Book-Website
                    </Typography>
                        <ButtonGroup size='large' className='headerButtons' variant='contained'>
                                <Link to='/login'>
                                    <Button className='loginButton'>
                                            Login
                                    </Button>        
                                 </Link>
                                 <Link to='/signup'>
                                    <Button className='signUpButton'>
                                        Sign Up
                                    </Button>
                                 </Link>
                        </ButtonGroup>
                </Toolbar>                
        </div>
    )
}

export default Header;