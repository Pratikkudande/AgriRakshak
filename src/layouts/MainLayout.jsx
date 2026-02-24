import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-soil-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>{children}</PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MainLayout;
