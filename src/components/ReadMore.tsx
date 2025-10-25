import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Initial Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground">
              Digital OOH Advertising That Works
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lurity transforms traditional advertising with smart digital screens positioned at high-traffic locations. 
              Our network delivers your message to millions of potential customers where they shop, commute, and spend time.
            </p>

            {/* Expandable Content */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-6 space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our intelligent advertising platform combines cutting-edge technology with strategic placement 
                  to maximize your campaign's impact. With real-time analytics and dynamic content management, 
                  you can optimize your messaging for better engagement and conversion rates.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">Strategic Locations</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start">
                        <span className="text-cyan mr-2">•</span>
                        <span>Shopping centers and retail hubs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-magenta mr-2">•</span>
                        <span>Transit stations and commuter routes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow mr-2">•</span>
                        <span>Entertainment and dining districts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">Advanced Features</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start">
                        <span className="text-lime mr-2">•</span>
                        <span>Real-time content updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan mr-2">•</span>
                        <span>Detailed analytics and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-magenta mr-2">•</span>
                        <span>Multi-screen campaign management</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed mt-6">
                  Join hundreds of successful brands that trust Lurity to deliver their message to the right 
                  audience at the right time. Our proven track record and innovative approach make us the 
                  preferred choice for modern digital advertising.
                </p>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="flex justify-center pt-6">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant="outline"
                className="group border-2 border-cyan text-cyan hover:bg-cyan hover:text-white font-bold px-8 py-6 text-base rounded-lg transition-all hover:scale-105 hover:shadow-cyan"
              >
                {isExpanded ? (
                  <>
                    SHOW LESS
                    <ChevronUp className="ml-2 group-hover:-translate-y-1 transition-transform" size={20} />
                  </>
                ) : (
                  <>
                    READ MORE
                    <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
