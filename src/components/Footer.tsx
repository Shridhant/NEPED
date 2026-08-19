import { Link, useLocation } from "react-router-dom";
import { TextArrowButton } from "./ui/AkerPrimitives";

/**
 * 1. NEPED Master Umbrella Portal Footer
 * Displayed across main portal pages (Home, About, Technology, Impact, Blog, Gallery)
 */
function NepedMasterFooter() {
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
                <TextArrowButton to="/about" dark={true} variant="pill">
                  Explore Society Mandate
                </TextArrowButton>
                <Link
                  to="/technology"
                  className="text-[13px] text-[#b75928] hover:text-[#ffffff] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>NEPeD (Clean Energy Wing)</span>
                  <span>↗</span>
                </Link>
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
                    <Link to="/about" className="hover:text-[#b75928] transition-colors">
                      About NEPED
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#vision" className="hover:text-[#b75928] transition-colors">
                      Vision & Mandate
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#team" className="hover:text-[#b75928] transition-colors">
                      Multidisciplinary Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#leaders" className="hover:text-[#b75928] transition-colors">
                      Past Team Leaders
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="hover:text-[#b75928] transition-colors">
                      Field Gallery & Logs
                    </Link>
                  </li>
                  <li>
                    <Link to="/neped-economic" className="hover:text-[#b75928] transition-colors">
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
                    <Link to="/technology" className="hover:text-[#b75928] transition-colors">
                      Hydroger Turbines
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology#elc" className="hover:text-[#b75928] transition-colors">
                      Load Controllers (ELC)
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology#microgrids" className="hover:text-[#b75928] transition-colors">
                      Pico Micro-Grids
                    </Link>
                  </li>
                  <li>
                    <Link to="/impact" className="hover:text-[#b75928] transition-colors">
                      Catchment Conservation
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
 * 2. NEPED Agroforestry & Economic Heritage Footer
 * Displayed specifically on the /neped-economic Heritage Archive page
 */
function NepedHeritageFooter() {
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
                <TextArrowButton to="#history" dark={true} variant="pill">
                  Explore 30-Year Archives
                </TextArrowButton>
                <Link
                  to="/technology"
                  className="text-[13px] text-[#b75928] hover:text-[#ffffff] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Explore NEPeD Clean Energy Wing</span>
                  <span>→</span>
                </Link>
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
                    <a href="#history" className="hover:text-[#b75928] transition-colors">
                      NEPED I (Agroforestry)
                    </a>
                  </li>
                  <li>
                    <a href="#history" className="hover:text-[#b75928] transition-colors">
                      NEPED II (Micro-Credit)
                    </a>
                  </li>
                  <li>
                    <a href="#history" className="hover:text-[#b75928] transition-colors">
                      NEPED III (Watersheds)
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-[#b75928] transition-colors">
                      NEPED IV (KfW FBMP)
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-[#b75928] transition-colors">
                      NEPED-SCEN (SACON)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70 block mb-4">
                  Governance
                </span>
                <ul className="space-y-3 text-[14px] text-[#e5e4e4]/80">
                  <li>
                    <a href="#aims" className="hover:text-[#b75928] transition-colors">
                      7 Core Objectives
                    </a>
                  </li>
                  <li>
                    <a href="#structure" className="hover:text-[#b75928] transition-colors">
                      Society Structure
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-[#b75928] transition-colors">
                      13 Official Projects
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="hover:text-[#b75928] transition-colors">
                      11 Team Leaders Roll
                    </a>
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

/**
 * Main Dynamic Footer Switcher
 * Intelligently renders the tailored footer based on the active route
 */
export function Footer() {
  const location = useLocation();
  const isHeritagePage = location.pathname.startsWith("/neped-economic");

  if (isHeritagePage) {
    return <NepedHeritageFooter />;
  }

  return <NepedMasterFooter />;
}
