"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-10 right-10 h-12 w-12
        rounded-full shadow-lg
        grid place-items-center
        bg-[#36507d]
        cursor-pointer
        z-50
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <span className="text-2xl text-white">
        <FaArrowUp />
      </span>
    </button>
  );
}
