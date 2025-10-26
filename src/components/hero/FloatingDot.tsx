interface FloatingDotProps {
  bgColor: string;
  position: string;
  delay: string;
  size?: string;
}

const FloatingDot = ({ bgColor, position, delay, size = "w-4 h-4" }: FloatingDotProps) => {
  return (
    <div
      className={`absolute z-30 ${position} ${size} ${bgColor} rounded-full animate-float shadow-lg hover:shadow-xl hover:scale-125 transition-all duration-300`}
      style={{ animationDelay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
    </div>
  );
};

export default FloatingDot;
