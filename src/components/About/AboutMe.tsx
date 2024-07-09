import React from 'react'
import Container from '../Container'
import { Animation } from '@/utils/Motion'
import Image from 'next/image'
import {motion} from "framer-motion"

const AboutMe = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3  gap-10'>
            <motion.div {...Animation.slideFromLeft} className='max-w-3xl max-lg:mx-auto h-full space-y-3 lg:col-span-2 order-2 lg:order-1'>
                <div>
                    <p className="text-sm md:text-lg font-[500]  font-Lora text-yellow-600">
                        Hello, I'm 👋
                    </p>
                    <h1
                        className={` text-5xl xl:text-6xl font-serif font-semibold text-[#915eff] violet-text-gradient`}
                    >
                        Suresh Pal
                    </h1>
                </div>
                <p className='opacity-75 font-Lora tracking-wider text-base sm:text-lg text-justify'>
                    I am a passionate and driven individual pursuing a Bachelor of Technology degree in Electronics and Communication Engineering from Ramkrishna Mahato Government Engineering College in Purulia, West Bengal.I am a enthusiastic and dedicated Fullstack Web Developer with a strong foundation in MongoDB, Express js, Node js, React.js and Next js and Tailwind CSS and also i am proficient in Data Structures and Algorithms (DSA) with adept in C++ programming.I am passionate about creating elegant and user-friendly web applications, eager to contribute technical expertise and creativity to innovative projects.I am also interested in open source contribution.
                </p>
                <div>
                    <div className=" w-full flex justify-center sm:justify-start items-center gap-8 my-5">
                        <motion.a
                            {...Animation.zoomInOut}
                            href="https://drive.google.com/file/d/1r3Fu8X8Ewgis17vtpdRsJ1MPLRa_4CJa/view?usp=drive_link"
                            target="_blank"
                            className=" w-32 py-2 px-4 flex justify-center items-center rounded-full bg-[#5e03fc] text-white shadow-xl text-lg font-Space_Grotesk tracking-wide"
                        >
                            Resume
                        </motion.a>
                        <motion.a
                            {...Animation.zoomInOut}
                            href="https://drive.google.com/file/d/1r3Fu8X8Ewgis17vtpdRsJ1MPLRa_4CJa/view?usp=drive_link"
                            target="_blank"
                            className=" w-32 py-2 px-4 flex justify-center items-center rounded-full border-2 border-[#5e03fc] text-white shadow-xl text-lg font-Space_Grotesk tracking-wide"
                        >
                            Contact
                        </motion.a>
                    </div>
                </div>
            </motion.div>
            <motion.div {...Animation.slideFromRight} className='max-w-xs  mx-auto h-full relative flex justify-center items-start order-1 lg:order-2'>
                <div className=' w-full bg-shape overflow-hidden lg:mt-6'>
                    <Image
                        src={"/Images/myphoto.png"}
                        alt='my photo'
                        width={400}
                        height={400}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe
