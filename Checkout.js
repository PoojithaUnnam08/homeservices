// src/pages/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import PaymentModal from '../components/PaymentModal'; // Import PaymentModal

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calculate the total cost
    const totalCost = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')); // Remove ₹ and any commas
        return total + price * item.quantity;
    }, 0);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOrderPlaced = () => {
        clearCart(); // Clear the cart
        handleCloseModal(); // Close the modal
        // Redirect or display a success message
        // For example, you can navigate to another page or show a success message
    };

    return (
        <div className="px-4 py-8 md:px-8 md:py-16 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Checkout</h1>
            <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="space-y-4">
                    {cart.map((item, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-4 flex items-center bg-white shadow-sm">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
                                <p className="text-gray-600 mt-1">₹{item.price}</p> {/* Update price to ₹ */}
                                <p className="text-gray-600 mt-1">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Display total cost */}
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Total Cost:</h3>
                    <p className="text-2xl font-bold text-gray-900">₹{totalCost.toFixed(2)}</p>
                </div>
                {/* Button to open payment modal */}
                <div className="mt-6 text-center">
                    <button
                        onClick={handleOpenModal}
                        className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                onOrderPlaced={handleOrderPlaced} // Pass the handler to PaymentModal
            />
        </div>
    );
};

export default Checkout;
