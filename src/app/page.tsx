import HomePage from '@/components/Home/HomePage'
import Skills from '@/components/Home/Skills'
import Projects from '@/components/Home/Projects'
import { getMyInfo, getProjects, getSkills } from '@/libs/action'

const Page = async () => {
  //fetch my info data
  const infoData: any = await getMyInfo()
  const info: infoProps = infoData?.documents[0]

  //fetch my skills data
  const skillsData: any = await getSkills()
  const skills: SkillProps[] = skillsData?.documents

  //fetch my projects data
  const projectData: any = await getProjects()
  const projects: projectProps[] = projectData?.documents

  const filterBestProjects = projects.filter(project => project.best === true)

  return (
    <div className="relative z-0 w-full">
      <HomePage info={info} />
      {skills.length > 0 && <Skills skills={skills} />}
      {(projects.length > 0 && filterBestProjects.length > 0) &&
        <Projects projects={filterBestProjects.reverse()} />
      }
    </div>
  )
}

export default Page
