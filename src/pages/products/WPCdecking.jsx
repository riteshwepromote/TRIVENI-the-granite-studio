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

// Real, high-resolution Unsplash photography showcasing WPC decking and composite architectural elements
const WPC_DECKING_IMAGES = {
  // Hero: Modern outdoor composite decking terrace
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed view of composite board structure and surface texture
  about: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity WPC profiles and wood-plastic composite variations
  coExtrudedShield: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  deepEmbossedGrain: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  hollowCorePlank: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  solidCoreHeavyDuty: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  antiSlipGrooved: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  architecturalSlat: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Textures & Surface Finishes
  brushedRaw: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  oiledSatin: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  weatheredGrey: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const WpcDecking = () => {
  const applicationsData = [
    { name: "Poolside Wet Decking", icon: <Grid size={20} /> },
    { name: "Terrace & Rooftop Gardens", icon: <Home size={20} /> },
    { name: "Commercial Boardwalks", icon: <Building2 size={20} /> },
    { name: "Outdoor Wall Cladding", icon: <Layers size={20} /> },
    { name: "Garden Pathways & Gazebos", icon: <Maximize2 size={20} /> },
    { name: "Balcony Flooring Systems", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Co-Extruded Armor Shield", origin: "Advanced Polymer Encapsulation Layer", image: WPC_DECKING_IMAGES.coExtrudedShield },
    { name: "Deep Embossed Wood Grain", origin: "Natural Timber Texture Simulation", image: WPC_DECKING_IMAGES.deepEmbossedGrain },
    { name: "Lightweight Hollow-Core Plank", origin: "Optimized Span Residential Profile", image: WPC_DECKING_IMAGES.hollowCorePlank },
    { name: "Solid-Core Heavy Duty", origin: "High-Traffic Commercial Grade", image: WPC_DECKING_IMAGES.solidCoreHeavyDuty },
    { name: "Anti-Slip Grooved Deck", origin: "High-Friction Wet Area Profile", image: WPC_DECKING_IMAGES.antiSlipGrooved },
    { name: "Architectural Slat Profile", origin: "Vertical & Horizontal Screening", image: WPC_DECKING_IMAGES.architecturalSlat },
  ];

  const featuresData = [
    { 
      title: "Splinter-Free Safety", 
      description: "Engineered polymer-wood bond ensures a completely smooth surface underfoot, eliminating splinter risks for children and pets." 
    },
    { 
      title: "Superior Moisture Defense", 
      description: "Impervious to water absorption, rot, fungal decay, and termite damage, making it ideal for coastal and high-humidity environments." 
    },
    { 
      title: "Zero Periodic Painting Required", 
      description: "Requires no annual staining, oiling, or sealing, retaining its rich color and structural integrity with minimal soap-and-water cleaning." 
    },
    { 
      title: "UV Fade Resistance", 
      description: "Advanced UV-inhibiting pigment technology shields boards from harsh sunlight degradation and severe color fading over decades." 
    },
    { 
      title: "Hidden Clip Installation", 
      description: "Precision-milled side grooves accommodate hidden stainless steel fasteners for a clean, screw-free surface layout." 
    },
    { 
      title: "Eco-Sustainable Composition", 
      description: "Manufactured using a recycled blend of reclaimed hardwood fibers and high-density polyethylene (HDPE) plastics." 
    },
  ];

  const finishesData = [
    { 
      name: "Brushed Timber Texture", 
      description: "Provides a tactile, matte finish that replicates raw lumber while delivering enhanced slip resistance in wet zones.", 
      image: WPC_DECKING_IMAGES.brushedRaw 
    },
    { 
      name: "3D Deep Wood Grain", 
      description: "Embossed multi-tone surface patterns capturing the organic depth and varied character of aged natural hardwood.", 
      image: WPC_DECKING_IMAGES.oiledSatin 
    },
    { 
      name: "Stain-Shield Satin Cap", 
      description: "An outer polymer shield layer that prevents wine, oil, and food spills from penetrating the core matrix.", 
      image: WPC_DECKING_IMAGES.weatheredGrey 
    },
  ];

  const whyChooseData = [
    "100% Recycled Eco-Friendly Wood-Plastic Composite Matrix",
    "Extremely Low Maintenance with Zero Staining or Painting Needed",
    "High Slip-Resistance Ratings for Poolside and Outdoor Wet Areas",
    "Concealed Fastener Systems for Flawless Aesthetic Continuity",
    "Backed by Extensive Residential and Commercial Performance Warranties"
  ];

  const showcaseData = [
    {
      title: "The Taj Exotica Poolside Deck",
      location: "Goa, India",
      scope: "High-durability co-extruded WPC pool deck installation spanning 18,000 sq. ft. subjected to heavy foot traffic and sea spray.",
      image: WPC_DECKING_IMAGES.project1
    },
    {
      title: "The Horizon Sky Lounge",
      location: "Mumbai, Maharashtra",
      scope: "Rooftop terrace composite decking and perimeter privacy screening featuring deep-embossed walnut grain planks.",
      image: WPC_DECKING_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="WPC Decking"
      subtitle="Wood Plastic Composite. Unmatched Outdoor Durability."
      heroDescription="Explore premium WPC decking solutions designed to deliver the timeless look of natural timber with absolute resistance to weather, water, and wear."
      heroImage={WPC_DECKING_IMAGES.hero}
      aboutTitle="The Evolution of Outdoor Composite Decking"
      aboutText={`WPC (Wood Plastic Composite) decking represents the pinnacle of modern outdoor engineering, combining recycled hardwood fibers with high-grade thermoplastics.\n\nThis advanced formulation eliminates the traditional vulnerabilities of natural wood—such as rotting, splintering, warping, and insect damage—while requiring virtually zero maintenance. Protected by an outer polymer shield, our WPC decking solutions offer long-lasting color stability and slip resistance for luxury poolsides, expansive terraces, and high-traffic commercial boardwalks.`}
      aboutImage={WPC_DECKING_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default WpcDecking;
