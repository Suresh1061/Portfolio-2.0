'use client'

import { Animation } from '@/utils/Motion'
import { motion } from 'framer-motion'

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    return (
        <motion.h1
            {...Animation.popUp}
            className='text-[40px] md:text-[50px] font-Poppins font-[600] capitalize text-center mb-10 mb:mb-16 '
        >
            {title}
        </motion.h1>
    )
}

export default Title