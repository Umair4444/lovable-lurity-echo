import { MapPin, Target, Clock, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Top places",
      description: "We are where the most people are",
    },
    {
      icon: Target,
      title: "Choose locations",
      description: "From hundreds of DOOH in the Czech or Slovak Republic.",
    },
    {
      icon: Clock,
      title: "Timing",
      description: "You plan when and how long the campaign will run.",
    },
    {
      icon: ImageIcon,
      title: "Visual or spot?",
      description: "or multiple for a campaign? Change anytime.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-black">
            Why should you have Lurity in your campaign?
          </h2>
          <Button className="bg-cyan hover:bg-cyan/90 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-cyan group">
            I'M INTERESTED 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-cyan rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-4">
          <h3 className="text-3xl font-bold">How we're better</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <span className="px-6 py-3 bg-cyan text-white rounded-full">Effective DOOH</span>
            <span className="px-6 py-3 bg-magenta text-white rounded-full">Planning software</span>
            <span className="px-6 py-3 bg-yellow text-black rounded-full">Campaign deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
