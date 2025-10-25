import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
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
    <nav className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://www.lurity.com/logo.jpg" 
              alt="Lurity Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-semibold text-foreground hover:text-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Button className="bg-cyan hover:bg-cyan/90 text-white font-bold px-8 rounded-lg shadow-cyan">
            LAUNCH CAMPAIGN
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
