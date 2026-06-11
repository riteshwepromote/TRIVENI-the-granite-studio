import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const TOTAL_FRAMES = 176;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXT = ".jpg";

export default function TriveniScrollCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Preloading states
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreloadingComplete, setIsPreloadingComplete] = useState(false);

  // High performance manual scroll state
  const scrollProgressRef = useRef(0);

  // Frame indexing states
  const currentFrameRef = useRef(0);
  const lastLoggedFrameRef = useRef(-1);

  // Load images
  useEffect(() => {
    console.log(`Starting asset preload. Total frames found: ${TOTAL_FRAMES}`);
    const loadedImages = [];
    let loadedCounter = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/sequence/${FRAME_PREFIX}${frameNum}${FRAME_EXT}`;

      img.onload = () => {
        loadedCounter++;
        setLoadedCount(loadedCounter);

        if (loadedCounter === TOTAL_FRAMES) {
          setIsPreloadingComplete(true);
          console.log(
            `Preloading complete. Total frames loaded: ${loadedCounter}`,
          );
        }
      };

      img.onerror = () => {
        console.error(`Error loading frame ${i} at: ${img.src}`);
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  // Manual scroll tracking for extreme reliability
  useEffect(() => {
    if (!isPreloadingComplete) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      // Calculate progress clamped between 0 and 1
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

      scrollProgressRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isPreloadingComplete]);

  // Canvas draw & scroll interpolation loop
  useEffect(() => {
    if (!isPreloadingComplete || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High DPI Retina screens setup
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

    // Main draw function
    const drawFrame = () => {
      const currentProgress = scrollProgressRef.current;

      // Responsive mapping as approved:
      // 0.00 - 0.15: Hold Frame 1 (Index 0)
      // 0.15 - 0.25: Slowly advance Frames 1-4 (Index 0 to 3)
      // 0.25 - 0.80: Animate Frames 4-30 (Index 3 to 29)
      // 0.80 - 1.00: Hold Frame 30 (Index 29)
      let targetFrame = currentProgress * (TOTAL_FRAMES - 1);

      // Smooth Frame Interpolation using requestAnimationFrame dampening
      const ease = 0.18;
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * ease;

      // Fallback boundaries
      if (currentFrameRef.current < 0) currentFrameRef.current = 0;
      if (currentFrameRef.current > TOTAL_FRAMES - 1)
        currentFrameRef.current = TOTAL_FRAMES - 1;

      const renderedFrameIndex = Math.round(currentFrameRef.current);
      const img = images[renderedFrameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const imgW = img.naturalWidth || img.width;
        const imgH = img.naturalHeight || img.height;

        const canvasRatio = w / h;
        const imgRatio = imgW / imgH;

        let scale = 1;
        if (canvasRatio > imgRatio) {
          scale = w / imgW;
        } else {
          scale = h / imgH;
        }

        // Apply dynamic zoom
        const zoom = 1 + currentProgress * 0.08;
        const drawW = imgW * scale * zoom;
        const drawH = imgH * scale * zoom;
        const offsetX = (w - drawW) / 2;
        const offsetY = (h - drawH) / 2;

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

        // Throttled logging (triggers ONLY when integer frame index changes)
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

    // Initialize and listen to updates
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
      {/* Full screen preloading state */}
      {!isPreloadingComplete && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000616] text-white">
          <div className="relative mb-8 flex items-center justify-center">
            {/* Elegant outer glow ring */}
            <div className="absolute h-24 w-24 rounded-full border border-white/5 bg-transparent animate-ping" />
            <div className="absolute h-16 w-16 rounded-full border border-gold/20 bg-transparent animate-spin border-t-gold" />
            <Sparkles className="h-6 w-6 text-gold animate-pulse" />
          </div>
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/90 mb-2">
            TRIVENI
          </h2>
          <p className="text-xs font-mono text-white/40 tracking-wider">
            PRELOADING TIMELINE :{" "}
            {Math.round((loadedCount / TOTAL_FRAMES) * 100)}% ({loadedCount}/
            {TOTAL_FRAMES})
          </p>
        </div>
      )}

      {/* Pinned Hardware-Accelerated Canvas Wrapper */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center z-10">
        {/* <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-20" /> */}

        <canvas ref={canvasRef} className="w-full h-full scale-[1.02]" />
      </div>
    </div>
  );
}
