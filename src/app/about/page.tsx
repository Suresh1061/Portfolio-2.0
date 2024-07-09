'use client'
import AboutMe from '@/components/About/AboutMe'
import Education from '@/components/About/Education'
import Container from '@/components/Container'
import { EducationDetails } from '@/utils/Education'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const page = () => {
  return (
    <Container>
      <AboutMe />
      <Education/>
    </Container>
  )
}

export default page
