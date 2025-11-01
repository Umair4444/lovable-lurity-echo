import { useState } from "react";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/Topbar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MoveRightIcon } from "lucide-react";
import FooterBanner from "@/components/FooterBanner";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Registration",
      content: "Register",
      description:
        "Create an account in Lurity campaign software. Through this account, you will be able to further monitor and manage your campaigns, check their correct progress, change and upload visuals or videos.",
      image: "https://www.lurity.com/images/how_tab_image_1.png",
    },
    {
      id: "02",
      title: "Campaign creation",
      content: "Campaign creation",
      description:
        "Design your campaign with our intuitive interface. Choose your target locations, select screens, set your budget, and upload your creative materials.",
      image: "https://www.lurity.com/images/how_tab_image_1.png",
    },
    {
      id: "03",
      title: "Campaign approval",
      content: "Campaign approval",
      description:
        "Our team reviews your campaign to ensure quality and compliance. Approval typically takes just a few minutes.",
      image: "https://www.lurity.com/images/how_tab_image_1.png",
    },
    {
      id: "04",
      title: "Campaign display",
      content: "Campaign display",
      description:
        "Your campaign goes live on selected digital screens across shopping centers and high-traffic locations.",
      image: "https://www.lurity.com/images/how_tab_image_1.png",
    },
    {
      id: "05",
      title: "Campaign monitoring",
      content: "Campaign monitoring",
      description:
        "Track your campaign performance in real-time with detailed analytics and insights from your dashboard.",
      image: "https://www.lurity.com/images/how_tab_image_1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-16 lg:pb-20 px-6">
        <div className="mx-auto max-w-7xl py-2">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
            <div className="space-y-6 animate-fade-in w-full">
              <h1 className="text-3xl md:text-5xl font-black leading-tight ">
                7 clicks<h1>- and the campaign is running</h1>
              </h1>
              <p className="text-sm lg:text-xl text-black/80 font-bold leading-tight">
                Create your campaign yourself and your campaign can be running
                within 20 minutes!
              </p>
              <button className="bg-[#1FC9FF] hover:bg-[#1FC9FF]/80 text-black font-bold py-4 px-6 rounded uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                <span>I WANT A CAMPAIGN</span>
                <MoveRightIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="animate-fade-in w-full bg-contain bg-blue-600">
              <img
                src="https://www.lurity.com/step-ahead/how.jpg"
                alt="Campaign Background"
                className="w-full h-full object-cover-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Navigation */}
      <section className="mx-auto">
        <div className="">
          <div className="flex items-center justify-between md:justify-center py-6 overflow-auto overflow-y-hidden whitespace-nowrap gap-10 bg-transparent scrollbar-hide">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center justify-center gap-4 px-6 py-4 rounded-none  material-bubble transition-all duration-300${
                  activeStep === index
                    ? "  text-magenta hover:bg-pink-50"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2 text-lg">
                  <span
                    className={` font-normal ${
                      activeStep === index ? "visible text-magenta" : "hidden"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span className={`font-bold  text-center`}>{step.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Step Content */}
      <section className="">
        <div className="container mx-auto max-w-[72rem]">
          <div className="flex flex-col gap-12 items-center">
            <div className="w-full flex items-start justify-between animate-fade-in">
              <h2 className="text-4xl font-black">
                {steps[activeStep].content}
              </h2>
              <div className="max-w-xl flex flex-col">
                <p className="text-sm text-black/80 leading-relaxed">
                  {steps[activeStep].description}
                </p>
                <button className="w-fit text-black font-bold py-4  rounded uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:px-6">
                  <span> I'M INTERESTED</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Effectiveness Section */}
      <section className="bg-[#FFD503] px-6 py-12 md:py-24">
        <div className=" mx-auto flex flex-col md:flex-row items-start justify-around  gap-10">
          {/* Left Title */}
          <div className="md:w-1/6">
            <h2 className="text-[46px] leading-none translate-x-6 font-extrabold text-[#152B08]">
              The most effective medium?
            </h2>
          </div>

          {/* Right Text & Button */}
          <div className="md:w-3/6 flex flex-col items-start">
            <p className="text-[18px] text-[#152B08] leading-relaxed">
              and also the 2nd most memorable form of advertising: that is OOH
              advertising, which is also considered one of the most likable
              media*
            </p>

            <button className=" text-black font-bold  mt-6 rounded uppercase tracking-widest flex items-center justify-center gap-3">
              <span> showMore</span>
              <MoveRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative aspect-video overflow-hidden shadow-2xl bg-muted">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6LXO9tiW3gc"
              title="Lurity tutorial about our Platform: How you can run campaign easy, fast, effective and right now"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FooterBanner />

      <Footer />
    </div>
  );
};

export default HowItWorks;
