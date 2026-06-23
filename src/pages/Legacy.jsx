import React, { useEffect, useRef } from 'react';
// Note: In your production build, ensure you install and import:
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';

const chapters = [
  {
    id: "01",
    year: "1989",
    location: "DELHI",
    title: "The foundation was laid.",
    description: "A vision to bring exceptional stone craftsmanship to India began in Delhi.",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-zoom"
  },
  {
    id: "02",
    year: "1992",
    location: "KATHMANDU, NEPAL",
    title: "Crossing borders.",
    description: "Triveni expanded its reach beyond India, establishing a presence in Nepal.",
    bgImage: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-parallax"
  },
  {
    id: "03",
    year: "1994",
    location: "ABU ROAD, RAJASTHAN",
    title: "Closer to the source.",
    description: "Abu Road became a strategic hub, connecting craftsmanship with natural resources.",
    bgImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-split"
  },
  {
    id: "04",
    year: "2005",
    location: "NEW OUTLET, DELHI",
    title: "Expanding the experience.",
    description: "A new destination where architects, designers, and homeowners discovered premium stone collections.",
    bgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-gallery"
  },
  {
    id: "05",
    year: "2017",
    location: "FACTORY ESTABLISHMENT, ABU ROAD",
    title: "Scaling excellence.",
    description: "A state-of-the-art manufacturing facility strengthened our commitment to quality and innovation.",
    bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-reveal"
  },
  {
    id: "06",
    year: "2022",
    location: "MOHALI",
    title: "Bringing luxury closer.",
    description: "Expanding into Punjab with a new destination for timeless surfaces and contemporary design.",
    bgImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-fade"
  },
  {
    id: "07",
    year: "2025",
    location: "DUBAI",
    title: "Global horizons.",
    description: "Triveni enters Dubai, marking a new chapter in its international journey.",
    bgImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80", 
    animationClass: "chapter-gold"
  }
];

