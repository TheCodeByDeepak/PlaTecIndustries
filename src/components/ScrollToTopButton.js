import React, { useEffect, useState } from 'react';
import '../styles/ScrollToTopButton.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <FaArrowUp size={20} />
            </button>
        )
    );
};

export default ScrollToTopButton;
