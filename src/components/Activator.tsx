"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Activator() {
  const tabData = [
    {
      value: "dooh",
      title: "OOH is the cheapest online activator",
      text: "Lurity is an affinity medium, at places where your customers are. A real accelerator of purchasing behavior of the target group* (OOAs Nielsen Research).",
      button: "Find out more",
      image: "https://www.lurity.com/images/hp_tab_image_1.png",
    },
    {
      value: "planning",
      title: "The only one with a self-service planning software",
      text: "Plan your campaign easily in a few steps: choose a location, timing of the campaign, upload a visual or video. Campaign ready in 7 steps.",
      button: "I'm Interested",
      image: "https://www.lurity.com/images/hp_tab_image_2.png",
    },
    {
      value: "campaign",
      title: "The only one with campaign deployment ASAP",
      text: "If everything is okay, your campaign runs within 10 minutes. Plus, you have control over the campaign status and its fulfillment anytime.",
      button: "Find out more",
      image: "https://www.lurity.com/images/hp_tab_image_3.png",
    },
  ];

  const [activeTab, setActiveTab] = useState("dooh");
  const [clickedTab, setClickedTab] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setActiveTab(value);
    setClickedTab(value);
    setTimeout(() => setClickedTab(null), 2000); // remove flash class after animation
  };

  return (
    <div className="mt-5 text-center space-y-6 py-4">
      <h3 className="text-3xl lg:text-5xl font-extrabold">How we're better</h3>

      <Tabs defaultValue="dooh" className="w-full max-w-7xl mx-auto">
        {/* --- Tab Buttons --- */}
        <TabsList className="flex items-center justify-between md:justify-center overflow-auto overflow-y-hidden whitespace-nowrap gap-3 bg-transparent scrollbar-hide  px-4 py-10">
          <TabsTrigger
            value="dooh"
            data-state={activeTab === "dooh" ? "active" : ""}
            className={`material-bubble data-[state=active]:text-magenta bg-tranparent data-[state=active]:hover:bg-pink-50 hover:bg-gray-100 uppercase  text-black rounded-none px-6 py-3 font-semibold text-[14px] transition-all flex-shrink-0 
              ${clickedTab === "dooh" ? "clicked" : ""}`}
            onClick={() => handleClick("dooh")}
          >
            Effective DOOH
          </TabsTrigger>

          <TabsTrigger
            value="planning"
            data-state={activeTab === "planning" ? "active" : ""}
            className={`material-bubble data-[state=active]:text-magenta bg-tranparent data-[state=active]:hover:bg-pink-50 hover:bg-gray-100 uppercase text-black rounded-none  px-6 py-3 font-semibold text-[14px] transition-all flex-shrink-0 ${
              clickedTab === "planning" ? "clicked" : ""
            }`}
            onClick={() => handleClick("planning")}
          >
            Planning Software
          </TabsTrigger>

          <TabsTrigger
            value="campaign"
            data-state={activeTab === "campaign" ? "active" : ""}
            className={`material-bubble data-[state=active]:text-magenta bg-tranparent data-[state=active]:hover:bg-pink-50 hover:bg-gray-100 uppercase text-black rounded-none px-6 py-3 font-semibold text-[14px] transition-all flex-shrink-0 ${
              clickedTab === "campaign" ? "clicked" : ""
            }`}
            onClick={() => handleClick("campaign")}
          >
            Campaign Deployment
          </TabsTrigger>
        </TabsList>

        {/* --- Tab Content --- */}
        {tabData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className=" px-8">
            <div className="flex flex-col md:flex-col justify-between items-start md:items-center px-4 lg:px-16">
              {/* Text Section */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full font-bold text-3xl lg:text-4xl text-left my-5 pr-6">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                    {tab.title}
                  </h1>
                </div>

                <div className="w-full text-left my-5 space-y-6">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {tab.text}
                  </p>
                  <Button className="w-fit bg-transparent text-black hover:bg-transparent/5 rounded-lg px-6 py-4 uppercase tracking-wide font-bold flex items-center gap-2">
                    {tab.button} <ArrowRight className="w-4 h-4 text-black" />
                  </Button>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full max-w-7xl">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
