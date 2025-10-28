import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CampaignBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-portal-navy border-t border-portal-navy-light z-50">
      <div className="h-full flex items-center justify-between px-8">
        {/* Stats Section */}
        <div className="flex items-center gap-8">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Screens</p>
            <p className="text-xl font-semibold text-white">0</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Locations</p>
            <p className="text-xl font-semibold text-white">0</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Plays ⓘ</p>
            <p className="text-xl font-semibold text-white">0</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Budget</p>
            <p className="text-xl font-semibold text-white">0.00 €</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Campaign duration</p>
            <p className="text-xl font-semibold text-white">7 days</p>
          </div>
        </div>

        {/* Date Range & Continue Section */}
        <div className="flex items-center gap-4">
          {/* Start Date */}
          <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">28. 10. 2025</span>
          </div>

          {/* Arrow */}
          <span className="text-white text-lg">→</span>

          {/* End Date */}
          <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">3. 11. 2025</span>
          </div>

          {/* Continue Button */}
          <Button className="bg-cyan hover:bg-cyan/90 text-white px-8 py-2 h-auto rounded-md font-medium transition-all hover:scale-105">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignBottomBar;
