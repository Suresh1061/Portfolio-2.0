'use client'
import React, { useState } from 'react'
import Container from '@/components/Container'
import { ProjectsList } from '@/utils/Projects'
import ProjectCard from '@/components/ProjectCard'

const ProjectDetails: React.FC = () => {
  const [option, setOption] = useState("all")
  const optionItem = [
    {
      name: "All Projects",
      slug: "all"
    },
    {
      name: "Full Stack",
      slug: "fullStack"
    },
    {
      name: "Frontend",
      slug: "frontend"
    },
  ]
  return (
    <Container>
      <nav className=' w-full flex justify-center items-center gap-5 sm:gap-x-10 text-sm sm:text-lg font-Lora tracking-wider mb-12'>
        {optionItem.map((item) => (
          <button
            key={item.slug}
            onClick={() => setOption(item.slug)}
            className={`${option === item.slug ? "text-white" : "text-secondary"} hover:text-white`}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
        {option === 'all' ?
          ProjectsList.map(item => (
            <ProjectCard
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              tags={item.tags}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
            />
          )) :
          ProjectsList.filter(item => item.category === option).map(item => (
            <ProjectCard
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              tags={item.tags}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
            />
          ))}
      </div>
    </Container>
  )
}

export default ProjectDetails
