import { Button } from "@/components/ui/button";

const FooterBanner = () => {
  return (
    <footer className="flex flex-col sm:flex-row-reverse items-center justify-center sm:justify-around gap-10 sm:py-8 bg-cyan text-white overflow-hidden">
      {/* <footer className="flex flex-col-reverse items-center justify-center py-8 bg-cyan text-white overflow-hidden"> */}
      <div className="object-contain w-full sm:w-96 h-full sm:h-56">
        <img
          src="	https://www.lurity.com/images/cta_image_mobile.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-2 ">
        <div className="flex flex-col items-center lg:items-start space-y-10 mb-20 sm:mb-0">
          <h2 className="text-5xl md:text-5xl lg:text-6xl text-center font-extrabold text-black">
            Try it effectively
          </h2>
          <Button className="bg-[#ffd503] w-fit text-black hover:bg-[#ffd503]/90 font-bold px-6 py-8 text-lg rounded-[10px] shadow-2xl">
            Launch campaign{" "}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default FooterBanner;
