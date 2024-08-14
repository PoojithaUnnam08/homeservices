import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import carelogo from '../assests/images/carelogo.png'; // Adjust path to your logo image
import BookingFormModal from '../components/BookingFormModal';

const Navbar = () => {
    const [selectedLocation, setSelectedLocation] = useState(''); // State to store selected location
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value); // Update state with selected location
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="bg-white text-blue-800 shadow-md fixed top-0 left-0 w-full z-10 py-2">
            <div className="container mx-auto flex items-center justify-between px-4 h-12">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="flex items-center">
                        <img src={carelogo} alt="Logo" className="h-20 w-22" /> {/* Adjust logo size */}
                    </Link>
                    {/* Map Icon with Dropdown */}
                    <div className="relative group">
                        <FontAwesomeIcon 
                            icon={faMapMarkerAlt} 
                            className="text-blue-800 h-6 w-6 cursor-pointer" 
                        />
                        <div className="absolute left-0 mt-1 w-40 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                            <select
                                className="w-full border border-gray-300 rounded-md text-sm"
                                value={selectedLocation}
                                onChange={handleLocationChange}
                            >
                                <option value="">Select Location</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="hyderabad">Hyderabad</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="hidden lg:flex lg:items-center lg:space-x-4 text-sm">
                    <Link to="/" className="px-3 py-1 hover:bg-blue-800 hover:text-white rounded">Home</Link>
                    <div className="relative group">
                        <button className="px-3 py-1 hover:bg-blue-800 hover:text-white rounded text-sm">
                            Services
                        </button>
                        <div className="absolute left-0 mt-1 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                            <Link to="/elderscare" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-600">Elderly Care Services</Link>
                            <Link to="/oldagehome" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-600">Assisted Living</Link>
                            <Link to="/medicalequipments" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-600">Surgical</Link>
                            <Link to="/nursesathome" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-600">On Call Nurses</Link>
                            <Link to="/doctorsathome" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-600">Doctors At Home</Link>
                            <Link to="/physio" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-500">Physio</Link>
                            <Link to="/labservices" className="block px-3 py-1 hover:bg-gray-100 hover:text-blue-600">Lab Services</Link>
                        </div>
                    </div>
                    <Link to="/about" className="px-3 py-1 hover:bg-blue-800 hover:text-white rounded">About Us</Link>
                    <Link to="/contact" className="px-3 py-1 hover:bg-blue-800 hover:text-white rounded text-sm">Contact Us</Link>
                    <Link to="/blog" className="px-3 py-1 hover:bg-blue-800 hover:text-white rounded text-sm">Blog</Link>
                    
                    {/* "Book Now" Button */}
                    <button
                        onClick={openModal}
                        className="ml-4 px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-600 focus:outline-none text-sm"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* BookingFormModal Component */}
            <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
};

export default Navbar;
