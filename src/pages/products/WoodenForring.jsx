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

// Real, high-resolution Unsplash photography showcasing timber textures and hardwood interiors
const WOODEN_FLOORING_IMAGES = {
  // Hero: Modern luxury interior with wide-plank hardwood flooring
  hero: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed view of real timber grain and plank craftsmanship
  about: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity timber profiles & grain patterns for the product grid
  royalOak: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  smokedWalnut: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  naturalTeak: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  classicMaple: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
  charcoalAsh: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  exoticMerbau: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800",
  
  // Micro-surface finishing treatments
  brushedMatt: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
  smoothSatin: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  handScraped: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  
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
    { name: "Royal European Oak", origin: "Baltic Region, Northern Europe", image: WOODEN_FLOORING_IMAGES.royalOak },
    { name: "Smoked American Walnut", origin: "Appalachian Region, USA", image: WOODEN_FLOORING_IMAGES.smokedWalnut },
    { name: "Burma Natural Teak", origin: "Tanintharyi Region, Myanmar", image: WOODEN_FLOORING_IMAGES.naturalTeak },
    { name: "Classic Hard Maple", origin: "Eastern North America", image: WOODEN_FLOORING_IMAGES.classicMaple },
    { name: "Charcoal Stained Ash", origin: "Central European Woodlands", image: WOODEN_FLOORING_IMAGES.charcoalAsh },
    { name: "Exotic Interlocking Merbau", origin: "Indo-Pacific Rainforest Belt", image: WOODEN_FLOORING_IMAGES.exoticMerbau },
  ];

  const featuresData = [
    { 
      title: "Multi-Layer Cross-Ply Stability", 
      description: "Engineered core matrices minimize natural lumber expansion, warping, and cupping caused by seasonal humidity shifts." 
    },
    { 
      title: "UV-Cured Armor Shield", 
      description: "Multi-coat acrylic polyurethane finish guards timber fibers against foot traffic abrasion, micro-scratches, and fading." 
    },
    { 
      title: "Acoustic Dampening", 
      description: "Dense cellular wood anatomy combined with high-density underlayment reduces impact sound resonance between floors." 
    },
    { 
      title: "Underfloor Radiant Compatibility", 
      description: "Calibrated low thermal resistance coefficient allows efficient heat transfer from hydronic and electric floor heating grids." 
    },
    { 
      title: "Generous Wear-Layer", 
      description: "Features a 3mm to 6mm solid timber wear-layer, allowing multiple sand-and-refinish maintenance cycles over decades." 
    },
    { 
      title: "Natural Thermal Comfort", 
      description: "Provides superior natural insulation underfoot, maintaining warm, comfortable floor temperatures year-round." 
    },
  ];

  const finishesData = [
    { 
      name: "Wire-Brushed Matt Finish", 
      description: "Pulls away softer springwood fibers to leave a rich, wire-textured surface that enhances natural grain and conceals minor wear.", 
      image: WOODEN_FLOORING_IMAGES.brushedMatt 
    },
    { 
      name: "Smooth Satin Lacquer", 
      description: "An ultra-clean, uniform surface seal that reflects subtle ambient light while highlighting intricate wood grain clarity.", 
      image: WOODEN_FLOORING_IMAGES.smoothSatin 
    },
    { 
      name: "Hand-Scraped Antique Profile", 
      description: "Bespoke contour sculpting that mirrors traditional artisan craftsmanship, giving every plank vintage character and structural depth.", 
      image: WOODEN_FLOORING_IMAGES.handScraped 
    },
  ];

  const whyChooseData = [
    "100% FSC-Certified timber sourced from sustainably managed forests",
    "Precision milled click-lock and tongue-and-groove joint alignment",
    "E0 Grade / Zero-VOC non-toxic adhesives and eco-friendly stains",
    "Laser-calibrated board geometry tested for perfect lay-flat installation",
    "Specified by leading interior architects for residential and hospitality projects"
  ];

  const showcaseData = [
    {
      title: "The Alila Premium Wellness Pavilion",
      location: "Bengaluru, Karnataka",
      scope: "Continuous wide-plank Engineered Oak flooring layout extending seamlessly across 14,000 sq. ft.",
      image: WOODEN_FLOORING_IMAGES.project1
    },
    {
      title: "The Oberoi Signature Sky Villa",
      location: "Gurugram, Haryana",
      scope: "Custom herringbone pattern American Walnut layout integrated cleanly with minimalist stone trims.",
      image: WOODEN_FLOORING_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Wooden Flooring"
      subtitle="Organic Warmth. Precision Engineering."
      heroDescription="Explore premium multi-layer engineered and solid hardwood planks designed to stabilize demanding residential floors and high-profile commercial spaces."
      heroImage={WOODEN_FLOORING_IMAGES.hero}
      aboutTitle="Natural Warmth Meets Engineered Performance"
      aboutText={`Premium engineered wooden flooring combines the authentic warmth of genuine hardwood with advanced structural engineering.\n\nConstructed by bonding a solid timber top veneer over cross-laminated birch or eucalyptus plywood layers, it eliminates the swelling and warping issues common in traditional solid wood logs. The result is a dimensionally stable, long-lasting surface ideal for modern open-plan homes, radiant heating systems, and luxury commercial interiors.`}
      aboutImage={WOODEN_FLOORING_IMAGES.about}
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
