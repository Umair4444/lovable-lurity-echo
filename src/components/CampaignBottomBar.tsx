import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CampaignBottomBar = () => {
  return (
    <div className="fixed bottom-0 -right-6 h-12 w-fit bg-[#000638] border-t border-gray-800 z-50 flex items-center px-14">
      {/* Stats Section */}
      <div className="flex items-center justify-between gap-16 px-6">
        {[
          { label: "Screens", value: "0" },
          { label: "Locations", value: "0" },
          { label: "Plays ⓘ", value: "0" },
          { label: "Budget", value: "0.00 €" },
          { label: "Campaign duration", value: "7 days" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-xs text-gray-400">{item.label}</p>
            <p className="text-lg font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Date Range & Continue Section */}
      <div className="flex items-center gap-4">
        {/* Start Date */}
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            28. 10. 2025
          </span>
        </div>

        <span className="text-white text-lg">→</span>

        {/* End Date */}
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">3. 11. 2025</span>
        </div>

        {/* Continue Button */}
        <Button className="bg-cyan hover:bg-cyan/90 text-white px-6 py-2 h-auto rounded-md font-medium transition-all hover:scale-105">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignBottomBar;
