import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUpOnView } from "@/lib/motionVariants";
import { InstalledSitesTable } from "@/components/neped-energy/InstalledSitesTable";
// import { RegionMapExplorer } from "@/components/ui/region-map-explorer"; // map left out for now
import { PageHero } from "@/components/shared/PageHero";
import { SectionSubnav } from "@/components/shared/SectionSubnav";
import { useOpenContact } from "@/lib/contact";

/*
 * Impact page — all text verbatim from the Impact copy supplied by the NEPED team, except (per the team):
 * - Hydroger ownership reads "NEPeD" ("NEPED has installed…", "NEPED's Hydroger…");
 * - the IIT Roorkee certification sentence / bullet wording is left out until the team confirms it;
 * - the "~20k" farmers stat is broken out by phase;
 * - bullets with unfilled placeholders ([NUMBER], [DISTRICTS], [PRODUCT COUNT]) and the editor's notes are not shown.
 */

/* Map settings, for when the map comes back:
// NASA Blue Marble: Next Generation (public domain), north-east India, EPSG:4326 extent below
const NE_INDIA_MAP = {
  imageUrl: "/maps/northeast-india.webp",
  imageAlt: "Satellite image of north-east India",
  bounds: { west: 87.5, east: 96.5, south: 23, north: 29 },
};
*/

const STATS = [
  { value: "7.8M", label: "Economic trees planted" },
  { value: "17,930 ha", label: "Watershed land treated" },
  { value: "108", label: "Hydrogers installed" },
  { value: "~20k", label: "Farmers supported across phases", note: "7,000+ (NEPED-I) · 7,888 (NEPED-II) · 6,600 (NEPED-III)" },
];

const THEMES: { id: string; eyebrow: string; title: string; stat: { value: string; label: string }; paragraphs: string[] }[] = [
  {
    id: "livelihoods",
    eyebrow: "Livelihoods",
    title: "Livelihoods: from subsidy to self-reliance",
    stat: { value: "30+", label: "plots of land purchased by women in their own names" },
    paragraphs: [
      "Across NEPED-I and NEPED-II (1995–2006), more than 7,000 farmers in 854 villages were trained in agro-forestry, and a further 7,888 farmers grew cash crops through NEPED's micro-credit mechanism. The replication ratio of tree-planting was 1:6 — for every test plot NEPED supported, neighbouring farmers adopted the model six times over on their own land.",
      "In NEPED-II, women's Self-Help Groups accessed village funds and, for the first time in Nagaland's history, women purchased land in their own names — more than 30 plots, breaking traditional barriers that had excluded women from land ownership. They cultivated vegetables and short-term crops on these plots and repaid their loans from the produce.",
      "NEPED-III (2006–2012) supported a further 6,600 jhum farmers with land-based livelihood activities — piggery, poultry, weaving, rice mills, fishery, carpentry and more — funded by the Ministry of Agriculture.",
    ],
  },
  {
    id: "land",
    eyebrow: "Land & Biodiversity",
    title: "Land and biodiversity: watersheds restored, conservation led by communities",
    stat: { value: "17,930 ha", label: "of arable and non-arable land treated under NEPED-III" },
    paragraphs: [
      "NEPED-III treated 17,930 hectares of arable and non-arable land with soil-erosion control measures, reforestation through natural regeneration, and enrichment planting. These activities also strengthened community biodiversity conservation — a direct bridge between land management and species protection.",
      "Through the NEPED-SCEN programme (with SACON, funded by the Tata Trust), communities set aside areas within village lands as Community Conserved Areas, with village council resolutions restricting hunting, fishing and logging. NEPED supported the creation of biodiversity registers, resource maps and management plans, using the Blyth's Tragopan — the state bird of Nagaland — as a flagship species.",
      "This work continues under NEPED-IV / Forest and Biodiversity Management in the Himalaya (Nagaland), funded by Germany through KfW, across 35 villages — strengthening community-conserved areas, improving forest connectivity and supporting sustainable livelihoods.",
    ],
  },
  {
    id: "energy",
    eyebrow: "Energy",
    title: "Energy: 'Made in Nagaland' power for off-grid villages",
    stat: { value: "108", label: "Hydrogers (3 kW pico-hydro units) installed" },
    paragraphs: [
      "NEPeD has installed 108 Hydrogers (3 kW pico-hydro units) across Nagaland, most of them in remote Indo-Myanmar border villages. Each Hydroger delivers 24×7 off-grid power to communities that had no reliable electricity supply — lighting homes, schools and health posts, and powering mills, blacksmithing, carpentry and food processing.",
      "Every unit is designed, manufactured and serviced within the state, at CERES (Centre of Excellence for Renewable Energy Studies) in Dimapur, in partnership with the Nagaland Tool Room and Training Centre.",
      "The model has spread beyond Nagaland: installations now run in Arunachal Pradesh, Meghalaya, Sikkim and Ladakh. Meghalaya has placed an order for 100 units.",
    ],
  },
];

