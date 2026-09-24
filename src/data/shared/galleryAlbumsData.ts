/**
 * Gallery albums — one per folder in public/gallery (folder name = album title).
 * Alt text comes from descriptive file names; camera file names (IMG_…) get no alt text.
 * When photos are added or removed in public/gallery, this list must be updated to match.
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
        "src": "/gallery/nagaland/12 Rural Engineer after hydroger installation at Kinpoa Village.jpg",
        "alt": "Rural Engineer after hydroger installation at Kinpoa Village"
      },
      {
        "id": "nagaland/3 Channel and forebay tank.jpg",
        "src": "/gallery/nagaland/3 Channel and forebay tank.jpg",
        "alt": "Channel and forebay tank"
      },
      {
        "id": "nagaland/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg",
        "src": "/gallery/nagaland/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg",
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
        "src": "/gallery/meghalaya/IMG_1949.jpg",
        "alt": ""
      },
      {
        "id": "meghalaya/IMG_1958.jpg",
        "src": "/gallery/meghalaya/IMG_1958.jpg",
        "alt": ""
      },
      {
        "id": "meghalaya/IMG_1972.jpg",
        "src": "/gallery/meghalaya/IMG_1972.jpg",
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
        "src": "/gallery/arunachal pradesh/IMG_6612.jpg",
        "alt": ""
      },
      {
        "id": "arunachal pradesh/IMG_6797.jpg",
        "src": "/gallery/arunachal pradesh/IMG_6797.jpg",
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
        "src": "/gallery/sikkim/UNNAMED_FILE25652.jpg",
        "alt": ""
      }
    ]
  }
];
