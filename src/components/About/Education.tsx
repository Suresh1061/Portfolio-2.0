import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { EducationDetails } from "@/utils/Education";
import Container from "../Container";
import Subheading from "../Subheading";


const Education = ({ id, date, name, description }: EducationType) => {
    return (
        <Container>
            <Subheading heading="Education Details" className=" text-center mb-10"/>
            <VerticalTimeline>
            {EducationDetails.map(item => (
                <VerticalTimelineElement
                    key={item.id}
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#13023b",
                        color: "#fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                    date={item.date}
                    iconStyle={{ background: "#131117" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <Image
                                src={"/Images/education.png"}
                                alt="education icon"
                                width={40}
                                height={40}
                            />
                        </div>
                    }
                >
                    <h3 className=" text-[22px]  tracking-wider  font-[500] font-Roboto">
                        {item.name}
                    </h3>
                    <p className=" text-base text-secondary  font-Lora">
                        {item.description}
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
        </Container>
        
    );
};

export default Education;