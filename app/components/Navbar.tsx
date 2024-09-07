"use client";
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
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            About
          </a>
          <a href="#" className="text-black">
            Contact
          </a>
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
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4">
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            About
          </a>
          <a href="#" className="text-black">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
