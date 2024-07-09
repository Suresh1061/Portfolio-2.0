'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopBtn = () => {
    const scrollToTop = () => {
        window.scroll(0, 0);
    }
    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-4 h-12 w-12 bg-[#5e03fc] rounded-full z-50 flex justify-center items-center">
            <motion.div
                animate={{ y: [-3, 0, 3, 0, -3] }}
                transition={{ duration: 2, easings: ["easeIn", "easeOut"], repeat: Infinity }}
            >
                <FaArrowUpLong size={18} />
            </motion.div>
        </button>
    )
}

export default ScrollToTopBtn
