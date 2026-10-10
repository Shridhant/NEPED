import { Link } from "react-router-dom";
import { ArrowUp, Mail } from "lucide-react";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS } from "@/routes/paths";
import { CONTACT_EMAIL } from "./ContactContent";

/*
 * One footer for NEPED and NEPeD pages (matches the unified navbar): a full-width Deep Forest band,
 * the NEPED Society logo, link columns that mirror the navbar, the Secretariat address and a bottom bar.
 * Names and address as used elsewhere on the site. The old per-wing footers (NepedFooter,
 * NepedEnergyFooter) are no longer used.
 */

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "NEPED",
    links: [
      { label: "About Us", to: NEPED_PATHS.about },
      { label: "Organisational Structure", to: NEPED_PATHS.structure },
      { label: "Our Work", to: NEPED_PATHS.projects },
    ],
  },
  {
    title: "NEPeD Clean Energy",
    links: [
      { label: "What is a Hydroger?", to: NEPED_ENERGY_PATHS.product("hydroger-turbine-system") },
      { label: "Impact", to: NEPED_ENERGY_PATHS.impact },
      { label: "Case Studies", to: NEPED_ENERGY_PATHS.caseStudies },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Gallery", to: SHARED_PATHS.gallery },
      { label: "Contact Us", to: SHARED_PATHS.contact },
    ],
  },
];

const LINK = "text-[15px] text-[#ffffff]/80 hover:text-[#E8A33D] transition-colors duration-300 ease-in-out";
// not uppercased: "NEPeD" must keep its lowercase e
const HEADING = "text-[14px] font-semibold tracking-[0.04em] text-[#E8A33D]";

export function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer className="mt-20 sm:mt-28 relative overflow-hidden bg-[#12432E] text-[#ffffff]">
      {/* faint river lines, as on the page heroes */}
      <svg viewBox="0 0 1440 440" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M0 360 C240 300 420 380 720 320 C1000 262 1200 330 1440 280" fill="none" stroke="#E8A33D" strokeOpacity="0.12" strokeWidth="2" />
        <path d="M0 400 C260 340 460 420 740 360 C1020 300 1220 370 1440 320" fill="none" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Link to={NEPED_PATHS.home} aria-label="NEPED home" className="shrink-0">
                <img src="/logos/neped-logo.webp" alt="NEPED Logo" className="h-12 w-12 rounded-full bg-[#ffffff] object-cover" />
              </Link>
            </div>
            <div className="space-y-2 text-[15px] leading-relaxed text-[#ffffff]/85 max-w-[380px]">
              <p>Nagaland Empowerment of People through Economic Development (NEPED)</p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex w-fit items-center gap-2 h-11 px-5 border border-white/30 text-[14px] hover:border-[#E8A33D] hover:text-[#E8A33D] transition-colors duration-300 ease-in-out cursor-pointer"
            >
              <Mail size={15} />
              Contact Us
            </button>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className={`${HEADING} mb-5`}>{col.title}</h2>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className={LINK}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Address */}
          <div className="lg:col-span-3">
            <h2 className={`${HEADING} mb-5`}>Directorate</h2>
            <address className="not-italic space-y-1 text-[15px] leading-relaxed text-[#ffffff]/80">
              <p className="text-[#ffffff] font-medium">NEPED Secretariat</p>
              <p>Capital Convention Centre</p>
              <p>Near Nagaland Civil Secretariat</p>
              <p>Post Box-231,</p>
              <p>Kohima-797001, Nagaland</p>
              <p className="pt-3">
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${LINK} break-all`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-[#ffffff]/60">
          <p>© {new Date().getFullYear()} NEPED Society — Nagaland Empowerment of People through Economic Development</p>
          <a href="#root" className="inline-flex w-fit items-center gap-1.5 hover:text-[#ffffff] transition-colors">
            Back to Top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
