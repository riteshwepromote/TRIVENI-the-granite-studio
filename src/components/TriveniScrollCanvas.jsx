import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

// ── Source config ─────────────────────────────────────────────────────────────
const DESKTOP = {
  total: 176,
  prefix: "ezgif-frame-",
  ext: ".jpg",
  folder: "/sequence/",
};

const MOBILE = {
  total: 221,
  prefix: "ezgif-frame-",
  ext: ".jpg",
  folder: "/verticlePhotos/",
};

const getDPR = () => Math.min(window.devicePixelRatio || 1, 2);
const isMobileBreakpoint = () => window.innerWidth < 640;

const getScrollHeight = (mobile) => {
  // REDUCED: 350vh is way too deep for mobile screen heights.
  // 180vh to 200vh gives a snappy, natural frame scrub without the void.
if (mobile) return "140vh";
  return window.innerWidth < 1024 ? "400vh" : "450vh";
};

export default function TriveniScrollCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreloadingComplete, setIsPreloadingComplete] = useState(false);
  const [scrollHeight, setScrollHeight] = useState("450vh");

  const isMobileRef = useRef(false);
  const scrollProgressRef = useRef(0);
  const currentFrameRef = useRef(0);

  // ── Set real breakpoint AFTER first paint ─────────────────────────────────
  useLayoutEffect(() => {
    const mobile = isMobileBreakpoint();
    isMobileRef.current = mobile;
    setIsMobile(mobile);
    setScrollHeight(getScrollHeight(mobile));
  }, []);

  // ── Watch for breakpoint / orientation flips ──────────────────────────────
  useEffect(() => {
    const onResize = () => {
      const mobile = isMobileBreakpoint();
      setScrollHeight(getScrollHeight(mobile));
      if (mobile !== isMobileRef.current) {
        isMobileRef.current = mobile;
        setIsMobile(mobile);
        setImages([]);
        setLoadedCount(0);
        setIsPreloadingComplete(false);
        currentFrameRef.current = 0;
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  
  // ── Preload frames ─────────────────────────────────────────────────────────
  useEffect(() => {
    const src = isMobile ? MOBILE : DESKTOP;
    const loaded = [];
    let count = 0;

    setLoadedCount(0);
    setIsPreloadingComplete(false);
    currentFrameRef.current = 0;

    for (let i = 1; i <= src.total; i++) {
      const img = new Image();
      img.src = `${src.folder}${src.prefix}${String(i).padStart(3, "0")}${src.ext}`;
      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === src.total) setIsPreloadingComplete(true);
      };
      img.onerror = () => console.error(`Missing: ${img.src}`);
      loaded.push(img);
    }
    setImages(loaded);
  }, [isMobile]);

  // ── Canvas + scroll engine ─────────────────────────────────────────────────
  useEffect(() => {
    if (!isPreloadingComplete || images.length === 0) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const TOTAL = isMobile ? MOBILE.total : DESKTOP.total;

    let bufW = 0;
    let bufH = 0;

    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!w || !h) return false;
      if (bufW === w && bufH === h) return true;
      bufW = w;
      bufH = h;
      const dpr = getDPR();
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      return true;
    };

    const calcProgress = () => {
      const rect = container.getBoundingClientRect();

      const start = rect.top;
      const end = rect.bottom - window.innerHeight;

      const progress = -start / (end - start);

      scrollProgressRef.current = Math.max(0, Math.min(1, progress));
    };

    const draw = () => {
      if (!syncSize()) return;
      const w = bufW,
        h = bufH;

      const progress = scrollProgressRef.current;
      const target = progress * (TOTAL - 1);
      currentFrameRef.current += (target - currentFrameRef.current) * 0.18;
      currentFrameRef.current = Math.max(
        0,
        Math.min(TOTAL - 1, currentFrameRef.current),
      );

      const img = images[Math.round(currentFrameRef.current)];
      if (!img?.complete || !img.naturalWidth) return;

      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      const scale = Math.max(w / imgW, h / imgH);
      const zoom = 1 + progress * 0.015;
      const dW = imgW * scale * zoom;
      const dH = imgH * scale * zoom;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, (w - dW) / 2, (h - dH) / 2, dW, dH);
    };

    let raf;
    const tick = () => {
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onResizeCanvas = () => {
      bufW = 0;
      bufH = 0;
      calcProgress();
    };

    window.addEventListener("scroll", calcProgress, { passive: true });
    window.addEventListener("resize", onResizeCanvas, { passive: true });
    window.addEventListener("touchmove", calcProgress, { passive: true });

    calcProgress();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", calcProgress);
      window.removeEventListener("resize", onResizeCanvas);
      window.removeEventListener("touchmove", calcProgress);
    };
  }, [isPreloadingComplete, images, isMobile]);

  const totalFrames = isMobile ? MOBILE.total : DESKTOP.total;

  return (
    <>
      {/* Loading screen */}
      {!isPreloadingComplete && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000616]">
          <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/80 rounded-full transition-all duration-100"
              style={{
                width: `${Math.round((loadedCount / totalFrames) * 100)}%`,
              }}
            />
          </div>
          <p className="mt-4 text-white/30 text-xs tracking-[0.3em] uppercase">
            {Math.round((loadedCount / totalFrames) * 100)}%
          </p>
        </div>
      )}

      {/* FIXED: Core Layout Engine Container */}
      <div
        ref={containerRef}
        style={{
          height: scrollHeight,
          overflow: "hidden",
        }}
        className="relative w-full bg-[#000616]"
      >
        {/* Sticky wrapper encapsulates viewport boundaries strictly to avoid dynamic mobile toolbar offsets */}
        <div
          className="sticky top-0 left-0 w-full overflow-hidden bg-[#000616]"
          style={{
            height: "100dvh",
          }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            style={{
              touchAction: "pan-y",
            }}
          />
        </div>
      </div>
    </>
  );
}

