import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [itemDetails, setItemDetails] = useState({});

    // const { user } = useAuth();


    useEffect(() => {
        fetch('https://fierce-garden-34186.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])


    useEffect(() => {
        if (details.length > 0) {
            const compareData = details.find(detail => detail.id == id);
            setItemDetails(compareData);
        }
    }, [details, id])


    return (
        <>
            <Navigation></Navigation>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 200, boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={itemDetails.img}
                        style={{ width: 'auto', height: '190px', margin: '0 auto' }}
                    />
                    <CardContent>
                        <Typography sx={{ color: '#8C6897', fontWeight: 700 }} variant="h7" component="div">
                            {itemDetails.name}
                        </Typography>
                        <Typography variant="h6" component="div">
                            price: {itemDetails.price}$
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            product ID: {id}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            {itemDetails.description.color}
                        </Typography> */}
                    </CardContent>
                </Card>
            </Grid>
            <Footer></Footer>
        </>
    );
};

export default Purchase;