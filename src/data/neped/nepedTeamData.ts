/** NEPED team. POU names and roles as in the client's list (NEPED_Kohima Office_CERES.docx); order as the client's list, except the Member Secretary comes second (per the team). */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Without a photo the card shows name and designation only */
  image?: string;
}

/** Chairman — placeholder until the client sends the name and photo */
export const NEPED_CHAIRMAN: TeamMember = {
  id: "chairman",
  name: "Shri Supongmeren Hoki",
  role: "Chairman",
  image: "/Chairman (Supongmeren Hoki).jpg.webp",
};

export const NEPED_PRESENT_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Shri. Kovi Meyase, NCS",
    role: "Team Leader",
    image: "/Teammembers/Kovi Meyase Team Leader.webp",
  },
  {
    id: "7",
    name: "Dr. Rokhu Savio Krocha",
    role: "Member Secretary",
    image: "/Teammembers/Dr Savio.jpg.webp",
  },
  {
    id: "2",
    name: "Dr. Kezevituo Metha",
    role: "Member",
    image: "/Teammembers/Dr Kezevituo.jpg.webp",
  },
  {
    id: "3",
    name: "Asa Tep",
    role: "Member",
    image: "/Teammembers/Asa Tep.jpg.webp",
  },
  {
    id: "4",
    name: "Er. L. Moamanen Imchen",
    role: "Member",
    image: "/Teammembers/Moamanen.webp",
  },
  {
    id: "5",
    name: "Er. Renbenthung Humtsoe",
    role: "Member",
    image: "/Teammembers/Renbenthung Humtsoe.jpg.webp",
  },
  {
    id: "6",
    name: "Atheo Ezung",
    role: "Member",
    image: "/Teammembers/Atheo Ezung.webp",
  },
];

/** Supporting Staff: NEPED Main Office (Kohima) */
export const NEPED_SUPPORTING_STAFF: TeamMember[] = [
  { id: "s1", name: "Zavikhol Tsükrü", role: "Natural Resource Associate", image: "/Teammembers/Zavikhol.jpg.webp" },
  { id: "s2", name: "Nouneu Theunuo", role: "Accounts & Finance Executive", image: "/Teammembers/Noune.webp" },
  { id: "s3", name: "Cichamo Lotha", role: "IT Operations & Technical Support Executive", image: "/Teammembers/Chichamo.jpg.webp" },
  { id: "s4", name: "Margaret Kezevino", role: "Office Manager", image: "/Teammembers/Margaret.jpg.webp" },
  { id: "s5", name: "Benthungo Shitiri", role: "MTS", image: "/Teammembers/Benthungo Shitiri.JPG.webp" },
  { id: "s6", name: "Neilhousienuo Keyho", role: "MTS", image: "/Teammembers/Neilhou.jpg.webp" },
];

/** CERES staff (Dimapur), shown behind the "View CERES team" button */
export const CERES_STAFF: TeamMember[] = [
  { id: "c1", name: "Rongsenkaba", role: "MTS", image: "/Teammembers/Rongsenkaba.jpg.webp" },
  { id: "c2", name: "Anato Sema", role: "Chowkidar", image: "/Teammembers/Anato Sema.jpg.webp" },
  { id: "c3", name: "Wangying Konyak", role: "Pickup Driver", image: "/Teammembers/Wangyingn Konyak.jpg.webp" },
  { id: "c4", name: "Hisenlo Semp", role: "Technician cum Supervisor", image: "/Teammembers/Hisenlo Semp.jpg.webp" },
  { id: "c5", name: "Kekhrieselie Talie", role: "Technician", image: "/Teammembers/Kekhrieselie Talie.jpg.webp" },
  { id: "c6", name: "Hegou Lhouvum", role: "Technician", image: "/Teammembers/Hegou Lhouvum.jpg.webp" },
  { id: "c7", name: "Atsaba A. Sangtam", role: "Technician", image: "/Teammembers/Atsaba Sangtam.jpg.webp" },
  { id: "c8", name: "Sarenba Aier", role: "ELC Consultant", image: "/Teammembers/Sarenba Aier.webp" },
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
      { role: "Members", names: "Asa Tep, Nouneu Theunuo, Zavikhol Tsükrü" },
    ],
  },
  {
    title: "Governing Body, NEPeD",
    members: [
      { role: "Team Leader", names: "Shri. Kovi Meyase (NCS)" },
      { role: "Executive Secretary", names: "Er. Renbenthung Humtsoe" },
      { role: "Treasurer", names: "Atheo Ezung" },
      { role: "Members", names: "Er. L. Moamanen Imchen, Margaret Kezevino, Chichamo Lotha" },
    ],
  },
];
