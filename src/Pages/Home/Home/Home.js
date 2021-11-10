import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <Review></Review>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;