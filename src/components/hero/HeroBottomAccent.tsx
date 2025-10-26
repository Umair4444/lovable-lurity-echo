import { ArrowRight } from "lucide-react";

const HeroBottomAccent = () => {
  return (
    <section className="relative mt-2 py-12 md:py-16 lg:py-20 bg-gradient-magenta">
      <div className="mx-auto flex flex-col items-start px-4 md:px-6 lg:px-40 lg:flex-row lg:items-center xl:pr-40">
        {/* Image Section */}
        <div className="image-container mb-6 w-full sm:w-auto lg:mb-0 lg:mr-6 xl:mr-10">
          <img
            src="https://www2.lurity.com/sites/default/files/dooh.jpg"
            alt="OOH is growing globally"
            className="tab-image w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-start md:text-start">
          <p className="font-medium uppercase text-black/80 mb-2 text-xs md:text-sm">
            22 OCTOBER 2025
          </p>

          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight text-gray-900">
            OOH is growing globally – and it's DOOH that's driving it forward.
          </h2>

          {/* Button */}
          <div className="action-container mt-4">
            <button className="web-button flex min-h-12 md:min-h-14 items-center justify-center gap-2 rounded-lg bg-[--why-banner-bg-color] px-4 md:px-6 py-3 md:py-[18px] text-sm md:text-base uppercase tracking-widest text-black font-bold shadow-md transition-all hover:opacity-90">
              <span>Read more</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBottomAccent;
