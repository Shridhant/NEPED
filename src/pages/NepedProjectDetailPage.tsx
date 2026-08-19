import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadAllProjects } from "@/lib/contentLoader";
import { type NepedProject } from "@/data/nepedProjectsData";
import {
  SectionLabel,
  SectionHeading,
  PillBadge,
} from "@/components/ui/AkerPrimitives";

export function NepedProjectDetailPage() {
  const { idOrSlug } = useParams<{ idOrSlug: string }>();

  const project: NepedProject | undefined = loadAllProjects().find(
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
        <h1 className="text-[32px] font-light text-[#000000]">
          Archive Record Unavailable
        </h1>
        <p className="text-[15px] text-[#666666]">
          The project record you are looking for could not be located in the NEPED historical archive index.
        </p>
        <div className="pt-4">
          <Link
            to="/neped-economic#projects"
            className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#ffffff] px-6 py-3 rounded-full text-[14px] hover:bg-[#070707] transition-all"
          >
            ← Return to All 13 Projects
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent projects for navigation
  const allProjects = loadAllProjects();
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
            <Link to="/neped-economic" className="hover:text-[#000000] transition-colors">
              NEPED Heritage
            </Link>
            <span>/</span>
            <Link to="/neped-economic#projects" className="hover:text-[#000000] transition-colors">
              Projects Archive
            </Link>
            <span>/</span>
            <span className="text-[#000000] font-medium truncate max-w-[200px] sm:max-w-none">
              {project.phase || `Phase ${project.id}`}
            </span>
          </div>

          <Link
            to="/neped-economic#projects"
            className="text-[12px] text-[#b75928] hover:text-[#000000] font-medium flex items-center gap-1 transition-colors"
          >
            <span>← All 13 Projects</span>
          </Link>
        </div>
      </section>

      {/* 2. FULL EDITORIAL HERO HEADER */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono uppercase bg-[#b75928] text-white px-2.5 py-1 rounded-[4px] font-semibold">
                {project.phase}
              </span>
              <PillBadge dark={true}>{project.category}</PillBadge>
              <span className="text-[12px] font-mono text-[#8d8d8d]">
                {project.period}
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[48px] md:text-[54px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              {project.name}
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#e5e4e4]/90 font-light leading-relaxed">
              {project.objective}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] border-t border-white/10 text-[#8d8d8d]">
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Funding Body</span>
                <span className="text-[#ffffff] font-medium">{project.fundingAgency}</span>
              </div>
              {project.budgetOrScale && (
                <div>
                  <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Scale / Grant</span>
                  <span className="text-[#ffffff] font-medium">{project.budgetOrScale}</span>
                </div>
              )}
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Geographic Footprint</span>
                <span className="text-[#ffffff] font-medium">{project.targetDistricts}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUMERICAL IMPACT MATRIX */}
      {project.impactHighlights && project.impactHighlights.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="border border-[#e5e4e4] rounded-[8px] bg-[#ffffff] p-6 sm:p-10">
            <div className="mb-6">
              <SectionLabel>Verified Field Metrics</SectionLabel>
              <SectionHeading size="md" className="mt-1">
                Quantitative Impact & Milestones
              </SectionHeading>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-4 border-t border-[#e5e4e4]">
              {project.impactHighlights.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[30px] sm:text-[38px] font-light text-[#000000] tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase font-mono text-[#b75928] block font-semibold">
                    {stat.label}
                  </span>
                  <p className="text-[12px] text-[#666666] leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. IN-DEPTH EDITORIAL OVERVIEW & HISTORICAL CONTEXT */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Dossier Column */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <SectionLabel>Project In-Depth Dossier</SectionLabel>
              <SectionHeading size="md">
                Historical Context & Operational Methodology
              </SectionHeading>
              <div className="prose prose-lg text-[#262626] font-serif text-[16px] sm:text-[17px] leading-[1.7] space-y-4 pt-2">
                {project.overview.split("\n\n").map((para, idx) => (
                  <p key={idx} className="text-[#333333]">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Objectives Checklist */}
            <div className="bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8 space-y-4">
              <h3 className="text-[20px] font-medium text-[#000000] tracking-tight">
                Key Strategic Mandates
              </h3>
              <div className="space-y-3">
                {project.keyObjectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-[#1c1c1c] text-white text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-[14px] text-[#333333] leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Milestones */}
            <div className="space-y-4">
              <h3 className="text-[22px] font-light text-[#000000] tracking-tight">
                Major Milestones & Institutional Deliverables
              </h3>
              <div className="space-y-3">
                {project.majorMilestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#ffffff] border border-[#e5e4e4] rounded-[6px] flex items-start gap-3 hover:border-black transition-colors"
                  >
                    <span className="text-[#b75928] font-bold text-[16px] shrink-0 mt-0.5">✓</span>
                    <span className="text-[14px] text-[#494949] leading-relaxed">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specifications Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Meta Card */}
            <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 space-y-5">
              <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block border-b border-[#e5e4e4] pb-2">
                Project Registry Details
              </span>

              <div className="space-y-4 text-[13px]">
                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Official Project Code</span>
                  <span className="text-[#000000] font-medium font-mono">NEPED-PRJ-{project.id.padStart(2, "0")}</span>
                </div>

                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Duration</span>
                  <span className="text-[#000000] font-medium">{project.period}</span>
                </div>

                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Primary Category</span>
                  <span className="text-[#000000] font-medium">{project.category}</span>
                </div>

                <div>
                  <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Principal Funding Agency</span>
                  <span className="text-[#000000] font-medium">{project.fundingAgency}</span>
                </div>

                {project.documentRef && (
                  <div>
                    <span className="text-[#8d8d8d] block text-[11px] uppercase font-mono">Official Reference Document</span>
                    <span className="text-[#b75928] font-medium">{project.documentRef}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Partner Agencies Card */}
            <div className="bg-[#121f1a] text-[#ffffff] rounded-[8px] p-6 space-y-4 border border-[#193f32]">
              <span className="text-[11px] font-mono uppercase text-[#e5e4e4]/70 block">
                Collaborating Institutions
              </span>
              <ul className="space-y-2 text-[13px] text-[#e5e4e4]">
                {project.partnerAgencies.map((partner, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b75928]" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Switch to NEPeD Clean Energy Card */}
            <div className="bg-[#002934] text-[#ffffff] rounded-[8px] p-6 space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#e5e4e4]/70 block">
                Energy Evolution Nexus
              </span>
              <h4 className="text-[17px] font-light text-[#ffffff]">
                How this led to NEPeD Clean Energy
              </h4>
              <p className="text-[12px] text-[#e5e4e4]/80 leading-relaxed">
                The massive agricultural surplus generated by this phase created the requirement for decentralized hydro energy.
              </p>
              <div className="pt-2">
                <Link
                  to="/technology"
                  className="text-[12px] text-[#ffffff] underline font-medium hover:text-[#b75928] transition-colors"
                >
                  Explore Clean Hydroger Systems →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREVIOUS / NEXT PROJECT PAGINATION BAR */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border-t border-b border-[#e5e4e4] py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevProject ? (
            <Link
              to={`/neped-economic/project/${prevProject.slug}`}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                ← Previous Project (Phase {prevProject.id})
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
              to={`/neped-economic/project/${nextProject.slug}`}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors sm:text-right"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                Next Project (Phase {nextProject.id}) →
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {nextProject.name}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* 6. RELATED PROJECTS CARDS */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionLabel>Heritage Archive</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Explore More Historical Projects
            </SectionHeading>
          </div>
          <Link
            to="/neped-economic#projects"
            className="text-[13px] text-[#b75928] hover:text-[#000000] font-medium"
          >
            View All 13 Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((proj) => (
            <Link
              key={proj.id}
              to={`/neped-economic/project/${proj.slug}`}
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
                <p className="text-[13px] text-[#666666] mt-2 line-clamp-3 leading-relaxed">
                  {proj.objective}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#e5e4e4] flex items-center justify-between text-[11px] text-[#8d8d8d]">
                <span>Phase {proj.id}</span>
                <span className="text-[#000000] font-medium group-hover:translate-x-1 transition-transform">
                  Read Dossier →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
