import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Plus, 
  Minus,
  ChevronDown
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
    <div className="bg-[#fcfbf9] text-[#1a1a1a] font-sans antialiased selection:bg-zinc-900 selection:text-white">
      
      {/* 1. HERO HEADER */}
      <header className="pt-36 pb-20 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase block mb-4">
              Triveni Studio
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-zinc-950 mb-8 leading-[1.05]">
              Let’s bring your project to life in <span className="italic font-normal">natural stone</span>.
            </h1>
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
              Whether you are mapping out a kitchen renovation, planning a large residential layout, or detailing commercial facades, visit our showroom to look through our live slab inventory.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="#inquiry" 
                className="bg-zinc-950 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Send an Inquiry
              </a>
              <a 
                href="tel:+919056964858" 
                className="inline-flex items-center gap-2 group text-xs uppercase tracking-widest font-bold text-zinc-950"
              >
                Call the Showroom <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SHOWROOM DIRECTORY & TIMINGS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20 border-b border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-light tracking-tight text-zinc-950">Contact Information & Timing</h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="border-t border-zinc-200 pt-5">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <MapPin size={14} />
                <span className="text-xs uppercase tracking-wider font-semibold">Address</span>
              </div>
              <h3 className="text-sm font-semibold text-zinc-950 mb-1">Triveni – The Granite Studio</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                1014-B, Sector 82, JLPL Industrial Area,<br />Mohali, Punjab 140306
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-5">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Clock size={14} />
                <span className="text-xs uppercase tracking-wider font-semibold">Hours</span>
              </div>
              <h3 className="text-sm font-semibold text-zinc-950 mb-1">Open Seven Days</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                Monday - Saturday : 10:00 AM – 7:30 PM <br />
                Sunday : 10:00 AM – 6:00 PM
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-5">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Phone size={14} />
                <span className="text-xs uppercase tracking-wider font-semibold">Phone</span>
              </div>
              <a href="tel:+919056964858" className="text-lg font-normal text-zinc-950 hover:text-zinc-700 transition-colors block">
                +91 90569 64858
              </a>
            </div>

            <div className="border-t border-zinc-200 pt-5">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Mail size={14} />
                <span className="text-xs uppercase tracking-wider font-semibold">Email</span>
              </div>
              <a href="mailto:info@trivenigranite.com" className="text-lg font-normal text-zinc-950 hover:text-zinc-700 transition-colors block">
                info@trivenigranite.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INQUIRY FORM */}
      <section id="inquiry" className="max-w-7xl mx-auto px-6 sm:px-12 py-20 scroll-mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-3xl font-light tracking-tight text-zinc-950 mb-4">
              Share your project details.
            </h2>
            <p className="text-zinc-500 font-light text-sm leading-relaxed">
              Tell us what you are working on, and a stone specialist will review your specs, check availability across our inventory, and connect with you directly.
            </p>
          </div>

          <div className="lg:col-span-8 bg-white border border-zinc-200/60 rounded-2xl p-6 sm:p-10 shadow-2xs">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Profile Selection buttons */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                  I am a:
                </label>
                <div className="flex flex-wrap gap-2">
                  {clientTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setClientType(type)}
                      className={`px-4 py-2 rounded-md text-xs font-medium tracking-wide border transition-all duration-200 cursor-pointer ${
                        clientType === type
                          ? "bg-zinc-950 text-white border-zinc-950"
                          : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/70"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Forms Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                
                <div>
                  <label className="text-xs font-medium text-zinc-500 block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g., Devendra Singh"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-light"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-500 block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-light"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-500 block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-light"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-500 block mb-1.5">City / Location</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g., Mohali"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-light"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-zinc-500 block mb-1.5">Project Type</label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-900 focus:bg-white appearance-none font-light cursor-pointer transition-all"
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

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-zinc-500 block mb-1.5">How can we help you?</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your design specifications, dimension layouts, or material requirements..."
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all resize-none font-light"
                  ></textarea>
                </div>

              </div>

              <button
                type="submit"
                className="w-full bg-zinc-950 text-white text-xs uppercase tracking-widest font-semibold py-4 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Submit Project Details
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 4. MAP SHOWROOM SECTION */}
      <section className="bg-white border-y border-zinc-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs tracking-wider uppercase text-zinc-400 font-semibold block mb-2">Showroom Location</span>
              <h2 className="text-3xl font-light tracking-tight text-zinc-950">Come see our full slabs.</h2>
            </div>
            <a 
              href="https://search.brave.com/search?q=triveni+the+granite+studio+mohali+maps&source=web&summary=1&conversation=09304b0872d4183749e9b0d8645e3330aacc&view=full&map_src=i&loc_id=loc4OOAGBDQ6U47EBA5TUVMP6LSTICJ6VMCHAAAAAAA%3D&bbox=76.240%2C30.434%2C77.229%2C30.871" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 hover:border-zinc-400 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-all"
            >
              Get Directions <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-zinc-100 relative bg-zinc-50">
            <iframe 
              title="Triveni Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.3307131669185!2d76.73176017529802!3d30.65281458949114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febe4f1ef0c7d%3A0xe059211a590ea2fb!2sTriveni%20-%20The%20Granite%20Studio!5e0!3m2!1sen!2sin!4v1781078991438!5m2!1sen!2sin" width="600" height="450" 
              className="w-full h-full border-0  opacity-90 contrast-[1.01]"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light tracking-tight text-zinc-950 mb-2">Frequently Asked Questions</h2>
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-light">Common questions about selecting, cutting, and deliveries</p>
        </div>

        <div className="divide-y divide-zinc-200/70">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="py-5 cursor-pointer group"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between text-zinc-950">
                  <h4 className="text-sm sm:text-base font-normal tracking-tight group-hover:text-zinc-600 transition-colors">
                    {faq.q}
                  </h4>
                  <div className="text-zinc-400 shrink-0 ml-4">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-200 ${
                  isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}>
                  <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Contact;