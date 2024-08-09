// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.png'; // Adjust path to your logo image
import BookingFormModal from '../components/BookingFormModal';

const Navbar = () => {
    const [selectedLocation, setSelectedLocation] = useState(''); // State to store selected location
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value); // Update state with selected location
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="bg-green-600 text-white shadow-md fixed top-0 left-0 w-full z-10 py-2">
            <div className="container mx-auto flex items-center justify-between px-4 h-12">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-2" /> {/* Adjust logo size */}
                    <span className="text-xl font-bold">
                        <span className="text-yellow-200">Darshan </span> Elders Care
                    </span>
                </Link>
                <div className="hidden lg:flex lg:items-center lg:space-x-4 text-sm">
                    <Link to="/" className="px-3 py-1 hover:bg-green-700 rounded">Home</Link>
                    <Link to="/about" className="px-3 py-1 hover:bg-green-700 rounded">About Us</Link>
                    <div className="relative group">
                        <button className="px-3 py-1 hover:bg-green-700 rounded text-sm">
                            Home Care
                        </button>
                        <div className="absolute left-0 mt-1 w-40 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                            <Link to="/bloodtest" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Bloodtest</Link>
                            <Link to="/reports" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Reports</Link>
                            <Link to="/physio" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Physio</Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="px-3 py-1 hover:bg-green-700 rounded text-sm">
                            Services
                        </button>
                        <div className="absolute left-0 mt-1 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                            <Link to="/elderscare" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Elderscare</Link>
                            <Link to="/oldagehome" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Old Age Home</Link>
                            <Link to="/medicalequipments" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Medical Equipments</Link>
                            <Link to="/nursesathome" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Nurses At Home</Link>
                            <Link to="/doctorsathome" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Doctors At Home</Link>
                            <Link to="/labservices" className="block px-3 py-1 hover:bg-gray-100 hover:text-green-500">Lab Services</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="px-3 py-1 hover:bg-green-700 rounded text-sm">Contact Us</Link>
                    <Link to="/blog" className="px-3 py-1 hover:bg-green-700 rounded text-sm">Blog</Link>
                    
                    {/* Select Location Dropdown */}
                    <div className="relative z-30">
                        <button
                            onClick={toggleDropdown}
                            className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 focus:outline-none text-sm"
                        >
                            {selectedLocation || 'Select Location'}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-1 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-40">
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
                        )}
                    </div>

                    {/* "Book Now" Button */}
                    <button
                        onClick={openModal}
                        className="ml-4 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none text-sm"
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
