import { useState } from "react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Granite",
    desc: "Timeless strength. Natural beauty. Crafted for generations.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    title: "Sandstone",
    desc: "Warm textures inspired by nature and ancient architecture.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
  },
  {
    title: "Limestone",
    desc: "Refined surfaces for understated luxury.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
  },
  {
    title: "Quartz",
    desc: "Engineered elegance for premium interiors.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
  },
];

function Card({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", aspectRatio: index % 2 === 0 ? "4/5" : "4/3", background: "#E8E4DC" }}>
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Label */}
      <div style={{ borderTop: "0.5px solid #D4CFC6", paddingTop: 12, marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 20, color: "#111", letterSpacing: "0.01em" }}>
          {item.title}
        </h3>
        <motion.span
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#111" }}
        >
          View →
        </motion.span>
      </div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 12, lineHeight: 1.7, color: "#888", marginTop: 4 }}>
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function CollectionsSection() {
  return (
    <section style={{ background: "#FAFAF8", padding: "96px 64px 112px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, paddingBottom: 32, borderBottom: "0.5px solid #D4CFC6" }}>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#999", marginBottom: 12 }}>
              Collections
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(36px, 4vw, 54px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#111" }}>
              Curated <em style={{ fontStyle: "italic" }}>Materials</em>
            </h2>
          </div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 13, lineHeight: 1.85, color: "#666", maxWidth: 280, textAlign: "right" }}>
            Premium stone, surfaces, and flooring sourced for exceptional spaces.
          </p>
        </div>

        {/* 4-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0 24px" }}>
          {/* Cols 1 & 3 nudged down slightly for rhythm */}
          {collections.map((item, i) => (
            <div key={item.title} style={{ marginTop: i % 2 !== 0 ? 48 : 0 }}>
              <Card item={item} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}