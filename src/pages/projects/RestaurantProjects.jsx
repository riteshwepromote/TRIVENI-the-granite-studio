import React, { useState } from 'react';

// Content-heavy matrix targeting cafes, bars, and premium restaurants
const hospitalityProjects = [
  {
    id: 'H-01',
    title: 'The Artisan Roast Coffee House',
    type: 'Boutique Cafe Chain',
    location: 'Colaba, Mumbai',
    application: '12ft Monolithic Espresso Bar & Spill-Proof Countertops',
    materials: 'Premium Colonial Gold (Satin Finish)',
    specs: 'Nano-sealed coating to guarantee zero espresso or citrus acid penetration.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'H-02',
    title: 'Nouveau Bistro & Cocktail Lounge',
    type: 'Fine Dining Space',
    location: 'Indiranagar, Bengaluru',
    application: 'Backlit Translucent Bar Counter & Accent Wall Paneling',
    materials: 'Exotic Crystallized White Patagonian Granite',
    specs: 'Calibrated to 18mm thickness optimization for hidden LED lighting installation.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'H-03',
    title: 'The Terra Osteria Rooftop',
    type: 'Al-Fresco Dining',
    location: 'Chanakyapuri, New Delhi',
    application: 'Thermal-Resistant Table Tops & Non-Slip Outdoor Paths',
    materials: 'Sardo Grey (Flamed & Brushed Finish)',
    specs: 'Skid-resistant rough texture comfortable for footwear, heat-tested up to 80°C.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'H-04',
    title: 'Zaffron Fusion Patisserie',
    type: 'Luxury Pastry Boutique',
    location: 'Jubilee Hills, Hyderabad',
    application: 'Cold-Retention Pastry Display Slabs & Island Cashier Desks',
    materials: 'Absolute Black (Mirror Polished Finish)',
    specs: 'Naturally low thermal conductivity to keep display surfaces consistently cool.',
    image: 'https://images.unsplash.com/photo-1463796113337-f138a1594a5f?auto=format&fit=crop&q=80&w=400'
  }
];

// Hospitality processing capabilities
const hospitalitySpecs = {
  finishes: {
    title: "Sensory Surface Textures for Dining Surfaces",
    metric: "4 Custom Variations",
    description: "The tactile feel of a restaurant table shapes the entire guest experience. We process stone far beyond standard high-gloss polishing lines.",
    points: ["Leathered Finish: Subtle, velvet-like texture hiding fingerprints perfectly.", "Honed Finish: Non-reflective matte elegance that doesn't glare under architectural spotlighting.", "Satin / Patina Treatment: Silky smooth touch engineered specifically for continuous bar contact."]
  },
  protection: {
    title: "Hospitality-Grade Stain & Chemical Shields",
    metric: "Zero-Absorption Sealing",
    description: "Cafes and bars are unforgiving architectural environments. Our restaurant granite batches undergo industrial vacuum sealing before delivery.",
    points: ["Resistant to continuous exposure from hot culinary oils and concentrated color compounds.", "Impervious to organic acids found in fresh citrus juices, vinegar reductions, and red wines.", "Certified non-porous surfaces safe for direct commercial food preparation and heavy sanitization."]
  },
  customization: {
    title: "Precision Edge Profiling & Joint Matching",
    metric: "CNC Controlled Edges",
    description: "Whether it's a curved fluid cocktail bar layout or seamless under-counter charging docks, our manufacturing team delivers exact blueprinting execution.",
    points: ["Custom bullnose, mitered apron transitions, and architectural shark-nose edge profiles.", "Bookmatched veining systems configured to flow seamlessly across distinct structural slab corners.", "Pre-cut internal wire-routing cutouts tailored for modular tabletop lighting or POS terminal hubs."]
  }
};

