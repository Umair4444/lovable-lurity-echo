"use client";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// ------------------ Topbar ------------------
const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const languages = ["EN", "CZ", "SK"];

  return (
    <div className="bg-black w-full">
      <div className="py-3 flex items-center px-14">
        <div className="flex justify-end items-center text-gray-400 w-full mr-16 space-x-3">
          {/* Email */}
          <a
            href="mailto:hello@lurity.com"
            className="hover:text-white transition-colors text-base pr-2"
          >
            hello@lurity.com
          </a>

          {/* Separator */}
          <span className="inline-block w-[1px] h-3 bg-gray-400"></span>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex items-center text-base text-gray-400 hover:text-white transition-colors px-2"
            >
              {language}
              <IoMdArrowDropdown className="text-sm" />
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 w-20 bg-black text-white rounded-md shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-2 hover:bg-black/90 hover:text-yellow cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------ Navigation ------------------
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOW IT WORKS", path: "/how-it-works" },
    { name: "PORTAL", path: "/portal" },
    { name: "PRICE", path: "/price" },
    { name: "FORMATS", path: "/formats" },
    { name: "CLIENTS", path: "/clients" },
    { name: "DOWNLOAD", path: "/download" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-background w-full border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[80px] gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://www.lurity.com/logo.jpg"
              alt="Lurity Logo"
              className="h-10 w-auto max-w-[178px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden w-full lg:flex items-center justify-around gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold text-black pb-[12px] border-b-3 ${
                    isActive ? "border-cyan text-cyan" : "border-transparent hover:text-cyan-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-6 py-7 rounded-[10px] shadow-md">
              LAUNCH CAMPAIGN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black border-t border-border overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-white hover:text-cyan"
            >
              {link.name}
            </Link>
          ))}

          <Button
            onClick={() => setMenuOpen(false)}
            className="bg-cyan w-9/12 hover:bg-cyan/80 text-black font-bold px-6 rounded-sm shadow-md"
          >
            LAUNCH CAMPAIGN
          </Button>
        </div>
      </div>
    </nav>
  );
};

// ------------------ Header ------------------
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
