import React, { useEffect, useState, useRef } from "react";

const designSystemStyles = `
  .smooth-scroll-container {
    --progress: 0;
    --mouse-x: 0px;
    --mouse-y: 0px;
  }

  /* --- DESKTOP ENGINE (MIN-WIDTH: 1024px) --- */
  @media (min-width: 1024px) {
    .kinetic-canvas-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      z-index: 10;
    }

    .kinetic-canvas {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      will-change: transform, border-radius;
      transform-origin: center center;
      transform: 
        translate3d(calc(var(--progress) * 23.5vw), 0, 0) 
        scaleX(calc(1 - (var(--progress) * 0.58))) 
        scaleY(calc(1 - (var(--progress) * 0.42)));
      border-radius: calc(var(--progress) * 16px);
      box-shadow: 0 30px 80px rgba(45, 42, 40, calc(var(--progress) * 0.06));
      transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.15s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .kinetic-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      will-change: transform;
      transform: 
        scale(calc(1.15 - (var(--progress) * 0.15)))
        translate3d(
          calc(var(--mouse-x) * calc(1 - var(--progress))), 
          calc(var(--mouse-y) * calc(1 - var(--progress))), 
          0
        );
      transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    }
  }

  /* --- CLEAN MOBILE COMPOSITION ENGINE (MAX-WIDTH: 1023px) --- */
  @media (max-width: 1023px) {
    .kinetic-canvas-container {
      position: relative;
      width: 100%;
      height: 70vh; /* Fixed premium frame size for mobile header */
      overflow: hidden;
    }
    
    .kinetic-canvas {
      width: 100%;
      height: 100%;
    }

    .kinetic-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .cinematic-border-frame { inset: 16px !important; }
    .crosshair-tl { top: 24px !important; left: 24px !important; }
    .crosshair-tr { top: 24px !important; right: 24px !important; }
    .crosshair-bl { bottom: 24px !important; left: 24px !important; }
    .crosshair-br { bottom: 24px !important; right: 24px !important; }
  }

  /* --- BRANDING DECORATIONS & ANCHORS --- */
  .cinematic-border-frame {
    position: absolute;
    inset: 40px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    pointer-events: none;
    z-index: 12;
    opacity: 0;
    transform: scale(1.02);
    transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1), transform 2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .cinematic-border-frame.active {
    opacity: calc(1 - (var(--progress) * 4));
    transform: scale(1);
  }

  @media (max-width: 1023px) {
    .cinematic-border-frame.active { opacity: 1; }
    .architectural-crosshair.active { opacity: 0.6; }
  }

  .architectural-crosshair {
    position: absolute;
    width: 30px;
    height: 30px;
    pointer-events: none;
    z-index: 11;
    opacity: 0;
    transition: opacity 1.5s ease-out;
  }
  .architectural-crosshair::before, .architectural-crosshair::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.25);
  }
  .architectural-crosshair::before { top: 14px; left: 0; width: 100%; height: 1px; }
  .architectural-crosshair::after { left: 14px; top: 0; width: 1px; height: 100%; }
  
  .crosshair-tl { top: 60px; left: 60px; }
  .crosshair-tr { top: 60px; right: 60px; }
  .crosshair-bl { bottom: 120px; left: 60px; }
  .crosshair-br { bottom: 120px; right: 60px; }
  
  .architectural-crosshair.active { opacity: calc(1 - (var(--progress) * 5)); }

  .ambient-hero-title {
    position: absolute;
    z-index: 13;
    text-align: center;
    color: #FFFFFF;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    will-change: transform, opacity;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (min-width: 1024px) {
    .ambient-hero-title {
      transform: translate3d(
        calc(var(--mouse-x) * -0.4 * calc(1 - var(--progress))), 
        calc(var(--mouse-y) * -0.4 * calc(1 - var(--progress))), 
        0
      );
      opacity: calc(1 - (var(--progress) * 3));
    }
  }

  /* Content Transitions */
  .clip-reveal {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transform: translateY(30px);
    opacity: 0;
    transition: clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), 
                opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .clip-reveal.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translateY(0);
    opacity: 1;
  }

  .line-grow {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .line-grow.active { transform: scaleX(1); }
`;

