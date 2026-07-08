import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-accent-amber selection:text-ink">
      <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
