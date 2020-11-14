import React from 'react'
import { Container, Toolbar, Typography, IconButton, Button, ButtonGroup } from '@material-ui/core';
import './header.css';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Header = () => {
    return (
        <div>
            <Container>
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
            </Container>
        </div>
    )
}

export default Header;