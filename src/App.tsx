import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Archives from "./pages/Archives";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogEditor from "./pages/BlogEditor";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Booklet from "./pages/Booklet";
import GlobalSound from "./components/GlobalSound";
import GlobalBackButton from "./components/GlobalBackButton";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetail />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog-editor" element={<BlogEditor />} />
        <Route path="/booklet" element={<Booklet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroll />
        <CustomCursor />
        <GlobalSound />
        <GlobalBackButton />
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
