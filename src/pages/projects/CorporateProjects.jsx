import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// Curated architectural project portfolio data (Hero Photography Optimized)
const strategicProjects = [
  {
    id: '01',
    title: 'The Apex Corporate Headquarters',
    scale: '45,000 Sq. Ft.',
    location: 'Mumbai, MH',
    description: 'A monument of monolithic structural strength. Featuring pure Absolute Black flamed granite cladding alongside polished Imperial White structural pillars engineered for timeless civic prominence.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '02',
    title: 'Grand Atrium Terminal & Lounge',
    scale: '120,000 Sq. Ft.',
    location: 'Bengaluru, KA',
    description: 'An expansive modern pavilion defined by high-traffic monolithic flooring and bookmatched elevator facades crafted meticulously from premium Alaska Gold and Steel Grey reserves.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '03',
    title: 'The Capital Boardrooms & Suites',
    scale: '12,000 Sq. Ft.',
    location: 'New Delhi, DL',
    description: 'Intimate spatial luxury engineered with bespoke CNC-carved wall panel installations and seamless grain-matched premium Tan Brown slabs, reflecting absolute corporate authority.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '04',
    title: 'Centennial Tech Park Plazas',
    scale: '210,000 Sq. Ft.',
    location: 'Hyderabad, TS',
    description: 'Civic landscape design elevated by textured Sardo Grey structural hardscaping and radial water features built to withstand severe high-volume movement.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600'
  }
];

