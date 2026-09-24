import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { Layout } from "./components/shared/Layout";
// Shared pages (both entities)
import { HomePage } from "./pages/shared/HomePage";
import { BlogPage } from "./pages/shared/BlogPage";
import { BlogDetailPage } from "./pages/shared/BlogDetailPage";
import { GalleryPage } from "./pages/shared/GalleryPage";
import { GalleryAlbumDetailPage } from "./pages/shared/GalleryAlbumDetailPage";
import { LandingPage } from "./pages/landing/LandingPage";
// NEPED pages
import { NepedEconomicPage } from "./pages/neped/NepedEconomicPage";
import { NepedAboutPage } from "./pages/neped/NepedAboutPage";
import { ProjectsPage } from "./pages/neped/ProjectsPage";
import { NepedProjectDetailPage } from "./pages/neped/NepedProjectDetailPage";
// NEPeD pages
import { NepedEnergyPage } from "./pages/neped-energy/NepedEnergyPage";
import { NepedEnergyAboutPage } from "./pages/neped-energy/NepedEnergyAboutPage";
import { TechnologyPage } from "./pages/neped-energy/TechnologyPage";
import { TechProductDetailPage } from "./pages/neped-energy/TechProductDetailPage";
import { NepedEnergyImpactPage } from "./pages/neped-energy/NepedEnergyImpactPage";
import { SHARED_PATHS, NEPED_PATHS, NEPED_ENERGY_PATHS } from "./routes/paths";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for page transition to finish and elements to render
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

/** Redirects a legacy URL to its new location, keeping any #section hash. */
function LegacyRedirect({ to }: { to: string | ((params: Record<string, string | undefined>) => string) }) {
  const params = useParams();
  const { hash } = useLocation();
  const target = typeof to === "function" ? to(params) : to;
  return <Navigate to={`${target}${hash}`} replace />;
}

/** The old About page was split; #vision now lives on the NEPeD About page. */
function LegacyAboutRedirect() {
  const { hash } = useLocation();
  const target = hash === "#vision" ? NEPED_ENERGY_PATHS.about : NEPED_PATHS.about;
  return <Navigate to={`${target}${hash}`} replace />;
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Shared */}
          <Route index element={<HomePage />} />
          <Route path={SHARED_PATHS.landingPreview} element={<LandingPage />} />
          <Route path={SHARED_PATHS.blog} element={<BlogPage />} />
          <Route path="blog/:idOrSlug" element={<BlogDetailPage />} />
          <Route path={SHARED_PATHS.gallery} element={<GalleryPage />} />
          <Route path="gallery/:albumSlug" element={<GalleryAlbumDetailPage />} />

          {/* NEPED */}
          <Route path={NEPED_PATHS.home} element={<NepedEconomicPage />} />
          <Route path={NEPED_PATHS.about} element={<NepedAboutPage />} />
          <Route path={NEPED_PATHS.projects} element={<ProjectsPage />} />
          <Route path="neped/projects/:idOrSlug" element={<NepedProjectDetailPage />} />

          {/* NEPeD */}
          <Route path={NEPED_ENERGY_PATHS.home} element={<NepedEnergyPage />} />
          <Route path={NEPED_ENERGY_PATHS.about} element={<NepedEnergyAboutPage />} />
          <Route path={NEPED_ENERGY_PATHS.technology} element={<TechnologyPage />} />
          <Route path="neped-energy/technology/:slug" element={<TechProductDetailPage />} />
          <Route path={NEPED_ENERGY_PATHS.impact} element={<NepedEnergyImpactPage />} />

          {/* Legacy URLs → new locations */}
          <Route path="about" element={<LegacyAboutRedirect />} />
          <Route path="neped-economic" element={<LegacyRedirect to={NEPED_PATHS.home} />} />
          <Route path="projects" element={<LegacyRedirect to={NEPED_PATHS.projects} />} />
          <Route path="neped-projects" element={<LegacyRedirect to={NEPED_PATHS.projects} />} />
          <Route path="neped-economic/projects" element={<LegacyRedirect to={NEPED_PATHS.projects} />} />
          <Route path="neped-economic/project/:idOrSlug" element={<LegacyRedirect to={(p) => NEPED_PATHS.project(p.idOrSlug!)} />} />
          <Route path="neped-economic/projects/:idOrSlug" element={<LegacyRedirect to={(p) => NEPED_PATHS.project(p.idOrSlug!)} />} />
          <Route path="clean-energy" element={<LegacyRedirect to={NEPED_ENERGY_PATHS.home} />} />
          <Route path="technology" element={<LegacyRedirect to={NEPED_ENERGY_PATHS.technology} />} />
          <Route path="ceres" element={<LegacyRedirect to={NEPED_ENERGY_PATHS.technology} />} />
          <Route path="technology/product/:slug" element={<LegacyRedirect to={(p) => NEPED_ENERGY_PATHS.product(p.slug!)} />} />
          <Route path="technology/:slug" element={<LegacyRedirect to={(p) => NEPED_ENERGY_PATHS.product(p.slug!)} />} />
          <Route path="products/:slug" element={<LegacyRedirect to={(p) => NEPED_ENERGY_PATHS.product(p.slug!)} />} />
        </Route>
      </Routes>
    </Router>
  );
}
