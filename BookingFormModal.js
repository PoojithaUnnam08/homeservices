import React, { useState } from 'react';

const BookingFormModal = ({ isOpen, onClose }) => {
    // Define state at the top level of the component
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        serviceType: '',
        description: '',
        gender: '', // Add gender field to state
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission here
        console.log('Form submitted:', formData);
        onClose(); // Close the modal after submission
    };

    // Early return to handle modal visibility
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full relative">
                <h3 className="text-2xl font-bold mb-4">Booking Form</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-lg font-medium mb-1">Contact Number</label>
                        <input
                            id="contactNumber"
                            name="contactNumber"
                            type="tel"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceType" className="block text-lg font-medium mb-1">Type of Service</label>
                        <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="Doctorsathome">Doctorsathome</option>
                            <option value="Nursesathome">Nursesathome</option>
                            <option value="Labservices">Labservices</option>
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="description" className="block text-lg font-medium mb-1">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            rows="3"
                        />
                        <div className="absolute bottom-2 right-2">
                            <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded p-2"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default BookingFormModal;
