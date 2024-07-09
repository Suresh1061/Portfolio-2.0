import React from 'react'
import { motion } from "framer-motion"
import { Animation } from '@/utils/Motion'

const Subheading = ({ className, heading }: { className?: string, heading?: string }):JSX.Element => {
    return (
        <div>
            <motion.h1 {...Animation.lightPopUp} className={`text-[25px] md:text-[35px]  font-Merriweather font-semibold text-secondary tracking-wider   ${className}`}>{heading}</motion.h1>
        </div>
    )
}

export default Subheading
