import { AkerNavbar } from "@/components/ui/AkerNavbar";

export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  return <AkerNavbar onOpenContact={onOpenContact} />;
}
