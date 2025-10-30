import { useState } from "react";
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

const Clients = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "ALL CLIENTS" },
    { id: "sk_agencies", label: "SK MEDIA AGENCIES" },
    { id: "cz_agencies", label: "CZ MEDIA AGENCIES" },
    { id: "brands", label: "SELECTED BRANDS" },
  ];

  const clientLogos = {
    all: [
      {
        name: "Orange",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
      },
      {
        name: "Slovak Telekom",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Slovak_Telekom_logo.svg",
      },
      {
        name: "O2",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/O2_logo.svg",
      },
      { name: "Swan", logo: "https://www.lurity.com/clients/swan.png" },
      {
        name: "4ka",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/4ka_logo.svg",
      },
      {
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      },
      { name: "iStore", logo: "https://www.lurity.com/clients/istore.png" },
      {
        name: "Slovenská sporiteľňa",
        logo: "https://www.lurity.com/clients/slsp.png",
      },
      {
        name: "VÚB Banka",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/VUB_logo.svg",
      },
      {
        name: "mBank",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/MBank_logo.svg",
      },
      { name: "365.bank", logo: "https://www.lurity.com/clients/365bank.png" },
      {
        name: "UniCredit",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/UniCredit_logo.svg",
      },
      {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
      },
      {
        name: "Jaguar",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Jaguar_2012_logo.svg",
      },
      {
        name: "Volvo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Volvo_iron_symbol.svg",
      },
      {
        name: "Ford",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      },
      {
        name: "Mazda",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Mazda_logo.svg",
      },
      {
        name: "Hyundai",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Hyundai_Motor_Company_logo.svg",
      },
      {
        name: "Kooperativa",
        logo: "https://www.lurity.com/clients/kooperativa.png",
      },
      { name: "Dôvera", logo: "https://www.lurity.com/clients/dovera.png" },
      {
        name: "Generali",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Generali_logo.svg",
      },
      {
        name: "Kaufland",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Kaufland_201x_logo.svg",
      },
      {
        name: "Billa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Billa_logo.svg",
      },
      {
        name: "Tesco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Tesco_Logo.svg",
      },
    ],
    sk_agencies: [
      {
        name: "Orange",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
      },
      {
        name: "Slovak Telekom",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Slovak_Telekom_logo.svg",
      },
      {
        name: "4ka",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/4ka_logo.svg",
      },
    ],
    cz_agencies: [
      {
        name: "O2",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/O2_logo.svg",
      },
    ],
    brands: [
      {
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      },
      {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
      },
      {
        name: "Jaguar",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Jaguar_2012_logo.svg",
      },
      {
        name: "Volvo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Volvo_iron_symbol.svg",
      },
      {
        name: "Ford",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      },
      {
        name: "Mazda",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Mazda_logo.svg",
      },
      {
        name: "Hyundai",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Hyundai_Motor_Company_logo.svg",
      },
      {
        name: "Kaufland",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Kaufland_201x_logo.svg",
      },
      {
        name: "Billa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Billa_logo.svg",
      },
      {
        name: "Tesco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Tesco_Logo.svg",
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
      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl  font-black mb-16 animate-fade-in">
            Clients
          </h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto animate-fade-in">
            {getLogos().map((client, index) => (
              <div
                key={index}
                className="w-full h-24 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <Button className="bg-[#7ed52e] text-black rounded-sm text-lg font-semibold py-8 px-6 hover:bg-[#7ed52e]/90 uppercase mt-12 flex items-center gap-2 mx-auto">
          I'm interested in a campaign <MoveRightIcon />
        </Button>
      </section>

      {/* Instagram Feed Section */}
      <div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-5 bg-white rounded-2xl shadow-md">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
            L
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left mr-8">
            <h1 className="text-lg font-semibold text-gray-800 uppercase leading-snug">
              Lucrity
            </h1>
            <h2 className="text-gray-400 text-[12px] -mt-1">@lucritycom</h2>
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-center mr-8">
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
    </div>
  );
};

export default Clients;
