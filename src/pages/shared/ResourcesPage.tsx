import { useEffect } from "react";
import { Download } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

/* Resources & Downloads — text and documents verbatim as supplied by the NEPED team */
// Files in public/; labels are the documents' names as supplied by the NEPED team
const DOWNLOADS = [
  { label: "Capability Statement", href: "/NEPED_Capability_Statement.pdf" },
  { label: "NEPED Leaflet (PRA)", href: "/NEPED_Leaflet_PRA.pdf" },
  { label: "Exploring Gender Dimension into NEPED", href: "/Exploring_Gender_Dimension_into_NEPED.pdf" },
];

export function ResourcesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full pt-10 sm:pt-14 pb-24">
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] space-y-5 mb-12 sm:mb-16">
          <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light text-[#1A2E23] tracking-[-1.55px] leading-[1.05]">{"Resources & Downloads"}</BlurReveal>
          <p className="text-[16px] sm:text-[18px] text-[#5B6660] leading-relaxed">
            Fact sheets, technical notes, reports and press materials — everything a partner, researcher or journalist might need, in one place.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOWNLOADS.map((doc) => (
            <li key={doc.href}>
              <a
                href={doc.href}
                download
                className="group flex items-center justify-between gap-4 h-full border border-black/10 bg-[#ffffff] px-6 py-5 text-[17px] sm:text-[18px] text-[#1A2E23] hover:border-[#1E6F4C] transition-colors duration-300 ease-in-out"
              >
                <span>{doc.label}</span>
                <Download size={20} strokeWidth={1.5} className="shrink-0 text-[#1E6F4C] transition-transform duration-300 ease-in-out group-hover:translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
