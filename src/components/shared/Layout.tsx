import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ContactModal } from "./ContactModal";
import { SitePreloader } from "./SitePreloader";
import { pageTransitionVariants } from "@/lib/motionVariants";
import type { LayoutContext } from "@/lib/contact";

export function Layout() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const outletContext: LayoutContext = { openContact: () => setIsContactOpen(true) };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] font-sans selection:bg-[#b75928] selection:text-[#ffffff]">
      <SitePreloader />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main className="w-full">
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
