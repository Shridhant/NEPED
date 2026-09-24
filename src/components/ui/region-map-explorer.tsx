import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Regional map explorer: a site list beside a satellite map of one region.
 * Hovering / focusing / tapping a site pans and zooms the map to its group's marker;
 * on touch devices, scrolling the list does the same. Same interaction model as the
 * interactive globe explorer, but framed on a single region so the effect is clearly visible.
 */

export type MapLocationGroup = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  sites: string[];
};

/** Geographic extent of the map image (equirectangular / EPSG:4326). */
export type MapBounds = { west: number; east: number; south: number; north: number };

export type RegionMapExplorerProps = {
  groups: MapLocationGroup[];
  imageUrl: string;
  imageAlt: string;
  bounds: MapBounds;
  /** Zoom factor when a group is focused */
  focusScale?: number;
  className?: string;
};

const siteKey = (groupId: string, index: number) => `${groupId}:${index}`;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function RegionMapExplorer({
  groups,
  imageUrl,
  imageAlt,
  bounds,
  focusScale = 2.2,
  className,
}: RegionMapExplorerProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const siteRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const isScrollingProgrammatically = React.useRef(false);

  const [activeGroupId, setActiveGroupId] = React.useState<string | null>(groups[0]?.id ?? null);
  const [activeSite, setActiveSite] = React.useState<string | null>(groups[0] ? siteKey(groups[0].id, 0) : null);

  // Keep the aspect ratio true to the ground at the region's mid-latitude
  const midLat = (bounds.north + bounds.south) / 2;
  const aspect = ((bounds.east - bounds.west) * Math.cos((midLat * Math.PI) / 180)) / (bounds.north - bounds.south);

  const position = React.useCallback(
    (group: MapLocationGroup) => ({
      x: ((group.lng - bounds.west) / (bounds.east - bounds.west)) * 100,
      y: ((bounds.north - group.lat) / (bounds.north - bounds.south)) * 100,
    }),
    [bounds],
  );

  const activeGroup = groups.find((group) => group.id === activeGroupId) ?? null;
  const scale = activeGroup ? focusScale : 1;
  const focus = activeGroup ? position(activeGroup) : { x: 50, y: 50 };
  // Translate (in % of the map) so the focused marker sits in the centre, without exposing the map's edges
  const tx = clamp(50 - focus.x * scale, 100 - 100 * scale, 0);
  const ty = clamp(50 - focus.y * scale, 100 - 100 * scale, 0);

  const activate = React.useCallback((group: MapLocationGroup, key: string) => {
    setActiveSite(key);
    setActiveGroupId(group.id);
  }, []);

  const handleMarkerClick = React.useCallback(
    (group: MapLocationGroup) => {
      activate(group, siteKey(group.id, 0));
      isScrollingProgrammatically.current = true;
      siteRefs.current[siteKey(group.id, 0)]?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    },
    [activate],
  );

  // On touch devices (no hover) the site closest to the list's centre drives the map.
  const handleScroll = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (isScrollingProgrammatically.current || !container) return;
    if (!window.matchMedia("(hover: none)").matches) return;

    const containerRect = container.getBoundingClientRect();
    const centre = container.clientHeight / 2;
    let closest: { group: MapLocationGroup; key: string } | null = null;
    let minDistance = Number.POSITIVE_INFINITY;

    for (const group of groups) {
      group.sites.forEach((_, index) => {
        const el = siteRefs.current[siteKey(group.id, index)];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerRect.top + rect.height / 2 - centre);
        if (distance < minDistance) {
          minDistance = distance;
          closest = { group, key: siteKey(group.id, index) };
        }
      });
    }

    if (closest) {
      const { group, key } = closest;
      activate(group, key);
    }
  }, [activate, groups]);

  return (
    <div
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] overflow-hidden rounded-[24px] bg-[#002934] text-[#ffffff]",
        className,
      )}
    >
      {/* Site list */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="order-2 md:order-1 h-[300px] md:h-[620px] overflow-y-auto px-6 py-[100px] md:py-[270px] sm:px-10 lg:px-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        {groups.map((group) => {
          const groupActive = group.id === activeGroupId;
          return (
            <div key={group.id} className="w-full pb-6">
              <span
                className={cn(
                  "block pb-1 text-[11px] font-mono tracking-[0.14em] transition-colors duration-300",
                  groupActive ? "text-[#b75928]" : "text-[#e5e4e4]/45",
                )}
              >
                {group.name}
              </span>
              {group.sites.map((site, index) => {
                const key = siteKey(group.id, index);
                const isActive = activeSite === key;
                return (
                  <button
                    key={key}
                    ref={(el) => {
                      siteRefs.current[key] = el;
                    }}
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => activate(group, key)}
                    onFocus={() => activate(group, key)}
                    onClick={() => activate(group, key)}
                    className={cn(
                      "block w-full py-1 text-left text-[22px] font-light tracking-[-0.4px] leading-tight transition-all duration-300 ease-out md:text-[26px] lg:text-[30px] cursor-pointer",
                      isActive
                        ? "translate-x-1 text-[#b75928]"
                        : groupActive
                          ? "text-[#ffffff]/85 hover:text-[#ffffff]"
                          : "text-[#ffffff]/25 hover:text-[#ffffff]/55",
                    )}
                  >
                    {site}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Map */}
      <div className="order-1 md:order-2 flex items-center p-3 sm:p-4 md:pl-0">
        <div
          className="relative w-full overflow-hidden rounded-[16px] bg-[#001d25] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
          style={{ aspectRatio: aspect }}
        >
          <div
            className="absolute inset-0 origin-top-left transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translate(${tx}%, ${ty}%) scale(${scale})` }}
          >
            <img src={imageUrl} alt={imageAlt} className="absolute inset-0 w-full h-full object-fill select-none" draggable={false} />
            <div className="absolute inset-0 bg-[#002934]/15" />

            {groups.map((group) => {
              const { x, y } = position(group);
              const isActive = group.id === activeGroupId;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleMarkerClick(group)}
                  aria-label={group.name}
                  title={group.name}
                  className="group/marker absolute cursor-pointer"
                  style={{ left: `${x}%`, top: `${y}%`, zIndex: isActive ? 20 : 10 }}
                >
                  {/* Counter-scale so markers keep their size while the map zooms */}
                  <span
                    className="absolute left-0 top-0 block transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transform: `translate(-50%, -50%) scale(${1 / scale})` }}
                  >
                    <span className="relative flex items-center justify-center w-8 h-8">
                      {isActive && <span className="absolute inset-0 rounded-full bg-[#b75928]/50 animate-ping" />}
                      <span
                        className={cn(
                          "relative rounded-full border-2 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.45)]",
                          isActive ? "w-4 h-4 bg-[#b75928] border-[#ffffff]" : "w-3 h-3 bg-[#ffffff] border-[#002934]/40 group-hover/marker:bg-[#b75928]",
                        )}
                      />
                    </span>
                    {isActive && (
                      <span className="absolute left-9 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-[6px] bg-[#000000]/70 backdrop-blur-sm px-2 py-1 text-[11px] font-mono tracking-[0.1em] text-[#ffffff]">
                        {group.name}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegionMapExplorer;
