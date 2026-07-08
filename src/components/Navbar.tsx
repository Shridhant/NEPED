import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function VoltzMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-extrabold tracking-tight ${className}`}>
      NEPeD

    </span>
  );
}

interface NavDropdownItem {
  label: string;
  path: string;
  desc: string;
}

interface NavCategory {
  title: string;
  basePath: string;
  items: NavDropdownItem[];
}

const categories: NavCategory[] = [
  {
    title: "About",
    basePath: "/about",
    items: [
      { label: "Overview & Vision", path: "/about#overview", desc: "Our history, vision, and core objectives." },
      { label: "Our Team", path: "/about#team", desc: "Meet the inception and present team members." }
    ]
  },
  {
    title: "Technology",
    basePath: "/technology",
    items: [
      { label: "Hydrogers", path: "/technology#hydrogers", desc: "Watermills indigenized for hilly terrains." },
      { label: "ELC Systems", path: "/technology#elc", desc: "Electronic Load Controllers and specifications." }
    ]
  },
  {
    title: "Impact",
    basePath: "/impact",
    items: [
      { label: "Social Benefits", path: "/impact#benefits", desc: "Empowering rural youth and women." },
      { label: "Deployments Directory", path: "/impact#deployments", desc: "Grid-free installations across the North East." }
    ]
  }
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    setMobileOpen(false);

    const [urlPath, hash] = path.split("#");
    navigate(urlPath);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="sticky top-4 sm:top-6 z-50 flex items-center justify-between gap-4 rounded-full bg-white/80 border border-ink/5 p-1.5 shadow-sm backdrop-blur-md max-w-[1200px] mx-auto mb-6"
    >
      <div className="flex items-center gap-2 relative">
        <Link
          to="/"
          onClick={() => handleLinkClick("/")}
          className="flex items-center gap-2 rounded-full bg-ink pl-1.5 pr-4 py-1 text-sm font-semibold text-white active-scale"
        >
          <img src="/logo.jpeg" className="h-6 w-6 rounded-full object-cover border border-white/20" alt="NEPeD Logo" />
          <VoltzMark />
        </Link>

        {/* Desktop Menu links with dropdown subcategories */}
        <ul className="hidden items-center gap-1 px-2 text-sm text-ink sm:flex">
          {categories.map((cat, idx) => (
            <li
              key={cat.title}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => handleLinkClick(cat.basePath)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium hover:bg-ink/5 transition-colors duration-150 active-scale cursor-pointer ${hoveredIndex === idx ? "bg-ink/5" : ""
                  }`}
              >
                {cat.title}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-transform duration-250 ${hoveredIndex === idx ? "rotate-180" : ""}`}
                >
                  <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Subcategories Dropdown Panel */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(4px)" }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute left-0 mt-2 w-64 rounded-2xl border border-ink/5 bg-white p-2 shadow-lg z-50 transform-origin-top"
                  >
                    <div className="flex flex-col gap-0.5">
                      {cat.items.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleLinkClick(subItem.path)}
                          className="flex flex-col items-start rounded-xl px-3.5 py-2.5 text-left hover:bg-ink/5 transition-all text-ink hover:text-ink active-scale w-full"
                        >
                          <span className="text-sm font-semibold">{subItem.label}</span>
                          <span className="text-[11px] text-ink-soft leading-normal mt-0.5">{subItem.desc}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
          {/* Direct links */}
          <li>
            <Link
              to="/#projects"
              onClick={() => handleLinkClick("/#projects")}
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-ink/5 transition-colors duration-150 active-scale"
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-ink/5 sm:hidden transition-colors mr-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="14" y2="14" />
              <line x1="4" y1="14" x2="14" y2="4" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="5" x2="15" y2="5" />
              <line x1="3" y1="9" x2="15" y2="9" />
              <line x1="3" y1="13" x2="15" y2="13" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(6px)" }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-12 left-0 right-0 mt-2 flex flex-col gap-1 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-md sm:hidden border border-ink/5 z-50"
            >
              {categories.map((cat, idx) => {
                const isExpanded = mobileExpandedIndex === idx;
                return (
                  <div key={cat.title} className="flex flex-col border-b border-ink/5 last:border-b-0 pb-1.5 last:pb-0">
                    <button
                      onClick={() => setMobileExpandedIndex(isExpanded ? null : idx)}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-ink/5"
                    >
                      {cat.title}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 10 10"
                        fill="none"
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      >
                        <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="flex flex-col pl-4 gap-1 mt-1">
                        {cat.items.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleLinkClick(subItem.path)}
                            className="text-left rounded px-3 py-1.5 text-xs font-medium text-ink-soft hover:bg-ink/5"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                onClick={() => handleLinkClick("/#projects")}
                className="text-left rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-ink/5 border-t border-ink/5"
              >
                Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={() => handleLinkClick("/#contact")}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-ink/90 active-scale"
      >
        Get in Touch
      </button>
    </motion.nav>
  );
}
