import React from 'react'
import RecentNewsList from './RecentNewsList'
import MainRecentNews from './MainRecentNews'
import TwoRecentNews from './TwoRecentNews'

function HeroSection() {
  return (
    <div className='grid grid-cols-12 lg:grid-rows-12 min-h-[500px] grid-rows-3 gap-x-4'>
      <RecentNewsList />
      <MainRecentNews />
      <TwoRecentNews />
      <hr className='mt-10 col-span-12' />
    </div>
  )
}

export default HeroSection