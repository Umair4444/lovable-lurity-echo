import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/Topbar";
import Navigation from "@/components/Navigation";
import {
  Heart,
  InstagramIcon,
  MessageCircle,
  MoveRightIcon,
} from "lucide-react";
import { FaArrowUp } from "react-icons/fa";

const Clients = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs = [
    { id: "all", label: "ALL CLIENTS" },
    { id: "sk_agencies", label: "SK MEDIA AGENCIES" },
    { id: "cz_agencies", label: "CZ MEDIA AGENCIES" },
    { id: "brands", label: "SELECTED BRANDS" },
  ];

  const clientLogos = {
    all: [
      {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
      },
      {
        name: "Ford",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      },
      {
        name: "Orange",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
      },
    ],
    sk_agencies: [
      {
        name: "Orange",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
      },
    ],
    cz_agencies: [
      {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
      },
    ],
    brands: [
      {
        name: "Ford",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      },
      {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
      },
    ],
  };

  const getLogos = () => {
    switch (activeTab) {
      case "sk_agencies":
        return clientLogos.sk_agencies;
      case "cz_agencies":
        return clientLogos.cz_agencies;
      case "brands":
        return clientLogos.brands;
      default:
        return clientLogos.all;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl  font-extrabold mb-16 animate-fade-in">
            Clients
          </h1>

          {/* Filter Tabs */}
          <div className="flex justify-between lg:justify-center overflow-auto whitespace-nowrap scrollbar-hide gap-4 mb-10">
            {/* <div className="flex items-center justify-between md:justify-center overflow-auto overflow-y-hidden whitespace-nowrap gap-3 bg-transparent scrollbar-hide  px-4 py-10"> */}
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`font-bold px-8  ${
                  activeTab === tab.id
                    ? "bg-lime/40 text-black rounded-sm text-lg py-6 px-4 hover:bg-lime/60"
                    : "bg-transparent text-black rounded-sm text-lg py-6 px-4 hover:text-black hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(60px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 md:gap-8 lg:gap-y-8 gap-x-4 items-center justify-items-center w-full max-w-4xl mx-auto py-6 px-10">
            {Array(20)
              .fill(getLogos())
              .flat()
              .map((src, index) => (
                <img
                  key={index}
                  src={src.logo}
                  alt="Client logo"
                  className="w-10 sm:w-12 md:w-20 lg:w-24 h-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              ))}
          </div>
        </div>
        <Button className="bg-[#7ed52e] text-black rounded-sm text-lg font-semibold py-8 px-6 hover:bg-[#7ed52e]/90 uppercase mt-12 flex items-center gap-2 mx-auto">
          I'm interested in a campaign <MoveRightIcon />
        </Button>
      </section>

      {/* Instagram Feed Section */}
      <div>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 p-5 bg-white rounded-2xl shadow-md">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
            L
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left mr-2 sm:mr-8">
            <h1 className="text-lg font-semibold text-gray-800 uppercase leading-snug">
              Lucrity
            </h1>
            <h2 className="text-gray-400 text-[12px] -mt-1">@lucritycom</h2>
          </div>

          {/* Stats */}
          <div className="flex gap-2 sm:gap-8 text-center mr-2 sm:mr-8">
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                222
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Posts</h3>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                856
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Followers</h3>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                1k
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Following</h3>
            </div>
          </div>

          {/* Follow Button */}
          <div>
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded font-medium shadow-sm transition-all duration-300">
              <InstagramIcon className="w-5" />
              Follow
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* Box 1 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Box 2 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Box 3 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Box 4 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      <Footer />
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan border-2 border-black text-black"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default Clients;
