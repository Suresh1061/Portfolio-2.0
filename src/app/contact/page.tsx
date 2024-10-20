import React from 'react'
import Container from '@/components/Container'
import { SlideFromLeft } from '@/utils/Animation'
import { getMyInfo } from '@/libs/action'
import Subheading from '@/components/Subheading'
import AddressBox from '@/components/Contact/AddressBox'
import dynamic from 'next/dynamic'
const ContactForm = dynamic(() => import('@/components/Contact/ContactForm'), { ssr: false })

const ContactUs = async() => {
  const data:any = await getMyInfo();
  const info:infoProps = data?.documents[0]

  return (
      <Container>
        <div>
          <Subheading heading='Get in touch' />
          <SlideFromLeft>
            <p className='opacity-70 font-Lora text-sm md:text-base tracking-wider'>
              I am available for any freelance or internship or full-time positions<br />
              Connect me and let&apos;s talk
            </p>
          </SlideFromLeft>
        </div>
        <div className='flex max-md:flex-col gap-10 py-12'>
          <AddressBox info={info}/>
        <ContactForm />
        </div>
      </Container>
  )
}

export default ContactUs
