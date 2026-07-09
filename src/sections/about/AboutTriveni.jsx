import React, { useEffect, useState, useRef } from 'react';
import factoryVideo from "../../assets/about/animated vedio.mp4";

// Clean static metadata configuration
const statsData = [
  { label: 'Years of Excellence', numericValue: 39, suffix: '+' },
  { label: 'Premium Collections', numericValue: 500, suffix: '+' },
  { label: 'Projects Delivered', numericValue: 2000, suffix: '+' },
  { label: 'Happy Clients', numericValue: 10000, suffix: '+' },
];

// Lightweight GPU-friendly count up hook using dynamic frame steps
const useAnimatedCounter = (targetValue, duration = 1800, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out cubic curve for an elegant, premium deceleration feel
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutCubic * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration, shouldStart]);

  return count.toLocaleString();
};

const StatRow = ({ label, numericValue, suffix, isVisible }) => {
  const animatedValue = useAnimatedCounter(numericValue, 1800, isVisible);

  return (
    <div className="border-b border-[#2D2A28]/10 py-6 md:py-8 flex justify-between items-baseline group hover:border-[#B78A79]/40 transition-colors duration-500 first:pt-0 last:border-b-0">
      <span className="font-editorial-sans text-[13px] md:text-sm text-[#2D2A28]/70 font-light tracking-wide uppercase">
        {label}
      </span>
      {/* tabular-nums ensures smooth vertical counting layouts without dynamic horizontal vibration jumps */}
      <span className="font-luxury-serif text-2xl md:text-4xl text-[#B78A79] font-light tracking-tight tabular-nums group-hover:text-[#9A6A5B] transition-colors duration-500">
        {animatedValue}{suffix}
      </span>
    </div>
  );
};

export default function AboutSection() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="bg-[#F8F5F2] py-20 md:py-28 px-6 md:px-16 lg:px-24 select-none antialiased"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Narrative Frame */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6">
          <div>
            <span className="text-[#B78A79] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] block mb-3">
              About Triveni
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-luxury-serif font-light text-[#1A1817] leading-[1.15] tracking-tight">
              Defined by Scale, <br />
              <span className="font-luxury-display italic text-[#B78A79]">Consistency</span>, and Control
            </h2>
          </div>
          
          <p className="text-[#2D2A28]/70 font-editorial-sans text-xs md:text-[13px] font-light leading-relaxed text-justify tracking-wide max-w-md">
            Every figure reflects a manufacturing process built on strict quality standards and
            dependable supply built over decades of experience. Supplying across India and to
            select export markets.
          </p>

          {/* Premium Video Framer Box */}
          <div className="rounded-sm overflow-hidden aspect-[16/9] w-full max-w-md bg-[#1A1817]/5 relative group shadow-sm">
            <div className="absolute inset-0 bg-[#1A1817]/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            <video
              src={factoryVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
            />
          </div>
        </div>

        {/* Right Stats Frame Spacer Grid Offset */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-7 w-full flex flex-col justify-center">
          <div className="bg-[#1A1817]/[0.02] border border-[#1A1817]/5 p-8 md:p-12 rounded-sm backdrop-blur-xs">
            {statsData.map((stat, idx) => (
              <StatRow
                key={idx}
                label={stat.label}
                numericValue={stat.numericValue}
                suffix={stat.suffix}
                isVisible={hasIntersected}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}