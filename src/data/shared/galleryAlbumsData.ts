/**
 * Gallery albums — one per folder in public/gallery-photos (folder name = album title).
 * (Not "public/gallery": a real folder there would shadow the /gallery page on the server.)
 * The last five albums are the client's Drive "Web Site pics" folders (CCA, livelihood, Renewable Energy,
 * Community capacity, MOU), resized to 1600 px WebP.
 * Alt text comes from descriptive file names; camera file names (IMG_…) get no alt text.
 * When photos are added or removed in public/gallery-photos, this list must be updated to match.
 */
export type GalleryPhoto = { id: string; src: string; alt: string };
export type GalleryAlbumData = { id: string; title: string; photos: GalleryPhoto[] };

export const GALLERY_ALBUMS_DATA: GalleryAlbumData[] = [
  {
    "id": "nagaland",
    "title": "Nagaland",
    "photos": [
      {
        "id": "nagaland/12 Rural Engineer after hydroger installation at Kinpoa Village.jpg",
        "src": "/gallery-photos/nagaland/12 Rural Engineer after hydroger installation at Kinpoa Village.webp",
        "alt": "Rural Engineer after hydroger installation at Kinpoa Village"
      },
      {
        "id": "nagaland/3 Channel and forebay tank.jpg",
        "src": "/gallery-photos/nagaland/3 Channel and forebay tank.webp",
        "alt": "Channel and forebay tank"
      },
      {
        "id": "nagaland/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
        "src": "/gallery-photos/nagaland/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
        "alt": "Villagers sharpening their daos on a grinder powered by hydroger"
      }
    ]
  },
  {
    "id": "meghalaya",
    "title": "Meghalaya",
    "photos": [
      {
        "id": "meghalaya/IMG_1949.jpg",
        "src": "/gallery-photos/meghalaya/IMG_1949.webp",
        "alt": ""
      },
      {
        "id": "meghalaya/IMG_1958.jpg",
        "src": "/gallery-photos/meghalaya/IMG_1958.webp",
        "alt": ""
      },
      {
        "id": "meghalaya/IMG_1972.jpg",
        "src": "/gallery-photos/meghalaya/IMG_1972.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "arunachal-pradesh",
    "title": "Arunachal Pradesh",
    "photos": [
      {
        "id": "arunachal pradesh/IMG_6612.jpg",
        "src": "/gallery-photos/arunachal pradesh/IMG_6612.webp",
        "alt": ""
      },
      {
        "id": "arunachal pradesh/IMG_6797.jpg",
        "src": "/gallery-photos/arunachal pradesh/IMG_6797.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "sikkim",
    "title": "Sikkim",
    "photos": [
      {
        "id": "sikkim/UNNAMED_FILE25652.jpg",
        "src": "/gallery-photos/sikkim/UNNAMED_FILE25652.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "community-conserved-areas",
    "title": "Community Conserved Areas",
    "photos": [
      {
        "id": "community-conserved-areas/0a5cb78847584a01947e9e493a713102.jpg",
        "src": "/gallery-photos/community-conserved-areas/0a5cb78847584a01947e9e493a713102.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/1000277905.jpg",
        "src": "/gallery-photos/community-conserved-areas/1000277905.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/DSC_0344.JPG",
        "src": "/gallery-photos/community-conserved-areas/DSC_0344.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/IMG-20250628-WA0031.jpg",
        "src": "/gallery-photos/community-conserved-areas/IMG-20250628-WA0031.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/IMG-20250918-WA0035.jpg",
        "src": "/gallery-photos/community-conserved-areas/IMG-20250918-WA0035.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/IMG-20260407-WA0006.jpg",
        "src": "/gallery-photos/community-conserved-areas/IMG-20260407-WA0006.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/IMG-20260407-WA0017.jpg",
        "src": "/gallery-photos/community-conserved-areas/IMG-20260407-WA0017.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/IMG_20200213_143138 - Copy (2).jpg",
        "src": "/gallery-photos/community-conserved-areas/IMG_20200213_143138 - Copy (2).webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/IMG_20250521_101044.jpg",
        "src": "/gallery-photos/community-conserved-areas/IMG_20250521_101044.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2025-06-06 at 7.27.44 AM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2025-06-06 at 7.27.44 AM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-06-15 at 7.40.51 AM-3.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-06-15 at 7.40.51 AM-3.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-07-08 at 11.10.20 AM-3.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-07-08 at 11.10.20 AM-3.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-07-08 at 11.10.20 AM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-07-08 at 11.10.20 AM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-08-01 at 8.00.00 AM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-08-01 at 8.00.00 AM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-08-01 at 8.01.24 AM-2.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-08-01 at 8.01.24 AM-2.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-08-01 at 8.01.24 AM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-08-01 at 8.01.24 AM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.24.07 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.24.07 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.24.46 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.24.46 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.25.24 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.25.24 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.26.49 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.26.49 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.27.21 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.27.21 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.27.51 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.27.51 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.28.48 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.28.48 PM.webp",
        "alt": ""
      },
      {
        "id": "community-conserved-areas/WhatsApp Image 2026-10-23 at 2.30.45 PM.jpeg",
        "src": "/gallery-photos/community-conserved-areas/WhatsApp Image 2026-10-23 at 2.30.45 PM.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "livelihoods",
    "title": "Livelihoods",
    "photos": [
      {
        "id": "livelihoods/EPA - Heningkunglwa.jpg",
        "src": "/gallery-photos/livelihoods/EPA - Heningkunglwa.webp",
        "alt": "EPA - Heningkunglwa"
      },
      {
        "id": "livelihoods/IMG-20230828-WA0010.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20230828-WA0010.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20230828-WA0013.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20230828-WA0013.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20231016-WA0011.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20231016-WA0011.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20240410-WA0023.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20240410-WA0023.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20250108-WA0004.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20250108-WA0004.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20250429-WA0005.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20250429-WA0005.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20250814-WA0068.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20250814-WA0068.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG-20250922-WA0024.jpg",
        "src": "/gallery-photos/livelihoods/IMG-20250922-WA0024.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG20230519170410.jpg",
        "src": "/gallery-photos/livelihoods/IMG20230519170410.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG_20220324_065538.jpg",
        "src": "/gallery-photos/livelihoods/IMG_20220324_065538.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG_20221021_083126.jpg",
        "src": "/gallery-photos/livelihoods/IMG_20221021_083126.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/IMG_20221021_083219.jpg",
        "src": "/gallery-photos/livelihoods/IMG_20221021_083219.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/Kiusowongto Livelihood Kholar.jpg",
        "src": "/gallery-photos/livelihoods/Kiusowongto Livelihood Kholar.webp",
        "alt": "Kiusowongto Livelihood Kholar"
      },
      {
        "id": "livelihoods/Microplan Livelihood1.jpg",
        "src": "/gallery-photos/livelihoods/Microplan Livelihood1.webp",
        "alt": "Microplan Livelihood"
      },
      {
        "id": "livelihoods/Sust. Livelihood.jpg",
        "src": "/gallery-photos/livelihoods/Sust. Livelihood.webp",
        "alt": "Sust. Livelihood"
      },
      {
        "id": "livelihoods/WhatsApp Image 2025-08-14 at 11.56.39 AM.jpeg",
        "src": "/gallery-photos/livelihoods/WhatsApp Image 2025-08-14 at 11.56.39 AM.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/WhatsApp Image 2025-09-09 at 8.58.58 AM.jpeg",
        "src": "/gallery-photos/livelihoods/WhatsApp Image 2025-09-09 at 8.58.58 AM.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/WhatsApp Image 2025-09-10 at 3.33.26 PM (1).jpeg",
        "src": "/gallery-photos/livelihoods/WhatsApp Image 2025-09-10 at 3.33.26 PM (1).webp",
        "alt": ""
      },
      {
        "id": "livelihoods/WhatsApp Image 2026-07-26 at 8.59.09 PM.jpeg",
        "src": "/gallery-photos/livelihoods/WhatsApp Image 2026-07-26 at 8.59.09 PM.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/WhatsApp Image 2026-08-01 at 7.16.25 AM-2.jpeg",
        "src": "/gallery-photos/livelihoods/WhatsApp Image 2026-08-01 at 7.16.25 AM-2.webp",
        "alt": ""
      },
      {
        "id": "livelihoods/WhatsApp Image 2026-10-24 at 4.20.47 PM.jpeg",
        "src": "/gallery-photos/livelihoods/WhatsApp Image 2026-10-24 at 4.20.47 PM.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "renewable-energy",
    "title": "Renewable Energy",
    "photos": [
      {
        "id": "renewable-energy/IMG-20190921-WA0005.jpg",
        "src": "/gallery-photos/renewable-energy/IMG-20190921-WA0005.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/Screenshot_20230630_213425_WhatsApp.jpg",
        "src": "/gallery-photos/renewable-energy/Screenshot_20230630_213425_WhatsApp.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/Songlhuh (2).jpg",
        "src": "/gallery-photos/renewable-energy/Songlhuh (2).webp",
        "alt": "Songlhuh"
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-23 at 2.36.16 PM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-23 at 2.36.16 PM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-23 at 2.36.17 PM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-23 at 2.36.17 PM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 10.55.10 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 10.55.10 AM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 10.55.19 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 10.55.19 AM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 10.57.33 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 10.57.33 AM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 10.59.02 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 10.59.02 AM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 10.59.03 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 10.59.03 AM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 11.13.41 AM-2.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 11.13.41 AM-2.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 11.15.50 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 11.15.50 AM.webp",
        "alt": ""
      },
      {
        "id": "renewable-energy/WhatsApp Image 2026-10-24 at 11.16.05 AM.jpeg",
        "src": "/gallery-photos/renewable-energy/WhatsApp Image 2026-10-24 at 11.16.05 AM.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "community-capacity",
    "title": "Community Capacity",
    "photos": [
      {
        "id": "community-capacity/20240404_092420.heic",
        "src": "/gallery-photos/community-capacity/20240404_092420.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/DSC02694.jpg",
        "src": "/gallery-photos/community-capacity/DSC02694.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/DSC_0018.JPG",
        "src": "/gallery-photos/community-capacity/DSC_0018.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/IMG-20240210-WA0012.jpg",
        "src": "/gallery-photos/community-capacity/IMG-20240210-WA0012.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/IMG-20240715-WA0016.jpg",
        "src": "/gallery-photos/community-capacity/IMG-20240715-WA0016.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/IMG20230518144010.jpg",
        "src": "/gallery-photos/community-capacity/IMG20230518144010.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/IMG_20220613_141553.jpg",
        "src": "/gallery-photos/community-capacity/IMG_20220613_141553.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/IMG_20220617_162308.jpg",
        "src": "/gallery-photos/community-capacity/IMG_20220617_162308.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/IMG_20260129_104753.jpg",
        "src": "/gallery-photos/community-capacity/IMG_20260129_104753.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/Inbung.jpg",
        "src": "/gallery-photos/community-capacity/Inbung.webp",
        "alt": "Inbung"
      },
      {
        "id": "community-capacity/WhatsApp Image 2026-08-01 at 7.17.44 AM.jpeg",
        "src": "/gallery-photos/community-capacity/WhatsApp Image 2026-08-01 at 7.17.44 AM.webp",
        "alt": ""
      },
      {
        "id": "community-capacity/WhatsApp Image 2026-08-01 at 7.17.48 AM-2.jpeg",
        "src": "/gallery-photos/community-capacity/WhatsApp Image 2026-08-01 at 7.17.48 AM-2.webp",
        "alt": ""
      }
    ]
  },
  {
    "id": "mou-signings",
    "title": "MOU Signings",
    "photos": [
      {
        "id": "mou-signings/WhatsApp Image 2026-07-08 at 11.23.18 AM-3.jpeg",
        "src": "/gallery-photos/mou-signings/WhatsApp Image 2026-07-08 at 11.23.18 AM-3.webp",
        "alt": ""
      },
      {
        "id": "mou-signings/WhatsApp Image 2026-08-01 at 7.43.37 AM-2.jpeg",
        "src": "/gallery-photos/mou-signings/WhatsApp Image 2026-08-01 at 7.43.37 AM-2.webp",
        "alt": ""
      },
      {
        "id": "mou-signings/WhatsApp Image 2026-08-01 at 7.52.17 AM-3.jpeg",
        "src": "/gallery-photos/mou-signings/WhatsApp Image 2026-08-01 at 7.52.17 AM-3.webp",
        "alt": ""
      }
    ]
  }
];
