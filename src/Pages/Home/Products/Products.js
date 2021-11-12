import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container, Typography } from '@mui/material';
import Product from '../Product/Product'
import useAuth from '../../../Hooks/useAuth';



const Products = () => {
    const [findproducts, setFindProducts] = useState([]);
    const { loading } = useAuth();

    useEffect(() => {
        fetch('https://fierce-garden-34186.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setFindProducts(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                {
                    loading &&
                    <CircularProgress />
                }
                <Typography variant="h5" component="div" sx={{ fontWeight: 600, mt: 8, mb: 5, color: '#8C6897' }}>
                    Choose The Best Products
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {

                        findproducts.slice(0, 6).map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)

                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Products;