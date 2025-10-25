import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-foreground">
              Lurity<br />
              <span className="inline-block">Intelligent Ad.</span><br />
              <span className="inline-block">step ahead.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/80 max-w-xl leading-relaxed">
              Advertising network of 600 digital screens in 3 countries, at the busiest places with a monthly viewing of 15 million people. The most effective medium for online activation.
            </p>

            <Button className="bg-cyan hover:bg-cyan/90 text-white font-bold px-8 py-6 text-base rounded-lg shadow-cyan group uppercase tracking-wide transition-all hover:scale-105 hover:shadow-[0_20px_50px_hsl(193_100%_50%/0.4)]">
              I'M INTERESTED 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Right Visual - Digital Display Mockup */}
          <div className="relative h-[700px] lg:h-[800px]">
            {/* Main Digital Display Stand */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] lg:w-[450px] z-10">
              {/* Display Stand */}
              <div className="relative">
                {/* Screen */}
                <div className="bg-black rounded-t-3xl p-4 shadow-2xl">
                  <div className="bg-[#1a365d] rounded-2xl aspect-[9/16] flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-8">
                        <div className="text-4xl font-black mb-2">HLADÁME</div>
                        <div className="text-5xl font-black mb-2">NOVÝCH</div>
                        <div className="text-4xl font-black">ZPRAVODAJCŮ</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Base */}
                <div className="bg-black h-32 flex items-end justify-center pb-6">
                  <img 
                    src="https://www.lurity.com/logo.jpg" 
                    alt="Lurity" 
                    className="w-24 object-contain"
                  />
                </div>
                {/* Stand */}
                <div className="bg-black w-20 h-24 mx-auto"></div>
                <div className="bg-black w-40 h-6 mx-auto rounded-b-2xl"></div>
              </div>
            </div>

            {/* Floating Stat Cards */}
            <div className="absolute top-8 right-10 lg:right-16 bg-gradient-magenta text-white p-5 rounded-3xl shadow-magenta animate-float z-20" style={{ animationDelay: '0s' }}>
              <div className="text-[10px] font-bold mb-1 tracking-wider uppercase">VIEWS PER YEAR</div>
              <div className="text-4xl font-black">55mil.</div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 lg:right-8 bg-gradient-lime text-black p-5 rounded-3xl shadow-cyan animate-float z-20" style={{ animationDelay: '0.5s' }}>
              <div className="text-[10px] font-bold mb-1 tracking-wider uppercase">VIEWS PER MONTH</div>
              <div className="text-4xl font-black">15mil.</div>
            </div>

            <div className="absolute bottom-24 left-4 lg:left-12 bg-gradient-yellow text-black p-5 rounded-3xl shadow-cyan animate-float z-20" style={{ animationDelay: '1s' }}>
              <div className="text-[10px] font-bold mb-1 tracking-wider uppercase">SCREENS</div>
              <div className="text-4xl font-black">600</div>
            </div>

            {/* Floating People Images */}
            <div className="absolute top-16 left-6 lg:left-12 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float z-15" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-12 right-24 lg:right-32 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float z-15" style={{ animationDelay: '0.7s' }}>
              <img 
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1695023759/xes81htygsfjzuv0whzr.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-16 right-8 lg:right-16 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float z-15" style={{ animationDelay: '1.2s' }}>
              <img 
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Dots */}
            <div className="absolute top-32 left-1/4 w-4 h-4 bg-cyan rounded-full animate-float z-5" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-magenta rounded-full animate-float z-5" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-yellow rounded-full animate-float z-5" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute bottom-1/4 left-8 w-4 h-4 bg-lime rounded-full animate-float z-5" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute top-1/3 right-1/2 w-3 h-3 bg-cyan rounded-full animate-float z-5" style={{ animationDelay: '0.9s' }}></div>
            
            {/* Additional decorative square outline */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-cyan rounded-lg animate-float z-5" style={{ animationDelay: '1.3s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-magenta"></div>
    </section>
  );
};

export default Hero;
