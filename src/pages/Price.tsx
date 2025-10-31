import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  MapPin,
  Clock,
  Image,
  MoveRightIcon,
  ArrowRight,
  Headphones,
} from "lucide-react";
import Topbar from "@/components/Topbar";
import Navigation from "@/components/Navigation";
import FooterBanner from "@/components/FooterBanner";

const Price = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl font-black leading-[3rem]">
                DOOH is the cheapest online activator
              </h1>
              <h2 className="text-lg font-bold leading-5">
                Choose where and how intensely you want to reach your customers.
                With us, you're actually renting.
              </h2>
              <p className="text-lg text-black">
                We'll deliver according to your order.
              </p>
              <p className="text-base text-black">
                We combine visual and dynamic benefits of the image with the
                advantage of digital rental purchase. Replace regular billboards
                with flexible digital OOH and control your campaign yourself.
              </p>
              <button className="bg-[#1FC9FF] hover:bg-[#1FC9FF]/80 text-black font-bold py-4 px-6 rounded uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                <span>I'm interested</span>
                <MoveRightIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://www.lurity.com/step-ahead/price.jpg"
                alt="DOOH Campaign Management"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f3f7f9]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col justify-center gap-20">
            {/* STRENGTH */}
            <div className="flex gap-10 items-center justify-start animate-fade-in">
              <div className="w-16 h-16 bg-transparent flex items-center justify-center">
                <TrendingUp className="w-12 h-12  text-magenta" />
              </div>
              <h3 className="text-2xl font-extrabold text-magenta">
                STRENGTH
                <span className="px-2 text-2xl font-normal text-black">
                  of the media deployment is set by you in the application
                  according to the intensity requirement of the campaign
                </span>
              </h3>
            </div>

            {/* PLACE */}
            <div
              className="flex gap-10 items-center justify-start animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-transparent flex items-center justify-center">
                <MapPin className="w-12 h-12 text-magenta" />
              </div>
              <h3 className="text-2xl font-extrabold text-magenta">
                PLACE
                <span className="px-2 text-2xl font-normal text-black">
                  of the campaign’s run is chosen from several hundred digital
                  screens according to location, type, and placement
                </span>
              </h3>
            </div>

            {/* TIME */}
            <div
              className="flex gap-10 items-center justify-start animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-transparent flex items-center justify-center">
                <Clock className="w-12 h-12 text-magenta" />
              </div>
              <h3 className="text-2xl font-extrabold text-magenta">
                TIME
                <span className="px-2 text-2xl font-normal text-black">
                  of deployment is up to you — choose when to launch and how
                  long the campaign runs
                </span>
              </h3>
            </div>

            {/* VISUAL / SPOT */}
            <div
              className="flex gap-10 items-center justify-start animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-transparent flex items-center justify-center">
                <Image className="w-12 h-12 text-magenta" />
              </div>
              <h3 className="text-2xl font-extrabold text-magenta">
                VISUAL / SPOT
                <span className="px-2 text-2xl font-normal text-black">
                  use your 10 seconds of airtime however you wish — visual or
                  video
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Realization Section */}
      <section className="py-32 px-6 bg-magenta">
        <div className="container mx-auto max-w-7xl text-justify space-y-6">
          <h2 className="text-[40px] leading-none  font-black">
            We'll realize your decision at the desired time, on the screens you
            choose, and multiply by the desired strength.
          </h2>
        </div>
      </section>

      {/* Support Section */}

      <section className="p-0 max-w-6xl mx-auto mt-20 sm:p-6 md:p-10 lg:p-14 flex flex-col md:flex-row bg-white rounded-lg border sm:border-[#E2E9ED]">
        {/* Icon */}
        <div className="mr-6 flex-shrink-0 flex items-start justify-center">
          <div className="text-[#7ED52E]">
            <Headphones
              className="w-14 h-14 sm:w-16 sm:h-16"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center mb-4">
            <h2 className="font-bold text-xl leading-snug">
              <span className="text-[#7ED52E] font-extrabold pr-1">
                SUPPORT{" "}
              </span>
              <span className="text-gray-900 ">
                this is solely up to us and our team: when you need advice, we
                have the experience, data, and overview. We are happy to use
                them to your advantage.
              </span>
            </h2>
          </div>

          {/* Bullet List */}
          <ul className="list-disc list-inside text-gray-700 mb-6 font-normal lowercase text-[14px] md:text-[18px] space-y-1">
            <li>
              Is 10 seconds enough time to capture the attention of a moving
              customer?
            </li>
            <li>Static or dynamic background?</li>
            <li>Where can I find my potential customers / target group?</li>
            <li>We can provide a well-founded answer to many questions</li>
          </ul>

          {/* Button */}

          <button className="bg-[#7ED52E] hover:bg-[#7ED52E]/80 text-black font-bold py-4 px-6 rounded-[6px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
            <span>Contact</span>
            <MoveRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-[#FFD503] px-6 py-12 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left Title */}
          <div className="md:w-1/3">
            <h2 className="text-[46px] leading-tight translate-x-6 font-extrabold text-[#152B08]">
              Did you know?
            </h2>
          </div>

          {/* Right Text & Button */}
          <div className="md:w-2/3 flex flex-col items-start">
            <p className="text-[18px] text-[#152B08] leading-relaxed">
              <span className="font-bold text-[#88510B]">52%</span> of the
              target group notices the DDOH (digital OOH) format like Lurity, of
              which <span className="font-bold text-[#88510B]">57%</span> visit
              the shopping place and of that up to{" "}
              <span className="font-bold text-[#88510B]">93%</span> actually
              make a purchase?
            </p>

            <button className=" text-black font-bold py-4 mt-6 rounded uppercase tracking-widest flex items-center justify-center gap-3">
              <span> I’m interested</span>
              <MoveRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="flex">
              <div className="relative h-auto w-1/2">
                <img
                  src="https://www.lurity.com/blog/blog_image_01.jpg"
                  alt="OAAA Nielsen studies"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                <p className="text-sm text-muted-foreground font-semibold">
                  18 MARCH 2021
                </p>
                <h3 className="text-2xl lg:text-3xl font-black">
                  The latest OAAA Nielsen studies prove: out-of-home creates
                  high target group engagement!
                </h3>
                <button className=" w-fit text-black font-bold py-4 px-6 rounded uppercase tracking-widest flex items-center justify-center gap-3">
                  <span>Read more</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FooterBanner />

      <Footer />
    </div>
  );
};

export default Price;
