import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative">
      <Topbar />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rounded-lg">
              <h2 className="text-3xl font-black mb-6">SEND US A MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-bold mb-2 block"
                  >
                    YOUR NAME
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="border-2 border-black focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-bold mb-2 block"
                  >
                    YOUR EMAIL
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="border-2 border-black focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-bold mb-2 block"
                  >
                    YOUR MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    className="border-2 border-black focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan hover:bg-cyan/90 text-black font-bold py-6 text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-magenta border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg border-2 border-black">
                    <FaEnvelope className="text-2xl text-magenta" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-2">
                      EMAIL US
                    </h3>
                    <a
                      href="mailto:hello@lurity.com"
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      hello@lurity.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-yellow border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg border-2 border-black">
                    <FaPhone className="text-2xl text-yellow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-2">CALL US</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cyan border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg border-2 border-black">
                    <FaMapMarkerAlt className="text-2xl text-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-2">VISIT US</h3>
                    <p className="text-foreground">
                      123 Marketing Street
                      <br />
                      Creative District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
