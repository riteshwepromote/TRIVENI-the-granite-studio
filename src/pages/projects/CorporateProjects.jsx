import React, { useState } from 'react';

// Comprehensive corporate portfolio data
const strategicProjects = [
  {
    id: 't-01',
    title: 'The Apex Corporate Headquarters',
    scale: '45,000 Sq. Ft.',
    location: 'Mumbai, MH',
    scope: 'External Granite Cladding & Structural Pillars',
    materials: 'Absolute Black (Flamed) & Imperial White (Polished)',
    specs: '30mm thickness tolerance, custom dry-lay inspection protocol applied.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 't-02',
    title: 'Grand Atrium Terminal & Lounge',
    scale: '120,000 Sq. Ft.',
    location: 'Bengaluru, KA',
    scope: 'High-Traffic Monolithic Flooring & Elevator Facades',
    materials: 'Alaska Gold & Premium Steel Grey Bookmatched',
    specs: 'High-gloss diamond polish finish, matched veining across 400 linear meters.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 't-03',
    title: 'The Capital Boardrooms & Suites',
    scale: '12,000 Sq. Ft.',
    location: 'New Delhi, DL',
    scope: 'Custom CNC-Carved Conference Ensembles & Wall Panels',
    materials: 'Tan Brown Finely Grain-Matched Slabs',
    specs: 'Seamless edge profiling, anti-stain industrial sealing treated.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 't-04',
    title: 'Centennial Tech Park Plazas',
    scale: '210,000 Sq. Ft.',
    location: 'Hyderabad, TS',
    scope: 'Civic Hardscaping, Water Features & Radial Walkways',
    materials: 'Sardo Grey & Classic Red Textured Pavers',
    specs: 'Skid-resistant rough flamed finish, qualified for heavy vehicular load.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400'
  }
];

// Content for the interactive capacity breakdown tabs
const technicalCapabilities = {
  logistics: {
    title: "High-Volume Fleet & Supply Chain Control",
    metric: "400+ Metric Tons / Day",
    description: "Corporate projects operate on rigid timelines. We sync our supply pipelines directly with your project milestones to bypass distributor delays.",
    points: ["Direct-from-quarry block allocation mechanics", "Dedicated inter-state transport clearance protocols", "Just-In-Time site delivery configurations to eliminate layout constraints"]
  },
  engineering: {
    title: "Advanced Slab Machining & Tolerances",
    metric: "±0.5mm Precision",
    description: "Our processing showrooms utilize Italian multi-blade cutters and automated polishing lines to guarantee perfect structural consistency.",
    points: ["Automated CNC edge profiling and dynamic texturing", "Calibrated thickness matching for perfectly level floor planes", "Pre-delivery stone sealing and protective epoxy backings"]
  },
  assurance: {
    title: "The Triveni Strict Quality Guarantee",
    metric: "100% Batch Inspection",
    description: "Every single slab designated for corporate procurement passes through an exhaustive batch tracking system before shipping.",
    points: ["Strict color tone matching across macro-volume orders", "Micro-fissure soundwave detection mapping on structural slabs", "Formalized digital inspection layout mapping provided to clients"]
  }
};

