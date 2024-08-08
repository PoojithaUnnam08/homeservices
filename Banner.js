import React from 'react';
import Slider from 'react-slick';
import './Banner.css';

// Import the images
import healthcareImage from '../../assests/images/healthcare.jfif'; // Adjust the path
import emergencyImage from '../../assests/images/emergency.jfif'; 

const images = [healthcareImage, emergencyImage]; // Add more image paths as needed

const Banner = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 3000, // Time between slides in milliseconds (3000ms = 3 seconds)
        pauseOnHover: true, // Pause on hover
    };

    return (
        <div className="banner">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Banner ${index}`} className="banner-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
