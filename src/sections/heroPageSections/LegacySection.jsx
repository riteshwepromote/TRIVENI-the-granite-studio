import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    id: "01",
    year: "1989",
    location: "DELHI",
    title: "The foundation was laid.",
    description: "A vision to bring exceptional stone craftsmanship to India began in Delhi.",
    bgImage: "https://ik.imagekit.io/4cj6kauug/Triveni/delhi1989.png",
  },
  {
    id: "02",
    year: "1992",
    location: "KATHMANDU, NEPAL",
    title: "Crossing borders.",
    description: "Triveni expanded its reach beyond India, establishing a presence in Nepal.",
    bgImage: "https://ik.imagekit.io/4cj6kauug/Triveni/nepal",
  },
  {
    id: "03",
    year: "1994",
    location: "ABU ROAD, RAJASTHAN",
    title: "Closer to the source.",
    description: "Abu Road became a strategic hub, connecting craftsmanship with natural resources.",
    bgImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "04",
    year: "2005",
    location: "NEW OUTLET, DELHI",
    title: "Expanding the experience.",
    description: "A new destination where architects, designers, and homeowners discovered premium stone collections.",
    bgImage: "https://ik.imagekit.io/4cj6kauug/Triveni/Delhi%202005",
  },
  {
    id: "05",
    year: "2017",
    location: "FACTORY ESTABLISHMENT, ABU ROAD",
    title: "Scaling excellence.",
    description: "A state-of-the-art manufacturing facility strengthened our commitment to quality and innovation.",
    bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "06",
    year: "2022",
    location: "MOHALI",
    title: "Bringing luxury closer.",
    description: "Expanding into Punjab with a new destination for timeless surfaces and contemporary design.",
    bgImage: "https://ik.imagekit.io/4cj6kauug/Triveni/triveni2022.webp",
  },
  {
    id: "07",
    year: "2025",
    location: "DUBAI",
    title: "Global horizons.",
    description: "Triveni enters Dubai, marking a new chapter in its international journey.",
    bgImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function TriveniLegacyScrollytelling() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Initialize Lenis for Smooth Cinematic Scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GSAP Animations Setup
    const ctx = gsap.context(() => {
      // Parallax for all images inside the unified cards
      gsap.utils.toArray(".img-wrapper").forEach((wrapper) => {
        const img = wrapper.querySelector(".img-parallax");
        if (img) {
          gsap.to(img, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // Staggered text reveals inside cards
      gsap.utils.toArray(".reveal-up").forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 90%",
            },
          }
        );
      });

      // Final Map Journey Animation
      const mapPath = document.querySelector(".map-path");
      if (mapPath) {
        const length = mapPath.getTotalLength();
        gsap.set(mapPath, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(mapPath, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".finale-section",
            start: "top center",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }

      // Final Map Node Reveals
      gsap.fromTo(
        ".map-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".finale-section",
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#0b0b0b] text-[#F4F1ED] font-sans selection:bg-[#A88771] selection:text-[#F4F1ED] overflow-x-hidden"
    >
      {/* REFINED ARCHITECTURAL HERO SECTION */}
      <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center px-6 pt-20 pb-16 bg-[#0b0b0b]">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#A88771] font-medium block">
            Triveni Legacy
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] text-[#F4F1ED]">
            The Journey <span className="italic font-normal text-[#C5A894]">Through Time.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            A chronological exploration of architecture, craftsmanship, and global expansion since 1989.
          </p>
        </div>
      </section>

      {/* MAIN TIMELINE: Unified "Immersive Cinematic Reveal" Style */}
      <main className="relative z-20 pb-32 pt-16 space-y-24 md:space-y-40">
        {chapters.map((chapter, index) => {
          const isEven = index % 2 === 0;

          return (
            <section key={chapter.id} className="relative w-full flex items-center justify-center px-4 md:px-12">
              <div className="img-wrapper relative w-full max-w-[1500px] h-[75vh] md:h-[85vh] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] group">
                
                {/* Parallax Image Background (Clean, No Opacity / No Overlays) */}
                <div className="absolute inset-0 z-0 bg-[#111]">
                  <img
                    src={chapter.bgImage}
                    alt={chapter.title}
                    className="img-parallax w-full h-[135%] object-cover -top-[15%] relative"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Chapter Number Indicator */}
                <div className={`absolute top-6 md:top-10 ${isEven ? 'right-6 md:right-10' : 'left-6 md:left-10'} z-10 hidden md:block`}>
                  <span className="text-sm tracking-widest text-white font-mono">
                    {chapter.id} <span className="mx-1 text-[#A88771]">/</span> 07
                  </span>
                </div>

                {/* Text Content Overlay */}
                <div className={`absolute inset-0 w-full p-8 md:p-16 flex items-end ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                  <div className="reveal-up relative z-10 max-w-xl text-left">
                    
                    {/* Glassmorphic Year Pill */}
                    <div className="inline-flex items-center border border-[#A88771]/30 bg-black px-5 py-1.5 rounded-full mb-4 md:mb-6 shadow-lg">
                      <span className="text-xl md:text-2xl text-[#C5A894] font-semibold tracking-wider font-mono">{chapter.year}</span>
                    </div>
                    
                    {/* Location Subheading */}
                    <h4 className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#D5C2B3] mb-3 font-medium">
                      {chapter.location}
                    </h4>
                    
                    {/* Title & Description */}
                    <h3 className="text-3xl md:text-5xl mb-4 text-white leading-[1.15] font-light">
                      {chapter.title}
                    </h3>
                    <p className="font-light text-gray-300 text-sm md:text-base leading-relaxed">
                      {chapter.description}
                    </p>

                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </main>

      {/* FINALE SECTION: The Animated Journey */}
      <section className="finale-section relative min-h-screen w-full bg-[#070707] text-[#F4F1ED] pt-32 pb-24 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
          
          <div className="reveal-up text-center mb-16 space-y-3">
            <h4 className="text-[11px] tracking-[0.4em] uppercase text-[#A88771] font-medium">The Constellation of Craft</h4>
            <h2 className="text-4xl md:text-6xl font-light text-white">
              An Expanding <span className="italic font-normal text-[#C5A894]">Legacy</span>
            </h2>
          </div>

          {/* Abstract SVG Journey Map */}
          <div className="w-full max-w-4xl relative h-[280px] md:h-[360px] mb-20">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* The Path */}
              <path
                className="map-path"
                d="M50,200 Q150,50 250,150 T450,250 T650,150 T850,200 T950,100"
                stroke="#A88771"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              
              {/* The Nodes */}
              <g className="map-node">
                <circle cx="50" cy="200" r="5" fill="#F4F1ED" />
                <text x="50" y="230" fill="#D5C2B3" fontSize="11" textAnchor="middle" letterSpacing="0.15em">DELHI</text>
              </g>
              <g className="map-node">
                <circle cx="250" cy="150" r="5" fill="#F4F1ED" />
                <text x="250" y="180" fill="#D5C2B3" fontSize="11" textAnchor="middle" letterSpacing="0.15em">KATHMANDU</text>
              </g>
              <g className="map-node">
                <circle cx="450" cy="250" r="5" fill="#F4F1ED" />
                <text x="450" y="280" fill="#D5C2B3" fontSize="11" textAnchor="middle" letterSpacing="0.15em">ABU ROAD</text>
              </g>
              <g className="map-node">
                <circle cx="650" cy="150" r="5" fill="#F4F1ED" />
                <text x="650" y="180" fill="#D5C2B3" fontSize="11" textAnchor="middle" letterSpacing="0.15em">MOHALI</text>
              </g>
              <g className="map-node">
                <circle cx="950" cy="100" r="8" fill="#A88771" className="animate-pulse" />
                <circle cx="950" cy="100" r="16" fill="none" stroke="#A88771" strokeWidth="1" className="animate-ping" />
                <text x="950" y="138" fill="#A88771" fontSize="13" fontWeight="600" textAnchor="middle" letterSpacing="0.2em">DUBAI</text>
              </g>
            </svg>
          </div>

          {/* Premium Statistics Grid */}
          <div className="reveal-up w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-16">
            <div className="bg-[#121212] rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl text-[#C5A894] font-semibold mb-1 font-mono">1989</p>
              <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-medium">Founded</p>
            </div>
            <div className="bg-[#121212] rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl text-[#C5A894] font-semibold mb-1 font-mono">7</p>
              <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-medium">Global Hubs</p>
            </div>
            <div className="bg-[#121212] rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl text-[#C5A894] font-semibold mb-1 font-mono">36</p>
              <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-medium">Years of Caliber</p>
            </div>
            <div className="bg-[#121212] rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl text-[#C5A894] font-semibold mb-1 font-mono">1000+</p>
              <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-medium">Masterpieces</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}