import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import GlobalBackButton from "./components/GlobalBackButton";

const Index = lazy(() => import("./pages/Index"));
const Works = lazy(() => import("./pages/Works"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const Archives = lazy(() => import("./pages/Archives"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogEditor = lazy(() => import("./pages/BlogEditor"));
const Booklet = lazy(() => import("./pages/Booklet"));
const Credits = lazy(() => import("./pages/Credits"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="h-screen w-screen bg-background" />}>
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
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
        <GlobalBackButton />
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
