"use client";
import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  image: string;
  name: string;
  position: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/testimonials/ZSS.png",
    name: "Marek Lukoťka",
    position: "CMO, Železničná spoločnosť Slovensko",
    quote: "It's unbelievable what the system offers in OOH.",
  },
  {
    image: "/testimonials/orange.png",
    name: "Radka Petricova",
    position: "Media Coordinator, Orange Slovensko",
    quote:
      "I really appreciate the connection of the online and offline world. It is also interesting for me that we know how many and what people really saw our OOH advertising, which is quite complicated with other OOH media. At the same time, the system on which the network is built is simple, understandable, and flexible for the user.",
  },
  {
    image: "/testimonials/profit_365.png",
    name: "Ing. Tomáš Krajčovič",
    position: "Marketing & Sales Manager, PROFIT 365",
    quote:
      "The concept itself caught my attention, especially because it's a Slovak product. At Lurity, I appreciate the UI interface, which is very user-friendly and intuitive, whether setting up the first campaign or viewing individual statistics.",
  },
  {
    image: "/testimonials/miau.png",
    name: "Milan Brčák",
    position: "Editor in Chief, MIAU",
    quote:
      "The speed with which we can create an advertising campaign and get it among the target group of our readers, adjust it on the go thanks to real-time feedback with the ability to plan the budget literally by the hour, brings an unprecedented dose of action and flexibility to the world of OOH advertising.",
  },
  {
    image: "/testimonials/paukin.png",
    name: "Dávid Paučin",
    position: "CEO, Justin Paukin",
    quote:
      "The Lurity system indeed has intuitive and simple controls. Setting up and subsequently launching the campaign was really very quick, which I appreciate. Last but not least, it's necessary to highlight the possibility of targeting a key segment of customers, or the measurability of individual campaigns. We look forward to further cooperation.",
  },
  {
    image: "/testimonials/eva.jpeg",
    name: "Mária Mičková",
    position: "Project Manager, EVA",
    quote:
      "The Lurity concept thrilled us because the campaign Eva Charity Bazaar in connection with this platform was exclusive and unique. We very much appreciate the measurability and thus the information we can utilize in the future about our target group. It's different, it's fresh, and we like the team of talented young people standing behind Lurity. We will definitely continue in cooperation.",
  },
  {
    image: "/testimonials/predpredaj_sk.png",
    name: "Katarína Bilská",
    position: "Marketing Manager, Predpredaj SK",
    quote:
      "The Lurity system is for everyone who swears by offline but believes that implementation can be more sophisticated than we are used to. I appreciate the possibility of immediate campaign launch, essentially within a few hours, without the need for reservation and waiting for pasting. The biggest benefit for me is that by using the platform, you reduce the negative impact of the campaign on the environment, since everything happens electronically without the need for printing.",
  },
  {
    image: "/testimonials/bubo_travel.jpg",
    name: "Pavel Fellner",
    position: "Co-owner, CK BUBO",
    quote:
      "I consider LURITY to be the future of marketing, which combines the advantages of online marketing and real-world advertising. That's also why I decided to sell BUBO trips through this platform.",
  },
];

export default function TestimonialsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 620; // adjust this to control scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-bold">
            What our customers think of us
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative flex items-center">
          {/* Left Arrow - hidden on small screens */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex p-3 rounded-full bg-muted hover:bg-muted/70 transition absolute left-0 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 md:px-12"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-[300px] md:w-[400px] lg:w-[600px] flex-shrink-0 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="w-12 h-12 text-cyan opacity-20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>

          {/* Right Arrow - hidden on small screens */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex p-3 rounded-full bg-muted hover:bg-muted/70 transition absolute right-0 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
