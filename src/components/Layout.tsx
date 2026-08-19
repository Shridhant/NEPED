import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] font-sans selection:bg-[#b75928] selection:text-[#ffffff]">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
