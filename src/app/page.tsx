import BusinessSection from '@/_components/BusinessSection'
import EntertainmentSection from '@/_components/EntertainmentSection'
import HeroSection from '@/_components/HeroSection'
import SportsSection from '@/_components/SportsSection'
import React from 'react'
import TechnologySection from '@/_components/TechnologySection';

function Home() {
  return (
    <div className='lg:mt-30 max-w-[360px] lg:max-w-[1440px] mx-auto lg:px-20 px-4 mt-5'>
      <HeroSection />
      <BusinessSection />
      <EntertainmentSection />
      <SportsSection />
      <TechnologySection />
    </div>
  )
}

export default Home