import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "35+ Years of Expertise",
    description: "Decades of knowledge in sourcing, processing, and delivering the world's finest natural stones.",
  },
  {
    number: "02",
    title: "Curated Premium Collection",
    description: "Handpicked marble, granite, quartzite, and exotic stones sourced from trusted global partners.",
  },
  {
    number: "03",
    title: "Precision Craftsmanship",
    description: "Every stone is carefully processed, inspected, and finished to the highest standards.",
  },
  {
    number: "04",
    title: "Trusted by Architects & Designers",
    description: "Preferred by professionals who seek uncompromising quality and timeless aesthetics.",
  },
];

export default function TriveniWhySection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".why-content-reveal",
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

      // Image scale reveal
      gsap.fromTo(
        ".why-image-reveal",
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Stagger reveal for features list
      gsap.fromTo(
        ".why-feature-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F8F6F2] text-[#1D1D1B] font-sans selection:bg-[#B9985A] selection:text-[#F8F6F2] py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#E7E1D8]"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col">
        
        {/* HEADER BLOCK */}
        <div className="why-content-reveal max-w-3xl space-y-3 mb-10 md:mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B7D6B] font-medium block">
            Why Triveni
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] font-display text-[#1D1D1B] leading-[1.1]">
            A Legacy Built on Stone, Trust & Craftsmanship
          </h2>
          <p className="text-sm md:text-base text-[#6E6B67] leading-[1.7] font-light max-w-xl">
            For over three decades, Triveni has delivered premium natural stone solutions combining timeless beauty, unmatched quality, and precision craftsmanship.
          </p>
          <div className="w-10 h-[1px] bg-[#B9985A] pt-1" />
        </div>

        {/* TWO-COLUMN LAYOUT USING FLEX */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-14">
          
          {/* LEFT: EDITORIAL IMAGE (Compact Flexbox) */}
          <div className="why-image-reveal flex-1 w-full relative h-[420px] md:h-[480px] rounded-[16px] overflow-hidden bg-[#EFECE6]">
            <img
              src="https://ik.imagekit.io/4cj6kauug/Triveni/triveni2022.webp"
              alt="Premium Marble Slabs"
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* RIGHT: ELEGANT REASONS / FEATURES LIST (Compact Flexbox) */}
          <div className="flex-1 w-full flex flex-col justify-between space-y-6 lg:space-y-0">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className="why-feature-item flex flex-col space-y-2 group"
              >
                {index !== 0 && <div className="w-full h-[1px] bg-[#E7E1D8] mb-4" />}
                
                <div className="flex items-baseline space-x-4">
                  <span className="font-numeric text-base md:text-lg text-[#B9985A] font-medium">
                    {feature.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#1D1D1B] group-hover:text-[#B9985A] transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-[#7A746C] font-light leading-relaxed pl-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}