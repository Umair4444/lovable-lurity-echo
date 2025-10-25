import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-24 bg-gradient-magenta text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://www.lurity.com/images/cta_image.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-black">
            Launch campaign
          </h2>
          <Button className="bg-white text-magenta hover:bg-white/90 font-bold px-12 py-6 text-lg rounded-lg shadow-2xl">
            GET STARTED NOW
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
