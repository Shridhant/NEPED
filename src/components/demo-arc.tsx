import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";

export default function ArcDemo() {
  const images = [
    "/hero-windmill.webp",
    "/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
    "/49 Visitors at NEPeD's stall (Republic day 2016).jpg",
    "/52 NEPeD members at Nagaland Youth Summit 2016.webp",
    "/solar-field.webp",
    "/microgrid.webp",
    "/forest.webp",
  ];

  return (
    <div className="w-full">
      <ArcGalleryHero images={images} />
    </div>
  );
}