const ROAD_AHEAD: { title: string; text: string; points: string[]; scaleUp: string; cta?: string }[] = [
  {
    title: "Scale community energy across Nagaland's unelectrified villages",
    text: "Nagaland has hundreds of villages — many along the Indo-Myanmar border — with no reliable grid connection. NEPeD's Hydroger is a proven, certified, locally manufactured solution. The gap is installation funding and the community-engagement process that makes each unit sustainable.",
    points: [
      "Proven technology (3 kW impulse Hydroger)",
      "Proven ownership model (village energy committee, monthly revenue, local engineers)",
      "30 new watermills/pico Hydrogers funded by the North Eastern Council (2025–26) — the current pipeline",
    ],
    scaleUp: "Move from pico-hydro (3 kW) to community mini-hydro (10–100 kW) in villages with higher-capacity streams, powering not just households but small enterprise clusters.",
    cta: "Partner on community energy",
  },
  {
    title: "Deepen climate-resilient livelihoods and conservation",
    text: "NEPED-IV (Forest and Biodiversity Management, funded by KfW) is already active across 35 villages. The National Adaptation Fund for Climate Change (NAFCC) project runs through 2026. Beyond these, NEPED's three-phase track record in agro-forestry, watershed management and community conservation provides a ready-made platform for the next generation of climate and biodiversity funding.",
    points: [
      "35 villages active under KfW-funded NEPED-IV",
      "17,930 hectares of watershed land treated across NEPED-III",
      "Community Conserved Areas established with village-council governance",
      "Eco-tourism pilots under way in Benreu and Zhavame (NEC-funded, 2025–26)",
    ],
    scaleUp: "Expand the CCA model to new districts, connect conservation with eco-tourism revenue, and strengthen community-based monitoring and reporting systems.",
    cta: "Partner on livelihoods and conservation",
  },
  {
    title: "Grow CERES as a regional renewable-energy hub",
    text: "CERES in Dimapur is already a manufacturing, R&D and training facility. It produces around twenty 'Made in Nagaland' renewable-energy products, anchored by the Hydroger and the Electronic Load Controller. The opportunity is to build CERES into a regional centre of excellence — serving not just Nagaland but the wider Northeast and neighbouring countries with technology, training and entrepreneurship programmes.",
    points: [
      "Manufacturing infrastructure already in place at Industrial Estate, Dimapur",
      "Partnership with Nagaland Tool Room and Training Centre",
      "Demand from other states (Meghalaya 100-unit order, Sikkim, Ladakh)",
    ],
    scaleUp: "Develop CERES training programmes for rural engineers and renewable-energy entrepreneurs from across the Northeast; establish a product testing and certification pathway; and open the facility to collaborative R&D with research institutions.",
  },
];

const SUBNAV = [
  { id: "overview", label: "Overview" },
  { id: "livelihoods", label: "Livelihoods" },
  { id: "land", label: "Land & Biodiversity" },
  { id: "energy", label: "Energy" },
  { id: "installed-sites", label: "Installed Sites" },
  { id: "road-ahead", label: "The Road Ahead" },
];

const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1E6F4C]";
const EASE = [0.23, 1, 0.32, 1] as const;

