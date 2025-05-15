"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTechnologyHeadlines } from "@/_lib/api/api";
import { Inter } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


function MainTechnologyRecentNews() {
  const { data, error } = useQuery({
    queryKey: ["recentTechnology"],
    queryFn: fetchTechnologyHeadlines,
  });

  const articles = Array.isArray(data?.articles) ? data.articles : [];

  if (error) {
    return <div>Failed to fetch</div>;
  }

  const articlesWithImage = articles.filter(
    (article) => article.urlToImage && article.urlToImage !== ""
  );

  const filteredArticles = articlesWithImage.filter(
    (article) => article.description && article.description.length >= 30
  );

  return (
    <section
      className={`${inter.className} col-span-12 lg:col-span-6 row-span-2 lg:row-span-12
      `}
    >
      {filteredArticles.slice(1,2).map((article) => {
        return (
          <div key={article.url} className="text-justify text-sm mt-2">
            <img
              src={article.urlToImage!}
              alt={article.title || "Article Image"}
              width={500}
              height={300}
              className="w-full h-auto grayscale"
            />
            <div className="flex flex-col justify-between mt-5">
              <p className="font-bold text-xl">{article.title}</p>
              <p className="mt-2 text-gray-700">{article.description}</p>
              <a href={article.url} className='flex items-center gap-x-2 mt-10'>
                Read more <FaArrowRightLong />
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MainTechnologyRecentNews;
