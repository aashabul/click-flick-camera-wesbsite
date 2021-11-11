import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError, signInWithGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
        console.log(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = e => {
        signInWithGoogle(location, history);
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="div" >
                            Please Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                                name="email"
                                id="standard-basic"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                                name="password"
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text" >New User? Register Now</Button>
                            </NavLink>
                            <br />
                            {
                                loading && <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                            }
                            {
                                user?.email && <Alert severity="success">Login Successfully!</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }

                            <Button
                                type="submit"
                                sx={{ width: '25%', m: 1, backgroundColor: '#8C6897' }}
                                variant="contained">
                                Login
                            </Button>
                        </form>
                        <Button
                            onClick={handleGoogleSignIn}
                            type="submit"
                            sx={{ width: '50%', m: 1, backgroundColor: '#8C6897', color: 'white' }}
                            variant="contained">
                            Google Sign in
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={"https://i.ibb.co/d4DdFYq/A-picture-of-action-camera-cartoon-character-with-board-Vector-illustration.jpg"} alt="poster" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;