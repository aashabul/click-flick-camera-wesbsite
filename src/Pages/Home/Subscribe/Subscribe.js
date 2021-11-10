import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Subscribe = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'left', alignItems: 'center' }}>
                    <Box style={{ marginLeft: '10%' }}>
                        <Typography variant='h3'>
                            Subscribe to GoPro
                        </Typography>
                        <Typography variant='h4' style={{ fontSize: 20 }} sx={{ my: 3 }}>
                            Automatically upload footage from your GoPro to the cloud
                        </Typography>
                        <Typography variant='h4' style={{ fontSize: 20 }} sx={{ my: 3 }}>
                            Unlimited cloud backup at 100% quality
                        </Typography>
                        <Typography variant='h4' style={{ fontSize: 20 }} sx={{ my: 3 }}>
                            Unlimited use of the Quik app
                        </Typography>
                        <Typography variant='h4' style={{ fontSize: 20 }} sx={{ my: 3 }}>
                            Up to 50% off at GoPro.com
                        </Typography>
                        <Typography variant='h4' style={{ fontSize: 20 }} sx={{ my: 3 }}>
                            Guaranteed camera replacement
                        </Typography>
                        <Button style={{ backgroundColor: '#8C6897', color: 'white' }} variant="contained" size="large">Subscribe Now</Button>
                    </Box>
                </Grid>
                <Grid item xs={10} md={6}>
                    <img style={{ width: '85%', marginTop: '50px' }} src={'https://i.ibb.co/bsmyR96/pdp-subscription-h10-image-5-1024-2x.png'} alt="gopro" />
                </Grid>
            </Grid>
        </Box >
    );
};

export default Subscribe;