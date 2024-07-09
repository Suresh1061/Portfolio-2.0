import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const SocialMedia = ({ className }: { className?: string }) => {
    return (
        <div className={`flex gap-x-4 mr-2 ${className}`}>
            <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    href="https://www.linkedin.com/in/suresh-pal-80020922a"
                    target="_blank"
                    className=" h-full w-full  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0072b1] bg-black-100"
                >
                    <FaLinkedinIn size={18} />
                </motion.a>
            </div>
            <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    href="https://twitter.com/SureshPal685"
                    target="_blank"
                    className=" h-full w-full  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#14171A] bg-black-100"
                >
                    <FaXTwitter size={18} />
                </motion.a>
            </div>
            <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    href="https://instagram.com/sureshpal8158?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                    className=" h-full w-full  rounded-full flex justify-center items-center cursor-pointer instra  bg-black-100"
                >
                    <FaInstagram size={20} />
                </motion.a>
            </div>
            <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    href="https://www.facebook.com/profile.php?id=100074086172427&mibextid=2JQ9oc"
                    target="_blank"
                    className=' h-full w-full rounded-full flex justify-center items-center cursor-pointer hover:bg-[#1877F2]  bg-black-100'
                >
                    <FaFacebookF size={18} />
                </motion.a>
            </div>
        </div>
    )
}

export default SocialMedia
