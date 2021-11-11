import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Review = () => {
    const [value, setValue] = React.useState(2);
    return (

        <Box sx={{ mt: 15 }}>
            <Typography sx={{ my: 5, fontWeight: 600, color: '#8C6897' }} variant="h5" component="div">Satisfied Customer's Reviews</Typography>
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>

    );
};

export default Review;