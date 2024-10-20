'use client'

import React, { useMemo, useState } from 'react'
import Subheading from '../Subheading'
import Image from 'next/image'
import fileService from "@/appwrite/file"
import { VisiableSlowly } from "@/utils/Animation"

type SkillsIconsProps = {
  heading: string;
  category: string;
  skills: SkillProps[];
}

const SkillsIcons: React.FC<SkillsIconsProps> = ({ heading, category, skills }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Filter skills by category once
  const filteredSkills = useMemo(() => {
    return skills.filter(item => item.category === category);
  }, [skills, category]);

  // If there are no matching skills, return null
  if (filteredSkills.length === 0) return null;

  return (
    <div>
      <Subheading heading={heading} className='mb-4 sm:mb-6' />
      <div className='flex flex-wrap gap-8'>
        {filteredSkills.map((item, i) => (
          <VisiableSlowly index={i} key={i}>
            <div
              onMouseEnter={() => setHoveredCard(item.$id)}
              onMouseLeave={() => setHoveredCard(null)}
              className='relative cursor-pointer'
            >
              {hoveredCard === item.$id && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-[30px] sm:-top-[34px] min-w-max">
                  <div className='absolute h-2 w-2 bg-yellow-500 rotate-45 bottom-0.5 left-1/2 transform -translate-x-1/2 -z-50' />
                  <div className="bg-yellow-500 text-black text-xs sm:text-sm font-medium py-1 px-2 rounded mb-1 text-center whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              )}
              <div className=' h-14 w-14 rounded-lg green-pink-gradient p-[1px]'>
                <div className='h-full w-full bg-black-100 rounded-lg overflow-hidden p-2 flex justify-center items-center'>
                  <Image
                    src={String(fileService.getFilePreview(item?.icon))}
                    alt={item.name}
                    height={100}
                    width={100}
                    className='h-12 w-12 object-contain'
                  />
                </div>
              </div>
            </div>
          </VisiableSlowly>
        ))}
      </div>
    </div>
  );
}

export default SkillsIcons;

