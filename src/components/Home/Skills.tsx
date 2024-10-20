import { memo } from "react";
import Container from "../Container";
import dynamic from "next/dynamic";
const SkillsIcons = memo(dynamic(() => import("./SkillsIcons"), { ssr: false }));

const Skills: React.FC<{ skills: SkillProps[] }> = ({ skills }) => {
    const SkillsCategory = [
        {
            title: "Frontend Tools",
            category: "Frontend",
        },
        {
            title: "Programming Tools",
            category: "Tools",
        },
        {
            title: "Backend Tools",
            category: "Backend",
        },
        {
            title: "Programming Languages",
            category: "Language",
        },
        {
            title: "React Native App",
            category: "ReactNative",
        },
        {
            title: "Soft Skills",
            category: "SoftSkills",
        },
        {
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
                    {SkillsCategory.map((item, i) => (
                        <SkillsIcons
                            key={i}
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