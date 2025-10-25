import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      image: "https://www2.lurity.com/sites/default/files/titulka-lurity.jpeg",
      date: "03 APRIL 2024",
      title:
        "LURITY: The future of digital OOH advertising is an omnichannel marketing approach",
      excerpt:
        "When Tomas Tiefenbach, CEO of Lurity, founded his first digital billboard company in 2016, he had no idea that it would grow into an international DO...",
    },
    {
      image: "https://www2.lurity.com/sites/default/files/WcKZr5Mt9.png",
      date: "08 JANUARY 2024",
      title: "Strategies, Advertising Agencies 2023",
      excerpt:
        "Advertising agencies 2023: What was the year 2023 like?\n\nRead the full published supplement Strategies, A...",
    },
    {
      image: "https://www2.lurity.com/sites/default/files/tt_0.png",
      date: "14 NOVEMBER 2023",
      title: 'Stratégie: "The future of OOH is omnichannel"',
      excerpt:
        "Interview with Tomas Tiefenbach, CEO of Lurity.\n\nUnaware of media trends, they say OOH is dead. But the reality is different, the OOH market is ex...",
    },
  ];

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/BBC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/67/CNN_International_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Forbes_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/The_New_York_Times_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Reuters_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/TechCrunch_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/The_Guardian_2018.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Wired_logo.svg",
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            Lurity in the media
          </h2>
        </div> */}
        <section className="py-20 bg-yellow px-10 mb-16 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-start gap-10">
            {/* Left Text Section */}
            <h2 className="font-bold text-[32px] lg:text-[46px] leading-none md:mr-16 xl:mr-28 text-left">
              Lurity
              <br />
              <span className="text-magenta">in the media</span>
            </h2>

            {/* Right Logos Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Media logo ${index + 1}`}
                  className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-cyan transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="font-bold px-8 py-6 text-lg rounded-lg bg-yellow hover:bg-yellow/90 hover:text-black hover:border-yellow"
          >
            All articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
