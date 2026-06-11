import { useState } from "react";
import { motion } from "framer-motion";

const posts = [
  {
    tag: "Design",
    date: "May 2025",
    title: "Why Natural Stone Never Goes Out of Style",
    excerpt: "Trends come and go. Marble, granite, and limestone have outlasted every one of them — here's why they remain the first choice for serious designers.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900",
  },
  {
    tag: "Material Guide",
    date: "Apr 2025",
    title: "Granite vs Quartz: Choosing the Right Surface",
    excerpt: "Both are premium. Both are durable. But they serve very different briefs. A practical guide for architects and homeowners.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900",
  },
  {
    tag: "Projects",
    date: "Mar 2025",
    title: "Inside a Luxury Villa in Dubai — Triveni Stone Throughout",
    excerpt: "A 12,000 sq ft residence where every surface tells a story. We trace the materials from quarry to completion.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900",
  },
];

function PostCard({ post, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", height: 240, background: "#E4E0D8" }}>
        <motion.img
          src={post.image}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Content */}
      <div style={{ borderTop: "0.5px solid #CCCAC4", paddingTop: 18, marginTop: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: 9,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#111",
          }}>
            {post.tag}
          </span>
          <span style={{ width: 1, height: 10, background: "#CCCAC4", display: "inline-block" }} />
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: "0.1em",
            color: "#aaa",
          }}>
            {post.date}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 400,
          fontSize: 21,
          lineHeight: 1.2,
          color: "#111",
          letterSpacing: "0.005em",
          marginBottom: 10,
        }}>
          {post.title}
        </h3>

        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: 12,
          lineHeight: 1.8,
          color: "#888",
          marginBottom: 16,
        }}>
          {post.excerpt}
        </p>

        <motion.span
          animate={{ opacity: hovered ? 1 : 0.4, x: hovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#111",
          }}
        >
          Read More →
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
  return (
    <section style={{ background: "#F8F6F2", padding: "80px 56px 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingBottom: 36,
          borderBottom: "0.5px solid #CCCAC4",
          marginBottom: 48,
        }}>
          <div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
            }}>
              Journal
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#111",
            }}>
              Stories in <em style={{ fontStyle: "italic" }}>Stone</em>
            </h2>
          </div>

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
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#CCCAC4"; }}
          >
            All Posts
          </button>
        </div>

        {/* 3-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0 28px" }}>
          {posts.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}