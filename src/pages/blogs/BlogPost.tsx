import { useParams } from "react-router-dom";
import { blogs } from "./BlogData";
import FooterBanner from "@/components/FooterBanner";
import { Heart, InstagramIcon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();
  const blogData = blogs[slug];

  if (!blogData) {
    return (
      <div className="flex flex-col items-center justify-center pt-48 pb-20 text-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted mb-6">
          <span className="text-4xl">📰</span>
        </div>

        <h1 className="text-2xl font-bold mb-2">Blog Not Found</h1>
        <p className="text-muted-foreground">
          Oops! We can’t find the blog you're searching for.
        </p>
      </div>
    );
  }

  const posters = [
    { id: 1, img: "/posterbanner_1.jpg" },
    { id: 2, img: "/posterbanner_2.jpg" },
    { id: 3, img: "/posterbanner_3.jpg" },
    { id: 4, img: "/posterbanner_4.jpg" },
    { id: 5, img: "/posterbanner_5.jpg" },
  ];

  const ArticleContent = blogData.content;

  return (
    <section className="min-h-screen container pt-40">
      {/* Dynamic Hero Section */}
      <div className=" mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center rounded-lg bg-[#f5f4f0]">
          <div className=" order-2 lg:order-1 py-6 px-6">
            <img
              src={blogData.image}
              alt={blogData.title}
              className="h-96 mx-auto"
            />
          </div>

          <div className=" order-1 xl:order-2 px-">
            <div className="text-sm text-muted-foreground mb-3 font-bold tracking-wider pt-10">
              {blogData.date}
            </div>
            <h1 className="text-3xl font-black mb-6 leading-tight">
              {blogData.title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={blogData.avatar}
                alt="Author Avatar"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex items-center justify-center">
                {blogData.author}
                <div className="flex flex-col items-start justify-center gap-3 text-sm font-light">
                  <div>
                    <p>{blogData.author_name}</p>
                    <p>{blogData.author_role}</p>
                  </div>
                  <p className="font-bold">{blogData.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto bg-background">
        <div className="container mx-auto px-4 pt-4">
          {/* ⭐ Dynamic Article Content Component */}
          <ArticleContent />

          <FooterBanner />

          <div className="pt-4 flex items-center justify-between">
            <Button
              size="lg"
              className="bg-transparent border border-yellow hover:bg-yellow/80 text-black font-bold px-8 py-8 rounded-sm"
            >
              PREVIOUS ARTICLE
            </Button>
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow/80 text-black font-bold px-8 py-8 rounded-sm"
            >
              BACK TO BLOG
            </Button>
            <Button
              size="lg"
              className="bg-transparent border border-yellow hover:bg-yellow/80 text-black font-bold px-8 py-8 rounded-sm"
            >
              NEXT ARTICLE
            </Button>
          </div>
        </div>
      </main>
      {/* Instagram Feed Section */}
      <div className="pt-6">
        <div className="w-fit mx-auto flex flex-wrap items-center justify-center gap-1 sm:gap-2 p-5 bg-white rounded-2xl">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
            <img src="/instalogo.jpg" className="rounded-full p-1" />
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left mr-2 sm:mr-8">
            <h1 className="text-lg font-semibold text-gray-800 uppercase leading-snug">
              Lucrity
            </h1>
            <h2 className="text-gray-400 text-[12px] -mt-1">@lucritycom</h2>
          </div>

          {/* Stats */}
          <div className="flex gap-2 sm:gap-8 text-center mr-2 sm:mr-8">
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                222
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Posts</h3>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                856
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Followers</h3>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                1k
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Following</h3>
            </div>
          </div>

          {/* Follow Button */}
          <div>
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded font-medium shadow-sm transition-all duration-300">
              <InstagramIcon className="w-5" />
              Follow
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className={`
        group relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 overflow-hidden shadow-lg transform transition-all duration-300
        ${index >= 1 ? "hidden" : "block"}          /* <640px: show 1 */
        ${index >= 2 ? "sm:hidden" : "sm:block"}   /* 640px+: show 2 */
        ${index >= 3 ? "md:hidden" : "md:block"}   /* 768px+: show 3 */
        ${index >= 4 ? "lg:hidden" : "lg:block"}   /* 1024px+: show 4 */
        ${index >= 5 ? "xl:hidden" : "xl:block"}   /* 1024px+: show 5 */
      `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={poster.img}
                  alt={`Poster ${poster.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                  <div className="flex items-center gap-2">
                    <span>
                      <Heart />
                    </span>
                    <h2 className="text-base font-normal">15</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <MessageCircle />
                    </span>
                    <h2 className="text-base font-normal">2</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                  voluptates explicabo ex neque soluta voluptatibus earum iusto
                  blanditiis nostrum quasi delectus consectetur!
                </p>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300">
                Poster {poster.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
