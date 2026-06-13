import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TriveniScrollCanvas from "../../components/TriveniScrollCanvas";
import heroImg from "../../assets/heroImg.jpg";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle responsive layout detection safely
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[90vh] overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {isMobile ? (
          // --- MOBILE CREATIVE VIEW ---
          <motion.div
            key="mobile-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Changed from justify-end to justify-start + pt-24 to float it elegantly in the dark sky
            className="relative w-full h-full flex flex-col justify-start pt-24 px-6 text-white"
          >
            {/* Background Image Cinematic Scale & Ken Burns Effect */}
            <motion.div 
              initial={{ scale: 1.15, filter: "brightness(0.3) blur(3px)" }}
              animate={{ 
                scale: 1, 
                filter: "brightness(1.1) blur(0px)",
                transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
              }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={heroImg} 
                alt="Triveni Showroom" 
                className="w-full h-full object-cover"
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>

            {/* Subtle top-down gradient protection for optimal contrast against the sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />

            {/* Typography Content Overlay - Floating in Sky */}
            <div className="relative z-20 max-w-xs space-y-4">
              {/* Minimalist Subtitle / Welcome Line */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-semibold">
                  Triveni Studio
                </span>
                <span className="w-4 h-[1px] bg-amber-500/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Est. 1993
                </span>
              </motion.div>

              {/* High-End Architectural Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-extralight tracking-wide leading-[1.2]"
              >
                Crafting <br />
                <span className="font-light text-neutral-100">Architectural</span> <br />
                <span className="italic font-serif text-neutral-300">Masterpieces</span>
              </motion.h1>

              {/* Minimal Line Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={isLoaded ? { width: "40px" } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="h-[1px] bg-amber-500/80"
              />

              {/* Short, elegant paragraph layout */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 0.65 } : {}}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="text-xs text-neutral-300 font-light tracking-wide max-w-[220px] leading-relaxed"
              >
                Premium stone surfaces curated with pristine architectural precision.
              </motion.p>
            </div>

            {/* Micro Scroll Indicator Line */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 1.6 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
            >
              <div className="w-[1px] h-8 bg-gradient-to-b from-amber-500/70 to-transparent" />
            </motion.div>
          </motion.div>
        ) : (
          // --- DESKTOP CANVAS VIEW ---
          <motion.div
            key="desktop-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            <TriveniScrollCanvas />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}