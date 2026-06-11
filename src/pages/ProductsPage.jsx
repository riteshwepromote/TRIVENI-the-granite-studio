import React, { useState } from "react";
import { ArrowUpRight, Phone, Calendar } from "lucide-react";

const ProductsPage = ({
  title,
  subtitle,
  heroDescription,
  heroImage,
  aboutTitle,
  aboutText,
  aboutImage,
  applications = [],
  gallery = [],
  features = [],
  finishes = [],
  whyChoose = [],
  showcaseProjects = [],
}) => {
  const [activeFinish, setActiveFinish] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const activeItem = gallery[activeIndex];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#141C3A] selection:bg-[#C67D55] selection:text-white antialiased overflow-x-hidden relative font-sans">
      
      {/* BACKGROUND ARCHITECTURAL RUNNING TRACKS (Fine Art Structural Guidelines) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="w-[1px] h-full bg-[#E4D4C4]/20" />
        <div className="w-[1px] h-full bg-[#E4D4C4]/20 hidden md:block" />
        <div className="w-[1px] h-full bg-[#E4D4C4]/20" />
      </div>

      {/* SECTION 1: THE EXHIBITION IMMERSIVE LANDSCAPE HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D1224] flex flex-col justify-between z-10">
        <div className="absolute inset-0 bg-[#0D1224]/30 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1224]/20 to-[#0D1224]/90 z-10" />
        
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-[3s] scale-100 ease-out"
        />

        {/* Top Minimal Header Alignment Track */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 pt-24 md:px-12 lg:px-[120px] flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C67D55] bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10">
            {subtitle}
          </span>
          <span className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase hidden sm:block">
            TRIVENI // ARCHITECTURAL DIVISION
          </span>
        </div>

        {/* Core Monolithic Branding Stack */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] mb-16">
          <h1 className="font-serif text-[11vw] leading-[0.85] text-white tracking-tighter uppercase font-light pointer-events-none select-none mb-10">
            {title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10 items-end">
            <p className="lg:col-span-6 max-w-[460px] text-[14px] sm:text-[15px] font-light leading-relaxed text-white/70 tracking-wide">
              {heroDescription}
            </p>
            
            <div className="lg:col-span-6 flex flex-wrap gap-4 lg:justify-end">
              <button className="group flex h-[50px] items-center gap-4 bg-[#C67D55] px-8 text-[11px] font-semibold text-white tracking-[0.25em] uppercase transition-all duration-[400ms] hover:bg-white hover:text-[#141C3A]">
                EXPLORE ARCHIVE
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <button className="h-[50px] flex items-center justify-center border border-white/10 bg-white/5 px-8 text-[11px] font-semibold text-white tracking-[0.25em] uppercase backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#141C3A]">
                REQUEST BATCH DATA
              </button>
            </div>
          </div>
        </div>

        {/* Technical Baseline Data Overlay */}
        <div className="relative z-20 w-full border-t border-white/10 py-4 bg-black/10 backdrop-blur-xs">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] flex justify-between items-center text-white/30 font-mono text-[9px] tracking-[0.2em] uppercase">
            <span>SPECIFICATION SPEC: IGNEOUS / SLAB CONFIG</span>
            <span className="hidden md:block">BATCH ID_773 // ACTIVE VERIFICATION</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: BORDERLESS MAGAZINE EDITORIAL PROFILING */}
      <section className="relative z-10 py-24 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Narrative Frame */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C67D55]" />
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#C67D55]">
                Material Profile
              </span>
            </div>
            
            <h2 className="font-serif text-[36px] sm:text-[46px] font-light text-[#141C3A] mb-6 tracking-tight leading-tight">
              {aboutTitle}
            </h2>
            
            <p className="text-[14px] text-[#555555] font-light leading-relaxed whitespace-pre-line tracking-wide pr-6">
              {aboutText}
            </p>
          </div>

          {/* Right Borderless Clean Visual Canvas */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE4] group">
              <img 
                src={aboutImage} 
                alt={aboutTitle} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-103" 
              />
              <div className="absolute bottom-4 left-4 bg-[#141C3A] text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1">
                EXHIBIT METRIC REFERENCE_892
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: BRUTALIST ARCHITECTURAL MANDATES GRID (NO BOXES) */}
      <section className="relative z-10 bg-[#FAF8F5] py-16 border-b border-[#E4D4C4]/30">
  <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px]">
    
    {/* Clean Split Header */}
    <div className="w-full flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#141C3A]/10 pb-4 mb-10">
      <h2 className="font-serif text-[22px] sm:text-[26px] font-light text-[#141C3A] tracking-tight uppercase">
        Architectural Mandates
      </h2>
      <p className="text-[12px] text-[#A6927D] font-mono tracking-widest mt-1 sm:mt-0 uppercase">
        SYS_MATRIX // 0{applications.length} UNITS
      </p>
    </div>

    {/* Low-Profile Structural Capsule Grid (Zero Box Bloat) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      {applications.map((app, index) => (
        <div 
          key={index}
          className="group flex items-center justify-between bg-white border border-[#E4D4C4]/40 hover:border-[#C67D55] h-[64px] px-5 transition-all duration-300 cursor-pointer"
        >
          {/* Main Context Left Rail */}
          <div className="flex items-center gap-4 min-w-0">
            {/* Tiny structural number track with clean border line separator */}
            <span className="font-mono text-[10px] text-[#A6927D] border-r border-[#E4D4C4]/60 pr-3 h-4 flex items-center group-hover:text-[#C67D55] transition-colors duration-300">
              0{index + 1}
            </span>
            
            {/* Short, sleek title block */}
            <h3 className="font-serif text-[15px] text-[#141C3A] tracking-wide truncate group-hover:text-[#C67D55] transition-colors duration-300">
              {app.name}
            </h3>
          </div>

          {/* Right Floating Core Asset Minimal Node */}
          <div className="text-[#A6927D]/50 scale-90 group-hover:scale-100 group-hover:text-[#C67D55] transition-all duration-300 flex-shrink-0 ml-2">
            {app.icon}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* SECTION 4: INTERACTIVE SPACE-LOCKED SLAB MATRIX EXHBIT */}
      <section className="relative z-10 w-full bg-[#FAF8F5] py-20 border-b border-[#E4D4C4]/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px]">
          
          {/* Header Track with Matrix Navigation Controls */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#141C3A]/10 pb-6 mb-12 gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-[#C67D55] tracking-[0.3em] font-bold">01 // THE BATCH EXHIBIT</span>
              <div className="h-[1px] w-12 bg-[#C67D55]" />
            </div>

            {/* Inline Dynamic Index System Switcher */}
            <div className="flex flex-wrap gap-2 font-mono text-[11px]">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-1.5 border transition-all duration-300 tracking-wider font-medium ${
                    activeIndex === idx
                      ? "bg-[#141C3A] text-white border-[#141C3A]"
                      : "bg-white text-[#777777] border-[#E4D4C4]/60 hover:border-[#C67D55] hover:text-[#141C3A]"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Controlled Screen Spatial Area */}
          {gallery[activeIndex] && (() => {
            const activeItem = gallery[activeIndex];
            return (
              <div className="group grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-16 min-h-[300px]">
                
                {/* Horizontal Widescreen Frame Visual Container */}
                <div className="md:col-span-7">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2ECE4] border border-[#E4D4C4]/30">
                    <img 
                      src={activeItem.image} 
                      alt={activeItem.name} 
                      className="h-full w-full object-cover transition-transform duration-[1.2s] scale-100 ease-out"
                    />
                    <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-white bg-[#141C3A] px-2 py-0.5">
                      SYS_REF // SLAB_{activeIndex + 100}
                    </div>
                  </div>
                </div>

                {/* Specification Details Array */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3 font-mono text-[11px] text-[#A6927D] tracking-widest">
                    <span>SELECTION INDEX_0{activeIndex + 1}</span>
                    <span>/</span>
                    <span className="uppercase text-[#C67D55] font-sans font-medium tracking-[0.15em] text-[10px]">
                      {activeItem.origin}
                    </span>
                  </div>

                  <h3 className="font-serif text-[26px] sm:text-[32px] font-light text-[#141C3A] tracking-tight group-hover:text-[#C67D55] transition-colors duration-300">
                    {activeItem.name}
                  </h3>

                  <div className="w-8 h-[1px] bg-[#C67D55] my-5 group-hover:w-24 transition-all duration-500 ease-out" />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[12px] text-[#777777] font-light italic">
                      Premium Structural Cut
                    </span>
                    <button className="text-[11px] font-mono tracking-widest text-[#141C3A] group-hover:text-[#C67D55] transition-colors font-medium flex items-center gap-1.5">
                      SPEC DATA <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* SECTION 5: DARK MODE MODERN ARCHITECTURAL TECHNICAL DATASHEETS */}
      <section className="relative z-10 bg-[#0D1224] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(198,125,85,0.05),transparent_50%)]" />
        
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px]">
          <div className="max-w-[600px] mb-20">
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#C67D55] mb-3 block">
              Physical Performance Metrics
            </span>
            <h2 className="font-serif text-[36px] sm:text-[44px] font-extralight tracking-tight text-white uppercase">
              Technical Tolerances
            </h2>
          </div>
          
          {/* Dense, Clean Informational Data Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/10 pt-12">
            {features.map((feat, index) => (
              <div key={index} className="flex flex-col group">
                <span className="font-mono text-[10px] text-[#C67D55] mb-3 tracking-widest block">// DATA_REF_0{index + 1}</span>
                <h3 className="text-[17px] tracking-wide font-medium text-white mb-2 group-hover:text-[#C67D55] transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-[13px] text-white/60 leading-relaxed font-light tracking-wide">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TACTILE CONTROLLER TABS (FINISHES OVERVIEW) */}
      <section className="relative z-10 border-b border-[#E4D4C4]/60 bg-[#FAF8F5]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px] py-24 lg:py-32">
          
          <div className="max-w-[600px] mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#C67D55] mb-2 block">
              Tactile Presentation
            </span>
            <h2 className="font-serif text-[34px] sm:text-[42px] font-light text-[#141C3A] tracking-tight">
              Surface Alteration Finishes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Monitor Frame (Clean Canvas Shift) */}
            <div className="lg:col-span-7 bg-white p-3 border border-[#E4D4C4]/40 shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <img 
                  src={finishes[activeFinish]?.image} 
                  alt={finishes[activeFinish]?.name} 
                  className="w-full h-full object-cover transition-all duration-500 object-center"
                />
              </div>
            </div>

            {/* Right List Controllers - Transformed completely into borderless typography triggers */}
            <div className="lg:col-span-5 flex flex-col border-t border-[#E4D4C4]/60">
              {finishes.map((fin, index) => {
                const isSelected = activeFinish === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveFinish(index)}
                    className="group py-6 border-b border-[#E4D4C4]/40 cursor-pointer flex flex-col justify-center transition-all duration-300"
                  >
                    <div className="flex justify-between items-baseline">
                      <h3 className={`text-[19px] font-serif transition-colors duration-300 ${
                        isSelected ? "text-[#C67D55] font-normal" : "text-[#141C3A] font-light group-hover:text-[#C67D55]"
                      }`}>
                        {fin.name}
                      </h3>
                      <span className={`font-mono text-[10px] tracking-widest ${isSelected ? "text-[#C67D55]" : "text-neutral-400"}`}>
                        [ 0{index + 1} ]
                      </span>
                    </div>
                    {isSelected && (
                      <p className="text-[13px] text-[#666666] font-light leading-relaxed mt-3 tracking-wide animation-fade-in">
                        {fin.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: STICKY CORE MANDATE ETHICS */}
      <section className="relative z-10 bg-[#FAF8F5] py-24 lg:py-32 border-b border-[#E4D4C4]/60">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#C67D55] mb-2 block">
              The Procurement Studio
            </span>
            <h2 className="font-serif text-[36px] font-light text-[#141C3A] tracking-tight uppercase leading-none">
              The Mandate Standard
            </h2>
            <div className="h-[1px] w-12 bg-[#C67D55] mt-6" />
          </div>

          <div className="lg:col-span-7 border-t border-[#E4D4C4]/80">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between py-6 border-b border-[#E4D4C4]/40 group cursor-default transition-all duration-300 hover:pl-2"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[11px] text-[#C67D55] tracking-widest opacity-60">
                    // 0{index + 1}
                  </span>
                  <span className="text-[17px] font-serif font-light text-[#141C3A] tracking-wide group-hover:text-[#C67D55] transition-colors duration-300">
                    {item}
                  </span>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-[#E4D4C4] group-hover:bg-[#C67D55] transition-colors" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: LARGE AMBIENT REALIZED ARCHITECTURE (CASE CONTEXTS) */}
      <section className="relative z-10 bg-[#FAF8F5] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px]">
          
          <div className="mb-20 border-b border-[#E4D4C4]/60 pb-6">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#C67D55] mb-2 block">
              Verification Portfolio
            </span>
            <h2 className="font-serif text-[36px] sm:text-[44px] font-light tracking-tight text-[#141C3A] uppercase">
              Realised Contexts
            </h2>
          </div>

          {/* Clean Editorial Dual Columns without Card Boxing wrappers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {showcaseProjects.map((proj, index) => (
              <div key={index} className="group flex flex-col w-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE4] mb-6">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-103 object-center" 
                  />
                  <div className="absolute top-4 left-4 bg-[#141C3A] text-white font-mono text-[9px] tracking-widest px-3 py-1">
                    PROJECT // CASE_0{index + 1}
                  </div>
                </div>
                
                <span className="text-[10px] text-[#C67D55] font-semibold uppercase tracking-[0.2em] mb-2 block font-mono">
                  Location Cluster: {proj.location}
                </span>
                
                <h3 className="text-[22px] font-serif font-light text-[#141C3A] tracking-wide group-hover:text-[#C67D55] transition-colors duration-300 mb-2">
                  {proj.title}
                </h3>
                
                <p className="text-[13.5px] text-[#666666] font-light leading-relaxed tracking-wide max-w-xl">
                  {proj.scope}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: ARCHITECTURAL SPECIFICATION CONCIERGE (INQUIRY HUD) */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px] pb-24">
        <div className="w-full bg-[#0D1224] text-center relative p-12 lg:p-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(198,125,85,0.08),transparent_60%)]" />
          
          <div className="relative z-10 max-w-[650px] mx-auto">
            <span className="text-[11px] uppercase tracking-[0.4em] font-mono text-[#C67D55] mb-4 block font-bold">
              Specification Support Blueprint
            </span>
            <h2 className="font-serif text-[36px] md:text-[52px] font-extralight text-white leading-[1.15] uppercase tracking-tighter mb-6">
              Integrate {title} <br /> Into Your Layouts
            </h2>
            <div className="w-12 h-[1px] bg-white/10 mx-auto mb-6" />
            <p className="text-[13.5px] text-white/60 mb-10 font-light tracking-wide leading-relaxed max-w-[480px] mx-auto">
              Our studio layout specialists interface directly with procurement document vectors to streamline batch variations flawlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto flex h-[50px] items-center justify-center gap-3 bg-[#C67D55] px-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-[#141C3A]">
                <Calendar size={13} /> CONSULTATION ROOM
              </button>
              <button className="w-full sm:w-auto flex h-[50px] items-center justify-center gap-3 border border-white/10 bg-white/5 px-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <Phone size={13} /> CONCIERGE DESK
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;