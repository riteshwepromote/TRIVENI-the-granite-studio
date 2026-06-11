import React from "react";

import ovenFresh          from "../../assets/about/ovenFresh.png";
import chillis            from "../../assets/about/chilislogo.png";
import SindhiSweetsLogo   from "../../assets/about/SindhiSweetssssLogo.avif";
import sociallogo         from "../../assets/about/social-logo.png";
import StudioXoLogo       from "../../assets/about/StudioXoLogo.jpg";
import doublelogo         from "../../assets/about/double-shot-logo.png";
import GrainLogo          from "../../assets/about/GrainLogo.jpg";
import SagarRatnamLogo    from "../../assets/about/SagarRatnamLogo.svg";
import cafebeige          from "../../assets/about/Cafe beige.jpg";
import awadhi             from "../../assets/about/Awadhi Centrallogo_edited.avif";
import hira               from "../../assets/about/hiraImg.jpg";

/*
  Split logos across two rows for dual-direction scroll.
  Row A scrolls left (→←), Row B scrolls right (←→).
  11 logos split 6 / 5 — row B gets one logo repeated to keep
  visual density even.
*/
const ROW_A = [
  { src: ovenFresh,        alt: "Oven Fresh"      },
  { src: chillis,          alt: "Chili's"         },
  { src: SindhiSweetsLogo, alt: "Sindhi Sweets"   },
  { src: sociallogo,       alt: "Social"          },
  { src: StudioXoLogo,     alt: "Studio Xo"       },
  { src: doublelogo,       alt: "Double Shot"     },
];

const ROW_B = [
  { src: GrainLogo,        alt: "Grain"           },
  { src: SagarRatnamLogo,  alt: "Sagar Ratna"     },
  { src: cafebeige,        alt: "Café Beige"      },
  { src: awadhi,           alt: "Awadhi Central"  },
  { src: hira,             alt: "Hira"            },
  { src: ovenFresh,        alt: "Oven Fresh"      }, // visual balance repeat
];

const STYLES = `
  .bs-section {
    background: #FAF8F5;
    padding: 88px 0 80px;
    overflow: hidden;
    user-select: none;
    font-family: 'Albert Sans', sans-serif;
  }

  /* ── Header ── */
  .bs-header {
    max-width: 680px;
    margin: 0 auto 52px;
    text-align: center;
    padding: 0 24px;
  }
  .bs-eyebrow {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.42em;
    text-transform: uppercase;
    color: #C8A96E;
    display: block;
    margin-bottom: 16px;
  }
  .bs-heading {
    font-family: 'Obviously', 'Albert Sans', sans-serif;
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #1A1410;
    margin: 0 0 18px;
  }
  .bs-rule {
    width: 40px;
    height: 1px;
    background: #C8A96E;
    opacity: 0.4;
    margin: 0 auto 18px;
  }
  .bs-sub {
    font-size: clamp(0.8rem, 1.5vw, 0.875rem);
    line-height: 1.75;
    color: #8C8480;
    max-width: 480px;
    margin: 0 auto;
    text-wrap: balance;
  }

  /* ── Marquee rows ── */
  .bs-track-wrap {
    position: relative;
    width: 100%;
  }

  /* Edge fades — matched exactly to bg color */
  .bs-fade-left,
  .bs-fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(60px, 12vw, 160px);
    z-index: 10;
    pointer-events: none;
  }
  .bs-fade-left  { left: 0;  background: linear-gradient(to right, #FAF8F5, transparent); }
  .bs-fade-right { right: 0; background: linear-gradient(to left,  #FAF8F5, transparent); }

  .bs-row {
    overflow: hidden;
    width: 100%;
    padding: 10px 0;
  }

  /* Pause on hover — applied to the outer wrap */
  .bs-track-wrap:hover .bs-marquee {
    animation-play-state: paused;
  }

  .bs-marquee {
    display: flex;
    width: max-content;
    align-items: center;
    gap: clamp(32px, 5vw, 64px);
    will-change: transform;
  }
  .bs-marquee--left  { animation: bs-scroll-left  38s linear infinite; }
  .bs-marquee--right { animation: bs-scroll-right 42s linear infinite; }

  @keyframes bs-scroll-left {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes bs-scroll-right {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
  }

  /* ── Logo cell ── */
  .bs-logo-cell {
    /* Fixed cell keeps all logos visually equal weight */
    width: 120px;
    height: 52px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(1) opacity(0.5);
    transition: filter 0.35s ease;
    cursor: default;
  }
  .bs-track-wrap:hover .bs-logo-cell:hover {
    filter: grayscale(0) opacity(1);
  }
  .bs-logo-cell img {
    max-width: 100%;
    max-height: 48px;
    width: auto;
    height: auto;
    object-fit: contain;
    pointer-events: none;
  }

  /* ── Divider between rows ── */
  .bs-row-gap {
    height: 12px;
  }

  /* ── Disclaimer ── */
  .bs-disclaimer {
    text-align: center;
    margin-top: 44px;
    padding: 0 24px;
  }
  .bs-disclaimer p {
    font-size: 10px;
    letter-spacing: 0.02em;
    line-height: 1.7;
    color: #1A1410;
    opacity: 0.3;
    max-width: 560px;
    margin: 0 auto;
    text-wrap: balance;
  }

  /* ── Reduced motion — freeze both rows ── */
  @media (prefers-reduced-motion: reduce) {
    .bs-marquee {
      animation: none !important;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
    }
    .bs-marquee > *:nth-child(n + 13) {
      display: none; /* hide duplicates when static */
    }
  }
`;

function MarqueeRow({ logos, direction }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="bs-row">
      <div className={`bs-marquee bs-marquee--${direction}`}>
        {doubled.map((logo, i) => (
          <div key={`${logo.alt}-${i}`} className="bs-logo-cell">
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

const BrandsServed = () => (
  <>
    <style>{STYLES}</style>
    <section className="bs-section" aria-label="Brands we have served">

      {/* Header */}
      <div className="bs-header">
        <span className="bs-eyebrow">Trusted By</span>
        <h2 className="bs-heading">Brands We've Served</h2>
        <div className="bs-rule" />
        <p className="bs-sub">
          From flagship restaurant chains to boutique hospitality studios —
          our surfaces are part of over a decade of iconic spaces across India.
        </p>
      </div>

      {/* Dual-direction marquee — signature element */}
      <div className="bs-track-wrap" aria-hidden="true">
        <div className="bs-fade-left"  />
        <div className="bs-fade-right" />
        <MarqueeRow logos={ROW_A} direction="left"  />
        <div className="bs-row-gap" />
        <MarqueeRow logos={ROW_B} direction="right" />
      </div>

      {/* Disclaimer — whispered, not announced */}
      <div className="bs-disclaimer">
        <p>
          Logos belong to their respective owners. Products supplied directly
          or via channel partners.
        </p>
      </div>

    </section>
  </>
);

export default BrandsServed;