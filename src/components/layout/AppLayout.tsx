import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GlobalSearchDialog from "@/components/search/GlobalSearchDialog";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <GlobalSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
};

export default AppLayout;
