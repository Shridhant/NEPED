/** Present NEPED POU team (names, roles and photos as on the About Us page). */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const NEPED_PRESENT_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Atheo Ezung",
    role: "POU Member",
    image: "/POU/Atheo Ezung - POU member.jpg.webp",
  },
  {
    id: "2",
    name: "Asa Tep",
    role: "POU Member",
    image: "/POU/Asa Tep - POU member.jpg.webp",
  },{
    id: "3",
    name: "Dr. Kezevituo Metha",
    role: "POU Member",
    image: "/POU/Dr. Kezevituo Metha - POU member.jpg.webp",
  },
  
  {
    id: "4",
    name: "Dr. Savio Krocha",
    role: "POU Member",
    image: "/POU/Dr. Savio Krocha - POU member.jpg.webp",
  },
  {
    id: "5",
    name: "Er. Renbenthung Humtsoe",
    role: "POU Member",
    image: "/POU/Er. Renbenthung Humtsoe - POU member.jpg.webp",
  },
  {
    id: "6",
    name: "Er. Moamanen Imchen",
    role: "POU Member",
    image: "/POU/Er. Moamanen Imchen - POU member.jpg.webp",
  },
];
