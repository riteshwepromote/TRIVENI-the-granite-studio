import React, { useState } from 'react';

// Content-heavy matrix targeting luxury villas, penthouses, and premium apartments
const residentialProjectsData = [
  {
    id: 'R-01',
    title: 'The Sky-Villas Penthouse Suite',
    type: 'Luxury Residential',
    location: 'Worli, Mumbai',
    application: 'Bookmatched Living Room Feature Wall & Master Bath En-Suite',
    materials: 'Exotic Cristallo Quartzite & Statuario Granite Granules',
    specs: 'Mirrored structural veining aligned symmetrically across a 14ft vertical plane.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'R-02',
    title: 'The Emerald Estate Villa',
    type: 'Private Residence',
    location: 'Ecr, Chennai',
    application: 'Monolithic Waterfall Kitchen Island & Dynamic Culinary Countertops',
    materials: 'Premium Titanium Gold Leathered Granite',
    specs: 'Mitered 60mm structural apron edge profile with fully integrated under-mount sink cuts.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'R-03',
    title: 'The Retreat Courtyard & Pavilion',
    type: 'Bungalow Landscape',
    location: 'Sainik Farms, New Delhi',
    application: 'Anti-Slip Patio Flooring, Pool Coping & Step Treads',
    materials: 'Flamed Imperial White & Brushed Sardo Grey',
    specs: 'Wire-brushed texture after flaming to ensure barefoot comfort while maintaining water-shedding traction.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'R-04',
    title: 'The Sky-Line Duplex Residences',
    type: 'Premium Apartment',
    location: 'Gachibowli, Hyderabad',
    application: 'High-Traffic Foyer Inlays, Corridor Linings & Accent Skirting',
    materials: 'Classic Tan Brown & Polished Absolute Black',
    specs: 'Diamond-grade factory calibration for zero-gap joint layout across main living areas.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400'
  }
];

// Residential processing capabilities
const residentialSpecs = {
  curation: {
    title: "Exotic Slab Hand-Selection & Mapping",
    metric: "Exclusive Quarry Lot Access",
    description: "Every home deserves a singular signature. We provide private gallery walkthroughs for homeowners and designers to reserve individual consecutive slabs.",
    points: ["Sequential batch reservation ensuring uniform color tones across your home floor plan.", "High-resolution digital layout matching previews before cutting actions take place.", "Access to rare global imports alongside our celebrated domestic collections."]
  },
  craftsmanship: {
    title: "Bespoke Edge Profiling & Kitchen Engineering",
    metric: "Micron CNC Accuracy",
    description: "The kitchen island is the social anchor of the modern home. Our artisans craft seamless dropdown edges and tactile countertop profiles.",
    points: ["Custom edge profiling options: Eased, Full Bullnose, Ogee, and Minimalist Shark-Nose.", "Reinforced fiberglass backing inserts on structural cutouts for long-term safety.", "Integrated drain grooving options machined directly into the granite plane."]
  },
  living: {
    title: "Family-Safe Preservation & Finishes",
    metric: "Hypoallergenic Sealing Protocols",
    description: "Home surfaces see daily living. We seal our residential selections with premium, food-safe sealers to shield against typical household messes.",
    points: ["Deep stain protection against cooking oils, citrus juices, milk, and turmeric drops.", "Non-porous surface density properties that inhibit micro-bacterial or mold growth in wet areas.", "Low-maintenance surface durability designed to clean easily with mild soap and warm water."]
  }
};

