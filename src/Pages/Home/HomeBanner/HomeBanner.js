import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const homeBannerBg = {
    background: `url(https://i.ibb.co/Jy3RJy0/CLICK-FLICK-1.png)`
}

const HomeBanner = () => {
    return (
        <Box style={homeBannerBg} sx={{ flexGrow: 1, height: 300 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ paddingTop: 8, paddingBottom: 3, paddingLeft: 2 }}>
                        What if your GoPro footage could instantly transfer to your phone and be transformed into a fantastic video? It turns out that it is possible.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: "white", color: "black" }}>Explore</Button>
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingTop: 8 }}>
                    <img
                        style={{ width: '70%' }}
                        src={'https://i.ibb.co/TBVyGNg/hp-hero6-product-desktop.png'} alt="gopro" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeBanner;