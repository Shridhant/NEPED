import { Lightbulb, Mountain, Waves, Users, Leaf, type LucideIcon } from "lucide-react";
import type { FolderCardItem } from "@/components/ui/folder-cards";
import { CASE_STUDIES, type CaseStudy } from "@/data/neped-energy/caseStudiesData";
import { CASE_STUDY_PHOTOS } from "@/data/neped-energy/caseStudyPhotos";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";

// One uniform style from the site palette (Mist Wash card, Forest Green icon)
const CARD_STYLE = { background: "linear-gradient(145deg, #f3f6f3 0%, #dcebe1 100%)", folderColor: "#ffffff", borderColor: "#dbe5de", textColor: "#1a2e23", subTextColor: "#5b6660", iconColor: "#1e6f4c" };
const ICONS: LucideIcon[] = [Lightbulb, Mountain, Waves, Users, Leaf];

export function caseStudyCard(study: CaseStudy, index: number): FolderCardItem {
  return {
    number: String(index + 1).padStart(2, "0"),
    title: study.title,
    description: study.overview,
    icon: ICONS[index % ICONS.length],
    images: CASE_STUDY_PHOTOS[study.slug],
    to: NEPED_ENERGY_PATHS.caseStudy(study.slug),
    ...CARD_STYLE,
  };
}

export const CASE_STUDY_CARDS = CASE_STUDIES.map(caseStudyCard);