const AboutHero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const overlaysRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);

    const timer = setTimeout(() => {
      if (overlaysRef.current) {
        overlaysRef.current.querySelectorAll(".init-trigger").forEach((el) => el.classList.add("active"));
      }
      if (textRef.current) {
        textRef.current.querySelectorAll(".animate-trigger").forEach((el) => el.classList.add("active"));
      }
    }, 300);

    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = windowHeight * 1.4; 
      const currentProgress = Math.min(Math.max(-rect.top / totalScrollableDistance, 0), 1);
      
      sectionRef.current.style.setProperty("--progress", currentProgress);
    };

    const handleMouseMove = (e) => {
      if (!sectionRef.current || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const targetMouseX = `${((e.clientX / innerWidth) - 0.5) * 25}px`;
      const targetMouseY = `${((e.clientY / innerHeight) - 0.5) * 25}px`;
      sectionRef.current.style.setProperty("--mouse-x", targetMouseX);
      sectionRef.current.style.setProperty("--mouse-y", targetMouseY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{designSystemStyles}</style>
      
      <section 
        ref={sectionRef}
        className="smooth-scroll-container relative w-full bg-[#F8F5F2] text-[#2D2A28] font-sans-editorial h-auto lg:h-[240vh] selection:bg-[#B88272] selection:text-white"
      >
        {/* Removed 'h-screen overflow-hidden flex-col justify-center' on mobile to let document content flow natively */}
        <div className="lg:sticky lg:top-0 lg:left-0 w-full lg:h-screen lg:overflow-hidden flex flex-col justify-center px-0 lg:px-16">
          
          {/* --- HERO MEDIA CONTAINER --- */}
          <div className="kinetic-canvas-container flex items-center justify-center relative" ref={overlaysRef}>
            <div className="cinematic-border-frame init-trigger" />
            <div className="architectural-crosshair crosshair-tl init-trigger" />
            <div className="architectural-crosshair crosshair-tr init-trigger" />
            <div className="architectural-crosshair crosshair-bl init-trigger" />
            <div className="architectural-crosshair crosshair-br init-trigger" />

            <div className="ambient-hero-title px-4">
              <span className="text-[10px] md:text-xs tracking-[0.6em] text-white/60 uppercase font-medium init-trigger clip-reveal">
                The Architecture of Space
              </span>
              <h2 className="font-serif-luxury text-4xl md:text-7xl font-light tracking-wide italic init-trigger clip-reveal">
                Triveni Studio
              </h2>
            </div>

            <div className="kinetic-canvas">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2200" 
                alt="Premium architectural marble showroom interior" 
                className="kinetic-image"
                loading="eager"
              />
              <div 
                className="absolute inset-x-0 bottom-16 hidden lg:flex flex-col items-center justify-center text-center text-white mix-blend-difference pointer-events-none transition-opacity duration-300"
                style={{ opacity: `calc(1 - (var(--progress) * 6))` }}
              >
                <span className="text-[10px] tracking-[0.4em] uppercase font-light mb-2">Scroll to Unveil</span>
                <div className="w-[1px] h-8 bg-white/40 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1/2 bg-white animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTENT BLOCK LAYER --- */}
          {/* Fixed padding structure: clean container margins on desktop, safe non-overlapping document flow spacing on mobile */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-20 px-6 md:px-16 lg:px-0 py-12 lg:py-0">
            
            {/* TEXT BOX */}
            <div 
              ref={textRef} 
              className="col-span-1 lg:col-span-6 space-y-4 lg:space-y-8 lg:pr-12"
              style={{ 
                opacity: isMobile ? 1 : `calc((var(--progress) - 0.25) * 4)`,
                transform: isMobile ? "none" : `translate3d(0, calc((1 - var(--progress)) * 25px), 0)`
              }}
            >
              <div className="space-y-2 lg:space-y-4">
                <p className="text-xs tracking-[0.5em] text-[#B88272] uppercase font-medium animate-trigger clip-reveal">
                  About Triveni
                </p>
                <h1 className="font-serif-luxury text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] lg:leading-[1.05] font-light animate-trigger clip-reveal">
                  Crafting Stone <br />
                  <span className="italic">Into Legacy.</span>
                </h1>
              </div>

              <div className="w-16 h-[1px] bg-[#B88272]/70 animate-trigger line-grow" />

              <div className="max-w-md">
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#2D2A28]/80 font-light tracking-wide animate-trigger clip-reveal">
                  Over thirty-five years of curation, our quarry network spans the globe, delivering raw tectonic strength into refined architectural masterpieces.
                </p>
              </div>
            </div>

            {/* NUMERICAL COUNTERS BOX */}
            <div className="col-span-1 lg:col-span-6 flex flex-col items-end w-full justify-center relative">
              <div className="w-full aspect-[4/3] hidden lg:block invisible" />
              
              <div 
                className="w-full grid grid-cols-3 gap-4 lg:gap-6 pt-6 border-t border-[#A89A92]/20 transition-all duration-300"
                style={{ 
                  opacity: isMobile ? 1 : `calc((var(--progress) - 0.75) * 4)`,
                  transform: isMobile ? "none" : `translate3d(0, calc((1 - var(--progress)) * 15px), 0)`
                }}
              >
                <div>
                  <p className="font-serif-luxury text-2xl md:text-3xl font-light">35</p>
                  <p className="text-[9px] tracking-[0.15em] uppercase font-medium text-[#A89A92] mt-0.5">Years Active</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-2xl md:text-3xl font-light">500+</p>
                  <p className="text-[9px] tracking-[0.15em] uppercase font-medium text-[#A89A92] mt-0.5">Varieties</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-2xl md:text-3xl font-light">40+</p>
                  <p className="text-[9px] tracking-[0.15em] uppercase font-medium text-[#A89A92] mt-0.5">Channels</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default AboutHero;