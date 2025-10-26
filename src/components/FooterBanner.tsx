import { Button } from "@/components/ui/button";

const FooterBanner = () => {
  return (
    <footer className="flex flex-row-reverse items-center justify-around py-2 bg-gradient-magenta text-white overflow-hidden">
      <div className="object-contain w-96 h-80 hidden lg:block">
        <img
          src="	https://www.lurity.com/images/cta_image_mobile.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-6">
        <div className="text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-black">
            Try it effectively
          </h2>
          <Button className="bg-white text-magenta hover:bg-white/90 font-bold px-12 py-6 text-lg rounded-lg shadow-2xl">
            Launch campaign{" "}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default FooterBanner;
