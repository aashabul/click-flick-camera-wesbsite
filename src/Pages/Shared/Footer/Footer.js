import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#8C6897', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', marginBottom: 3, marginTop: 4 }}>

                <Grid item xs={12} sm={3} md={3}>
                    <h4>ABOUT</h4>
                    <p>Investors</p>
                    <p>Supplier Responsibility</p>
                    <p>Distributors</p>
                    <p>Connect With GoPro</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <h4>PROGRAMS</h4>
                    <p>GoPro Awards</p>
                    <p>GoPro Labs</p>
                    <p>Student Discount</p>
                    <p>Affiliate Program</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <h4>HELP</h4>
                    <p>Order Status</p>
                    <p>Contact Us</p>
                    <p>Shipping &amp; delivery</p>
                    <p>Privacy Policy</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <h4>SOCIAL</h4>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>PInterest</p>
                </Grid>

            </Grid>

            <Grid sx={{ marginBottom: 5 }}>
                &copy; Khondoker Aashabul Imam All Rights Reserves.
            </Grid>
        </Box>
    );
};

export default Footer;