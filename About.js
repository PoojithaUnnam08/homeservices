// src/components/About.js
import React from 'react';

// Update the image path according to where you place your image
import aboutImage from '../assests/images/About.webp'; // Ensure the path is correct

const About = () => {
    return (
<div className="px-4 py-8 md:px-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center">
                {/* Image section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src={aboutImage} // Updated path
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                    />
                </div>
                
                {/* Content section */}
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <h4 className="text-2xl font-semibold mb-6">Live Your Senior Year All Over Again.</h4>
                    <p className="text-lg mb-4">
                        Darshan best Home health care services in Hyderabad & Bangalore is a pioneer in the culture of professional, high quality and personalised healthcare. Through the years, DCNS has been able to provide quality healthcare to millions of Indians who would otherwise seek interventions for complex medical and surgical care outside of India. Always ahead of the curve, DCNS has set a benchmark for global leaders in healthcare to emulate. With the evolving social fabric, medical care in India is facing challenges, of which rising costs and risk of prolonged hospitalisation are of prime concern.
                    </p>
                    <p className="text-lg">
                        Acknowledging the needs and challenges of healthcare delivery, DCNS intends to address all these issues through Darshan Health Care. Darshan Home Nursing Services is expertly designed to provide trusted, high quality, personalised and professional healthcare services at home.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;