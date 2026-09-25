import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loadAllProjects } from "@/lib/contentLoader";
import { type NepedProject } from "@/data/neped/nepedProjectsData";
import {
  SectionLabel,
  SectionHeading,
  PillBadge,
} from "@/components/ui/AkerPrimitives";
import { fadeUpOnView } from "@/lib/motionVariants";
import { NEPED_PATHS } from "@/routes/paths";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function NepedProjectDetailPage() {
  const { idOrSlug } = useParams<{ idOrSlug: string }>();

  const allProjects = loadAllProjects();
  const totalProjects = allProjects.length;
  const project: NepedProject | undefined = allProjects.find(
    (p) => p.slug === idOrSlug || p.id === idOrSlug
  );

  useEffect(() => {
    if (project) {
      document.title = `${project.name} • NEPED Heritage Archives`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [project]);

  if (!project) {
    return (
      <div className="mx-auto max-w-[800px] px-6 py-28 text-center space-y-6">
        <span className="text-[12px] font-mono uppercase text-[#8d8d8d]">
          404 • Project Not Found
        </span>
        <BlurReveal as="h1" className="text-[32px] font-light text-[#000000]">{"Archive Record Unavailable"}</BlurReveal>
        <p className="text-[15px] text-[#666666]">
          The project record you are looking for could not be located in the NEPED historical archive index.
        </p>
        <div className="pt-4">
          <Link
            to={`${NEPED_PATHS.home}#projects`}
            className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#ffffff] px-6 py-3 rounded-full text-[14px] hover:bg-[#070707] transition-all"
          >
            ← Return to All {totalProjects} Projects
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent projects for navigation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
  const relatedProjects = allProjects.filter(
    (p) => p.id !== project.id && (p.category === project.category || Math.abs(Number(p.id) - Number(project.id)) <= 2)
  ).slice(0, 3);

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* 1. BREADCRUMBS & TOP NAVIGATION BAR */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e4e4] pb-4">
          <div className="flex items-center gap-2 text-[12px] text-[#8d8d8d] font-mono">
            <Link to={NEPED_PATHS.home} className="hover:text-[#000000] transition-colors">
              NEPED Heritage
            </Link>
            <span>/</span>
            <Link to={`${NEPED_PATHS.home}#projects`} className="hover:text-[#000000] transition-colors">
              Projects Archive
            </Link>
            <span>/</span>
            <span className="text-[#000000] font-medium truncate max-w-[200px] sm:max-w-none">
              {project.phase}
            </span>
          </div>

          <Link
            to={`${NEPED_PATHS.home}#projects`}
            className="text-[12px] text-[#b75928] hover:text-[#000000] font-medium flex items-center gap-1 transition-colors"
          >
            <span>← All {totalProjects} Projects</span>
          </Link>
        </div>
      </section>

      {/* 2. PROJECT RECORD CARD — same glassmorphic hero-card language as the homepage spotlight */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[820px] px-4 sm:px-6">
        <div className="rounded-[8px] border border-white/18 bg-[#070707] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Image banner with phase/category/period tags */}
          <div className="relative h-[160px] sm:h-[190px] overflow-hidden bg-[#1c1c1c]">
            <img
              src={project.heroImage}
              alt={project.name}
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/25 to-transparent" />
            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
              <span className="rounded-[80px] border border-white/20 bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.12px] text-[#ffffff]">
                {project.phase}
              </span>
              <PillBadge dark={true}>{project.category}</PillBadge>
            </div>
            <div className="absolute left-4 bottom-3 text-[11px] font-mono text-[#e5e4e4]/75 uppercase">
              {project.period}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-5">
            <BlurReveal as="h1" className="text-[24px] sm:text-[30px] font-light leading-[1.2] text-[#ffffff] tracking-[-0.5px]">{project.name}</BlurReveal>

            {project.objective ? (
              <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/85 font-light leading-relaxed">
                {project.objective}
              </p>
            ) : (
              <p className="text-[14px] italic text-[#8d8d8d] leading-relaxed">
                No objective statement is recorded in the source register for this project.
              </p>
            )}

            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-white/10">
              <div className="bg-white/[0.04] p-3 rounded-[4px] border border-white/8">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Project Period</div>
                <div className="text-[14px] text-[#ffffff] mt-0.5">{project.period}</div>
              </div>
              <div className="bg-white/[0.04] p-3 rounded-[4px] border border-white/8">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Funding Agency</div>
                <div className="text-[14px] text-[#ffffff] mt-0.5 leading-snug">{project.fundingAgency}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. PREVIOUS / NEXT PROJECT PAGINATION BAR */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border-t border-b border-[#e5e4e4] py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevProject ? (
            <Link
              to={NEPED_PATHS.project(prevProject.slug)}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                ← Previous Project ({prevProject.phase})
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {prevProject.name}
              </h4>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={NEPED_PATHS.project(nextProject.slug)}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors sm:text-right"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                Next Project ({nextProject.phase}) →
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {nextProject.name}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.section>

      {/* 6. RELATED PROJECTS CARDS */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionLabel>Heritage Archive</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Explore More Historical Projects
            </SectionHeading>
          </div>
          <Link
            to={`${NEPED_PATHS.home}#projects`}
            className="text-[13px] text-[#b75928] hover:text-[#000000] font-medium"
          >
            View All {totalProjects} Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((proj) => (
            <Link
              key={proj.id}
              to={NEPED_PATHS.project(proj.slug)}
              className="group bg-[#ffffff] border border-[#e5e4e4] hover:border-[#000000] rounded-[8px] p-6 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#8d8d8d]">{proj.period}</span>
                  <PillBadge>{proj.category}</PillBadge>
                </div>
                <h3 className="text-[17px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors tracking-tight leading-snug">
                  {proj.name}
                </h3>
                {proj.objective ? (
                  <p className="text-[13px] text-[#666666] mt-2 line-clamp-3 leading-relaxed">
                    {proj.objective}
                  </p>
                ) : (
                  <p className="text-[13px] italic text-[#8d8d8d] mt-2">
                    No objective statement recorded.
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#e5e4e4] flex items-center justify-between text-[11px] text-[#8d8d8d]">
                <span>{proj.phase}</span>
                <span className="text-[#000000] font-medium group-hover:translate-x-1 transition-transform">
                  Read Dossier →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
