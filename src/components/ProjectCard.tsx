import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { FaGlobeAmericas } from 'react-icons/fa'
import fileService from '@/appwrite/file'
import { PopUpLikeSpring } from '@/utils/Animation'

type ProjectCardTypes = {
    project: projectProps;
    index: number;
}

const ProjectCard: React.FC<ProjectCardTypes> = ({ project, index }) => {
    const { title, imgSrc, description, tags, githubLink, demoLink } = project
    return (
        <PopUpLikeSpring index={index} className=' max-w-sm  green-pink-gradient p-[2px] rounded-xl '>
            <div className=' w-full h-full bg-black-200 overflow-hidden rounded-xl p-4 space-y-2 flex flex-col justify-between'>
                <Image
                    src={String(fileService.getFilePreview(imgSrc as string) || imgSrc)}
                    alt={title}
                    width={1000}
                    height={1000}
                    className=' w-full h-[10rem] rounded-lg '
                />
                <div className='space-y-2'>
                    <h2 className=' text-xl font-Merriweather tracking-wide'>{title}</h2>
                    <p className=' text-sm text-secondary font-Lora tracking-wider text-justify'>{description}</p>
                    <div className='flex flex-wrap gap-x-3'>
                        {(tags.split(", ")).map((tag, i) => (
                            <p key={i} className={` text-blue-600 font-Lora text-xs tracking-wide`}>#{tag}</p>
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
        </PopUpLikeSpring>
    )
}

export default ProjectCard
