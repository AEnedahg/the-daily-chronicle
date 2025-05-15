"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchTechnologyHeadlines } from '@/_lib/api/api';
import { Inter } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


function RecentTechnologyNewsList() {

  const {
    data,
    error,
  } = useQuery({
    queryKey: ['recentTechnology'],
    queryFn: fetchTechnologyHeadlines
  })

  
  if(error) {
    return (
      <div>Failed to fetch</div>
    )
  }
  const filteredArticles = data?.articles.filter(
    (article) => article.description && article.description.length >= 30
  );
  return (
    <section
      className={`${inter.className} col-span-12 lg:col-span-3 row-span-5 lg:row-span-12
    `}
    >
      <h1 className="text-2xl underline font-semibold">Recent News</h1>
      <div className='mt-5'>
        {filteredArticles?.splice(0, 3).map((article) => {
          return (
            <div key={article.url} className='text-justify *:text-sm mt-2'>
              <p>{article.description}</p>
              <div className="flex justify-between mt-5">
                <p>{article.author}</p>
                <p className="text-md">
                  {article.publishedAt.toString().split("T")[0]}
                </p>
                <a href={article.url} className='inline-flex items-center gap-x-2'>
                  Read more <FaArrowRightLong />
                </a>
              </div>
              <hr className='bg-gray-900 w-full mt-5'/>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentTechnologyNewsList