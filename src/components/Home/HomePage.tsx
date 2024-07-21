'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import { Typewriter } from "react-simple-typewriter";
import { Animation } from "@/utils/Motion";
import Container from "../Container";

const HomePage: React.FC = () => {
    return (
        <Container>
            <div className=" h-full flex max-md:flex-col  md:justify-between items-start gap-12 md:gap-20 lg:pt-8 max-md:pb-10">
                <div className=" w-full max-w-3xl order-2 md:order-1 flex flex-col  space-y-3">
                    <div>
                        <p className="text-sm lg:text-base font-[500]  font-Lora text-yellow-600">
                            Hello, I&apos;m 👋
                        </p>
                        <h1
                            className={` text-5xl lg:text-7xl  font-serif font-semibold text-[#915eff] violet-text-gradient`}
                        >
                            Suresh Pal
                        </h1>
                        <h2
                            className={` text-xl lg:text-3xl text-[#fc5a03]  font-Roboto font-semibold`}
                        >
                            <Typewriter
                                cursor
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={40}
                                loop={0}
                                typeSpeed={100}
                                words={["Fullstack Web Developer"]}
                            />
                        </h2>
                    </div>
                    <p className="text-sm sm:text-lg font-Lora tracking-wider opacity-75 text-justify">
                        I create websites and applications that not only look fantastic but also function seamlessly.
                        Whether it&apos;s developing innovative apps or diving into the latest web technologies, I&apos;m all in.
                        Let&apos;s connect and turn your ideas into digital reality!
                    </p>
                    <div>
                        <div className=" w-full flex justify-center md:justify-start items-center gap-8 mt-5">
                            <motion.a
                                {...Animation.zoomInOut}
                                href="https://drive.google.com/file/d/1SVTSZQVKmIvoZsMS3CFNgaHVn3paA3_X/view?usp=sharing"
                                target="_blank"
                                className=" w-32 py-2 flex justify-center items-center rounded-full bg-[#5e03fc] text-white shadow-xl text-lg font-Space_Grotesk tracking-wide"
                            >
                                Resume
                            </motion.a>
                            <motion.a
                                {...Animation.zoomInOut}
                                href="/contact"
                                className=" w-32 py-2  flex justify-center items-center rounded-full border-2 border-[#5e03fc] text-white shadow-xl text-lg font-Space_Grotesk tracking-wide"
                            >
                                Contact
                            </motion.a>
                        </div>
                    </div>

                </div>
                <div className="  w-full max-w-md mx-auto order-1 md:order-2 ">
                    <Image
                        src={'/Images/astronut.png'}
                        alt="astronut"
                        width={500}
                        height={500}
                        className=" max-w-[22rem] mx-auto animate-pingpong"
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
