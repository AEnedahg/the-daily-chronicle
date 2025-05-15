import React from 'react'
import RecentTechnologyNewsList from './RecentTechnologyNewsList'
import MainTechnologyRecentNews from './MainTechnologyRecentNews'
import TwoRecentTechnologyNews from './TwoRecentTechnologyNews'

function TechologySection() {
  return (
    <section className=" min-h-[500px]">
      <h1 className="text-2xl underline mb-10">Technology</h1>
      <div className="grid grid-cols-12 lg:grid-rows-12 grid-rows-3 gap-x-4">
        <RecentTechnologyNewsList />
        <MainTechnologyRecentNews />
        <TwoRecentTechnologyNews />
      </div>
      <hr className="mt-10 col-span-12" />
    </section>
  );
}

export default TechologySection