export default function RestaurantProjects() {
  const [activeTab, setActiveTab] = useState('finishes');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="bg-[#F8F8F8] select-none font-['AlbertSans'] text-[#1A1A1A]">
      
      {/* SECTION 1: MASTER HOSPITALITY HEADER */}
      <section className="py-26 px-6 md:px-12 lg:px-20 border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-end">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[#B78A79] text-[13px] font-medium uppercase tracking-[0.2em] block mb-5">
              HOSPITALITY & RETAIL DIVISION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[44px] font-extralight leading-[1.15] tracking-tight">
              Crafting High-End Dining Spaces <br />Through High-Performance Stone.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#555555] text-[15px] leading-[1.65] max-w-md">
              Triveni works closely with hospitality designers, restaurateurs, and cafe franchisees. We supply calibrated, stain-protected, and masterfully finished granite tailored to handle high-traffic footprints without sacrificing visual luxury.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOSPITALITY RECORD MATRIX */}
      <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-[#DCDCDC] pb-6">
            <h2 className="text-[22px] font-light tracking-tight">
              Hospitality Portfolios — Selected Spaces
            </h2>
            <p className="text-[13px] text-[#555555] mt-1 md:mt-0 uppercase tracking-widest font-medium">
              Showing {hospitalityProjects.length} Verified Ambiances
            </p>
          </div>

          {/* Interactive Record Rows */}
          <div className="flex flex-col">
            {hospitalityProjects.map((project) => (
              <div
                key={project.id}
                className="border-b border-[#DCDCDC] py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group hover:bg-[#F2F2F2]/60 transition-colors duration-300 px-4 -mx-4 rounded-lg"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* ID & Small Preview Box */}
                <div className="lg:col-span-3 flex items-center gap-6">
                  <span className="text-[14px] text-[#B78A79] font-medium tracking-wider">{project.id}</span>
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 shrink-0 relative border border-[#DCDCDC]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  <div className="lg:hidden">
                    <h3 className="text-[18px] font-normal">{project.title}</h3>
                    <p className="text-[14px] text-[#B78A79] font-medium mt-0.5">{project.type}</p>
                  </div>
                </div>

                {/* Architecture Identity & Deployment Details */}
                <div className="hidden lg:col-span-4 lg:flex flex-col">
                  <h3 className="text-[18px] font-normal tracking-tight group-hover:text-[#C58345] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[14px] text-[#555555] mt-2 font-light leading-relaxed">
                    Application: {project.application}
                  </span>
                </div>

                {/* Sourcing Texture Composition */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <span className="text-[13px] uppercase tracking-wider text-[#333333] font-medium">Stone Selection</span>
                  <p className="text-[15px] text-[#555555] mt-1 font-light">{project.materials}</p>
                  <p className="text-[13px] text-[#B78A79] mt-1 italic font-light">{project.specs}</p>
                </div>

                {/* Location Mapping & Core Typography */}
                <div className="lg:col-span-2 flex items-center lg:justify-end justify-between pt-4 lg:pt-0 border-t border-dashed border-[#DCDCDC] lg:border-none">
                  <span className="lg:hidden text-[14px] text-[#555555]">Concept Classification:</span>
                  <div className="text-right">
                    <div className="text-[18px] text-[#C58345] font-normal tracking-wide">{project.type}</div>
                    <div className="text-[13px] text-[#555555] uppercase tracking-wider font-medium mt-1 hidden lg:block">{project.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE HOSPITALITY ENGINEERING TABS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-[#B78A79] text-[13px] font-medium uppercase tracking-[0.2em] block mb-3">
              MATERIAL PERFORMANCE
            </span>
            <h2 className="text-3xl font-extralight tracking-tight">
              Designed to Outlast Demanding Turnovers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Nav Toggles */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(hospitalitySpecs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`text-left p-6 rounded-xl border transition-all duration-300 flex justify-between items-center ${
                    activeTab === key
                      ? 'bg-[#F8F8F8] border-[#C58345] shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-[#F8F8F8]/50'
                  }`}
                >
                  <span className={`text-[14px] uppercase tracking-wider font-semibold ${activeTab === key ? 'text-[#C58345]' : 'text-[#1A1A1A]'}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)} Criteria
                  </span>
                  <span className="text-[13px] text-[#555555] font-mono font-medium">[{hospitalitySpecs[key].metric}]</span>
                </button>
              ))}
            </div>

            {/* Right Dynamic Parameter Panel */}
            <div className="lg:col-span-8 bg-[#F8F8F8] p-8 md:p-12 rounded-2xl min-h-[320px] flex flex-col justify-between border border-[#DCDCDC]">
              <div>
                <span className="text-[24px] text-[#C58345] font-normal tracking-tight block mb-4">
                  {hospitalitySpecs[activeTab].title}
                </span>
                <p className="text-[#555555] text-[15px] leading-[1.7] max-w-xl mb-8">
                  {hospitalitySpecs[activeTab].description}
                </p>
              </div>

              <div className="border-t border-[#DCDCDC] pt-6 flex flex-col gap-4">
                {hospitalitySpecs[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#B78A79] text-[15px] mt-0.5">▪</span>
                    <span className="text-[#333333] text-[15px] font-light leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOSPITALITY SOURCING DISCOVERY CALL TO ACTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[13px] text-[#C58345] uppercase tracking-[0.2em] font-semibold mb-4">
            Custom Layout Planning
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6 leading-tight">
            Consulting an ambitious interior layout <br />or upscale franchise rollout?
          </h2>
          <p className="text-[#555555] text-[15px] leading-[1.7] mb-10 max-w-lg">
            Our specialized hospitality consulting desk guides you through finish sampling, edge profiling blueprints, and custom batch reservations. Get mockups delivered to your architectural practice or design studio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-[#1A1A1A] text-white hover:bg-[#C58345] text-[13px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-sm transition-colors duration-300 shadow-sm">
              Connect to Hospitality Expert
            </button>
            <button className="bg-transparent text-[#1A1A1A] hover:bg-black/5 text-[13px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-sm border border-[#1A1A1A] transition-colors duration-300">
              Request Samples Kit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}