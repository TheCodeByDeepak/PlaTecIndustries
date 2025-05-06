import React from 'react';
import '../styles/CallButton.css';
import { FaPhoneAlt } from 'react-icons/fa';

const CallButton = () => {
    return (
        <a href="tel:+911234567890" className="call-button">
            <FaPhoneAlt size={30} /> {/* Display the phone icon */}
        </a>
    );
};

export default CallButton;