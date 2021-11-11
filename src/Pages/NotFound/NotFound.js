import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', alignContent: "center" }}>
            <Grid item xs={12} sm={12} md={12}>
                <img style={{ width: '100%' }} src={"https://i.ibb.co/0DSy9PD/error-404-concept-landing-page-52683-20650.jpg"} alt="notFoundPage" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large">Back to Home</Button>
                </Link>
            </Grid>
        </Box>
    );
};

export default NotFound;