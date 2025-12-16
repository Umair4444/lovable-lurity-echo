import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, DownloadIcon } from "lucide-react";
import FooterBanner from "@/components/FooterBanner";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import DocumentIcon from "../components/icons/Documentation";

const Download = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [current, setCurrent] = useState(0);

  const logos = [
    "https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1567219934540-9f75f7b87552?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1698620225002-36b415f78d57?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1641673840250-2843679337f3?auto=format&fit=crop&w=600&q=60",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % logos.length);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const zipfile = {
    title: "Lurity_Documents",
    file: "/documents/lurity-docs.zip",
  };

  const downloads = [
    {
      title: "terms and conditions",
      file: "/documents/terms-and-conditions.pdf",
    },
    {
      title: "terms and conditions for advertisers",
      file: "/documents/terms-and-conditions-advertisers.pdf",
    },
    {
      title: "Lurity presentation: about us",
      file: "/documents/lurity-about-us.pdf",
    },
    { title: "mediakit", file: "/documents/lurity-mediakit.pdf" },
    {
      title: "how to prepare data properly",
      file: "/documents/how-to-prepare-data.pdf",
    },
    {
      title: "DOOH: everything you need to know",
      file: "/documents/dooh-guide.pdf",
    },
  ];

  const handleDownloadAll = () => {
    const a = document.createElement("a");
    a.href = zipfile.file;
    a.setAttribute("download", zipfile.title + ".zip");
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="pt-36 px-6 relative overflow-hidden min-h-screen">
        <div className="container mx-auto">
          <div className="text-center ">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-black mb-1 lg:mb-3">
              Documents to download,
              <br />
              e-books, infographics
            </h1>
          </div>

          {/* VISUAL AREA */}
          <div
            className="relative max-w-6xl mx-auto
              max-h-full
              flex items-center justify-center"
          >
            {/* PHONE */}
            <div className="relative z-10">
              <div
                className="relative mx-auto
                  w-[220px] sm:w-[240px] md:w-[240px] lg:w-[240px]
                  h-[480px] sm:h-[480px] lg:h-full "
              >
                <div className="relative bg-black p-3 shadow-2xl rounded-t-xl">
                  {/* SLIDER IMAGE */}
                  <div className="aspect-[9/19] overflow-hidden rounded-t-xl">
                    <img
                      src={logos[current]}
                      alt="Lurity"
                      className="w-full h-full object-cover py-1 transition-all duration-700"
                    />
                  </div>

                  {/* FOOTER IMAGE */}
                  <div className="absolute inset-x-0 bottom-0 h-24 flex items-center justify-center bg-black rounded-t-xl">
                    <img
                      src="/lurity.png"
                      alt="Lurity"
                      className="w-40 object-contain"
                    />
                  </div>

                  {/* ARROWS */}
                  <button
                    onClick={prevSlide}
                    className="absolute hidden left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-black" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute hidden right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                  >
                    <ChevronRight className="w-6 h-6 text-black" />
                  </button>
                </div>
              </div>
            </div>

            {/* DECORATIVE IMAGES */}
            <div className="hidden lg:block px-4">
              {/* Floating Stat: Screens (Yellow) */}
              <div className="absolute z-30 left-[calc(33.333%+14px)] top-1 inset-0 ">
                <div className="bg-gray-400 w-6 px-12 py-4 h-20 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
              </div>
              {/* Stats Card */}
              <div className="absolute z-30 left-1/3 -top-2 bg-yellow px-3 py-6 rounded-3xl shadow-lg shadow-yellow/40">
                <div className="flex flex-col items-center justify-around px-6 h-14">
                  <div className="text-xs font-semibold">SCREENS</div>
                  <div className="text-2xl font-black">600</div>
                </div>
              </div>
              {/* Floating Stat: Views per year (Cyan) */}
              <div className="absolute z-30 left-[calc(33.33%+12px)] bottom-24 ">
                <div className="bg-gray-400 w-8 px-14 py-4 h-20 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
              </div>
              {/* Stats Card */}
              <div className="absolute z-30 left-1/3 bottom-24 bg-cyan px-3 py-4 rounded-3xl shadow-lg shadow-cyan/40">
                <div className="flex flex-col items-center justify-around px-2 h-14">
                  <div className="text-xs font-semibold mb-1">
                    VIEWS PER YEAR
                  </div>
                  <div className="text-2xl font-black">55mil.</div>
                </div>
              </div>
              {/* Floating Stat: Views per month (Magenta) */}
              <div className="absolute z-30 top-[calc(33.333%+10px)] right-[calc(26%+12px)]">
                <div className="bg-gray-400 w-6 px-14 py-6 h-20 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
              </div>
              {/* Stats Card */}
              <div className="absolute z-30 top-1/3 right-1/4 bg-magenta px-3 py-4 rounded-3xl shadow-lg shadow-pink-700/40">
                <div className="flex flex-col items-center justify-around px-2 h-14">
                  <div className="text-xs font-semibold">
                    VIEWS PER MONTH
                  </div>
                  <div className="text-2xl font-black">15mil.</div>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div
                className="absolute z-30 top-24 left-[8%] w-5 h-5 bg-blue-700 rounded"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="absolute z-30 top-8 left-52 w-3 h-3 bg-magenta rounded animate-float "
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="absolute bottom-10 left-[25%] w-5 h-5 bg-lime rounded animate-float"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="absolute top-16 right-1/4 w-4 h-4 bg-cyan rounded animate-float"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="absolute bottom-1/3 right-32 w-4 h-4 bg-blue-800 rounded animate-float"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="absolute z-30 bottom-40 right-[36%] w-5 h-5 bg-yellow rounded animate-float"
                style={{ animationDelay: "1.1s" }}
              ></div>
              <div
                className="absolute z-30 bottom-32 right-[calc(33.333%-24px)]  w-3 h-3 bg-magenta rounded animate-float"
                style={{ animationDelay: "0.6s" }}
              ></div>
              {/* Floating person images (decorative circles) */}
              <div className="absolute top-[12%] left-[12%] w-48 h-48 overflow-hidden rounded-full ">
                <img
                  src="/6.jpg"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-[8%] right-40 w-48 h-48 overflow-hidden rounded-full">
                <img
                  src="/4.jpg"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[5%] -right-0 w-48 h-48  overflow-hidden rounded-full bottom-2">
                <img
                  src="/5.jpg"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD LIST */}
      <section className="pt-20 pb-10 px-6 bg-[#f3f7f9]">
        <div className="max-w-6xl mx-auto space-y-4">
          {downloads.map((item, i) => (
            <a
              key={i}
              href={item.file}
              download
              className="group flex items-center justify-between bg-[#dfebf1] p-6 rounded-xl border-2 hover:border-[#088ed1] transition-all hover:shadow-lg"
            >
              <span className="flex items-center font-bold">
                <DocumentIcon className="w-6 h-6 mr-4 opacity-50  group-hover:opacity-100" />
                {item.title}
              </span>
              <DownloadIcon className="w-6 h-6 mr-4 opacity-50  group-hover:opacity-100" />
            </a>
          ))}

          <div className="pt-10 text-center">
            <Button
              onClick={handleDownloadAll}
              size="lg"
              className="bg-yellow text-black hover:bg-yellow/80 font-bold px-8 py-8"
            >
              DOWNLOAD ALL
              <DownloadIcon />
            </Button>
          </div>
        </div>
      </section>

      <FooterBanner />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-cyan border-2 border-black rounded-full"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Download;
