import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroScroledVideo from "../../assets/optimizedHeroVideo.mp4";

gsap.registerPlugin(ScrollTrigger);

function DesktopCanvas() {
  const containerRef = useRef(null);
  const pinTargetRef = useRef(null); // Ref for the viewport element we want to lock
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // --- 1. INITIAL ENTRANCE ANIMATION (FADE-IN) ---
    const fadeInFrame = window.requestAnimationFrame(() => {
      [
        eyebrowRef.current,
        titleRef.current,
        lineRef.current,
        subtitleRef.current,
      ].forEach((node, index) => {
        if (!node) return;
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
        node.style.filter = "blur(0px)";
        node.style.transition =
          "opacity 900ms ease, transform 900ms ease, filter 900ms ease";
        node.style.transitionDelay = `${index * 120}ms`;
      });
    });

    // --- 2. GSAP SCROLLTRIGGER WITH PINNING ---
    let tl;
    
    const initScrollAnimation = () => {
      const videoProxy = { currentTime: 0 };

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",         // Start pinning when the top of the container hits top of viewport
          end: "+=280%",            // Scroll duration equivalent to your original height
          scrub: 1.5, 
          pin: pinTargetRef.current,// Let GSAP physically lock this container in place
          pinSpacing: true,         // Create layout space so content below won't overlap
        },
      });

      tl.to(videoProxy, {
        currentTime: video.duration || 5,
        ease: "none",
        onUpdate: () => {
          video.currentTime = videoProxy.currentTime;
        },
      });
    };

    if (video.readyState >= 1) {
      initScrollAnimation();
    } else {
      video.addEventListener("loadedmetadata", initScrollAnimation);
    }

    return () => {
      window.cancelAnimationFrame(fadeInFrame);
      if (video) {
        video.removeEventListener("loadedmetadata", initScrollAnimation);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    // Outer trigger wrapper
    <div ref={containerRef} className="w-full bg-[#0d0b08]">
      
      {/* The actual viewport container that stays rock-solid using GSAP pin */}
      <div 
        ref={pinTargetRef} 
        className="w-full h-screen overflow-hidden flex items-center justify-center relative"
      >
        
        {/* --- DESKTOP HIGH-END TYPOGRAPHY OVERLAY --- */}
        <div
          ref={textRef}
          style={{
            position: "absolute",
            left: "8%",
            top: "24%",
            zIndex: 20,
            color: "#f5ede0",
            maxWidth: "550px",
            pointerEvents: "none",
            willChange: "transform, opacity, filter",
          }}
        >
          <p
            ref={eyebrowRef}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.5em",
              color: "#c8a96e",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 500,
              opacity: 0,
              transform: "translateY(24px)",
              filter: "blur(6px)",
            }}
          >
            Crafting Spaces
          </p>
          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "76px",
              fontWeight: 200,
              lineHeight: "1.05",
              letterSpacing: "0.06em",
              margin: "0 0 20px 0",
              color: "#ffffff",
              opacity: 0,
              transform: "translateY(24px)",
              filter: "blur(6px)",
            }}
          >
            Since 1989
          </h1>
          <div
            ref={lineRef}
            style={{
              width: "60px",
              height: "1px",
              background: "#c8a96e",
              marginBottom: "20px",
              opacity: 0,
              transform: "translateY(24px)",
              filter: "blur(6px)",
            }}
          />
          <p
            ref={subtitleRef}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "18px",
              fontStyle: "italic",
              color: "#c8a96e",
              letterSpacing: "0.1em",
              margin: 0,
              opacity: 0,
              transform: "translateY(24px)",
              filter: "blur(6px)",
            }}
          >
            Across India, &amp; Nepal &amp; UAE
          </p>
        </div>

        {/* --- PERFECTLY CONTAINED VIDEO LAYER --- */}
        <video
          ref={videoRef}
          src={heroScroledVideo}
          playsInline
          muted
          preload="auto"
          style={{
            width: "100%",
            height: "130%",
            objectFit: "cover",
            pointerEvents: "none",
            transform: "scale(1.03)", 
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}

export default DesktopCanvas;