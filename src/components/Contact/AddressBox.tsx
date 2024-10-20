import React from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { FaLocationDot, FaWhatsapp, FaTelegram } from "react-icons/fa6"
import { SlideFromLeft } from '@/utils/Animation'


const AddressBox: React.FC<{ info: infoProps }> = ({ info }) => {
    return (
        <SlideFromLeft className='max-w-sm mx-auto w-full green-pink-gradient p-[1px] rounded-xl'>
            <div className='h-full w-full bg-black-200 rounded-xl p-5'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.133238509599!2d87.30504014128167!3d23.112309916443614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7912fa05d3e89%3A0x4c195efefee44206!2sAbantika%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1691076822802!5m2!1sen!2sin"
                    className="object-fill w-full h-52 rounded-md"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="text-base font-Lora tracking-wider opacity-95 space-y-3 mt-4">
                    <h4 className="flex items-center gap-4">
                        <FaLocationDot size={22} color="#ff4d4d" />
                        {info?.shortAddress || "Abantika"}
                    </h4>
                    <h4 className="flex items-center gap-4">
                        <FaTelegram size={22} color="0088cc" />
                        @Pal6378
                    </h4>
                    <h4 className="flex items-center gap-4">
                        <FaWhatsapp size={22} color="#1aff66" />
                        +91{" "}{info?.mobile || "8158946895"}
                    </h4>
                    <h4 className="flex items-center gap-4">
                        <HiOutlineMail size={22} color="#3385ff" />
                        {info?.email || "sureshabantika@gmail.com"}
                    </h4>
                </div>
            </div>
        </SlideFromLeft>
    )
}

export default AddressBox