import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadAllBlogs } from "@/lib/contentLoader";
import { type BlogPostData } from "@/data/blogData";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/AkerPrimitives";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    document.title = "Field Reports & Stories • NEPED & NEPeD Energy";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = ["All", "Technology", "Field Reports", "Community", "Policy"];

  const allPosts = loadAllBlogs();
  const filteredPosts: BlogPostData[] =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED HERO */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/52 NEPeD members at Nagaland Youth Summit 2016.jpg"
            alt="Youth Summit & Field Stories"
            className="w-full h-full object-cover opacity-50 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        <div className="relative z-10 pt-16 sm:pt-20 max-w-[500px]">
          <SectionLabel dark={true} className="mb-2">
            01 / Editorial & Field Logs
          </SectionLabel>
          <h1 className="text-[36px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-tight">
            Stories & Field Reports
          </h1>
          <p className="mt-4 text-[15px] text-[#e5e4e4]/80 leading-relaxed">
            Dispatches from remote Himalayan villages, engineering breakthroughs, and community energy chronicles.
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/70">
          <span>Field Archives • Technical Whitepapers • Village Chronicles</span>
          <a href="#feed" className="hover:text-white transition-colors">
            Browse Articles ↓
          </a>
        </div>
      </section>

      {/* 2. CATEGORY PILL FILTER */}
      <section id="feed" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#e5e4e4] pb-6 mb-10">
          <div>
            <SectionLabel>Curated Archive</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Field Publications
            </SectionHeading>
          </div>

          {/* Pill category filter (1584px radius) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-[1584px] text-[13px] font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1c1c1c] text-[#ffffff]"
                    : "bg-[#e5e4e4]/60 text-[#000000] hover:bg-[#e5e4e4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. ARTICLES GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#000000] hover:shadow-xl cursor-pointer"
            >
              {/* 4:3 Photographic Thumbnail */}
              <div className="w-full aspect-[4/3] bg-[#070707] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="absolute top-3 left-3 text-[11px] font-medium bg-[#1c1c1c]/90 text-[#ffffff] px-2.5 py-1 rounded-[1584px] border border-white/10">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[12px] text-[#8d8d8d] mb-2 flex items-center justify-between font-mono">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] font-medium text-[#000000] tracking-tight group-hover:text-[#b75928] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-[#666666] mt-3 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#e5e4e4] flex items-center justify-between">
                  <div className="text-[12px]">
                    <span className="font-medium text-[#000000] block">{post.author.name}</span>
                    <span className="text-[#8d8d8d]">{post.author.role}</span>
                  </div>
                  <span className="text-[13px] text-[#000000] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
