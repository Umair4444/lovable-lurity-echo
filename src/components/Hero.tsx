import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              Lurity<br />
              <span className="inline-block">Intelligent Ad.</span><br />
              <span className="inline-block">step ahead.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Advertising network of 600 digital screens in 3 countries, at the busiest places with a monthly viewing of 15 million people. The most effective medium for online activation.
            </p>

            <Button className="bg-cyan hover:bg-cyan/90 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-cyan group">
              I'M INTERESTED 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Main Phone Mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[350px] z-10">
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] aspect-[9/19] flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://www.lurity.com/logo.jpg" 
                    alt="Lurity" 
                    className="w-32 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stat Cards */}
            <div className="absolute top-10 right-10 lg:right-20 bg-gradient-magenta text-white p-6 rounded-3xl shadow-magenta animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-xs font-semibold mb-1">VIEWS PER YEAR</div>
              <div className="text-4xl font-black">55mil.</div>
            </div>

            <div className="absolute top-1/3 right-0 bg-gradient-lime text-black p-6 rounded-3xl shadow-cyan animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-xs font-semibold mb-1">VIEWS PER MONTH</div>
              <div className="text-4xl font-black">15mil.</div>
            </div>

            <div className="absolute bottom-32 left-10 lg:left-20 bg-gradient-yellow text-black p-6 rounded-3xl shadow-cyan animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-xs font-semibold mb-1">SCREENS</div>
              <div className="text-4xl font-black">600</div>
            </div>

            {/* Floating People Images */}
            <div className="absolute top-20 left-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/2 right-32 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float" style={{ animationDelay: '0.7s' }}>
              <img 
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float" style={{ animationDelay: '1.2s' }}>
              <img 
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Dots */}
            <div className="absolute top-40 left-1/4 w-4 h-4 bg-cyan rounded-full animate-float" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-magenta rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-yellow rounded-full animate-float" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-lime rounded-full animate-float" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-magenta"></div>
    </section>
  );
};

export default Hero;
