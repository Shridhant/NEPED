import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ContactModal } from "./ContactModal";
// import { SitePreloader } from "./SitePreloader"; // intro removed
import { pageTransitionVariants } from "@/lib/motionVariants";
import type { LayoutContext } from "@/lib/contact";

export function Layout() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const outletContext: LayoutContext = { openContact: () => setIsContactOpen(true) };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1A2E23] font-sans selection:bg-[#1E6F4C] selection:text-[#ffffff]">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      {/* overflow-x-clip: decorative glows (e.g. BorderGlow cards) must not make the page scroll sideways */}
      <main className="w-full overflow-x-clip">
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={location.pathname}
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Suspense fallback={<div className="min-h-screen" />}>
              <Outlet context={outletContext} />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
