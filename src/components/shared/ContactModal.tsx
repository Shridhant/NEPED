import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Send } from "lucide-react";
import { easeOut } from "@/lib/motionVariants";

const CONTACT_EMAIL = "nepednagaland@gmail.com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-heading"
            className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-[#1c1c1c] text-white rounded-[16px] border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.32, ease: easeOut }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close contact form"
              className="absolute top-5 right-5 h-9 w-9 flex items-center justify-center rounded-full text-[#8d8d8d] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-wider text-[#8d8d8d]">
                  NEPED SOCIETY &amp; NEPeD ENERGY DIVISION
                </span>
                <h2 id="contact-modal-heading" className="text-[28px] sm:text-[32px] font-light tracking-[-0.6px]">
                  Get in Touch
                </h2>
                <p className="text-[14px] text-[#e5e4e4]/80 leading-relaxed">
                  Reach out about programmes, partnerships, or field deployments — whichever wing your query belongs to.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-[8px]">
                  <MapPin size={16} className="text-[#b75928] mt-0.5 shrink-0" />
                  <div className="text-[13px] text-[#e5e4e4]/80 leading-relaxed">
                    <p className="text-white font-medium">NEPED Secretariat</p>
                    <p>Capital Convention Centre</p>
                    <p>Near Nagaland Civil Secretariat</p>
                    <p>Post Box-231,</p>
                    <p>Kohima-797001, Nagaland</p>
                  </div>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-[8px] hover:border-white/30 transition-colors"
                >
                  <Mail size={16} className="text-[#b75928] mt-0.5 shrink-0" />
                  <div className="text-[13px] text-[#e5e4e4]/80 leading-relaxed">
                    <p className="text-white font-medium">Email Us</p>
                    <p className="break-all">{CONTACT_EMAIL}</p>
                  </div>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-[6px] px-4 py-3 text-[14px] text-white placeholder:text-[#8d8d8d] focus:outline-none focus:border-[#b75928] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-[6px] px-4 py-3 text-[14px] text-white placeholder:text-[#8d8d8d] focus:outline-none focus:border-[#b75928] transition-colors"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-[6px] px-4 py-3 text-[14px] text-white placeholder:text-[#8d8d8d] focus:outline-none focus:border-[#b75928] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b75928] hover:bg-[#a34e22] text-white text-[14px] font-medium px-6 py-3 rounded-[80px] transition-colors cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
