import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { ImpactPage } from "./pages/ImpactPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { NepedEconomicPage } from "./pages/NepedEconomicPage";
import { NepedProjectDetailPage } from "./pages/NepedProjectDetailPage";
import { GalleryPage } from "./pages/GalleryPage";
import { GalleryAlbumDetailPage } from "./pages/GalleryAlbumDetailPage";

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
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:idOrSlug" element={<BlogDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:albumSlug" element={<GalleryAlbumDetailPage />} />
          <Route path="neped-economic" element={<NepedEconomicPage />} />
          <Route path="neped-economic/project/:idOrSlug" element={<NepedProjectDetailPage />} />
          <Route path="neped-economic/projects/:idOrSlug" element={<NepedProjectDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
