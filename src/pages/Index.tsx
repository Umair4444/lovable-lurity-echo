import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Activator from "@/components/Activator";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/FooterBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Activator />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
