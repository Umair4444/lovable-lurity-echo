import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  "https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvdGVzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1567219934540-9f75f7b87552?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVvdGVzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1698620225002-36b415f78d57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHF1b3Rlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1641673840250-2843679337f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHF1b3Rlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
];

const PhoneCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % logos.length);
  };

  return (
    <div className="relative w-[300px] lg:w-[350px] mx-auto">
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Main Image */}
        <div className="bg-black rounded-[2.5rem] aspect-[9/19] flex items-center justify-center overflow-hidden">
          <img
            src={logos[current]}
            alt="Lurity"
            className="w-full object-contain transition-all duration-700"
          />
        </div>

        {/* Bottom Logo */}
        <div className="absolute w-full bg-black -bottom-0 -left-0 rounded-full flex flex-row items-center justify-center gap-2 h-28 mt-4">
          <img
            src="/lurity.png"
            alt="Lurity Body"
            className="w-52 object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute hidden left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hidden right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default PhoneCarousel;
