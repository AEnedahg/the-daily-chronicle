"use client"
import React from 'react'
import { fetchEntertainmentHeadlines } from '@/_lib/api/api';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRightLong } from "react-icons/fa6";

function EntertainmentSection() {
    const { data, error, isLoading } = useQuery({
      queryKey: ["recentEntertainment"],
      queryFn: fetchEntertainmentHeadlines,
    });
  
    if (isLoading) return <div className="p-4">Loading...</div>;
    if (error)
      return <div className="p-4 text-red-500">Failed to fetch news.</div>;
  
    const articles = data?.articles ?? [];
  
    const filteredArticles = articles.filter((article) => article.urlToImage);
  
    const selectedArticles =
      filteredArticles.length >= 6
        ? [filteredArticles[2], filteredArticles[5], filteredArticles[7]]
        : filteredArticles.slice(0, 3);
  
    if (selectedArticles.length === 0) {
      return <div className="p-4">No articles available.</div>;
    }
  return (
    <section className="min-h-[300px] mt-10">
      <h1 className="text-2xl underline mb-10">Entertainment</h1>
      <div className="grid grid-rows-12 grid-cols-12 gap-x-4">
        {selectedArticles.map((article) => (
          <div
            key={article.url}
            className="text-justify text-sm col-span-12 lg:col-span-4
        row-span-4 lg:row-span-12
        "
          >
            <img
              src={article.urlToImage!}
              alt={article.title || "Article image"}
              className="w-full h-auto grayscale"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="flex flex-col justify-between mt-5">
              <p className="font-bold text-sm">{article.title}</p>
              <p className="text-xs">{article.description}</p>
              <a href={article.url} className='flex items-center gap-x-2 mt-10'>
                Read more <FaArrowRightLong />
              </a>
            </div>
            <hr className="my-4 border-t border-gray-300" />
          </div>
        ))}
      </div>
      <hr className="mt-10 col-span-12" />
    </section>
  );
}

export default EntertainmentSection