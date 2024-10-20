'use client'

import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        message: '',
    })

    // Update form inputs using this onChange handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data:', data);
        // Here you can send the data to the server or handle it further
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                value={data.fullName}
                placeholder="Full Name"
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
                name="message"
                value={data.message}
                placeholder="Message"
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
