// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    const handleContinueToPurchase = () => {
        navigate('/medicalequipments');
    };

    const handleQuantityChange = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="px-4 py-8 md:px-8 md:py-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
            <div className="mt-4">
                {cart.map((item) => (
                    <div key={item.id} className="border border-gray-300 rounded-lg p-6 mb-6 flex items-center shadow-lg bg-white transition-transform transform hover:scale-105">
                        <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md shadow-md mr-4" />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 text-lg mt-1">₹{item.price}</p> {/* Display price with ₹ */}
                            <div className="mt-2 flex items-center">
                                <p className="text-gray-600 text-lg mr-2">Quantity:</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                    className="w-24 border border-gray-300 rounded p-2"
                                    min="1"
                                />
                            </div>
                            <p className="mt-2 text-gray-600 text-lg">Cost: ₹{(item.price.replace('₹', '') * item.quantity).toFixed(2)}</p> {/* Update total cost to ₹ */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex space-x-4">
                <button
                    onClick={handleProceedToCheckout}
                    className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors"
                >
                    Proceed to Checkout
                </button>
                <button
                    onClick={handleContinueToPurchase}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                    Continue to Purchase
                </button>
                <button
                    onClick={handleClearCart}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-colors"
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
