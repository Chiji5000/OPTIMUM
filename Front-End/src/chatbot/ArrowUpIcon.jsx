import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ChatbotIcon.css";

const ArrowUpIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
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
    <button
      className={`arrow-up-toggle ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <div className="arrow-icon-3d">
        <FaArrowUp className="arrow-icon" />
      </div>
    </button>
  );
};

export default ArrowUpIcon;