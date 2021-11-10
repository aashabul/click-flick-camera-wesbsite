import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Home/Product/Product';

const products = [
    {
        id: 1,
        name: 'EKEN H6S PLUS 4K WATERPROOF DUAL SCREEN ACTION CAMERA',
        description: {
            color: 'Black',
            liveStreaming: 'Yes',
            screen: '2-inch Touch Screen + Status Screen',
            camera: '14MP',
            video: '4K25 / 2.7K30 / 1080p60 / 1080p30 / 720p120',
            photo: '12MP/ 8MP/ 5MP/ 4MP',
            viewAngle: '170 degree',
            mediaType: 'Micro USB/ HDMI',
            inputOutput: 'Micro USB / HDMI',
            externalCard: 'Micro SD 32GB',
            remote: 'Yes',
            wiFi: 'Yes',
            battery: '1050mAh Li-polymer Battery',
            workingTime: '90 Minutes',
            weight: '66g'
        },
        img: 'https://i.ibb.co/mq6gRV9/eken-h6s-250x250.jpg',
        price: 93.43
    },
    {
        id: 2,
        name: 'EKEN W9S 4K WIFI SPORT WATERPROOF ACTION CAMERA',
        description: {
            color: 'black',
            liveStreaming: 'No',
            screen: '2” Screen, 176-by-220-pixel resolution',
            camera: '4G2P wide angle + 155° wide angle',
            video: '4K @ 10fps, 1080p @ 30fps, 720p @ 30fps',
            photo: '12MP/ 8MP/ 5MP/ 2MP',
            viewAngle: '155 degree',
            mediaType: 'Micro USB/ HDMI',
            inputOutput: 'Micro USB / HDMI',
            externalCard: 'Micro SD 32GB',
            remote: 'Yes',
            wiFi: 'Yes',
            battery: 'Rechargeable 900mAh lithium battery',
            workingTime: '1.5 hours',
            weight: '64g (Battery Included)'
        },
        img: 'https://i.ibb.co/9WTNMqs/eken-w9s-action-camera-250x250.jpg',
        price: 56
    },
    {
        id: 3,
        name: 'GOPRO HERO 9 20MP 5K ULTRA HD TOUCH SCREEN WATERPROOF ACTION CAMERA',
        description: {
            color: 'white',
            liveStreaming: 'No',
            screen: '2.27 Fixed Touchscreen LCD',
            camera: '23.6 Megapixel',
            video: '5120 x 2880 at 24/25/30 fps',
            photo: '12MP/ 8MP/ 5MP/ 2MP',
            viewAngle: '90degree',
            mediaType: 'Micro USB/ HDMI',
            inputOutput: 'microSD/microSDHC/microSDXC',
            externalCard: 'Micro SD 32GB',
            remote: 'Yes',
            wiFi: 'Yes',
            battery: 'Rechargeable 900mAh lithium battery',
            workingTime: '1.5 hours',
            weight: '5.6 oz / 158 g'
        },
        img: 'https://i.ibb.co/vcSwKVY/hero-9-01-500x500-250x250.jpg',
        price: 70
    },
    {
        id: 4,
        name: 'GOPRO HERO 7 BLACK 12MP 4K TOUCH SCREEN WATERPROOF ACTION CAMERA',
        description: {
            color: 'Black',
            liveStreaming: 'Yes',
            screen: 'LCD 2" Screen Resolution (320 x 480)',
            camera: '12 MP',
            video: 'Shutter Speed: 1/16000 - 1 Second (Video)',
            photo: '12MP/ 8MP/ 5MP/ 2MP',
            viewAngle: '110 degree',
            mediaType: 'MicroSD / TF',
            inputOutput: 'microSD/microSDHC/microSDXC',
            externalCard: '256G',
            remote: 'Yes',
            wiFi: 'Yes',
            battery: 'Rechargeable Battery Pack, 3.85 VDC',
            workingTime: '2 hours',
            weight: '160 g'
        },
        img: 'https://i.ibb.co/mbX3Nsn/gopro-hero7-black-action-camera-250x250.jpg',
        price: 279
    },
    {
        id: 5,
        name: 'XIAOMI MIJIA 4K ACTION CAMERA',
        description: {
            color: 'Black',
            liveStreaming: 'Yes',
            screen: '2.4 inch touch screen',
            camera: '12 MP',
            video: '3840 × 2160p30',
            photo: '3840 × 2160',
            viewAngle: '145° wide-angle',
            mediaType: 'MicroSD / TF',
            inputOutput: 'microSD/microSDHC/microSDXC',
            externalCard: 'up to 64GB',
            remote: 'Yes',
            wiFi: 'IEEE802.11 b／g／n',
            battery: 'Rechargeable Battery Pack, 3.85 VDC',
            workingTime: '2 hours',
            weight: '150 g'
        },
        img: 'https://i.ibb.co/YBbM72d/Xiaomi-Mijia-4-K-Action-Camera-250x250.jpg',
        price: 114
    },
    {
        id: 6,
        name: 'DJI OSMO ACTION 4K ACTION CAMERA',
        description: {
            color: 'Gray',
            liveStreaming: 'Yes',
            screen: '2.4 inch touch screen',
            camera: '12 MP',
            video: '3840 × 2160p30',
            photo: '3840 × 2160',
            viewAngle: '145° wide-angle',
            mediaType: 'MicroSD / TF',
            inputOutput: 'microSD/microSDHC/microSDXC',
            externalCard: 'up to 64GB',
            remote: 'Yes',
            wiFi: 'IEEE802.11 b／g／n',
            battery: 'Rechargeable Battery Pack, 3.85 VDC',
            workingTime: '2 hours',
            weight: '150 g'
        },
        img: 'https://i.ibb.co/x72yVKg/osmo-action-4-250x250.jpg',
        price: 362
    },
    {
        id: 7,
        name: 'EKEN H5S PLUS ULTRA HD 4K PLUS 12MP TOUCH SCREEN ACTION CAMERA',
        description: {
            color: 'Black',
            liveStreaming: 'No',
            screen: 'LCD TouchPreview Screen & 0.95 LED Status Screen',
            camera: '12MP',
            video: '1920 x 1080P resolution',
            photo: '1920 x 1080P resolution',
            viewAngle: '170 Degree HD Wide Angle',
            mediaType: 'H.264 MP4',
            inputOutput: 'USB 2.0/Mini HDMI',
            externalCard: '64GB TF',
            remote: '2.4G ',
            wiFi: 'Built in 802.11.(b/g/n)',
            battery: ' Lithium Lion Battery',
            workingTime: '4K at 30fps > 50 Minutes, 1080P at 30fps > 90 Minutes',
            weight: '66g'
        },
        img: 'https://i.ibb.co/R4MnYxK/eken-h5s-plus-4k-action-camera-250x250.jpg',
        price: 114
    },
    {
        id: 8,
        name: 'INSTA360 GO FULL HD WATER RESISTANT ACTION CAMERA',
        description: {
            color: 'Golden',
            liveStreaming: 'No',
            screen: 'LCD TouchPreview Screen & 0.95 LED Status Screen',
            camera: '12MP',
            video: '3040x3040',
            photo: '2560x2560',
            viewAngle: '170 Degree HD Wide Angle',
            mediaType: 'H.264 MP4',
            inputOutput: 'Micro-USB for Android device / PC / Mac',
            externalCard: '64GB TF',
            remote: '2.4G ',
            wiFi: 'Built in 802.11.(b/g/n)',
            battery: ' Lithium Lion Battery',
            workingTime: '60 minutes',
            weight: '50g'
        },
        img: 'https://i.ibb.co/PcF3Zk5/insta360-go-228x228.jpg',
        price: 280.29
    },
    {
        id: 9,
        name: 'EKEN H9R 4K WIFI WATERPROOF ACTION CAMERA WITH REMOTE CONTROL',
        description: {
            color: 'Matt Black',
            liveStreaming: 'No',
            screen: '2 inch LCD FHD Display',
            camera: '12MP',
            video: '4k',
            photo: '4k',
            viewAngle: '170 Degree HD Wide Angle',
            mediaType: 'H.264 MP4',
            inputOutput: 'HDMI',
            externalCard: '64GB TF',
            remote: '2.4G ',
            wiFi: 'Built-in WiFi',
            battery: ' Lithium Lion Battery',
            workingTime: '60 minutes',
            weight: '50g'
        },
        img: 'https://i.ibb.co/BL6ssjs/h9r-228x228.jpg',
        price: 280.29
    },
    {
        id: 10,
        name: 'MI DASHCAM FOR CAR',
        description: {
            color: 'Black',
            liveStreaming: 'No',
            screen: '3.0 inch screen and 1.8 aperture',
            camera: '1920 x 1080P resolution',
            video: '1920 x 1080P resolution',
            photo: '1920 x 1080P resolution',
            viewAngle: '160 degree',
            mediaType: 'MicroSD / TF',
            inputOutput: 'microSD/microSDHC/microSDXC',
            externalCard: '64GB TF',
            remote: 'No',
            wiFi: 'real-time transmission',
            battery: 'auto power',
            workingTime: 'auto',
            weight: '120 g'
        },
        img: 'https://i.ibb.co/PzqmY2w/MI-Dashcam-250x250.jpg',
        price: 61
    },



]

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
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