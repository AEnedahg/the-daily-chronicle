"use client";
import React from "react";
import { fetchSportsHeadlines } from "@/_lib/api/api";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRightLong } from "react-icons/fa6";
function page() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recentSports"],
    queryFn: fetchSportsHeadlines,
  });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Failed to fetch news.</div>;

  const articles = data?.articles ?? [];

  const filteredArticles = articles.filter((article) => article.urlToImage);

  return (
    <section className="min-h-[300px] mt-10 max-w-[360px] lg:max-w-[1440px] p-4  mx-auto">
      <h1 className="text-2xl underline mb-10">Sports</h1>
      <div className="grid grid-rows-12 grid-cols-12 gap-x-4">
        {filteredArticles.map((article) => (
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
              <a href={article.url} className="flex items-center gap-x-2 mt-10">
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

export default page;
