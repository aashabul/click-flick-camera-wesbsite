import React, { useEffect, useState } from 'react';

const Myorders = () => {

    const [orders, setOrder] = useState();
    useEffect(() => {
        fetch('https://fierce-garden-34186.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div>
            <h2>my orders</h2>
        </div>
    );
};

export default Myorders;