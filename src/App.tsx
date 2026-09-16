import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import PageLoader from "./components/PageLoader";
import Preloader from "./components/Preloader";

// Lazy load pages for code-splitting & performance (PRD Section 45)
const Index = lazy(() => import("./pages/Index"));
const Videos = lazy(() => import("./pages/Videos"));
const VideoDetails = lazy(() => import("./pages/VideoDetails"));
const Playlists = lazy(() => import("./pages/Playlists"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" storageKey="cooltips-theme" attribute="class">
        <Toaster />
        <Sonner position="top-right" />
        <BrowserRouter>
          <Preloader />
          <PageLoader />
          <Suspense fallback={null}>
            <Routes>
              {/* Primary PRD Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/videos/:slug" element={<VideoDetails />} />
              <Route path="/video/:slug" element={<VideoDetails />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legal & Policy Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/terms-of-use" element={<Terms />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
