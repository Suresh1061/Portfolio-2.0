import Container from "@/components/Container"
import { getProjects } from "@/libs/action"
import dynamic from "next/dynamic"
import { memo } from "react"
const ProjectDetails = memo(dynamic(() => import('@/components/Projects/ProjectDetails'), { ssr: false }))

const Page = async () => {
  const data: any = await getProjects()
  const projects: projectProps[] = data?.documents || [];

  return (
    <Container>
      {projects.length !== 0
        ? <ProjectDetails projects={projects.reverse()} />
        : <p className="text-xl text-center font-Lora text-secondary">No Projects Found</p>
      }
    </Container>
  )
}

export default Page
