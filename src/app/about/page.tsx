'use client'
import MyInfo from '@/components/About/MYInfo'
import Education from '@/components/About/Education'
import Container from '@/components/Container'
import React from 'react'

const AboutMe: React.FC = () => {
  return (
    <Container>
      <MyInfo />
      <Education />
    </Container>
  )
}

export default AboutMe
