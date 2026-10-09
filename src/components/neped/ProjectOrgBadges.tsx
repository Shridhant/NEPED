import type { NepedProject, ProjectOrg } from "@/data/neped/nepedProjectsData";

/** Which organisation implemented a project: NEPED in Forest Green, NEPeD in Harvest Gold (the Energy lineage colour). */
const ORGS: Record<ProjectOrg, { logo: string; light: string; dark: string }> = {
  NEPED: {
    logo: "/logos/neped-logo.webp",
    light: "bg-[#1E6F4C]/10 text-[#185A3E]",
    dark: "bg-[#ffffff]/12 text-[#ffffff] border border-white/20",
  },
  NEPeD: {
    logo: "/NEPeD Logo High Res.webp",
    light: "bg-[#E8A33D]/20 text-[#7A4F0E]",
    dark: "bg-[#E8A33D] text-[#12432E]",
  },
};

function projectOrgs(project: NepedProject): ProjectOrg[] {
  return project.implementedBy?.length ? project.implementedBy : ["NEPED"];
}

export function ProjectOrgBadges({ project, dark = false, className = "" }: { project: NepedProject; dark?: boolean; className?: string }) {
  const orgs = projectOrgs(project);
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`} aria-label={`Implemented by ${orgs.join(" and ")}`}>
      {orgs.map((org) => (
        <span
          key={org}
          className={`inline-flex items-center gap-1.5  pl-1 pr-2.5 py-0.5 text-[11px] font-medium tracking-[0.02em] ${dark ? ORGS[org].dark : ORGS[org].light}`}
        >
          <img src={ORGS[org].logo} alt="" className="h-4 w-4 rounded-full bg-[#ffffff] object-cover" />
          {org}
        </span>
      ))}
    </div>
  );
}
