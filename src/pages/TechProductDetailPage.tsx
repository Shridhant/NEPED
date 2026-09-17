import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TECH_PRODUCTS, type TechProduct } from "@/data/techProductsData";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/AkerPrimitives";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export function TechProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const product: TechProduct | undefined = TECH_PRODUCTS.find(
    (p) => p.slug === slug || p.id === slug
  );

  const [activeModelIndex, setActiveModelIndex] = useState(0);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} • NEPeD Clean Energy Hardware`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-[800px] px-6 py-28 text-center space-y-6">
        <span className="text-[12px] font-mono uppercase text-[#8d8d8d]">
          404 • Product Not Found
        </span>
        <h1 className="text-[32px] font-light text-[#000000]">
          Hardware Specification Unavailable
        </h1>
        <p className="text-[15px] text-[#666666]">
          The hardware product or model you are searching for could not be found in the NEPeD clean energy technology catalog.
        </p>
        <div className="pt-4">
          <Link
            to="/technology"
            className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#ffffff] px-6 py-3 rounded-full text-[14px] hover:bg-[#070707] transition-all"
          >
            ← Return to All Clean Energy Products
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent products for bottom pagination
  const currentIndex = TECH_PRODUCTS.findIndex((p) => p.id === product.id);
  const prevProduct = currentIndex > 0 ? TECH_PRODUCTS[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < TECH_PRODUCTS.length - 1 ? TECH_PRODUCTS[currentIndex + 1] : null;

  const currentModel = product.models ? product.models[activeModelIndex] : null;

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-24">
      {/* 1. BREADCRUMBS BAR */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e4e4] pb-4">
          <div className="flex items-center gap-2 text-[12px] text-[#8d8d8d] font-mono">
            <Link to="/technology" className="hover:text-[#000000] transition-colors">
              Technology & Products
            </Link>
            <span>/</span>
            <span className="text-[#000000] font-medium">{product.name}</span>
          </div>

          <Link
            to="/technology"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#494949] hover:text-[#000000] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Products</span>
          </Link>
        </div>
      </section>

      {/* 2. FULL-BLEED HERO BANNER */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative rounded-[8px] bg-[#070707] text-[#ffffff] p-6 sm:p-10 md:p-14 overflow-hidden shadow-xl">
          {/* Subtle background photo overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover opacity-25 filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#b75928] animate-pulse" />
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5e4e4] font-mono">
                  {product.category}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.1em] text-[#b75928] font-mono font-medium">
                  {product.origin}
                </span>
              </div>

              <h1 className="text-[34px] sm:text-[48px] md:text-[54px] font-light text-[#ffffff] tracking-[-1px] leading-[1.08]">
                {product.name}
              </h1>

              <p className="text-[16px] sm:text-[18px] text-[#e5e4e4]/90 font-light leading-relaxed max-w-xl">
                {product.tagline}
              </p>

              <p className="text-[14px] text-[#8d8d8d] leading-relaxed max-w-xl pt-1">
                {product.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#specifications"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[1584px] bg-[#ffffff] text-[#000000] text-[13px] font-medium hover:bg-[#e5e4e4] transition-all"
                >
                  <span>Technical Data Sheet</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href="#principles"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[1584px] bg-white/10 border border-white/20 text-[#ffffff] text-[13px] font-medium hover:bg-white/15 transition-all"
                >
                  <span>Engineering Principles</span>
                </a>
              </div>
            </motion.div>

            {/* Right Showcase Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[400px] aspect-[4/3] rounded-[8px] overflow-hidden border border-white/20 bg-[#1c1c1c] shadow-2xl p-2 relative group">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-[6px] transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/75 backdrop-blur-md rounded-[6px] border border-white/15 text-[11px] font-mono text-[#e5e4e4] flex items-center justify-between">
                  <span>Hub: {product.manufacturingHub}</span>
                  <span className="text-[#b75928]">{product.designLife}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Statistics Bar */}
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[12px] font-mono text-[#e5e4e4]/80">
            <div>
              <span className="text-[#8d8d8d] block text-[10px] uppercase">Manufacturing</span>
              <span className="text-white font-medium text-[13px]">100% Nagaland R&D</span>
            </div>
            <div>
              <span className="text-[#8d8d8d] block text-[10px] uppercase">Field Deployments</span>
              <span className="text-white font-medium text-[13px]">{product.fieldDeploymentsCount}</span>
            </div>
            <div>
              <span className="text-[#8d8d8d] block text-[10px] uppercase">Operating Life</span>
              <span className="text-white font-medium text-[13px]">{product.designLife}</span>
            </div>
            <div>
              <span className="text-[#8d8d8d] block text-[10px] uppercase">Environmental Impact</span>
              <span className="text-[#b75928] font-medium text-[13px]">Zero Carbon / No Dams</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MODEL SWITCHER (IF PRODUCT HAS MULTIPLE CAPACITIES) */}
      {product.models && product.models.length > 0 && currentModel && (
        <motion.section {...fadeUpOnView} id="specifications" className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 sm:p-10 md:p-12 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e5e4e4] pb-6">
              <div>
                <SectionLabel>Capacities & Output Options</SectionLabel>
                <SectionHeading size="md" className="mt-1">
                  Select Turbine Capacity
                </SectionHeading>
              </div>

              {/* Model Switcher Tabs */}
              <div className="flex items-center gap-2 bg-[#e5e4e4]/50 p-1.5 rounded-[1584px]">
                {product.models.map((mod, idx) => (
                  <button
                    key={mod.name}
                    type="button"
                    onClick={() => setActiveModelIndex(idx)}
                    className={`px-4 py-2 rounded-[1584px] text-[13px] font-medium transition-all cursor-pointer ${
                      activeModelIndex === idx
                        ? "bg-[#1c1c1c] text-[#ffffff] shadow-sm"
                        : "text-[#666666] hover:text-[#000000]"
                    }`}
                  >
                    {mod.capacity}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Model Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block px-3 py-1 rounded-[1584px] bg-[#b75928]/10 text-[#b75928] text-[11px] font-mono uppercase tracking-wider font-semibold">
                  Active Configuration
                </div>
                <h3 className="text-[26px] font-light text-[#000000]">
                  {currentModel.name}
                </h3>
                <p className="text-[14.5px] text-[#666666] leading-relaxed">
                  {currentModel.application}
                </p>

                <div className="p-4 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] space-y-2 text-[13px]">
                  <div className="text-[#8d8d8d] uppercase text-[11px] font-mono">Portability Profile</div>
                  <p className="text-[#000000] font-medium">{currentModel.weight}</p>
                  <p className="text-[#666666]">Engineered for manual mountain trail porterage into inaccessible valleys.</p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <table className="w-full text-left text-[14px]">
                  <tbody>
                    <tr className="border-b border-[#e5e4e4]">
                      <td className="py-3 text-[#8d8d8d] w-1/3">Rated Head</td>
                      <td className="py-3 text-[#000000] font-mono font-medium">{currentModel.head}</td>
                    </tr>
                    <tr className="border-b border-[#e5e4e4]">
                      <td className="py-3 text-[#8d8d8d]">Discharge Rate</td>
                      <td className="py-3 text-[#000000] font-mono font-medium">{currentModel.discharge}</td>
                    </tr>
                    <tr className="border-b border-[#e5e4e4]">
                      <td className="py-3 text-[#8d8d8d]">Electrical Output</td>
                      <td className="py-3 text-[#000000] font-mono font-medium">{currentModel.output}</td>
                    </tr>
                    <tr className="border-b border-[#e5e4e4]">
                      <td className="py-3 text-[#8d8d8d]">Operating Speed</td>
                      <td className="py-3 text-[#000000] font-mono font-medium">{currentModel.rpm}</td>
                    </tr>
                    <tr className="border-b border-[#e5e4e4]">
                      <td className="py-3 text-[#8d8d8d]">Alternator Type</td>
                      <td className="py-3 text-[#000000] font-medium">{currentModel.alternator}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* 4. KEY ENGINEERING FEATURES & ADVANTAGES */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>Hardware Advantages</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Built for Mountain Resilience
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 space-y-3 hover:border-[#1c1c1c] transition-colors"
            >
              <div className="h-10 w-10 rounded-[8px] bg-[#1c1c1c] text-[#ffffff] flex items-center justify-center font-mono text-[14px] font-medium">
                0{idx + 1}
              </div>
              <h4 className="text-[17px] font-medium text-[#000000] leading-snug">
                {feat.title}
              </h4>
              <p className="text-[13.5px] text-[#666666] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. 6-PARAMETER ELECTRONIC PROTECTION (FOR ELC) */}
      {product.protectionParameters && product.protectionParameters.length > 0 && (
        <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <SectionLabel dark={true} className="text-[#b75928]">
                  Electronic Load Regulation & Protection
                </SectionLabel>
                <h3 className="text-[26px] sm:text-[32px] font-light text-[#ffffff] tracking-tight mt-1">
                  Controlled Operational Parameters
                </h3>
                <p className="text-[14.5px] text-[#e5e4e4]/90 mt-2 max-w-2xl">
                  Its main function is to give a steady power output using a simple electronic load censors to control the following parameters:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {product.protectionParameters.map((param, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[6px] bg-white/[0.06] border border-white/12 flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-[#b75928] shrink-0 mt-0.5" />
                    <span className="text-[13.5px] text-[#e5e4e4] leading-snug">{param}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* 6. OPERATIONAL PRINCIPLES & TECHNICAL SPECS TABLE */}
      <motion.section {...fadeUpOnView} id="principles" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Principles Narrative */}
          <div className="lg:col-span-6 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] p-8 space-y-4">
            <SectionLabel>Operational Mechanism</SectionLabel>
            <h3 className="text-[24px] font-light text-[#000000]">
              Working Methodology & Physics
            </h3>
            <p className="text-[14.5px] text-[#494949] leading-relaxed">
              {product.operationalPrinciples}
            </p>
            <div className="pt-4 border-t border-[#e5e4e4] flex items-center gap-3 text-[13px] text-[#666666]">
              <Cpu size={16} className="text-[#b75928]" />
              <span>Standardized and tested at CERD Dimapur testing facility</span>
            </div>
          </div>

          {/* Master Specifications Table */}
          <div className="lg:col-span-6 bg-[#ffffff] rounded-[8px] border border-[#e5e4e4] p-8 space-y-4">
            <SectionLabel>Technical Parameters</SectionLabel>
            <h3 className="text-[24px] font-light text-[#000000]">
              Master Specification Sheet
            </h3>
            <table className="w-full text-left text-[13.5px]">
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="border-b border-[#e5e4e4] last:border-0">
                    <td className="py-2.5 text-[#8d8d8d] w-5/12">{spec.label}</td>
                    <td className="py-2.5 text-[#000000] font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* 7. ADJACENT PRODUCT PAGINATION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border-t border-[#e5e4e4] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProduct ? (
            <Link
              to={`/technology/product/${prevProduct.slug}`}
              className="group flex items-center gap-3 text-left hover:text-[#b75928] transition-colors"
            >
              <div className="h-10 w-10 rounded-full border border-[#e5e4e4] flex items-center justify-center group-hover:border-[#b75928] transition-colors">
                <ArrowLeft size={16} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#8d8d8d] block uppercase">Previous Product</span>
                <span className="text-[14px] font-medium text-[#000000] group-hover:text-[#b75928]">
                  {prevProduct.name}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProduct ? (
            <Link
              to={`/technology/product/${nextProduct.slug}`}
              className="group flex items-center gap-3 text-right hover:text-[#b75928] transition-colors"
            >
              <div>
                <span className="text-[11px] font-mono text-[#8d8d8d] block uppercase">Next Product</span>
                <span className="text-[14px] font-medium text-[#000000] group-hover:text-[#b75928]">
                  {nextProduct.name}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full border border-[#e5e4e4] flex items-center justify-center group-hover:border-[#b75928] transition-colors">
                <ArrowRight size={16} />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
