import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Home, Menu, X } from "lucide-react";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS } from "@/routes/paths";

/*
 * One navbar for NEPED and NEPeD (layout after cleanenergycouncil.org.au).
 * Desktop: NEPED logo, top-level items that open a full-width panel on hover / click
 * (dark link column, description, photo). Phones: full-screen accordion menu.
 * Panel descriptions are the intro text of each page, verbatim.
 */

type NavLinkItem = { label: string; href: string };
type NavSection = {
  key: string;
  label: string;
  /** Section landing page (first row of the panel, with the home icon) */
  home: NavLinkItem;
  links: NavLinkItem[];
  description: string;
  image: string;
  /** Zoom the panel photo in from this point (e.g. to crop away empty sky) */
  imageZoom?: { scale: number; origin: string };
  /** Show the whole photo (blurred copy behind it fills the panel) instead of cropping it to fill */
  imageContain?: boolean;
  /** Dark link column colour and underline accent */
  panelColor: string;
  accent: string;
};
type NavEntry = NavSection | { key: string; label: string; href: string; accent: string };

const NEPED_GREEN = { panelColor: "#12432E", accent: "#1E6F4C" };
const NEPED_ENERGY_TEAL = { panelColor: "#12432E", accent: "#1E6F4C" };

const NAV: NavEntry[] = [
  { key: "impact", label: "Impact", href: NEPED_ENERGY_PATHS.impact, accent: NEPED_GREEN.accent },
  {
    key: "projects",
    label: "Our Work",
    home: { label: "Our Work", href: NEPED_PATHS.projects },
    links: [
      { label: "Projects", href: NEPED_PATHS.projects },
      { label: "Case Studies", href: NEPED_ENERGY_PATHS.caseStudies },
    ],
    // Verbatim from the Projects page
    description:
      "Three decades of landmark interventions in community agroforestry, shifting cultivation transformation, clean micro-hydro engineering, biodiversity conservation, and artisan economic empowerment across Nagaland.",
    image: "/doyang-1400.webp",
    imageZoom: { scale: 1.45, origin: "50% 90%" }, // crop away the empty sky, keep the lake and hills
    ...NEPED_GREEN,
  },
  {
    key: "ceres",
    label: "CERES",
    home: { label: "CERES (Centre of Excellence)", href: NEPED_ENERGY_PATHS.technology },
    links: [
      { label: "Hydroger Pico-Turbines", href: NEPED_ENERGY_PATHS.product("hydroger-turbine-system") },
      { label: "Electronic Load Controllers (ELC)", href: NEPED_ENERGY_PATHS.product("electronic-load-controller") },
    ],
    // Verbatim from the CERES page
    description:
      "NEPeD’s decision to indigenize/upscale its work led to the establishment of Centre of Excellence for Renewable Energy Studies (CERES), at Industrial Estate, Dimapur.",
    image: "/Hydroger (Impulse).jpeg",
    imageContain: true, // portrait photo: show the whole Hydroger
    ...NEPED_ENERGY_TEAL,
  },
  {
    key: "about",
    label: "About",
    home: { label: "About", href: NEPED_PATHS.about },
    links: [
      { label: "About Us", href: NEPED_PATHS.about },
      { label: "Organisational Structure", href: NEPED_PATHS.structure },
    ],
    // Verbatim from the NEPED About Us page
    description:
      "Nagaland Empowerment of People through Economic Development (NEPED) is a Government of Nagaland programme project set up in 1995. Initially it implemented the ICEF project, the first ever foreign funded project in Nagaland.",
    image: "/dzukou-valley-1400.webp", // same photo as the NEPED homepage hero
    ...NEPED_GREEN,
  },
  { key: "gallery", label: "Gallery", href: SHARED_PATHS.gallery, accent: NEPED_GREEN.accent },
  { key: "contact", label: "Contact", href: SHARED_PATHS.contact, accent: NEPED_GREEN.accent },
];

const isSection = (e: NavEntry): e is NavSection => "home" in e;

/** Which top-level entry the current page belongs to (for the underline). */
function currentKey(pathname: string) {
  if (pathname.startsWith(SHARED_PATHS.gallery)) return "gallery";
  if (pathname.startsWith(SHARED_PATHS.contact)) return "contact";
  if (pathname.startsWith(NEPED_ENERGY_PATHS.impact)) return "impact";
  if (pathname.startsWith(NEPED_ENERGY_PATHS.technology)) return "ceres";
  if (pathname.startsWith(NEPED_ENERGY_PATHS.caseStudies) || pathname.startsWith(NEPED_PATHS.projects)) return "projects";
  if (pathname.startsWith(NEPED_PATHS.about) || pathname.startsWith(NEPED_PATHS.structure)) return "about";
  return null;
}

