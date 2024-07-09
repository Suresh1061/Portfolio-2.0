'use client'
import { motion } from 'framer-motion'

const SendBtn = ({ loading, onclick }: { loading?: boolean, onclick?: Event }): JSX.Element => {
    return (
        <div>
            {!loading ? (
                <button
                    type='submit'
                    className=" w-[110px] h-11 rounded-lg bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] flex gap-x-1.5 justify-center items-center"
                >
                    <svg
                        height="20"
                        width="20"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg>
                    <span className='text-[16px] font-Lora font-medium tracking-wider'>Send</span>
                </button>
            ) : (
                <button
                    type='submit' className=" w-[110px] h-11 rounded-lg bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] flex gap-x-1.5 justify-center items-center">
                    <motion.div
                        animate={{ y: [-3, 0, 3, 0, -3] }}
                        transition={{ duration: 1.5, easings: ['easeIn', 'easeOut'], repeat: Infinity }}
                    >
                        <svg
                            height="20"
                            width="20"
                            className=' rotate-45'
                            viewBox="0 0 22 22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                    </motion.div>
                </button>
            )}
        </div>
    );
};

export default SendBtn;