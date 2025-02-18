'use client'

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

type SocialMediaProps = {
    className?: string;
    info: infoProps;
}

const hoverEffect = {
    whileHover: { scale: 1.1 },
    transition: { duration: 0.1 },
};

const SocialMedia: React.FC<SocialMediaProps> = ({ className, info }) => {
    return (
        <div className={`flex gap-x-4 mr-2 ${className}`}>
            {info?.linkedin && (
                <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                    <motion.a
                        {...hoverEffect}
                        href={info.linkedin}
                        target="_blank"
                        className="h-full w-full rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0072b1] bg-black-100"
                    >
                        <FaLinkedinIn size={18} />
                    </motion.a>
                </div>
            )}
            {info?.twitter && (
                <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                    <motion.a
                        {...hoverEffect}
                        href={info.twitter}
                        target="_blank"
                        className="h-full w-full rounded-full flex justify-center items-center cursor-pointer hover:bg-[#14171A] bg-black-100"
                    >
                        <FaXTwitter size={18} />
                    </motion.a>
                </div>
            )}
            {info?.instagram && (
                <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                    <motion.a
                        {...hoverEffect}
                        href={info.instagram}
                        target="_blank"
                        className=" h-full w-full  rounded-full flex justify-center items-center cursor-pointer instra  bg-black-100"
                    >
                        <FaInstagram size={20} />
                    </motion.a>
                </div>
            )}
            {info?.facebook && (
                <div className='h-9 w-9 green-pink-gradient rounded-full p-[1px] flex justify-center items-center'>
                    <motion.a
                        {...hoverEffect}
                        href={info.facebook}
                        target="_blank"
                        className='h-full w-full rounded-full flex justify-center items-center cursor-pointer hover:bg-[#1877F2] bg-black-100'
                    >
                        <FaFacebookF size={18} />
                    </motion.a>
                </div>
            )}
        </div>
    )
}

export default SocialMedia
