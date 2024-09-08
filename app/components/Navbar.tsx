"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 border-b border-gray-300 p-4  backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="text-black text-xl font-bold">Navbar</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Button variant={"link"}>Home</Button>
          <Link href={"/about"}>
            <Button variant={"link"}>About</Button>
          </Link>
          <Button variant={"link"}>Contact</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-tr  from-[#8fb3e9] via-[#347df3] to-[#f70de4] transition-all duration-500 ${
          isMenuOpen ? "w-1/2" : "w-0"
        }`}
      >
        {isMenuOpen && (
          <>
            {/* Logo at the top center with slide-in effect */}
            <div
              className={`flex justify-center items-center h-24 transition-transform duration-700 ease-out ${
                isMenuOpen ? "translate-y-0" : "-translate-y-20"
              }`}
            >
              <img
                src="/logo.png" // Add your logo image path here
                alt="Logo"
                className="h-12 w-12"
              />
            </div>

            {/* Menu Items with slide-in effect */}
            <div
              className={`flex flex-col items-center justify-start space-y-6 mt-12 transition-transform duration-700 ease-out delay-200 ${
                isMenuOpen ? "translate-y-0" : "-translate-y-20"
              }`}
            >
              {["About", "Login", "Contact", "Profile"].map((item, index) => (
                <a
                  href={`#${item.toLowerCase()}`} // Link behavior for each item
                  key={item}
                  className={`text-white text-xl font-semibold transform transition-all duration-300 hover:scale-110 hover:text-gray-300 ${
                    isMenuOpen
                      ? "translate-y-0"
                      : `-translate-y-${(index + 1) * 10}`
                  }`}
                  onClick={() => console.log(item)}
                >
                  {item}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
