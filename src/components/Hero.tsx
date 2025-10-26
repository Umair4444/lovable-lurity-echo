import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatCard from "./hero/StatCard";
import FloatingImage from "./hero/FloatingImage";
import FloatingDot from "./hero/FloatingDot";
import PhoneCarousel from "./hero/PhoneCarousel";
import HeroBottomAccent from "./hero/HeroBottomAccent";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-16 md:pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-6 md:space-y-8 opacity-0 animate-fade-in-up order-2 lg:order-1"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-foreground">
              Lurity
              <br />
              <span className="inline-block">Intelligent Ad.</span>
              <br />
              <span className="inline-block">step ahead.</span>
            </h1>

            <p
              className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl opacity-0 animate-fade-in-up"
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
              <Button className="bg-cyan hover:bg-cyan/90 hover:scale-105 text-black font-bold px-6 md:px-8 py-6 md:py-8 text-base md:text-lg rounded-lg shadow-cyan group transition-all duration-300">
                I'M INTERESTED
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] order-1 lg:order-2">
            <PhoneCarousel />

            {/* Floating Stat Cards - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block">
              <StatCard
                label="VIEWS PER YEAR"
                value="55 mil."
                bgColor="bg-pink-600"
                position="left-4 md:left-10 -top-6 md:-top-10"
              />
              <StatCard
                label="VIEWS PER MONTH"
                value="15mil."
                bgColor="bg-lime"
                position="top-1/3 -right-6 md:-right-12"
              />
              <StatCard
                label="SCREENS"
                value="600"
                bgColor="bg-yellow"
                position="bottom-5 -left-6 md:-left-12"
              />
            </div>

            {/* Floating People Images - Hidden on small screens */}
            <div className="hidden md:block">
              <FloatingImage
                src="/1.png"
                alt="Person"
                position="top-1/3 -left-6 md:-left-10"
                delay="0.3s"
              />
              <FloatingImage
                src="/2.jpg"
                alt="Person"
                position="top-4 -right-6 md:-right-10"
                delay="0.7s"
              />
              <FloatingImage
                src="/3.jpg"
                alt="Person"
                position="bottom-4 -right-6 md:-right-10"
                delay="1.2s"
              />
            </div>

            {/* Decorative Dots - Responsive positioning */}
            <div className="hidden lg:block">
              <FloatingDot bgColor="bg-cyan" position="top-1/4 left-20" delay="0.4s" />
              <FloatingDot bgColor="bg-blue-700" position="bottom-52 left-0" delay="0.8s" />
              <FloatingDot bgColor="bg-lime" position="top-0 right-24" delay="0.8s" />
              <FloatingDot bgColor="bg-yellow" position="bottom-48 right-10" delay="1.1s" size="w-5 h-5" />
              <FloatingDot bgColor="bg-magenta" position="bottom-40 -right-10" delay="0.6s" size="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <HeroBottomAccent />
    </section>
  );
};

export default Hero;
