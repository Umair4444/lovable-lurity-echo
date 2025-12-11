import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const PortalTopbar = () => {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://www.lurity.com/logo.jpg"
          alt="Lurity Logo"
          className="h-9 ml-2 w-auto max-w-[178px]"
        />
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-4 text-sm">
        {/* Currency Dropdown */}
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          EUR
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Language Dropdown */}
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          English
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Log in */}
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          Log in
        </button>
      </div>
    </header>
  );
};

export default PortalTopbar;
