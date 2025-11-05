import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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

  const posters = [
    { id: 1, img: "/posterbanner_1.jpg" },
    { id: 2, img: "/posterbanner_2.jpg" },
    { id: 3, img: "/posterbanner_3.jpg" },
    { id: 4, img: "/posterbanner_4.jpg" },
    { id: 5, img: "/posterbanner_5.jpg" },
  ];

  const icons = [
    { title: "4ka", logo: "/icons/4ka.png" },
    { title: "365", logo: "/icons/365.png" },
    { title: "billa", logo: "/icons/billa.svg" },
    { title: "BMW", logo: "/icons/BMW.png" },
    { title: "bubo", logo: "/icons/bubo.png" },
    { title: "burger-king", logo: "/icons/burger-king.png" },
    { title: "CA", logo: "/icons/CA.png" },
    { title: "chopard", logo: "/icons/chopard.png" },
    { title: "cinemax", logo: "/icons/cinemax.png" },
    { title: "daka", logo: "/icons/daka-ck.png" },
    { title: "dentsu", logo: "/icons/dentsu.png" },
    { title: "disney", logo: "/icons/disney.png" },
    { title: "dm", logo: "/icons/dm.png" },
    { title: "diovera", logo: "/icons/diovera.png" },
    { title: "ecco", logo: "/icons/ecco.png" },
    { title: "em", logo: "/icons/em.png" },
    { title: "forbes", logo: "/icons/forbes.png" },
    { title: "ford", logo: "/icons/ford.png" },
    { title: "generali", logo: "/icons/generali.png" },
    { title: "group-m", logo: "/icons/group-m.png" },
    { title: "havas", logo: "/icons/havas.png" },
    { title: "hornbach", logo: "/icons/hornbach.png" },
    { title: "hubert", logo: "/icons/hubert.png" },
    { title: "hyundai", logo: "/icons/hyundai.png" },
    { title: "ikea", logo: "/icons/ikea.png" },
    { title: "istore", logo: "/icons/istore.png" },
    { title: "jaguar", logo: "/icons/jaguar.png" },
    { title: "kauflandc", logo: "/icons/kauflandc.png" },
    { title: "knowlimits", logo: "/icons/knowlimits.png" },
    { title: "kooperative", logo: "/icons/kooperative.png" },
    { title: "lindex", logo: "/icons/lindex.png" },
    { title: "mazda", logo: "/icons/mazda.png" },
    { title: "mbank", logo: "/icons/mbank.png" },
    { title: "mcdonald", logo: "/icons/mcd.png" },
    { title: "mds", logo: "/icons/mds.png" },
    { title: "mentos", logo: "/icons/mentos.png" },
    { title: "milka", logo: "/icons/milka.png" },
    { title: "mindshare", logo: "/icons/mindshare.png" },
    { title: "mohito", logo: "/icons/mohito.png" },
    { title: "o2", logo: "/icons/o2.png" },
    { title: "omd", logo: "/icons/omd.png" },
    { title: "orange", logo: "/icons/orange.png" },
    { title: "pereg", logo: "/icons/pereg.png" },
    { title: "phd", logo: "/icons/phd.png" },
    { title: "pizza-hut", logo: "/icons/pizza-hut.png" },
    { title: "pmx", logo: "/icons/pmx.png" },
    { title: "profesia", logo: "/icons/profesia.png" },
    { title: "publicis-groupe", logo: "/icons/publicis-groupe.png" },
    { title: "red-bull", logo: "/icons/red-bull.png" },
    { title: "samsung", logo: "/icons/samsung.png" },
    { title: "sheron", logo: "/icons/sheron.png" },
    { title: "skyshowtime", logo: "/icons/skyshowtime.png" },
    { title: "SLSP", logo: "/icons/SLSP.png" },
    { title: "sofia", logo: "/icons/sofia.png" },
    { title: "starbucks", logo: "/icons/starbucks.png" },
    { title: "starmedia", logo: "/icons/starmedia.png" },
    { title: "st-nicolaus", logo: "/icons/st-nicolaus.png" },
    { title: "swan", logo: "/icons/swan.png" },
    { title: "telecom", logo: "/icons/telecom.png" },
    { title: "tesco", logo: "/icons/tesco.png" },
    { title: "tipsport", logo: "/icons/tipsport.png" },
    { title: "tui", logo: "/icons/tui.png" },
    { title: "um", logo: "/icons/um.png" },
    { title: "uni", logo: "/icons/uni.png" },
    { title: "volvo", logo: "/icons/volvo.png" },
    { title: "vub", logo: "/icons/vub.png" },
    { title: "wm", logo: "/icons/wm.png" },
    { title: "zalando", logo: "/icons/zalando.png" },
    { title: "zara", logo: "/icons/zara.png" },
    { title: "zenith", logo: "/icons/zenith.png" },
    { title: "volkswagen", logo: "/icons/volkswagen.png" },
    { title: "zara", logo: "/icons/zara.png" },
  ];

  const tabs = [
    { id: "all", label: "ALL CLIENTS" },
    { id: "sk_agencies", label: "SK MEDIA AGENCIES" },
    { id: "cz_agencies", label: "CZ MEDIA AGENCIES" },
    { id: "brands", label: "SELECTED BRANDS" },
  ];

  const categorizedLogos = {
    all: icons, // All logos remain here
    sk_agencies: [
      { title: "dentsu", logo: "/icons/dentsu.png" },
      { title: "group-m", logo: "/icons/group-m.png" },
      { title: "havas", logo: "/icons/havas.png" },
      { title: "mindshare", logo: "/icons/mindshare.png" },
      { title: "omd", logo: "/icons/omd.png" },
      { title: "phd", logo: "/icons/phd.png" },
      { title: "pmx", logo: "/icons/pmx.png" },
      { title: "publicis-groupe", logo: "/icons/publicis-groupe.png" },
      { title: "starmedia", logo: "/icons/starmedia.png" },
      { title: "um", logo: "/icons/um.png" },
      { title: "zenith", logo: "/icons/zenith.png" },
    ],
    cz_agencies: [
      { title: "knowlimits", logo: "/icons/knowlimits.png" },
      { title: "mds", logo: "/icons/mds.png" },
      { title: "wm", logo: "/icons/wm.png" },
    ],
    brands: [
      { title: "4ka", logo: "/icons/4ka.png" },
      { title: "BMW", logo: "/icons/BMW.png" },
      { title: "burger-king", logo: "/icons/burger-king.png" },
      { title: "disney", logo: "/icons/disney.png" },
      { title: "dm", logo: "/icons/dm.png" },
      { title: "ford", logo: "/icons/ford.png" },
      { title: "hyundai", logo: "/icons/hyundai.png" },
      { title: "ikea", logo: "/icons/ikea.png" },
      { title: "kauflandc", logo: "/icons/kauflandc.png" },
      { title: "mcdonald", logo: "/icons/mcd.png" },
      { title: "mercedes", logo: "/icons/mercedes.png" },
      { title: "o2", logo: "/icons/o2.png" },
      { title: "orange", logo: "/icons/orange.png" },
      { title: "samsung", logo: "/icons/samsung.png" },
      { title: "starbucks", logo: "/icons/starbucks.png" },
      { title: "tesco", logo: "/icons/tesco.png" },
      { title: "volkswagen", logo: "/icons/volkswagen.png" },
      { title: "zara", logo: "/icons/zara.png" },
    ],
  };

  const getLogos = () => {
    switch (activeTab) {
      case "sk_agencies":
        return categorizedLogos.sk_agencies;
      case "cz_agencies":
        return categorizedLogos.cz_agencies;
      case "brands":
        return categorizedLogos.brands;
      default:
        return categorizedLogos.all;
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
            {getLogos().map((src, index) => (
              <img
                key={index}
                src={src.logo}
                alt={src.title}
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
        <div className="flex flex-wrap justify-center">
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className={`
        group relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 overflow-hidden shadow-lg transform transition-all duration-300
        ${index >= 1 ? "hidden" : "block"}          /* <640px: show 1 */
        ${index >= 2 ? "sm:hidden" : "sm:block"}   /* 640px+: show 2 */
        ${index >= 3 ? "md:hidden" : "md:block"}   /* 768px+: show 3 */
        ${index >= 4 ? "lg:hidden" : "lg:block"}   /* 1024px+: show 4 */
        ${index >= 5 ? "xl:hidden" : "xl:block"}   /* 1024px+: show 5 */
      `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={poster.img}
                  alt={`Poster ${poster.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                  <div className="flex items-center gap-2">
                    <span>
                      <Heart />
                    </span>
                    <h2 className="text-base font-normal">15</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <MessageCircle />
                    </span>
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
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300">
                Poster {poster.id}
              </div>
            </div>
          ))}
        </div>
      </div>

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
