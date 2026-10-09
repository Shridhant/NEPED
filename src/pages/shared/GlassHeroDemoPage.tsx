import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";

export function GlassHeroDemoPage() {
  useEffect(() => {
    document.title = "Glass Hero Demo — NEPED";
  }, []);

  return (
    <main className="min-h-screen bg-[#0c1811] text-[#ffffff]">
      <section className="relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-12">
        <img
          src="/dzukou-valley-1400.webp"
          srcSet="/dzukou-valley-800.webp 800w, /dzukou-valley-1400.webp 1400w, /dzukou-valley-2200.webp 2200w"
          sizes="100vw"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[28%_50%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#07110b]/25" />

        <div className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden border-r border-white/20 bg-[#101d12]/60 px-4 py-12 shadow-[0_24px_100px_rgba(0,0,0,0.42)] backdrop-blur-[58px] backdrop-saturate-[1.65] sm:px-6 sm:py-16 lg:col-span-7 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] lg:pr-12 xl:pr-20 xl:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_6%,rgba(43,181,210,0.78)_0%,rgba(43,181,210,0.48)_22%,rgba(30,111,76,0.28)_48%,rgba(10,18,12,0.72)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,16,10,0.78)_0%,rgba(17,38,23,0.42)_58%,rgba(255,255,255,0.11)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-white/[0.07] mix-blend-screen" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />

          <div className="relative max-w-[760px]">
            <div className="inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.1em] text-[#e5e4e4]/85 backdrop-blur-md">
              <span className="h-2 w-2 bg-[#8ccb3f]" />
              <span>Est. 1995</span>
            </div>

            <h1 className="mt-6 max-w-[760px] font-serif text-[40px] font-normal leading-[1.02] tracking-[-0.5px] text-[#ffffff] text-balance sm:mt-8 sm:text-[58px] lg:text-[54px] xl:text-[68px] 2xl:text-[80px]">
              Nagaland's communities hold the solutions — we help them build.
            </h1>

            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.45] text-[#ffffff]/90 sm:mt-8 sm:text-[19px] xl:text-[21px]">
              Since 1995, NEPED has worked alongside Naga communities to build livelihoods, protect biodiversity, and
              bring clean, home-grown energy to the villages that need it most.
            </p>

            <div className="mt-9 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-10 xl:mt-12">
              <a href="#demo-note" className="group inline-flex w-fit items-center gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8a33d] text-[#12432E] shadow-[0_18px_45px_rgba(232,163,61,0.24)] transition-transform duration-500 ease-in-out group-hover:scale-105 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24">
                  <ArrowRight className="h-6 w-6 transition-transform duration-500 ease-in-out group-hover:translate-x-1 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </span>
                <span className="text-[16px] text-[#ffffff] sm:text-[18px]">Discover our work</span>
              </a>
              <Link
                to={NEPED_ENERGY_PATHS.technology}
                className="w-fit border border-white/22 bg-white/[0.08] px-5 py-3 text-[15px] text-[#ffffff]/88 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.14] hover:text-[#ffffff] sm:text-[16px]"
              >
                Hydroger Technology
              </Link>
            </div>

            <div id="demo-note" className="mt-12 max-w-[640px] border-t border-white/20 pt-6 xl:mt-14">
              <p className="text-[13px] leading-relaxed text-[#ffffff]/72 sm:text-[14px]">
                Glassmorphism concept only: same hero structure, softer transparent surface, and the landscape visible
                through the content panel.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden overflow-hidden bg-[#F3F6F3] lg:col-span-5 lg:block">
          <img
            src="/dzukou-valley-1400.webp"
            srcSet="/dzukou-valley-800.webp 800w, /dzukou-valley-1400.webp 1400w, /dzukou-valley-2200.webp 2200w"
            sizes="42vw"
            alt="Dzukou Valley, Nagaland"
            className="absolute inset-0 h-full w-full object-cover object-[22%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#07110b]/18" />
        </div>
      </section>
    </main>
  );
}
