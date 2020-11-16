import React from 'react'
import { Toolbar, Typography, IconButton, Button, ButtonGroup } from '@material-ui/core';
import './header.css';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Header = () => {
    return (
        <div>
                <Toolbar variant='regular' className='toolbar'>
                    <IconButton >
                        <LibraryBooksIcon className='homeIcon' />
                    </IconButton>
                    <Typography variant='h6' >
                        Book-Website
                    </Typography>
                        <ButtonGroup size='large' className='headerButtons' variant='contained'>
                            <Button className='loginButton'>Login</Button>
                            <Button className='signUpButton'>Sign Up</Button>
                        </ButtonGroup>
                </Toolbar>                
        </div>
    )
}

export default Header;