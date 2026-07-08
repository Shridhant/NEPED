

function VoltzMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-extrabold tracking-tight ${className}`}>
      NEPeD
      <svg viewBox="0 0 24 28" className="ml-0.5 h-[0.85em] w-auto" fill="currentColor" aria-hidden>
        <path d="M14 0 0 16h8L4 28 24 10h-9l3-10z" />
      </svg>
    </span>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-xs text-white/50">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-white/85">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-white transition-colors duration-150">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="mt-6 overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <VoltzMark className="text-5xl sm:text-6xl" />
          <p className="mt-10 text-xs text-white/60">About NEPeD</p>
          <p className="mt-2 max-w-sm text-sm text-white/80">
            Nagaland Empowerment of People through Energy Development — an independent society formed
            in 2007 to deliver clean, green and affordable energy to rural communities.
          </p>
        </div>
        <FooterCol title="Organisation" items={["About NEPeD", "Mandate", "MoU — NagaEd", "Annual Reports"]} />
        <FooterCol title="Technology" items={["Hydrogers", "Electronic Load Controllers", "Micro-grids"]} />
        <FooterCol title="Get in Touch" items={["Kohima, Nagaland", "Contact Form"]} />
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
        <span>© 2026 NEPeD — Nagaland Empowerment of People through Energy Development</span>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors duration-150">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
