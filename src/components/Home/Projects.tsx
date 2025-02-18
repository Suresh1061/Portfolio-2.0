import Container from '../Container'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ProjectCard = dynamic(() => import('@/components/Projects/ProjectCard'), { ssr: false })

const Projects: React.FC<{ projects: projectProps[] }> = ({ projects }) => {
    return (
        <Container title='Projects'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={project.$id}
                            index={index + 1}
                            project={project}
                        />
                    ))
                }
            </div>
            <div className=' w-full flex justify-center items-center mt-8'>
                <Link href={'/projects'}>
                    <button className=' py-2 px-5 flex justify-center items-center rounded-full border-2 border-[#5e03fc] hover:bg-[#5e03fc] hover:duration-300 text-white shadow-xl text-base font-Space_Grotesk tracking-wide'>
                        Views More
                    </button>
                </Link>
            </div>
        </Container>
    )
}

export default Projects
