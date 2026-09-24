import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { TextArrowButton } from "@/components/ui/AkerPrimitives";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS, isNepedPath, isNepedEnergyPath } from "@/routes/paths";
import { NepedEnergyFooter } from "@/components/neped-energy/NepedEnergyFooter";
import { NepedFooter } from "@/components/neped/NepedFooter";

/**
 * 1. NEPED Master Umbrella Portal Footer
 * Displayed on shared pages (landing, blog, gallery) — NEPED and NEPeD pages have their own footers
 */
function NepedMasterFooter({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer id="contact" className="mt-20 border-t border-[#e5e4e4] pt-16 pb-12 bg-[#ffffff]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Brand column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-white p-0.5 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src="/NEPED Logo.jpg.jpeg"
                    alt="NEPED Logo"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#8d8d8d] font-mono">
                  Master Umbrella Organization • Est. 1994
                </span>
              </div>
              <h2 className="text-[42px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-none">
                NEPED
              </h2>
              <p className="text-[15px] text-[#e5e4e4]/80 max-w-md leading-relaxed font-normal">
                Nagaland Empowerment of People through Economic Development — 30+ years of pioneering community transformation, indigenous hydrogers, agroforestry, and sustainable rural livelihoods.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <TextArrowButton to={NEPED_PATHS.about} dark={true} variant="pill">
                  Explore Society Mandate
                </TextArrowButton>
                <Link
                  to={NEPED_ENERGY_PATHS.home}
                  className="text-[13px] text-[#b75928] hover:text-[#ffffff] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>NEPeD (Clean Energy Wing)</span>
                  <span>↗</span>
                </Link>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-[13px] text-[#ffffff] border border-white/20 hover:border-white/60 px-4 py-2.5 rounded-[80px] transition-all cursor-pointer"
                >
                  <Mail size={13} />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#8d8d8d] block mb-4">
                  Organization
                </span>
                <ul className="space-y-3 text-[14px] text-[#e5e4e4]/80">
                  <li>
                    <Link to={NEPED_PATHS.about} className="hover:text-[#b75928] transition-colors">
                      About NEPED
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_ENERGY_PATHS.about}#vision`} className="hover:text-[#b75928] transition-colors">
                      Vision & Mandate
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_PATHS.about}#team`} className="hover:text-[#b75928] transition-colors">
                      Multidisciplinary Team
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_PATHS.about}#leaders`} className="hover:text-[#b75928] transition-colors">
                      Past Team Leaders
                    </Link>
                  </li>
                  <li>
                    <Link to={SHARED_PATHS.gallery} className="hover:text-[#b75928] transition-colors">
                      Field Gallery & Logs
                    </Link>
                  </li>
                  <li>
                    <Link to={NEPED_PATHS.home} className="hover:text-[#b75928] transition-colors">
                      Heritage Archives
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#8d8d8d] block mb-4">
                  NEPeD Energy
                </span>
                <ul className="space-y-3 text-[14px] text-[#e5e4e4]/80">
                  <li>
                    <Link to={NEPED_ENERGY_PATHS.home} className="hover:text-[#b75928] transition-colors">
                      NEPeD Energy Overview
                    </Link>
                  </li>
                  <li>
                    <Link to={NEPED_ENERGY_PATHS.technology} className="hover:text-[#b75928] transition-colors">
                      CERES & Hydrogers
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_ENERGY_PATHS.technology}#elc`} className="hover:text-[#b75928] transition-colors">
                      Load Controllers (ELC)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#8d8d8d] block mb-4">
                  Directorate
                </span>
                <div className="space-y-2 text-[13px] text-[#e5e4e4]/80 leading-relaxed">
                  <p className="text-[#ffffff] font-medium">NEPED Secretariat</p>
                  <p>Old Secretariat Complex,</p>
                  <p>Kohima — 797001, Nagaland</p>
                  <p className="pt-2 text-[12px] text-[#8d8d8d]">
                    Email: <span className="text-[#ffffff]">nepednagaland@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Hairline & Legal */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#8d8d8d]">
            <div>
              © 2026 NEPED Society — Nagaland Empowerment of People through Economic Development
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#666666]">Built with indigenous excellence in Nagaland</span>
              <a href="#root" className="hover:text-[#ffffff] transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Main Dynamic Footer Switcher
 * Intelligently renders the tailored footer based on the active route
 */
export function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  const location = useLocation();
  const isHeritagePage = isNepedPath(location.pathname);

  if (isHeritagePage) {
    return <NepedFooter onOpenContact={onOpenContact} />;
  }

  if (isNepedEnergyPath(location.pathname)) {
    return <NepedEnergyFooter onOpenContact={onOpenContact} />;
  }

  return <NepedMasterFooter onOpenContact={onOpenContact} />;
}
