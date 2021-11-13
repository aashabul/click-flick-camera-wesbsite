import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Explore = () => {
    const [findproducts, setFindProducts] = useState([]);
    const { loading } = useAuth();

    useEffect(() => {
        fetch('https://fierce-garden-34186.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setFindProducts(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
            <Container sx={{ my: 5 }}>
                {
                    loading &&
                    <CircularProgress />
                }
                <Typography variant="h5" component="div" sx={{ fontWeight: 600, mb: 5, color: '#8C6897' }}>
                    Explore All The Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {

                        findproducts.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)

                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Explore;