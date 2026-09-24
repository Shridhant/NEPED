/**
 * Gallery albums — one per folder in public/gallery-photos (folder name = album title).
 * (Not "public/gallery": a real folder there would shadow the /gallery page on the server.)
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
  }
];
