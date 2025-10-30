import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download as DownloadIcon, FileEdit } from "lucide-react";
import Topbar from "@/components/Topbar";
import FooterBanner from "@/components/FooterBanner";

const Download = () => {
  const downloads = [
    { title: "terms and conditions", file: "#" },
    { title: "terms and conditions for advertisers", file: "#" },
    { title: "Lurity presentation: about us", file: "#" },
    { title: "mediakit", file: "#" },
    { title: "how to prepare data properly", file: "#" },
    { title: "DOOH: everything you need to know", file: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24  px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-28">
            <h1 className="text-5xl font-black mb-6">
              Documents to download,
              <br />
              e-books, infographics
            </h1>
          </div>

          {/* Central Visual with Stats */}
          <div className="relative max-w-6xl mx-auto h-[600px] flex items-center justify-center">
            {/* Central Phone Mockup */}
            <div className="relative z-10">
              <div className="w-[280px] h-[560px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">L</span>
                    </div>
                    <span className="text-white font-bold text-xl">LURITY</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Stat: Screens (Yellow) */}
            <div className="absolute z-30 left-[calc(33.333%+24px)] -top-5 inset-0 ">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>
            {/* Stats Card */}
            <div className="absolute z-30 left-1/3 -top-10 bg-yellow px-8 py-4 rounded-3xl shadow-lg shadow-yellow/40">
              <div className="flex flex-col items-center justify-around px-6 h-24">
                <div className="text-xs font-semibold mb-1">SCREENS</div>
                <div className="text-4xl font-black">600</div>
              </div>
            </div>
            {/* Floating Stat: Views per year (Cyan) */}
            <div className="absolute z-30 left-[calc(25%+24px)] bottom-28 ">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>
            {/* Stats Card */}
            <div className="absolute z-30 left-1/4 bottom-24 bg-cyan px-8 py-4 rounded-3xl shadow-lg shadow-cyan/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1">VIEWS PER YEAR</div>
                <div className="text-4xl font-black">55 mil.</div>
              </div>
            </div>
            {/* Floating Stat: Views per month (Magenta) */}
            <div className="absolute z-30 top-[calc(33.333%+28px)] right-[calc(16%+24px)]">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>
            {/* Stats Card */}
            <div className="absolute z-30 top-1/3 right-[16%]  bg-magenta px-10 py-6 rounded-3xl shadow-lg shadow-pink-700/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1">
                  VIEWS PER MONTH
                </div>
                <div className="text-4xl font-black">15mil.</div>
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
              className="absolute bottom-20 left-[15%] w-5 h-5 bg-lime rounded animate-float"
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
              className="absolute z-30 bottom-48 right-1/3 w-5 h-5 bg-yellow rounded animate-float"
              style={{ animationDelay: "1.1s" }}
            ></div>
            <div
              className="absolute z-30 bottom-40 right-[calc(33.333%-52px)]  w-3 h-3 bg-magenta rounded animate-float"
              style={{ animationDelay: "0.6s" }}
            ></div>
            {/* Floating person images (decorative circles) */}
            <div className="absolute top-[12%] left-[12%] w-52 h-52 overflow-hidden rounded-full ">
              <img
                src="/1.png"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[8%] right-36 w-40 h-40 overflow-hidden rounded-full">
              <img
                src="/2.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[5%] -right-4 w-52 h-52 overflow-hidden rounded-full bottom-2">
              <img
                src="/3.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloads List Section */}
      <section className="pt-20 pb-10 px-6 bg-[#f3f7f9]">
        <div className=" mx-auto max-w-6xl">
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="w-full bg-[#dfebf1] border-2 border-border rounded-xl p-6 hover:border-[#088ed1] transition-all hover:shadow-lg group"
              >
                <a
                  href={item.file}
                  className="flex items-center justify-between"
                  download
                >
                  <span className="text-base font-bold group-hover:text-primary transition-colors">
                    <FileEdit className="inline-block w-5 h-5 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    {item.title}
                  </span>
                  <DownloadIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow/80 text-black font-bold py-8 px-6 rounded-sm text-base"
            >
              DOWNLOAD ALL
              <DownloadIcon className="w-6 h-6 " />
            </Button>
          </div>
        </div>
      </section>

      <FooterBanner />

      <Footer />
    </div>
  );
};

export default Download;
