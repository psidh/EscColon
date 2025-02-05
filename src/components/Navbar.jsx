"use client";
import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const path = usePathname();
  console.log(path);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Toggle Nav Clicked");
    setIsNavOpen(!isNavOpen);
  };
  // const [loggedIn, isLoggedIn] = useState(false);
  return (
    <>
      {(path !== `/usp` &&   path !== "/problem") ? (
        <div
          className={`px-8 md:px-20 lg:px-20 
      flex justify-between items-center backdrop-blur-xl  uppercase fixed top-0 w-full z-50 `}
        >
          <a href="/" className="flex gap-4 items-center py-6">
            <p className="font-bold text-outline text-2xl border-[1.5px] border-neutral-700 px-[0.6rem] py-[2px] rounded-md hover:bg-neutral-200 hover:text-outline-white hover:scale-[110%] transition-all duration-300">
              E
            </p>
            <p className="font-light text-2xl leading-4 mt-1">EscColon</p>
          </a>
          <div className="hidden lg:flex nav font-light text-sm tracking-wider">
            <a
              className={`hover:underline underline-offset-[6px] decoration-[1px]`}
              href="/"
            >
              Home
            </a>
            <a
              className="hover:underline underline-offset-[6px] decoration-[1px]"
              href="/resources"
            >
              Resources
            </a>
            <a
              className="hover:underline underline-offset-[6px] decoration-[1px]"
              href="/user"
            >
              User
            </a>
            <a
              className="hover:underline underline-offset-[6px] decoration-[1px]"
              href="/municipal"
            >
              Municipal CORP
            </a>
          </div>
          <RiMenuLine
            onClick={toggleNav}
            className="flex lg:hidden w-5 h-5 cursor-pointer"
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
