import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import './ContactModal.css'; // Import the CSS file for styling
import BookingFormModal from './BookingFormModal'; // Import the new modal

const containerStyle = {
    width: '100%',
    height: '400px', // Adjust the height to fit your design
};

const center = {
    lat: 12.930026,
    lng: 77.571291,
};

const ContactModal = ({ isOpen, onClose }) => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [searchCategory, setSearchCategory] = useState('');
    const [directionsResponse, setDirectionsResponse] = useState(null);

    if (!isOpen) return null;

    // const handleBookNowClick = () => {
    //     setIsFormModalOpen(true);
    // };

    const handleCategoryChange = (e) => {
        setSearchCategory(e.target.value);
    };

    const handleSearch = async () => {
        const directionsService = new window.google.maps.DirectionsService();
        const request = {
            origin: '12.8634152,77.5504773', // Start location
            destination: 'Darshan Elders Care Pvt Ltd, 194, 8th Main, Narayana Nagar 2nd Block, Doddakallasandra, Bengaluru, Karnataka 560062', // End location
            travelMode: window.google.maps.TravelMode.DRIVING,
        };
        directionsService.route(request, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                setDirectionsResponse(result);
            } else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="text-2xl font-bold">Contact Details</h3>
                </div>
                <div className="modal-body">
                    <p className="text-lg">
                        Address: #9 Gokulam 1st floor 4th cross Banashankari 2nd stage Bangalore 560070
                    </p>
                    <div className="mb-4">
                        <LoadScript
                            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
                            libraries={['places']} // Include places library for autocomplete if needed
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={15}
                            >
                                {directionsResponse && (
                                    <DirectionsRenderer directions={directionsResponse} />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="searchCategory" className="block text-lg font-medium mb-2">Search Category</label>
                        <input
                            id="searchCategory"
                            type="text"
                            value={searchCategory}
                            onChange={handleCategoryChange}
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Enter location"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2"
                        >
                            Show Directions
                        </button>
                    </div>
                </div>
                <div className="modal-footer">
                    {/* <button
                        onClick={handleBookNowClick}
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Book Now
                    </button> */}
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
            </div>
            <BookingFormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
        </div>
    );
};

export default ContactModal;
