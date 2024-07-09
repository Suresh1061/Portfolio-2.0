declare interface NavItemsType {
    name: string,
    path: string,
    icon: React.ReactElement
}
declare interface SkillsListType {
    name: string,
    icon?: string,
    category: string
}

interface tag {
    name: string,
    color: string
}
declare interface ProjectsListType {
    id: number,
    imgSrc: string,
    title: string,
    description: string,
    tags: tag[],
    isBest?: boolean,
    githubLink: string,
    demoLink: string
}

declare interface EducationType {
    id?: number,
    date?: string,
    name?: string,
    description?: string,
}

declare interface sendMessageTypes {
    name: string,
    email: string,
    message: string
}