import React from 'react';
import Services from '../Service/Home/Services';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;