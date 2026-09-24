import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS } from "@/routes/paths";

// Master Umbrella Dropdown Items (NEPED only — Heritage, Agroforestry & Society)
const nepedMasterDropdownItems = [
  {
    num: "01",
    label: "Overview & Vision",
    href: "/",
  },
  {
    num: "02",
    label: "About Us",
    href: NEPED_PATHS.about,
  },
  {
    num: "03",
    label: "Projects Archive",
    href: NEPED_PATHS.projects,
  },  {
    num: "04",
    label: "Gallery",
    href: SHARED_PATHS.gallery,
  },
];

// Clean Energy Sub-Wing Dropdown Items (NEPeD)
const nepedEnergyDropdownItems = [
  {
    num: "01",
    label: "Overview & Genesis (Est. 2007)",
    href: NEPED_ENERGY_PATHS.home,
  },
  {
    num: "02",
    label: "CERES (Centre of Excellence)",
    href: NEPED_ENERGY_PATHS.technology,
    children: [
      { label: "Hydroger Pico-Turbines", href: NEPED_ENERGY_PATHS.product("hydroger-turbine-system") },
      { label: "Electronic Load Controllers (ELC)", href: NEPED_ENERGY_PATHS.product("electronic-load-controller") },
    ],
  },
  {
    num: "03",
    label: "Impact",
    href: NEPED_ENERGY_PATHS.impact,
  },
  {
    num: "04",
    label: "Gallery",
    href: SHARED_PATHS.gallery,
  },
];

