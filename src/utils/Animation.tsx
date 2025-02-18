'use client'

import { delay, motion } from "framer-motion"
import React from "react";
import { Animation } from "./Motion";

type Props = {
    children: React.ReactNode;
    className?: string;
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

type springLikeAnimationProps = {
    children: React.ReactNode;
    index: number
    className?: string;
}

export const VisiableSlowly: React.FC<springLikeAnimationProps> = ({ children, className, index }) => {
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

export const PopUpLikeSpring: React.FC<springLikeAnimationProps> = ({ children, className, index }) => {
    const calculateDelay = (index: number) => {
        let delay;
        if (index <= 6) {
            return delay = index * 0.2
        } else {
            return delay = index * 0.2 + 0.1
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: 'spring', delay: calculateDelay(index + 1) }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}