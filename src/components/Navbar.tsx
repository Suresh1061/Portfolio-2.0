'use client'

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import SocialMedia from './SocialMedia';
import { usePathname } from 'next/navigation';
import { NavItems } from '@/utils/NavItems';

type Props = {
    info: infoProps;
}

const Navbar = ({ info }: Props) => {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav
                className={`w-full h-20 fixed top-0 z-50 bg-[#0d0d0d]/70 backdrop-blur-sm`}
            >
                <div className=" max-w-screen-xl w-full mx-auto h-full px-4 flex items-center justify-between">
                    <div className=' flex items-center gap-x-2'>
                        <Image
                            src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
                            width={30}
                            height={30}
                            alt='logo_icon'
                            unoptimized
                        />
                        <Link
                            href="/"
                            className=" text-[#0fbff5] text-[28px] md:text-3xl font-Dancing cursor-pointer tracking-wider "
                        >
                            Suresh Pal
                        </Link>
                    </div>
                    <div className=' flex gap-x-8 items-center'>
                        <ul className="hidden sm:flex items-center gap-x-8 list-none ">
                            {NavItems.map((item) => {
                                return (
                                    <li
                                        key={item.name}
                                        className={`${pathname === item.path ? "text-white" : "text-secondary"
                                            } hover:text-white  font-Merriweather tracking-wider text-lg  cursor-pointer capitalize relative`}
                                    >
                                        <div className=" group">
                                            <Link href={item.path}>{item.name}</Link>
                                            <div className=" absolute w-0 h-[3px] bg-white group-hover:w-full transition-[width] ease-out duration-300" />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link href={info?.github} target="_blank">
                            <Image
                                src={'/Images/github.png'}
                                alt="github"
                                width={50}
                                height={50}
                                className={`opacity-65 flex w-[30px] cursor-pointer hover:opacity-100  hover:scale-110 duration-200`}
                            />
                        </Link>
                        {/* for small devices */}
                        <ul className=" sm:hidden flex flex-1 justify-end items-center">
                            {!toggle ? (
                                <AiOutlineMenu
                                    size={25}
                                    onClick={() => setToggle(!toggle)}
                                    className=" cursor-pointer ease-linear duration-300"
                                />
                            ) : (
                                <AiOutlineClose
                                    size={25}
                                    onClick={() => setToggle(!toggle)}
                                    className=" cursor-pointer ease-linear duration-300"
                                />
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* for small devices navbar */}
            {toggle && (
                <div className={`flex sm:hidden flex-col items-center  bg-[#0d0d0d]/70 fixed pt-[80px] top-0 right-0 w-2/3 h-screen z-10 ease-linear duration-300 `}>
                    <ul className=' max-w-[10rem] mx-auto flex flex-col items-start space-y-5 py-8'>
                        {NavItems.map((item) => (
                            <a
                                href={item.path}
                                key={item.name}
                                className={`${pathname === item.path ? "text-white" : "text-secondary"
                                    }   font-Merriweather tracking-wider text-xl  cursor-pointer capitalize relative flex items-center gap-2`}
                                onClick={() => setToggle(!toggle)}
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </ul>
                    <div >
                        <p className=" text-lg font-Lora tracking-wider font-medium opacity-90 text-center mb-5">
                            Let&apos;s connect
                        </p>
                        <SocialMedia info={info} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