const EASE = [0.65, 0, 0.35, 1] as const;

export function SiteNavbar({ onOpenContact }: { onOpenContact: () => void }) {
  const { pathname } = useLocation();
  // Menus remember the page they were opened on, so they close by themselves after navigating
  const [panel, setPanel] = useState<{ key: string; path: string } | null>(null);
  const [mobile, setMobile] = useState<{ path: string; expanded: string | null } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  const openKey = panel?.path === pathname ? panel.key : null;
  const mobileOpen = mobile?.path === pathname;
  const openSection = NAV.find((e) => e.key === openKey && isSection(e)) as NavSection | undefined;
  const activeKey = openKey ?? currentKey(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes any open menu
  useEffect(() => {
    if (!openKey && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setPanel(null);
      setMobile(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openKey, mobileOpen]);

  // No page scrolling behind the full-screen phone menu
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const openPanel = (key: string | null) => {
    window.clearTimeout(closeTimer.current);
    setPanel(key ? { key, path: pathname } : null);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 160);
  };
  const closeAll = () => {
    setPanel(null);
    setMobile(null);
  };

  return (
    <>
      <header
        onMouseLeave={scheduleClose}
        onMouseEnter={() => window.clearTimeout(closeTimer.current)}
        className={`sticky top-0 z-50 bg-[#F3F6F3] transition-shadow duration-300 ${
          scrolled || openKey || mobileOpen ? "shadow-[0_6px_24px_rgba(14,36,25,0.08)]" : ""
        }`}
      >
        <div className="mx-auto max-w-[1440px] h-16 lg:h-[84px] px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link to={NEPED_PATHS.home} onClick={closeAll} className="group flex items-center gap-2.5" aria-label="NEPED home">
              <img
                src="/logos/neped-logo.webp"
                alt="NEPED Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover ring-1 ring-black/5 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <span className="hidden sm:block lg:hidden xl:block text-[15px] font-medium tracking-[0.06em] text-[#12432E]">NEPED</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-0 xl:gap-2 h-full">
            {NAV.map((entry) => {
              const active = activeKey === entry.key;
              const inner = (
                <>
                  <span>{entry.label}</span>
                  {isSection(entry) ? (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ease-in-out ${openKey === entry.key ? "rotate-180" : ""}`}
                    />
                  ) : null}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-px h-[2px] "
                      style={{ backgroundColor: entry.accent }}
                      transition={{ duration: 0.35, ease: EASE }}
                    />
                  ) : null}
                </>
              );
              const cls =
                "relative h-full inline-flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 text-[15px] xl:text-[16px] whitespace-nowrap text-[#1A2E23] hover:text-[#1A2E23] transition-colors duration-300 ease-in-out cursor-pointer";
              return isSection(entry) ? (
                <button
                  key={entry.key}
                  type="button"
                  aria-expanded={openKey === entry.key}
                  aria-controls="site-nav-panel"
                  onMouseEnter={() => openPanel(entry.key)}
                  onClick={() => openPanel(openKey === entry.key ? null : entry.key)}
                  className={cls}
                >
                  {inner}
                </button>
              ) : (
                <Link key={entry.key} to={entry.href} onMouseEnter={() => openPanel(null)} onClick={closeAll} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                closeAll();
                onOpenContact();
              }}
              className="hidden lg:inline-flex items-center h-11 px-4 xl:px-6 whitespace-nowrap border border-[#1E6F4C] text-[15px] text-[#1E6F4C] hover:bg-[#1E6F4C] hover:text-[#ffffff] transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Partner with Us
            </button>

            {/* Phone menu button */}
            <button
              type="button"
              onClick={() => setMobile(mobileOpen ? null : { path: pathname, expanded: null })}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden h-10 w-10 -mr-1.5 inline-flex items-center justify-center text-[#1A2E23] cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="inline-flex"
                >
                  {mobileOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Desktop panel */}
        <AnimatePresence>
          {openSection ? (
            <motion.div
              id="site-nav-panel"
              key="panel"
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
              animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
              exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-[#F3F6F3] border-t border-black/5"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={openSection.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="grid grid-cols-12 min-h-[420px]"
                >
                  <div
                    className="col-span-4 px-10 xl:px-16 py-12 transition-colors duration-300 ease-in-out"
                    style={{ backgroundColor: openSection.panelColor }}
                  >
                    <Link
                      to={openSection.home.href}
                      onClick={closeAll}
                      className="group flex items-center justify-between gap-4 pb-6 border-b border-white/20 text-[22px] text-[#ffffff]"
                    >
                      <span className="flex items-center gap-3">
                        <Home size={20} strokeWidth={1.5} />
                        {openSection.home.label}
                      </span>
                      <ArrowRight size={20} strokeWidth={1.5} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </Link>
                    <ul className="mt-6 space-y-1">
                      {openSection.links.map((l, i) => (
                        <motion.li
                          key={l.href}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.08 + i * 0.05, ease: EASE }}
                        >
                          <Link
                            to={l.href}
                            onClick={closeAll}
                            className="group flex items-center justify-between gap-4 py-2.5 text-[17px] leading-snug text-[#ffffff]/65 hover:text-[#ffffff] transition-colors duration-300 ease-in-out"
                          >
                            <span className="line-clamp-2">{l.label}</span>
                            <ArrowRight
                              size={16}
                              strokeWidth={1.5}
                              className="shrink-0 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                            />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-4 px-10 xl:px-16 py-12">
                    <p className="text-[18px] text-[#1A2E23]">{openSection.home.label}</p>
                    <p className="mt-6 max-w-[400px] text-[18px] xl:text-[20px] leading-[1.45] text-[#1A2E23]">{openSection.description}</p>
                  </div>
                  <div className="col-span-4 relative overflow-hidden">
                    {openSection.imageContain ? (
                      <img src={openSection.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover scale-110 blur-xl opacity-70" />
                    ) : null}
                    <motion.img
                      src={openSection.image}
                      alt=""
                      initial={{ scale: (openSection.imageZoom?.scale ?? 1) * 1.06 }}
                      animate={{ scale: openSection.imageZoom?.scale ?? 1 }}
                      transition={{ duration: 0.8, ease: EASE }}
                      style={{ transformOrigin: openSection.imageZoom?.origin }}
                      className={`absolute inset-0 h-full w-full ${openSection.imageContain ? "object-contain" : "object-cover"}`}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Phone menu */}
        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              key="mobile"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.4, ease: EASE }}
              className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#F3F6F3] border-t border-black/5 overflow-y-auto"
            >
              <nav aria-label="Main" className="px-4 sm:px-6 py-3 flex flex-col min-h-full">
                <ul className="divide-y divide-black/5">
                  {NAV.map((entry) => {
                    if (!isSection(entry)) {
                      return (
                        <li key={entry.key}>
                          <Link to={entry.href} onClick={closeAll} className="flex items-center justify-between py-4 text-[18px] text-[#1A2E23]">
                            {entry.label}
                            <ArrowRight size={18} strokeWidth={1.5} />
                          </Link>
                        </li>
                      );
                    }
                    const expanded = mobile?.expanded === entry.key;
                    return (
                      <li key={entry.key}>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setMobile({ path: pathname, expanded: expanded ? null : entry.key })}
                          className="w-full flex items-center justify-between py-4 text-[18px] text-[#1A2E23] cursor-pointer"
                        >
                          {entry.label}
                          <ChevronDown size={18} className={`transition-transform duration-300 ease-in-out ${expanded ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <div className="-mx-4 sm:-mx-6 mb-3 bg-[#ffffff] px-4 sm:px-6 py-3">
                                <Link to={entry.home.href} onClick={closeAll} className="flex items-center justify-between gap-4 py-2.5 text-[17px] text-[#1A2E23]">
                                  <span className="flex items-center gap-2.5 pl-4">
                                    <Home size={17} strokeWidth={1.5} />
                                    {entry.home.label}
                                  </span>
                                  <ArrowRight size={18} strokeWidth={1.5} className="shrink-0" />
                                </Link>
                                {entry.links.map((l) => (
                                  <Link key={l.href} to={l.href} onClick={closeAll} className="flex items-center justify-between gap-4 py-2.5 pl-11 text-[15px] text-[#1A2E23]">
                                    <span className="line-clamp-2">{l.label}</span>
                                    <ArrowRight size={18} strokeWidth={1.5} className="shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 pb-4">
                  <button
                    type="button"
                    onClick={() => {
                      closeAll();
                      onOpenContact();
                    }}
                    className="w-full h-12 border border-[#1E6F4C] text-[16px] text-[#1E6F4C] active:bg-[#1E6F4C] active:text-[#ffffff] transition-colors duration-300 ease-in-out cursor-pointer"
                  >
                    Partner with Us
                  </button>
                </div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Dim the page behind the desktop panel; clicking it closes the panel */}
      <AnimatePresence>
        {openSection ? (
          <motion.div
            key="scrim"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => setPanel(null)}
            className="hidden lg:block fixed inset-0 z-40 bg-[#12432E]/25"
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
