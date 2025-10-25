// "use client";
// import React, { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// interface Testimonial {
//   image: string;
//   name: string;
//   position: string;
//   quote: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     image: "https://www.lurity.com/customerReviews/ZSS.png",
//     name: "Marek Lukoťka",
//     position: "CMO, Železničná spoločnosť Slovensko",
//     quote:
//       "I really appreciate the connection of the online and offline world. It is also interesting for me that we know how many and what people really saw our OOH advertising, which is quite complicated with other OOH media. At the same time, the system on which the network is built is simple, understandable, and flexible for the user.",
//   },
//   {
//     image: "https://www.lurity.com/customerReviews/orange.png",
//     name: "Radka Petricova",
//     position: "Media Coordinator, Orange Slovensko",
//     quote:
//       "The concept itself caught my attention, especially because it's a Slovak product. At Lurity, I appreciate the UI interface, which is very user-friendly and intuitive, whether setting up the first campaign or viewing individual statistics.",
//   },
//   {
//     image: "https://www.lurity.com/customerReviews/profit_365.png",
//     name: "Ing. Tomáš Krajčovič",
//     position: "Marketing & Sales Manager, PROFIT 365",
//     quote:
//       "The speed with which we can create an advertising campaign and get it among the target group of our readers, adjust it on the go thanks to real-time feedback with the ability to plan the budget literally by the hour, brings an unprecedented dose of action and flexibility to the world of OOH advertising.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-24 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl lg:text-6xl font-black">
//             What our customers think of us
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
//             >
//               <Quote className="w-12 h-12 text-cyan opacity-20 absolute top-6 right-6" />
//               <div className="flex items-center gap-4 mb-6">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 object-contain"
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg">{testimonial.name}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     {testimonial.position}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-muted-foreground italic">
//                 "{testimonial.quote}"
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  image: string;
  name: string;
  position: string;
  quote: string;
}

// const testimonials: Testimonial[] = [
//   {
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//     name: "John Smith",
//     position: "Marketing Director, AdPro",
//     quote:
//       "Lurity has transformed the way we plan and execute our DOOH campaigns. Brilliant platform!",
//   },
//   {
//     image: "https://randomuser.me/api/portraits/women/22.jpg",
//     name: "Sarah Johnson",
//     position: "Brand Manager, Nova Media",
//     quote:
//       "The planning software is incredibly easy to use. We saw immediate improvements in ad reach.",
//   },
//   {
//     image: "https://randomuser.me/api/portraits/men/33.jpg",
//     name: "James Lee",
//     position: "Founder, VisionX",
//     quote:
//       "I love how fast and transparent the campaign deployment process is. Highly recommended!",
//   },
//   {
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     name: "Maria Gonzalez",
//     position: "Operations Head, AdLink",
//     quote:
//       "Customer service is top-notch. Lurity makes everything effortless and professional.",
//   },
//   {
//     image: "https://randomuser.me/api/portraits/men/55.jpg",
//     name: "Robert Clark",
//     position: "CEO, UrbanReach",
//     quote:
//       "Our campaigns look amazing on digital billboards now. The performance data is next-level.",
//   },
// ];

const testimonials: Testimonial[] = [
  {
    image: "https://www.lurity.com/customerReviews/ZSS.png",
    name: "Marek Lukoťka",
    position: "CMO, Železničná spoločnosť Slovensko",
    quote:
      "I really appreciate the connection of the online and offline world. It is also interesting for me that we know how many and what people really saw our OOH advertising, which is quite complicated with other OOH media. At the same time, the system on which the network is built is simple, understandable, and flexible for the user.",
  },
  {
    image: "https://www.lurity.com/customerReviews/orange.png",
    name: "Radka Petricova",
    position: "Media Coordinator, Orange Slovensko",
    quote:
      "The concept itself caught my attention, especially because it's a Slovak product. At Lurity, I appreciate the UI interface, which is very user-friendly and intuitive, whether setting up the first campaign or viewing individual statistics.",
  },
  {
    image: "https://www.lurity.com/customerReviews/profit_365.png",
    name: "Ing. Tomáš Krajčovič",
    position: "Marketing & Sales Manager, PROFIT 365",
    quote:
      "The speed with which we can create an advertising campaign and get it among the target group of our readers, adjust it on the go thanks to real-time feedback with the ability to plan the budget literally by the hour, brings an unprecedented dose of action and flexibility to the world of OOH advertising.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "John Smith",
    position: "Marketing Director, AdPro",
    quote:
      "Lurity has transformed the way we plan and execute our DOOH campaigns. Brilliant platform!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Sarah Johnson",
    position: "Brand Manager, Nova Media",
    quote:
      "The planning software is incredibly easy to use. We saw immediate improvements in ad reach.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "James Lee",
    position: "Founder, VisionX",
    quote:
      "I love how fast and transparent the campaign deployment process is. Highly recommended!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Maria Gonzalez",
    position: "Operations Head, AdLink",
    quote:
      "Customer service is top-notch. Lurity makes everything effortless and professional.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Robert Clark",
    position: "CEO, UrbanReach",
    quote:
      "Our campaigns look amazing on digital billboards now. The performance data is next-level.",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 2; // number of cards visible at once
  const totalSlides = Math.ceil(testimonials.length / visibleCards);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

  const start = currentIndex * visibleCards;
  const end = start + visibleCards;
  const visibleTestimonials = testimonials.slice(start, end);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black">
            What our customers think of us
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-muted hover:bg-muted/70 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Cards */}
          <div className="grid md:grid-cols-2  gap-8 transition-transform duration-500 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="w-12 h-12 text-cyan opacity-20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
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

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-muted hover:bg-muted/70 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