export function NepedEnergyImpactPage() {
  const openContact = useOpenContact();

  useEffect(() => {
    document.title = "Impact — NEPED";
  }, []);

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* HERO + STAT STRIP — deep-green band, gold numbers */}
      <PageHero eyebrow="Impact" title="What changed — and why it matters">
        <dl className="pt-6 sm:pt-10 grid grid-cols-2 lg:grid-cols-4 border-t border-white/15">
          {STATS.map((s, i) => (
            <div key={s.label} className={`pt-6 pr-4 sm:pr-6 ${i % 2 === 1 ? "pl-4 sm:pl-6 border-l border-white/15" : ""} ${i === 2 ? "lg:pl-6 lg:border-l lg:border-white/15" : ""} ${i >= 2 ? "mt-6 lg:mt-0" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-[40px] sm:text-[56px] leading-none text-[#E8A33D]">{s.value}</dd>
              <dd className="mt-3 text-[14px] sm:text-[15px] leading-snug text-[#ffffff]/85">{s.label}</dd>
              {s.note ? <dd className="mt-1.5 text-[12px] leading-snug text-[#ffffff]/60">{s.note}</dd> : null}
            </div>
          ))}
        </dl>
      </PageHero>

      <SectionSubnav items={SUBNAV} label="Impact" />

      {/* NARRATIVE — impact as change, not output */}
      <motion.section {...fadeUpOnView} id="overview" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="max-w-[1000px] font-serif text-[26px] sm:text-[36px] lg:text-[42px] leading-[1.25] tracking-[-0.3px] text-[#12432E] text-balance">
          Numbers tell you what NEPED did. Impact is what happened next — in the lives of farmers, in the health of watersheds, in the light inside a home at night. Here is what three decades of community-led work have made possible.
        </p>
      </motion.section>

      {/* THREE THEMED IMPACT BLOCKS */}
      {THEMES.map((t, i) => (
        <section key={t.id} id={t.id} className={`scroll-mt-40 ${i === 1 ? "bg-[#F3F6F3] py-20 sm:py-24" : ""}`}>
          <motion.div {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-20">
            <div className="flex flex-col gap-5 lg:sticky lg:top-44 lg:self-start">
              <span className={EYEBROW}>{t.eyebrow}</span>
              <h2 className="font-serif text-[30px] sm:text-[38px] leading-[1.14] tracking-[-0.3px] text-[#12432E]">{t.title}</h2>
              <div className="mt-2 border-t-2 border-[#E8A33D] pt-5">
                <span className="block font-serif text-[48px] sm:text-[56px] leading-none text-[#1E6F4C]">{t.stat.value}</span>
                <span className="mt-2 block text-[14px] leading-snug text-[#5B6660]">{t.stat.label}</span>
              </div>
            </div>
            <div className="max-w-[760px] flex flex-col gap-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#1A2E23]">
              {t.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>
        </section>
      ))}

      {/* INSTALLED SITES — table of every site, filterable by state */}
      <motion.section {...fadeUpOnView} id="installed-sites" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6 space-y-6">
        <span className={EYEBROW}>Installed Sites</span>
        <p className="max-w-[760px] text-[17px] sm:text-[19px] leading-[1.6] text-[#1A2E23]">
          A growing record of every place a Hydroger now turns — most of them in remote Indo-Myanmar border villages. Explore our installations across Nagaland and beyond.
        </p>
        {/* Interactive map left out for now; the table lists every site */}
        <div className="pt-4">
          <InstalledSitesTable />
        </div>
      </motion.section>

      {/* THE ROAD AHEAD — three partnership tracks on a deep-green band */}
      <section id="road-ahead" className="scroll-mt-40 relative overflow-hidden bg-(--brand-surface) px-4 sm:px-6 py-20 sm:py-24 lg:py-28 text-[#ffffff]">
        <svg viewBox="0 0 1440 440" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M0 360 C240 300 420 380 720 320 C1000 262 1200 330 1440 280" fill="none" stroke="#E8A33D" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M0 400 C260 340 460 420 740 360 C1020 300 1220 370 1440 320" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="2" />
        </svg>
        <div className="relative mx-auto max-w-[1200px]">
          <motion.div {...fadeUpOnView} className="max-w-[820px] flex flex-col gap-5">
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E8A33D]">The Road Ahead</span>
            <h2 className="font-serif text-[36px] sm:text-[52px] leading-[1.06] tracking-[-0.4px] text-balance">Three ways to build what comes next</h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#ffffff]/85">
              NEPED has spent three decades proving what works. The next chapter is about taking those proven models to the places and the scales they have not yet reached. Here is where partnership can make the biggest difference.
            </p>
          </motion.div>

          <ol className="mt-14 sm:mt-16 list-none grid grid-cols-1 lg:grid-cols-3 gap-5">
            {ROAD_AHEAD.map((track, i) => (
              <motion.li
                key={track.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="flex flex-col gap-5 bg-[#ffffff]/[0.06] border border-white/15 p-6 sm:p-8"
              >
                <span className="font-serif text-[40px] leading-none text-[#E8A33D]">{i + 1}.</span>
                <h3 className="text-[21px] sm:text-[23px] font-normal leading-[1.25] tracking-[-0.3px]">{track.title}</h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#ffffff]/85">{track.text}</p>
                <ul className="list-none flex flex-col gap-2.5 border-t border-white/15 pt-5">
                  {track.points.map((pt) => (
                    <li key={pt} className="grid grid-cols-[14px_minmax(0,1fr)] gap-3 text-[14px] sm:text-[15px] leading-[1.5] text-[#ffffff]/90">
                      <span aria-hidden className="mt-[7px] h-2 w-2 bg-[#E8A33D]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#ffffff]/[0.08] border-l-[3px] border-[#E8A33D] px-4 py-3.5">
                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#ffffff]/90">
                    <span className="font-semibold text-[#ffffff]">Scale-up opportunity: </span>
                    {track.scaleUp}
                  </p>
                </div>
                {track.cta ? (
                  <button type="button" onClick={openContact} className="group mt-auto pt-2 inline-flex w-fit items-center gap-3 cursor-pointer text-left">
                    <span className="h-11 w-11 shrink-0 rounded-full bg-[#E8A33D] text-[#12432E] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <ArrowRight size={18} strokeWidth={1.75} className="transition-transform duration-500 ease-in-out group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-[15px] sm:text-[16px] font-medium">{track.cta}</span>
                  </button>
                ) : null}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
