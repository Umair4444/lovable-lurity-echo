import { useEffect, useState, useMemo } from "react";
import PortalTopbar from "@/components/PortalTopbar";
import CampaignLeftPanel from "@/components/CampaignLeftPanel";
import CampaignBottomBar from "@/components/CampaignBottomBar";
import InteractiveMap from "@/components/InteractiveMap";
import GoogleMapApiKeyInput from "@/components/GoogleMapApiKeyInput";

interface Location {
  id: string;
  lat: number;
  lng: number;
  name: string;
  screenCount: number;
  country: string;
  category: string;
  deviceName: string;
}

const allLocations: Location[] = [
  {
    id: "1",
    lat: 55.6761,
    lng: 12.5683,
    name: "Copenhagen",
    screenCount: 187,
    country: "denmark",
    category: "shopping",
    deviceName: "Story",
  },
  {
    id: "2",
    lat: 59.3293,
    lng: 18.0686,
    name: "Stockholm",
    screenCount: 172,
    country: "sweden",
    category: "fitness",
    deviceName: "Avion",
  },
  {
    id: "3",
    lat: 52.52,
    lng: 13.405,
    name: "Berlin",
    screenCount: 125,
    country: "germany",
    category: "shopping",
    deviceName: "Optima",
  },
  {
    id: "4",
    lat: 52.2297,
    lng: 21.0122,
    name: "Warsaw",
    screenCount: 135,
    country: "poland",
    category: "transport",
    deviceName: "Story",
  },
  {
    id: "5",
    lat: 50.8503,
    lng: 4.3517,
    name: "Brussels",
    screenCount: 196,
    country: "belgium",
    category: "shopping",
    deviceName: "Avion",
  },
  {
    id: "6",
    lat: 52.3676,
    lng: 4.9041,
    name: "Amsterdam",
    screenCount: 143,
    country: "netherlands",
    category: "fitness",
    deviceName: "Optima",
  },
  {
    id: "7",
    lat: 48.8566,
    lng: 2.3522,
    name: "Paris",
    screenCount: 289,
    country: "france",
    category: "shopping",
    deviceName: "Story",
  },
  {
    id: "8",
    lat: 50.1109,
    lng: 8.6821,
    name: "Frankfurt",
    screenCount: 98,
    country: "germany",
    category: "transport",
    deviceName: "Avion",
  },
];

const Portal = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [filters, setFilters] = useState({
    showOnlySelected: false,
    activeView: "map" as "map" | "list" | "preview",
    deviceName: "",
    country: "",
    location: "",
    category: "",
  });

  useEffect(() => {
    document.title = "Create New Campaign – LURITY Portal";
  }, []);

  const filteredLocations = useMemo(() => {
    return allLocations.filter((loc) => {
      if (filters.country && loc.country !== filters.country) return false;
      if (
        filters.category &&
        !loc.category.includes(filters.category.toLowerCase())
      )
        return false;
      if (
        filters.deviceName &&
        !loc.deviceName.toLowerCase().includes(filters.deviceName.toLowerCase())
      )
        return false;
      if (
        filters.location &&
        !loc.name.toLowerCase().includes(filters.location.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <PortalTopbar />

      {/* Main Content */}
      <div className="flex-1 flex relative">
        {/* Left Panel */}
        <CampaignLeftPanel onFilterChange={setFilters} />

        {/* Map Area */}
        <div className="flex-1 relative bg-[#b4d4c5]">
          {!apiKey ? (
            <GoogleMapApiKeyInput onApiKeySubmit={setApiKey} />
          ) : (
            <InteractiveMap apiKey={apiKey} locations={filteredLocations} />
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <CampaignBottomBar />
    </div>
  );
};

export default Portal;
