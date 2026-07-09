import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Plus, 
  Minus,
  ChevronDown,
  Sparkles,
  Compass
} from "lucide-react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [clientType, setClientType] = useState("Homeowner");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    projectType: "Residential",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submission Data:", { clientType, ...formData });
    alert("Thank you. Our team will review your project details and get back to you shortly.");
  };

  const clientTypes = ["Homeowner", "Architect", "Interior Designer", "Builder"];

  const faqs = [
    { 
      q: "Do you provide on-site installation?", 
      a: "We collaborate directly with your contractors and architects on-site to verify structural foundations, slab transitions, and precision joint alignments before and during installation." 
    },
    { 
      q: "Can we request material samples?", 
      a: "Yes. Designers and clients can request premium cut sample tiles to verify surface textures, coloration variations, and stone patterns under your site’s specific lighting." 
    },
    { 
      q: "How do you handle large-scale commercial orders?", 
      a: "We work directly with commercial quarries to secure matching slab bundles for large exterior facades, high-traffic flooring installations, and uniform architectural surfaces." 
    },
    { 
      q: "Should I book an appointment before visiting?", 
      a: "While walk-ins are welcome, scheduling an appointment ensures a dedicated stone consultant is available to guide you through our current slab lots and private inventory." 
    }
  ];

  return (
    <div className="bg-[#fcfbf9] text-[#1a1a1a] font-sans antialiased selection:bg-zinc-900 selection:text-white min-h-screen">
      
      {/* 1. EDITORIAL ASYMMETRIC HERO */}
      <section className="relative pt-40 pb-24 bg-white border-b border-zinc-100 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-zinc-50/50 hidden lg:block border-l border-zinc-100" />
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200/60 rounded-full mb-6">
                <Sparkles size={12} className="text-zinc-400" />
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Triveni Premium Studio
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-extralight tracking-tight text-zinc-950 mb-8 leading-[1.05]">
                Shape your space with <br />
                <span className="font-serif italic font-normal text-zinc-800">raw geological artistry</span>.
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
                Whether architectural mapping, residential layouts, or detailed kitchen configurations, connect with our material curators to coordinate your custom project requirements.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a 
                  href="#inquiry" 
                  className="bg-zinc-950 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md"
                >
                  Initiate Project Brief
                </a>
                <a 
                  href="tel:+919056964858" 
                  className="inline-flex items-center gap-2 group text-xs uppercase tracking-widest font-bold text-zinc-950 border-b border-zinc-950 pb-1 hover:text-zinc-600 hover:border-zinc-400 transition-colors"
                >
                  Showroom Desk <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="border-l-2 border-zinc-950 pl-6 py-4 space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">// CURRENT LOTS</p>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  Now showcasing newly curated Italian Statuario, Brazilian Quartzites, and high-crystallization pristine Granite slabs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: CONCIERGE INFO & DISCOVERY FORM */}
      <section id="inquiry" className="max-w-7xl mx-auto px-6 sm:px-12 py-24 scroll-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Matrix & Directory */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-28">
            <div>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-3">Project Alignment</span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950">
                Let us organize your delivery specifications.
              </h2>
            </div>

            {/* Asymmetrical Detail Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-10 border-t border-zinc-200/80 pt-10">
              <div className="group">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <MapPin size={14} className="group-hover:text-zinc-900 transition-colors" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Studio Hub</span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1">Triveni – The Granite Studio</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  1014-B, Sector 82, JLPL Industrial Area,<br />Mohali, Punjab 140306
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <Clock size={14} className="group-hover:text-zinc-900 transition-colors" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Showroom Availability</span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1">Open Calendar</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Mon - Sat : 10:00 AM – 7:30 PM <br />
                  Sunday : 10:00 AM – 6:00 PM
                </p>
              </div>

              <div className="group pt-2 border-t border-zinc-100 lg:border-none">
                <div className="flex items-center gap-2 text-zinc-400 mb-1">
                  <Phone size={13} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Direct Line</span>
                </div>
                <a href="tel:+919056964858" className="text-xl font-light text-zinc-950 hover:text-zinc-600 transition-colors">
                  +91 90569 64858
                </a>
              </div>

              <div className="group pt-2 border-t border-zinc-100 lg:border-none">
                <div className="flex items-center gap-2 text-zinc-400 mb-1">
                  <Mail size={13} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Digital Concierge</span>
                </div>
                <a href="mailto:info@trivenigranite.com" className="text-xl font-light text-zinc-950 hover:text-zinc-600 transition-colors">
                  info@trivenigranite.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Document Form Panel */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/70 shadow-xs p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Profile Segmenter */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                  Identify Profile Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {clientTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setClientType(type)}
                      className={`px-3 py-3 text-center text-xs font-medium tracking-wide transition-all cursor-pointer ${
                        clientType === type
                          ? "bg-zinc-950 text-white"
                          : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100/80 border border-transparent hover:border-zinc-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Configuration Stack */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Devendra Singh"
                      className="w-full bg-white border-b border-zinc-200 focus:border-zinc-950 py-2 text-sm text-zinc-950 focus:outline-none transition-colors font-light placeholder:text-zinc-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full bg-white border-b border-zinc-200 focus:border-zinc-950 py-2 text-sm text-zinc-950 focus:outline-none transition-colors font-light placeholder:text-zinc-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 00000 00000"
                      className="w-full bg-white border-b border-zinc-200 focus:border-zinc-950 py-2 text-sm text-zinc-950 focus:outline-none transition-colors font-light placeholder:text-zinc-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600">City / Location</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Mohali"
                      className="w-full bg-white border-b border-zinc-200 focus:border-zinc-950 py-2 text-sm text-zinc-950 focus:outline-none transition-colors font-light placeholder:text-zinc-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-semibold text-zinc-600">Project Format</label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 text-sm text-zinc-950 focus:outline-none focus:border-zinc-950 appearance-none font-light cursor-pointer transition-colors"
                    >
                      <option value="Residential">Residential Space</option>
                      <option value="Commercial">Commercial / Retail Building</option>
                      <option value="Custom Countertops">Kitchen Countertops & Vanities</option>
                      <option value="Facade">Exterior Cladding</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-semibold text-zinc-600">Design Specifications & Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe dimensional layouts, surface finishes, or volume estimates..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 text-sm text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors resize-none font-light placeholder:text-zinc-400/70"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-950 text-white text-xs uppercase tracking-widest font-semibold py-4 hover:bg-zinc-800 transition-colors cursor-pointer shadow-xs"
              >
                Transmit Specifications
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 3. INTEGRATED MAP EXPERIENCE */}
      <section className="bg-[#f5f4f0] border-t border-b border-zinc-200/60 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-bold block mb-3">Live Slab Manifest</span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950">
                Experience full-scale raw stone lots in person.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <a 
                href="https://search.brave.com/search?q=triveni+the+granite+studio+mohali+maps" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-zinc-200 hover:border-zinc-950 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-all shadow-2xs"
              >
                <Compass size={14} /> Launch Navigation Route <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="w-full h-[500px] shadow-sm overflow-hidden border border-zinc-200 grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700">
            <iframe 
              title="Triveni Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.3307131669185!2d76.73176017529802!3d30.65281458949114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febe4f1ef0c7d%3A0xe059211a590ea2fb!2sTriveni%20-%20The%20Granite%20Studio!5e0!3m2!1sen!2sin!4v1781078991438!5m2!1sen!2sin" 
              className="w-full h-full border-0 opacity-90"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM ACCORDION ARCHITECTURE (FAQS) */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <div className="space-y-3 lg:sticky lg:top-28">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">Assistance Directory</span>
              <h2 className="text-2xl font-light tracking-tight text-zinc-950">Frequently Answered Protocols</h2>
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-zinc-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="py-6 cursor-pointer group first:pt-0"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between text-zinc-950">
                    <h4 className="text-base font-light tracking-tight group-hover:text-zinc-600 transition-colors">
                      {faq.q}
                    </h4>
                    <div className="text-zinc-400 shrink-0 ml-4 p-1 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors">
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;