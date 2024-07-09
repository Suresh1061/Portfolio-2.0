'use client'
import React, { useState } from 'react'
import SendBtn from '@/components/SendBtn'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Animation } from '@/utils/Motion'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser';

interface inputs {
    name: string,
    email: string,
    message: string
}

const ContactForm: React.FC = () => {
    const { handleSubmit, register, setValue } = useForm<inputs>()
    const [loading, setLoading] = useState(false)

    const onSubmit: SubmitHandler<inputs> = async (data) => {
        setLoading(true);
        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            {
                name: data.name,
                email: data.email,
                message: data.message,
            },
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
            .then(
                () => {
                    toast.success("Email sent successfully!");
                    setLoading(false);
                    setValue('name', '')
                    setValue('email', ''),
                    setValue('message', '')
                },
                (error: any) => {
                    toast.error("Something went wrong")
                    console.log(error)
                    setLoading(false);
                },
            );
    }

    return (
        <motion.div {...Animation.slideFromRight} className=' max-w-xl mx-auto w-full green-pink-gradient p-[1px] rounded-xl'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-full w-full bg-black-200 rounded-xl p-5 flex flex-col justify-between space-y-5"
            >
                <label htmlFor="name">
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name')}
                        required
                        className="bg-tertiary py-3 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full shadow-inner focus:outline-violet-500"
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="text"
                        placeholder="Your Email"
                        {...register('email')}
                        required
                        className="bg-tertiary py-3 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full focus:outline-violet-500"
                    />
                </label>
                <label htmlFor="message">
                    <textarea
                        placeholder="Your Message"
                        {...register('message')}
                        required
                        cols={50}
                        className="h-32 bg-tertiary py-3 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full  focus:outline-violet-500"
                    />
                </label>
                <SendBtn loading={loading} />
            </form>
        </motion.div>
    )
}

export default ContactForm
