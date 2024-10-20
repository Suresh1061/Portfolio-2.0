'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    const toggleVisibility = () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Show button when scrolled more than 10% of the viewport height
        if (scrolled > viewportHeight * 0.1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && ( // Conditionally render the button
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-4 h-12 w-12 bg-[#5e03fc] rounded-full z-50 flex justify-center items-center"
                >
                    <motion.div
                        animate={{ y: [-3, 0, 3, 0, -3] }}
                        transition={{ duration: 2, easings: ["easeIn", "easeOut"], repeat: Infinity }}
                    >
                        <FaArrowUpLong size={18} />
                    </motion.div>
                </button>
            )}
        </>
    );
};

export default ScrollToTopBtn;
