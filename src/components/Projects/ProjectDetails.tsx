'use client'

import dynamic from 'next/dynamic'
import React, { useMemo, useState } from 'react'
const ProjectCard = dynamic(() => import('@/components/ProjectCard'), { ssr: false })

const ProjectDetails: React.FC<{ projects: projectProps[] }> = ({ projects }) => {
    const [active, setActive] = useState("all")
    const projectsCategory = [
        { title: "All Projects", category: "all" },
        { title: "Full Stack", category: "Fullstack" },
        { title: "Frontend", category: "Frontend" },
        { title: "Backend", category: "Fullstack" },
    ]

    // Filtered projects based on active category
    const filteredProjects = useMemo(() => {
        return active === 'all'
            ? projects
            : projects.filter((project) => project.category === active);
    }, [active, projects]);


    return (
        <>
            <nav className="w-full flex justify-center items-center gap-5 sm:gap-x-10 text-sm sm:text-lg font-Lora tracking-wider mb-12">
                {projectsCategory.map((item) => (
                    <button
                        key={item.category}
                        onClick={() => setActive(item.category)}
                        className={`${active === item.category ? 'text-white' : 'text-secondary'} hover:text-white capitalize`}
                    >
                        {item.title}
                    </button>
                ))}
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.$id}
                        index={index}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectDetails
