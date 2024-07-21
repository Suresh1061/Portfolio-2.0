'use client'
import React from 'react'
import HomePage from '@/components/Home/HomePage'
import Skills from "@/components/Home/Skills"
import Projects from '@/components/Home/Projects'


const page = () => {
  return (
    <div className="relative z-0 w-full">
      <HomePage />
      <Skills />
      <Projects />
    </div>
  )
}

export default page
