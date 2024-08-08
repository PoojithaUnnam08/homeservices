import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.png'; // Adjust path to your logo image

const Navbar = () => {
    const [selectedLocation, setSelectedLocation] = useState(''); // State to store selected location
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value); // Update state with selected location
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    return (
        <nav className="bg-green-600 text-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 mr-2" /> {/* Logo image */}
                    <span className="text-3xl font-bold">
                        <span className="text-yellow-200">Darshan </span> Elders Care
                    </span>
                </Link>
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    <Link to="/" className="px-4 py-2 hover:bg-green-700 rounded">Home</Link>
                    <Link to="/about" className="px-4 py-2 hover:bg-green-700 rounded">About Us</Link>
                    <div className="relative group">
                        <button className="px-4 py-2 hover:bg-green-700 rounded">
                            Home Care
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to="/bloodtest" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Bloodtest</Link>
                            <Link to="/reports" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Reports</Link>
                            <Link to="/physio" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Physio</Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="px-4 py-2 hover:bg-green-700 rounded">
                            Services
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to="/elderscare" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Elderscare</Link>
                            <Link to="/oldagehome" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Old Age Home</Link>
                            <Link to="/medicalequipments" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Medical Equipments</Link>
                            <Link to="/nursesathome" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Nurses At Home</Link>
                            <Link to="/doctorsathome" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Doctors At Home</Link>
                            <Link to="/labservices" className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500">Lab Services</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="px-4 py-2 hover:bg-green-700 rounded">Contact Us</Link>
                    
                    {/* Select Location Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 focus:outline-none"
                        >
                            {selectedLocation || 'Select Location'}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20">
                                <select
                                    className="w-full border border-gray-300 rounded-md"
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
