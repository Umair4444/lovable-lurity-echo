"use client";
import { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Navigation from "./Navigation";

const Header = () => {
  const [hideTopbar, setHideTopbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 40) {
        setHideTopbar(true); // scroll down
      } else {
        setHideTopbar(false); // scroll up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Smooth Topbar hide */}
      <div
        className="overflow-hidden transition-[height] duration-300"
        style={{ height: hideTopbar ? 0 : 48 }} // 48px = Topbar height
      >
        <Topbar />
      </div>

      {/* Navigation moves up to top */}
      <Navigation />
    </div>
  );
};

export default Header;
