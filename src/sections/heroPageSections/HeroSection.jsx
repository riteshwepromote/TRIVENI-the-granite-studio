import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TriveniScrollCanvas from "../../components/TriveniScrollCanvas";
import heroImg from "../../assets/heroimg.jpg";

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
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {isMobile ? (
          // --- MOBILE CREATIVE VIEW ---
          <motion.div
            key="mobile-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex flex-col justify-end p-6 md:p-12 text-white"
          >
            {/* Background Image Cinematic Scale & Ken Burns Effect */}
            <motion.div 
              initial={{ scale: 1.2, filter: "brightness(0.3) blur(4px)" }}
              animate={{ 
                scale: 1, 
                filter: "brightness(0.6) blur(0px)",
                transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
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

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            {/* Typography Content Overlay */}
            <div className="relative z-20 mb-8 max-w-md space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                  Welcome to Triveni
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-light tracking-tight leading-none"
              >
                Crafting <br />
                <span className="font-semibold text-amber-500">Architectural</span> <br />
                Masterpieces.
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={isLoaded ? { width: "60px" } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="h-[2px] bg-amber-500"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 0.8 } : {}}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="text-sm text-gray-300 font-light leading-relaxed"
              >
                Experience premium stones and architecture brought to life with dynamic precision.
              </motion.p>
            </div>

            {/* Subtle Scroll/Swipe indicator */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Scroll</span>
              <div className="w-[1px] h-6 bg-gray-500/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-500 animate-bounce" />
              </div>
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