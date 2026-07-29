import React, { useEffect, useState, useRef } from "react";

// Clean static metadata configuration
const statsData = [
  { label: "Years of Excellence", numericValue: 39, suffix: "+" },
  { label: "Premium Collections", numericValue: 500, suffix: "+" },
  { label: "Projects Delivered", numericValue: 2000, suffix: "+" },
  { label: "Happy Clients", numericValue: 10000, suffix: "+" },
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
      
      // Easing out cubic curve for an elegant deceleration feel
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
    <div className="border-b border-brand py-6 md:py-8 flex justify-between items-baseline group hover:border-brand-medium transition-editorial first:pt-0 last:border-b-0">
      <span className="font-ui text-xs md:text-sm text-secondary font-semibold tracking-[0.15em] uppercase">
        {label}
      </span>
      {/* tabular-nums ensures smooth vertical counting layouts without layout jitter */}
      <span className="font-number text-3xl md:text-5xl text-accent font-medium tracking-tight tabular-nums group-hover:text-primary transition-editorial">
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
      className="bg-brand text-primary font-body py-16 md:py-24 px-5 md:px-10 lg:px-[120px] overflow-hidden border-t border-brand select-none antialiased"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Narrative Frame */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-accent font-bold block">
              About Triveni
            </span>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary leading-[1.12]">
              Defined by Scale, <br />
              <span className="italic text-accent">Consistency</span>, and Control
            </h2>
          </div>
          
          <p className="font-body text-base md:text-lg text-secondary font-normal leading-relaxed max-w-md">
            Every figure reflects a manufacturing process built on strict quality standards and
            dependable supply built over decades of experience. Supplying across India and to
            select export markets.
          </p>

          <div className="w-14 h-[2.5px] bg-accent" />

          {/* Premium Video Framer Box */}
          <div className="rounded-editorial overflow-hidden aspect-[16/9] w-full max-w-md bg-soft relative group shadow-card border border-brand/50 mt-2">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-editorial z-10 pointer-events-none" />
            <video
              src="https://res.cloudinary.com/x5rakscg/video/upload/v1785237224/animated_vedio_coi2cg.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02] transition-editorial group-hover:scale-105 duration-700"
            />
          </div>
        </div>

        {/* Right Stats Frame */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-7 w-full flex flex-col justify-center">
          <div className="bg-card border border-brand p-8 md:p-12 rounded-editorial-lg shadow-card">
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
