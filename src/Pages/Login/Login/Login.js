import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';



const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleLoginSubmit = e => {
        alert('hello')
        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    return (
        <>
            <Navigation></Navigation>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ marginTop: 10 }}>
                        <Typography variant="h6" gutterBottom component="div" >
                            Please Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="email"
                                onChange={handleOnChange}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password"
                                onChange={handleOnChange}
                                id="standard-basic2"
                                label="Your Password"
                                type="password"
                                variant="standard" />
                            <NavLink to='/register' style={{ textDecoration: 'none' }}>
                                <Button>
                                    New User? Register Now
                                </Button>
                            </NavLink>
                            <br />
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ width: '20%', m: 1, backgroundColor: '#8C6897' }}>
                                Login
                            </Button>
                            <br />
                            <NavLink to='/home' style={{ textDecoration: 'none' }}>
                                <Button>
                                    back to home
                                </Button>
                            </NavLink>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={"https://i.ibb.co/d4DdFYq/A-picture-of-action-camera-cartoon-character-with-board-Vector-illustration.jpg"} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;