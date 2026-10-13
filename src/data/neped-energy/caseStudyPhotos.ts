/**
 * NEPeD case study photos: public/<slug>/ (one folder per case study, added by the NEPeD team).
 * Alt text = the file name. The first photo is the one in front on the case study card.
 */
/** caption = text shown under the photo (the caption that was burned into each image, now cropped off) */
export type CaseStudyPhoto = { src: string; alt: string; caption?: string };

const photo = (slug: string, file: string, caption?: string): CaseStudyPhoto => ({
  src: `/${slug}/${file}`,
  alt: caption ?? file.replace(/\.[a-z]+$/i, "").replace(/\d+$/, ""),
  caption,
});

export const CASE_STUDY_PHOTOS: Record<string, CaseStudyPhoto[]> = {
  kingjung: [
    photo("kingjung", "Night View of Kingjung Village.jpg", "Night View of Kingjung Village lighted by hydroger"),
    photo("kingjung", "Street lighting.jpg", "Street lighting"),
  ],
  kingpao: [
    photo("kingpao", "kingpao.jpg", "Kingpao village"),
    photo("kingpao", "Rural Engineer after installation.jpg", "Rural Engineer after installation"),
  ],
  pang: [photo("pang", "Villagers transporting hydroger1.jpg", "Villagers transporting hydroger")],
  aniashu: [
    photo("aniashu", "installation in progress.jpg", "Installation in progress"),
    photo("aniashu", "ForebayPond.jpg", "Desilting/Forebay pond"),
  ],
  kaha: [
    photo("kaha", "Villagers transporting hydroger.jpg", "Villagers transporting hydroger"),
    photo("kaha", "Powerhouse.jpg", "Powerhouse"),
  ],
};
