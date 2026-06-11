export default function Footer() {
  return (
    <footer className="w-full bg-[#00030b] border-t border-white/5 py-12 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-white/40 tracking-wider">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-white/60 tracking-[0.3em] uppercase">
          TRIVENI RESIDENCES
        </span>
        <span>© 2026</span>
      </div>
      <div className="flex gap-6">
        <a
          href="#privacy"
          className="hover:text-white transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          className="hover:text-white transition-colors duration-200"
        >
          Terms of Service
        </a>
        <a
          href="#credits"
          className="hover:text-white transition-colors duration-200"
        >
          Awwwards Concept
        </a>
      </div>
    </footer>
  );
}
