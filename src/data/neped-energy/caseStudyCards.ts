import { Lightbulb, Mountain, Waves, Users, Leaf, type LucideIcon } from "lucide-react";
import type { FolderCardItem } from "@/components/ui/folder-cards";
import { CASE_STUDIES, type CaseStudy } from "@/data/neped-energy/caseStudiesData";
import { CASE_STUDY_PHOTOS } from "@/data/neped-energy/caseStudyPhotos";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";

// Light gradients in NEPeD tones (teal, sand, terracotta)
const PALETTES = [
  { background: "linear-gradient(145deg, #dcefef 0%, #a9d3d6 100%)", folderColor: "#eef7f7", borderColor: "#c8e4e5", textColor: "#123f47", subTextColor: "rgba(18,63,71,0.72)", iconColor: "#1f6b75" },
  { background: "linear-gradient(145deg, #f8e9dc 0%, #eec3a1 100%)", folderColor: "#fcf4ec", borderColor: "#f1d6bf", textColor: "#5a2f17", subTextColor: "rgba(90,47,23,0.72)", iconColor: "#b75928" },
  { background: "linear-gradient(145deg, #f3eedc 0%, #dfd2a6 100%)", folderColor: "#f9f6ec", borderColor: "#e8dfbf", textColor: "#4a3f1c", subTextColor: "rgba(74,63,28,0.72)", iconColor: "#8a7224" },
  { background: "linear-gradient(145deg, #e0eef3 0%, #b1cfdc 100%)", folderColor: "#f0f6f9", borderColor: "#cde0e8", textColor: "#163a4a", subTextColor: "rgba(22,58,74,0.72)", iconColor: "#2c6680" },
  { background: "linear-gradient(145deg, #f6e4de 0%, #e3b3a4 100%)", folderColor: "#fbf2ef", borderColor: "#eed0c6", textColor: "#55271c", subTextColor: "rgba(85,39,28,0.72)", iconColor: "#a4492f" },
];
const ICONS: LucideIcon[] = [Lightbulb, Mountain, Waves, Users, Leaf];

export function caseStudyCard(study: CaseStudy, index: number): FolderCardItem {
  return {
    number: String(index + 1).padStart(2, "0"),
    title: study.title,
    description: study.overview,
    icon: ICONS[index % ICONS.length],
    images: CASE_STUDY_PHOTOS[study.slug],
    to: NEPED_ENERGY_PATHS.caseStudy(study.slug),
    ...PALETTES[index % PALETTES.length],
  };
}

export const CASE_STUDY_CARDS = CASE_STUDIES.map(caseStudyCard);
