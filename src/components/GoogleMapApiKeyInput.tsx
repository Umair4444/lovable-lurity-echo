import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface GoogleMapApiKeyInputProps {
  onApiKeySubmit: (apiKey: string) => void;
}

const GoogleMapApiKeyInput = ({ onApiKeySubmit }: GoogleMapApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#c5e0d4] via-[#a8d5c7] to-[#8ec9bb] flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Google Maps Setup</h2>
        <p className="text-gray-600 mb-6">
          Enter your Google Maps API key to display the interactive map with location clusters.
        </p>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your Google Maps API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full"
          />
          <Button
            onClick={() => apiKey && onApiKeySubmit(apiKey)}
            disabled={!apiKey}
            className="w-full"
          >
            Load Interactive Map
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Get your API key from{" "}
          <a
            href="https://console.cloud.google.com/google/maps-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Cloud Console
          </a>
        </p>
      </div>
    </div>
  );
};

export default GoogleMapApiKeyInput;
