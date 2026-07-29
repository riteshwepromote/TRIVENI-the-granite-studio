import React from "react";

/* ==========================================================================
   SHARED EDITORIAL PIECES
   Small building blocks reused across the seven chapter layouts. Keeping
   them here avoids duplicating the same JSX (year pill, eyebrow, etc.)
   in every layout variant below.
   ========================================================================== */

export function ChapterIndex({ id, total = "07" }) {
  return (
    <span className="font-number text-xs tracking-[0.3em] text-secondary">
      {id} <span className="text-accent">/</span> {total}
    </span>
  );
}

export function YearPill({ year }) {
  return (
    <div className="inline-flex items-center rounded-full border border-brand bg-brand px-4 py-1.5">
      <span className="font-number text-sm tracking-[0.08em] text-accent">
        {year}
      </span>
    </div>
  );
}

/* tone: "outline" (navy blueprint stroke), "solid" (terracotta fill),
   "faded" (quiet stone-grey fill) — the giant year is a recurring
   typographic signature, never decoration alone. */
export function GiantYear({ year, className = "", tone = "outline" }) {
  const toneClass =
    tone === "outline"
      ? "text-transparent [-webkit-text-stroke:1px_var(--color-primary-light)]"
      : tone === "solid"
      ? "text-accent"
      : "text-[var(--border-medium)]";

  return (
    <span
      aria-hidden="true"
      className={`chapter-year-giant font-number select-none pointer-events-none leading-none ${toneClass} ${className}`}
    >
      {year}
    </span>
  );
}

export function Eyebrow({ children }) {
  return (
    <h4 className="font-ui text-[11px] md:text-xs tracking-[0.16em] uppercase text-secondary mb-3">
      {children}
    </h4>
  );
}

export function ChapterTitle({ children, size = "text-3xl md:text-5xl" }) {
  return (
    <h3
      className={`chapter-title font-heading ${size} text-primary leading-[1.1] mb-4`}
    >
      {children}
    </h3>
  );
}

export function ChapterDesc({ children }) {
  return (
    <p className="chapter-desc font-body text-sm md:text-base text-secondary leading-relaxed max-w-md">
      {children}
    </p>
  );
}

/* ==========================================================================
   LAYOUT 01 — DELHI, 1989 — "The Foundation"
   Large landscape image, editorial card floats off its lower edge.
   ========================================================================== */

export function LayoutFoundation({ chapter, id }) {
  return (
    <div className="max-w-[1400px] mx-auto relative pb-20 md:pb-28">
      <div className="flex items-baseline justify-between mb-6 px-1">
        <Eyebrow>{chapter.location}</Eyebrow>
        <ChapterIndex id={id} />
      </div>

      <div className="chapter-image-wrap relative w-full h-[58vh] md:h-[76vh] rounded-editorial overflow-hidden shadow-card">
        <img
          src={chapter.bgImage}
          alt={chapter.title}
          loading="lazy"
          decoding="async"
          className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
        />
      </div>

      <GiantYear
        year={chapter.year}
        tone="outline"
        className="absolute -top-6 md:-top-10 right-2 md:right-8 text-[18vw] md:text-[8vw] -z-10"
      />

      <div className="chapter-card absolute left-4 right-4 md:right-auto md:left-12 -bottom-8 md:-bottom-14 md:w-[420px] bg-card rounded-editorial shadow-card p-7 md:p-10">
        <YearPill year={chapter.year} />
        <div className="mt-5">
          <ChapterTitle size="text-2xl md:text-3xl">{chapter.title}</ChapterTitle>
          <ChapterDesc>{chapter.description}</ChapterDesc>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   LAYOUT 02 — KATHMANDU, 1992 — "Crossing Borders"
   Text column left, tall portrait image right.
   ========================================================================== */

export function LayoutPortraitRight({ chapter, id }) {
  return (
    <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 md:gap-14 items-center px-1">
      <div className="chapter-card md:col-span-5 order-2 md:order-1">
        <div className="flex items-center gap-4 mb-6">
          <YearPill year={chapter.year} />
          <ChapterIndex id={id} />
        </div>
        <Eyebrow>{chapter.location}</Eyebrow>
        <ChapterTitle>{chapter.title}</ChapterTitle>
        <ChapterDesc>{chapter.description}</ChapterDesc>
      </div>

      <div className="md:col-span-7 order-1 md:order-2 relative">
        <div className="chapter-image-wrap relative w-full h-[55vh] md:h-[82vh] rounded-editorial overflow-hidden shadow-card">
          <img
            src={chapter.bgImage}
            alt={chapter.title}
            loading="lazy"
            decoding="async"
            className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
          />
        </div>
        <GiantYear
          year={chapter.year}
          tone="faded"
          className="absolute -bottom-8 -left-6 md:-left-12 text-[16vw] md:text-[7vw] -z-10"
        />
      </div>
    </div>
  );
}

/* ==========================================================================
   LAYOUT 03 — ABU ROAD, 1994 — "Closer to the Source"
   Panoramic full-width image, giant year overlapping its top edge,
   editorial caption bar (like a wall label) set below.
   ========================================================================== */

export function LayoutPanoramic({ chapter, id }) {
  return (
    <div className="max-w-[1500px] mx-auto px-1">
      <div className="relative">
        <GiantYear
          year={chapter.year}
          tone="outline"
          className="absolute -top-10 md:-top-16 left-6 md:left-16 text-[20vw] md:text-[9vw] z-10"
        />
        <div className="chapter-image-wrap relative w-full h-[42vh] md:h-[58vh] rounded-editorial overflow-hidden shadow-card">
          <img
            src={chapter.bgImage}
            alt={chapter.title}
            loading="lazy"
            decoding="async"
            className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
          />
        </div>
      </div>

      <div className="chapter-card mt-8 md:mt-10 grid md:grid-cols-12 gap-6 md:gap-10 border-t border-brand pt-8">
        <div className="md:col-span-4 flex items-center gap-4">
          <ChapterIndex id={id} />
          <Eyebrow>{chapter.location}</Eyebrow>
        </div>
        <div className="md:col-span-8">
          <ChapterTitle size="text-2xl md:text-4xl">{chapter.title}</ChapterTitle>
          <ChapterDesc>{chapter.description}</ChapterDesc>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   LAYOUT 04 — DELHI, 2005 — "Expanding the Experience"
   Two-column collage: large image + small supporting image, floating year.
   ========================================================================== */

export function LayoutCollage({ chapter, id }) {
  return (
    <div className="max-w-[1400px] mx-auto px-1">
      <div className="grid grid-cols-12 gap-4 md:gap-6 relative">
        <div className="chapter-image-wrap col-span-8 relative h-[42vh] md:h-[60vh] rounded-editorial overflow-hidden shadow-card">
          <img
            src={chapter.bgImage}
            alt={chapter.title}
            loading="lazy"
            decoding="async"
            className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
          />
        </div>
        <div className="chapter-image-wrap col-span-4 relative h-[42vh] md:h-[60vh] rounded-editorial overflow-hidden shadow-card self-end">
          <img
            src={chapter.secondaryImage || chapter.bgImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
          />
        </div>

        <div className="chapter-card absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 md:left-[62%] md:translate-x-0 bg-card shadow-card rounded-full px-6 py-3">
          <span className="font-number text-lg text-accent tracking-[0.06em]">
            {chapter.year}
          </span>
        </div>
      </div>

      <div className="chapter-card mt-8 md:mt-12 max-w-2xl">
        <div className="flex items-center gap-4 mb-3">
          <ChapterIndex id={id} />
          <Eyebrow>{chapter.location}</Eyebrow>
        </div>
        <ChapterTitle>{chapter.title}</ChapterTitle>
        <ChapterDesc>{chapter.description}</ChapterDesc>
      </div>
    </div>
  );
}

/* ==========================================================================
   LAYOUT 05 — ABU ROAD, 2017 — "Scaling Excellence"
   Massive image with a small, compact information block in the corner.
   ========================================================================== */

export function LayoutMassiveImage({ chapter, id }) {
  return (
    <div className="max-w-[1500px] mx-auto px-1 relative">
      <div className="chapter-image-wrap relative w-full h-[70vh] md:h-[92vh] rounded-editorial overflow-hidden shadow-card">
        <img
          src={chapter.bgImage}
          alt={chapter.title}
          loading="lazy"
          decoding="async"
          className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
        />
        <GiantYear
          year={chapter.year}
          tone="outline"
          className="absolute inset-0 flex items-center justify-center text-[26vw] md:text-[16vw] opacity-50"
        />
      </div>

      <div className="chapter-card absolute right-4 bottom-4 md:right-10 md:bottom-10 w-[calc(100%-2rem)] md:w-[340px] bg-[var(--bg-card)]/95 backdrop-blur rounded-editorial shadow-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-3">
          <ChapterIndex id={id} />
          <span className="font-number text-sm text-accent">{chapter.year}</span>
        </div>
        <Eyebrow>{chapter.location}</Eyebrow>
        <ChapterTitle size="text-xl md:text-2xl">{chapter.title}</ChapterTitle>
        <ChapterDesc>{chapter.description}</ChapterDesc>
      </div>
    </div>
  );
}

/* ==========================================================================
   LAYOUT 06 — MOHALI, 2022 — "Bringing Luxury Closer"
   Magazine whitespace; the image bleeds past the container's right edge.
   ========================================================================== */

export function LayoutBleed({ chapter, id }) {
  return (
    <div className="relative">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center px-1">
        <div className="chapter-card md:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <ChapterIndex id={id} />
            <YearPill year={chapter.year} />
          </div>
          <Eyebrow>{chapter.location}</Eyebrow>
          <ChapterTitle>{chapter.title}</ChapterTitle>
          <ChapterDesc>{chapter.description}</ChapterDesc>
        </div>

        <div className="md:col-span-8 relative">
          <div className="chapter-image-wrap relative w-full h-[50vh] md:h-[70vh] md:rounded-l-editorial rounded-editorial md:rounded-r-none overflow-hidden shadow-card md:mr-[-6vw] lg:mr-[-9vw]">
            <img
              src={chapter.bgImage}
              alt={chapter.title}
              loading="lazy"
              decoding="async"
              className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   LAYOUT 07 — DUBAI, 2025 — "Global Horizons"
   The most dramatic beat: near-fullscreen image, monumental display type.
   ========================================================================== */

export function LayoutFinaleChapter({ chapter, id }) {
  return (
    <div className="max-w-[1600px] mx-auto px-1 relative">
      <div className="chapter-image-wrap relative w-full h-[80vh] md:h-[96vh] rounded-editorial overflow-hidden shadow-card">
        <img
          src={chapter.bgImage}
          alt={chapter.title}
          loading="lazy"
          decoding="async"
          className="chapter-image absolute inset-0 w-full h-[130%] object-cover will-change-transform"
        />
      </div>

      <div className="chapter-card absolute inset-x-0 bottom-0 p-6 md:p-16">
        <div className="flex items-center gap-4 mb-4">
          <ChapterIndex id={id} />
          <YearPill year={chapter.year} />
        </div>
        <h4 className="font-ui text-[11px] md:text-xs tracking-[0.16em] uppercase text-inverse opacity-80 mb-3">
          {chapter.location}
        </h4>
        <h3 className="font-heading text-[13vw] md:text-[7vw] leading-[0.95] text-inverse mb-4">
          {chapter.title}
        </h3>
        <p className="font-body text-sm md:text-lg text-inverse opacity-80 max-w-xl">
          {chapter.description}
        </p>
      </div>
    </div>
  );
}

/* Map each chapter (by index) to its layout component, in the exact
   sequence specified for the seven chapters — no two consecutive
   sections repeat the same visual structure. */
export const chapterLayouts = [
  LayoutFoundation,
  LayoutPortraitRight,
  LayoutPanoramic,
  LayoutCollage,
  LayoutMassiveImage,
  LayoutBleed,
  LayoutFinaleChapter,
];