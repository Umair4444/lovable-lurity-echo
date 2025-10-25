import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
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
              <Button className="bg-cyan hover:bg-cyan/90 hover:scale-105 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-cyan group transition-all duration-300">
                I'M INTERESTED
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
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
            <div
              className="absolute z-40 -top-5 left-28 bg-gradient-magenta text-white p-8 rounded-3xl shadow-magenta animate-float"
              style={{ animationDelay: "0s" }}
            >
              <div className="text-xs text-center font-semibold mb-1">
                VIEWS PER YEAR
              </div>
              <div className="text-4xl font-black">55mil.</div>
            </div>

            <div
              className="absolute top-1/2 -right-12 bg-gradient-lime text-black p-8 rounded-3xl shadow-cyan animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-xs text-center font-semibold mb-1">
                VIEWS PER MONTH
              </div>
              <div className="text-4xl font-black">15mil.</div>
            </div>

            <div
              className="absolute bottom-0 -left-0 bg-gradient-yellow text-black p-8 rounded-3xl shadow-cyan animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-xs text-center font-semibold mb-1">
                SCREENS
              </div>
              <div className="text-4xl font-black">600</div>
            </div>

            {/* Floating People Images */}
            <div
              className="absolute top-1/2 left-0 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute top-4 right-0 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float"
              style={{ animationDelay: "0.7s" }}
            >
              <img
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute bottom-4 right-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src="https://lbapi.tapgest.com/lurity/image/upload/w_330/v1688109852/ajgyfneamdsq2br1nrpp.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Dots */}
            <div
              className="absolute top-1/3 left-20 w-4 h-4 bg-cyan rounded-full animate-float"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute z-50 bottom-40 left-10 w-4 h-4 bg-lime rounded-full animate-float"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute z-50 bottom-32 right-24 w-5 h-5 bg-yellow rounded-full animate-float"
              style={{ animationDelay: "1.1s" }}
            ></div>
            <div
              className="absolute z-50 bottom-20 right-0 w-3 h-3 bg-magenta rounded-full animate-float"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <section className="relative mt-2 py-20 bg-gradient-magenta">
        <div className="mx-auto flex max-w-7xl flex-col items-start px-6 lg:flex-row lg:items-center xl:pr-40">
          {/* <!-- Image Section --> */}
          <div className="image-container mb-6 w-full sm:w-auto lg:mb-0 lg:mr-10">
            <img
              src="https://www2.lurity.com/sites/default/files/dooh.jpg"
              alt="OOH is growing globally"
              className="tab-image w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* <!-- Text Section --> */}
          <div className="text-start md:text-start">
            <p className="font-medium uppercase text-black/70 mb-2">
              22 OCTOBER 2025
            </p>

            <h2 className="font-bold text-[24px] leading-none text-gray-900 md:text-[36px]">
              OOH is growing globally – and it’s DOOH that’s driving it forward.
            </h2>

            {/* <!-- Button --> */}
            <div className="action-container mt-4">
              <button className="web-button flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[--why-banner-bg-color] px-6 py-[18px] font-medium uppercase tracking-widest text-white shadow-md transition-all hover:opacity-90">
                <span>Read more</span>
                <span className="nuxt-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.748 12.2627L15.3607 9.65C15.7849 9.20543 16.0216 8.61452 16.0216 8C16.0216 7.38548 15.7849 6.79457 15.3607 6.35L12.748 3.73733C12.5605 3.54973 12.3062 3.44431 12.0409 3.44424C11.7757 3.44418 11.5213 3.54949 11.3337 3.737C11.1461 3.9245 11.0407 4.17885 11.0406 4.44409C11.0405 4.70933 11.1458 4.96373 11.3334 5.15133L13.1867 7.00533L1.02002 7.02066C0.754803 7.02066 0.500449 7.12602 0.312913 7.31356C0.125376 7.50109 0.0200195 7.75545 0.0200195 8.02067C0.0200195 8.28588 0.125376 8.54024 0.312913 8.72777C0.500449 8.91531 0.754803 9.02067 1.02002 9.02067L13.174 9.00533L11.3334 10.8487C11.1512 11.0373 11.0504 11.2899 11.0527 11.5521C11.055 11.8143 11.1601 12.0651 11.3455 12.2505C11.5309 12.4359 11.7818 12.5411 12.044 12.5433C12.3061 12.5456 12.5588 12.4448 12.7474 12.2627H12.748Z"
                      fill="#FFD503"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
