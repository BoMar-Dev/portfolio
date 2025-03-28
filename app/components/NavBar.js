"use client";

import Image from "next/image";
import { useState } from "react";

// MY IMAGES
import Logo from "../../public/assets/img/Logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    // Mobile Navigation section
    <div>
      <nav className="bg-[#201E23] h-[80px] xl:border  p-4">
        <div className="flex justify-between max-w-[100rem] mx-auto  ">
          {/* L O G O */}
          <div className="mt-1 xl:ml-15">
            <Image
              src={Logo}
              alt="Min logotyp"
              className="z-50"
              width={90}
              height={30}
            />
          </div>
          {/* M E N U  */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-6 flex flex-col items-center justify-center group mt-3 lg:hidden z-50"
            aria-label="Menu button"
          >
            {/* Top line */}
            <span
              className={`
          absolute h-1 w-8 bg-[#8c8bb0] rounded transform transition-all duration-300 ease-in-out
          ${isOpen ? "rotate-45 top-2.5" : "top-0"}
        `}
            />
            {/* Middle line */}
            <span
              className={`
          absolute h-1 w-8 bg-[#8c8bb0] rounded transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0 left-4" : "top-2.5"}
        `}
            />
            {/* Bottom line */}
            <span
              className={`
          absolute h-1 w-8 bg-[#8c8bb0] rounded transform transition-all duration-300 ease-in-out
          ${isOpen ? "-rotate-45 top-2.5" : "top-5"}
        `}
            />
          </button>
          {/* // Menu when screen is bigger den tablet */}
          <ul className="hidden lg:flex  space-x-24 items-center mr-24 2xl:pe-28 text-[#8c8bb0]  ">
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#code">Code</a>
          </ul>
        </div>
        {/* Conditional rendering of the hamburger menu items */}
      </nav>
      {isOpen && (
        <div className="w-full h-screen z-30 bg-[#201E23] flex flex-col fixed top-0 left-0 font-bold lg:hidden ">
          <div className=" flex flex-col space-y-6 text-center text-5xl mt-5 ">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-[#8c8bb0] hover:text-white mt-20"
            >
              About
            </a>
            <a href="#gallery" className="text-[#8c8bb0] hover:text-white">
              Photos
            </a>
            <a href="#code" className="text-[#8c8bb0] hover:text-white">
              Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
