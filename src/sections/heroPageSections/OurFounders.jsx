import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    id: "01",
    name: "Rajesh Kumar",
    designation: "Founder & Chairman",
    philosophy: "“True luxury in stone is found in respecting its raw origin while guiding it toward timeless elegance.”",
    image: "https://ik.imagekit.io/4cj6kauug/Triveni/ownerthree",
  },
  {
    id: "02",
    name: "Vikram Kumar",
    designation: "Managing Director",
    philosophy: "“Our legacy is built on the quiet consistency of uncompromising standards and profound heritage.”",
    image: "https://ik.imagekit.io/4cj6kauug/Triveni/owner2",
  },
  {
    id: "03",
    name: "Anand Kumar",
    designation: "Director of Global Craft",
    philosophy: "“We do not merely source surfaces; we curate enduring narratives carved by earth over millennia.”",
    image: "https://ik.imagekit.io/4cj6kauug/Triveni/owner1",
  },
];

export default function TriveniVisionariesSection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".visionary-content-reveal",
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F8F6F2] text-[#1D1D1B] font-sans selection:bg-[#B9985A] selection:text-[#F8F6F2] py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#E6E1D8]"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        
        {/* HEADER BLOCK */}
        <div className="visionary-content-reveal text-center max-w-2xl space-y-3 mb-10 md:mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B7D6B] font-medium block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] font-display text-[#1D1D1B]">
            Meet The Visionaries
          </h2>
          <p className="text-sm md:text-base text-[#6E6B67] leading-[1.7] font-light max-w-xl mx-auto">
            Decades of foundational vision shaped Triveni into a trusted name in natural stone, driving our ongoing pursuit of integrity and craftsmanship.
          </p>
        </div>

        {/* FOUNDER CARDS CONTAINER (Compact Flexbox) */}
        <div className="visionary-content-reveal w-full flex flex-col lg:flex-row justify-between items-stretch gap-6 md:gap-8">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="flex-1 flex flex-col group cursor-pointer"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-[360px] md:h-[400px] rounded-[16px] overflow-hidden border border-[rgba(0,0,0,0.06)] bg-[#EFECE6]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-[#F8F6F2]/90 backdrop-blur-sm px-3 py-0.5 rounded-md">
                  <span className="font-numeric text-xs tracking-widest text-[#B9985A]">
                    {founder.id}
                  </span>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="pt-5 flex flex-col flex-grow space-y-2 text-left">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#8B7D6B] font-medium mb-1">
                    {founder.designation}
                  </h4>
                  <h3 className="text-2xl md:text-3xl font-medium font-display text-[#1D1D1B]">
                    {founder.name}
                  </h3>
                </div>

                <div className="w-full h-[1px] bg-[#E6E1D8] transition-colors duration-500 group-hover:bg-[#B9985A]" />

                <p className="font-display italic text-base md:text-lg text-[#4D4D4D] leading-snug">
                  {founder.philosophy}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}