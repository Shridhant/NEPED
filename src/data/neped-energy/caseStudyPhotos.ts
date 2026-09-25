/**
 * NEPeD case study photos: public/<slug>/ (one folder per case study, added by the NEPeD team).
 * Alt text = the file name. The first photo is the one in front on the case study card.
 */
export type CaseStudyPhoto = { src: string; alt: string };

const photo = (slug: string, file: string): CaseStudyPhoto => ({
  src: `/${slug}/${file}`,
  alt: file.replace(/\.[a-z]+$/i, "").replace(/\d+$/, ""),
});

export const CASE_STUDY_PHOTOS: Record<string, CaseStudyPhoto[]> = {
  kingjung: [photo("kingjung", "Night View of Kingjung Village.jpg"), photo("kingjung", "Street lighting.jpg")],
  kingpao: [photo("kingpao", "kingpao.jpg"), photo("kingpao", "Rural Engineer after installation.jpg")],
  pang: [photo("pang", "Villagers transporting hydroger1.jpg")],
  aniashu: [photo("aniashu", "installation in progress.jpg"), photo("aniashu", "ForebayPond.jpg")],
  kaha: [photo("kaha", "Villagers transporting hydroger.jpg"), photo("kaha", "Powerhouse.jpg")],
};
