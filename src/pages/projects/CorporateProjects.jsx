import React, { useState } from "react";
import { 
  Building2, 
  Home, 
  UtensilsCrossed, 
  MapPin, 
  Layers, 
  Award, 
  Sparkles 
} from "lucide-react";
import featuredmg from "../../assets/featuredP.png";

const ALL_PROJECTS = [
  // Corporate & Infrastructure
  { id: 1, title: "DMRC", category: "corporate", location: "Delhi", material: "Sadar Ali Granite & Rain Forest Brown", image: "https://media.istockphoto.com/id/1287044261/photo/train-arrives-at-metro-station-of-delhi-metro-system.jpg?s=612x612&w=0&k=20&c=jbmqu3pCu9ew1MtRPnGsmlmAY3tEl81N-fkhgp07whQ=" },
  { id: 2, title: "Apollo Hospital", category: "corporate", location: "Mohali", material: "Italian Marble & Anti-Skid Granite", image: "https://imgs.search.brave.com/uCwcV5VVu79IWe-2Napam_lAtW0zqu_BkBfZ_WQhzpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbS5y/ZWRpZmYuY29tL21v/bmV5LzIwMjMvYXVn/LzI0YXBvbGxvLWhv/c3BpdGFscy5qcGc_/ZnI9bW9uZXk" },
  { id: 3, title: "Netsmartz IT Building", category: "corporate", location: "Mohali", material: "Flamed Granite & Quartz", image: "https://imgs.search.brave.com/tnlYlus6O8UwTzEnDSF7VnxjAmlZDzZ7T1Np48_EFxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb3Jt/c2Rlc2lnbi5pbi9w/dWJsaWMvc3RvcmFn/ZS9wcm9kdWN0L21h/aW4vMDIwMjIzMDUz/NzUxLTAxLmpwZw" },
  { id: 4, title: "Aerovista", category: "corporate", location: "Mohali", material: "Imported Marble & Natural Quartzite", image: "https://imgs.search.brave.com/rZ5JRUYFR0oQo-cYjSg5UnHZ9kHoPUFcDH30ov_NIYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9teXBy/b3BlcnRpZXMuY28u/aW4vVGZlM0ZlODlI/bi93cC1jb250ZW50/L3VwbG9hZHMvRHVw/bGV4LWluLWFlcm8t/Y2l0eS1tb2hhbGkt/YWVyb3Zpc3RhLmpw/Zw" },
  { id: 5, title: "Ramada Encore Hotel", category: "corporate", location: "Zirakpur", material: "Imported Marble & Granite", image: "https://imgs.search.brave.com/t8_qfI4Jyaw7RTfWzf_N2T5FDlqfc90Aqnpjq6rfK_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yMmlt/Z2h0bGFrLm1tdGNk/bi5jb20vLjItbW10/LWh0bC1pbWFnZS9o/dGwtaW1ncy8yMDI1/MDUwNzE0MTYyMzcx/NTEtNWFlYjkyMmQt/NTAwNi00OTdkLWIx/NGUtZmQyYTQ4ZDZj/YzI1LmpwZz8mb3V0/cHV0LXF1YWxpdHk9/NzUmZG93bnNpemU9/NTIwOjM1MCZjcm9w/PTUyMDozNTA7Miww/Jm91dHB1dC1mb3Jt/YXQ9anBnJmRvd25z/aXplPTQ4MDozMzYm/Y3JvcD00ODA6MzM2" },

  // Residential (On-site shots)
  { id: 6, title: "Rahul's Residence", category: "residential", location: "Punjab", material: "Custom Italian Marble Cladding", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200" },
  { id: 7, title: "Parminder's Villa", category: "residential", location: "Punjab", material: "Titanium Gold Granite", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200" },
  { id: 8, title: "Ajay's Luxury Estate", category: "residential", location: "Panchkula", material: "Statuario Marble & Quartzite", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" },

  // Restaurants & Cafes
  { id: 9, title: "Oven Fresh", category: "hospitality", location: "Phase 7, Mohali", material: "Statuario Marble & Black Granite", image: "https://imgs.search.brave.com/TxmzoJNzSc-9BUWBw-nWwzarNVo1qA7fqJ85px0MRAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y2hhbmRpZ2FyaC9o/My8wMTcycHgxNzIu/eDE3Mi4yMTA3MDgx/ODA2MTcuaTVoMy9j/YXRhbG9ndWUvb3Zl/bi1mcmVzaC1jaGFu/ZGlnYXJoLXNlY3Rv/ci03Yy1jaGFuZGln/YXJoLWJha2VyaWVz/LWNhZWRwbHpkMDIu/anBnP3c9Mzg0MCZx/PTc1" },
  { id: 10, title: "Chillis", category: "hospitality", location: "Chandigarh", material: "Italian Marble", image: "https://imgs.search.brave.com/nP5csJabMz6kPFGvamhNwrxP9CJqtSXJBFKE7Jkxipo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdDRs/OWJ4MzF0aW9oLmNs/b3VkZnJvbnQubmV0/L2VhenltZWRpYS9y/ZXN0YXVyYW50LzY5/NDQxMS9yZXN0YXVy/YW50MDIwMjQwNDAy/MDQxNTUwLmpwZz93/aWR0aD04MTgmaGVp/Z2h0PTQ1MCZtb2Rl/PWZpdD9mb3JtYXQ9/YXV0byZxdWFsaXR5/PTgw" },
  { id: 11, title: "Studio XO", category: "hospitality", location: "Mohali", material: "Imported Marble & Quartz", image: "https://imgs.search.brave.com/8NngPzlFNehWVW4JBRH-iN5DMy4GTRQktxWDAkIcxhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVudWVsb29rLmNv/bS91cGxvYWRzL3Nw/YWNlXzM2ODU1LzE2/OTM5MTU4NzNfNTk1/eDQwMC5wbmc" },
  { id: 12, title: "Social", category: "hospitality", location: "Cyber City", material: "Premium Quartz", image: "https://imgs.search.brave.com/yyojMXN6JVg90thSRb-KXHwyuvmy2eKcfQc5UU9Pjwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZW5k/b3IubXNjaGlycHku/Y29tL2J1c2luZXNz/X3Bob3RvLzE2Mzk4/NzYxNjEuanBn" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-body selection:bg-[var(--color-accent)] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden bg-[var(--bg-soft)] border-b border-[var(--border-light)]">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600" 
            alt="Natural Stone Architecture" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-ui text-sm font-semibold tracking-wider uppercase mb-6 shadow-soft">
            <Sparkles size={15} /> Master Stonemasonry & Execution
          </div>
          <h1 className="text-4xl md:text-6xl font-heading tracking-tight font-bold mb-6 text-[var(--text-primary)]">
            Architectural Masterpieces in Stone
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore our landmark corporate developments, elite residential villas, and vibrant hospitality spaces crafted with premium granite, marble, and quartz.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[var(--border-light)] bg-[var(--bg-soft)] shadow-soft">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-accent)] mb-1">500+</div>
            <div className="text-[var(--text-secondary)] text-xs font-ui font-semibold uppercase tracking-wider">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-accent)] mb-1">35+</div>
            <div className="text-[var(--text-secondary)] text-xs font-ui font-semibold uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-accent)] mb-1">150+</div>
            <div className="text-[var(--text-secondary)] text-xs font-ui font-semibold uppercase tracking-wider">Commercial Spaces</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-accent)] mb-1">100%</div>
            <div className="text-[var(--text-secondary)] text-xs font-ui font-semibold uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Featured Landmark Project */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Featured Landmark</h2>
          <p className="text-[var(--text-secondary)] font-body">Our pinnacle infrastructural achievement in precision stone cladding.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[var(--bg-card)] border border-[var(--border-light)] rounded-editorial-lg overflow-hidden p-6 md:p-10 shadow-card">
          <div className="lg:col-span-7 overflow-hidden rounded-editorial-sm">
            <img 
              src={featuredmg} 
              alt="NSP Metro Station Delhi" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-editorial duration-700"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[var(--color-accent)] text-xs font-ui font-semibold uppercase tracking-widest mb-2">
                <MapPin size={15} /> Netaji Subhash Place, Delhi
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[var(--text-primary)] mb-4">
                NSP METRO STATION, DELHI
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-light">
                A high-traffic metro infrastructure milestone featuring premium granite flooring, precision staircase cladding, platform finishes, and heavy-duty architectural stone solutions engineered to withstand massive daily commuter footfall while maintaining pristine visual grandeur.
              </p>
              
              <div className="space-y-3 py-4 border-y border-[var(--border-light)] font-ui">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Materials Used:</span>
                  <span className="text-[var(--text-primary)] font-medium text-right">Sadar Ali, Rain Forest Brown & Exotic White</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Total Area:</span>
                  <span className="text-[var(--text-primary)] font-medium">18,500 sq.ft</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Completion Year:</span>
                  <span className="text-[var(--text-primary)] font-medium">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Our Work Portfolio</h2>
            <p className="text-[var(--text-secondary)]">Filter through our specialized corporate, residential, and hospitality spaces.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[var(--bg-soft)] p-1.5 rounded-editorial-sm border border-[var(--border-light)] shadow-soft">
            {[
              { id: "all", label: "All Projects" },
              { id: "corporate", label: "Corporate & Infrastructure" },
              { id: "residential", label: "Residential Villas" },
              { id: "hospitality", label: "Restaurants & Cafes" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-ui font-semibold uppercase tracking-wider transition-editorial ${
                  activeFilter === tab.id
                    ? "bg-[var(--color-primary)] text-white shadow-soft"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-[var(--bg-card)] border border-[var(--border-light)] rounded-editorial overflow-hidden hover:border-[var(--color-accent)] transition-editorial flex flex-col shadow-card hover:shadow-hover"
            >
              <div className="relative h-64 overflow-hidden bg-[var(--bg-soft)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-editorial duration-500"
                />
                <div className="absolute top-4 right-4 bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-light)] text-[10px] font-ui font-semibold text-[var(--color-primary)] uppercase tracking-wider shadow-soft">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs font-ui font-medium uppercase tracking-wider mb-2">
                    <MapPin size={13} className="text-[var(--color-accent)]" /> {project.location}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-editorial">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs font-ui bg-[var(--bg-soft)] p-2.5 rounded-editorial-sm border border-[var(--border-light)]">
                    <span className="text-[var(--text-muted)] font-medium">Stone:</span> {project.material}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-[var(--bg-soft)] border-t border-[var(--border-light)] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Trusted By Leaders & Homeowners</h2>
          <p className="text-[var(--text-secondary)] mb-16 font-body">Here is what our esteemed clients have to say about our stonemasonry execution.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--bg-card)] p-8 rounded-editorial border border-[var(--border-light)] text-left flex flex-col justify-between shadow-card">
              <p className="text-[var(--text-primary)] text-sm leading-relaxed font-light italic mb-6">
                "The exquisite stone finishes transformed our commercial destination into a landmark of luxury and long-term durability."
              </p>
              <div className="text-xs font-ui font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                — Corporate Developer
              </div>
            </div>
            
            <div className="bg-[var(--bg-card)] p-8 rounded-editorial border border-[var(--border-light)] text-left flex flex-col justify-between shadow-card">
              <p className="text-[var(--text-primary)] text-sm leading-relaxed font-light italic mb-6">
                "Outstanding craftsmanship and impeccable on-site installation across our luxury residential villa project in Panchkula."
              </p>
              <div className="text-xs font-ui font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                — Homeowner (Ajay's Estate)
              </div>
            </div>

            <div className="bg-[var(--bg-card)] p-8 rounded-editorial border border-[var(--border-light)] text-left flex flex-col justify-between shadow-card">
              <p className="text-[var(--text-primary)] text-sm leading-relaxed font-light italic mb-6">
                "The custom marble tabletops and bar counters give our restaurant the exact premium feel we envisioned for our patrons."
              </p>
              <div className="text-xs font-ui font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                — Restaurant Founder (Studio XO)
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
