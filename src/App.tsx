import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/layouts/Layout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Formats from "./pages/Formats";
import Download from "./pages/Download";
import Clients from "./pages/Clients";
import Price from "./pages/Price";
import HowItWorks from "./pages/How-It-Works";
import Portal from "./pages/Portal";
import ContactUs from "./pages/ContactUs";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms-Conditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* ✅ All main pages share the same Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/download" element={<Download />} />
            <Route path="/formats" element={<Formats />} />
            <Route path="/price" element={<Price />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Route>

          {/* ❌ NotFound is outside layout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
