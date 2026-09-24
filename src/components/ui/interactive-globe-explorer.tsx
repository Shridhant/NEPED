import * as React from "react";
import type { GlobeMethods, GlobeProps } from "react-globe.gl";
import { cn } from "@/lib/utils";

/*
 * Adapted from the 21st.dev "Interactive Globe Explorer" for this Vite app:
 * - react-globe.gl (three.js) is lazy-loaded with React.lazy instead of next/dynamic, so it only
 *   downloads on pages that render the globe;
 * - locations are grouped (e.g. district → sites); hovering / focusing / tapping a site turns the
 *   globe to its group's marker, and on touch devices scrolling the list does the same;
 * - the address/email tooltip is removed (no such data), colours follow the NEPeD palette.
 */

const Globe = React.lazy(() => import("react-globe.gl")) as unknown as React.ComponentType<
  GlobeProps & { ref?: React.Ref<GlobeMethods | undefined> }
>;

export type GlobeLocationGroup = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  sites: string[];
};

export type InteractiveGlobeExplorerProps = {
  groups: GlobeLocationGroup[];
  /** Equirectangular earth texture */
  globeTextureUrl?: string;
  /** Where the globe looks first (defaults to the first group) */
  initialView?: { lat: number; lng: number; altitude: number };
  /** Camera altitude when a group is focused */
  focusAltitude?: number;
  /** Slippy-map tile URL builder; when set, tiles replace the single texture (sharper when zoomed in) */
  tileUrl?: (x: number, y: number, level: number) => string;
  /** Stop visitors from rotating the globe away from the region */
  lockRotation?: boolean;
  /** Marker radius in degrees: [inactive, active] */
  markerRadius?: [number, number];
  /** Pulse ring radius in degrees */
  ringRadius?: number;
  className?: string;
};

const ACCENT = "#b75928";

function useElementSize(ref: React.RefObject<HTMLElement | null>) {
  const [size, setSize] = React.useState(420);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const next = Math.min(el.clientWidth, el.clientHeight, 600);
      setSize(Math.max(280, next || 420));
    };
    const observer = new ResizeObserver(update);
    observer.observe(el);
    update();
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

const siteKey = (groupId: string, index: number) => `${groupId}:${index}`;

export function InteractiveGlobeExplorer({
  groups,
  globeTextureUrl = "/globe/earth-texture.jpg",
  initialView,
  focusAltitude = 1.6,
  tileUrl,
  lockRotation = false,
  markerRadius = [0.5, 0.8],
  ringRadius = 3,
  className,
}: InteractiveGlobeExplorerProps) {
  const globeRef = React.useRef<GlobeMethods | undefined>(undefined);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const siteRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const isScrollingProgrammatically = React.useRef(false);
  const globeSize = useElementSize(containerRef);

  const [activeGroupId, setActiveGroupId] = React.useState<string | null>(groups[0]?.id ?? null);
  const [activeSite, setActiveSite] = React.useState<string | null>(groups[0] ? siteKey(groups[0].id, 0) : null);

  const activeGroup = groups.find((group) => group.id === activeGroupId) ?? null;

  const focusGlobe = React.useCallback(
    (group: GlobeLocationGroup, ms = 900) => {
      globeRef.current?.pointOfView({ lat: group.lat, lng: group.lng, altitude: focusAltitude }, ms);
    },
    [focusAltitude],
  );

  const activate = React.useCallback(
    (group: GlobeLocationGroup, key: string) => {
      setActiveSite(key);
      if (group.id !== activeGroupId) {
        setActiveGroupId(group.id);
        focusGlobe(group);
      }
    },
    [activeGroupId, focusGlobe],
  );

  const handleGlobeReady = React.useCallback(() => {
    const first = groups[0];
    globeRef.current?.pointOfView(initialView ?? (first ? { lat: first.lat, lng: first.lng, altitude: focusAltitude } : { lat: 0, lng: 0, altitude: 2.5 }), 0);
    const controls = globeRef.current?.controls();
    if (controls) {
      controls.enableZoom = false;
      controls.autoRotate = false;
      controls.enableRotate = !lockRotation;
    }
  }, [initialView, groups, focusAltitude, lockRotation]);

  const handlePointClick = React.useCallback(
    (point: object) => {
      const group = groups.find((item) => item.id === (point as GlobeLocationGroup).id);
      if (!group) return;
      activate(group, siteKey(group.id, 0));
      isScrollingProgrammatically.current = true;
      siteRefs.current[siteKey(group.id, 0)]?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    },
    [activate, groups],
  );

  // On touch devices (no hover) the site closest to the list's centre drives the globe.
  const handleScroll = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (isScrollingProgrammatically.current || !container) return;
    if (!window.matchMedia("(hover: none)").matches) return;

    const containerRect = container.getBoundingClientRect();
    const centre = container.clientHeight / 2;
    let closest: { group: GlobeLocationGroup; key: string } | null = null;
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
        "relative flex h-[640px] w-full overflow-hidden rounded-[24px] bg-[#002934] text-[#ffffff]",
        className,
      )}
    >
      {/* Site list */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative z-10 flex w-full md:w-[46%] md:max-w-[520px] flex-col items-start overflow-y-auto px-6 py-[280px] [scrollbar-width:none] sm:px-10 lg:px-14 [&::-webkit-scrollbar]:hidden"
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

      {/* Globe */}
      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center md:relative md:flex-1">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#002934] via-[#002934]/70 to-[#002934]/20 md:hidden" />
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b75928]/15" />
          </div>
          <React.Suspense
            fallback={
              <div className="flex items-center justify-center" style={{ width: globeSize, height: globeSize }}>
                <div className="relative h-12 w-12">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#b75928]/30" />
                  <div className="absolute inset-2 animate-pulse rounded-full bg-[#b75928]/50" />
                </div>
              </div>
            }
          >
            <Globe
              ref={globeRef}
              width={globeSize}
              height={globeSize}
              globeImageUrl={tileUrl ? undefined : globeTextureUrl}
              globeTileEngineUrl={tileUrl}
              backgroundColor="rgba(0,0,0,0)"
              atmosphereColor="#9fd3e6"
              atmosphereAltitude={0.12}
              pointsData={groups}
              pointLat="lat"
              pointLng="lng"
              pointColor={(d: object) => ((d as GlobeLocationGroup).id === activeGroupId ? ACCENT : "#ffffff")}
              pointAltitude={(d: object) => ((d as GlobeLocationGroup).id === activeGroupId ? 0.02 : 0.01)}
              pointRadius={(d: object) => ((d as GlobeLocationGroup).id === activeGroupId ? markerRadius[1] : markerRadius[0])}
              pointsTransitionDuration={300}
              pointLabel={(d: object) =>
                `<div style="padding:4px 8px;border-radius:6px;background:rgba(0,0,0,0.75);color:#fff;font:12px ui-monospace,monospace;letter-spacing:0.08em">${escapeHtml((d as GlobeLocationGroup).name)}</div>`
              }
              ringsData={activeGroup ? [activeGroup] : []}
              ringLat="lat"
              ringLng="lng"
              ringColor={() => (t: number) => `rgba(183,89,40,${1 - t})`}
              ringMaxRadius={ringRadius}
              ringPropagationSpeed={1.2}
              ringRepeatPeriod={900}
              onGlobeReady={handleGlobeReady}
              onPointClick={handlePointClick}
              enablePointerInteraction
              animateIn
            />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default InteractiveGlobeExplorer;
