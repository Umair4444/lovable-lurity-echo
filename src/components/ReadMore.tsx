import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-6">
          {/* Initial Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              About Lurity
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Lurity is a revolutionary digital advertising platform that transforms how brands connect with their audiences. 
              With our extensive network of strategically placed digital screens, we deliver your message where it matters most.
            </p>
          </div>

          {/* Expandable Content */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-6 pt-6">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Our intelligent advertising solution combines cutting-edge technology with strategic placement to maximize 
                your campaign's impact. We understand that modern advertising needs to be smart, targeted, and effective.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Why Choose Lurity?
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Massive Reach:</strong> 55 million views annually across 600+ premium digital screens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-magenta mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Strategic Locations:</strong> Positioned at high-traffic venues and key decision-making points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Proven Results:</strong> The most effective medium for online activation and brand awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">International Coverage:</strong> Operating in 3 countries with continuous expansion</span>
                  </li>
                </ul>
              </div>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Join hundreds of successful brands who have already discovered the power of intelligent outdoor advertising. 
                Let Lurity help you stay one step ahead in the competitive digital landscape.
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="pt-4">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="group hover:bg-cyan/10 hover:border-cyan transition-all duration-300 hover:scale-105"
            >
              {isExpanded ? (
                <>
                  SHOW LESS
                  <ChevronUp className="ml-2 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  READ MORE
                  <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
