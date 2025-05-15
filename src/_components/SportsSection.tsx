import React from "react";
import MainSportsNews from "./MainSportsNews";
import TwoRecentSportsNews from "./TwoRecentSportsNews";

function SportsSection() {
  return (
    <section className=" min-h-[500px] ">
      <h1 className="text-2xl underline mb-10">Sports</h1>
      <div className="grid grid-cols-12 lg:grid-rows-12 grid-rows-3 gap-x-4">
        <MainSportsNews />
        <TwoRecentSportsNews />
      </div>
      <hr className="mt-10 col-span-12" />
    </section>
  );
}

export default SportsSection;
