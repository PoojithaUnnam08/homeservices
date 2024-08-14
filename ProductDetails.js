import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/product'; // Ensure the correct path

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((prod) => prod.id === parseInt(id));
    const { addToCart } = useCart();

    if (!product) {
        return <p>Product not found!</p>;
    }

    const handleBackClick = () => {
        navigate('/medicalequipments'); // Navigate back to the Medicalequipments page
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
                <div className="md:ml-8 mt-4 md:mt-0">
                    <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 mt-4 text-lg">₹{product.price}</p>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, lacus sed facilisis consectetur, risus lacus consectetur orci, non interdum sapien nunc at est.
                    </p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={handleBackClick}
                        className="mt-4 ml-4 bg-gray-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
