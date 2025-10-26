interface FloatingDotProps {
  bgColor: string;
  position: string;
  delay: string;
  size?: string;
}

const FloatingDot = ({ bgColor, position, delay, size = "w-4 h-4" }: FloatingDotProps) => {
  return (
    <div
      className={`absolute z-30 ${position} ${size} ${bgColor} rounded animate-float`}
      style={{ animationDelay: delay }}
    ></div>
  );
};

export default FloatingDot;
