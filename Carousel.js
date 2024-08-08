import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        '/images/healthcare.jfif',
        '/images/emergency.jfif',
        '/images/images.jfif'
    ];

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    // };

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    // };

    return (
        <div className="relative w-full h-64 overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-full"
                        style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                ))}
            </div>
            {/* <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                ‹
            </button> */}
            {/* <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                ›
            </button> */}
        </div>
    );
};

export default Carousel;
