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

// Real, high-resolution Unsplash photography showcasing luxury Marble Fountains and custom water features
const MARBLE_FOUNTAIN_IMAGES = {
  // Hero: Modern luxury estate or grand entrance featuring a custom marble fountain
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine natural stone texture and custom fountain carving finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity fountain variants and collection profiles
  tierFountain: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  wallFountain: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  modernSphereFountain: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  courtyardBasinFountain: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  sculpturalWaterWall: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  classicalStatuaryFountain: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  honedLeather: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const MarbleFountain = () => {
  const applicationsData = [
    { name: "Grand Estate Entrance & Driveways", icon: <Home size={20} /> },
    { name: "Luxury Hotel Courtyards & Atriums", icon: <Building2 size={20} /> },
    { name: "Resort Garden & Landscape Patios", icon: <Grid size={20} /> },
    { name: "Architectural Indoor Water Features", icon: <Maximize2 size={20} /> },
    { name: "Private Villa Terraces & Poolside Areas", icon: <Layers size={20} /> },
    { name: "Bespoke Wall-Mounted Cascades", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Multi-Tier Classical Water Fountain", origin: "Hand-Carved Multi-Level Architectural Masterpiece", image: MARBLE_FOUNTAIN_IMAGES.tierFountain },
    { name: "Architectural Wall-Mounted Fountain", origin: "Relief-Carved Stone Cascade Panel", image: MARBLE_FOUNTAIN_IMAGES.wallFountain },
    { name: "Monolithic Rotating Sphere Fountain", origin: "Precision-Turned Floating Stone Globe", image: MARBLE_FOUNTAIN_IMAGES.modernSphereFountain },
    { name: "Grand Courtyard Basin Fountain", origin: "Wide-Span Pool with Central Spout", image: MARBLE_FOUNTAIN_IMAGES.courtyardBasinFountain },
    { name: "Sculptural Stone Water Wall", origin: "Textured Flowing Natural Surface Panel", image: MARBLE_FOUNTAIN_IMAGES.sculpturalWaterWall },
    { name: "Statuary Figurine Fountain", origin: "Hand-Chiseled Artistic Water Feature", image: MARBLE_FOUNTAIN_IMAGES.classicalStatuaryFountain },
  ];

  const featuresData = [
    { 
      title: "Master Artisan Hand-Carving", 
      description: "Each fountain is meticulously hand-chiseled and sculpted by master stonemasons, bringing intricate classical or modern details to life." 
    },
    { 
      title: "Solid Weather-Resistant Stone Sourcing", 
      description: "Carved from dense blocks of premium marble, granite, and travertine designed to withstand outdoor weathering and frost." 
    },
    { 
      title: "Integrated Water Routing & Hydraulics", 
      description: "Engineered with precision internal channeling and plumbing inlets for seamless pump connection and balanced water flow." 
    },
    { 
      title: "Anti-Algae & Moisture Sealing", 
      description: "Treated with specialized waterproof sealants that protect the stone porosity against standing water mineral deposits and algae buildup." 
    },
    { 
      title: "Custom Sized Scale & Tiers", 
      description: "Tailor-made dimensions and bowl capacities customized precisely to fit residential gardens or grand public courtyards." 
    },
    { 
      title: "Monumental Structural Stability", 
      description: "Solid natural mineral weight ensures complete structural self-anchoring and resistance against high wind and external forces." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A brilliant, reflective mirror finish that enhances water reflection and amplifies the rich natural veining of the stone.", 
      image: MARBLE_FOUNTAIN_IMAGES.glossyMirror 
    },
    { 
      name: "Honed Matte Velvet", 
      description: "A smooth, non-reflective touchable surface delivering a contemporary, understated architectural stone look.", 
      image: MARBLE_FOUNTAIN_IMAGES.velvetMatte 
    },
    { 
      name: "Textured Chiseled Finish", 
      description: "A rustic, hand-tooled tactile surface treatment that accentuates classical statuary detail and organic stone grains.", 
      image: MARBLE_FOUNTAIN_IMAGES.honedLeather 
    },
  ];

  const whyChooseData = [
    "Exclusive Custom Manufacturing Tailored for Landscape Architects and Luxury Estates",
    "Uncompromising Attention to Detail in Hand-Carving and Hydraulic Engineering",
    "Specialized Heavy-Duty Logistics and Modular Installation Support for Large Stone Monuments",
    "Harmonious Fusion of Traditional Stonemasonry with Modern Water Pump Systems",
    "Breathtaking Focal Points That Bring Tranquil Acoustic Ambiance and Regal Elegance to Any Space"
  ];

  const showcaseData = [
    {
      title: "The Leela Palace Royal Gardens",
      location: "Udaipur, Rajasthan",
      scope: "Custom three-tier hand-carved white marble fountain engineered for the central grand courtyard.",
      image: MARBLE_FOUNTAIN_IMAGES.project1
    },
    {
      title: "The Riviera Hillside Estates",
      location: "Goa",
      scope: "Bespoke monolithic wall-mounted stone cascades and modern sphere pool fountains designed for elite villas.",
      image: MARBLE_FOUNTAIN_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Marble Fountains"
      subtitle="Bespoke Custom Stone Water Fountains & Architectural Water Features."
      heroDescription="Explore our custom marble fountain collection—where rare natural stones are masterfully sculpted into monumental water features that bring soothing acoustic ambiance and regal grandeur to any landscape or interior."
      heroImage={MARBLE_FOUNTAIN_IMAGES.hero}
      aboutTitle="The Craftsmanship of Custom Marble Fountains"
      aboutText={`Transforming monolithic blocks of natural stone into flowing water features requires an exceptional fusion of master stonemasonry and precision hydraulic engineering. Our custom marble fountains range from classical multi-tiered centerpieces to sleek, modern minimalist water walls.\n\nEach fountain is hand-carved, internally plumbed for smooth water recirculation, and sealed to withstand outdoor elements, serving as a breathtaking architectural focal point for elite residential estates, hotels, and public courtyards.`}
      aboutImage={MARBLE_FOUNTAIN_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default MarbleFountain;
