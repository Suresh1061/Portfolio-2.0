'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { FaGlobeAmericas } from 'react-icons/fa'

const ProjectCard: React.FC<ProjectsListType> = ({
    id,
    imgSrc,
    title,
    description,
    tags,
    githubLink,
    demoLink
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: 'spring', delay: id * 0.3 }}
            viewport={{ once: true }}
            className=' max-w-sm  green-pink-gradient p-[2px] rounded-xl '
        >
            <div className=' w-full h-full bg-black-200 overflow-hidden rounded-xl p-4 space-y-2 flex flex-col justify-between'>
                <Image
                    src={imgSrc}
                    alt={title}
                    width={1000}
                    height={1000}
                    className=' w-full h-[10rem] rounded-lg '
                />
                <div className='space-y-2'>
                    <h2 className=' text-xl font-Merriweather tracking-wide'>{title}</h2>
                    <p className=' text-sm text-secondary font-Lora tracking-wider text-justify'>{description}</p>
                    <div className='flex flex-wrap gap-x-3'>
                        {tags.map(tag => (
                            <p className={`${tag.color} text-blue-600 font-Lora text-xs tracking-wide`}>#{tag.name}</p>
                        ))}
                    </div>
                </div>
                <div className=' flex justify-between items-center pt-2'>
                    <Link href={githubLink} target='_blank'>
                        <AiFillGithub
                            size={25}
                            className=" text-secondary hover:text-white"
                        />
                    </Link>
                    <Link href={demoLink} target='_blank'>
                        <FaGlobeAmericas
                            size={22}
                            className=" text-secondary hover:text-white"
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
