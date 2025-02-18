import Container from "../Container";
import dynamic from "next/dynamic";
const SkillsIcons = dynamic(() => import("./SkillsIcons"), { ssr: false })

const Skills: React.FC<{ skills: SkillProps[] }> = ({ skills }) => {
    const SkillsCategory = [
        {
            id: 1,
            title: "Frontend Tools",
            category: "Frontend",
        },
        {
            id: 2,
            title: "Programming Tools",
            category: "Tools",
        },
        {
            id: 3,
            title: "Backend Tools",
            category: "Backend",
        },
        {
            id: 4,
            title: "Programming Languages",
            category: "Language",
        },
        {
            id: 5,
            title: "App Developement Tools",
            category: "ReactNative",
        },
        {
            id: 6,
            title: "Soft Skills",
            category: "SoftSkills",
        },
        {
            id: 7,
            title: "Others",
            category: "Others",
        },
    ]

    return (
        <div>
            <Container title="Tech Stacks">
                <div
                    className="w-full grid gap-y-10 lg:gap-x-20 lg:grid-cols-2 mb-5"
                >
                    {SkillsCategory.map((item) => (
                        <SkillsIcons
                            key={item.id}
                            heading={item.title}
                            category={item.category}
                            skills={skills}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Skills;