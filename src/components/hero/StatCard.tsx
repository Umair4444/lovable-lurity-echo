interface StatCardProps {
  label: string;
  value: string;
  bgColor: string;
  position: string;
  delay?: string;
}

const StatCard = ({ label, value, bgColor, position, delay }: StatCardProps) => {
  return (
    <>
      {/* Ripple border effect */}
      <div className={`absolute z-30 ${position}`}>
        <div className="bg-gray-400 w-16 md:w-20 lg:w-24 px-8 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 h-16 md:h-20 lg:h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
      </div>

      {/* Stats Card */}
      <div
        className={`absolute z-30 ${position} ${bgColor} px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl shadow-lg`}
        style={delay ? { animationDelay: delay } : undefined}
      >
        <div className="flex flex-col items-center justify-around h-16 md:h-20 lg:h-24">
          <div className="text-[8px] md:text-[10px] lg:text-xs font-semibold mb-1">{label}</div>
          <div className="text-xl md:text-3xl lg:text-4xl font-black">{value}</div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
