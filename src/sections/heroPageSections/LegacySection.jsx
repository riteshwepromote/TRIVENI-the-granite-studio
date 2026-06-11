import { motion } from "framer-motion";

const milestones = [
  { year: "1989", location: "Delhi, India",        title: "The Beginning",   description: "A single vision to bring premium natural stone to those who build with intention." },
  { year: "1992", location: "Kathmandu, Nepal",    title: "First Crossing",  description: "First international clients — a chapter built on trust across borders." },
  { year: "1994", location: "Abu Road, Rajasthan", title: "Into the Source", description: "Moved into India's stone country, deepening quarry ties at the root." },
  { year: "2005", location: "Delhi, India",        title: "Growing Demand",  description: "A new Delhi outlet for architects and homeowners who trusted the Triveni name." },
  { year: "2017", location: "Abu Road, Rajasthan", title: "Built to Make",   description: "A manufacturing facility launched — quality control and bespoke processing in-house." },
  { year: "2022", location: "Mohali, Punjab",      title: "Flagship North",  description: "A flagship showroom serving North India's luxury real estate market." },
  { year: "2025", location: "Dubai, UAE",          title: "Global Chapter",  description: "Triveni arrives in the world's most ambitious luxury market." },
];

export default function LegacySection() {
  return (
    <section
      id="legacy"
      className="bg-[#FAF9F6] py-24 sm:py-32 lg:py-40 font-sans"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Minimal Luxury Header Block */}
        <div className="mb-20 sm:mb-28 max-w-xl">
          <p className="uppercase tracking-[0.4em] text-[#A37F55] font-bold text-xs mb-4 block">
            Our Legacy
          </p>
          <h2 className="font-serif !text-[#1E2229] text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
            A Story in <em className="italic font-light text-stone-500">Stone & Miles</em>
          </h2>
        </div>

        {/* The Architectural Row Grid */}
        <div className="border-t border-stone-200">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr_2fr] gap-4 md:gap-8 py-10 md:py-12 border-b border-stone-200 items-start hover:bg-stone-100/40 transition-colors duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4"
            >
              {/* Column 1: The Year Anchor */}
              <div className="flex items-center gap-4 md:block">
                <span className="font-serif text-[#A37F55] text-3xl md:text-4xl font-light tracking-tight block">
                  {item.year}
                </span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-stone-400 uppercase md:hidden">
                  {item.location}
                </span>
              </div>

              {/* Column 2: Event Title & Location Stamp */}
              <div className="flex flex-col gap-1">
                <h3 className="font-serif !text-[#1E2229] text-xl md:text-2xl font-normal tracking-wide !group-hover:text-[#A37F55] transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="font-sans text-[11px] tracking-[0.15em] text-stone-400 uppercase font-medium hidden md:block pt-1">
                  {item.location}
                </span>
              </div>

              {/* Column 3: Context Description */}
              <div className="flex items-center justify-between md:pt-1">
                <p className="text-[#555E6B] font-light leading-relaxed text-sm md:text-base max-w-lg">
                  {item.description}
                </p>
                
                {/* Micro-Interaction Editorial Arrow */}
                <span className="hidden lg:block text-stone-300 group-hover:text-[#A37F55] transition-all duration-300 transform group-hover:translate-x-2 text-2xl font-light pl-4">
                  →
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}