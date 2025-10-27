import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const featuredPost = {
    date: "22 OCTOBER 2025",
    title: "OOH is growing globally – and it's DOOH that's driving it forward.",
    excerpt: "Why Every Campaign Should Include Outdoor and Digital OOH Advertising As digital advertising faces growing challenges—banner blindness, rising co...",
    image: "https://www2.lurity.com/sites/default/files/dooh.jpg",
  };

  const blogPosts = [
    {
      date: "22 OCTOBER 2025",
      title: "OOH is growing globally – and it's DOOH that's driving it forward.",
      excerpt: "Why Every Campaign Should Include Outdoor and Digital OOH Advertising As digital advertising faces growing challenges—banner blindness, rising co...",
      image: "https://www2.lurity.com/sites/default/files/dooh.jpg",
    },
    {
      date: "02 OCTOBER 2025",
      title: "DOOH 2026: New Horizons and the Next Wave of OOH Transformation",
      excerpt: "Digital Out-of-Home (DOOH) advertising has come a long way. Once reserved for tech-savvy brands and pilot campaigns, it has evolved into a full-fledg...",
      image: "https://www2.lurity.com/sites/default/files/Lurity.png",
    },
    {
      date: "12 SEPTEMBER 2025",
      title: "5 Reasons Why Digital OOH Belongs in Every Media Mix",
      excerpt: "In today's fast-paced advertising landscape, brands are constantly seeking innovative ways to capture attention and drive results...",
      image: "https://www2.lurity.com/sites/default/files/20230426_122736%20-%20k%C3%B3pia.jpg",
    },
    {
      date: "03 APRIL 2024",
      title: "LURITY: The future of digital OOH advertising is an omnichannel marketing approach",
      excerpt: "Discover how omnichannel strategies are transforming digital out-of-home advertising and creating seamless brand experiences...",
      image: "https://www2.lurity.com/sites/default/files/dooh.jpg",
    },
    {
      date: "08 JANUARY 2024",
      title: "Strategies, Advertising Agencies 2023",
      excerpt: "A comprehensive look at the most effective advertising strategies and agency trends that shaped 2023...",
      image: "https://www2.lurity.com/sites/default/files/Lurity.png",
    },
    {
      date: "15 DECEMBER 2023",
      title: "The Evolution of DOOH: From Static to Dynamic",
      excerpt: "Exploring the technological advancements that have revolutionized digital out-of-home advertising...",
      image: "https://www2.lurity.com/sites/default/files/20230426_122736%20-%20k%C3%B3pia.jpg",
    },
  ];

  return (
    <div className="min-h-screen relative bg-background">
      <Topbar />
      <Navigation />
      
      {/* Hero Featured Post */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#1a3a52] text-white p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black mb-6 border-b-2 border-white pb-4">
                  DOOH: Key Stats Driving the Boom
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📈</div>
                    <div>
                      <p className="font-bold">Global OOH market</p>
                      <p className="text-sm">is expected to reach $45 billion by 2026</p>
                      <p className="text-xs text-gray-300">(Statista)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🌐</div>
                    <div>
                      <p className="font-bold">Digital OOH accounts</p>
                      <p className="text-sm">for over 35% of total OOH ad spend</p>
                      <p className="text-xs text-gray-300">(WARC, 2024)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💡</div>
                    <div>
                      <p className="font-bold">76% of viewers take action after seeing DOOH ads</p>
                      <p className="text-xs text-gray-300">(StackAdapt, 2023)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <p className="font-bold">Targeted DOOH campaigns show +40%</p>
                      <p className="text-sm">uplift in brand awareness</p>
                      <p className="text-xs text-gray-300">(Nulo case)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📊</div>
                    <div>
                      <p className="font-bold">DOOH offers real-time data, programmability & measurable ROI</p>
                      <p className="text-xs text-gray-300">(Place Exchange)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div>
                      <p className="font-bold">Major brands like Amazon, McDonald's, Netflix are adopting DOOH at scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-sm text-muted-foreground mb-3 font-bold tracking-wider">
                {featuredPost.date}
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {featuredPost.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Button 
                size="lg" 
                className="bg-yellow text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-lg px-8"
              >
                READ MORE <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-muted-foreground mb-3 font-bold tracking-wider">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto font-black text-cyan hover:text-magenta transition-colors"
                  >
                    READ MORE <FaArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default Blog;
