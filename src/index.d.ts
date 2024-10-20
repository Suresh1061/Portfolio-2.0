declare interface NavItemsType {
    name: string,
    path: string,
    icon: React.ReactElement
}

declare interface infoProps {
    $id: string;
    name: string;
    homeSubtitles: string;
    homeDescription: string;
    homeImg: string;
    aboutImg: string;
    aboutDescription: string;
    resume: string;
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    mobile: string;
    email: string;
    shortAddress: string;
    fullAddress: string;
    leetcode?: string;
    codeforces?: string;
    hackerrank?: string;
    codechef?: string;
    geekforgeeks?: string;
    codestudio?: string;
}

declare interface educationProps {
    $id: string;
    course: string;
    description: string;
    duration: string;
    result: string;
    institute: string;
    marks: string;
}

declare interface projectProps {
    $id: string;
    imgSrc: string;
    title: string;
    description: string;
    best?: string | boolean;
    tags: string;
    category: string;
    githubLink: string;
    demoLink: string;
}

declare interface SkillProps {
    $id: string;
    icon: string;
    name: string;
    category: string;
    details: string;
}

declare interface AchievementProps {
    $id: string;
    title: string;
    description: string;
    attachment: string;
    fileLink: string;
}

declare interface ExperienceProps {
    $id: string;
    title: string;
    duration: string;
    description: string;
    place: string;
    certificate: string;
    offerLetter: string;
    lor: string;
    optional: string;
    category: string;
    techTools: string;
    position: string;
}

declare interface IReviews {
    name: string;
    position: string;
    company: string;
    linkedin: string;
    review: string;
    photo: string;
}

declare interface ReviewProps extends IReviews {
    $id: string;
    isVerified: boolean;
}