import { useEffect, type ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, ListChecks } from "lucide-react";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { NumberedTextCard } from "@/components/shared/NumberedTextCard";
import { HYDROGER_PAGE, ELC_PAGE, PRODUCT_PAGES } from "@/data/neped-energy/productPagesData";
import { BlurReveal } from "@/components/ui/blur-reveal";

// All product text comes from productPagesData.ts (verbatim from NEPeD/data.txt).

const GLASS_CARD =
  "rounded-[16px] bg-gradient-to-br from-white/20 to-white/[0.05] border border-white/25 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.3)]";

const H2 = "text-[30px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.12]";

export function TechProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = PRODUCT_PAGES.findIndex((p) => p.slug === slug);
  const product = index >= 0 ? PRODUCT_PAGES[index] : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} • NEPeD Clean Energy Hardware`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-[800px] px-6 pt-36 pb-28 text-center flex flex-col items-center gap-6">
        <SectionPill>404 • Product Not Found</SectionPill>
        <BlurReveal as="h1" className="text-[32px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-tight">{"Hardware Specification Unavailable"}</BlurReveal>
        <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
          The hardware product or model you are searching for could not be found in the NEPeD clean energy technology catalog.
        </p>
        <div className="pt-2">
          <ArrowPillButton to={NEPED_ENERGY_PATHS.technology}>Return to All Clean Energy Products</ArrowPillButton>
        </div>
      </div>
    );
  }

  const prevProduct = index > 0 ? PRODUCT_PAGES[index - 1] : null;
  const nextProduct = index < PRODUCT_PAGES.length - 1 ? PRODUCT_PAGES[index + 1] : null;

  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-24">
      {product.slug === HYDROGER_PAGE.slug ? <HydrogerContent /> : <ElcContent />}

      {/* Previous / next product */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {prevProduct ? (
            <Link
              to={NEPED_ENERGY_PATHS.product(prevProduct.slug)}
              className="group flex items-center gap-4 bg-[#f5f5f5] rounded-[16px] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center shrink-0 transition-transform group-hover:-translate-x-0.5">
                <ArrowLeft size={18} />
              </span>
              <span className="min-w-0">
                <span className="text-[11px] font-mono text-[#8d8d8d] block uppercase">Previous Product</span>
                <span className="text-[17px] sm:text-[19px] font-light text-[#000000] block leading-snug">{prevProduct.name}</span>
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {nextProduct ? (
            <Link
              to={NEPED_ENERGY_PATHS.product(nextProduct.slug)}
              className="group flex items-center justify-end gap-4 text-right bg-[#f5f5f5] rounded-[16px] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors"
            >
              <span className="min-w-0">
                <span className="text-[11px] font-mono text-[#8d8d8d] block uppercase">Next Product</span>
                <span className="text-[17px] sm:text-[19px] font-light text-[#000000] block leading-snug">{nextProduct.name}</span>
              </span>
              <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </section>
    </div>
  );
}

/** Dark teal hero band shared by both products: breadcrumb, name, text, photo card. */
function ProductHero({
  name,
  image,
  children,
  footer,
}: {
  name: string;
  image: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#002934] text-[#ffffff]">
      <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-[#b75928]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#e5e4e4]/60 font-mono">
            <Link to={NEPED_ENERGY_PATHS.technology} className="hover:text-[#ffffff] transition-colors">
              Technology & Products
            </Link>
            <span>/</span>
            <span className="text-[#ffffff]">{name}</span>
          </div>
          <Link
            to={NEPED_ENERGY_PATHS.technology}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] hover:bg-white/15 border border-white/20 text-[12px] font-medium text-[#ffffff] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to All Products</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[440px] aspect-[4/3] rounded-[16px] overflow-hidden bg-[#ffffff] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] group">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
        {footer}
      </div>
    </section>
  );
}

function HydrogerContent() {
  const page = HYDROGER_PAGE;
  const stat = (label: string) => page.specifications.rows.find((row) => row.label === label);
  const heroStats = [stat("Capacity"), stat("Voltage"), stat("Gross Weight")].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <ProductHero
        name={page.name}
        image={page.heroImage}
        footer={
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {heroStats.map((row) => (
              <div key={row.label} className={`${GLASS_CARD} p-5 sm:p-6 space-y-2`}>
                <span className="text-[10.5px] font-mono uppercase text-[#e5e4e4]/60 block">{row.label}</span>
                <span className="text-[26px] sm:text-[32px] font-light text-[#ffffff] block leading-none tracking-[-0.6px]">{row.value}</span>
              </div>
            ))}
          </div>
        }
      >
        <BlurReveal as="h1" className="text-[40px] sm:text-[60px] font-light text-[#ffffff] tracking-[-1.4px] leading-[1.05]">{page.name}</BlurReveal>
        <h2 className="text-[20px] sm:text-[24px] font-light text-[#ffffff]/90">{page.what.heading}</h2>
        <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/80 leading-relaxed max-w-2xl">{page.what.text}</p>
        <div className="pt-2">
          <ArrowPillButton href="#specifications" arrow="down">Technical Data Sheet</ArrowPillButton>
        </div>
      </ProductHero>

      {/* Indigenization */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <h2 className={`lg:col-span-4 ${H2}`}>{page.indigenization.heading}</h2>
          <div className="lg:col-span-8 space-y-5">
            <p className="text-[15px] sm:text-[17px] text-[#494949] leading-relaxed">{page.indigenization.paragraphs[0]}</p>
            <div className="bg-[#f5f5f5] rounded-[16px] p-6 sm:p-8 border-l-2 border-[#b75928]">
              <p className="text-[15px] sm:text-[17px] text-[#262626] leading-relaxed">{page.indigenization.paragraphs[1]}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Specifications — dark teal band */}
      <section id="specifications" className="w-full bg-[#002934] scroll-mt-20">
        <motion.div {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28">
          <h2 className="text-center text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
            {page.specifications.heading}
          </h2>
          <div className="mt-12 sm:mt-16 rounded-[16px] bg-white/[0.06] border border-white/15 p-2 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
              {page.specifications.rows.map((row, idx) => (
                <div key={row.label} className="flex gap-4 px-3 sm:px-4 py-4 border-b border-white/10">
                  <span className="text-[12px] font-mono text-[#e5e4e4]/45 pt-[3px] w-6 shrink-0">{idx + 1}.</span>
                  <span className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4">
                    <span className="text-[14px] sm:text-[15px] text-[#e5e4e4]/70">{row.label}</span>
                    <span className="text-[14px] sm:text-[15px] text-[#ffffff]">{row.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Salient features & uses — Aims-style cards */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <NumberedTextCard icon={Sparkles} index={0} title={page.salientFeatures.heading} points={[...page.salientFeatures.items]} ordered />
          <NumberedTextCard icon={ListChecks} index={1} title={page.uses.heading} points={[...page.uses.items]} ordered />
        </div>
      </motion.section>

      {/* Expected benefits — dark teal cards */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className={H2}>{page.expectedBenefits.heading}</h2>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {page.expectedBenefits.paragraphs.map((paragraph, idx) => (
            <div key={paragraph} className="relative rounded-[16px] overflow-hidden bg-[#002934] p-6 sm:p-8 flex flex-col gap-8">
              <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#b75928]/15 rounded-full blur-3xl pointer-events-none" />
              <span className="relative text-[12px] font-mono text-[#e5e4e4]/60">{String(idx + 1).padStart(2, "0")}</span>
              <p className="relative text-[15px] sm:text-[16px] text-[#ffffff] leading-relaxed">{paragraph}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

function ElcContent() {
  const page = ELC_PAGE;
  return (
    <>
      <ProductHero name={page.name} image={page.heroImage}>
        <BlurReveal as="h1" className="text-[36px] sm:text-[52px] md:text-[60px] font-light text-[#ffffff] tracking-[-1.4px] leading-[1.05]">{page.name}</BlurReveal>
        <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/80 leading-relaxed max-w-2xl">{page.intro}</p>
      </ProductHero>

      {/* R&D story */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#f5f5f5] rounded-[16px] p-7 sm:p-10 border-l-2 border-[#b75928]">
          <p className="text-[16px] sm:text-[19px] text-[#262626] leading-relaxed max-w-4xl">{page.development}</p>
        </div>
      </motion.section>

      {/* Controlled parameters — dark teal card with glass tiles */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative rounded-[24px] overflow-hidden bg-[#002934] text-[#ffffff] p-7 sm:p-12">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#b75928]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-8">
            <h2 className="max-w-3xl text-[24px] sm:text-[32px] font-light text-[#ffffff] tracking-[-0.6px] leading-snug">
              {page.parameters.intro}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {page.parameters.items.map((param) => (
                <div key={param} className={`${GLASS_CARD} p-5 flex items-start gap-3`}>
                  <CheckCircle2 size={18} className="text-[#e8a47f] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#ffffff] leading-snug">{param}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Synchronizer / weight */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="max-w-4xl text-[20px] sm:text-[28px] font-light text-[#000000] tracking-[-0.4px] leading-snug">{page.closing}</p>
      </motion.section>
    </>
  );
}
