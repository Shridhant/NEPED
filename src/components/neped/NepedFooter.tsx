import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { TextArrowButton } from "@/components/ui/AkerPrimitives";
import { loadAllProjects } from "@/lib/contentLoader";
import { NEPED_ENERGY_PATHS, NEPED_PATHS } from "@/routes/paths";

/**
 * 2. NEPED Agroforestry & Economic Heritage Footer
 * Displayed on NEPED pages (/neped/*)
 */
export function NepedFooter({ onOpenContact }: { onOpenContact: () => void }) {
  const totalProjects = loadAllProjects().length;

  return (
    <footer id="contact" className="mt-20 border-t border-[#e5e4e4] pt-16 pb-12 bg-[#ffffff]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#121f1a] text-[#ffffff] rounded-[8px] p-8 sm:p-12 md:p-16 relative overflow-hidden border border-[#193f32]">
          {/* Subtle background ambient line */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Brand column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-white p-1 flex items-center justify-center shrink-0">
                  <img
                    src="/NEPED Logo.jpg.jpeg"
                    alt="NEPED Heritage Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70 font-mono">
                  Autonomous Registered Society • Est. 1994
                </span>
              </div>
              <h2 className="text-[42px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-none">
                NEPED
              </h2>
              <p className="text-[15px] text-[#e5e4e4]/80 max-w-md leading-relaxed font-normal">
                Nagaland Empowerment of People through Economic Development — 30+ years of landmark community agroforestry, shifting cultivation transformation, women's land equity, and biodiversity conservation.
              </p>
              <div className="text-[11px] font-mono text-[#8d8d8d] space-y-0.5">
                <p>Regd. NO. H/RS-4238 (19-04-2005)</p>
                <p>Regd. NO. HOME/SRC-6751 (07-07-2014)</p>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <TextArrowButton to={NEPED_PATHS.projects} dark={true} variant="pill">
                  Explore 30-Year Archives
                </TextArrowButton>
                <Link
                  to={NEPED_ENERGY_PATHS.home}
                  className="text-[13px] text-[#b75928] hover:text-[#ffffff] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Explore NEPeD Clean Energy Wing</span>
                  <span>→</span>
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
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70 block mb-4">
                  Heritage Eras
                </span>
                <ul className="space-y-3 text-[14px] text-[#e5e4e4]/80">
                  <li>
                    <Link to={NEPED_PATHS.phase("neped-i")} className="hover:text-[#b75928] transition-colors">
                      NEPED I (Agroforestry)
                    </Link>
                  </li>
                  <li>
                    <Link to={NEPED_PATHS.phase("neped-ii")} className="hover:text-[#b75928] transition-colors">
                      NEPED II (Micro-Credit)
                    </Link>
                  </li>
                  <li>
                    <Link to={NEPED_PATHS.phase("neped-iii")} className="hover:text-[#b75928] transition-colors">
                      NEPED III (Watersheds)
                    </Link>
                  </li>
                  <li>
                    <Link to={NEPED_PATHS.project("neped-4-forest-biodiversity-management-kfw")} className="hover:text-[#b75928] transition-colors">
                      NEPED IV (KfW FBMP)
                    </Link>
                  </li>
                  <li>
                    <Link to={NEPED_PATHS.phase("neped-scen")} className="hover:text-[#b75928] transition-colors">
                      NEPED-SCEN (SACON)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70 block mb-4">
                  Governance
                </span>
                <ul className="space-y-3 text-[14px] text-[#e5e4e4]/80">
                  <li>
                    <Link to={`${NEPED_PATHS.home}#aims`} className="hover:text-[#b75928] transition-colors">
                      7 Core Objectives
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_PATHS.home}#structure`} className="hover:text-[#b75928] transition-colors">
                      Society Structure
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_PATHS.home}#projects`} className="hover:text-[#b75928] transition-colors">
                      {totalProjects} Official Projects
                    </Link>
                  </li>
                  <li>
                    <Link to={`${NEPED_PATHS.about}#leaders`} className="hover:text-[#b75928] transition-colors">
                      11 Team Leaders Roll
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70 block mb-4">
                  Secretariat
                </span>
                <div className="space-y-2 text-[13px] text-[#e5e4e4]/80 leading-relaxed">
                  <p className="text-[#ffffff] font-medium">NEPED Society</p>
                  <p className="text-[12px] text-[#e5e4e4]/70">Govt. of Nagaland</p>
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
              © 2026 NEPED Society — Autonomous Registered Society under Government of Nagaland
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#8d8d8d]">CIDA • ICEF • GoI • KfW Germany</span>
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
