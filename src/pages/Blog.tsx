import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FooterBanner from "@/components/FooterBanner";

const Blog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6); // initially show 6

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
    excerpt:
      "Why Every Campaign Should Include Outdoor and Digital OOH Advertising As digital advertising faces growing challenges—banner blindness, rising co...",
    image: "https://www2.lurity.com/sites/default/files/dooh.jpg",
  };

  const blogPosts = [
    {
      date: "22 OCTOBER 2025",
      title:
        "OOH is growing globally – and it's DOOH that's driving it forward.",
      excerpt:
        "Why Every Campaign Should Include Outdoor and Digital OOH Advertising As digital advertising faces growing challenges—banner blindness, rising co...",
      image: "https://www2.lurity.com/sites/default/files/dooh.jpg",
    },
    {
      date: "02 OCTOBER 2025",
      title: "DOOH 2026: New Horizons and the Next Wave of OOH Transformation",
      excerpt:
        "Digital Out-of-Home (DOOH) advertising has come a long way. Once reserved for tech-savvy brands and pilot campaigns, it has evolved into a full-fledg...",
      image: "https://www2.lurity.com/sites/default/files/Lurity.png",
    },
    {
      date: "12 SEPTEMBER 2025",
      title: "5 Reasons Why Digital OOH Belongs in Every Media Mix",
      excerpt:
        "In today's fast-paced advertising landscape, brands are constantly seeking innovative ways to capture attention and drive results...",
      image:
        "https://www2.lurity.com/sites/default/files/20230426_122736%20-%20k%C3%B3pia.jpg",
    },
    {
      date: "03 APRIL 2024",
      title:
        "LURITY: The future of digital OOH advertising is an omnichannel marketing approach",
      excerpt:
        "Discover how omnichannel strategies are transforming digital out-of-home advertising and creating seamless brand experiences...",
      image: "https://www2.lurity.com/sites/default/files/dooh.jpg",
    },
    {
      date: "08 JANUARY 2024",
      title: "Strategies, Advertising Agencies 2023",
      excerpt:
        "A comprehensive look at the most effective advertising strategies and agency trends that shaped 2023...",
      image: "https://www2.lurity.com/sites/default/files/Lurity.png",
    },
    {
      date: "15 DECEMBER 2023",
      title: "The Evolution of DOOH: From Static to Dynamic",
      excerpt:
        "Exploring the technological advancements that have revolutionized digital out-of-home advertising...",
      image:
        "https://www2.lurity.com/sites/default/files/20230426_122736%20-%20k%C3%B3pia.jpg",
    },
  ];

  // Generate 50 posts using blogPosts as base
  const blogPost = [...blogPosts]; // final array

  for (let i = 0; blogPost.length < 50; i++) {
    const base = blogPosts[i % blogPosts.length]; // pick from base posts
    blogPost.push({
      date: base.date,
      title: `${base.title} (Post ${blogPost.length + 1})`,
      excerpt: base.excerpt,
      image: base.image,
    });
  }

  // Show 6 more posts on click
  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, blogPost.length));
  };

  return (
    <div className="min-h-screen relative bg-background">
      {/* Hero Featured Post */}
      <section className="pt-10 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start rounded-lg bg-[#f5f4f0]">
            <div className=" order-2 lg:order-1 py-6 px-6">
              <h2 className="bg-[#213b54] mx-auto px-6 py-3 rounded-lg w-fit text-white text-2xl text-center font-bold mb-4 border-b-2 border-white">
                DOOH: Key Stats Driving the Boom
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-center justify-items-center">
                <div className="flex items-center text-center space-y-2 max-w-xs">
                  <div className="text-7xl mb-4 ">📈</div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg text-left leading-tight">
                      Global OOH market is expected to reach $45 billion by 2026
                    </p>
                    <p className="text-sm text-left text-black/70">
                      (Statista)
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-center space-y-2 max-w-xs">
                  <div className="text-7xl mb-4 ">🌐</div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg text-left leading-tight">
                      Digital OOH accounts for over 35% of total OOH ad spend
                    </p>
                    <p className="text-sm text-left text-black/70">
                      (WARC, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-center space-y-2 max-w-xs">
                  <div className="text-7xl mb-4 ">💡</div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg text-left leading-tight">
                      76% of viewers take action after seeing DOOH ads
                    </p>
                    <p className="text-sm text-left text-black/70">
                      (WARC, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-center space-y-2 max-w-xs">
                  <div className="text-7xl mb-4 ">🎯</div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg text-left leading-tight">
                      Targeted DOOH campaigns show +40% uplift in brand
                      awareness
                    </p>
                    <p className="text-sm text-left text-black/70">
                      (Nulo case){" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-center space-y-2 max-w-xs">
                  <div className="text-7xl mb-4 ">📊</div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg text-left leading-tight">
                      DOOH offers real-time data, programmability & measurable
                      ROI
                    </p>
                    <p className="text-sm text-left text-black/70">
                      (Place Exchange)
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-center space-y-2 max-w-xs">
                  <div className="text-7xl mb-4 ">🏢</div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg text-left leading-tight">
                      Major brands like Amazon, McDonald's, Netflix are adopting
                      DOOH at scale
                    </p>
                    <p className="text-sm text-left text-black/70">
                      (Nulo case){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" order-1 xl:order-2 px-6">
              <div className="text-sm text-muted-foreground mb-3 font-bold tracking-wider pt-10">
                {featuredPost.date}
              </div>
              <h1 className="text-3xl font-black mb-6 leading-tight">
                {featuredPost.title}
              </h1>
              <p className="text-[14px] mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Button
                size="lg"
                className="bg-yellow hover:bg-yellow/80 text-black font-bold mb-5 xl:mb-0 py-8 rounded"
              >
                READ MORE <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pt-10 md:pt-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {blogPost.slice(0, visiblePosts).map((post, index) => (
              <Card
                key={index}
                className="hover:bg-[#e5e7eb] overflow-hidden border-none"
              >
                <div className="aspect-video overflow-hidden m-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover "
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-muted-foreground mb-3 font-bold tracking-wider">
                    {post.date}
                  </div>
                  <h3 className="text-3xl font-black mb-4 leading-tight line-clamp-2 group-hover:text-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-black mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {visiblePosts < blogPost.length && (
        <div className="flex flex-row items-center justify-center mb-16 mt-8 lg:-mt16 xl:mt-24 lg:mb-32">
          <Button
            size="lg"
            className="bg-yellow hover:bg-yellow/80 text-black font-bold px-6 py-8 rounded-sm"
            onClick={loadMorePosts}
          >
            READ MORE <FaArrowRight className="ml-2" />
          </Button>
        </div>
      )}

      <FooterBanner />
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan border-2 border-black text-black"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default Blog;
