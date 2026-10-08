import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUpOnView } from "@/lib/motionVariants";
import { useOpenContact } from "@/lib/contact";

/** Closing band, Deep Forest with faint river lines. Text verbatim from the copy supplied by the NEPED team. */
export function PartnerBand() {
  const openContact = useOpenContact();

  return (
    <motion.section {...fadeUpOnView} className="px-2.5 sm:px-4">
      <div className="relative overflow-hidden bg-(--brand-surface) px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
        <svg viewBox="0 0 1440 440" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M0 360 C240 300 420 380 720 320 C1000 262 1200 330 1440 280" fill="none" stroke="#E8A33D" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M0 400 C260 340 460 420 740 360 C1020 300 1220 370 1440 320" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="2" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-[36px] sm:text-[56px] lg:text-[64px] leading-[1.04] tracking-[-0.5px] text-[#ffffff] text-balance">
              Build Nagaland's future with us
            </h2>
            <p className="max-w-[640px] text-[17px] sm:text-[19px] leading-[1.5] text-[#ffffff]/85">
              Village councils, government departments, funders, researchers and fellow innovators — there is a way to work with NEPED.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <button type="button" onClick={openContact} className="group inline-flex items-center gap-5 cursor-pointer">
              <span className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full bg-(--brand-accent-on-dark) text-(--brand-surface) flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 ease-in-out group-hover:translate-x-1" strokeWidth={1.5} />
              </span>
              <span className="text-[16px] sm:text-[18px] text-[#ffffff]">Partner with NEPED</span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
