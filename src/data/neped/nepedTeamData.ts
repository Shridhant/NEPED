/** NEPED team. POU names and roles as in the client's list (NEPED_Kohima Office_CERES.docx), in that order. */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** No photo yet for the supporting staff; the card shows name and designation only */
  image?: string;
}

export const NEPED_PRESENT_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Shri. Kovi Meyase, NCS",
    role: "Team Leader",
    image: "/Team Leaders/Kovi Keyase, NCS -  - Team Leader.jpg.webp",
  },
  {
    id: "2",
    name: "Dr. Kezevituo Metha",
    role: "Member",
    image: "/POU/Dr. Kezevituo Metha - POU member.jpg.webp",
  },
  {
    id: "3",
    name: "Asa Tep",
    role: "Member",
    image: "/POU/Asa Tep - POU member.jpg.webp",
  },
  {
    id: "4",
    name: "Er. L. Moamanen Imchen",
    role: "Member",
    image: "/POU/Er. Moamanen Imchen - POU member.jpg.webp",
  },
  {
    id: "5",
    name: "Er. Renbenthung Humtsoe",
    role: "Member",
    image: "/POU/Er. Renbenthung Humtsoe - POU member.jpg.webp",
  },
  {
    id: "6",
    name: "Atheo Ezung",
    role: "Member",
    image: "/POU/Atheo Ezung - POU member.jpg.webp",
  },
  {
    id: "7",
    name: "Dr. Rokhu Savio Krocha",
    role: "Member Secretary",
    image: "/POU/Dr. Savio Krocha - POU member.jpg.webp",
  },
];

/** Supporting Staff: NEPED Main Office (Kohima) */
export const NEPED_SUPPORTING_STAFF: TeamMember[] = [
  { id: "s1", name: "Zavikhol Tsukru", role: "Natural Resource Associate" },
  { id: "s2", name: "Nouneu Theunuo", role: "Accounts & Finance Executive" },
  { id: "s3", name: "Chichamo Lotha", role: "IT Operations & Technical Support Executive" },
  { id: "s4", name: "Margaret Kezevino", role: "Office Manager" },
  { id: "s5", name: "Benthungo Shitiri", role: "MTS" },
  { id: "s6", name: "Neilhousienuo Keyho", role: "MTS" },
];

/** CERES staff (Dimapur), shown behind the "View CERES team" button */
export const CERES_STAFF: TeamMember[] = [
  { id: "c1", name: "Rongsenkaba", role: "MTS" },
  { id: "c2", name: "Anato Sema", role: "Chowkidar" },
  { id: "c3", name: "Wangying Konyak", role: "Pickup Driver" },
  { id: "c4", name: "Hisenlo Semp", role: "Technician cum Supervisor" },
  { id: "c5", name: "Kekhrieselie Talie", role: "Technician" },
  { id: "c6", name: "Hegou Lhouvum", role: "Technician" },
  { id: "c7", name: "Atsaba A. Sangtam", role: "Technician" },
  { id: "c8", name: "Sarenba Aier", role: "ELC Consultant" },
];

export interface GoverningBody {
  title: string;
  members: { role: string; names: string }[];
}

export const GOVERNING_BODIES: GoverningBody[] = [
  {
    title: "Governing Body, NEPED",
    members: [
      { role: "PSC Chairman", names: "Shri. Sentiyanger Imchen (IAS), Chief Secretary, Nagaland" },
      { role: "Team Leader", names: "Shri. Kovi Meyase (NCS)" },
      { role: "Executive Secretary", names: "Dr. Rokhu Savio Krocha" },
      { role: "Treasurer / Finance Secretary", names: "Dr. Kezevituo Metha" },
      { role: "Members", names: "Asa Tep, Nouneu Theunuo" },
    ],
  },
  {
    title: "Governing Body, CERES",
    members: [
      { role: "Team Leader", names: "Shri. Kovi Meyase (NCS)" },
      { role: "Treasurer", names: "Atheo Ezung" },
      { role: "Members", names: "Er. L. Moamanen Imchen, Er. Renbenthung Humtsoe, Margaret Kezevino" },
    ],
  },
];
