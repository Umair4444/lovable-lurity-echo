import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Formats from "./pages/Formats";
import Download from "./pages/Download";
import Clients from "./pages/Clients";
import Price from "./pages/Price";
import HowItWorks from "./pages/How-It-Works";
import Portal from "./pages/Portal";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/portal" element={<Portal />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/download" element={<Download />} />
          <Route path="/formats" element={<Formats />} />
          <Route path="/price" element={<Price />} />
          <Route path="/how-it-works" element={<HowItWorks />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