export default function CorporateProjects() {
  const [activeTab, setActiveTab] = useState('logistics');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="bg-[#F8F8F8] select-none font-['AlbertSans']">
      
      {/* SECTION 1: MASTER INTRO HEADER */}
      <section className="py-26 px-6 md:px-12 lg:px-20 border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-end">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[#B78A79] text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
              B2B ARCHITECTURAL DIVISION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[42px] font-extralight text-[#1A1A1A] leading-[1.15] tracking-tight">
              Uncompromising Stone Supply <br />Built for Commercial Scale.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#555555] text-[14px] leading-[1.7] max-w-md">
              Triveni coordinates quarry extraction, heavy machining, and commercial logistics to deliver uniform granite installations across major developments in India. We emphasize technical precision, structural matching, and predictable execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTENSE CONTENT-HEAVY RECORD MATRIX */}
      <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-[#DCDCDC] pb-6">
            <h2 className="text-[22px] font-light text-[#1A1A1A] tracking-tight">
              Active Project Matrix — Case Overviews
            </h2>
            <p className="text-sm text-[#555555] mt-2 md:mt-0 uppercase tracking-widest font-medium">
              Showing {strategicProjects.length} Verified Installations
            </p>
          </div>

          {/* Table / Grid Mixture Layout */}
          <div className="flex flex-col">
            {strategicProjects.map((project) => (
              <div
                key={project.id}
                className="border-b border-[#DCDCDC] py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center group hover:bg-[#F2F2F2]/60 transition-colors duration-300 px-4 -mx-4 rounded-lg"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* ID & Minimal Image Preview Indicator */}
                <div className="lg:col-span-3 flex items-center gap-6">
                  <span className="text-[14px] text-[#B78A79] font-bold tracking-wider">{project.id}</span>
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 shrink-0 relative border border-[#DCDCDC]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  <div className="lg:hidden">
                    <h3 className="text-[17px] text-[#1A1A1A] font-medium">{project.title}</h3>
                    <p className="text-[14px] text-[#B78A79] mt-0.5">{project.location}</p>
                  </div>
                </div>

                {/* Main Identity & Structural Scope */}
                <div className="hidden lg:col-span-4 lg:flex flex-col">
                  <h3 className="text-[18px] text-[#1A1A1A] font-normal tracking-tight group-hover:text-[#C58345] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[14px] text-[#555555] mt-2 font-light leading-relaxed">
                    <strong class="font-normal text-[#333333]">Scope:</strong> {project.scope}
                  </span>
                </div>

                {/* Material Details & Specifications */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-wider text-[#333333] font-semibold">Materialization</span>
                  <p className="text-[14px] text-[#555555] mt-1 font-light leading-snug">{project.materials}</p>
                  <p className="text-[13px] text-[#B78A79] mt-1.5 font-medium italic">{project.specs}</p>
                </div>

                {/* Scale & Quantitative Data */}
                <div className="lg:col-span-2 flex items-center lg:justify-end justify-between pt-4 lg:pt-0 border-t border-dashed border-[#DCDCDC] lg:border-none">
                  <span className="lg:hidden text-sm text-[#555555]">Total Allocated Volume:</span>
                  <div className="text-right">
                    <div className="text-[20px] text-[#C58345] font-normal tracking-wide">{project.scale}</div>
                    <div className="text-[13px] text-[#555555] uppercase tracking-widest font-medium mt-0.5 hidden lg:block">{project.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE INFRASTRUCTURE ENGINE TABS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-[#B78A79] text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
              CAPACITY ASSURANCE
            </span>
            <h2 className="text-3xl md:text-[28px] font-extralight text-[#1A1A1A] tracking-tight">
              Engineered to Mitigate Commercial Risk
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Nav Controls */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {Object.keys(technicalCapabilities).map((key) => (
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
                    {key.charAt(0).toUpperCase() + key.slice(1)} Setup
                  </span>
                  <span className="text-[13px] text-[#555555] font-mono font-medium">[{technicalCapabilities[key].metric}]</span>
                </button>
              ))}
            </div>

            {/* Right Dynamic Value Panel */}
            <div className="lg:col-span-8 bg-[#F8F8F8] p-8 md:p-12 rounded-2xl min-h-[320px] flex flex-col justify-between border border-[#DCDCDC]">
              <div>
                <span className="text-[24px] text-[#C58345] font-normal tracking-tight block mb-4">
                  {technicalCapabilities[activeTab].title}
                </span>
                <p className="text-[#555555] text-[14px] leading-[1.7] max-w-xl mb-8">
                  {technicalCapabilities[activeTab].description}
                </p>
              </div>

              <div className="border-t border-[#DCDCDC] pt-6 flex flex-col gap-4">
                {technicalCapabilities[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#B78A79] text-[16px] leading-none mt-0.5">▪</span>
                    <span className="text-[#333333] text-[14px] font-normal leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORPORATE TENDER & DISCOVERY CALL TO ACTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs text-[#C58345] uppercase tracking-[0.2em] font-semibold mb-4">
            Request Technical Dossier
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#1A1A1A] tracking-tight mb-6 leading-tight">
            Ready to initiate technical estimates <br />or request sample batches?
          </h2>
          <p className="text-[#555555] text-[14px] leading-[1.7] mb-10 max-w-lg">
            Connect directly with our commercial desk. We provide formal quote breakdowns, quarry inspection data, and physical material sets directly to your studio or site office.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-[#1A1A1A] text-white hover:bg-[#C58345] text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-sm transition-colors duration-300 shadow-sm">
              Connect to Commercial Desk
            </button>
            <button className="bg-transparent text-[#1A1A1A] hover:bg-black/5 text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-sm border border-[#1A1A1A] transition-colors duration-300">
              Download Sourcing Guide (PDF)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}