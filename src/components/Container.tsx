import React from 'react'
import { motion } from "framer-motion"
import { Animation } from '@/utils/Motion'

const Container = ({ children, title }: { title?: string, children: React.ReactNode }): JSX.Element => {
    return (
        <div className={` max-w-screen-xl w-full mx-auto max-md:h-auto min-h-screen px-4 relative ${title ? 'pt-8' : 'pt-28'}`}>
            {title && <motion.h1
                {...Animation.popUp}
                className='text-[40px] md:text-[50px] font-Poppins font-[600] capitalize text-center mb-10 mb:mb-16 '
            >
                {title}
            </motion.h1>}
            {children}
        </div>
    )
}

export default Container
