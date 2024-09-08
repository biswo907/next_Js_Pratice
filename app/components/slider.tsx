import React, { useState } from "react";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <button
        className="absolute top-5 left-5 z-10 bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={toggleSlider}
      >
        Toggle Slider
      </button>

      {/* Slider */}
      <div
        className={`fixed top-0 left-0 h-screen bg-red-500 transition-all duration-500 ${
          isOpen ? "w-1/2" : "w-0"
        }`}
      ></div>
    </div>
  );
};

export default Slider;
