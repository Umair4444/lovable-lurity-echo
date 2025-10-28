import { useState } from "react";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/Topbar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                7 clicks - and the campaign is running
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Create your campaign yourself and your campaign can be running
                within 20 minutes!
              </p>
              <Button
                size="lg"
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-bold px-12 text-lg"
              >
                I WANT A CAMPAIGN
              </Button>
            </div>
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://www.lurity.com/step-ahead/how.jpg"
                alt="Campaign Background"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Navigation */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-lg transition-all duration-300 min-w-[120px] ${
                  activeStep === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-3xl font-black">{step.id}</span>
                <span className="font-bold text-sm text-center">
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Step Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-black">
                {steps[activeStep].content}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {steps[activeStep].description}
              </p>
              <Button
                size="lg"
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-bold px-8"
              >
                I'M INTERESTED →
              </Button>
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
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black">
              The most effective medium?
            </h2>
            <p className="text-lg text-muted-foreground">
              and also the 2nd most memorable form of advertising: that is OOH
              advertising, which is also considered one of the most likable
              media*
            </p>
            <Button
              variant="outline"
              onClick={() => setShowMore(!showMore)}
              className="font-bold"
            >
              {showMore ? "SHOW LESS" : "SHOW MORE"}
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted">
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
      <section
        className="py-32 px-6 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.lurity.com/images/cta_image.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90"></div>
        <div className="container mx-auto text-center relative z-10">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold px-12 text-lg"
          >
            LAUNCH CAMPAIGN
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
