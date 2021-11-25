import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [orderedProduct, setOrderedProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const { user } = useAuth();


    useEffect(() => {
        fetch('https://fierce-garden-34186.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    useEffect(() => {
        if (products.length > 0) {
            const catchItem = products.find(product => product.id == id);
            setOrderedProduct(catchItem);
        }
    }, [products, id])


    // seding purchase data to server
    const onSubmit = data => {

        fetch('https://fierce-garden-34186.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
        // console.log(data)
    }


    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} sx={{ my: 5 }}>
                        <Typography variant="subtitle2" gutterBottom component="div" sx={{ my: 4 }}>
                            Your Selected Product
                        </Typography>
                        <Card sx={{ minWidth: 200, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={orderedProduct.img}
                                style={{ width: 'auto', height: '190px', margin: '0 auto' }}
                            />
                            <CardContent>
                                <Typography sx={{ color: '#8C6897', fontWeight: 700 }} variant="h7" component="div">
                                    {orderedProduct.name}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    price: {orderedProduct.price}$
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    product ID: {id}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} sx={{ my: 5 }}>
                        <Typography variant="h6" gutterBottom component="div" >
                            Place Order
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Typography variant="overline" gutterBottom component="div" >
                                Customer Information
                            </Typography>
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={user.displayName} {...register("name")} />
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={user.email} {...register("email")} />
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} placeholder='City' {...register("City", { required: true })} />
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} placeholder='Address' {...register("Address", { required: true })} />
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} placeholder='Phone' {...register("Phone", { required: true })} />
                            <Typography variant="overline" gutterBottom component="div">
                                Product Information
                            </Typography>
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} disabled defaultValue={orderedProduct.name} {...register("productName")} />

                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} disabled defaultValue={orderedProduct.price} {...register("productPrice")} />
                            <input style={{ width: '90%', margin: "5px", padding: "5px" }} disabled defaultValue={id} {...register("productId")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input style={{ width: '40%', margin: "5px", padding: "5px" }} type="submit" value="Place Order" />
                        </form>

                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Purchase;