import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // npm install lucide-react

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${
        showButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transform transition-all duration-300"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
