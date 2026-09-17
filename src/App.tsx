import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { TechProductDetailPage } from "./pages/TechProductDetailPage";
import { ImpactPage } from "./pages/ImpactPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { NepedEconomicPage } from "./pages/NepedEconomicPage";
import { NepedProjectDetailPage } from "./pages/NepedProjectDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { EnergyProjectsPage } from "./pages/EnergyProjectsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { GalleryAlbumDetailPage } from "./pages/GalleryAlbumDetailPage";
import { NepedEnergyPage } from "./pages/NepedEnergyPage";

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

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="neped-energy" element={<NepedEnergyPage />} />
          <Route path="neped" element={<NepedEnergyPage />} />
          <Route path="clean-energy" element={<NepedEnergyPage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="ceres" element={<TechnologyPage />} />
          <Route path="technology/product/:slug" element={<TechProductDetailPage />} />
          <Route path="technology/:slug" element={<TechProductDetailPage />} />
          <Route path="products/:slug" element={<TechProductDetailPage />} />
          <Route path="energy-projects" element={<EnergyProjectsPage />} />
          <Route path="technology/projects" element={<EnergyProjectsPage />} />
          <Route path="neped-energy-projects" element={<EnergyProjectsPage />} />
          <Route path="neped-energy/projects" element={<EnergyProjectsPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:idOrSlug" element={<BlogDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:albumSlug" element={<GalleryAlbumDetailPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="neped-projects" element={<ProjectsPage />} />
          <Route path="neped-economic/projects" element={<ProjectsPage />} />
          <Route path="neped-economic" element={<NepedEconomicPage />} />
          <Route path="neped-economic/project/:idOrSlug" element={<NepedProjectDetailPage />} />
          <Route path="neped-economic/projects/:idOrSlug" element={<NepedProjectDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
