import { useState } from "react";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MonitorCog,
  MonitorPlay,
  MonitorSmartphone,
  Monitor,
  MoveRightIcon,
  TargetIcon,
  Settings,
} from "lucide-react";
import { FaArrowRight, FaBullseye } from "react-icons/fa";
import FooterBanner from "@/components/FooterBanner";

const Formats = () => {
  const [activeTab, setActiveTab] = useState("shopping-centers");

  const tabs = [
    {
      id: "shopping-centers",
      label: "Digital screens in shopping centers",
      icon: <MonitorSmartphone size={40} />,
    },
    {
      id: "led-indoor",
      label: "LED boards Indoor",
      icon: <Monitor size={40} />,
    },
    {
      id: "led-outdoor",
      label: "LED boards Outdoor",
      icon: <MonitorCog size={40} />,
    },
    {
      id: "specific-locations",
      label: "Digital surfaces at specific locations",
      icon: <MonitorPlay size={40} />,
    },
  ];

  const formatImages = {
    "shopping-centers": [
      "https://www.lurity.com/formats/malls/malls_1.jpg",
      "https://www.lurity.com/formats/malls/malls_2.jpg",
      "https://www.lurity.com/formats/malls/malls_3.jpg",
    ],
  };

  const scrollToFormats = () => {
    document
      .getElementById("formats-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Navigation />

      {/* Hero Section */}
      <section className=" w-full max-w-6xl  min-h-[800px] my-14 mx-auto flex items-center space-x-2">
        <div className="container mx-auto px-6 py-20  flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl  ">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-8 leading-tight">
              Offer of digital
              <br />
              OOH Lurity formats
            </h1>

            <div className="space-y-4 mb-10">
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-cyan-500 mr-2">•</span>
                For <span className="font-semibold">brand awareness</span>,
                larger formats are ideal — a combination of several if your
                budget allows.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-cyan-500 mr-2">•</span>
                For{" "}
                <span className="font-semibold">frequency and promotion</span>,
                we recommend the indoor network, ideally combined with LED
                in/outdoor.
              </p>
            </div>

            <Button
              onClick={scrollToFormats}
              className="group bg-cyan hover:bg-cyan/80 text-black font-bold px-8 py-7 rounded-sm shadow-md text-base flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              GO TO FORMATS
              <ArrowRight className="ml-1transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="w-full  bg-contain hidden lg:block">
          <img src="https://www.lurity.com/step-ahead/formats.jpg" alt="" />
        </div>
      </section>

      {/* Formats Navigation Tabs */}
      <section
        id="formats-section"
        className="py-16 bg-[#f3f7f9] border-b border-gray-200"
      >
        <div className="container max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group material-bubble flex items-center justify-center gap-1 py-2 rounded-md border  transition-all duration-300 
          ${
            activeTab === tab.id
              ? "bg-transparent text-black border-cyan shadow-md scale-105"
              : "bg-[#f3f7f9] border-gray-300 border-none text-black hover:border-cyan hover:shadow-sm hover:scale-105"
          }`}
              >
                <span
                  className={` transition-transform duration-300 group-hover:scale-110
                ${activeTab === tab.id ? "text-magenta" : ""}`}
                >
                  {tab.icon}
                </span>
                <span className="text-center text-lg font-semibold w-8/12 ">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Format Details Section */}
      <section className=" bg-[#f3f7f9] ">
        <div className=" max-w-7xl mx-auto ">
          {activeTab === "shopping-centers" && (
            <div className="space-y-12 flex items-center  ">
              <div className="max-w-3xl flex flex-col justify-center py-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                  Digital screens in shopping centers
                </h2>
                <p className="text-lg text-black mb-8">
                  An excellent way to make yourself visible exactly where your
                  target audience is most ready to buy. There are several types
                  of screens available, depending on the OC:
                </p>

                <div className="w-fit flex flex-col mb-8">
                  <div className="w-full flex items-center gap-2 bg-transparent px-2 py-3 rounded-sm">
                    <span className="bg-[#ffc9f3] py-5 px-4 rounded-sm">
                      <Monitor size={15} />
                    </span>
                    <span className="font-bold text-black ">
                      Horizontal screens
                    </span>
                  </div>
                  <div className="w-full flex items-center gap-2 bg-transparent px-2 py-3 rounded-sm">
                    <span className="bg-[#ffc9f3] py-5 px-4 rounded-sm">
                      <Monitor size={15} />
                    </span>
                    <span className="font-bold text-black ">
                      Vertical screens
                    </span>
                  </div>
                </div>
                <button className="bg-magenta w-fit hover:bg-magenta/90 text-sm text-center text-black font-bold py-5 px-6 rounded-[6px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <span>I'm interested</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className=" flex items-end justify-end">
                <div className=" bg-gray-200  flex item-end justify-end lg:h-[569px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={formatImages["shopping-centers"][0]}
                    alt={`Shopping center format ${formatImages["shopping-centers"][0]}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "led-indoor" && (
            <div className="space-y-12 flex items-center">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                  LED boards Indoor
                </h2>
                <p className="text-lg text-black mb-8">
                  High-impact LED displays strategically placed in indoor
                  locations for maximum visibility and engagement.
                </p>

                <div className="w-fit flex flex-col mb-8">
                  <div className="w-full flex items-center gap-2 bg-transparent px-2 py-3 rounded-sm">
                    <span className="bg-[#ffc9f3] py-5 px-4 rounded-sm">
                      <FaBullseye size={15} />
                    </span>
                    <span className="font-bold text-black ">
                      Screens at specific locations
                    </span>
                  </div>
                </div>
                <button className="bg-magenta hover:bg-magenta/90 text-sm text-center text-black font-bold py-5 px-6 rounded-[6px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <span>I'm interested</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="">
                <div className=" bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={formatImages["shopping-centers"][1]}
                    alt={`Shopping center format ${formatImages["shopping-centers"][0]}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "led-outdoor" && (
            <div className="space-y-12 flex items-center">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                  LED boards Outdoor
                </h2>
                <p className="text-lg text-black mb-8">
                  Premium outdoor LED advertising solutions designed to capture
                  attention in high-traffic areas.
                </p>

                <div className="w-fit flex flex-col mb-8">
                  <div className="w-full flex items-center gap-2 bg-transparent px-2 py-3 rounded-sm">
                    <span className="bg-[#ffc9f3] py-5 px-4 rounded-sm">
                      <Settings size={15} />
                    </span>
                    <span className="font-bold text-black ">
                      Screens at specific locations
                    </span>
                  </div>
                </div>
                <button className="bg-magenta hover:bg-magenta/90 text-sm text-center text-black font-bold py-5 px-6 rounded-[6px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <span>I'm interested</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="">
                <div className=" bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={formatImages["shopping-centers"][2]}
                    alt={`Shopping center format ${formatImages["shopping-centers"][0]}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "specific-locations" && (
            <div className="space-y-12 flex items-center">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                  Digital surfaces at specific locations
                </h2>
                <p className="text-lg text-black mb-8">
                  Targeted digital advertising placements at strategic locations
                  tailored to your campaign goals.
                </p>

                <div className="w-fit flex flex-col mb-8">
                  <div className="w-full flex items-center gap-2 bg-transparent px-2 py-3 rounded-sm">
                    <span className="bg-[#ffc9f3] py-5 px-4 rounded-sm">
                      <TargetIcon size={15} />
                    </span>
                    <span className="font-bold text-black ">
                      Screens at specific locations
                    </span>
                  </div>
                </div>
                <button className="bg-magenta hover:bg-magenta/90 text-sm text-center text-black font-bold py-5 px-6 rounded-[6px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <span>I'm interested</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="">
                <div className=" bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={formatImages["shopping-centers"][2]}
                    alt={`Shopping center format ${formatImages["shopping-centers"][0]}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <FooterBanner />

      <Footer />
    </div>
  );
};

export default Formats;
