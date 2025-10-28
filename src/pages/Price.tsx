import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { TrendingUp, MapPin, Clock, Image } from "lucide-react";
import Topbar from "@/components/Topbar";
import Navigation from "@/components/Navigation";

const Price = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                DOOH is the cheapest online activator
              </h1>
              <h2 className="text-xl font-bold">
                Choose where and how intensely you want to reach your customers.
                With us, you're actually renting.
              </h2>
              <p className="text-lg text-muted-foreground">
                We'll deliver according to your order.
              </p>
              <p className="text-base text-muted-foreground">
                We combine visual and dynamic benefits of the image with the
                advantage of digital rental purchase. Replace regular billboards
                with flexible digital OOH and control your campaign yourself.
              </p>
              <Button
                size="lg"
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-bold px-8 mt-4"
              >
                I'M INTERESTED →
              </Button>
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
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-pink-500">STRENGTH</h3>
              <p className="text-sm text-muted-foreground">
                of the media deployment is set by you in the application
                according to the intensity requirement of the campaign
              </p>
            </div>

            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-purple-500">PLACE</h3>
              <p className="text-sm text-muted-foreground">
                of the campaign's run is chosen from several hundred digital
                screens from the CR or SR according to location (country, city,
                specific shopping center or other location), type of screen,
                screen placement, and other parameters
              </p>
            </div>

            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-blue-500">TIME</h3>
              <p className="text-sm text-muted-foreground">
                of deployment is also up to you: choose exactly when to launch
                the campaign and how many weeks the target group will perceive
                your campaign
              </p>
            </div>

            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-green-500">
                VISUAL / SPOT
              </h3>
              <p className="text-sm text-muted-foreground">
                the choice is again yours: use your 10 seconds of airtime at
                your own discretion. Whether it's a visual or a video in those
                10 seconds is your decision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Realization Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-black">
            We'll realize your decision at the desired time, on the screens you
            choose, and multiply by the desired strength.
          </h2>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black">
                <span className="text-primary">SUPPORT</span> this is solely up
                to us and our team: when you need advice, we have the
                experience, data, and overview. We are happy to use them to your
                advantage.
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Is 10 seconds enough time to capture the attention of a
                    moving customer?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Static or dynamic background?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Where can I find my potential customers / target group?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    We can provide a well-founded answer to many questions
                  </span>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-bold px-8 mt-6"
              >
                CONTACT
              </Button>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-black">Did you know?</h2>
              <p className="text-xl font-semibold">
                52% of the target group notices the DDOH (digital OOH) format
                like Lurity, of which 57% visit the shopping place and of that
                up to 93% actually make a purchase?
              </p>
              <Button
                size="lg"
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-bold px-8"
              >
                I'M INTERESTED →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-muted/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://www.lurity.com/blog/blog_image_01.jpg"
                  alt="OAAA Nielsen studies"
                  className="w-full h-full object-cover"
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
                <Button variant="outline" className="w-fit font-bold">
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-32 px-6 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.lurity.com/images/cta_image.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90"></div>
        <div className="container mx-auto text-center relative z-10">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold px-12 text-lg"
          >
            LAUNCH CAMPAIGN
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Price;
