import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TriveniShowcaseSection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".showcase-content-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards staggered reveal
      gsap.utils.toArray(".showcase-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F8F6F2] text-[#1D1D1B] font-sans selection:bg-[#B9985A] selection:text-[#F8F6F2] py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#E6E1D8]"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col">
        
        {/* HEADER BLOCK */}
        <div className="showcase-content-reveal flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B7D6B] font-medium block">
              Our Craft
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] font-display text-[#1D1D1B] leading-[1.1]">
              Where Exceptional Stone Meets Extraordinary Spaces
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-[#6E6B67] leading-[1.7] font-light">
              From iconic architectural projects to an exclusive collection of natural stones, discover the craftsmanship that has defined Triveni for decades.
            </p>
          </div>
        </div>

        {/* DUAL EDITORIAL CARDS CONTAINER (Compact Flexbox) */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* LEFT CARD: SIGNATURE PROJECTS (60%) */}
          <div className="showcase-card flex-[60%] relative h-[420px] md:h-[480px] rounded-[16px] overflow-hidden group cursor-pointer bg-[#1D1D1B]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Signature Projects"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04] opacity-90"
              loading="lazy"
              decoding="async"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10 text-white">
              <div className="flex justify-between items-start">
                <span className="font-numeric text-xs tracking-widest text-[#B9985A]">01</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-medium">Architecture</span>
              </div>

              <div className="space-y-4 max-w-lg">
                <div className="space-y-1.5">
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
                    Signature Projects
                  </h3>
                  <p className="text-gray-300 font-light text-sm md:text-base">
                    Landmarks crafted with timeless natural stone.
                  </p>
                </div>

                <div>
                  <button className="inline-flex items-center justify-center bg-[#1D1D1B] text-white px-7 py-3 rounded-full font-medium text-[11px] uppercase tracking-[0.18em] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2C2C29] border border-white/10 shadow-md">
                    Explore Projects
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: STONE COLLECTION (40%) */}
          <div className="showcase-card flex-[40%] relative h-[420px] md:h-[480px] rounded-[16px] overflow-hidden group cursor-pointer bg-[#1D1D1B]">
            <img
              src="https://ik.imagekit.io/4cj6kauug/Triveni/triveni2022.webp"
              alt="Stone Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04] opacity-90"
              loading="lazy"
              decoding="async"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10 text-white">
              <div className="flex justify-between items-start">
                <span className="font-numeric text-xs tracking-widest text-[#B9985A]">02</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-medium">Surfaces</span>
              </div>

              <div className="space-y-4 max-w-md">
                <div className="space-y-1.5">
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
                    Stone Collection
                  </h3>
                  <p className="text-gray-300 font-light text-sm md:text-base">
                    Granite, Marble, Quartzite & Luxury Surfaces.
                  </p>
                </div>

                <div>
                  <button className="inline-flex items-center justify-center bg-[#1D1D1B] text-white px-7 py-3 rounded-full font-medium text-[11px] uppercase tracking-[0.18em] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2C2C29] border border-white/10 shadow-md">
                    Browse Collection
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}