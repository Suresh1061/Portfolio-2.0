'use client'
import React from "react";
import SocialMedia from "./SocialMedia";
import ScrollToTopBtn from "./ScrollToTopBtn";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className=" h-20 w-full  bg-footer bg-center bg-cover mt-10 border-t border-slate-500 relative">
            <div className="max-w-screen-xl w-full h-full mx-auto px-4 flex justify-center sm:justify-between max-sm:flex-col items-center">
                <div className=" flex gap-1.5 items-center max-sm:order-2 max-sm:py-1">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 sm:w-7 text-white " >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                    </svg>
                    <p className=" text-xs sm:text-sm font-Lora tracking-wider ">Copyright ©{year}</p>
                </div>
                <h1 className=" text-base sm:text-lg  font-Lora tracking-wider flex max-sm:order-1">Made with ❤️ by Suresh Pal</h1>
                <SocialMedia className="max-sm:hidden" />
            </div>
            <ScrollToTopBtn />
        </div>
    );
};

export default Footer;
