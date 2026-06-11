import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  MessageSquare, 
  Sparkles,
  ShieldCheck,
  Compass
} from "lucide-react";

// Premium Unsplash placeholders curated for an elite architectural brand
const BLOG_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  graniteGuide: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
  graniteMarble: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
  quartzGranite: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
  woodTile: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1000",
  claddingTrends: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  stoneTrends: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
  contentInner: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000"
};

// Complete structured database for the initial 6 launch blogs
const ALL_BLOGS = [
  {
    id: 1,
    slug: "how-to-choose-the-right-granite-for-your-home",
    title: "The Ultimate Guide to Choosing Granite for Your Home",
    excerpt: "Selecting the ideal granite slab requires balancing geological density, vitreous crystalline arrays, and color depth configurations. Discover our technical screening framework.",
    category: "Stone Guides",
    author: "Ritesh Sharma",
    date: "June 08, 2026",
    image: BLOG_IMAGES.graniteGuide,
    isFeatured: true,
    introduction: "Granite stands as an unparalleled architectural hallmark of structural resilience and raw organic expression. However, integrating it flawlessly into a high-end layout demands deep technical consideration.",
    contentBlocks: [
      {
        heading: "1. Assessing Crystalline Density & Porosity Matrix",
        text: "Not all granite slabs share the same structural integrity. High-traffic residential zones require materials with micro-compact grain distributions. Always check for tight crystalline bonds on cross-sections to ensure minimal water stagnation risks."
      },
      {
        heading: "2. Color Matching & Light Specularity",
        text: "Premium options like Black Galaxy or Alaska White respond beautifully to directional spotlights. Consider how room illumination values will interact with your stone surface finish—whether it reflects brilliantly or absorbs glare smoothly."
      }
    ],
    takeaways: [
      "Prioritize dense igneous material structures for high-use culinary areas.",
      "Calibrate surface seals every 24 months to neutralize potential liquid stains.",
      "Review raw slabs in broad daylight before signing off on final cuts."
    ]
  },
  {
    id: 2,
    slug: "granite-vs-marble-complete-comparison",
    title: "Granite vs Marble: Complete Engineering & Aesthetic Comparison",
    excerpt: "An in-depth structural breakdown contrasting plutonic igneous formations against metamorphic crystalline limestone blocks.",
    category: "Material Comparison",
    author: "Anya Malhotra",
    date: "June 02, 2026",
    image: BLOG_IMAGES.graniteMarble,
    isFeatured: false,
    introduction: "Architects and luxury builders frequently face a decisive crossroads: select the raw hardness of granite or the soft, sweeping luxury veining of genuine marble.",
    contentBlocks: [
      {
        heading: "The Hardness Vector (Mohs Scale Metrics)",
        text: "Granite sits securely at 6–7 on the Mohs scale, brushing off metal utility scratches easily. Marble, as a softer calcitic crystalline structure, sits closer to 3–4, making it more responsive to patina development over long timelines."
      }
    ],
    takeaways: [
      "Use granite for high-traffic work surfaces and outdoor facades.",
      "Reserve marble for elegant vertical features, low-friction bathrooms, and classic furniture details."
    ]
  },
  {
    id: 3,
    slug: "quartz-vs-granite-which-is-better",
    title: "Quartz vs Granite: Which is Better for High-Traffic Kitchens?",
    excerpt: "Evaluating human-engineered polymer-bound quartz crystals against pure plutonic quarry slabs in premium culinary workspaces.",
    category: "Material Comparison",
    author: "Ritesh Sharma",
    date: "May 28, 2026",
    image: BLOG_IMAGES.quartzGranite,
    isFeatured: false,
    introduction: "Modern premium kitchen plans require worktops that can easily handle high thermal stress, localized impacts, and acidic culinary fluids.",
    contentBlocks: [
      {
        heading: "Engineered Resilience vs. Organic Variation",
        text: "Engineered quartz offers absolute structural predictability with zero surface pores, making it incredibly stain resistant. Natural granite, conversely, delivers irreplaceable, one-of-a-kind stone patterns forged across millennia."
      }
    ],
    takeaways: [
      "Quartz excels in ultra-sterile, zero-maintenance contemporary kitchens.",
      "Granite brings timeless artistic prestige and handles blistering skillet heat effortlessly."
    ]
  },
  {
    id: 4,
    slug: "wooden-flooring-vs-tile-flooring",
    title: "Wooden Flooring vs Tile Flooring: The Luxury Conundrum",
    excerpt: "Analysing cross-laminated engineered timber warmth metrics against the vitreous thermal conductivity of premium porcelain surfaces.",
    category: "Flooring Solutions",
    author: "Vikram Malhotra",
    date: "May 19, 2026",
    image: BLOG_IMAGES.woodTile,
    isFeatured: false,
    introduction: "The flooring layer establishes the structural baseline for your entire interior environment, dictating both acoustics and thermal comfort.",
    contentBlocks: [
      {
        heading: "Acoustic Insulation & Thermal Responsiveness",
        text: "Engineered wood uses multi-layer core arrangements to soften footstep resonance, offering a warm tactile feel. Premium large-format tiles yield incredible surface hardness and coordinate perfectly with radiant floor heating loops."
      }
    ],
    takeaways: [
      "Select engineered timber to introduce organic character into bedrooms and library wings.",
      "Opt for high-end tiles in high-moisture entryways and transition areas."
    ]
  },
  {
    id: 5,
    slug: "exterior-cladding-trends-for-modern-homes",
    title: "Exterior Cladding Trends for Modern High-Performance Homes",
    excerpt: "Unveiling modern trends in intelligent facades, ventilated curtain tracks, and advanced I-Clad thermal systems.",
    category: "Exterior Cladding",
    author: "Ritesh Sharma",
    date: "May 10, 2026",
    image: BLOG_IMAGES.claddingTrends,
    isFeatured: false,
    introduction: "Modern high-end building envelopes do more than just block seasonal weather—they actively manage thermal transfers and emphasize bold shapes.",
    contentBlocks: [
      {
        heading: "The Rise of Ventilated Pressure-Equalized Assemblies",
        text: "Architects are quickly moving away from wet-mortar cladding towards dry-hung interlocking track designs. These assemblies allow building walls to breathe, permanently blocking water stagnation issues."
      }
    ],
    takeaways: [
      "Insulated cladding dramatically cuts baseline HVAC electrical draw.",
      "Dry mechanical tracks shift safely with seismic micro-oscillations."
    ]
  },
  {
    id: 6,
    slug: "top-natural-stone-trends-for-luxury-interiors",
    title: "Top Natural Stone Trends for Luxury Interiors in 2026",
    excerpt: "Exploring the shifting design codes prioritizing massive bookmatched islands, bold textures, and raw, unpolished finishes.",
    category: "Design Inspiration",
    author: "Kavita Rao",
    date: "April 29, 2026",
    image: BLOG_IMAGES.stoneTrends,
    isFeatured: false,
    introduction: "This year, elite interior spaces are celebrating bold material honesty over heavily modified, ultra-glossy surfaces.",
    contentBlocks: [
      {
        heading: "Monolithic Blocks and Low-Specular Finishes",
        text: "Design patterns focus on thick, raw stone block structures displaying complex, deep-set mineral veining. Leathered and honed finishes are taking center stage, offering a rich, understated tactile feel.",
      }
    ],
    takeaways: [
      "Bookmatched features serve as prominent, one-of-a-kind fine art elements.",
      "Honed and textured surfaces bring a soft, sophisticated elegance to architectural spaces."
    ]
  }
];

