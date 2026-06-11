import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import built1 from "../../assets/about/facility1.png";
import built2 from "../../assets/about/facility2.png";
import built3 from "../../assets/about/facility3.png";

const SLIDES = [
  { id: "triveni-1", url: built1, alt: "Triveni Premium Showroom Display",     label: "Showroom" },
  { id: "triveni-2", url: built2, alt: "Exclusive Exotic Granite Collection",   label: "Granite Collection" },
  { id: "triveni-3", url: built3, alt: "Luxury Marble Architecture Suite",      label: "Marble Suite" },
];

const AUTOPLAY_INTERVAL = 4500;

const styles = `
  .af-section {
    background: #FAF8F5;
    padding: 80px 0 88px;
    overflow: hidden;
    user-select: none;
    font-family: 'Albert Sans', sans-serif;
  }

  /* ── Header ── */
  .af-header {
    max-width: 860px;
    margin: 0 auto 52px;
    text-align: center;
    padding: 0 24px;
  }
  .af-eyebrow {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.42em;
    text-transform: uppercase;
    color: #C8A96E;
    display: block;
    margin-bottom: 18px;
  }
  .af-heading {
    font-family: 'Obviously', 'Albert Sans', sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #1A1410;
    margin: 0 0 20px;
  }
  .af-heading em {
    font-style: italic;
    color: #C8A96E;
  }
  .af-rule {
    width: 40px;
    height: 1px;
    background: #C8A96E;
    opacity: 0.45;
    margin: 0 auto 20px;
  }
  .af-body {
    font-size: clamp(0.8125rem, 1.5vw, 0.9375rem);
    line-height: 1.8;
    color: #6B6460;
    max-width: 560px;
    margin: 0 auto;
    text-wrap: balance;
  }

  /* ── Stage ── */
  .af-stage {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
  }
  .af-track {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1360px;
    gap: clamp(10px, 1.5vw, 20px);
  }

  /* ── Slide cards ── */
  .af-slide {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 12px;
  }
  .af-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
  .af-slide--center {
    width: 58%;
    aspect-ratio: 16/10;
    z-index: 20;
    box-shadow: 0 20px 60px rgba(26,20,16,0.18), 0 4px 16px rgba(26,20,16,0.08);
  }
  .af-slide--side {
    width: 19%;
    aspect-ratio: 3/4;
    z-index: 10;
  }
  .af-slide--side:hover .af-side-dim {
    opacity: 0.1;
  }
  .af-side-dim {
    position: absolute;
    inset: 0;
    background: #1A1410;
    opacity: 0.35;
    transition: opacity 0.4s ease;
  }

  /* ── Engraved slide counter — the signature element ── */
  .af-counter {
    position: absolute;
    bottom: 20px;
    left: 24px;
    display: flex;
    align-items: baseline;
    gap: 6px;
    pointer-events: none;
  }
  .af-counter-current {
    font-family: 'Obviously', 'Albert Sans', sans-serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 200;
    line-height: 1;
    color: rgba(255,255,255,0.9);
    letter-spacing: -0.02em;
  }
  .af-counter-sep {
    width: 28px;
    height: 1px;
    background: rgba(255,255,255,0.45);
    align-self: center;
    flex-shrink: 0;
  }
  .af-counter-total {
    font-family: 'Albert Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.55);
  }

  /* Slide label pill */
  .af-slide-label {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
    background: rgba(26,20,16,0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 5px 12px;
    border-radius: 4px;
    pointer-events: none;
  }

  /* ── Progress bar nav ── */
  .af-progress-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 38px;
    margin-top: 32px;
    padding: 0 24px;
  }
  .af-progress-btn {
    background: none;
    border: none;
    padding: 6px 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    min-width: 64px;
    max-width: 100px;
    flex: 1;
    outline: none;
  }
  .af-progress-btn:focus-visible .af-progress-track {
    box-shadow: 0 0 0 2px #C8A96E;
  }
  .af-progress-name {
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #B5ABA5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s ease;
  }
  .af-progress-btn[aria-current="true"] .af-progress-name {
    color: #1A1410;
  }
  .af-progress-track {
    width: 100%;
    height: 2px;
    background: #E8E0D8;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
  }
  .af-progress-fill {
    height: 100%;
    background: #C8A96E;
    border-radius: 2px;
    transform-origin: left;
  }

  @media (max-width: 640px) {
    .af-slide--center { width: 72%; aspect-ratio: 4/3; }
    .af-slide--side   { width: 12%; aspect-ratio: 2/3; }
    .af-counter-current { font-size: 1.75rem; }
    .af-slide-label { display: none; }
    .af-progress-name { display: none; }
    .af-progress-btn { min-width: 40px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .af-progress-fill { transition: none !important; }
  }
`;

