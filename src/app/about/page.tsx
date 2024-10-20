import Container from '@/components/Container'
import React, { memo } from 'react'
import { getEducationDetails, getMyInfo } from '@/libs/action'
import MyInfo from '@/components/About/MyInfo'
import dynamic from 'next/dynamic'
const Education = memo(dynamic(() => import('@/components/About/Education'), { ssr: false }));
// import CodingProfile from '@/components/About/CodingProfile'

const AboutMe = async () => {
  //fetch about section data
  const data: any = await getMyInfo()
  const info: infoProps = data.documents[0]

  //fetch education section data
  const result: any = await getEducationDetails()
  const educationDetails: educationProps[] = result.documents;

  return (
    <Container>
      <MyInfo info={info} />
      {/* <CodingProfile info={info}/> */}
      {educationDetails.length > 0 && <Education educationDetails={educationDetails.reverse()} />}
    </Container>
  )
}

export default AboutMe
