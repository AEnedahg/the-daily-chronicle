"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { UnifrakturCook } from "next/font/google";
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
});

const NAV_LINKS = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Business",
    link: "business",
  },
  {
    id: 3,
    text: "Entertainment",
    link: "entertainment",
  },
  {
    id: 4,
    text: "General",
    link: "general",
  },
  {
    id: 5,
    text: "Health",
    link: "health",
  },
  {
    id: 6,
    text: "Science",
    link: "science",
  },
  {
    id: 7,
    text: "Sports",
    link: "sports",
  },
  {
    id: 8,
    text: "Technology",
    link: "technology",
  },
];

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const mobileNav = () => {
    setShowNav(!showNav);
  }
  return (
    <header
      className="p-4 lg:px-20 bg-white flex justify-between items-center lg:flex-col relative
    max-w-[1440px] mx-auto
    "
    >
      <h1
        className={`${unifraktur.className} text-xl lg:text-3xl font-bold lg:justify-self-center`}
      >
        The Daily Chronicle
      </h1>
      <RxHamburgerMenu className="lg:hidden text-2xl" onClick={mobileNav} />
      {showNav && (
        <nav
          className={`flex flex-col items-center pt-20 *:text-white *:text-2xl bg-black
        gap-y-5 ${inter.className} w-full h-screen top-0 left-0 absolute z-100
        `}
        >
          <IoMdClose onClick={mobileNav} className='!text-3xl cursor-pointer' />
          {NAV_LINKS.map((nav_link) => {
            return (
              <Link key={nav_link.id} href={nav_link.link} onClick={mobileNav}>
                {nav_link.text}
              </Link>
            );
          })}
        </nav>
      )}
      <nav
        className={`hidden lg:flex py-5 px-20 justify-between bg-black *:text-white *:text-lg w-full absolute left-0 right-0 top-20 ${inter.className}`}
      >
        {NAV_LINKS.map((nav_link) => {
          return (
            <Link key={nav_link.id} href={nav_link.link}>
              {nav_link.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Nav