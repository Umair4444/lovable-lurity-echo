import { useEffect, useRef, useState } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaArrowRight, FaBullseye } from "react-icons/fa";
import FooterBanner from "@/components/FooterBanner";
import ImageSlider from "@/components/ImageSlider";

const Formats = () => {
  const [activeTab, setActiveTab] = useState("shopping-centers");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Detect scroll position
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    handleScroll(); // Initial state
    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll animation
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const tabs = [
    {
      id: "shopping-centers",
      label: "Digital screens in shopping centers",
      icon: <MonitorSmartphone size={34} />,
    },
    {
      id: "led-indoor",
      label: "LED boards Indoor",
      icon: <Monitor size={34} />,
    },
    {
      id: "led-outdoor",
      label: "LED boards Outdoor",
      icon: <MonitorCog size={34} />,
    },
    {
      id: "specific-locations",
      label: "Digital surfaces at specific locations",
      icon: <MonitorPlay size={34} />,
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
      <section className="max-w-3xl lg:max-w-7xl min-h-[700px] mx-auto flex flex-col lg:flex-row items-center justify-center md:px-20 lg:px-10 lg:py-24 ">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl ">
            <h1 className="text-[44px] lg:text-[56px] sm:text-5xl font-extrabold text-black mb-8 leading-tight">
              Offer of digital
              <span className="block">OOH Lurity formats</span>
            </h1>

            <div className="space-y-4 mb-10">
              <p className="text-base text-gray-800 leading-4">
                <span className="font-bold text-cyan-500 mr-1">• for</span>
                <span className="font-semibold">brand awareness</span>, larger
                formats are ideal — a combination of several if your budget
                allows.
              </p>
              <p className="text-base text-gray-800 leading-4">
                <span className="font-bold text-cyan-500 mr-1">• for</span>
                <span className="font-semibold">frequency and promotion</span>,
                we recommend the indoor network, ideally combined with LED
                in/outdoor.
              </p>
            </div>

            <Button
              onClick={scrollToFormats}
              className="group bg-cyan hover:bg-cyan/80 text-black font-bold px-5 py-7 rounded-[8px] shadow-md text-base flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              GO TO FORMATS
              <MoveRightIcon className="ml-1transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="w-full  bg-contain block">
          <img src="https://www.lurity.com/step-ahead/formats.jpg" alt="" />
        </div>
      </section>

      {/* Formats Navigation Tabs */}
      <section
        id="formats-section"
        className="relative py-10 bg-[#f3f7f9] border-b border-gray-200"
      >
        <div className="container max-w-7xl mx-auto relative">
          {/* Left Arrow */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10  shadow-md p-2 rounded-full hover:bg-transparent/20"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
          )}

          {/* Scrollable Tabs */}
          <div
            ref={scrollRef}
            className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(250px,1fr)] lg:auto-cols-[minmax(240px,1fr)] 
          overflow-auto overflow-y-hidden gap-10 bg-transparent scrollbar-hide scroll-smooth"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group material-bubble flex items-center justify-center gap-3 px-4 py-6 rounded border transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-magenta hover:bg-red-100/30"
                    : "bg-transparent text-black hover:bg-gray-200"
                }`}
              >
                <span
                  className={`transition-transform duration-300 group-hover:scale-110 ${
                    activeTab === tab.id ? "text-magenta" : ""
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="text-center text-lg font-semibold">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10  shadow-md p-2 rounded-full hover:bg-transparent/20"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          )}
        </div>
      </section>

      {/* Format Details Section */}
      <section className=" bg-[#f3f7f9] ">
        <div className=" max-w-7xl mx-auto px-6 ">
          {activeTab === "shopping-centers" && (
            <div className="lg:space-y-12 flex flex-col lg:flex-row items-center  ">
              <div className="max-w-3xl flex flex-col justify-center py-10 lg:py-20">
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

              <ImageSlider images={formatImages["shopping-centers"]} />
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
