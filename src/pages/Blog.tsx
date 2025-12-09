import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FooterBanner from "@/components/FooterBanner";
import { Link } from "react-router-dom";

import { blogs } from "./blogs/BlogData";

const Blog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(9);

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

  // Convert blogs object → array with slug
  const blogPostArray = Object.entries(blogs).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  // Featured post = Blog #2 from your dataset
  const featuredPost = blogPostArray[0];

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, blogPostArray.length));
  };

  return (
    <div className="min-h-screen relative bg-background">
      {/* Featured Post */}
      <section className="pt-36 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start rounded-lg bg-[#f5f4f0]">
            {/* Stats Section */}
            <div className="order-2 lg:order-1 py-6 px-6">
              {/* <h2 className="bg-[#213b54] mx-auto px-6 py-3 rounded-lg w-fit text-white text-2xl text-center font-bold mb-4 border-b-2 border-white">
                DOOH: Key Stats Driving the Boom
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-center justify-items-center">
                {[
                  {
                    icon: "📈",
                    text: "Global OOH market is expected to reach $45 billion by 2026",
                    source: "Statista",
                  },
                  {
                    icon: "🌐",
                    text: "Digital OOH accounts for over 35% of total OOH ad spend",
                    source: "WARC, 2024",
                  },
                  {
                    icon: "💡",
                    text: "76% of viewers take action after seeing DOOH ads",
                    source: "WARC, 2024",
                  },
                  {
                    icon: "🎯",
                    text: "Targeted DOOH campaigns show +40% uplift in brand awareness",
                    source: "Nulo case",
                  },
                  {
                    icon: "📊",
                    text: "DOOH offers real-time data, programmability & measurable ROI",
                    source: "Place Exchange",
                  },
                  {
                    icon: "🏢",
                    text: "Major brands like Amazon, McDonald's, Netflix are adopting DOOH at scale",
                    source: "Nulo case",
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-3 max-w-xs">
                    <div className="text-6xl">{stat.icon}</div>
                    <div>
                      <p className="font-bold text-left leading-tight">
                        {stat.text}
                      </p>
                      <p className="text-sm text-black/70 text-left">
                        {stat.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-96 mx-auto"
              />
            </div>

            {/* Featured Article Text */}
            <div className="order-1 xl:order-2 px-6">
              <div className="text-sm text-muted-foreground mb-3 font-bold tracking-wider pt-10">
                {featuredPost.date}
              </div>

              <h1 className="text-3xl font-black mb-6 leading-tight">
                {featuredPost.title}
              </h1>

              <p className="text-[14px] mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <Link to={`/blog/${featuredPost.slug}`}>
                <Button
                  size="lg"
                  className="bg-yellow hover:bg-yellow/80 text-black font-bold mb-5 xl:mb-0 py-8 rounded"
                >
                  READ MORE <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container py-10 md:pt-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {blogPostArray.slice(0, visiblePosts).map((post, index) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="hover:bg-[#e5e7eb] overflow-hidden border-none cursor-pointer">
                  <div className="aspect-video overflow-hidden m-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="text-xs text-muted-foreground mb-3 font-bold tracking-wider">
                      {post.date}
                    </div>

                    <h3 className="text-3xl font-black mb-4 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[14px] text-black mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      {visiblePosts < blogPostArray.length && (
        <div className="flex justify-center my-16">
          <Button
            size="lg"
            className="bg-yellow hover:bg-yellow/80 text-black font-bold px-6 py-8 rounded-sm"
            onClick={loadMorePosts}
          >
            LOAD MORE <FaArrowRight className="ml-2" />
          </Button>
        </div>
      )}

      <FooterBanner />

      {/* Scroll To Top */}
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
