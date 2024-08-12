import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BookingFormModal = ({ isOpen, onClose }) => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        contactNumber: '',
        email: '',
        patientHistory: '',
        description: '',
        gender: '',
        conditions: {
            diabetesType1: false,
            diabetesType2: false,
            hypertension: false,
            parkinson: false,
            noneOfTheAbove: false,
        }
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                conditions: {
                    ...prev.conditions,
                    [name]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose(); // Close the modal after submission
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-semibold mb-6 text-center">Book an Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="text-lg font-medium">Name:</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-lg font-medium">Age:</span>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-lg font-medium">Contact Number:</span>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-lg font-medium">Email:</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-lg font-medium">Patient History:</span>
                        <textarea
                            name="patientHistory"
                            value={formData.patientHistory}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="3"
                        />
                    </label>
                    <label className="block">
                        <span className="text-lg font-medium">Description:</span>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="3"
                        />
                    </label>
                    <label className="block">
                        <span className="text-lg font-medium">Gender:</span>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <fieldset className="space-y-2">
                        <legend className="text-lg font-medium">Medical Conditions:</legend>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="diabetesType1"
                                checked={formData.conditions.diabetesType1}
                                onChange={handleChange}
                            />
                            <span>Diabetes Type 1</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="diabetesType2"
                                checked={formData.conditions.diabetesType2}
                                onChange={handleChange}
                            />
                            <span>Diabetes Type 2</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="hypertension"
                                checked={formData.conditions.hypertension}
                                onChange={handleChange}
                            />
                            <span>Hypertension</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="parkinson"
                                checked={formData.conditions.parkinson}
                                onChange={handleChange}
                            />
                            <span>Parkinson's</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="noneOfTheAbove"
                                checked={formData.conditions.noneOfTheAbove}
                                onChange={handleChange}
                            />
                            <span>None of the Above</span>
                        </label>
                    </fieldset>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default BookingFormModal;
