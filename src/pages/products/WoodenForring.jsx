import React from "react";
import ProductsPage from "../ProductsPage";
import { 
  Layers, 
  Grid, 
  Home, 
  Maximize2, 
  Building2, 
  Layers3 
} from "lucide-react";

// Premium Unsplash placeholders showcasing high-end architectural hardwood installations
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity timber profiles and grain patterns for the product grid
  royalOak: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
  smokedWalnut: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  naturalTeak: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=600",
  classicMaple: "https://images.unsplash.com/photo-1635012684880-acc3c43ffd55?auto=format&fit=crop&q=80&w=600",
  charcoalAsh: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  exoticMerbau: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600",
  
  // Micro-surface finishing treatments
  brushedMatt: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
  smoothSatin: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  handScraped: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  
  // Premium application setups
  project1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
};

const WoodenFlooring = () => {
  const applicationsData = [
    { name: "Luxury Residential Layouts", icon: <Home size={20} /> },
    { name: "Executive Corporate Suites", icon: <Building2 size={20} /> },
    { name: "High-End Retail Boutiques", icon: <Grid size={20} /> },
    { name: "Monolithic Wall Cladding", icon: <Layers size={20} /> },
    { name: "Acoustic Ceiling Panels", icon: <Maximize2 size={20} /> },
    { name: "Bespoke Staircases", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Royal European Oak", origin: "Sustainably Managed Baltic Woodlands", image: DUMMY_IMAGES.royalOak },
    { name: "Smoked American Walnut", origin: "Deep Core Thermal Pigmentation", image: DUMMY_IMAGES.smokedWalnut },
    { name: "Burma Natural Teak", origin: "High-Oleoresin Moisture Barrier Timber", image: DUMMY_IMAGES.naturalTeak },
    { name: "Classic Hard Maple", origin: "Dense Fine-Grained Uniform Profile", image: DUMMY_IMAGES.classicMaple },
    { name: "Charcoal Stained Ash", origin: "Pronounced Ring-Porous Graphic Grain", image: DUMMY_IMAGES.charcoalAsh },
    { name: "Exotic Interlocking Merbau", origin: "Heavy-Duty Subtropical Hardwood", image: DUMMY_IMAGES.exoticMerbau },
  ];

  const featuresData = [
    { title: "Multi-Layer Stability", description: "Engineered cross-ply core matrices minimize natural lumber expansion and contraction vectors across climate shifts." },
    { title: "High Impact Defense", description: "Multi-coat UV-cured acrylic polyurethane shields wood fibers from heavy tracking friction and micro-scratches." },
    { title: "Acoustic Cushioning", description: "Dense cellular wood anatomy combined with premium underlayment dampens footstep resonance vectors efficiently." },
    { title: "Thermal Integration", description: "Calibrated low thermal resistance coefficients make these boards highly compatible with fluid underfloor radiant heating grids." },
    { title: "Restoration Capability", description: "Features a generous real timber wear-layer, allowing multiple sand-and-refinish maintenance routines over generations." },
    { title: "Unadulterated Comfort", description: "Brings organic insulation parameters underfoot, maintaining surface warmth profiles far superior to stone compositions." },
  ];

  const finishesData = [
    { name: "Wire-Brushed Matt Finish", description: "Pulls away softer springwood fiber layers to leave a deeply tactile, wire-textured surface that conceals wear.", image: DUMMY_IMAGES.brushedMatt },
    { name: "Smooth Satin Lacquer", description: "An ultra-clean, uniform seal reflecting soft light angles while framing high wood grain readability.", image: DUMMY_IMAGES.smoothSatin },
    { name: "Hand-Scraped Antique Profile", description: "Bespoke contour sculpting that mirrors historical craftsmanship, yielding raw vintage character and layout depth.", image: DUMMY_IMAGES.handScraped },
  ];

  const whyChooseData = [
    "100% FSC Certified Eco-Friendly Timber Stocks",
    "Multi-Layer Precision Click-Lock Installation Alignment",
    "VOC-Free Non-Toxic Structural Stains and Adhesives",
    "Calibrated Planks Tested for Absolute Geometric Flatness",
    "Specified by Premier Interior Architects Globally"
  ];

  const showcaseData = [
    {
      title: "The Alila Premium Wellness Pavilion",
      location: "Bengaluru, KA",
      scope: "Continuous wide-plank Engineered Oak surface layout extending cleanly over 14,000 Sq. Ft.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Oberoi Signature Sky Villa",
      location: "Gurugram, HR",
      scope: "Custom herringbone pattern American Walnut layout integrated seamlessly with minimal stone trims.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Wooden Flooring"
      subtitle="Organic Warmth. Precision Engineering."
      heroDescription="Explore premium multi-layer engineered and solid hardwood planks designed to stabilize demanding residential floors and high-profile commercial spaces."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Premium Engineered Wooden Flooring?"
      aboutText={`Premium engineered wooden flooring represents a flawless marriage between real structural hardwood aesthetics and advanced structural composition.\n\nConstructed by binding a genuine solid timber top layer over cross-laminated marine-grade plywood webs, it effectively bypasses the shifting, warping, and cupping liabilities of historical solid logs. This establishes a highly stable surface configuration perfect for pristine architectural expanses, radiant floor loops, and premium residential spaces seeking natural elegance.`}
      aboutImage={DUMMY_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default WoodenFlooring;