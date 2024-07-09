import React from "react";
import Container from "../Container";
import SkillsIcons from "./SkillsIcons";

const Skills: React.FC = () => {
    return (
        <div>
            <Container title="Tech Stacks">
                <div
                    className="w-full grid gap-y-10 lg:gap-x-20 lg:grid-cols-2 mb-5"
                >
                    <SkillsIcons heading="Frontend" category="front-end" />
                    <SkillsIcons heading="Programming Tools" category="tools" />
                    <SkillsIcons heading="Backend" category="back-end" />
                    <SkillsIcons heading="Programming Languages" category="languages" />
                </div>
            </Container>
        </div>
    );
}

export default Skills;