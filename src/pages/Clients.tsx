import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/Topbar";
import Navigation from "@/components/Navigation";

const Clients = () => {
  const [activeTab, setActiveTab] = useState("all");

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
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-12 animate-fade-in">
            Clients
          </h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className={`font-bold px-8 ${
                activeTab === "all" ? "bg-accent text-foreground" : ""
              }`}
            >
              ALL CLIENTS
            </Button>
            <Button
              variant={activeTab === "sk_agencies" ? "default" : "outline"}
              onClick={() => setActiveTab("sk_agencies")}
              className={`font-bold px-8 ${
                activeTab === "sk_agencies" ? "bg-accent text-foreground" : ""
              }`}
            >
              SK MEDIA AGENCIES
            </Button>
            <Button
              variant={activeTab === "cz_agencies" ? "default" : "outline"}
              onClick={() => setActiveTab("cz_agencies")}
              className={`font-bold px-8 ${
                activeTab === "cz_agencies" ? "bg-accent text-foreground" : ""
              }`}
            >
              CZ MEDIA AGENCIES
            </Button>
            <Button
              variant={activeTab === "brands" ? "default" : "outline"}
              onClick={() => setActiveTab("brands")}
              className={`font-bold px-8 ${
                activeTab === "brands" ? "bg-accent text-foreground" : ""
              }`}
            >
              SELECTED BRANDS
            </Button>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-7xl mx-auto animate-fade-in">
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
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
