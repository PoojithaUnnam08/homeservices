// src/components/PaymentModal.js
import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const PaymentModal = ({ isOpen, onRequestClose, onOrderPlaced }) => {
    const [paymentMethod, setPaymentMethod] = React.useState('');
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [upiId, setUpiId] = React.useState('');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
        if (method === 'COD') {
            // Implement the order placement logic for COD
            onOrderPlaced();
        }
    };

    const handleOrderPlacement = () => {
        if (paymentMethod === 'UPI' && !upiId) {
            alert('Please enter your UPI ID.');
            return;
        }
        // Implement the order placement logic here
        onOrderPlaced();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
                <div className="flex flex-col space-y-2">
                    <button
                        onClick={() => handlePaymentMethodChange('COD')}
                        className="flex items-center p-2 border border-gray-300 rounded"
                    >
                        <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                        Cash on Delivery
                    </button>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center p-2 border border-gray-300 rounded"
                    >
                        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                        Online Payment
                        <span className="ml-auto">{isDropdownOpen ? '▲' : '▼'}</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="pl-6 mt-2 space-y-2">
                            <button
                                onClick={() => {
                                    setPaymentMethod('UPI');
                                    handleOrderPlacement();
                                }}
                                className="flex items-center p-2 border border-gray-300 rounded"
                            >
                                <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                                PhonePe
                            </button>
                            <button
                                onClick={() => {
                                    setPaymentMethod('UPI');
                                    handleOrderPlacement();
                                }}
                                className="flex items-center p-2 border border-gray-300 rounded"
                            >
                                <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                                Google Pay
                            </button>
                        </div>
                    )}
                    <button
                        onClick={() => setPaymentMethod('Card')}
                        className="flex items-center p-2 border border-gray-300 rounded"
                    >
                        <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                        Card Payment
                    </button>
                </div>
                {paymentMethod === 'Card' && (
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full border border-gray-300 p-2 rounded mb-2"
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            className="w-full border border-gray-300 p-2 rounded mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Name on Card"
                            className="w-full border border-gray-300 p-2 rounded mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Expiry Date"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                )}
                {paymentMethod === 'UPI' && (
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Enter your UPI ID"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded mb-2"
                        />
                    </div>
                )}
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onRequestClose}
                        className="bg-gray-400 text-white py-2 px-4 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleOrderPlacement}
                        className="bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default PaymentModal;
