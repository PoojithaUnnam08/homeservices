// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Homecare from './pages/Homecare';
import Bloodtest from './pages/Bloodtest';
import Reports from './pages/Reports';
import Physio from './pages/Physio';
import Elderscare from './pages/Elderscare';
import Oldagehome from './pages/Oldagehome';
import Medicalequipments from './pages/Medicalequipments';
import ProductDetails from './pages/ProductDetails';
import Nursesathome from './pages/Nursesathome';
import Doctorsathome from './pages/Doctorsathome';
import Labservices from './pages/Labservices';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import './App.css';

const App = () => {
    return (
        <Router>
            <CartProvider> {/* Wrap with CartProvider */}
                <div className="App">
                    <Navbar />
                    <main className="pt-16">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/homecare" element={<Homecare />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/bloodtest" element={<Bloodtest />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/physio" element={<Physio />} />
                            <Route path="/elderscare" element={<Elderscare />} />
                            <Route path="/oldagehome" element={<Oldagehome />} />
                            <Route path="/nursesathome" element={<Nursesathome/>} />
                            <Route path="/doctorsathome" element={<Doctorsathome />} />
                            <Route path="/labservices" element={<Labservices />} />
                            <Route path="/medicalequipments" element={<Medicalequipments />} />
                            <Route path="/product/:id" element={<ProductDetails />} /> 
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </Router>
    );
};

export default App;
