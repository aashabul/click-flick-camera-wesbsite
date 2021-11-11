import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleLoginSubmit = e => {
        if (loginData.password1 !== loginData.password2) {
            alert('password did not match');
        }

        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }
    return (
        <>
            <Navigation></Navigation>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ marginTop: 10 }}>
                        <Typography variant="h6" gutterBottom component="div" >
                            Please Register
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="name"
                                onChange={handleOnChange}
                                id="standard-basic3"
                                label="Your Name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="email"
                                onChange={handleOnChange}
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password1"
                                onChange={handleOnChange}
                                id="standard-basic2"
                                label="Your Password"
                                type="password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password2"
                                onChange={handleOnChange}
                                id="standard-basic1"
                                label="Confirm Password"
                                type="password"
                                variant="standard" />
                            <NavLink to='/login' style={{ textDecoration: 'none' }}>
                                <Button>
                                    Already Registered? Login
                                </Button>
                            </NavLink>
                            <br />
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ width: '30%', m: 1, backgroundColor: '#8C6897' }}>
                                Register
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

export default Register;