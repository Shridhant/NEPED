import { useOutletContext } from "react-router-dom";

/** Layout passes this to every page (Outlet context) so a page button can open the Contact Us popup. */
export type LayoutContext = { openContact: () => void };

export function useOpenContact() {
  return useOutletContext<LayoutContext>().openContact;
}