export default function LuxuryPortfolioProjects() {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Dynamic Context-Aware Animations per Project Section
    projectRefs.current.forEach((section, index) => {
      const bgImg = section.querySelector('.project-bg-img');
      const textContainer = section.querySelector('.project-text-container');
      const accentLine = section.querySelector('.project-accent-line');
      const counter = section.querySelector('.project-counter');
      
      // Global Continuous Ambient Scaling (Hero Viewport Dynamic)
      if (bgImg) {
        gsap.fromTo(bgImg, 
          { scale: 1 },
          {
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // ----------------------------------------
      // PROJECT 1 SPECIFIC: Cinematic Scale-Up & Darken Exit
      // ----------------------------------------
      if (index === 0) {
        gsap.to(bgImg, {
          opacity: 0.7,
          filter: 'brightness(0.4) blur(4px)',
          scrollTrigger: {
            trigger: section,
            start: 'bottom 90%',
            end: 'bottom top',
            scrub: true
          }
        });
        gsap.to(textContainer, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: 'bottom 80%',
            end: 'bottom 20%',
            scrub: true
          }
        });
      }

      // ----------------------------------------
      // PROJECT 2 SPECIFIC: Clip-path Reveal & Accent Generation
      // ----------------------------------------
      if (index === 1) {
        gsap.fromTo(bgImg,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 20%',
              scrub: true
            }
          }
        );
      }

      // ----------------------------------------
      // PROJECT 3 SPECIFIC: Horizontal Parallax Layers
      // ----------------------------------------
      if (index === 2) {
        const fgLayer = section.querySelector('.fg-parallax-layer');
        if (fgLayer) {
          gsap.fromTo(fgLayer,
            { y: '15%' },
            {
              y: '-15%',
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        }
        gsap.fromTo(bgImg,
          { xPercent: -5 },
          {
            xPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // ----------------------------------------
      // PROJECT 4 SPECIFIC: Vertical Image Split Reveal
      // ----------------------------------------
      if (index === 3) {
        const leftSplit = section.querySelector('.split-left');
        const rightSplit = section.querySelector('.split-right');
        
        if (leftSplit && rightSplit) {
          gsap.fromTo(leftSplit, { yPercent: 20 }, {
            yPercent: 0,
            scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top', scrub: true }
          });
          gsap.fromTo(rightSplit, { yPercent: -20 }, {
            yPercent: 0,
            scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top', scrub: true }
          });
        }
      }

      // Universal Elements: Smooth Text Upward Slides
      if (textContainer) {
        gsap.fromTo(textContainer.children,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 65%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Universal Elements: Drawing the Copper Accent Lines (#B88272)
      if (accentLine) {
        gsap.fromTo(accentLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1.5,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Universal Elements: Sequential Counter Transitions
      if (counter) {
        gsap.fromTo(counter,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 0.15,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F8F5F2] text-[#2D2A28] overflow-hidden selection:bg-[#B88272] selection:text-white">
      
      {/* LUXURY ARCHITECTURAL HERO HEADER */}
      <header className="min-height-[40vh] md:min-height-[50vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-16 max-w-7xl mx-auto">
        <span className="text-[#B88272] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block font-['Inter']">
          Triveni Architectural Division
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#2D2A28] font-['Cormorant_Garamond'] leading-[1.1] tracking-tight max-w-4xl">
          Monolithic Stone Formations <br />for Permanent Architectural Icons.
        </h1>
        <div className="w-full h-[1px] bg-[#A89A92]/30 mt-12 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[#2D2A28]/80 text-sm md:text-base font-['Inter'] max-w-xl leading-relaxed">
            Curated configurations across major luxury developments in India. We emphasize technical elite masonry, flawless batch uniformity, and pure geometric precision.
          </p>
          <span className="text-xs font-semibold uppercase tracking-widest font-['Inter'] text-[#A89A92]">
            Scroll to Explore Matrix ({strategicProjects.length})
          </span>
        </div>
      </header>

      {/* IMMERSIVE IMAGE-FIRST PORTFOLIO SECTIONS */}
      <main className="w-full">
        {strategicProjects.map((project, index) => (
          <section
            key={project.id}
            ref={addToRefs}
            className="relative w-full min-h-[90vh] lg:min-h-[110vh] flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 border-b border-[#A89A92]/10 bg-[#F8F5F2]"
          >
            {/* Monumental Counter Placement */}
            <div className="project-counter absolute left-4 md:left-12 top-10 pointer-events-none select-none font-['Bodoni_Moda'] text-[12vw] md:text-[16vw] font-bold text-[#A89A92] opacity-0 leading-none z-0">
              {project.id}
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10">
              
              {/* IMAGE COLUMN: Occupies minimum 80% Visual Mass Configuration */}
              <div className="col-span-1 lg:col-span-8 w-full relative group">
                
                {/* Conditional structural variation rendering per project concept */}
                {index === 2 ? (
                  /* Project 3 Layer Depth Wrapper */
                  <div className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-[#2D2A28]/5 rounded-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-bg-img absolute inset-0 w-full h-[120%] object-cover origin-center"
                    />
                    {/* Floating Foreground Architectural Surface Fragment */}
                    <div className="fg-parallax-layer absolute right-4 md:right-12 bottom-[-10%] w-1/3 h-[50%] bg-[#A89A92] shadow-2xl overflow-hidden border border-[#F8F5F2]/20 hidden md:block">
                      <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" 
                        alt="Stone Detail Texture"
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                  </div>
                ) : index === 3 ? (
                  /* Project 4 Split Aspect Framing */
                  <div className="w-full h-[65vh] md:h-[80vh] grid grid-cols-2 gap-4">
                    <div className="split-left w-full h-full overflow-hidden rounded-sm relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-bg-img absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="split-right w-full h-full overflow-hidden rounded-sm relative mt-8">
                      <img
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
                        alt={`${project.title} secondary angle`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  /* Standard Massive High-Fidelity Showcase Frame */
                  <div className="w-full h-[65vh] md:h-[85vh] overflow-hidden bg-[#2D2A28]/5 rounded-sm relative shadow-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-bg-img w-full h-full object-cover origin-center transform"
                    />
                  </div>
                )}
              </div>

              {/* SECONDARY TEXT COLUMN: Elegant Editorial Identity Layout */}
              <div className="col-span-1 lg:col-span-4 flex flex-col justify-center lg:pl-4">
                <div className="project-text-container flex flex-col items-start">
                  
                  {/* Subtle Contextual Meta Data */}
                  <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest font-['Inter'] text-[#A89A92] mb-3">
                    <span>{project.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B88272]/50"></span>
                    <span>{project.scale}</span>
                  </div>

                  {/* Copper Accent Line Dynamic Draw (#B88272) */}
                  <div className="project-accent-line w-24 h-[2px] bg-[#B88272] mb-6 origin-left"></div>

                  {/* Primary Editorial Title */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light font-['Cormorant_Garamond'] text-[#2D2A28] leading-[1.15] mb-6 tracking-tight">
                    {project.title}
                  </h2>

                  {/* Minimal Luxury Narrative */}
                  <p className="text-sm md:text-base font-['Inter'] font-light text-[#2D2A28]/80 leading-relaxed mb-8 max-w-sm">
                    {project.description}
                  </p>

                  {/* Interactive Premium Signifier */}
                  <button className="group/btn flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase font-['Inter'] text-[#2D2A28] hover:text-[#B88272] transition-colors duration-300">
                    <span>View Project</span>
                    <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300 text-[#B88272]">
                      →
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </section>
        ))}
      </main>

      {/* CONTINUOUS PREMIUM CLOSING BLOCK */}
      <footer className="py-32 px-6 text-center bg-[#F8F5F2] border-t border-[#A89A92]/20">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B88272] font-['Inter'] mb-4">
            Private Sourcing Access
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-['Cormorant_Garamond'] text-[#2D2A28] tracking-tight mb-6 leading-tight">
            Initiate a Material Specification
          </h2>
          <p className="text-sm md:text-base font-['Inter'] text-[#2D2A28]/70 mb-10 leading-relaxed max-w-md">
            Acquire pristine physical material blocks, dynamic digital layouts, and raw quarry composition profiles matching your studio requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center font-['Inter'] text-xs font-semibold tracking-widest uppercase">
            <button className="bg-[#2D2A28] text-[#F8F5F2] hover:bg-[#B88272] px-8 py-5 transition-colors duration-500 shadow-sm">
              Connect via Private Desk
            </button>
            <button className="bg-transparent text-[#2D2A28] hover:bg-[#2D2A28]/5 px-8 py-5 border border-[#2D2A28] transition-colors duration-300">
              Download Dossier Archive
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}