import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="px-4 py-8 md:px-8 md:py-16">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-4">
                Get in touch with us for more information about our services or to schedule an appointment. We are here to assist you.
            </p>
            <button
                onClick={openModal}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
                Show Contact Details
            </button>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Contact;
