import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatCard from "./hero/StatCard";
import FloatingImage from "./hero/FloatingImage";
import FloatingDot from "./hero/FloatingDot";
import PhoneCarousel from "./hero/PhoneCarousel";
import HeroBottomAccent from "./hero/HeroBottomAccent";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20  overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
              Lurity
              <br />
              <span className="inline-block">Intelligent Ad.</span>
              <br />
              <span className="inline-block">step ahead.</span>
            </h1>

            <p
              className="text-base md:text-lg text-foreground/80 max-w-xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Advertising network of 600 digital screens in 3 countries, at the
              busiest places with a monthly viewing of 15 million people. The
              most effective medium for online activation.
            </p>

            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Button className="bg-cyan hover:bg-cyan/90 hover:scale-105 text-black font-bold px-8 py-8 text-lg rounded-lg shadow-cyan group transition-all duration-300">
                I'M INTERESTED
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[600px] lg:h-[700px]">
            <PhoneCarousel />

            {/* Floating Stat Cards */}
            <StatCard
              label="VIEWS PER YEAR"
              value="55 mil."
              bgColor="bg-pink-600"
              position="left-10 -top-10"
            />
            <StatCard
              label="VIEWS PER MONTH"
              value="15mil."
              bgColor="bg-lime"
              position="top-1/3 -right-12"
            />
            <StatCard
              label="SCREENS"
              value="600"
              bgColor="bg-yellow"
              position="bottom-5 -left-12"
            />

            {/* Floating People Images */}
            <FloatingImage
              src="/1.png"
              alt="Person"
              position="top-1/3 -left-10"
              delay="0.3s"
            />
            <FloatingImage
              src="/2.jpg"
              alt="Person"
              position="top-4 -right-10"
              delay="0.7s"
            />
            <FloatingImage
              src="/3.jpg"
              alt="Person"
              position="bottom-4 -right-10"
              delay="1.2s"
            />

            {/* Decorative Dots */}
            <FloatingDot bgColor="bg-cyan" position="top-1/4 left-20" delay="0.4s" />
            <FloatingDot bgColor="bg-blue-700" position="bottom-52 left-0" delay="0.8s" />
            <FloatingDot bgColor="bg-lime" position="top-0 right-24" delay="0.8s" />
            <FloatingDot bgColor="bg-yellow" position="bottom-48 right-10" delay="1.1s" size="w-5 h-5" />
            <FloatingDot bgColor="bg-magenta" position="bottom-40 -right-10" delay="0.6s" size="w-3 h-3" />
          </div>
        </div>
      </div>

      <HeroBottomAccent />
    </section>
  );
};

export default Hero;
