'use client'

import React, { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import { SlideFromRight } from '@/utils/Animation'
import dynamic from 'next/dynamic';
const SendBtn = dynamic(() => import('@/components/SendBtn'), { ssr: false })

type inputs = {
    fullName: string,
    email: string,
    message: string
}

const ContactForm: React.FC = () => {
    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState<inputs>({
        fullName: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { fullName: name, email, message } = data
        startTransition(async () => {
            try {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                    {
                        name,
                        email,
                        message
                    },
                    process.env.NEXT_PUBLIC_PUBLIC_KEY
                )
                toast.success("Email sent successfully!");
                setData({ fullName: '', email: '', message: '' })
            } catch (error) {
                toast.error('An error occurred while sending the email');
                console.error('Error in sending email:', error);
            }
        });
    }

    return (
        <SlideFromRight className=' max-w-xl mx-auto w-full green-pink-gradient p-[1px] rounded-xl'>
            <form
                onSubmit={handleSubmit}
                className="h-full w-full bg-black-200 rounded-xl p-5 flex flex-col justify-between space-y-5"
            >
                <input
                    type="text"
                    required
                    placeholder="Your Name"
                    name='fullName'
                    value={data.fullName}
                    onChange={handleInputChange}
                    className="bg-tertiary py-3 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full shadow-inner focus:outline-violet-500"
                />
                <input
                    type="text"
                    required
                    placeholder="Your Email"
                    name='email'
                    value={data.email}
                    onChange={handleInputChange}
                    className="bg-tertiary py-3 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full focus:outline-violet-500"
                />
                <textarea
                    required
                    placeholder="Your Message"
                    name='message'
                    value={data.message}
                    onChange={handleInputChange}
                    cols={50}
                    className="h-32 bg-tertiary py-3 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full  focus:outline-violet-500"
                />
                <SendBtn loading={isPending} />
            </form>
        </SlideFromRight >
    )
}

export default ContactForm
