interface FloatingImageProps {
  src: string;
  alt: string;
  position: string;
  delay: string;
}

const FloatingImage = ({ src, alt, position, delay }: FloatingImageProps) => {
  return (
    <div
      className={`absolute ${position} w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full overflow-hidden border-2 md:border-3 lg:border-4 border-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-float backdrop-blur-sm`}
      style={{ animationDelay: delay }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default FloatingImage;
