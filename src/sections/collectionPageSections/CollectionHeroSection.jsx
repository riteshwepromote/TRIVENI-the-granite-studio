import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// --- Animated Counter Component for Stats ---
const StatCounter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1], // Custom elegant ease-out
    });
    
    const unsubscribe = rounded.on("change", (latest) => {
      // Formats 1000 to 1,000 to match design parity
      setDisplayValue(latest.toLocaleString());
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, value, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

// --- Main Hero Component ---
export default function CuratedSurfacesHero() {
  // Animation Variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.215, 0.61, 0.355, 1], // cubic-bezier easeOutQuad
      },
    },
  };

  const stats = [
    { value: 10, suffix: '', label: 'Categories' },
    { value: 350, suffix: '+', label: 'Products' },
    { value: 36, suffix: '', label: 'Years of Expertise' },
    { value: 1000, suffix: '+', label: 'Projects Completed' },
  ];

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex flex-col justify-center text-white overflow-hidden bg-[#1c1d1f]">
      
      {/* Background Layer: Split Layout with Curved Marble Accent */}
      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row pointer-events-none z-0">
        {/* Left Side: Soft Blur Ambient Texture */}
        <div 
          className="w-full md:w-[55%] h-full bg-cover bg-center opacity-45 mix-blend-luminosity filter contrast-125"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />
        
        {/* Right Side / Overlay: Precision Curved Mask to mirror image layout */}
        <div 
          className="absolute right-0 top-0 w-full md:w-[65%] h-full bg-cover bg-center md:clip-ellipse-custom"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1800')`,
            boxShadow: 'inset 120px 0 150px -50px rgba(28,29,31,0.95)'
          }}
        />
        
        {/* Dark Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1f] via-[#1c1d1f]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d1f] via-transparent to-[#1c1d1f]/30 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-24 pt-20 pb-16 flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Hero Typography Group */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl mt-auto mb-16 md:mb-24"
        >
          {/* Serif Heading mimicking Playfair Display / Custom Editorial font */}
          <motion.h1 
            variants={textVariants}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-wide leading-[1.1] mb-6 drop-shadow-sm"
          >
            Curated Surfaces <br />
            <span className="italic font-normal">for Every Vision</span>
          </motion.h1>

          {/* Subtext description */}
          <motion.p 
            variants={textVariants}
            className="font-sans text-sm sm:text-base text-gray-300/90 max-w-lg leading-relaxed tracking-wide font-light"
          >
            Explore 10 premium material categories — from natural stone quarried at source to engineered composites built to last.
          </motion.p>
        </motion.div>

        {/* Operational Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-8 border-t border-white/10 max-w-4xl"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white/95">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-gray-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Global CSS Extension for Custom Marble Ellipse Mask Line */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:clip-ellipse-custom {
            clip-path: ellipse(85% 100% at 85% 50%);
          }
        }
      `}</style>
    </section>
  );
}