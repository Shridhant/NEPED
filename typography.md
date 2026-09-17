# Typography & Fonts

Reference for the type system used across the Vibrate frontend. Source of truth: [`index.html`](../index.html), [`tailwind.config.ts`](../tailwind.config.ts), [`src/index.css`](../src/index.css).

## Font families

Loaded via Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Fraunces:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
```

Mapped in `tailwind.config.ts` → `theme.extend.fontFamily`:

| Tailwind class | Stack | Notes |
|---|---|---|
| `font-sans` (default) | `Geist, ui-sans-serif, system-ui, sans-serif` | Base UI font. Applied globally on `body`. Weights loaded: 300, 400, 500, 600, 700, 800. |
| `font-geist` | `Geist, ui-sans-serif, system-ui, sans-serif` | Explicit alias for `font-sans`. |
| `font-serif` | `"Instrument Serif", Fraunces, Times, serif` | Editorial/display accent font — used sparingly, always with `italic`. |
| `font-instrument` | `"Instrument Serif", Times, serif` | Same as above without the Fraunces fallback. |

**Geist** is the workhorse for nearly all UI text (headings, body, labels, buttons). **Instrument Serif** (italic) is a deliberate accent reserved for a few "editorial" moments — the hero headline, a pull-quote line, and a couple of dashboard widget titles — to give the otherwise clean sans-serif UI a literary, human touch.

## Global defaults (`src/index.css`)

```css
body {
  @apply bg-background text-foreground font-sans;
}

h1, h2, h3 {
  @apply font-sans tracking-tight;
}
```

Headings are `font-sans` by default; serif is opted into explicitly per-component, not inherited.

## Type scale in practice

The codebase doesn't define custom Tailwind font-size tokens — it composes the default Tailwind scale directly, responsively, per breakpoint. Observed conventions:

### Hero / display headline
Largest text on the site, in `Hero.tsx`:

```tsx
// Line 1 — serif, italic accent
<span className="block font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.08] text-zinc-900 dark:text-zinc-50">

// Line 2 — sans, tight tracking
<span className="block font-sans font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.14] text-zinc-900 dark:text-zinc-100 mt-1 sm:mt-2 tracking-[-0.03em]">
```

### Page / section H1
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
```

### Section H2 (most common heading pattern — repeated across ~8 components)
```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100">
```
Used in `CTA.tsx`, `CreatorShowcase.tsx`, `Features.tsx`, `HowItWorks.tsx`, `RippleSystem.tsx`, `ProblemSection.tsx`, `WhoItsFor.tsx`, `TheCircleSection.tsx`.

### Serif accent (editorial touches)
```tsx
<h3 className="font-serif italic text-3xl text-zinc-900 dark:text-zinc-100 leading-none">
<p className="text-sm italic font-serif text-zinc-500">
```

### Body / UI text
- `text-sm` and `text-xs` are the dominant sizes for UI copy, labels, and metadata (208 and 159 occurrences respectively) — this is a compact, information-dense UI.
- `text-base` / `text-lg` / `text-xl` for standard body copy and sub-headings.
- `leading-relaxed` is the default line-height choice for longer body paragraphs (71 occurrences).

## Font weights

| Class | Usage |
|---|---|
| `font-semibold` | Most common weight for headings and emphasis (130 occurrences) |
| `font-medium` | Common for labels, nav items, secondary emphasis (123 occurrences) |
| `font-normal` | Explicit reset, mostly on serif/display spans (88 occurrences) |
| `font-bold` | Page-level H1s and strong emphasis (61 occurrences) |

## Letter spacing & line height

| Class | Usage |
|---|---|
| `tracking-tight` | Default on all `h1/h2/h3` globally, plus ad-hoc on other headings |
| `tracking-[-0.02em]` / `tracking-[-0.03em]` | Custom tighter tracking on large display headings (hero, section H2s) |
| `tracking-wider` / `tracking-widest` | Uppercase eyebrow labels / badges |
| `leading-relaxed` | Body copy |
| `leading-none` / `leading-tight` / `leading-snug` | Tight headings and display text |

## Color pairing

Headings and body text typically pair `text-zinc-900 dark:text-zinc-100` (or `text-foreground` when using the design-system token), keeping typography color theme-aware rather than hardcoded.

## Guidelines for new components

1. Default to `font-sans` (Geist) for all UI text — don't set it explicitly, it's the `body` default.
2. Reserve `font-serif italic` for a single editorial accent per screen (hero line, pull-quote, a widget title) — not for general headings.
3. Follow the established H2 pattern for new section headings: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]`.
4. Use `text-foreground` / `text-muted-foreground` (design tokens) over raw `text-zinc-*` where possible for consistency, though both patterns currently coexist in the codebase.
5. Prefer `leading-relaxed` for paragraphs longer than one line.
