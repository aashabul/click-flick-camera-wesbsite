import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const homeBannerBg = {
    background: `url(https://i.ibb.co/Jy3RJy0/CLICK-FLICK-1.png)`,
    width: '100%'
}

const HomeBanner = () => {
    return (
        <Box style={homeBannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} >
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'left', alignItems: 'center', my: 10 }}>
                    <Box style={{ paddingLeft: '2%' }}>
                        <Typography variant='h4'>
                            Be a HERO
                        </Typography>
                        <Typography variant='h4' style={{ fontSize: 16 }} sx={{ my: 3 }}>
                            What if your GoPro footage could instantly transfer to your phone and be transformed into a fantastic video? It turns out that it is possible.
                        </Typography>
                        <Button style={{ backgroundColor: 'white', color: 'black' }} variant="contained">Explore</Button>
                    </Box>
                </Grid>
                <Grid item xs={10} md={6}>
                    <img style={{ width: '70%', marginTop: '50px' }} src={'https://i.ibb.co/TBVyGNg/hp-hero6-product-desktop.png'} alt="gopro" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeBanner;