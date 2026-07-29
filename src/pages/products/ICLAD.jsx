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

// Real, high-resolution Unsplash photography showcasing advanced architectural facades and metal cladding systems
const ICLAD_IMAGES = {
  // Hero: Modern architectural building facade featuring sleek metallic cladding
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed view of precision-milled facade joinery and panel profiles
  about: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity performance variant profiles for the product grid
  thermalBarrier: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
  acousticShield: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  solarKinetic: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  aerospaceAlloy: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800",
  ceramicComposite: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  weatherMatrix: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // High-tech architectural finishes
  anodizedMatte: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  brushedTitanium: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  hydrophobicSatin: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  
  // Elite infrastructure installations
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
};

const IClad = () => {
  const applicationsData = [
    { name: "High-Rise Building Envelopes", icon: <Building2 size={20} /> },
    { name: "Ventilated Curtain Walls", icon: <Maximize2 size={20} /> },
    { name: "Net-Zero Residential Facades", icon: <Home size={20} /> },
    { name: "Monolithic Interior Feature Walls", icon: <Layers size={20} /> },
    { name: "Retrofit Commercial Overcladding", icon: <Grid size={20} /> },
    { name: "Spandrel Area Integration", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "I-Clad Thermal Barrier Pro", origin: "High-Density Polyisocyanurate Core", image: ICLAD_IMAGES.thermalBarrier },
    { name: "Acoustic Shield Element", origin: "Decibel-Dampening Mineral Core Matrix", image: ICLAD_IMAGES.acousticShield },
    { name: "Solar Kinetic Variant", origin: "Photovoltaic Adaptive Layering", image: ICLAD_IMAGES.solarKinetic },
    { name: "Aerospace Alloy Composite", origin: "Ultra-Light Hardened Aluminum Skin", image: ICLAD_IMAGES.aerospaceAlloy },
    { name: "Ceramic Sintered Matrix", origin: "Indestructible Vitrified Outer Face", image: ICLAD_IMAGES.ceramicComposite },
    { name: "Weather Matrix Extreme", origin: "Hyper-Corrosive Seafront Environment Rating", image: ICLAD_IMAGES.weatherMatrix },
  ];

  const featuresData = [
    { 
      title: "Intelligent Thermal Decoupling", 
      description: "Engineered continuous structural thermal breaks completely negate thermal bridging vectors, drastically lowering building HVAC energy loads." 
    },
    { 
      title: "Advanced Pressure Equalization", 
      description: "Integrated dry-joint rear ventilated mechanics balance internal-external air pressure states to completely repel wind-driven rainwater infiltration." 
    },
    { 
      title: "Class A1 Fire Performance", 
      description: "Manufactured using strictly non-combustible mineral fiber cores and inorganic composite skins to guarantee full international safety compliance." 
    },
    { 
      title: "Ultra-Light Structural Weight", 
      description: "Incredible strength-to-weight ratio minimizes foundational dead loads, accelerating sub-structure tracking assembly and installation times." 
    },
    { 
      title: "Seismic Flex Matrix", 
      description: "Patented mechanical interlocking track designs safely absorb localized structural thermal expansion and high wind-shear oscillations." 
    },
    { 
      title: "Self-Cleaning Surface Hydrodynamics", 
      description: "Coated with an advanced photocatalytic protective layer that leverages UV sunlight to break down organic surface dirt before rainwater rinses it clean." 
    },
  ];

  const finishesData = [
    { 
      name: "Anodized Matte Coat", 
      description: "An electrochemical layer integrated directly into the metallic substrate to deliver non-fading structural depth and tactile elegance.", 
      image: ICLAD_IMAGES.anodizedMatte 
    },
    { 
      name: "Brushed Titanium Texturing", 
      description: "A high-end linear directional brush pattern providing an elite specular reflection profile preferred for luxury modern commercial architecture.", 
      image: ICLAD_IMAGES.brushedTitanium 
    },
    { 
      name: "Hydrophobic Ultra-Satin", 
      description: "A zero-glare, exceptionally smooth exterior treatment calculated to minimize liquid anchoring and atmospheric dust accumulation.", 
      image: ICLAD_IMAGES.hydrophobicSatin 
    },
  ];

  const whyChooseData = [
    "Fully Compliant with International LEED and Green Building Standard Ratings",
    "Pre-Engineered Precision Interlocking Track Systems for Rapid Assembly",
    "Rigorously Life-Cycle Tested for 50+ Years of Maintenance-Free Operation",
    "Unmatched Structural Thermal Resistance with High R-Value Profiles",
    "Specified Globally by Leading Architects and Sustainable Engineering Teams"
  ];

  const showcaseData = [
    {
      title: "The Nova FinTech Headquarters",
      location: "Bandra Kurla Complex, Mumbai",
      scope: "Continuous engineered pressure-equalized smart envelope covering 65,000 sq. ft. of pristine curtain wall configuration.",
      image: ICLAD_IMAGES.project1
    },
    {
      title: "The Horizon Premium Waterfront Condos",
      location: "Marine Drive, Mumbai",
      scope: "High-exposure sea-spray resistant composite overcladding combined with matching custom solar-shading louvre systems.",
      image: ICLAD_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="I-Clad Systems"
      subtitle="Intelligent Insulation. Intelligent Envelopes."
      heroDescription="Explore next-generation intelligent insulated facade and cladding configurations engineered to secure energy-efficient thermal boundaries and timeless modern architecture."
      heroImage={ICLAD_IMAGES.hero}
      aboutTitle="What is the I-Clad Intelligent Facade System?"
      aboutText={`The I-Clad System stands as a pinnacle development in advanced curtain wall and building envelope engineering, seamlessly blending high-efficiency insulation arrays with precision architectural finish panels.\n\nBy assembling a premium composite weather barrier directly over a structural tracking configuration, I-Clad cuts down installation timelines while establishing a continuous air, water, and thermal barrier. This high-performance optimization completely locks down moisture infiltration and air leakage, creating the ultimate envelope choice for net-zero buildings, high-end commercial developments, and sustainable architecture.`}
      aboutImage={ICLAD_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default IClad;
