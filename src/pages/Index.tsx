import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Activator from "@/components/Activator";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Navigation />
      <Hero />
      <Benefits />
      <Activator />
      <Blog />
      <Testimonials />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Index;
