'use client'

import { motion } from "framer-motion"
import { Animation } from '@/utils/Motion'
import React from "react"

type Props = {
    className?: string
    heading?: string
}

const Subheading: React.FC<Props> = ({ className, heading }) => {
    return (
        <div>
            <motion.h1 {...Animation.lightPopUp} className={`text-[25px] md:text-[35px]  font-Merriweather font-semibold text-secondary tracking-wider   ${className}`}>{heading}</motion.h1>
        </div>
    )
}

export default Subheading
