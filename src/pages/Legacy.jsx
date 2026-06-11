import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Mapped Assets
import delhiImg from "../assets/about/facility1.png";
import nepalImg from "../assets/about/facility2.png";
import rajasthanImg from "../assets/about/facility3.png";

const legacyMilestones = [  

  {
    id: "m-1989",
    year: "1989",
    location: "Delhi, India",
    title: "The Foundation Stone",
    description:
      "Triveni commenced its journey with a vision to introduce fine stone surfaces to India's capital, setting a foundational standard for premium sourcing.",
    image: delhiImg,
  },
  {
    id: "m-1992",
    year: "1992",
    location: "Kathmandu, Nepal",
    title: "Cross-Border Footprint",
    description:
      "Marking our first international expansion, establishing dedicated supply routes to support landmark architectural developments in Nepal.",
    image: nepalImg,
  },
  {
    id: "m-1994",
    year: "1994",
    location: "Abu Road, Rajasthan",
    title: "Strategic Industrial Hub",
    description:
      "Acquiring state-of-the-art facilities directly at the epicenter of India’s premier marble and granite reserves to unlock uncompromising quality control.",
    image: rajasthanImg,
  },
  {
    id: "m-2005",
    year: "2005",
    location: "New Outlet, Delhi",
    title: "Elevating Retail Experiences",
    description:
      "Inaugurating a state-of-the-art experiential studio in Delhi, redefining how architects and design connoisseurs interact with exotic materials.",
    image: delhiImg,
  },
  {
    id: "m-2017",
    year: "2017",
    location: "New Factory, Abu Road",
    title: "Next-Gen Automation",
    description:
      "Commissioning high-precision Italian machinery and automated polishing lines to dramatically amplify production scale and consistency.",
    image: rajasthanImg,
  },
  {
    id: "m-2022",
    year: "2022",
    location: "Mohali, India",
    title: "Expanding Regional Horizons",
    description:
      "Launching an expansive luxury gallery in Punjab to address the soaring demand for curated internal and external surface architecture.",
    image: nepalImg,
  },
  {
    id: "m-2025",
    year: "2025",
    location: "Dubai, UAE",
    title: "Global Horizon Hub",
    description:
      "Establishing an elite distribution pipeline and advisory suite in the Middle East, cementing Triveni as a globally trusted hallmark of luxury surfaces.",
    image: delhiImg,
  },
];

