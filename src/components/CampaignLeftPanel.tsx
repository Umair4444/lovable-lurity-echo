import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const CampaignLeftPanel = () => {
  const [showOnlySelected, setShowOnlySelected] = useState(false);
  const [activeView, setActiveView] = useState<"map" | "list" | "preview">("map");

  return (
    <div className="w-96 bg-white border-r border-border p-6 overflow-y-auto">
      {/* Campaign Name Input */}
      <div className="mb-6">
        <div className="relative">
          <Input
            placeholder="Insert your campaign name here"
            className="pr-8"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive">
            ●
          </span>
        </div>
      </div>

      {/* Show Only Selected Toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-foreground">Show only the screens you selected</span>
          <Switch
            checked={showOnlySelected}
            onCheckedChange={setShowOnlySelected}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Showing 769 screens of 769
        </p>
      </div>

      {/* View Options */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-3">View options</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveView("map")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
              activeView === "map"
                ? "bg-cyan text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 6l6-3 6 3 6-3v13l-6 3-6-3-6 3V6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Map
          </button>
          <button
            onClick={() => setActiveView("list")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
              activeView === "list"
                ? "bg-cyan text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            List
          </button>
          <button
            onClick={() => setActiveView("preview")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
              activeView === "preview"
                ? "bg-cyan text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2"/>
            </svg>
            Preview
          </button>
        </div>
      </div>

      {/* Select by Device Name */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-2">Select by device name</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Use if you want to search for a specific device
        </p>
        <Input placeholder="e.g. Story, Avion, Optima..." />
      </div>

      {/* Selection by Location */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-2">Selection by location</h3>
        <div className="space-y-3">
          <div className="relative">
            <select className="w-full h-10 px-3 pr-10 rounded-md border border-input bg-background text-sm appearance-none cursor-pointer">
              <option>Select a country</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan" />
            <Input
              placeholder="For example: Kodanky krug, Bratislava..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Selection by Category */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-2">Selection by category of location</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Choose an area by location category
        </p>
        <Input placeholder="e.g. shopping centers, fitness..." />
      </div>

      {/* Extended Filter */}
      <div className="pt-4 border-t border-border">
        <button className="text-sm text-center w-full text-muted-foreground hover:text-foreground transition-colors">
          Extended filter +
        </button>
      </div>

      {/* Filter Reset */}
      <div className="mt-4">
        <button className="text-sm text-destructive hover:text-destructive/80 transition-colors">
          Filter Reset
        </button>
      </div>
    </div>
  );
};

export default CampaignLeftPanel;
