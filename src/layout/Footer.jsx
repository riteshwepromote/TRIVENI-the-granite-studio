import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#00030b] text-white/70 border-t border-white/10 pt-20 pb-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto flex flex-col justify-between min-h-[300px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-6 space-y-4">
            <span className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent block">
              Triveni Legacy — Est. 1989
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-white font-light tracking-tight">
              Shaping stone into <span className="italic text-accent">legacy.</span>
            </h2>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-6">
            <div className="flex flex-wrap gap-6 md:gap-10 text-xs tracking-widest uppercase">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200 group"
              >
                <Instagram className="w-4 h-4 text-accent" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
              </a>
              <a
                href="#credits"
                className="hover:text-white transition-colors duration-200"
              >
                Awwwards Concept
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-200"
            >
              <span>Back to top</span>
              <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-200">
                <span className="block -translate-y-0.5">↑</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-white/40 tracking-wider">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white/70 tracking-[0.3em] uppercase">
              TRIVENI RESIDENCES
            </span>
            <span>© 2026</span>
          </div>
          <p className="text-center sm:text-right">
            Crafted with precision across generations.
          </p>
        </div>
      </div>
    </footer>
  );
}
