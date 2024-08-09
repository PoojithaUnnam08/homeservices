// src/components/Banner.js
import React from 'react';
// import wheelchairs from '';


const MedicalBanner = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`py-2 px-4 rounded-lg transition-colors ${
                        selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    } hover:bg-blue-600 hover:text-white`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default MedicalBanner;
