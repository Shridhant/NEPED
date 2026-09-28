import { SiteNavbar } from "./SiteNavbar";

/** One navbar for NEPED and NEPeD pages (the old AkerNavbar / CardNav are no longer used). */
export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  return <SiteNavbar onOpenContact={onOpenContact} />;
}
