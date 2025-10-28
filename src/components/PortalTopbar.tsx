import { ChevronDown } from "lucide-react";

const PortalTopbar = () => {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-cyan rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">L</span>
        </div>
        <span className="font-semibold text-foreground">LURITY</span>
      </div>

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
