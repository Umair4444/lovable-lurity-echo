import { ArrowRight } from "lucide-react";

const HeroBottomAccent = () => {
  return (
    <section className="relative mt-2 py-20 bg-gradient-magenta">
      <div className="mx-auto flex flex-col items-start px-6 lg:px-40 lg:flex-row lg:items-center xl:pr-40">
        {/* Image Section */}
        <div className="image-container mb-6 w-full sm:w-auto lg:mb-0 lg:mr-10">
          <img
            src="https://www2.lurity.com/sites/default/files/dooh.jpg"
            alt="OOH is growing globally"
            className="tab-image w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-start md:text-start">
          <p className="font-medium uppercase text-black/80 mb-2">
            22 OCTOBER 2025
          </p>

          <h2 className="font-bold text-[24px] leading-none text-gray-900 md:text-[36px]">
            OOH is growing globally – and it's DOOH that's driving it forward.
          </h2>

          {/* Button */}
          <div className="action-container mt-4">
            <button className="web-button flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[--why-banner-bg-color] px-6 py-[18px] uppercase tracking-widest text-black font-bold shadow-md transition-all hover:opacity-90">
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
