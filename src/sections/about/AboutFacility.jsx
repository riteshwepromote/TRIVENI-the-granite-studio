import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Asset Mock Bindings ---
import built1 from "../../assets/about/facility1.png";
import built2 from "../../assets/about/facility2.png";
import built3 from "../../assets/about/facility3.png";

const REFRESHED_PROCESS_STEPS = [
  {
    num: "01",
    title: "Handpicked at the Source",
    subtitle: "Direct Quarry Selection",
    desc: "Every great stone begins at its origin. We directly procure granite blocks from carefully selected mines across India and abroad. Instead of buying through multiple intermediaries, our team personally inspects and selects only the finest blocks based on color consistency, strength, pattern, and natural beauty. This direct sourcing allows us to offer superior quality while maintaining complete transparency.",
    img: built1
  },
  {
    num: "02",
    title: "Precision Processing",
    subtitle: "Abu Road State-of-the-Art Facility",
    desc: "Once selected, the blocks are transported to our state-of-the-art processing facility in Abu Road, Rajasthan. Using advanced Italian technology and precision machinery, every slab is processed with strict quality standards. This ensures uniform thickness throughout the slab, superior surface flatness, exceptional polish, clarity, and enhanced edge quality.",
    img: built2
  },
  {
    num: "03",
    title: "Genuine Character, No Alterations",
    subtitle: "Zero Artificial Enhancement",
    desc: "At Triveni, we believe nature creates the most beautiful designs. Unlike many suppliers who use dyes, colors, or artificial treatments to enhance the appearance of stone, we do not alter the natural face of our granite. What you see is the stone's genuine character, ensuring long-term color stability and absolute authenticity.",
    img: built3
  },
  {
    num: "04",
    title: "Safe Handling & Logistics",
    subtitle: "Reinforced Transportation Matrix",
    desc: "Quality can be lost during transportation if handled carelessly. Every slab is packed, secured, and loaded with utmost care to prevent corner chipping, edge damage, or surface scratches. Our logistics team follows strict handling protocols so that the stone reaches our showroom and your site in pristine condition.",
    img: built1
  },
  {
    num: "05",
    title: "Experience Before You Buy",
    subtitle: "Mohali Experience Centre",
    desc: "Our Mohali Experience Centre is designed to make stone selection simple, transparent, and inspiring. Clients can explore a wide range of carefully curated granites, marbles, and luxury surfaces in a comfortable environment. Every slab is displayed honestly, allowing customers to see the actual material before making a decision.",
    img: built2
  },
  {
    num: "06",
    title: "Expert Design Assistance",
    subtitle: "Aesthetic & Structural Guidance",
    desc: "Selecting stone is not just about choosing a color—it's about creating a space. Our in-house interior design team assists clients, architects, and designers in selecting the right materials based on aesthetics, functionality, lighting conditions, and overall architectural design language to transform ideas into reality.",
    img: built3
  },
  {
    num: "07",
    title: "Site Visits & Technical Audits",
    subtitle: "Proactive Installation Support",
    desc: "Our relationship does not end with the sale. The Triveni team regularly visits project sites before, during, and after installation. We coordinate with masons and contractors to ensure proper laying techniques, correct pattern matching, alignment, finishing, and detailing to prevent costly installation errors.",
    img: built1
  },
  {
    num: "08",
    title: "A Commitment Beyond Stone",
    subtitle: "End-to-End Peace of Mind",
    desc: "At Triveni, we don't simply sell granite. We manage every single step—from mine selection and precision manufacturing to design consultation, site supervision, and final installation support. This comprehensive end-to-end approach allows us to deliver not just stone, but complete peace of mind.",
    img: built2
  }
];

const designSystemTokens = `
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght=0,6..96,400;1,6..96,400&family=Cormorant+Garamond:ital,wght=0,300;0,400;1,300&family=Inter:wght=300;400;500;600&display=swap');

  .font-luxury-serif { font-family: 'Cormorant Garamond', serif; }
  .font-luxury-display { font-family: 'Bodoni Moda', serif; }
  .font-editorial-sans { font-family: 'Inter', sans-serif; }
`;

export default function AboutFacility() {
  const containerRef = useRef(null);

  // Offset tracking aligned cleanly to viewport boundaries
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Pure Viewport Width translation mapping to bypass component layout rounding issues
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0vw", "-700vw"]);

  return (
    <div className="bg-[#1A1817] text-[#2D2A28] font-editorial-sans antialiased selection:bg-[#B88272] selection:text-white">
      <style>{designSystemTokens}</style>

      {/* SCROLL TRACK CONTAINER */}
      <div ref={containerRef} className="relative h-[800vh] w-full bg-[#1A1817]">
        
        {/* STICKY BOX PIN */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          {/* HORIZONTAL FLEX CAROUSEL STRIP */}
          <motion.div 
            style={{ x: xTranslation }} 
            className="flex h-full w-[800vw] will-change-transform"
          >
            {REFRESHED_PROCESS_STEPS.map((step, idx) => (
              <section 
                key={idx}
                className="w-screen h-screen flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden bg-[#1A1817]"
              >
                {/* IMMERSIVE IMAGE LAYER */}
                <div className="col-span-1 lg:col-span-6 relative h-1/2 lg:h-full w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1817]/80 z-10 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-transparent to-transparent z-10 lg:hidden" />
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover select-none pointer-events-none object-center"
                    loading={idx <= 1 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 border-r border-white/5 pointer-events-none z-20 m-6" />
                </div>

                {/* EDITORIAL NARRATIVE CONTENT BLOCK */}
                <div className="col-span-1 lg:col-span-6 h-1/2 lg:h-full bg-[#1A1817] text-[#F8F5F2] flex flex-col justify-center px-6 md:px-16 lg:px-24 relative">
                  
                  {/* Top Navigation HUD */}
                  <div className="absolute top-8 left-6 right-6 lg:left-24 lg:right-24 hidden md:flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#B88272] font-semibold">
                      Triveni Quality Matrix
                    </span>
                    <span className="font-luxury-display text-sm tracking-widest text-[#A89A92]/60">
                      {step.num} // 08
                    </span>
                  </div>

                  {/* Core Content Layout */}
                  <div className="max-w-xl space-y-4 md:space-y-6">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] text-[#A89A92] uppercase block font-medium mb-1">
                        {step.subtitle}
                      </span>
                      <h2 className="text-2xl md:text-5xl font-luxury-serif font-light text-white tracking-tight leading-[1.15]">
                        {step.title.split(" ").map((word, wIdx) => 
                          wIdx % 2 === 1 ? (
                            <span key={wIdx} className="font-luxury-display italic text-[#B88272] mr-2">{word} </span>
                          ) : (
                            <span key={wIdx} className="mr-2">{word} </span>
                          )
                        )}
                      </h2>
                    </div>

                    <p className="text-xs md:text-[15px] text-[#F8F5F2]/70 font-light leading-relaxed text-justify tracking-wide">
                      {step.desc}
                    </p>
                  </div>

                  {/* Operational Bottom HUD Footer */}
                  <div className="absolute bottom-8 left-6 right-6 lg:left-24 lg:right-24 hidden md:flex items-center justify-between border-t border-white/5 pt-4 text-[9px] text-[#A89A92] tracking-wider uppercase font-light">
                    <span>Mined Quality to Finished Laying</span>
                    <span>Triveni Production © 2026</span>
                  </div>

                </div>
              </section>
            ))}
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}