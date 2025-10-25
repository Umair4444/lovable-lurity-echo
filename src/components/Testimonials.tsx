import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://www.lurity.com/customerReviews/ZSS.png",
      name: "Marek Lukoťka",
      position: "CMO, Železničná spoločnosť Slovensko",
      quote: "I really appreciate the connection of the online and offline world. It is also interesting for me that we know how many and what people really saw our OOH advertising, which is quite complicated with other OOH media. At the same time, the system on which the network is built is simple, understandable, and flexible for the user.",
    },
    {
      image: "https://www.lurity.com/customerReviews/orange.png",
      name: "Radka Petricova",
      position: "Media Coordinator, Orange Slovensko",
      quote: "The concept itself caught my attention, especially because it's a Slovak product. At Lurity, I appreciate the UI interface, which is very user-friendly and intuitive, whether setting up the first campaign or viewing individual statistics.",
    },
    {
      image: "https://www.lurity.com/customerReviews/profit_365.png",
      name: "Ing. Tomáš Krajčovič",
      position: "Marketing & Sales Manager, PROFIT 365",
      quote: "The speed with which we can create an advertising campaign and get it among the target group of our readers, adjust it on the go thanks to real-time feedback with the ability to plan the budget literally by the hour, brings an unprecedented dose of action and flexibility to the world of OOH advertising.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black">
            What our customers think of us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <Quote className="w-12 h-12 text-cyan opacity-20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
