'use client'

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const ProjectDetails: React.FC<{ projects: projectProps[] }> = ({ projects }) => {
    const [active, setActive] = useState("all")
    const projectsCategory = [
        { id: 1, title: "All Projects", category: "all" },
        { id: 2, title: "Full Stack", category: "Fullstack" },
        { id: 3, title: "Frontend", category: "Frontend" },
        { id: 4, title: "Backend", category: "Fullstack" },
        { id: 5, title: "React Native", category: "ReactNative" },
    ]

    const filteredProjects = active === 'all'
        ? projects
        : projects.filter((project) => project.category === active);

    return (
        <>
            <nav className="w-full flex justify-center items-center gap-5 sm:gap-x-10 text-sm sm:text-lg font-Lora tracking-wider mb-12">
                {projectsCategory.map((item) => (
                    <button
                        key={item.id}
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
                        key={`${active}-${project.$id}`}
                        index={index}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectDetails
