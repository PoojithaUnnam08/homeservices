// src/components/ProductModal.js
import React, { useState } from 'react';

const ProductModal = ({ isOpen, onClose, productName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose(); // Close modal after submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full relative">
                <h3 className="text-2xl font-bold mb-4">{productName}</h3>
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

export default ProductModal;
