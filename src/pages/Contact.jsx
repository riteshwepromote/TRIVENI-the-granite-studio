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
  Compass,
  CheckCircle2,
  Building2
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="bg-brand text-primary font-body antialiased min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-20 bg-card border-b border-brand overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Key Message */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-soft border border-brand rounded-full mb-6 shadow-soft">
                <Sparkles size={13} className="text-accent" />
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-primary">
                  Triveni Studio Concierge
                </span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary font-medium tracking-tight mb-6 leading-[1.12]">
                Shape your space with <br />
                <span className="italic text-primary font-normal">raw geological artistry.</span>
              </h1>
              
              <p className="font-body text-secondary text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8">
                Connect directly with our stone curators to coordinate architectural layouts, custom quarry selections, and precise project specifications.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#inquiry" 
                  className="bg-primary hover:bg-[#13205D] text-inverse font-ui text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-editorial-sm transition-editorial shadow-soft inline-flex items-center gap-2 !text-white"
                >
                  Initiate Project Brief <ArrowUpRight size={14} />
                </a>
                <a 
                  href="tel:+919056964858" 
                  className="bg-soft hover:bg-brand border border-brand text-primary font-ui text-xs uppercase tracking-widest font-bold px-6 py-4 rounded-editorial-sm transition-editorial inline-flex items-center gap-2"
                >
                  <Phone size={14} className="text-accent" /> Direct Line
                </a>
              </div>
            </div>

            {/* Right Column: Curated Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-soft border border-brand rounded-editorial p-6 sm:p-8 shadow-card relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-brand pb-4">
                    <span className="font-ui text-xs uppercase tracking-widest font-bold text-accent flex items-center gap-2">
                      <Building2 size={15} /> Showroom Hub
                    </span>
                    <span className="font-ui text-[11px] font-semibold bg-card px-2.5 py-1 rounded-full text-secondary border border-brand">
                      Mohali, Sector 82
                    </span>
                  </div>

                  <div className="aspect-[16/9] rounded-editorial-sm overflow-hidden border border-brand bg-card shadow-soft">
                    <img 
                      src="https://res.cloudinary.com/x5rakscg/image/upload/v1785231905/legacy_ero_yll1wl.jpg" 
                      alt="Triveni Studio Interior" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 font-ui text-xs text-secondary">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent shrink-0" />
                      <span>Italian Statuario & Brazilian Quartzites on display</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent shrink-0" />
                      <span>In-house architectural & design consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INQUIRY FORM */}
      <section id="inquiry" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 scroll-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="font-ui text-xs font-bold tracking-widest text-accent uppercase block mb-2">
                Project Alignment
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-primary font-medium leading-tight">
                Let us organize your delivery specifications.
              </h2>
            </div>

            <div className="space-y-4 pt-4 border-t border-brand">
              <div className="p-5 bg-card border border-brand rounded-editorial-sm shadow-soft flex items-start gap-4">
                <div className="p-3 bg-soft rounded-editorial-sm text-accent shrink-0 border border-brand">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-primary">Studio Location</h3>
                  <p className="font-body text-secondary text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    1014-B, Sector 82, JLPL Industrial Area,<br />Mohali, Punjab 140306
                  </p>
                </div>
              </div>

              <div className="p-5 bg-card border border-brand rounded-editorial-sm shadow-soft flex items-start gap-4">
                <div className="p-3 bg-soft rounded-editorial-sm text-accent shrink-0 border border-brand">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-primary">Operating Hours</h3>
                  <p className="font-body text-secondary text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    Mon - Sat : 10:00 AM – 7:30 PM <br />
                    Sunday : 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-card border border-brand rounded-editorial-sm shadow-soft">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Phone size={15} />
                    <span className="font-ui text-[10px] uppercase font-bold tracking-wider">Phone</span>
                  </div>
                  <a href="tel:+919056964858" className="font-body text-xs sm:text-sm font-medium text-primary hover:text-accent transition-editorial block">
                    +91 90569 64858
                  </a>
                </div>

                <div className="p-5 bg-card border border-brand rounded-editorial-sm shadow-soft">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Mail size={15} />
                    <span className="font-ui text-[10px] uppercase font-bold tracking-wider">Email</span>
                  </div>
                  <a href="mailto:info@trivenigranite.com" className="font-body text-xs sm:text-sm font-medium text-primary hover:text-accent transition-editorial block truncate">
                    info@trivenigranite.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-card border border-brand rounded-editorial p-6 sm:p-10 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Profile Selection */}
              <div className="space-y-2">
                <label className="font-ui text-xs font-bold uppercase tracking-wider text-muted block">
                  Identify Profile Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {clientTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setClientType(type)}
                      className={`px-3 py-2.5 font-ui text-xs font-bold tracking-wide rounded-editorial-sm transition-editorial cursor-pointer ${
                        clientType === type
                          ? "bg-primary text-inverse shadow-soft"
                          : "bg-soft text-secondary border border-brand hover:text-primary hover:border-brand-medium"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-ui text-xs font-semibold text-primary">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Devendra Singh"
                    className="w-full bg-soft border border-brand rounded-editorial-sm px-4 py-3 font-body text-sm text-primary placeholder:text-muted focus:outline-none focus:border-brand-medium transition-editorial"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-ui text-xs font-semibold text-primary">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full bg-soft border border-brand rounded-editorial-sm px-4 py-3 font-body text-sm text-primary placeholder:text-muted focus:outline-none focus:border-brand-medium transition-editorial"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-ui text-xs font-semibold text-primary">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-soft border border-brand rounded-editorial-sm px-4 py-3 font-body text-sm text-primary placeholder:text-muted focus:outline-none focus:border-brand-medium transition-editorial"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-ui text-xs font-semibold text-primary">City / Location</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Mohali"
                    className="w-full bg-soft border border-brand rounded-editorial-sm px-4 py-3 font-body text-sm text-primary placeholder:text-muted focus:outline-none focus:border-brand-medium transition-editorial"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-ui text-xs font-semibold text-primary">Project Format</label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-soft border border-brand rounded-editorial-sm px-4 py-3 font-body text-sm text-primary focus:outline-none focus:border-brand-medium appearance-none cursor-pointer transition-editorial"
                  >
                    <option value="Residential">Residential Space</option>
                    <option value="Commercial">Commercial / Retail Building</option>
                    <option value="Custom Countertops">Kitchen Countertops & Vanities</option>
                    <option value="Facade">Exterior Cladding</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-ui text-xs font-semibold text-primary">Design Specifications & Requirements</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe dimensional layouts, surface finishes, or volume estimates..."
                  className="w-full bg-soft border border-brand rounded-editorial-sm px-4 py-3 font-body text-sm text-primary placeholder:text-muted focus:outline-none focus:border-brand-medium transition-editorial resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#13205D] text-inverse font-ui text-xs uppercase tracking-widest font-bold py-4 rounded-editorial-sm transition-editorial shadow-soft cursor-pointer"
              >
                Transmit Specifications
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="bg-soft border-y border-brand py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <span className="font-ui text-xs font-bold tracking-widest uppercase text-accent block mb-2">
                Live Studio Location
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-primary font-medium">
                Experience raw stone lots in person.
              </h2>
            </div>
            <a 
              href="https://search.brave.com/search?q=triveni+the+granite+studio+mohali+maps" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-brand hover:border-brand-medium px-5 py-3 rounded-editorial-sm font-ui text-xs font-bold uppercase tracking-wider text-primary transition-editorial shadow-soft shrink-0"
            >
              <Compass size={16} className="text-accent" /> Get Route Directions <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="w-full h-[400px] rounded-editorial overflow-hidden border border-brand shadow-card bg-card">
            <iframe 
              title="Triveni Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.3307131669185!2d76.73176017529802!3d30.65281458949114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febe4f1ef0c7d%3A0xe059211a590ea2fb!2sTriveni%20-%20The%20Granite%20Studio!5e0!3m2!1sen!2sin!4v1781078991438!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center mb-12">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Assistance
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-primary font-medium">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-brand border-y border-brand">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="py-5 cursor-pointer group"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between text-primary">
                  <h3 className="font-heading text-xl font-medium group-hover:text-accent transition-editorial">
                    {faq.q}
                  </h3>
                  <div className="text-secondary group-hover:text-accent transition-editorial ml-4 shrink-0 p-1.5 rounded-full bg-soft border border-brand">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                {isOpen && (
                  <div className="mt-3 font-body text-secondary text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Contact;