const CATEGORIES = [
  "All Articles",
  "Stone Guides",
  "Design Inspiration",
  "Flooring Solutions",
  "Exterior Cladding",
  "Material Comparison",
  "Maintenance Tips",
  "Project Showcases"
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [activeBlog, setActiveBlog] = useState(null); // When null, displays feed. When populated, displays article view.

  // Filtered post calculation
  const filteredBlogs = selectedCategory === "All Articles"
    ? ALL_BLOGS.filter(b => !b.isFeatured)
    : ALL_BLOGS.filter(b => b.category === selectedCategory && !b.isFeatured);

  const featuredBlog = ALL_BLOGS.find(b => b.isFeatured);

  // Auto scroll reset on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeBlog, selectedCategory]);

  const handleArticleClick = (blog) => {
    setActiveBlog(blog);
    // Mimic updating URL history elegantly
    window.history.pushState(null, "", `/blog/${blog.slug}`);
  };

  const handleBackToFeed = () => {
    setActiveBlog(null);
    window.history.pushState(null, "", `/blog`);
  };

  return (
    <div className="bg-[#faf9f6] text-[#1c1c1c] font-sans antialiased min-h-screen selection:bg-[#1c1c1c] selection:text-white">
      
      {/* ------------------ MAIN BLOG FEED LAYOUT ------------------ */}
      {!activeBlog ? (
        <div>
          {/* Hero Section */}
          <section className="relative pt-24 pb-16 border-b border-zinc-200 overflow-hidden bg-white">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium inline-flex items-center gap-2 mb-4">
                <Sparkles size={12} className="text-amber-600" /> Insights & Inspirations
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Discover trends, materials, design ideas, and expert guidance.
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Curated architectural perspectives and material intelligence blueprints designed to elevate premium structural spaces.
              </p>
            </div>
          </section>

          {/* Featured Article Section */}
          {featuredBlog && selectedCategory === "All Articles" && (
            <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
              <div 
                onClick={() => handleArticleClick(featuredBlog)}
                className="group cursor-pointer bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-7 overflow-hidden relative min-h-[340px] lg:min-h-[480px]">
                  <img 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    <span className="text-[11px] uppercase tracking-widest font-medium text-zinc-800 flex items-center gap-1.5">
                      <Sparkles size={10} className="text-amber-600" /> Featured Article
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-zinc-400 mb-6">
                    <span className="font-medium text-zinc-800 uppercase tracking-wider">{featuredBlog.category}</span>
                    <span>•</span>
                    <span>{featuredBlog.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-zinc-900 tracking-tight mb-4 group-hover:text-zinc-700 transition-colors leading-[1.25]">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-zinc-500 font-light text-sm sm:text-base leading-relaxed mb-8 line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs text-zinc-400 font-light flex items-center gap-1.5">
                      <User size={12} /> By {featuredBlog.author}
                    </span>
                    <span className="text-xs tracking-wider uppercase font-medium inline-flex items-center gap-1 text-zinc-900 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Categories Navigation Bar */}
          <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-6">
            <div className="border-b border-zinc-200 pb-4">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 lg:mx-0 lg:px-0">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-zinc-950 text-white shadow-sm"
                        : "bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Luxury 3-Column Blog Grid */}
          <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                  <article 
                    key={blog.id}
                    onClick={() => handleArticleClick(blog)}
                    className="group cursor-pointer bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-400 flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase tracking-widest font-medium text-zinc-800 border border-white/20 shadow-xs">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-[11px] text-zinc-400 mb-3 block font-light">{blog.date}</span>
                      <h3 className="text-lg font-normal text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-600 transition-colors line-clamp-2 leading-[1.35]">
                        {blog.title}
                      </h3>
                      <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400 font-light flex items-center gap-1">
                          <User size={10} /> {blog.author}
                        </span>
                        <span className="text-xs font-medium tracking-wide uppercase inline-flex items-center gap-1 text-zinc-950 group-hover:gap-2 transition-all">
                          Read More <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-zinc-200">
                <Compass size={32} className="mx-auto text-zinc-300 mb-4 stroke-1" />
                <p className="text-zinc-400 font-light text-sm">No articles initialized under this specific taxonomy yet.</p>
              </div>
            )}
          </section>
        </div>
      ) : (
        
        /* ------------------ SINGLE BLOG DETAIL LAYOUT ------------------ */
        <div className="bg-white">
          {/* Back Navigation Bar */}
          <div className="bg-[#faf9f6] border-b border-zinc-200 sticky top-0 z-50 backdrop-blur-md bg-white/80">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
              <button 
                onClick={handleBackToFeed}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                <ArrowLeft size={14} /> Back to Insights
              </button>
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-light hidden sm:inline-block">
                Reading: {activeBlog.title}
              </span>
            </div>
          </div>

          {/* Article Header & Meta */}
          <header className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
            <span className="bg-zinc-100 px-3 py-1 rounded text-xs uppercase tracking-widest font-medium text-zinc-700 inline-block mb-6">
              {activeBlog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-8 leading-[1.15] max-w-3xl mx-auto">
              {activeBlog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 border-y border-zinc-100 py-4 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5 text-zinc-700 font-light">
                <User size={13} className="text-zinc-400" /> By {activeBlog.author}
              </span>
              <span className="hidden sm:inline-block text-zinc-200">|</span>
              <span className="flex items-center gap-1.5 font-light">
                <Calendar size={13} /> {activeBlog.date}
              </span>
              <span className="hidden sm:inline-block text-zinc-200">|</span>
              <span className="flex items-center gap-1.5 font-light">
                <Tag size={13} /> 5 Min Read
              </span>
            </div>
          </header>

          {/* Hero Big Image */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-xs bg-zinc-100">
              <img 
                src={activeBlog.image} 
                alt={activeBlog.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content Matrix */}
          <article className="max-w-3xl mx-auto px-6 text-zinc-800 font-light text-base sm:text-lg leading-relaxed">
            {/* Introduction paragraph */}
            <p className="text-zinc-950 font-normal text-lg sm:text-xl leading-relaxed mb-10 border-l-2 border-zinc-950 pl-6 italic">
              {activeBlog.introduction}
            </p>

            {/* Dynamic Content Blocks */}
            {activeBlog.contentBlocks.map((block, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-xl sm:text-2xl font-normal text-zinc-950 tracking-tight mb-4 mt-8">
                  {block.heading}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
                  {block.text}
                </p>
              </div>
            ))}

            {/* Creative Interstitial In-line Image */}
            <div className="my-14 rounded-xl overflow-hidden aspect-[16/9] shadow-inner bg-zinc-100">
              <img 
                src={BLOG_IMAGES.contentInner} 
                alt="Architectural detailing placeholder" 
                className="w-full h-full object-cover"
              />
              <span className="text-[11px] text-zinc-400 mt-2 block text-center italic font-light">
                Figure 1.1: Visualizing slab core distribution patterns under precise specular setups.
              </span>
            </div>

            {/* Structured Takeaways Card Container */}
            <div className="bg-[#faf9f6] border border-zinc-200 rounded-xl p-6 sm:p-8 my-12">
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-zinc-900 mb-4 flex items-center gap-2">
                <ShieldCheck size={16} className="text-zinc-800" /> Key Material Takeaways
              </h3>
              <ul className="space-y-3.5 text-zinc-600 text-xs sm:text-sm">
                {activeBlog.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Related Articles Matrix Layout */}
          <section className="bg-[#faf9f6] border-t border-zinc-200 mt-24 py-16">
            <div className="max-w-5xl mx-auto px-6">
              <h4 className="text-xs uppercase tracking-[0.25em] font-medium text-zinc-400 mb-10 text-center">
                Keep Exploring Intelligence
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ALL_BLOGS.filter(b => b.id !== activeBlog.id).slice(0, 2).map((related) => (
                  <div 
                    key={related.id}
                    onClick={() => handleArticleClick(related)}
                    className="group cursor-pointer bg-white border border-zinc-200 p-6 rounded-xl hover:border-zinc-300 transition-all flex flex-col"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-medium text-zinc-400 mb-2 block">{related.category}</span>
                    <h5 className="font-normal text-zinc-900 tracking-tight text-base mb-2 group-hover:text-zinc-600 transition-colors line-clamp-1">
                      {related.title}
                    </h5>
                    <p className="text-zinc-500 text-xs font-light line-clamp-2 mb-4 leading-relaxed">{related.excerpt}</p>
                    <span className="text-xs font-medium text-zinc-950 inline-flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform">
                      Read Post <ArrowRight size={12} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ------------------ MONOLITHIC CONSULTATION CTA ------------------ */}
      <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-medium block mb-4">
            Architectural Advisory
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-4 max-w-2xl mx-auto leading-snug">
            Have a custom surface specification project in mind?
          </h2>
          <p className="text-zinc-400 font-light text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Connect directly with our engineering consultation desk for dedicated advice on planning material matrices, load boundaries, and visual styling patterns.
          </p>
          <button className="bg-white text-zinc-950 text-xs font-medium uppercase tracking-wider px-6 py-3 rounded-full hover:bg-zinc-100 transition-all shadow-sm inline-flex items-center gap-2 group">
            Request Architectural Consultation 
            <MessageSquare size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;