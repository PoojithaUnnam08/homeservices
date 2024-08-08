// src/pages/Medicalequipments.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Directly importing images
import electricWheelChairImage from '../assests/images/electric wheel chair.jpg';
import hospitalCotImage from '../assests/images/hospital cot.jpg';
import wheelChairImage from '../assests/images/wheel chair.jpg';
import walkerImage from '../assests/images/walker.jpg';
import glucometerImage from '../assests/images/glucometer.jpg';
import glucometerStripsImage from '../assests/images/glucometer strips.jpg';
import bpMachineImage from '../assests/images/bp machine.jpg';
import himalayagentlewipes from '../assests/images/himalayagentlewipes.jpg';
import babycare from '../assests/images/babycare.jpg';
import  metalwalker  from '../assests/images/metalwalker.jpg';
import  stainlesssteelwalker  from '../assests/images/stainlesssteelwalker.jpg';
import  drorthobacksupportbelt from '../assests/images/drorthobacksupportbelt.jpg';
import  anklesupport  from '../assests/images/anklesupport.jpg';
import  armwrist  from '../assests/images/armwrist.jpg';
import   wristbrace  from '../assests/images/wristbrace.jpg';
import   wristsplint  from '../assests/images/wristsplint.jpg';


// Product component with optional quantity input
const Product = ({ product, showQuantity }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [quantity, setQuantity] = React.useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        navigate('/cart');
    };

    return (
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-center space-y-4 shadow-lg bg-white transition-transform transform hover:scale-105">
            <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-md shadow-md"
            />
            <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2 text-lg">₹{product.price}</p> {/* Update price to ₹ */}
                {showQuantity && (
                    <>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="mt-2 w-24 border border-gray-300 rounded p-2 text-center"
                            min="1"
                        />
                        <button
                            onClick={handleAddToCart}
                            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                        >
                            Add to Cart
                        </button>
                    </>
                )}
                {!showQuantity && (
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

// Sample product data with images
const products = [
    { id: 1, name: 'Electric Wheel Chair', price: '100', image: electricWheelChairImage },
    { id: 2, name: 'Hospital Cot', price: '150', image: hospitalCotImage },
    { id: 3, name: 'Wheel Chair', price: '200', image: wheelChairImage },
    { id: 4, name: 'Walker', price: '200', image: walkerImage },
    { id: 5, name: 'Accu Check Glucometer', price: '200', image: glucometerImage },
    { id: 6, name: 'Glucometer Strips', price: '200', image: glucometerStripsImage },
    { id: 7, name: 'Blood Pressure Machine', price: '200', image: bpMachineImage },
    { id: 8, name: 'Himalaya Gentle Wipes', price: '200', image: himalayagentlewipes },
    { id: 9, name: 'BabyCare', price: '200', image: babycare },
    { id: 10, name: 'Metal Walker', price: '200', image: metalwalker },
    { id: 11, name: 'Stainless Steel Walker', price: '200', image: stainlesssteelwalker },
    { id: 12, name: 'Dr Ortho BackSupport Belt', price: '200', image: drorthobacksupportbelt },
    { id: 13, name: 'Ankle Support', price: '200', image: anklesupport },
    { id: 14, name: 'Arm Wrist', price: '200', image: armwrist },
    { id: 15, name: 'Wrist Brace', price: '200', image: wristbrace },
    { id: 16, name: 'Wrist Splint', price: '200', image: wristsplint },
    
];

const Medicalequipments = () => {
    return (
        <div className="px-4 py-8 md:px-8 md:py-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Medical Equipments</h1>
            <p className="mt-4 text-gray-600">Details about Medical equipments will go here.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        showQuantity={false} // Disable quantity input on this page
                    />
                ))}
            </div>
        </div>
    );
};

export default Medicalequipments;
