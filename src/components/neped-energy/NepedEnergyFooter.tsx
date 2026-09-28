import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { NEPED_ENERGY_PATHS, NEPED_PATHS } from "@/routes/paths";

const TOP_LINKS = [
  { label: "NEPeD Energy Overview", to: NEPED_ENERGY_PATHS.home },
  { label: "CERES & Hydrogers", to: NEPED_ENERGY_PATHS.technology },
  { label: "Load Controllers (ELC)", to: NEPED_ENERGY_PATHS.product("electronic-load-controller") },
];

const ORGANIZATION_LINKS = [
  { label: "About NEPED", to: NEPED_PATHS.about },
  { label: "Heritage Archives", to: NEPED_PATHS.home },
];

/**
 * NEPeD footer — displayed on NEPeD pages (/neped-energy/*).
 * Layout inspired by the reference design: link row + large wordmark on the left, link columns on the right.
 */
export function NepedEnergyFooter({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer id="contact" className="mt-20 bg-[#F3F6F3]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: link row + wordmark */}
          <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-14">
            <nav className="flex flex-wrap gap-x-7 gap-y-3">
              {TOP_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[15px] sm:text-[16px] text-[#1A2E23] hover:text-[#1E6F4C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <img src="/NEPeD Logo High Res.webp" alt="NEPeD Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <span className="text-[56px] sm:text-[88px] font-light text-[#1A2E23] tracking-[-2.5px] leading-none">
                  NEPeD
                </span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#5B6660]">
                Nagaland Empowerment of People through Energy Development
              </p>
            </div>
          </div>

          {/* Right: columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-1">
            <div>
              <h3 className="text-[16px] text-[#1A2E23] mb-4">Organization</h3>
              <ul className="space-y-3 text-[14px] text-[#1A2E23]">
                {ORGANIZATION_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:text-[#1E6F4C] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[16px] text-[#1A2E23] mb-4">Directorate</h3>
              <div className="space-y-2 text-[14px] text-[#1A2E23] leading-relaxed">
                <p className="text-[#1A2E23]">NEPED Secretariat</p>
                <p>Capital Convention Centre</p>
                <p>Near Nagaland Civil Secretariat</p>
                <p>Post Box-231,</p>
                <p>Kohima-797001, Nagaland</p>
                <p className="pt-2">
                  Email: <span className="text-[#1A2E23]">nepednagaland<wbr />@gmail.com</span>
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenContact}
                className="mt-5 inline-flex items-center gap-2 text-[13px] text-[#ffffff] bg-[#1E6F4C] hover:bg-[#185A3E] px-4 py-2.5 rounded-[80px] transition-colors cursor-pointer"
              >
                <Mail size={13} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#e5e4e4] flex justify-end text-[12px] text-[#5B6660]">
          <a href="#root" className="hover:text-[#1A2E23] transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
