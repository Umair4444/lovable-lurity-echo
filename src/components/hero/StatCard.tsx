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
        <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
      </div>

      {/* Stats Card */}
      <div
        className={`absolute z-30 ${position} ${bgColor} px-8 py-4 rounded-3xl shadow-lg`}
        style={delay ? { animationDelay: delay } : undefined}
      >
        <div className="flex flex-col items-center justify-around h-24">
          <div className="text-xs font-semibold mb-1">{label}</div>
          <div className="text-4xl font-black">{value}</div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
