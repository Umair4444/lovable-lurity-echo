import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      image: "https://www2.lurity.com/sites/default/files/titulka-lurity.jpeg",
      date: "03 APRIL 2024",
      title: "LURITY: The future of digital OOH advertising is an omnichannel marketing approach",
      excerpt: "When Tomas Tiefenbach, CEO of Lurity, founded his first digital billboard company in 2016, he had no idea that it would grow into an international DO...",
    },
    {
      image: "https://www2.lurity.com/sites/default/files/WcKZr5Mt9.png",
      date: "08 JANUARY 2024",
      title: "Strategies, Advertising Agencies 2023",
      excerpt: "Advertising agencies 2023: What was the year 2023 like?\n\nRead the full published supplement Strategies, A...",
    },
    {
      image: "https://www2.lurity.com/sites/default/files/tt_0.png",
      date: "14 NOVEMBER 2023",
      title: "Stratégie: \"The future of OOH is omnichannel\"",
      excerpt: "Interview with Tomas Tiefenbach, CEO of Lurity.\n\nUnaware of media trends, they say OOH is dead. But the reality is different, the OOH market is ex...",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            Lurity in the media
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
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
          <Button variant="outline" className="font-bold px-8 py-6 text-lg rounded-lg hover:bg-cyan hover:text-white hover:border-cyan">
            All articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
