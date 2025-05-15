"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTechnologyHeadlines } from "@/_lib/api/api";
import { Inter } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"], display: "swap" });


function TwoRecentTechnologyNews() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recentTechnology"],
    queryFn: fetchTechnologyHeadlines,
  });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Failed to fetch news.</div>;

  const articles = data?.articles ?? [];

  const filteredArticles = articles.filter((article) => article.urlToImage);

  const selectedArticles =
    filteredArticles.length >= 6
      ? [filteredArticles[3], filteredArticles[5]]
      : filteredArticles.slice(0, 2);

  if (selectedArticles.length === 0) {
    return <div className="p-4">No articles available.</div>;
  }
  return (
    <section
      className={`${inter.className} col-span-12 lg:col-span-3 row-span-8 lg:row-span-12`}
    >
      {selectedArticles.map((article) => (
        <div key={article.url} className="text-justify text-sm">
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
            <a href={article.url} className='flex items-center gap-x-2 mt-10'>
              Read more <FaArrowRightLong />
            </a>
          </div>
          <hr className="my-4 border-t border-gray-300" />
        </div>
      ))}
    </section>
  );
}

export default TwoRecentTechnologyNews;