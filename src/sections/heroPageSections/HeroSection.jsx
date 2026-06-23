import React, { useEffect, useRef, useState } from "react";
import heroImg from "../../assets/heroImg.jpg";

const TOTAL_FRAMES = 176;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXT = ".jpg";

// ─── Mobile Hero (Text Shifted to Top, Premium Placement) ─────────────────────
function MobileHero() {
  return (
    <>
      <style>{`
        @keyframes triveni-kb {
          0%   { transform: scale(1.08) translate(0%, 0%); }
          30%  { transform: scale(1.13) translate(-1.5%, -1%); }
          65%  { transform: scale(1.10) translate(1%, 1.5%); }
          100% { transform: scale(1.08) translate(0%, 0%); }
        }
        @keyframes triveni-fade-up {
          from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes triveni-rule-in {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 0.55; }
        }
        @keyframes triveni-pulse-dot {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50%       { opacity: 1;   transform: translateY(4px); }
        }
        .triveni-kb-img {
          animation: triveni-kb 18s ease-in-out infinite;
          will-change: transform;
        }
        .triveni-eyebrow {
          animation: triveni-fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        .triveni-title {
          animation: triveni-fade-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }
        .triveni-subtitle {
          animation: triveni-fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
        }
        .triveni-rule {
          animation: triveni-rule-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
          transform-origin: left center;
        }
        .triveni-scroll-cue {
          animation: triveni-fade-up 1s ease 1.3s both;
        }
        .triveni-scroll-dot {
          animation: triveni-pulse-dot 1.6s ease-in-out 1.8s infinite;
        }
      `}</style>

      <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
        <section
          style={{
            position: "relative",
            width: "100%",
            height: "100svh",
            overflow: "hidden",
            background: "#0d0b08",
          }}
        >
          {/* Ken Burns Image */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <img
              src={heroImg}
              alt="Triveni luxury stone"
              className="triveni-kb-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Grain overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "180px",
              opacity: 0.45,
              pointerEvents: "none",
              mixBlendMode: "overlay",
            }}
          />

          {/* Gradient vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(13,11,8,0.5) 0%, rgba(13,11,8,0.1) 30%, rgba(13,11,8,0.5) 70%, rgba(13,11,8,0.9) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Top rule */}
          <div
            className="triveni-rule"
            style={{
              position: "absolute",
              top: 36,
              left: 28,
              right: 28,
              height: 1,
              background: "linear-gradient(90deg, transparent, #c8a96e, transparent)",
            }}
          />

          {/* Content Layout: Positioned beautifully on the top third */}
          <div
            style={{
              position: "absolute",
              top: "22svh",
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 24px",
            }}
          >
            <p
              className="triveni-eyebrow"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 10,
                letterSpacing: "0.4em",
                color: "#c8a96e",
                margin: "0 0 16px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              The Art of Stone
            </p>

            <h1
              className="triveni-title"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(46px, 13vw, 68px)",
                fontWeight: 300,
                color: "#f5ede0",
                letterSpacing: "0.08em",
                lineHeight: 1.1,
                margin: "0 0 12px",
              }}
            >
              TRIVENI
            </h1>

            <p
              className="triveni-subtitle"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 15,
                fontStyle: "italic",
                color: "#c8a96e",
                letterSpacing: "0.14em",
                margin: 0,
              }}
            >
              Luxury Stone &amp; Materials
            </p>
          </div>

          {/* Bottom rule */}
          <div
            className="triveni-rule"
            style={{
              position: "absolute",
              bottom: 68,
              left: 28,
              right: 28,
              height: 1,
              background: "linear-gradient(90deg, transparent, #c8a96e, transparent)",
            }}
          />

          {/* Scroll cue */}
          <div
            className="triveni-scroll-cue"
            style={{
              position: "absolute",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 8,
                letterSpacing: "0.3em",
                color: "#c8a96e",
                opacity: 0.7,
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <div
              className="triveni-scroll-dot"
              style={{
                width: 1,
                height: 22,
                background: "linear-gradient(to bottom, #c8a96e, transparent)",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}

// ─── Desktop Canvas (With Advanced Scroll-Driven Parallax Occlusion) ────────────
function DesktopCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreloadingComplete, setIsPreloadingComplete] = useState(false);
  const scrollProgressRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastLoggedFrameRef = useRef(-1);

  // Dynamic state hooks tracking real-time parallax offsets for text hiding
  const [textOpacity, setTextOpacity] = useState(1);
  const [textTranslateX, setTextTranslateX] = useState(0);
  const [textBlur, setTextBlur] = useState(0);

  useEffect(() => {
    const loadedImages = [];
    let loadedCounter = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/sequence/${FRAME_PREFIX}${frameNum}${FRAME_EXT}`;
      img.onload = () => {
        loadedCounter++;
        setLoadedCount(loadedCounter);
        if (loadedCounter === TOTAL_FRAMES) setIsPreloadingComplete(true);
      };
      img.onerror = () => console.error(`Error loading frame ${i}`);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!isPreloadingComplete) return;
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
      
      scrollProgressRef.current = progress;

      // --- ADVANCED OCCLUSION LOGIC ---
      // The text disappears behind the building structure during the initial scroll (0% to 12%)
      const transitionThreshold = 0.12; 
      if (progress <= transitionThreshold) {
        const factor = progress / transitionThreshold; // Scales cleanly from 0 to 1
        setTextOpacity(1 - factor);
        setTextTranslateX(-factor * 60); // Elegant horizontal push behind the architectural depth
        setTextBlur(factor * 6);          // Simulates focal camera lens blur behind the facade
      } else {
        setTextOpacity(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isPreloadingComplete]);

  useEffect(() => {
    if (!isPreloadingComplete || images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawFrame();
    };

    const drawFrame = () => {
      const currentProgress = scrollProgressRef.current;
      const targetFrame = currentProgress * (TOTAL_FRAMES - 1);
      const ease = 0.18;
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * ease;
      if (currentFrameRef.current < 0) currentFrameRef.current = 0;
      if (currentFrameRef.current > TOTAL_FRAMES - 1) currentFrameRef.current = TOTAL_FRAMES - 1;

      const renderedFrameIndex = Math.round(currentFrameRef.current);
      const img = images[renderedFrameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const imgW = img.naturalWidth || img.width;
        const imgH = img.naturalHeight || img.height;
        const canvasRatio = w / h;
        const imgRatio = imgW / imgH;
        let scale = canvasRatio > imgRatio ? w / imgW : h / imgH;
        const zoom = 1 + currentProgress * 0.08;
        const drawW = imgW * scale * zoom;
        const drawH = imgH * scale * zoom;
        const offsetX = (w - drawW) / 2;
        const offsetY = (h - drawH) / 2;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        if (renderedFrameIndex !== lastLoggedFrameRef.current) {
          lastLoggedFrameRef.current = renderedFrameIndex;
        }
      }
    };

    let animationFrameId;
    const tick = () => {
      drawFrame();
      animationFrameId = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPreloadingComplete, images]);

  return (
    <div ref={containerRef} className="relative w-full h-[450vh] bg-[#000616]">
      {/* Dynamic Keyframes injected safely for high-end Desktop entrance animations */}
      <style>{`
        @keyframes desktop-fade-reveal {
          from { opacity: 0; transform: translateY(30px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes desktop-line-expand {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        .animate-desktop-eyebrow {
          animation: desktop-fade-reveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        .animate-desktop-title {
          animation: desktop-fade-reveal 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .animate-desktop-line {
          animation: desktop-line-expand 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
          transform-origin: left center;
        }
        .animate-desktop-subtitle {
          animation: desktop-fade-reveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
        }
      `}</style>

      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center z-10">
        
        {/* --- DESKTOP HIGH-END TYPOGRAPHY OVERLAY --- */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "22%",
            zIndex: 20,
            color: "#f5ede0",
            maxWidth: "550px",
            pointerEvents: "none",
            // Compounding: Initial load handled by class animation; 
            // scroll parallax overrides properties directly inline smoothly
            opacity: textOpacity,
            transform: `translateX(${textTranslateX}px)`,
            filter: `blur(${textBlur}px)`,
            transition: "opacity 0.15s linear, transform 0.15s linear, filter 0.15s linear",
            willChange: "transform, opacity, filter"
          }}
        >
          <p
            className="animate-desktop-eyebrow"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.5em",
              color: "#c8a96e",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
Crafting Spaces 
          </p>
          <h1
            className="animate-desktop-title"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "76px",
              fontWeight: 200,
              lineHeight: "1.05",
              letterSpacing: "0.06em",
              margin: "0 0 20px 0",
              color: "#ffffff"
            }}
          >
Since 1989
          </h1>
          <div 
            className="animate-desktop-line"
            style={{ 
              width: "60px", 
              height: "1px", 
              background: "#c8a96e", 
              marginBottom: "20px" 
            }} 
          />
          <p
            className="animate-desktop-subtitle"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "18px",
              fontStyle: "italic",
              color: "#c8a96e",
              letterSpacing: "0.1em",
              margin: 0
            }}
          >
Across India,  &amp; Nepal & UAE
          </p>
        </div>

        <canvas ref={canvasRef} className="w-full h-full scale-[1.02]" />
      </div>
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────
export default function TriveniScrollCanvas() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopCanvas />;
}