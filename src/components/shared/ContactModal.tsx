import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { easeOut } from "@/lib/motionVariants";
import { ContactDetails, ContactForm } from "./ContactContent";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/35 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-heading"
            className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-[#ffffff] text-[#1A2E23] border border-[#e5e4e4] shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.32, ease: easeOut }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close contact form"
              className="absolute top-5 right-5 h-9 w-9 flex items-center justify-center rounded-full text-[#5B6660] hover:text-[#1A2E23] hover:bg-[#F3F6F3] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-wider text-[#5B6660]">
                  NEPED SOCIETY &amp; NEPeD ENERGY DIVISION
                </span>
                <h2 id="contact-modal-heading" className="text-[28px] sm:text-[32px] font-light tracking-[-0.6px]">
                  Get in Touch
                </h2>
                <p className="text-[14px] text-[#5B6660] leading-relaxed">
                  Reach out about programmes, partnerships, or field deployments — whichever wing your query belongs to.
                </p>
              </div>

              <ContactDetails />

              <ContactForm idPrefix="contact-modal" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
