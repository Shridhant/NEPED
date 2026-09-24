import { NEPED_ENERGY_PATHS, NEPED_PATHS } from "@/routes/paths";

/**
 * All text shown on the two-entity landing page.
 * Only the acronyms, full names and logos are confirmed; every "[Pending: …]"
 * value must be replaced with officially provided text before this page goes live at "/".
 */
export const LANDING_CONTENT = {
  pageTitle: "[Pending: browser tab title]",
  eyebrow: "[Pending: eyebrow line]",
  heading: "[Pending: main heading]",
  intro: "[Pending: introduction paragraph]",
  entities: [
    {
      key: "neped",
      acronym: "NEPED",
      fullName: "Nagaland Empowerment of People through Economic Development",
      logo: "/NEPED Logo.jpg.jpeg",
      logoAlt: "NEPED Logo",
      summary: "[Pending: NEPED summary]",
      ctaLabel: "[Pending: NEPED button label]",
      to: NEPED_PATHS.home,
    },
    {
      key: "neped-energy",
      acronym: "NEPeD",
      fullName: "Nagaland Empowerment of People through Energy Development",
      logo: "/NEPeD Logo High Res.png",
      logoAlt: "NEPeD Logo",
      summary: "[Pending: NEPeD summary]",
      ctaLabel: "[Pending: NEPeD button label]",
      to: NEPED_ENERGY_PATHS.home,
    },
  ],
} as const;