export default function TriveniLegacyLight() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Smooth Scrolling initialization (Lenis)
    // const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    // function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    // requestAnimationFrame(raf);

    // 2. GSAP & ScrollTrigger Hooks
    // gsap.registerPlugin(ScrollTrigger);
    
    // Layout hook for cinematic zoom of Chapter images:
    // gsap.utils.toArray('.chapter-sec').forEach(panel => {
    //   gsap.fromTo(panel.querySelector('.cinematic-img'), { scale: 1 }, {
    //     scale: 1.15, scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true }
    //   });
    // });
    
    return () => {
      // Cleanups
      // lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F8F5F2] text-[#2D2A28] font-['Inter'] selection:bg-[#B88272] selection:text-[#F8F5F2] overflow-x-hidden antialiased">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F5F2]">
        {/* Background Layer with Subtle Matte Blend Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 transform scale-105 transition-transform duration-[10000ms] hover:scale-100 mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1920&q=80" 
            alt="Slow-motion Marble Quarry Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F2]/40 via-transparent to-[#F8F5F2]" />
        </div>

        {/* Ambient organic stone texture overlay effect */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

        {/* Content Box */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="text-[#B88272] font-semibold tracking-[0.4em] uppercase text-xs md:text-sm block mb-4">
            T R I V E N I &nbsp; — &nbsp; T H E &nbsp; L E G A C Y
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-8xl font-light tracking-tight leading-none text-balance text-[#2D2A28]">
            Crafted Through Time.<br />
            <span className="italic text-[#B88272]">Built Across Generations.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#2D2A28]/80 tracking-wide font-light leading-relaxed pt-4">
            From a humble beginning in Delhi to an international presence in Dubai, our journey reflects decades of craftsmanship, trust, and timeless stone artistry.
          </p>
          <div className="pt-12">
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#B88272] to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* SECTION 2: IMMERSIVE SCROLL JOURNEY CHAPTERS */}
      <main className="relative z-20">
        {chapters.map((chapter) => (
          <section 
            key={chapter.id} 
            className="chapter-sec relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-16 border-b border-[#A89A92]/20 snap-start bg-[#F8F5F2]"
          >
            {/* Main Visual Container */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Image Frame Wrapper (75% aspect ratio layout) */}
              <div className="relative lg:col-span-9 w-full aspect-[16/9] xl:aspect-[21/9] overflow-hidden group border border-[#A89A92]/10 bg-[#A89A92]/5 shadow-sm">
                {/* Visual Reveal Soft Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A28]/10 via-transparent to-transparent z-10 opacity-40 pointer-events-none" />
                
                {/* Cinematic Image Asset */}
                <img 
                  src={chapter.bgImage} 
                  alt={`Triveni Legacy ${chapter.location}`} 
                  className="cinematic-img w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-103"
                />

                {/* Floating Chapter Stamp Tag inside image viewport */}
                <div className="absolute top-6 left-6 z-20 bg-[#F8F5F2]/90 backdrop-blur-md border border-[#B88272]/20 px-4 py-2">
                  <span className="font-['Bodoni_Moda'] text-xs tracking-[0.2em] text-[#B88272] font-medium">CH. // {chapter.id}</span>
                </div>
              </div>

              {/* Minimalist Editorial Content Column */}
              <div className="lg:col-span-3 space-y-6 lg:pl-4 self-center">
                <div className="space-y-1">
                  <h2 className="font-['Bodoni_Moda'] text-5xl md:text-7xl font-light text-[#B88272] tracking-tighter leading-none">
                    {chapter.year}
                  </h2>
                  <h3 className="font-['Inter'] font-semibold tracking-[0.25em] text-xs text-[#A89A92] uppercase">
                    {chapter.location}
                  </h3>
                </div>
                
                <hr className="w-12 border-[#B88272]/50" />

                <div className="space-y-3">
                  <h4 className="font-['Cormorant_Garamond'] text-2xl font-medium tracking-tight text-[#2D2A28] leading-snug">
                    {chapter.title}
                  </h4>
                  <p className="text-sm text-[#2D2A28]/70 leading-relaxed font-light">
                    {chapter.description}
                  </p>
                </div>
              </div>

            </div>
          </section>
        ))}
      </main>

      {/* SECTION 3: GRAND FINALE */}
      <section className="relative min-h-screen w-full bg-[#F8F5F2] flex flex-col justify-between py-24 px-6 overflow-hidden border-b border-[#A89A92]/20">
        
        {/* World Map Texture Base Layer */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')] bg-center bg-no-repeat bg-cover" />

        {/* Global Journey Constellation Line Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 z-0">
          <svg className="w-full h-full max-w-5xl max-h-[500px]" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M100,250 Q200,100 300,220 T500,180 T700,120" 
              stroke="#B88272" 
              strokeWidth="1.5" 
              strokeDasharray="6 4"
            />
            <circle cx="100" cy="250" r="4" fill="#B88272" />
            <circle cx="300" cy="220" r="4" fill="#A89A92" />
            <circle cx="500" cy="180" r="4" fill="#A89A92" />
            <circle cx="700" cy="120" r="5" fill="#B88272" />
          </svg>
        </div>

        {/* Dynamic Connected Node Checklist - Luxury Typography */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center pt-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-6 px-6 py-3 bg-[#F8F5F2]/80 backdrop-blur-md rounded-full border border-[#A89A92]/30 text-[10px] md:text-xs tracking-[0.2em] font-medium text-[#2D2A28]/80 uppercase">
            <span>Delhi</span> <span className="text-[#B88272]">→</span>
            <span>Kathmandu</span> <span className="text-[#B88272]">→</span>
            <span>Abu Road</span> <span className="text-[#B88272]">→</span>
            <span>Delhi</span> <span className="text-[#B88272]">→</span>
            <span>Abu Road</span> <span className="text-[#B88272]">→</span>
            <span>Mohali</span> <span className="text-[#B88272]">→</span>
            <span className="text-[#B88272] font-bold">Dubai</span>
          </div>
        </div>

        {/* Core Finale Messaging Block */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center my-auto space-y-6 px-4">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-7xl font-light tracking-tight leading-tight text-[#2D2A28]">
            36 Years of Legacy.<br />
            <span className="italic text-[#B88272]">Countless Spaces. One Commitment.</span>
          </h2>
        </div>

        {/* Premium Data Counters Grid Matrix */}
        <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-[#A89A92]/30 pt-12">
          
          <div className="text-center space-y-1">
            <p className="font-['Bodoni_Moda'] text-3xl md:text-5xl font-light text-[#B88272] tracking-tight">
              1989 — 2025
            </p>
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#A89A92] uppercase">Timeline Horizon</p>
          </div>

          <div className="text-center space-y-1">
            <p className="font-['Bodoni_Moda'] text-3xl md:text-5xl font-light text-[#B88272] tracking-tight">
              7
            </p>
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#A89A92] uppercase">Global Locations</p>
          </div>

          <div className="text-center space-y-1">
            <p className="font-['Bodoni_Moda'] text-3xl md:text-5xl font-light text-[#B88272] tracking-tight">
              36
            </p>
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#A89A92] uppercase">Years of Caliber</p>
          </div>

          <div className="text-center space-y-1">
            <p className="font-['Bodoni_Moda'] text-3xl md:text-5xl font-light text-[#B88272] tracking-tight">
              1000+
            </p>
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#A89A92] uppercase">Luxury Projects</p>
          </div>

        </div>

      </section>

      {/* FOOTER LUXURY SIGNATURE */}
      <footer className="bg-[#F8F5F2] py-12 text-center text-[10px] tracking-[0.3em] uppercase text-[#A89A92] border-t border-[#A89A92]/10">
        © 2026 TRIVENI MARBLE & STONE ARCHITECTURE. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}