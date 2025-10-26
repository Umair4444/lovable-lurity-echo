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
        <div className="bg-gray-400/30 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 rounded-xl md:rounded-2xl border-2 border-transparent opacity-50 animate-border-expand"></div>
      </div>

      {/* Stats Card */}
      <div
        className={`absolute z-30 ${position} ${bgColor} px-3 sm:px-4 md:px-5 lg:px-7 xl:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20`}
        style={delay ? { animationDelay: delay } : undefined}
      >
        <div className="flex flex-col items-center justify-around h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28">
          <div className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs font-bold mb-0.5 sm:mb-1 text-black/90 tracking-wide uppercase">{label}</div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-black">{value}</div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
