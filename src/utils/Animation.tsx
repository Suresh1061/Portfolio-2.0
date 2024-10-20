'use client'

import { motion } from "framer-motion"
import React from "react";
import { Animation } from "./Motion";

type Props = {
    children: React.ReactNode;
    className?: string;
    index?: number;
}

export const PopUp: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.h1
            {...Animation.popUp}
            className={className}
        >
            {children}
        </motion.h1>
    )
}

export const ZoomInOut: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.div
            {...Animation.zoomInOut}
            className={className}
        >
            {children}
        </motion.div>
    )
}


export const SlideFromLeft: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.div
            {...Animation.slideFromLeft}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const SlideFromRight: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.div
            {...Animation.slideFromRight}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const VisiableSlowly: React.FC<Props> = ({ children, className, index = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateX: 10, translateY: 10 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const PopUpLikeSpring: React.FC<Props> = ({ children, className, index = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: 'spring', delay: index * 0.3 }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}