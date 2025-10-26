interface FloatingImageProps {
  src: string;
  alt: string;
  position: string;
  delay: string;
}

const FloatingImage = ({ src, alt, position, delay }: FloatingImageProps) => {
  return (
    <div
      className={`absolute ${position} w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float`}
      style={{ animationDelay: delay }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default FloatingImage;