export default function Legacy() {
  const [activeYear, setActiveYear] = useState(legacyMilestones[0].year);
  const milestoneRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",  
      threshold: 0.1,
      
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const year = entry.target.getAttribute("data-year");
          if (year) setActiveYear(year);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const currentRefs = milestoneRefs.current;

    Object.values(currentRefs).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(currentRefs).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToMilestone = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="bg-[#FAF9F5] select-none font-sans text-[#141C3A]">
      {/* SECTION 1: CORE CHRONOLOGY (Your Layout With Fixed Left Sidebar) */}
      <section className="py-20 md:py-32 border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Locked Static Viewport Container */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-[calc(100vh-200px)] flex flex-col justify-between z-10">
            <div>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#B78A79] block mb-4">
                OUR LEGACY
              </span>
              <h2 className="text-4xl md:text-5xl font-light font-['Obviously',_sans-serif] tracking-tight leading-[1.1] mb-6">
                A Heritage <br className="hidden lg:block" /> Written in Stone
              </h2>
              <div className="w-16 h-[1px] bg-[#C48A54]/30 my-2" />
              <p className="text-sm leading-relaxed text-[#555555] max-w-md mt-4 opacity-90">
                From deep regional extraction roots to high-end global spaces,
                our decades of evolution represent an uncompromised commitment
                to sourcing, refining, and delivering earth's finest
                architecture materials.
              </p>
            </div>

            {/* Bottom Tracking Navigation Menu */}
            <div className="hidden lg:flex flex-col space-y-3.5 border-l border-neutral-200/60 pl-4 mt-8 pb-4">
              {legacyMilestones.map((m) => {
                const isActive = activeYear === m.year;
                return (
                  <button
                    key={`track-${m.year}`}
                    onClick={() => scrollToMilestone(m.id)}
                    className="flex items-center text-left group transition-all duration-300 outline-none w-max"
                  >
                    <span
                      className={`text-lg font-['Obviously',_sans-serif] font-light transition-all duration-300 tracking-wide
                        ${isActive ? "text-[#C58345] font-normal translate-x-1" : "text-[#141C3A]/30 group-hover:text-[#141C3A]/60"}
                      `}
                    >
                      {m.year}
                    </span>
                    <span
                      className={`ml-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300
                        ${isActive ? "text-[#141C3A] opacity-100 translate-x-1" : "opacity-0 text-transparent"}
                      `}
                    >
                      — {m.location.split(",")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Free-Scrolling Architectural Layout Stream */}
          <div className="lg:col-span-7 relative pl-0 md:pl-10 lg:pl-12 w-full">
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#C48A54]/40 via-[#C48A54]/10 to-transparent hidden md:block" />

            <div className="space-y-24 md:space-y-36 w-full">
              {legacyMilestones.map((milestone, idx) => (
                <motion.div
                  id={milestone.id}
                  key={`milestone-${idx}`}
                  ref={(el) => (milestoneRefs.current[milestone.year] = el)}
                  data-year={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 24 }}
                  className="relative flex flex-col items-start w-full group"
                >
                  <div
                    className={`absolute -left-[44px] top-2.5 w-2 h-2 rounded-full border z-10 transition-all duration-500 hidden md:block
                    ${activeYear === milestone.year ? "bg-[#C48A54] border-[#C48A54] scale-125 shadow-[0_0_8px_rgba(196,138,84,0.5)]" : "bg-white border-[#C48A54]/60"}
                  `}
                  />

                  <div className="w-full">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-3xl md:text-4xl font-light font-['Obviously',_sans-serif] text-[#C58345] tracking-tight">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#B78A79]/80">
                        {milestone.location}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-normal tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#C58345]">
                      {milestone.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#555555] leading-relaxed max-w-2xl opacity-90 mb-6 font-light">
                      {milestone.description}
                    </p>

                    {milestone.image && (
                      <div className="w-full aspect-[21/11] rounded-2xl overflow-hidden border border-black/[0.03] shadow-xs bg-neutral-100">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MATERIAL SOURCING ATLAS (ORGANIC INTERLOCKING GRID) */}
      <section className="py-24 md:py-36 bg-[#FCFBF7] border-b border-neutral-200/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="max-w-xl mb-16 md:mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B78A79] block mb-3">
              SOURCING PRINCIPLES
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-['Obviously',_sans-serif] tracking-tight leading-tight">
              Curated at <br /> the Absolute Source
            </h2>
            <div className="w-12 h-[1px] bg-[#C48A54]/40 mt-6" />
          </div>

          {/* Creative Asymmetrical Editorial Mosaic (Eliminates Bottom Empty Space) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* PHASE 01: Slim Left Column Anchor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-4 flex flex-col justify-between border-b border-neutral-200/60 pb-8 lg:pb-0 lg:border-b-0 lg:border-r lg:border-neutral-200/60 lg:pr-10 group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-['Obviously',_sans-serif] text-[#C48A54] tracking-widest uppercase font-light">
                    PHASE 01
                  </span>
                  <span className="text-4xl font-['Obviously',_sans-serif] font-extralight text-[#C48A54]/20 group-hover:text-[#C48A54]/40 transition-colors duration-300">
                    01
                  </span>
                </div>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/[0.02] shadow-xs bg-neutral-100">
                  <img
                    src={delhiImg}
                    alt="Direct Quarry Access"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-normal tracking-tight text-[#141C3A] group-hover:text-[#C58345] transition-colors duration-300">
                    Direct Quarry Access
                  </h3>
                  <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light opacity-90">
                    Bypassing intermediate logistics chains to hand-select raw
                    structural block compositions at primary global geological
                    layers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PHASE 02: Wide Center Landscape Bridge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.1,
              }}
              className="md:col-span-2 lg:col-span-8 flex flex-col justify-between group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-[#FAF9F5] p-6 lg:p-8 rounded-3xl border border-black/[0.01]">
                <div className="lg:col-span-7 w-full aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.02] shadow-xs bg-neutral-100 order-2 lg:order-1">
                  <img
                    src={nepalImg}
                    alt="Slab Curation Studio"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="lg:col-span-5 space-y-4 order-1 lg:order-2 lg:pl-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-['Obviously',_sans-serif] text-[#C48A54] tracking-widest uppercase font-light">
                      PHASE 02
                    </span>
                    <span className="text-4xl font-['Obviously',_sans-serif] font-extralight text-[#C48A54]/20 group-hover:text-[#C48A54]/40 transition-colors duration-300">
                      02
                    </span>
                  </div>
                  <h3 className="text-xl font-normal tracking-tight text-[#141C3A] group-hover:text-[#C58345] transition-colors duration-300">
                    Slab Curation Studio
                  </h3>
                  <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light opacity-90">
                    Every single inventory element passes exhaustive optical
                    checking loops under high-lux environments to verify
                    structural grain perfection.
                  </p>
                </div>
              </div>

              {/* PHASE 03: Embedded Bottom Row Extension (Perfectly takes up the remaining layout grid block space) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-8 pt-8 border-t border-neutral-200/60 w-full">
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-1">
                    <span className="text-xs font-['Obviously',_sans-serif] text-[#C48A54] tracking-widest uppercase font-light">
                      PHASE 03
                    </span>
                    <h3 className="text-xl font-normal tracking-tight text-[#141C3A] group-hover:text-[#C58345] transition-colors duration-300">
                      Elite Global Transport
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-5 text-xs md:text-sm text-[#555555] leading-relaxed font-light opacity-90">
                  Utilizing tailored luxury packing assemblies to ensure
                  large-format natural stone arrivals exhibit absolutely zero
                  microscopic fracturing.
                </div>

                <div className="lg:col-span-3 w-full aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden border border-black/[0.02] shadow-xs bg-neutral-100">
                  <img
                    src={rajasthanImg}
                    alt="Elite Global Transport"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE ARTISANAL STUDIO MANIFESTO (TYPOGRAPHIC LEDGER) */}
      <section className="py-24 md:py-36 bg-[#FAF9F5] border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT ASPECT: Core Statement Block */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-40">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B78A79] block">
                OUR MANIFESTO
              </span>
              <h2 className="text-3xl md:text-5xl font-light font-['Obviously',_sans-serif] text-[#141C3A] tracking-tight leading-[1.15]">
                Where Precision <br /> Meets Geological Time
              </h2>
              <div className="w-12 h-[1px] bg-[#C48A54]/40 my-4" />
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light opacity-90 max-w-sm">
                Nature spends millennia forming exotic marble matrices; we spend
                weeks mapping out sub-millimeter execution plans to turn organic
                earth into permanent architectural statements.
              </p>
            </div>

            {/* RIGHT ASPECT: High-End Technical Ledger Grid (Zero Wasted Space) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {[
                {
                  metric: "0.5mm",
                  label: "CALIBRATION TOLERANCE",
                  title: "Sub-Millimeter Execution",
                  desc: "Utilizing computer-controlled diamond wire saws and laser-guided positioning tracks to ensure cross-slab pattern continuity across wide floor alignments.",
                },
                {
                  metric: "36t",
                  label: "STRUCTURAL CAPACITY",
                  title: "Massive Block Processing",
                  desc: "Our industrial processing centers house raw, unrefined monolithic blocks directly from global veins, stabilizing materials before structural parsing begins.",
                },
                {
                  metric: "120x",
                  label: "OPTICAL INSPECTION",
                  title: "Chromatographic Consistency",
                  desc: "Every single parsed surface layout undergoes strict lux-grade analysis to filter micro-fractures and verify structural background tone harmony.",
                },
                {
                  metric: "100%",
                  label: "ARTISANAL OVERSEE",
                  title: "Human Calibrated Finish",
                  desc: "While automation handles raw volume, our seasoned surface masters hand-inspect and edge-treat each individual luxury specification piece.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between pt-6 border-t border-neutral-200/80 group hover:border-[#C48A54]/50 transition-colors duration-300 min-h-[180px]"
                >
                  <div>
                    {/* Data / Metric Row */}
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-3xl md:text-4xl font-light font-['Obviously',_sans-serif] text-[#C58345] tracking-tighter">
                        {item.metric}
                      </span>
                      <span className="text-[9px] font-bold tracking-widest text-[#B78A79] uppercase">
                        {item.label}
                      </span>
                    </div>

                    {/* Descriptive Content Area */}
                    <h3 className="text-base font-normal text-[#141C3A] tracking-tight mb-2 group-hover:text-[#C58345] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed font-light opacity-85">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE GLOBAL ARCHITECTURAL PIPELINE (ASYMMETRIC BRIEFING LEDGER) */}
      <section className="py-24 md:py-32  bg-[#141C3A] text-[#FAF9F5] rounded-t-[2rem] md:rounded-t-[3.5rem] relative overflow-hidden">
        {/* Subtle structural framing line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C48A54]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Premium Brand Imperative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#B78A79] block">
                ENGAGE OUR STUDIO
              </span>
              <h2 className="text-4xl md:text-6xl font-light font-['Obviously',_sans-serif] tracking-tight leading-[1.1] text-white">
                Ready to Carve <br /> Your Legacy?
              </h2>
              <div className="w-12 h-[1px] bg-[#C48A54]/40 my-4" />
              <p className="text-xs md:text-sm text-neutral-300/80 font-light max-w-md leading-relaxed">
                Partner with our private surface design advisory suites to
                secure exclusive, large-format monolithic slabs mapped exactly
                to your project's blueprint criteria.
              </p>
            </div>

            {/* RIGHT COLUMN: Minimalist Project Briefing Selector (Fills space with premium utility) */}
            <div className="lg:col-span-6 w-full lg:pt-4">
              <div className="border-t border-neutral-700/50 pt-8 space-y-8">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#B78A79] uppercase block mb-4">
                    SELECT YOUR PROJECT TYPOLOGY
                  </span>

                  {/* Minimalist interactive row buttons instead of basic form inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Luxury Residential",
                      "Commercial Landmark",
                      "Hospitality Environment",
                      "Bespoke Furniture / Accent",
                    ].map((type, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-5 py-3.5 rounded-xl border border-neutral-700/60 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#C58345] transition-all duration-300 text-xs tracking-wide text-neutral-200 font-light group flex items-center justify-between"
                      >
                        {type}
                        <span className="opacity-0 group-hover:opacity-100 text-[#C58345] transition-opacity duration-300 text-sm">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Trigger Anchor */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-neutral-700/30">
                  <div className="space-y-1">
                    <span className="text-[10px] text-neutral-400 font-light block">
                      DIRECT SUITE ACCESS
                    </span>
                    <span className="text-xs text-neutral-200 font-light">
                      consultancy@trivenistones.com
                    </span>
                  </div>

                  <button className="bg-[#C58345] hover:bg-[#B27337] text-white text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 shrink-0 text-center">
                    Initiate Briefing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // ─── Image imports ──────────────────────────────────────────────────────────
// import delhiImg     from "../assets/about/facility3.png";
// import nepalImg     from "../../assets/about/nepal.png";
// import rajasthanImg from "../../assets/about/rajasthan.png";

// // ─── Shared animation preset ─────────────────────────────────────────────────
// const fadeUp = (delay = 0) => ({
//   initial:    { opacity: 0, y: 28 },
//   whileInView:{ opacity: 1, y: 0  },
//   viewport:   { once: true, margin: "-80px" },
//   transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
// });

// // ─── Shared scoped styles ────────────────────────────────────────────────────
// const STYLES = `
//   /* Shared tokens */
//   .tgs-eyebrow {
//     font-size: 9px;
//     font-weight: 700;
//     letter-spacing: 0.42em;
//     text-transform: uppercase;
//     color: #C8A96E;
//     display: block;
//     margin-bottom: 14px;
//     font-family: 'Albert Sans', sans-serif;
//   }
//   .tgs-rule {
//     width: 40px;
//     height: 1px;
//     background: #C8A96E;
//     opacity: 0.4;
//     margin-top: 20px;
//     margin-bottom: 0;
//   }
//   .tgs-rule--light {
//     opacity: 0.25;
//     background: #F0EDE8;
//   }

//   /* ── Section 2: Sourcing Atlas ── */
//   .sa-section {
//     padding: 96px 0 104px;
//     background: #FCFBF8;
//     border-bottom: 1px solid rgba(0,0,0,0.06);
//     overflow: hidden;
//     font-family: 'Albert Sans', sans-serif;
//   }
//   .sa-inner {
//     max-width: 1280px;
//     margin: 0 auto;
//     padding: 0 clamp(24px, 5vw, 64px);
//   }
//   .sa-header {
//     max-width: 540px;
//     margin-bottom: clamp(48px, 8vw, 80px);
//   }
//   .sa-header h2 {
//     font-family: 'Obviously', 'Albert Sans', sans-serif;
//     font-size: clamp(2rem, 4vw, 3rem);
//     font-weight: 300;
//     line-height: 1.1;
//     letter-spacing: -0.01em;
//     color: #1A1410;
//     margin: 0 0 8px;
//   }
//   .sa-header h2 em {
//     font-style: italic;
//     color: #C8A96E;
//   }
//   .sa-header p {
//     font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
//     line-height: 1.8;
//     color: #7A706B;
//     margin: 16px 0 0;
//     max-width: 420px;
//   }

//   /* Three-card grid — equal peers */
//   .sa-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: clamp(20px, 3vw, 40px);
//     align-items: start;
//   }
//   @media (max-width: 900px) {
//     .sa-grid { grid-template-columns: 1fr; }
//   }
//   @media (min-width: 640px) and (max-width: 900px) {
//     .sa-grid { grid-template-columns: 1fr 1fr; }
//     .sa-card:last-child { grid-column: 1 / -1; }
//   }

//   .sa-card {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     cursor: pointer;
//   }
//   .sa-card-img {
//     width: 100%;
//     aspect-ratio: 4/3;
//     border-radius: 16px;
//     overflow: hidden;
//     background: #EDE9E3;
//   }
//   .sa-card:nth-child(2) .sa-card-img { aspect-ratio: 16/10; }
//   .sa-card-img img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.7s ease;
//     display: block;
//   }
//   .sa-card:hover .sa-card-img img { transform: scale(1.03); }

//   .sa-card-meta {
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//   }
//   .sa-card-label {
//     font-size: 9px;
//     font-weight: 700;
//     letter-spacing: 0.38em;
//     text-transform: uppercase;
//     color: #C8A96E;
//   }
//   .sa-card h3 {
//     font-family: 'Obviously', 'Albert Sans', sans-serif;
//     font-size: clamp(1.05rem, 1.8vw, 1.25rem);
//     font-weight: 300;
//     color: #1A1410;
//     margin: 0;
//     letter-spacing: -0.01em;
//     transition: color 0.3s ease;
//   }
//   .sa-card:hover h3 { color: #C8A96E; }
//   .sa-card p {
//     font-size: clamp(0.75rem, 1.2vw, 0.8125rem);
//     line-height: 1.75;
//     color: #7A706B;
//     margin: 2px 0 0;
//   }

//   /* ── Section 3: Manifesto ── */
//   .mf-section {
//     padding: 96px 0 104px;
//     background: #FAF8F5;
//     border-bottom: 1px solid rgba(0,0,0,0.06);
//     font-family: 'Albert Sans', sans-serif;
//   }
//   .mf-inner {
//     max-width: 1280px;
//     margin: 0 auto;
//     padding: 0 clamp(24px, 5vw, 64px);
//     display: grid;
//     grid-template-columns: 5fr 7fr;
//     gap: clamp(40px, 6vw, 80px);
//     align-items: start;
//   }
//   @media (max-width: 860px) {
//     .mf-inner { grid-template-columns: 1fr; }
//     .mf-sticky { position: static !important; }
//   }
//   .mf-sticky {
//     position: sticky;
//     top: 120px;
//   }
//   .mf-sticky h2 {
//     font-family: 'Obviously', 'Albert Sans', sans-serif;
//     font-size: clamp(2rem, 3.5vw, 3rem);
//     font-weight: 300;
//     color: #1A1410;
//     line-height: 1.1;
//     letter-spacing: -0.01em;
//     margin: 0 0 6px;
//   }
//   .mf-sticky h2 em { font-style: italic; color: #C8A96E; }
//   .mf-sticky p {
//     font-size: clamp(0.8125rem, 1.3vw, 0.9375rem);
//     line-height: 1.8;
//     color: #7A706B;
//     max-width: 340px;
//     margin: 16px 0 0;
//   }

//   /* Metric ledger */
//   .mf-metrics {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 0 clamp(24px, 4vw, 48px);
//   }
//   @media (max-width: 500px) {
//     .mf-metrics { grid-template-columns: 1fr; }
//   }
//   .mf-metric {
//     padding: 28px 0 28px;
//     border-top: 1px solid rgba(0,0,0,0.1);
//     transition: border-color 0.3s ease;
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//   }
//   .mf-metric:hover { border-color: rgba(200,169,110,0.5); }

//   .mf-metric-top {
//     display: flex;
//     align-items: baseline;
//     justify-content: space-between;
//     margin-bottom: 8px;
//   }
//   .mf-metric-value {
//     font-family: 'Obviously', 'Albert Sans', sans-serif;
//     font-size: clamp(1.75rem, 3vw, 2.5rem);
//     font-weight: 200;
//     color: #C8A96E;
//     letter-spacing: -0.02em;
//     line-height: 1;
//   }
//   .mf-metric-tag {
//     font-size: 8.5px;
//     font-weight: 700;
//     letter-spacing: 0.35em;
//     text-transform: uppercase;
//     color: #B5ABA5;
//   }
//   .mf-metric h3 {
//     font-family: 'Obviously', 'Albert Sans', sans-serif;
//     font-size: clamp(0.9rem, 1.4vw, 1rem);
//     font-weight: 300;
//     color: #1A1410;
//     margin: 0;
//     transition: color 0.3s ease;
//     letter-spacing: -0.01em;
//   }
//   .mf-metric:hover h3 { color: #C8A96E; }
//   .mf-metric p {
//     font-size: clamp(0.72rem, 1.1vw, 0.8rem);
//     line-height: 1.75;
//     color: #8C8480;
//     margin: 0;
//   }

//   /* ── Section 4: CTA ── */
//   .cta-section {
//     padding: 96px 0 104px;
//     background: #1A1410;
//     color: #F0EDE8;
//     border-radius: clamp(24px, 4vw, 56px) clamp(24px, 4vw, 56px) 0 0;
//     position: relative;
//     overflow: hidden;
//     font-family: 'Albert Sans', sans-serif;
//   }
//   .cta-top-rule {
//     position: absolute;
//     top: 0; left: 0; right: 0;
//     height: 1px;
//     background: linear-gradient(to right, transparent, rgba(200,169,110,0.3), transparent);
//     pointer-events: none;
//   }
//   .cta-inner {
//     max-width: 1280px;
//     margin: 0 auto;
//     padding: 0 clamp(24px, 5vw, 64px);
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: clamp(40px, 6vw, 80px);
//     align-items: start;
//   }
//   @media (max-width: 860px) {
//     .cta-inner { grid-template-columns: 1fr; }
//   }

//   .cta-left h2 {
//     font-family: 'Obviously', 'Albert Sans', sans-serif;
//     font-size: clamp(2.2rem, 5vw, 4rem);
//     font-weight: 300;
//     line-height: 1.05;
//     letter-spacing: -0.01em;
//     color: #F0EDE8;
//     margin: 8px 0 0;
//   }
//   .cta-left h2 em { font-style: italic; color: #C8A96E; }
//   .cta-left p {
//     font-size: clamp(0.8125rem, 1.3vw, 0.9375rem);
//     line-height: 1.8;
//     color: rgba(240,237,232,0.55);
//     max-width: 380px;
//     margin: 16px 0 0;
//   }

//   /* Typology selector */
//   .cta-right {
//     padding-top: 4px;
//   }
//   .cta-selector-label {
//     font-size: 9px;
//     font-weight: 700;
//     letter-spacing: 0.4em;
//     text-transform: uppercase;
//     color: #C8A96E;
//     display: block;
//     margin-bottom: 16px;
//   }
//   .cta-selector-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     margin-bottom: 32px;
//   }
//   @media (max-width: 440px) {
//     .cta-selector-grid { grid-template-columns: 1fr; }
//   }
//   .cta-type-btn {
//     text-align: left;
//     padding: 14px 18px;
//     border-radius: 12px;
//     border: 1px solid rgba(240,237,232,0.12);
//     background: rgba(240,237,232,0.03);
//     color: rgba(240,237,232,0.6);
//     font-size: 12px;
//     font-family: 'Albert Sans', sans-serif;
//     font-weight: 400;
//     letter-spacing: 0.02em;
//     cursor: pointer;
//     transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 8px;
//     line-height: 1.4;
//   }
//   .cta-type-btn:hover {
//     border-color: rgba(200,169,110,0.45);
//     background: rgba(200,169,110,0.05);
//     color: #F0EDE8;
//   }
//   .cta-type-btn.cta-type-btn--active {
//     border-color: #C8A96E;
//     background: rgba(200,169,110,0.1);
//     color: #F0EDE8;
//   }
//   .cta-type-btn-arrow {
//     font-size: 14px;
//     color: #C8A96E;
//     flex-shrink: 0;
//     opacity: 0;
//     transition: opacity 0.2s ease;
//   }
//   .cta-type-btn:hover .cta-type-btn-arrow,
//   .cta-type-btn.cta-type-btn--active .cta-type-btn-arrow {
//     opacity: 1;
//   }

//   .cta-bottom {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 24px;
//     padding-top: 24px;
//     border-top: 1px solid rgba(240,237,232,0.1);
//     flex-wrap: wrap;
//   }
//   .cta-contact-label {
//     font-size: 9px;
//     font-weight: 700;
//     letter-spacing: 0.35em;
//     text-transform: uppercase;
//     color: rgba(240,237,232,0.35);
//     display: block;
//     margin-bottom: 4px;
//   }
//   .cta-contact-email {
//     font-size: 13px;
//     color: rgba(240,237,232,0.75);
//     text-decoration: none;
//     transition: color 0.2s ease;
//     letter-spacing: 0.01em;
//   }
//   .cta-contact-email:hover { color: #C8A96E; }

//   .cta-cta-btn {
//     background: #C8A96E;
//     color: #1A1410;
//     font-family: 'Albert Sans', sans-serif;
//     font-size: 10px;
//     font-weight: 700;
//     letter-spacing: 0.35em;
//     text-transform: uppercase;
//     padding: 16px 32px;
//     border-radius: 10px;
//     border: none;
//     cursor: pointer;
//     white-space: nowrap;
//     transition: background 0.25s ease, transform 0.15s ease;
//     flex-shrink: 0;
//   }
//   .cta-cta-btn:hover  { background: #B8966A; }
//   .cta-cta-btn:active { transform: scale(0.98); }
//   .cta-cta-btn:focus-visible {
//     outline: 2px solid #C8A96E;
//     outline-offset: 3px;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     .sa-card-img img,
//     .cta-type-btn,
//     .cta-cta-btn { transition: none !important; }
//   }
// `;

// // ─── Data ────────────────────────────────────────────────────────────────────

// const SOURCING_CARDS = [
//   {
//     img:   delhiImg,
//     alt:   "Direct quarry access — raw slab block selection",
//     label: "Direct Source",
//     title: "Quarry-Level Selection",
//     desc:  "We bypass distributor chains entirely, hand-selecting raw block compositions at primary geological sources across four continents.",
//   },
//   {
//     img:   nepalImg,
//     alt:   "Slab curation studio — high-lux optical inspection",
//     label: "Slab Curation",
//     title: "Optical Grain Verification",
//     desc:  "Every inventory piece passes inspection under high-lux environments, verifying structural grain pattern and tonal consistency before processing.",
//   },
//   {
//     img:   rajasthanImg,
//     alt:   "Precision packaging for large-format stone transport",
//     label: "Precision Delivery",
//     title: "Zero-Fracture Transport",
//     desc:  "Custom-engineered packing assemblies ensure large-format natural stone arrives without microscopic fracturing, regardless of transit distance.",
//   },
// ];

// const METRICS = [
//   {
//     value: "0.5mm",
//     tag:   "Tolerance",
//     title: "Sub-Millimeter Cuts",
//     desc:  "Diamond wire saws and laser-guided tracks maintain cross-slab pattern continuity across wide floor alignments.",
//   },
//   {
//     value: "36t",
//     tag:   "Block Capacity",
//     title: "Monolithic Processing",
//     desc:  "Raw unrefined blocks sourced directly from global veins, stabilised before structural parsing begins.",
//   },
//   {
//     value: "120×",
//     tag:   "Inspection Cycle",
//     title: "Chromatographic Check",
//     desc:  "Lux-grade analysis filters micro-fractures and verifies structural tone harmony across every parsed surface.",
//   },
//   {
//     value: "100%",
//     tag:   "Hand Finishing",
//     title: "Master-Graded Edges",
//     desc:  "Automation handles raw volume; seasoned surface masters hand-inspect and edge-treat every luxury specification piece.",
//   },
// ];

// const TYPOLOGIES = [
//   "Luxury Residential",
//   "Commercial Landmark",
//   "Hospitality Environment",
//   "Bespoke Furniture & Accent",
// ];

// // ─── Components ──────────────────────────────────────────────────────────────

// function SourcingAtlas() {
//   return (
//     <section className="sa-section">
//       <div className="sa-inner">

//         {/* Header */}
//         <div className="sa-header">
//           <span className="tgs-eyebrow">Sourcing Principles</span>
//           <h2>Curated at <em>the Absolute Source</em></h2>
//           <p>
//             Three decades have taught us one thing: quality begins at the quarry,
//             not the showroom. Every slab in our inventory carries a verified origin.
//           </p>
//           <div className="tgs-rule" />
//         </div>

//         {/* Cards */}
//         <div className="sa-grid">
//           {SOURCING_CARDS.map((card, i) => (
//             <motion.div key={card.label} className="sa-card" {...fadeUp(i * 0.1)}>
//               <div className="sa-card-img">
//                 <img src={card.img} alt={card.alt} loading="lazy" />
//               </div>
//               <div className="sa-card-meta">
//                 <span className="sa-card-label">{card.label}</span>
//                 <h3>{card.title}</h3>
//                 <p>{card.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// function StudioManifesto() {
//   return (
//     <section className="mf-section">
//       <div className="mf-inner">

//         {/* Sticky left */}
//         <motion.div className="mf-sticky" {...fadeUp(0)}>
//           <span className="tgs-eyebrow">Our Manifesto</span>
//           <h2>Where Precision Meets <em>Geological Time</em></h2>
//           <div className="tgs-rule" />
//           <p>
//             Nature spends millennia forming stone; we spend weeks mapping
//             sub-millimeter execution plans that turn raw earth into permanent
//             architectural statements.
//           </p>
//         </motion.div>

//         {/* Metrics ledger */}
//         <div className="mf-metrics">
//           {METRICS.map((m, i) => (
//             <motion.div key={m.value} className="mf-metric" {...fadeUp(i * 0.08)}>
//               <div className="mf-metric-top">
//                 <span className="mf-metric-value">{m.value}</span>
//                 <span className="mf-metric-tag">{m.tag}</span>
//               </div>
//               <h3>{m.title}</h3>
//               <p>{m.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// function CTASection() {
//   const [selected, setSelected] = useState(null);

//   const handleContact = () => {
//     const subject = selected
//       ? `Project enquiry — ${selected}`
//       : "Project enquiry";
//     window.location.href = `mailto:consultancy@trivenistones.com?subject=${encodeURIComponent(subject)}`;
//   };

//   return (
//     <section className="cta-section">
//       <div className="cta-top-rule" aria-hidden="true" />
//       <div className="cta-inner">

//         {/* Left */}
//         <motion.div className="cta-left" {...fadeUp(0)}>
//           <span className="tgs-eyebrow">Start a Project</span>
//           <h2>Ready to Carve <em>Your Legacy?</em></h2>
//           <div className="tgs-rule tgs-rule--light" />
//           <p>
//             Our private surface design advisory works with architects, developers,
//             and interior studios to source and specify the right stone for every
//             brief — from a single statement piece to a full building envelope.
//           </p>
//         </motion.div>

//         {/* Right */}
//         <motion.div className="cta-right" {...fadeUp(0.1)}>
//           <span className="cta-selector-label">Select your project type</span>
//           <div className="cta-selector-grid" role="group" aria-label="Project type selector">
//             {TYPOLOGIES.map((type) => (
//               <button
//                 key={type}
//                 className={`cta-type-btn${selected === type ? " cta-type-btn--active" : ""}`}
//                 onClick={() => setSelected(selected === type ? null : type)}
//                 aria-pressed={selected === type}
//               >
//                 {type}
//                 <span className="cta-type-btn-arrow" aria-hidden="true">→</span>
//               </button>
//             ))}
//           </div>

//           <div className="cta-bottom">
//             <div>
//               <span className="cta-contact-label">Direct enquiries</span>
//               <a
//                 href="mailto:consultancy@trivenistones.com"
//                 className="cta-contact-email"
//               >
//                 consultancy@trivenistones.com
//               </a>
//             </div>
//             <button
//               className="cta-cta-btn"
//               onClick={handleContact}
//               aria-label={
//                 selected
//                   ? `Request a consultation for ${selected}`
//                   : "Request a consultation"
//               }
//             >
//               {selected ? "Request Consultation" : "Get in Touch"}
//             </button>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// // ─── Export ───────────────────────────────────────────────────────────────────

// export default function AboutSections() {
//   return (
//     <>
//       <style>{STYLES}</style>
//       <SourcingAtlas   />
//       <StudioManifesto />
//       <CTASection      />
//     </>
//   );
// }