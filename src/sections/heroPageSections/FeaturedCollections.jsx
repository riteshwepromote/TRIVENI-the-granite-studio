import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const collections = [
  {
    id: 1,
    title: "Italian Marble",
    subtitle: "Heritage Collection",
    detail: "40+ origins, hand-selected from Italian quarries for architects who refuse to compromise.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400",
  },
  {
    id: 2,
    title: "Premium Granite",
    subtitle: "Architectural Surfaces",
    detail: "200+ finishes — polished, honed, leathered. Structural beauty that outlasts generations.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400",
  },
  {
    id: 3,
    title: "Luxury Quartz",
    subtitle: "Engineered Perfection",
    detail: "Zero maintenance. Absolute consistency. Engineered for the most demanding interiors.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400",
  },
  {
    id: 4,
    title: "Onyx",
    subtitle: "Statement Surfaces",
    detail: "Rare translucent slabs that hold light. For spaces that demand to be remembered.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1400",
  },
];

export default function FeaturedCollections() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#F8F6F2", padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 56px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#111",
          }}>
            Materials That{" "}
            <em style={{ fontStyle: "italic" }}>Define Luxury</em>
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "#999",
            paddingBottom: 4,
          }}>
            {String(active + 1).padStart(2, "0")} / {String(collections.length).padStart(2, "0")}
          </p>
        </div>

        {/* Main layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 2, height: 520 }}>

          {/* Left — list */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fff", padding: "0" }}>
            {collections.map((item, i) => (
              <motion.div
                key={item.id}
                onClick={() => setActive(i)}
                whileTap={{ scale: 0.99 }}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 36px",
                  borderBottom: i < collections.length - 1 ? "0.5px solid #ECEAE5" : "none",
                  background: active === i ? "#111" : "#fff",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.background = "#F2F0EC"; }}
                onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.background = "#fff"; }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: 10,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: active === i ? "rgba(255,255,255,0.45)" : "#bbb",
                    marginBottom: 6,
                    transition: "color 0.3s",
                  }}>
                    {item.subtitle}
                  </p>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                    fontSize: 22,
                    color: active === i ? "#fff" : "#111",
                    letterSpacing: "0.005em",
                    lineHeight: 1,
                    transition: "color 0.3s",
                  }}>
                    {item.title}
                  </h3>
                </div>

                <motion.span
                  animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : -6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 16,
                    color: "#fff",
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Right — image + detail */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={collections[active].image}
                alt={collections[active].title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </AnimatePresence>

            {/* Detail overlay at bottom */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "40px 32px 28px",
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
            }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.75)",
                    maxWidth: 340,
                  }}
                >
                  {collections[active].detail}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#111",
              background: "transparent",
              border: "0.5px solid #CCCAC4",
              padding: "13px 28px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#CCCAC4"; }}
          >
            View All Collections
          </button>
        </div>

      </div>
    </section>
  );
}