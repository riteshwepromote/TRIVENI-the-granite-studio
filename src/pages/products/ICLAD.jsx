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

// Premium Unsplash placeholders showcasing avant-garde building envelopes and architectural facades
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity performance variant profiles for the product grid
  thermalBarrier: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
  acousticShield: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  solarKinetic: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  aerospaceAlloy: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600",
  ceramicComposite: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
  weatherMatrix: "https://images.unsplash.com/photo-1635012684880-acc3c43ffd55?auto=format&fit=crop&q=80&w=600",
  
  // High-tech architectural finishes
  anodizedMatte: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  brushedTitanium: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=600",
  hydrophobicSatin: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  
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
    { name: "I-Clad Thermal Barrier Pro", origin: "High-Density Polyisocyanurate Core", image: DUMMY_IMAGES.thermalBarrier },
    { name: "Acoustic Shield Element", origin: "Decibel-Dampening Mineral Core Matrix", image: DUMMY_IMAGES.acousticShield },
    { name: "Solar Kinetic Variant", origin: "Photovoltaic Adaptive Layering", image: DUMMY_IMAGES.solarKinetic },
    { name: "Aerospace Alloy Composite", origin: "Ultra-Light Hardened Aluminum Skin", image: DUMMY_IMAGES.aerospaceAlloy },
    { name: "Ceramic Sintered Matrix", origin: "Indestructible Vitrified Outer Face", image: DUMMY_IMAGES.ceramicComposite },
    { name: "Weather Matrix Extreme", origin: "Hyper-Corrosive Seafront Environment Rating", image: DUMMY_IMAGES.weatherMatrix },
  ];

  const featuresData = [
    { title: "Intelligent Thermal Decoupling", description: "Engineered continuous structural thermal breaks completely negate bridge vectors, drastically lowering building HVAC loads." },
    { title: "Advanced Pressure Equalization", description: "Integrated dry-joint rear ventilated mechanics balance internal-external pressure states to repel wind-driven rainwater paths." },
    { title: "Class A1 Fire Rated", description: "Composed strictly of non-combustible organic components and mineral fiber bases to guarantee complete structural safety compliance." },
    { title: "Ultra-Light Structural Weight", description: "Incredible strength-to-weight optimization scales down foundational dead loads, accelerating sub-structure assembly times." },
    { title: "Seismic Flex Matrix", description: "Patented mechanical interlocking tracks absorb localized seismic expansion and high wind-shear oscillations safely." },
    { title: "Self-Cleaning Surface Hydrodynamics", description: "Finished with a unique photocatalytic protective layer that leverages UV rays to break down organic dirt before rainwater rinses it clean." },
  ];

  const finishesData = [
    { name: "Anodized Matte Coat", description: "An electrochemical layer integrated into the metallic surface substrate to deliver non-fading structural depth.", image: DUMMY_IMAGES.anodizedMatte },
    { name: "Brushed Titanium Texturing", description: "A high-end linear directional brush pattern providing an elite specular reflection profile favorite for modern designs.", image: DUMMY_IMAGES.brushedTitanium },
    { name: "Hydrophobic Ultra-Satin", description: "A zero-glare, exceptionally smooth exterior treatment calculated to minimize liquid anchoring and environmental scaling.", image: DUMMY_IMAGES.hydrophobicSatin },
  ];

  const whyChooseData = [
    "Fully Compliant with International LEED & Green Building Ratings",
    "Pre-Engineered Precision Interlocking Track Systems",
    "Life Cycle Tested for 50+ Years of Maintenance-Free Operation",
    "Unmatched Structural Thermal Resistance (High R-Value Profile)",
    "Specified globally by Lead Architects and Sustainable Engineering Teams"
  ];

  const showcaseData = [
    {
      title: "The Nova FinTech Headquarters",
      location: "Bandra Kurla Complex, MH",
      scope: "Continuous engineered pressure-equalized smart envelope covering 65,000 Sq. Ft. of pristine curtain configuration.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Horizon Premium Waterfront Condos",
      location: "Marine Drive",
      scope: "High-exposure sea-spray resistant composite overcladding combined with matching solar-shading louvre systems.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="I-Clad Systems"
      subtitle="Intelligent Insulation. Intelligent Envelopes."
      heroDescription="Explore next-generation intelligent insulated facade and cladding configurations engineered to secure energy-efficient thermal boundaries and timeless modern architecture."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is the I-Clad Intelligent Facade System?"
      aboutText={`The I-Clad System stands as a pinnacle development in advanced curtain wall and building envelope engineering, seamlessly blending high-efficiency insulation arrays with architectural finish panels.\n\nBy assembling a premium composite weather barrier directly over a structural tracking configuration, I-Clad cuts down installation times while creating a continuous air, water, and thermal barrier. This high-performance optimization completely locks down moisture infiltration and air leakage, creating the ultimate envelope choice for net-zero buildings, modern commercial developments, and high-end sustainable architecture.`}
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

export default IClad;