import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container, Typography } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Payment = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ my: 5 }}>
                <Typography variant="h5">
                    Payment System Comming Soon
                </Typography>
                <Stack spacing={2}>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={50} height={50} />
                    <Skeleton variant="rectangular" sx={{ width: '100%', height: '300px' }} />
                </Stack>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Payment;