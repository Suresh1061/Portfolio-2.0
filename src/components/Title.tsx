'use client'

import { motion } from 'framer-motion'

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    return (
        <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            className='text-[40px] md:text-[50px] font-Poppins font-[600] capitalize text-center mb-10 mb:mb-16 '
        >
            {title}
        </motion.h1>
    )
}

export default Title