export function AkerNavbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [isMasterDropdownOpen, setIsMasterDropdownOpen] = useState(false);
  const [isEnergyDropdownOpen, setIsEnergyDropdownOpen] = useState(false);
  const [isCeresExpanded, setIsCeresExpanded] = useState(false);
  const masterDropdownRef = useRef<HTMLDivElement>(null);
  const energyDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route or hash change
  useEffect(() => {
    setIsMasterDropdownOpen(false);
    setIsEnergyDropdownOpen(false);
    setIsCeresExpanded(false);
  }, [location.pathname, location.hash]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (masterDropdownRef.current && !masterDropdownRef.current.contains(event.target as Node)) {
        setIsMasterDropdownOpen(false);
      }
      if (energyDropdownRef.current && !energyDropdownRef.current.contains(event.target as Node)) {
        setIsEnergyDropdownOpen(false);
      }
    }
    if (!isEnergyDropdownOpen) {
      setIsCeresExpanded(false);
    }
    if (isMasterDropdownOpen || isEnergyDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMasterDropdownOpen, isEnergyDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
      {/* Left Side: NEPED Master Umbrella Pill */}
      <div className="pointer-events-auto relative" ref={masterDropdownRef}>
        <div
          className={`flex items-center h-[42px] sm:h-[46px] rounded-[1584px] border transition-all duration-200 shadow-md ${
            isMasterDropdownOpen
              ? "bg-[#262626] text-[#ffffff] border-white/40 ring-1 ring-white/20"
              : "bg-[#1c1c1c]/90 backdrop-blur-md text-[#ffffff] border-white/15 hover:border-white/35 hover:bg-[#262626]"
          }`}
        >
          {/* Direct Link to NEPED Master Homepage */}
          <Link
            to="/"
            onClick={() => setIsMasterDropdownOpen(false)}
            aria-label="Go to NEPED Master Homepage"
            className="flex items-center gap-2.5 sm:gap-3 pl-1.5 pr-2 h-full rounded-l-[1584px] group cursor-pointer"
            title="NEPED Master Umbrella Homepage"
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white p-0.5 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200">
              <img
                src="/NEPED Logo.jpg.jpeg"
                alt="NEPED Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[14px] sm:text-[15px] font-medium tracking-[0.06em] text-white group-hover:text-white">
                NEPED
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b75928]" />
              <span className="hidden sm:inline text-[11px] text-[#8d8d8d] font-mono group-hover:text-[#b75928] transition-colors">
                Nagaland
              </span>
            </div>
          </Link>

          {/* Dedicated Chevron Dropdown Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMasterDropdownOpen(!isMasterDropdownOpen);
              if (isEnergyDropdownOpen) setIsEnergyDropdownOpen(false);
            }}
            aria-label="Toggle NEPED Master Umbrella Sections"
            className="pr-3 sm:pr-3.5 pl-1.5 h-full flex items-center justify-center cursor-pointer text-[#8d8d8d] hover:text-white transition-colors rounded-r-[1584px]"
            title="Toggle NEPED Sections"
          >
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                isMasterDropdownOpen ? "rotate-180 text-white" : ""
              }`}
            />
          </button>
        </div>

        {/* SMOOTH NEPED MASTER DROPDOWN MENU */}
        <AnimatePresence>
          {isMasterDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 top-[50px] w-[280px] sm:w-[320px] bg-[#1c1c1c] border border-white/15 rounded-[8px] p-2 shadow-2xl z-50 overflow-hidden"
            >
              {/* Dropdown Header */}
              <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8d8d8d] block">
                    Master Umbrella Brand
                  </span>
                  <span className="text-[12px] font-medium text-[#ffffff]">
                    NEPED (Society & Programs)
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 text-[#8d8d8d] px-1.5 py-0.5 rounded-[3.2px]">
                  6 Portals
                </span>
              </div>

              {/* Portal Links */}
              <div className="space-y-0.5">
                {nepedMasterDropdownItems.map((item) => (
                  <Link
                    key={item.num}
                    to={item.href}
                    onClick={() => setIsMasterDropdownOpen(false)}
                    className="group flex items-center justify-between px-3 py-2 rounded-[6px] text-[#e5e4e4] hover:text-[#ffffff] hover:bg-[#262626] transition-all text-[13px]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[11px] font-mono text-[#8d8d8d] group-hover:text-[#b75928] transition-colors">
                        {item.num}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    <span className="text-[12px] text-[#8d8d8d] group-hover:text-[#ffffff] group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Bottom Home Link */}
              <div className="mt-1.5 pt-1.5 border-t border-white/10">
                <Link
                  to="/"
                  onClick={() => setIsMasterDropdownOpen(false)}
                  className="flex items-center justify-between px-3 py-1.5 text-[11px] text-[#b75928] hover:text-[#ffffff] hover:bg-white/5 rounded-[4px] font-medium transition-colors"
                >
                  <span>Visit Master NEPED Homepage</span>
                  <span>↗</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsMasterDropdownOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] text-[#e5e4e4] hover:text-[#ffffff] hover:bg-white/5 rounded-[4px] font-medium transition-colors cursor-pointer"
                >
                  <span>Contact Us</span>
                  <Mail size={12} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Side: NEPeD Clean Energy Pill */}
      <div className="pointer-events-auto relative" ref={energyDropdownRef}>
        <div
          className={`flex items-center h-[42px] sm:h-[46px] rounded-[1584px] border transition-all duration-200 shadow-md ${
            isEnergyDropdownOpen
              ? "bg-[#262626] text-[#ffffff] border-white/40 ring-1 ring-white/20"
              : "bg-[#1c1c1c]/90 backdrop-blur-md text-[#ffffff] border-white/15 hover:bg-[#262626] hover:border-white/35"
          }`}
        >
          {/* Direct Link to NEPeD Clean Energy Landing Page */}
          <Link
            to={NEPED_ENERGY_PATHS.home}
            onClick={() => setIsEnergyDropdownOpen(false)}
            aria-label="Go to NEPeD Clean Energy and Technology"
            className="flex items-center gap-2.5 pl-1.5 pr-2 h-full rounded-l-[1584px] group cursor-pointer"
            title="NEPeD Clean Energy Wing (Since 2007)"
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/10 p-0.5 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200">
              <img
                src="/NEPeD Logo High Res.png"
                alt="NEPeD Clean Energy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.06em] text-white">
              NEPeD
            </span>
          </Link>

          {/* Dedicated Chevron Dropdown Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsEnergyDropdownOpen(!isEnergyDropdownOpen);
              if (isMasterDropdownOpen) setIsMasterDropdownOpen(false);
            }}
            aria-label="Toggle NEPeD Clean Energy Sections"
            className="pr-3 sm:pr-3.5 pl-1.5 h-full flex items-center justify-center cursor-pointer text-[#8d8d8d] hover:text-white transition-colors rounded-r-[1584px]"
            title="Toggle NEPeD Sections"
          >
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                isEnergyDropdownOpen ? "rotate-180 text-white" : ""
              }`}
            />
          </button>
        </div>

        {/* SMOOTH NEPeD ENERGY DROPDOWN MENU */}
        <AnimatePresence>
          {isEnergyDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute right-0 top-[50px] w-[270px] sm:w-[300px] bg-[#1c1c1c] border border-white/15 rounded-[8px] p-2 shadow-2xl z-50 overflow-hidden"
            >
              {/* Dropdown Header */}
              <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8d8d8d] block">
                    Clean Energy Wing • Since 2007
                  </span>
                  <span className="text-[12px] font-medium text-[#ffffff]">
                    NEPeD (Energy Division)
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 text-[#8d8d8d] px-1.5 py-0.5 rounded-[3.2px]">
                  6 Sections
                </span>
              </div>

              {/* Page/Section Links */}
              <div className="space-y-0.5">
                {nepedEnergyDropdownItems.map((item) => (
                  <div key={item.num}>
                    <div className="group flex items-center justify-between rounded-[6px] text-[#e5e4e4] hover:bg-[#262626] transition-all text-[13px]">
                      <Link
                        to={item.href}
                        onClick={() => setIsEnergyDropdownOpen(false)}
                        className="flex-1 min-w-0 flex items-center gap-2.5 px-3 py-2 group-hover:text-[#ffffff]"
                      >
                        <span className="text-[11px] font-mono text-[#8d8d8d] group-hover:text-[#b75928] transition-colors">
                          {item.num}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </Link>
                      {item.children ? (
                        <button
                          type="button"
                          onClick={() => setIsCeresExpanded(!isCeresExpanded)}
                          aria-label={isCeresExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
                          className="px-3 py-2 text-[#8d8d8d] hover:text-[#ffffff] cursor-pointer"
                        >
                          <ChevronDown
                            size={12}
                            className={`transition-transform duration-200 ${isCeresExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsEnergyDropdownOpen(false)}
                          className="pr-3 pl-1 py-2 text-[12px] text-[#8d8d8d] group-hover:text-[#ffffff] group-hover:translate-x-0.5 transition-all"
                        >
                          →
                        </Link>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.children && isCeresExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="ml-8 pl-3 border-l border-white/10 space-y-0.5 mb-0.5 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => setIsEnergyDropdownOpen(false)}
                              className="group flex items-center justify-between px-3 py-1.5 rounded-[6px] text-[#8d8d8d] hover:text-[#ffffff] hover:bg-[#262626] transition-all text-[12px]"
                            >
                              <span className="truncate">{child.label}</span>
                              <span className="text-[11px] text-[#8d8d8d] group-hover:text-[#ffffff] group-hover:translate-x-0.5 transition-all">
                                →
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Bottom Full Page Link */}
              <div className="mt-1.5 pt-1.5 border-t border-white/10">
                <Link
                  to={NEPED_ENERGY_PATHS.home}
                  onClick={() => setIsEnergyDropdownOpen(false)}
                  className="flex items-center justify-between px-3 py-1.5 text-[11px] text-[#b75928] hover:text-[#ffffff] hover:bg-white/5 rounded-[4px] font-medium transition-colors"
                >
                  <span>Visit NEPeD Clean Energy Portal</span>
                  <span>↗</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsEnergyDropdownOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] text-[#e5e4e4] hover:text-[#ffffff] hover:bg-white/5 rounded-[4px] font-medium transition-colors cursor-pointer"
                >
                  <span>Contact Us</span>
                  <Mail size={12} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