export default function ResidentialProjects() {
  const [activeTab, setActiveTab] = useState('curation');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="bg-[#F8F8F8] select-none font-['AlbertSans'] text-[#1A1A1A]">
      
      {/* SECTION 1: MASTER RESIDENTIAL HEADER */}
      <section className="py-26 px-6 md:px-12 lg:px-20 border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-end">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[#B78A79] text-[13px] font-medium uppercase tracking-[0.2em] block mb-5">
              PRIVATE RESIDENCES & VILLAS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[44px] font-extralight leading-[1.15] tracking-tight">
              Curating Statement Stone Interiors <br />For Generations of Elegant Living.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#555555] text-[15px] leading-[1.65] max-w-md">
              Triveni translates natural geological art into tailored home environments. We partner with custom home builders and interior studios to deliver hand-curated slabs, exquisite processing details, and safe, permanent installations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESIDENTIAL RECORD MATRIX */}
      <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-[#DCDCDC] pb-6">
            <h2 className="text-[22px] font-light tracking-tight">
              Residential Showcase — Private Estates
            </h2>
            <p className="text-[13px] text-[#555555] mt-1 md:mt-0 uppercase tracking-widest font-medium">
              Showing {residentialProjectsData.length} Signature Homes
            </p>
          </div>

          {/* Interactive Record Rows */}
          <div className="flex flex-col">
            {residentialProjectsData.map((project) => (
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

                {/* Interior Space Identity & Application Specifics */}
                <div className="hidden lg:col-span-4 lg:flex flex-col">
                  <h3 className="text-[18px] font-normal tracking-tight group-hover:text-[#C58345] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[14px] text-[#555555] mt-2 font-light leading-relaxed">
                    Application: {project.application}
                  </span>
                </div>

                {/* Sourcing Stone Configuration */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <span className="text-[13px] uppercase tracking-wider text-[#333333] font-medium">Material Selection</span>
                  <p className="text-[15px] text-[#555555] mt-1 font-light">{project.materials}</p>
                  <p className="text-[13px] text-[#B78A79] mt-1 italic font-light">{project.specs}</p>
                </div>

                {/* Location Mapping & Classification */}
                <div className="lg:col-span-2 flex items-center lg:justify-end justify-between pt-4 lg:pt-0 border-t border-dashed border-[#DCDCDC] lg:border-none">
                  <span className="lg:hidden text-[14px] text-[#555555]">Typology:</span>
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

      {/* SECTION 3: INTERACTIVE RESIDENTIAL PERFORMANCE TABS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-b border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-[#B78A79] text-[13px] font-medium uppercase tracking-[0.2em] block mb-3">
              TAILORED HOME ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extralight tracking-tight">
              Fine-Tuned for Everyday Domestic Luxury
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Nav Toggles */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(residentialSpecs).map((key) => (
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
                  <span className="text-[13px] text-[#555555] font-mono font-medium">[{residentialSpecs[key].metric}]</span>
                </button>
              ))}
            </div>

            {/* Right Dynamic Parameter Panel */}
            <div className="lg:col-span-8 bg-[#F8F8F8] p-8 md:p-12 rounded-2xl min-h-[320px] flex flex-col justify-between border border-[#DCDCDC]">
              <div>
                <span className="text-[24px] text-[#C58345] font-normal tracking-tight block mb-4">
                  {residentialSpecs[activeTab].title}
                </span>
                <p className="text-[#555555] text-[15px] leading-[1.7] max-w-xl mb-8">
                  {residentialSpecs[activeTab].description}
                </p>
              </div>

              <div className="border-t border-[#DCDCDC] pt-6 flex flex-col gap-4">
                {residentialSpecs[activeTab].points.map((point, index) => (
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

      {/* SECTION 4: RESIDENTIAL SOURCING DISCOVERY CALL TO ACTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[13px] text-[#C58345] uppercase tracking-[0.2em] font-semibold mb-4">
            Private Sourcing Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6 leading-tight">
            Ready to design a completely bespoke <br />stone landscape for your residence?
          </h2>
          <p className="text-[#555555] text-[15px] leading-[1.7] mb-10 max-w-lg">
            Schedule a private gallery appointment with our design specialists. We work alongside your family interior designer or architect to match patterns and reserve premium granite collections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-[#1A1A1A] text-white hover:bg-[#C58345] text-[13px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-sm transition-colors duration-300 shadow-sm">
              Book Gallery Appointment
            </button>
            <button className="bg-transparent text-[#1A1A1A] hover:bg-black/5 text-[13px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-sm border border-[#1A1A1A] transition-colors duration-300">
              Request Private Lookbook (PDF)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}