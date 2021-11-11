import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, description, img, price } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 200, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    style={{ width: 'auto', height: '190px', margin: '0 auto' }}
                />
                <CardContent>
                    <Typography sx={{ color: '#8C6897', fontWeight: 700 }} variant="h7" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Price: {price}$
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.screen}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.battery}
                    </Typography>
                </CardContent>
                <CardActions style={{ marginLeft: '140px' }}>
                    <Link to='/purchase' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#8C6897' }} size="small">Purchase</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default Product;