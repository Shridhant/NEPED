import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { PageHero } from "@/components/shared/PageHero";
import { ContactDetails, ContactForm } from "@/components/shared/ContactContent";

/** Contact Us page — same details, wording and form as the Contact Us popup. */
export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us — NEPED";
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-8">
      <PageHero
        eyebrow="NEPED SOCIETY & NEPeD ENERGY DIVISION"
        title="Get in Touch"
        intro="Reach out about programmes, partnerships, or field deployments — whichever wing your query belongs to."
      />

      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16">
          <div className="space-y-5">
            <h2 className="font-serif text-[30px] sm:text-[36px] leading-[1.12] text-[#12432E]">Contact Us</h2>
            <ContactDetails className="sm:grid-cols-1 lg:grid-cols-1" />
          </div>
          <div className="border border-[#dbe5de] p-6 sm:p-10">
            <ContactForm idPrefix="contact-page" />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
