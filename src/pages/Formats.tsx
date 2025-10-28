import { useState } from "react";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Formats = () => {
  const [activeTab, setActiveTab] = useState("shopping-centers");

  const tabs = [
    { id: "shopping-centers", label: "Digital screens in shopping centers" },
    { id: "led-indoor", label: "LED boards Indoor" },
    { id: "led-outdoor", label: "LED boards Outdoor" },
    {
      id: "specific-locations",
      label: "Digital surfaces at specific locations",
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
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-black mb-8 leading-tight">
              Offer of digital
              <br />
              OOH Lurity formats
            </h1>

            <div className="space-y-4 mb-10">
              <p className="text-lg text-black">
                <span className="font-bold">•</span> for brand awareness, larger
                formats are ideal, a combination of several if your budget
                allows
              </p>
              <p className="text-lg text-black">
                <span className="font-bold">•</span> for frequency and
                promotion, we recommend the indoor network, ideally combined
                with LED in/outdoor
              </p>
            </div>

            <Button
              onClick={scrollToFormats}
              className="bg-cyan hover:bg-cyan/80 text-black font-bold px-8 py-7 rounded-sm shadow-md text-base"
            >
              GO TO FORMATS <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage:
              "url('https://www.lurity.com/step-ahead/formats.jpg')",
          }}
        />
      </section>

      {/* Formats Navigation Tabs */}
      <section
        id="formats-section"
        className="py-16 bg-white border-b border-gray-200"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-6 text-center font-bold text-sm transition-all border-2 rounded-sm ${
                  activeTab === tab.id
                    ? "bg-cyan border-cyan text-black"
                    : "bg-white border-gray-300 text-black hover:border-cyan"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Format Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {activeTab === "shopping-centers" && (
            <div className="space-y-12">
              <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                  Digital screens in shopping centers
                </h2>
                <p className="text-lg text-black mb-8">
                  An excellent way to make yourself visible exactly where your
                  target audience is most ready to buy. There are several types
                  of screens available, depending on the OC:
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white border-2 border-gray-300 px-6 py-3 rounded-sm">
                    <span className="font-bold text-black">
                      Horizontal screens
                    </span>
                  </div>
                  <div className="bg-white border-2 border-gray-300 px-6 py-3 rounded-sm">
                    <span className="font-bold text-black">
                      Vertical screens
                    </span>
                  </div>
                </div>

                <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-8 py-7 rounded-sm shadow-md">
                  I'M INTERESTED
                </Button>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {formatImages["shopping-centers"].map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={image}
                      alt={`Shopping center format ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "led-indoor" && (
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                LED boards Indoor
              </h2>
              <p className="text-lg text-black mb-8">
                High-impact LED displays strategically placed in indoor
                locations for maximum visibility and engagement.
              </p>
              <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-8 py-7 rounded-sm shadow-md">
                I'M INTERESTED
              </Button>
            </div>
          )}

          {activeTab === "led-outdoor" && (
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                LED boards Outdoor
              </h2>
              <p className="text-lg text-black mb-8">
                Premium outdoor LED advertising solutions designed to capture
                attention in high-traffic areas.
              </p>
              <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-8 py-7 rounded-sm shadow-md">
                I'M INTERESTED
              </Button>
            </div>
          )}

          {activeTab === "specific-locations" && (
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Digital surfaces at specific locations
              </h2>
              <p className="text-lg text-black mb-8">
                Targeted digital advertising placements at strategic locations
                tailored to your campaign goals.
              </p>
              <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-8 py-7 rounded-sm shadow-md">
                I'M INTERESTED
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://www.lurity.com/images/cta_image.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-12 py-7 rounded-sm shadow-md text-lg">
            LAUNCH CAMPAIGN
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formats;
