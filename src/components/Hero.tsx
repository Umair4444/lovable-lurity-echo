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
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] order-1 lg:order-2">
            <PhoneCarousel />

            {/* Floating Stat Cards - Progressive reveal across breakpoints */}
            <div className="hidden sm:block">
              <StatCard
                label="VIEWS PER YEAR"
                value="55 mil."
                bgColor="bg-pink-600"
                position="left-0 sm:left-2 md:left-6 lg:left-10 -top-4 sm:-top-6 md:-top-8 lg:-top-10"
              />
            </div>
            <div className="hidden md:block">
              <StatCard
                label="VIEWS PER MONTH"
                value="15mil."
                bgColor="bg-lime"
                position="top-1/3 md:top-1/4 lg:top-1/3 -right-4 md:-right-8 lg:-right-12 xl:-right-16"
              />
              <StatCard
                label="SCREENS"
                value="600"
                bgColor="bg-yellow"
                position="bottom-8 md:bottom-6 lg:bottom-5 -left-4 md:-left-8 lg:-left-12 xl:-left-16"
              />
            </div>

            {/* Floating People Images - Staggered visibility */}
            <div className="hidden sm:block">
              <FloatingImage
                src="/1.png"
                alt="Person"
                position="top-1/3 sm:top-1/4 md:top-1/3 -left-4 sm:-left-6 md:-left-8 lg:-left-10 xl:-left-12"
                delay="0.3s"
              />
            </div>
            <div className="hidden md:block">
              <FloatingImage
                src="/2.jpg"
                alt="Person"
                position="top-2 md:top-4 lg:top-6 -right-4 md:-right-6 lg:-right-8 xl:-right-10"
                delay="0.7s"
              />
            </div>
            <div className="hidden lg:block">
              <FloatingImage
                src="/3.jpg"
                alt="Person"
                position="bottom-2 md:bottom-4 lg:bottom-6 -right-4 md:-right-6 lg:-right-8 xl:-right-10"
                delay="1.2s"
              />
            </div>

            {/* Decorative Dots - Enhanced positioning across breakpoints */}
            <div className="hidden md:block">
              <FloatingDot bgColor="bg-cyan" position="top-1/4 left-12 md:left-16 lg:left-20 xl:left-24" delay="0.4s" size="w-3 h-3 md:w-4 md:h-4" />
              <FloatingDot bgColor="bg-lime" position="top-0 md:top-2 right-16 md:right-20 lg:right-24 xl:right-28" delay="0.8s" size="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <div className="hidden lg:block">
              <FloatingDot bgColor="bg-blue-700" position="bottom-40 md:bottom-48 lg:bottom-52 left-0 md:-left-2 lg:left-0" delay="0.8s" size="w-4 h-4" />
              <FloatingDot bgColor="bg-yellow" position="bottom-40 md:bottom-44 lg:bottom-48 right-6 md:right-8 lg:right-10 xl:right-12" delay="1.1s" size="w-4 h-4 md:w-5 md:h-5" />
              <FloatingDot bgColor="bg-magenta" position="bottom-32 md:bottom-36 lg:bottom-40 -right-6 md:-right-8 lg:-right-10 xl:-right-12" delay="0.6s" size="w-2 h-2 md:w-3 md:h-3" />
            </div>
          </div>
        </div>
      </div>

      <HeroBottomAccent />
    </section>
  );
};

export default Hero;
