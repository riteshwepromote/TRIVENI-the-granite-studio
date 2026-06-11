import { useState } from "react";

export default function ContactCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ background: "#F8F6F2", padding: "0 56px 96px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          borderTop: "0.5px solid #CCCAC4",
          paddingTop: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* Left */}
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
            Get in Touch
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(28px, 3vw, 42px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111",
          }}>
            Let's Build Something{" "}
            <em style={{ fontStyle: "italic" }}>Exceptional</em>
          </h2>
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <a
            href="tel:+911234567890"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#666",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            +91 123 456 7890
          </a>

          <span style={{ width: 1, height: 16, background: "#CCCAC4", display: "inline-block" }} />

          <button
            onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#111"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#CCCAC4"; }}
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
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}