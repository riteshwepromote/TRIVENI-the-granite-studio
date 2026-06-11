import React, { useEffect, useRef } from "react";
import building from "../../assets/about/heroImg.png";

/*
  Design tokens — scoped to this component so nothing leaks
  ─────────────────────────────────────────────────────────
  Brand red      : #FF523B
  Gold rule      : #C8A96E
  Off-white      : #F0EDE8
  Stone grey     : #9C9890
  Deep charcoal  : #0A0A0A
*/

const styles = `
  @keyframes tgs-fade-up {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes tgs-line-grow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes tgs-grain {
    0%, 100% { transform: translate(0, 0); }
    10%  { transform: translate(-1%, -2%); }
    30%  { transform: translate(2%, 1%); }
    50%  { transform: translate(-1%, 2%); }
    70%  { transform: translate(1%, -1%); }
    90%  { transform: translate(-2%, 1%); }
  }

  .tgs-hero {
    position: relative;
    width: 100%;
    height: clamp(340px, 50vw, 480px);
    background: #0A0A0A;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* ── Background image with parallax-feel zoom ── */
  .tgs-bg-img {
    position: absolute;
    inset: -6% -3%;
    width: 106%;
    height: 112%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.42) contrast(1.1) saturate(0.75);
    transform-origin: center;
    pointer-events: none;
    user-select: none;
  }

  /* ── Grain texture overlay (pure CSS, no image needed) ── */
  .tgs-grain {
    position: absolute;
    inset: -50%;
    width: 200%;
    height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    background-size: 160px 160px;
    opacity: 0.045;
    animation: tgs-grain 7s steps(2) infinite;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  /* ── Dual-axis gradient for cinematic depth ── */
  .tgs-vignette {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to top,  #0A0A0A 0%, transparent 55%),
      linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, transparent 40%),
      linear-gradient(to right, rgba(10,10,10,0.3) 0%, transparent 50%);
    pointer-events: none;
  }

  /* ── Gold horizontal rule — the signature element ── */
  .tgs-rule {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent 0%, #C8A96E 20%, #C8A96E 80%, transparent 100%);
    transform-origin: left;
    transform: scaleX(0);
  }
  .tgs-rule.tgs-animate {
    animation: tgs-line-grow 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  }

  /* ── Bottom estate strip ── */
  .tgs-estate {
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    transition: opacity 0.6s ease 1s;
  }
  .tgs-estate.tgs-animate { opacity: 1; }

  .tgs-estate-line {
    flex: 1;
    max-width: 120px;
    height: 1px;
    background: rgba(200, 169, 110, 0.35);
  }
  .tgs-estate-label {
    font-family: 'Albert Sans', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #C8A96E;
    opacity: 0.8;
    white-space: nowrap;
  }

  /* ── Main content ── */
  .tgs-content {
    position: relative;
    z-index: 10;
    text-align: center;
    max-width: 720px;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }

  /* Eyebrow */
  .tgs-eyebrow {
    font-family: 'Albert Sans', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.45em;
    text-transform: uppercase;
    color: #FF523B;
    margin: 0 0 16px;
    opacity: 0;
  }
  .tgs-eyebrow.tgs-animate {
    animation: tgs-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
  }

  /* Headline — three words, architectural weight */
  .tgs-headline {
    font-family: 'Obviously', 'Albert Sans', sans-serif;
    font-size: clamp(2rem, 5.5vw, 3.75rem);
    font-weight: 300;
    letter-spacing: -0.01em;
    line-height: 1.08;
    color: #F0EDE8;
    margin: 0 0 8px;
    opacity: 0;
  }
  .tgs-headline.tgs-animate {
    animation: tgs-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
  }

  /* Accent word gets gold */
  .tgs-headline-accent {
    color: #C8A96E;
    font-style: italic;
  }

  /* Divider dot */
  .tgs-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #FF523B;
    margin: 14px auto 14px;
    opacity: 0;
  }
  .tgs-dot.tgs-animate {
    animation: tgs-fade-up 0.5s ease 0.6s forwards;
  }

  /* Sub-copy */
  .tgs-sub {
    font-family: 'Albert Sans', sans-serif;
    font-size: clamp(0.75rem, 1.6vw, 0.875rem);
    font-weight: 400;
    line-height: 1.75;
    color: rgba(240, 237, 232, 0.65);
    max-width: 460px;
    margin: 0;
    opacity: 0;
    text-wrap: balance;
  }
  .tgs-sub.tgs-animate {
    animation: tgs-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
  }

  /* Stats row */
  .tgs-stats {
    display: flex;
    align-items: center;
    gap: 0;
    margin-top: 28px;
    opacity: 0;
    border: 1px solid rgba(200, 169, 110, 0.2);
  }
  .tgs-stats.tgs-animate {
    animation: tgs-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.85s forwards;
  }

  .tgs-stat {
    padding: 10px 24px;
    text-align: center;
  }
  .tgs-stat + .tgs-stat {
    border-left: 1px solid rgba(200, 169, 110, 0.2);
  }
  .tgs-stat-num {
    font-family: 'Obviously', 'Albert Sans', sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 300;
    color: #F0EDE8;
    letter-spacing: 0.02em;
    display: block;
    line-height: 1;
    margin-bottom: 4px;
  }
  .tgs-stat-label {
    font-family: 'Albert Sans', sans-serif;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #9C9890;
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: reduce) {
    .tgs-eyebrow, .tgs-headline, .tgs-dot, .tgs-sub, .tgs-stats,
    .tgs-estate, .tgs-rule, .tgs-grain { animation: none !important; opacity: 1 !important; transform: none !important; }
  }
`;

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const animatables = el.querySelectorAll("[data-animate]");
    const raf = requestAnimationFrame(() => {
      animatables.forEach((node) => node.classList.add("tgs-animate"));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <header className="tgs-hero" ref={heroRef} role="banner">

        {/* Background */}
        <img
          src={building}
          alt=""
          className="tgs-bg-img"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />

        {/* Grain texture */}
        <div className="tgs-grain" aria-hidden="true" />

        {/* Cinematic vignette */}
        <div className="tgs-vignette" aria-hidden="true" />

        {/* Gold base rule — signature element */}
        <div className="tgs-rule" data-animate aria-hidden="true" />

        {/* Estate strip */}
        <div className="tgs-estate" data-animate aria-hidden="true">
          <div className="tgs-estate-line" />
          <span className="tgs-estate-label">Est. 1989 · Triveni Granite Studio</span>
          <div className="tgs-estate-line" />
        </div>

        {/* Content */}
        <div className="tgs-content">

          <p className="tgs-eyebrow" data-animate>About Us</p>

          <h1 className="tgs-headline" data-animate>
            Forged Over<br />
            <span className="tgs-headline-accent">Three Decades</span>
          </h1>

          <div className="tgs-dot" data-animate aria-hidden="true" />

          <p className="tgs-sub" data-animate>
            A legacy of precision engineering, uncompromising quality,
            and global trust — carved in stone since 1989.
          </p>

          {/* Trust stats */}
          <div className="tgs-stats" data-animate role="list" aria-label="Company milestones">
            <div className="tgs-stat" role="listitem">
              <span className="tgs-stat-num">35+</span>
              <span className="tgs-stat-label">Years</span>
            </div>
            <div className="tgs-stat" role="listitem">
              <span className="tgs-stat-num">40+</span>
              <span className="tgs-stat-label">Countries</span>
            </div>
            <div className="tgs-stat" role="listitem">
              <span className="tgs-stat-num">500+</span>
              <span className="tgs-stat-label">Stone Varieties</span>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default AboutHero;