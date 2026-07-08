import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";

export default function ArcDemo() {
  const images = [
    "/hero-windmill.png",
    "/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg",
    "/49 Visitors at NEPeD's stall (Republic day 2016).jpg",
    "/52 NEPeD members at Nagaland Youth Summit 2016.jpg",
    "/solar-field.png",
    "/microgrid.png",
    "/forest.png",
  ];

  return (
    <div className="w-full">
      <ArcGalleryHero images={images} />
    </div>
  );
}