export default function AboutFacility() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const nextSlideRef = useRef(null);
  const len = SLIDES.length;

  // Stable nextSlide via ref — avoids stale closure in interval
  nextSlideRef.current = () => setActiveIndex((i) => (i + 1) % len);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = setInterval(() => nextSlideRef.current(), AUTOPLAY_INTERVAL);
  }, [stopAutoPlay]);

  // Single stable effect — not re-triggered by activeIndex changes
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const goTo = (index) => {
    stopAutoPlay();
    setActiveIndex(index);
    // Resume autoplay after a manual interaction pause
    setTimeout(startAutoPlay, AUTOPLAY_INTERVAL * 1.5);
  };

  const getSlides = () => {
    const leftIdx  = (activeIndex - 1 + len) % len;
    const rightIdx = (activeIndex + 1) % len;
    return [
      { ...SLIDES[leftIdx],  pos: "side", absoluteIndex: leftIdx  },
      { ...SLIDES[activeIndex], pos: "center", absoluteIndex: activeIndex },
      { ...SLIDES[rightIdx], pos: "side", absoluteIndex: rightIdx },
    ];
  };

  const padded = (n) => String(n).padStart(2, "0");

  return (
    <>
      <style>{styles}</style>
      <section
        className="af-section"
        onMouseEnter={() => { setIsHovered(true); stopAutoPlay(); }}
        onMouseLeave={() => { setIsHovered(false); startAutoPlay(); }}
        aria-label="Triveni facility gallery"
      >
        {/* Header */}
        <div className="af-header">
          <span className="af-eyebrow">The Triveni Experience</span>
          <h2 className="af-heading">
            Timeless Stone.<br />
            <em>Exceptional Spaces.</em>
          </h2>
          <div className="af-rule" />
          <p className="af-body">
            Three decades of curating the world's finest granite, marble, quartz, and
            decorative surfaces — helping architects, designers, and homeowners build
            spaces that endure.
          </p>
        </div>

        {/* Stage */}
        <div className="af-stage">
          <div className="af-track">
            <AnimatePresence mode="popLayout" initial={false}>
              {getSlides().map((slide) => {
                const isCenter = slide.pos === "center";
                return (
                  <motion.div
                    key={slide.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: isCenter ? 1 : 0.7, scale: isCenter ? 1 : 0.97 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 160, damping: 28 }}
                    onClick={() => !isCenter && goTo(slide.absoluteIndex)}
                    className={isCenter ? "af-slide af-slide--center" : "af-slide af-slide--side"}
                    aria-label={isCenter ? undefined : `View: ${slide.alt}`}
                    role={isCenter ? undefined : "button"}
                    tabIndex={isCenter ? -1 : 0}
                    onKeyDown={(e) => e.key === "Enter" && !isCenter && goTo(slide.absoluteIndex)}
                  >
                    <img src={slide.url} alt={slide.alt} />

                    {/* Side dim overlay */}
                    {!isCenter && <div className="af-side-dim" aria-hidden="true" />}

                    {/* Engraved counter — signature element */}
                    {isCenter && (
                      <motion.div
                        className="af-counter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        aria-hidden="true"
                      >
                        <span className="af-counter-current">{padded(activeIndex + 1)}</span>
                        <span className="af-counter-sep" />
                        <span className="af-counter-total">{padded(len)}</span>
                      </motion.div>
                    )}

                    {/* Slide label */}
                    {isCenter && (
                      <motion.div
                        className="af-slide-label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        aria-hidden="true"
                      >
                        {slide.label}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress bar nav */}
        <div className="af-progress-row" role="tablist" aria-label="Gallery navigation">
          {SLIDES.map((slide, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={slide.id}
                className="af-progress-btn "
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "true" : "false"}
                aria-label={`Slide ${i + 1}: ${slide.label}`}
                onClick={() => goTo(i)}
              >
                <span className="af-progress-name">{slide.label}</span>
                <div className="af-progress-track">
                  <motion.div
                    className="af-progress-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={
                      isActive && !isHovered
                        ? { duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }
                        : { duration: 0.25, ease: "easeOut" }
                    }
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

            {/* OUR PROCESS SECTION */}
      <section className="bg-white border-b border-zinc-100 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-widest text-[#C8A96E] uppercase block mb-3">
                Our Workflow
              </span>
              <h2 className="text-3xl font-light tracking-tight text-zinc-950">
                From Quarry to Site
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-zinc-500 font-light text-sm max-w-md leading-relaxed">
                We maintain direct quality oversight at every juncture, ensuring your chosen blocks are processed exactly to dimensional specifications.
              </p>
            </div>
          </div>

          {/* Process Timeline Blocks */}
          <div className="max-w-4xl mx-auto space-y-0">
            {[
              {
                step: "01",
                title: "Selection",
                desc: "We inspect raw granite and natural stone blocks straight from trusted quarries, sorting them carefully by color uniformity, crystalline structure durability, and vein patterns."
              },
              {
                step: "02",
                title: "Quality Inspection",
                desc: "Each individual slab undergoes thorough density testing and surface anomaly scans. We filter out hairline fractures or foundational structural shifts before cutting begins."
              },
              {
                step: "03",
                title: "Processing",
                desc: "Using precision milling machinery, the raw stone is slabbed to your specified thicknesses and treated with accurate edge-profiling or polish calibrations."
              },
              {
                step: "04",
                title: "Packaging",
                desc: "Finished surfaces are wrapped securely in customized shock-absorbent materials and loaded into heavy-duty reinforced A-frame wooden crates to completely avoid on-road chipping."
              },
              {
                step: "05",
                title: "Delivery",
                desc: "Your secure crate bundles are dispatched through specialized freight carriers directly to your site or showroom warehouse, fully tracked along the transit route."
              }
            ].map((item, index, arr) => (
              <div key={index} className="group relative grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 pb-12 sm:pb-16">
                
                {/* Structural Timeline Vertical Rule Line */}
                {index !== arr.length - 1 && (
                  <div className="absolute left-[15px] sm:left-auto sm:right-[15px] top-8 bottom-0 w-[1px] bg-zinc-200 pointer-events-none group-hover:bg-zinc-400 transition-colors hidden sm:block" />
                )}

                {/* Step Indices Tag */}
                <div className="sm:col-span-2 flex sm:justify-end items-start pt-1">
                  <span className="text-xs font-mono tracking-widest text-zinc-400 font-bold bg-[#fcfbf9] px-2 py-1 rounded border border-zinc-200/60 sm:border-none">
                    {item.step}
                  </span>
                </div>

                {/* Core Context Block */}
                <div className="sm:col-span-10 pl-4 sm:pl-0 border-l sm:border-none border-zinc-200">
                  <h3 className="text-lg font-normal text-zinc-950 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}