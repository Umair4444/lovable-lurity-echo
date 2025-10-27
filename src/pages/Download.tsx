import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download as DownloadIcon } from "lucide-react";
import Topbar from "@/components/Topbar";

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
      <Topbar/>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Documents to download,
              <br />
              e-books, infographics
            </h1>
          </div>

          {/* Central Visual with Stats */}
          <div className="relative max-w-5xl mx-auto h-[600px] flex items-center justify-center">
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
            <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in">
              <div className="bg-yellow text-yellow-foreground rounded-3xl px-8 py-6 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">
                  Screens
                </div>
                <div className="text-5xl font-black">600</div>
              </div>
            </div>

            {/* Floating Stat: Views per year (Cyan) */}
            <div
              className="absolute bottom-[25%] left-[15%] z-20 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-cyan text-cyan-foreground rounded-3xl px-8 py-6 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">
                  Views per year
                </div>
                <div className="text-5xl font-black">55mil.</div>
              </div>
            </div>

            {/* Floating Stat: Views per month (Magenta) */}
            <div
              className="absolute top-[35%] right-[15%] z-20 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-magenta text-magenta-foreground rounded-3xl px-8 py-6 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">
                  Views per month
                </div>
                <div className="text-5xl font-black">15mil.</div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-[20%] left-[25%] w-8 h-8 rounded-lg bg-cyan/20 animate-pulse"></div>
            <div
              className="absolute top-[45%] right-[20%] w-6 h-6 rounded-lg bg-magenta/20 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-[30%] right-[25%] w-10 h-10 rounded-full bg-yellow/20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-[20%] left-[20%] w-4 h-4 rounded-lg bg-primary/20 animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>

            {/* Floating person images (decorative circles) */}
            <div className="absolute top-[15%] left-[20%] w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan/40 to-cyan/20 animate-fade-in"></div>
            <div
              className="absolute top-[25%] right-[22%] w-24 h-24 rounded-3xl bg-gradient-to-br from-magenta/40 to-magenta/20 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute bottom-[15%] right-[18%] w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow/40 to-yellow/20 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Downloads List Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg group"
              >
                <a
                  href={item.file}
                  className="flex items-center justify-between"
                  download
                >
                  <span className="text-lg font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <DownloadIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold px-12 text-lg"
            >
              DOWNLOAD ALL
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Download;
