// src/components/Home.js
import React, { useState } from 'react';
import Banner from '../components/Banner/Banner'; // Import the Banner component
import BookingFormModal from '../components/BookingFormModal'; // Import the BookingFormModal component

// Import the image
import healthcareImage from '../assests/images/images.jfif'; // Correct path to the image

const Home = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handler to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Handler to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Banner /> {/* Add the Banner component here */}
            <div className="home-content px-4 py-8 md:px-8 md:py-16" style={{ marginTop: '45vh' }}>
                <h2 className="mt-6 text-2xl font-bold">
                    Welcome To Darshan Home Health Care Service in Bangalore
                </h2>
                <p className="mt-4 text-lg">
                    The Best Home Health Care Services In Bangalore. Darshan Elders Care Pvt Ltd provides home health care services expertly designed to provide trusted, high quality, personalized, and professional services at home in Bangalore.
                </p>
                <button
                    onClick={openModal}
                    className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Book Now
                </button>
                <img 
                    src={healthcareImage} // Use the imported image
                    alt="Healthcare" 
                    className="mt-6 mx-auto max-w-full h-auto" 
                />
              
            </div>

            {/* BookingFormModal Component */}
            <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Home;
