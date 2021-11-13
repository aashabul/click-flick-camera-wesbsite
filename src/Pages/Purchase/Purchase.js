import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [itemDetails, setItemDetails] = useState({});
    const [loginData, setLoginData] = useState({});

    const { user } = useAuth();


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

    const handleOrderSubmit = e => {
        alert('order placed')
        e.preventDefault();
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
        // console.log(newLoginData);
    }

    return (
        <>
            <Navigation></Navigation>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} sx={{ my: 5 }}>
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
                <Grid item xs={12} sm={12} md={8} sx={{ my: 5 }}>
                    <Typography variant="h6" gutterBottom component="div" >
                        Place Order
                    </Typography>

                    <form onSubmit={handleOrderSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="name"
                            id="standard-basic1"
                            value={user.displayName}
                            disabled
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="email"
                            id="standard-basic"
                            value={user.email}
                            disabled
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="phone"
                            id="phone"
                            label="Your Phone Number"
                            type="text"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="address"
                            id="address"
                            label="Your Address"
                            type="text"
                            variant="standard"
                        />
                        <Button
                            type="submit"
                            sx={{ width: '30%', m: 1, backgroundColor: '#8C6897' }}
                            variant="contained">Place Order
                        </Button>
                    </form>
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
};

export default Purchase;