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
        console.log(field, value);
        console.log(newLoginData);
    }

    return (
        <>
            <Navigation></Navigation>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} sx={{ my: 5 }}>
                    <Typography variant="subtitle2" gutterBottom component="div" >
                        Your Selected Product
                    </Typography>
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
                        <Typography variant="overline" gutterBottom component="div">
                            Product Information
                        </Typography>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Product Name"
                            value={`${itemDetails.name}`}
                            id="outlined-size-small1"
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Product Price"
                            value={`${itemDetails.price}$`}
                            id="outlined-size-small21"
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Product ID"
                            value={id}
                            id="outlined-size-small22"
                            size="small"
                            disabled
                        />

                        <Typography variant="overline" gutterBottom component="div" >
                            Your Information (provide phone,address)
                        </Typography>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Name"
                            id="outlined-size-small"
                            value={user.displayName}
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            id="outlined-size-small"
                            value={user.email}
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="phone"
                            id="outlined-size-small26"
                            size="small"
                            label="Your Phone Number"
                            type="text"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="address"
                            name="address"
                            label="Your Address"
                            type="text"
                            multiline
                            maxRows={4}
                            onBlur={handleOnBlur}
                        />
                        <Button
                            type="submit"
                            sx={{ width: '30%', m: 1, backgroundColor: '#8C6897' }}
                            variant="contained">
                            Place Order
                        </Button>
                    </form>
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
};

export default Purchase;