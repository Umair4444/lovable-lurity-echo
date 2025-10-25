import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Activator = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              OOH is the cheapest online activator
            </h2>
            <p className="text-lg text-muted-foreground">
              Lurity is an affinity medium, at places where your customers are. A real accelerator of purchasing behavior of the target group* (OOAs Nielsen Research)
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg rounded-lg group">
              Find out more
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://www.lurity.com/images/hp_tab_image_1.png" 
              alt="OOH Analytics" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activator;
