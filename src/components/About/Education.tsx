'use client'

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Subheading from "../Subheading";

type Props = {
    educationDetails: educationProps[];
};

const Education: React.FC<Props> = ({ educationDetails }) => {

    return (
        <div className=" mt-20">
            <Subheading heading="Education Details" className=" text-center mb-10" />
            <VerticalTimeline>
                {educationDetails.map(item => (
                    <VerticalTimelineElement
                        key={item.$id}
                        visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#13023b",
                            color: "#fff",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                        date={item.duration}
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
                            {item.course}
                        </h3>
                        <p className=" text-base text-secondary  font-Lora">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Education;