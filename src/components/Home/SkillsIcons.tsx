'use client'
import { motion } from "framer-motion"
import Subheading from '../Subheading'
import { SkillsList } from '@/utils/Skills'
import Image from 'next/image'

const SkillsIcons = ({ heading, category }: { heading: string, category: string }): JSX.Element => {
  return (
    <div>
      <Subheading heading={heading} className='mb-4 sm:mb-6' />
      <div className=' flex flex-wrap gap-8'>
        {SkillsList.filter(item => item.category === category).map((item, i) => (
          <motion.div
            initial={{ opacity: 0, translateX: 10, translateY: 10 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            key={item.name}
          >
            <div className='h-14 w-14  rounded-lg green-pink-gradient  p-[1px] cursor-pointer'>
              <div className='h-full w-full bg-black-100 rounded-lg overflow-hidden p-2 flex justify-center items-center'>
                <Image
                  src={item.icon!}
                  alt={item.name}
                  height={100}
                  width={100}
                  className=' h-12 w-12 object-contain'
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsIcons
