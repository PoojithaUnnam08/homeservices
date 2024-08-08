// src/context/CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (itemIndex > -1) {
                // Item already in cart, update quantity
                const newCart = [...prevCart];
                newCart[itemIndex].quantity += item.quantity;
                return newCart;
            }
            return [...prevCart, item];
        });
    };

    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart.filter(item => item.id !== id)
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
