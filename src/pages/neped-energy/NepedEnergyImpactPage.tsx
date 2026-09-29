import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { RegionMapExplorer } from "@/components/ui/region-map-explorer";
import { HYDROGER_SITE_GROUPS } from "@/data/neped-energy/hydrogerSitesData";
import { PageHero } from "@/components/shared/PageHero";
import { SectionSubnav } from "@/components/shared/SectionSubnav";
import { PartnerBand } from "@/components/shared/PartnerBand";

// Impacts description (verbatim from NEPeD/data.txt)
const IMPACT_PARAGRAPHS = [
  "NEPeD has been installing indigenously made or “Made in Nagaland” Hydroger systems both within and outside Nagaland. The low cost, light weight, easy operation and versatile utility of the Hydroger systems have allowed widespread adoption of such systems among rural folk.",
  "There are many dimensions to this Hydroger project. Not only does it help address basic power needs of people living in the villages but it has impacts in the environment, social and economic sectors. Communities with Hydroger Systems undergo capacity building and conservation of environmental ideas is deeply ingrained as part of this training. Each project site is also capacitated and facilitated to evolve their own revenue model.",
  "Hydroger being a clean and alternative source of renewable energy has made an impact for delivering energy. Further, NEPeD while introducing and popularising this technology, has also encouraged the villagers to maintain the upland catchment areas to ensure supply of water. The demand of Hydroger is ever increasing from within the state as well as from the neighbouring states.",
];

// NASA Blue Marble: Next Generation (public domain), north-east India, EPSG:4326 extent below
const NE_INDIA_MAP = {
  imageUrl: "/maps/northeast-india.webp",
  imageAlt: "Satellite image of north-east India",
  bounds: { west: 87.5, east: 96.5, south: 23, north: 29 },
};

const SUBNAV = [
  { id: "overview", label: "Overview" },
  { id: "installed-sites", label: "Installed Sites" },
];

const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1E6F4C]";

export function NepedEnergyImpactPage() {
  useEffect(() => {
    document.title = "Impact • NEPeD";
  }, []);

  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-4">
      <PageHero eyebrow="NEPeD" title="Impact" />

      <SectionSubnav items={SUBNAV} label="Impact" />

      {/* OVERVIEW — impacts text verbatim from NEPeD/data.txt */}
      <motion.section {...fadeUpOnView} id="overview" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className={EYEBROW}>Overview</span>
            {IMPACT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-[16px] sm:text-[18px] text-[#1A2E23] leading-[1.7]">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img src="/impact.webp" alt="" className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] h-auto select-none" draggable={false} />
          </div>
        </div>
      </motion.section>

      {/* INSTALLED SITES — Hydroger sites map */}
      <motion.section {...fadeUpOnView} id="installed-sites" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6 space-y-8">
        <span className={EYEBROW}>Installed Sites</span>
        <RegionMapExplorer groups={HYDROGER_SITE_GROUPS} {...NE_INDIA_MAP} />
      </motion.section>

      <PartnerBand />
    </div>
  );
}
