import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loadAllBlogs } from "@/lib/contentLoader";
import { type BlogPostData } from "@/data/shared/blogData";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/AkerPrimitives";
import { NEPED_ENERGY_PATHS, SHARED_PATHS } from "@/routes/paths";

export function BlogDetailPage() {
  const { idOrSlug } = useParams<{ idOrSlug: string }>();

  const post: BlogPostData | undefined = loadAllBlogs().find(
    (p) => p.slug === idOrSlug || p.id === idOrSlug
  );

  useEffect(() => {
    if (post) {
      document.title = `${post.title} • NEPeD Field Reports`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="mx-auto max-w-[800px] px-6 py-28 text-center space-y-6">
        <span className="text-[12px] font-mono uppercase text-[#8d8d8d]">
          404 • Article Not Found
        </span>
        <h1 className="text-[32px] font-light text-[#000000]">
          Field Report Record Unavailable
        </h1>
        <p className="text-[15px] text-[#666666]">
          The article or field report you requested could not be located in the publication index.
        </p>
        <div className="pt-4">
          <Link
            to={SHARED_PATHS.blog}
            className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#ffffff] px-6 py-3 rounded-full text-[14px] hover:bg-[#070707] transition-all"
          >
            ← Return to All Stories & Reports
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent posts
  const allPosts = loadAllBlogs();
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* 1. BREADCRUMBS & TOP BAR */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e4e4] pb-4">
          <div className="flex items-center gap-2 text-[12px] text-[#8d8d8d] font-mono">
            <Link to="/" className="hover:text-[#000000] transition-colors">
              NEPeD
            </Link>
            <span>/</span>
            <Link to={SHARED_PATHS.blog} className="hover:text-[#000000] transition-colors">
              Stories & Reports
            </Link>
            <span>/</span>
            <span className="text-[#000000] font-medium truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </div>

          <Link
            to={SHARED_PATHS.blog}
            className="text-[12px] text-[#b75928] hover:text-[#000000] font-medium flex items-center gap-1 transition-colors"
          >
            <span>← All Stories & Reports</span>
          </Link>
        </div>
      </section>

      {/* 2. EDITORIAL ARTICLE HERO */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono uppercase bg-[#b75928] text-white px-2.5 py-1 rounded-[4px] font-semibold">
                {post.category}
              </span>
              <span className="text-[12px] font-mono text-[#8d8d8d]">
                {post.date} • {post.readTime}
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[46px] md:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              {post.title}
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#e5e4e4]/90 font-light leading-relaxed">
              {post.summary}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] border-t border-white/10 text-[#8d8d8d]">
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Published By</span>
                <span className="text-[#ffffff] font-medium">{post.author.name}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Division</span>
                <span className="text-[#ffffff] font-medium">{post.author.role}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8d8d8d]">Document ID</span>
                <span className="text-[#ffffff] font-medium font-mono">NEPED-DOC-{post.id.padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. HERO IMAGE DISPLAY */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="aspect-[16/9] w-full rounded-[8px] overflow-hidden bg-[#070707] border border-[#e5e4e4] shadow-md relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white text-[12px] font-mono">
            <span>Archival Field Reference: {post.title}</span>
          </div>
        </div>
      </motion.section>

      {/* 4. IN-DEPTH ARTICLE BODY & SIDEBAR */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Text */}
          <div className="lg:col-span-8 space-y-10">
            {/* Lead Intro */}
            <div className="prose prose-lg text-[#262626]">
              <p className="font-serif italic text-[19px] sm:text-[21px] leading-[1.5] text-[#1c1c1c] font-normal border-l-2 border-[#b75928] pl-5 py-1">
                {post.content.intro}
              </p>
            </div>

            {/* Structured Sections */}
            <div className="space-y-10 pt-4">
              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-[24px] sm:text-[28px] font-light text-[#000000] tracking-tight leading-snug">
                    {sec.heading}
                  </h2>

                  <div className="space-y-4 text-[16px] sm:text-[17px] text-[#333333] leading-relaxed">
                    {sec.body.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {sec.highlightQuote && (
                    <div className="my-6 p-6 bg-[#e5e4e4]/30 border-l-2 border-[#1c1c1c] rounded-r-[6px]">
                      <blockquote className="font-serif italic text-[17px] text-[#000000] leading-relaxed">
                        “{sec.highlightQuote}”
                      </blockquote>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Key Field Takeaways Box */}
            <div className="bg-[#121f1a] text-[#ffffff] border border-[#193f32] rounded-[8px] p-6 sm:p-8 space-y-4 mt-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#b75928]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/80">
                  Summary & Key Takeaways
                </span>
              </div>
              <h3 className="text-[20px] font-medium text-[#ffffff] tracking-tight">
                Core Findings & Field Implications
              </h3>
              <div className="space-y-3 pt-2">
                {post.content.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-white/10 text-white text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                      {tIdx + 1}
                    </span>
                    <p className="text-[14px] text-[#e5e4e4] leading-relaxed">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-[#e5e4e4] flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-mono text-[#8d8d8d] mr-2">Tagged:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] bg-[#e5e4e4]/60 text-[#333333] px-3 py-1 rounded-[1584px] font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-4 space-y-6">
            {/* Author Profile Card */}
            <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 space-y-4">
              <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block border-b border-[#e5e4e4] pb-2">
                Author & Contributor
              </span>
              <div>
                <h4 className="text-[17px] font-medium text-[#000000]">
                  {post.author.name}
                </h4>
                <p className="text-[13px] text-[#8d8d8d] mt-0.5">
                  {post.author.role}
                </p>
              </div>
              <p className="text-[13px] text-[#666666] leading-relaxed pt-1">
                Field documentation division responsible for tracking micro-hydro telemetry, watershed conservation protocols, and community livelihood impacts across Nagaland.
              </p>
            </div>

            {/* Technology Nexus Card */}
            <div className="bg-[#002934] text-[#ffffff] rounded-[8px] p-6 space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#e5e4e4]/70 block">
                Related Technology
              </span>
              <h4 className="text-[17px] font-light text-[#ffffff]">
                Explore Hydroger Turbines & ELC Systems
              </h4>
              <p className="text-[12px] text-[#e5e4e4]/80 leading-relaxed">
                Learn how indigenous 3kW Turgo impulse runners generate clean power from mountain streams.
              </p>
              <div className="pt-2">
                <Link
                  to={NEPED_ENERGY_PATHS.technology}
                  className="text-[12px] text-[#ffffff] underline font-medium hover:text-[#b75928] transition-colors"
                >
                  View Technical Specifications →
                </Link>
              </div>
            </div>

            {/* Share / Secretariat Inquiries */}
            <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block">
                Editorial Inquiries
              </span>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                For research citations, data requests, or republishing permissions, contact the NEPeD Directorate.
              </p>
              <a
                href="mailto:nepednagaland@gmail.com?subject=Inquiry%20Regarding%20Article%20"
                className="text-[13px] text-[#b75928] hover:text-[#000000] font-medium block transition-colors"
              >
                nepednagaland@gmail.com ↗
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. PREVIOUS / NEXT ARTICLE PAGINATION */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border-t border-b border-[#e5e4e4] py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevPost ? (
            <Link
              to={SHARED_PATHS.blogPost(prevPost.slug)}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                ← Previous Field Report
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {prevPost.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              to={SHARED_PATHS.blogPost(nextPost.slug)}
              className="group p-4 rounded-[6px] hover:bg-[#e5e4e4]/20 transition-colors sm:text-right"
            >
              <span className="text-[11px] font-mono text-[#8d8d8d] block mb-1">
                Next Field Report →
              </span>
              <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                {nextPost.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.section>

      {/* 6. RELATED ARTICLES GRID */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionLabel>Field Publications</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Explore More Stories & Reports
            </SectionHeading>
          </div>
          <Link to={SHARED_PATHS.blog} className="text-[13px] text-[#b75928] hover:text-[#000000] font-medium">
            View All Reports →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              to={SHARED_PATHS.blogPost(rel.slug)}
              className="group bg-[#ffffff] border border-[#e5e4e4] hover:border-[#000000] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-200"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#070707] relative">
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-2 left-2 text-[10px] font-mono bg-black/70 text-white px-2 py-0.5 rounded-[3px]">
                  {rel.category}
                </span>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-mono text-[#8d8d8d] mb-1">
                  {rel.date} • {rel.readTime}
                </div>
                <h4 className="text-[16px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-[12px] text-[#666666] mt-1.5 line-clamp-2">
                  {rel.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
