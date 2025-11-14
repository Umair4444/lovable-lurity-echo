import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
                    isActive ? "border-cyan" : "border-transparent"
                  } hover:text-cyan-400`
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

export default Navigation;
