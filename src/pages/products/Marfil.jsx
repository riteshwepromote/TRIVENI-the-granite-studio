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

// Real, high-resolution Unsplash photography showcasing luxury Marfil tiles and architectural porcelain slabs
const MARFIL_IMAGES = {
  // Hero: Modern luxury interior featuring Marfil large-format tiles
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine porcelain tile texture and finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity tile variants and collection profiles
  marfilCalacatta: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  marfilBasalt: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  marfilTerrazzo: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  marfilTravertine: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  marfilConcrete: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  marfilOxide: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  sugarGrip: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const Marfil = () => {
  const applicationsData = [
    { name: "Seamless Living Room Flooring", icon: <Home size={20} /> },
    { name: "High-Traffic Commercial Lobbies", icon: <Building2 size={20} /> },
    { name: "Luxury Bathroom Wall Cladding", icon: <Grid size={20} /> },
    { name: "Kitchen Countertops & Islands", icon: <Maximize2 size={20} /> },
    { name: "Exterior Ventilated Facades", icon: <Layers size={20} /> },
    { name: "Bespoke Staircases & Vanity Tops", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Marfil Calacatta Gold", origin: "High-Definition Italian Marble Replication", image: MARFIL_IMAGES.marfilCalacatta },
    { name: "Marfil Basalt Dark", origin: "Deep Volcanic Stone Look", image: MARFIL_IMAGES.marfilBasalt },
    { name: "Marfil Modern Terrazzo", origin: "Contemporary Aggregate Composite", image: MARFIL_IMAGES.marfilTerrazzo },
    { name: "Marfil Vein Travertine", origin: "Linear Earth-Tone Architectural Profile", image: MARFIL_IMAGES.marfilTravertine },
    { name: "Marfil Urban Concrete", origin: "Industrial Minimalist Surface", image: MARFIL_IMAGES.marfilConcrete },
    { name: "Marfil Oxide Metal", origin: "Aged Industrial Metal Fusion", image: MARFIL_IMAGES.marfilOxide },
  ];

  const featuresData = [
    { 
      title: "Zero Porosity & Water Absorption", 
      description: "Kiln-fired at extreme temperatures to achieve <0.05% water absorption, providing absolute protection against stains, moisture, and frost." 
    },
    { 
      title: "Exceptional Scratch & Wear Hardness", 
      description: "Engineered with high surface hardness that resists scratching from heavy foot traffic, dragging furniture, and daily abrasive elements." 
    },
    { 
      title: "Absolute UV & Thermal Stability", 
      description: "Inorganic composition ensures zero color fading under intense sunlight and complete fireproof performance across thermal shocks." 
    },
    { 
      title: "Precision Rectified Edges", 
      description: "Laser-cut squared edges permit ultra-thin grout lines for a continuous, uniform monolithic visual layout." 
    },
    { 
      title: "Chemical & Stain Resistance", 
      description: "Completely immune to household cleaning agents, acidic food spills, and chemical detergents." 
    },
    { 
      title: "Large-Format Design Scale", 
      description: "Supplied in grand dimensions that minimize joint lines, creating open, seamless elegance across walls and floors." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A diamond-buffed reflective treatment that enhances luminosity and creates an aura of deep opulence.", 
      image: MARFIL_IMAGES.glossyMirror 
    },
    { 
      name: "Soft Velvet Matte", 
      description: "A smooth, low-glare sensory finish tailored for contemporary interiors requiring understated sophistication.", 
      image: MARFIL_IMAGES.velvetMatte 
    },
    { 
      name: "Anti-Slip Sugar Texture", 
      description: "A finely calibrated slip-resistant surface designed for bathrooms, wet rooms, and semi-outdoor areas.", 
      image: MARFIL_IMAGES.sugarGrip 
    },
  ];

  const whyChooseData = [
    "State-of-the-Art Vitrified Porcelain Manufacturing Standards",
    "Superior Flexural Strength Resistant to Heavy Structural Loads",
    "Zero Maintenance Profiles with No Periodic Sealing Required",
    "Eco-Friendly Production Using Sustainable Clays and Minerals",
    "Preferred by Architects for Prestigious Residential and Commercial Spaces"
  ];

  const showcaseData = [
    {
      title: "The Oberoi Luxury Suites",
      location: "New Delhi",
      scope: "Large-format polished Marfil porcelain flooring covering 50,000 sq. ft. of elite hospitality corridors and suites.",
      image: MARFIL_IMAGES.project1
    },
    {
      title: "The CyberScape Corporate Center",
      location: "Bengaluru, Karnataka",
      scope: "High-performance matte finish architectural wall cladding and heavy-duty floor systems.",
      image: MARFIL_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Marfil Tiles"
      subtitle="Architectural Porcelain & Vitrified Slabs. Crafted for Excellence."
      heroDescription="Experience Marfil tiles—advanced porcelain surfaces that merge the exquisite beauty of rare natural stones with the exceptional resilience of modern vitrified technology."
      heroImage={MARFIL_IMAGES.hero}
      aboutTitle="The Art of Marfil Vitrified Porcelain"
      aboutText={`Marfil defines the zenith of modern surface design, fusing select natural raw minerals and high-grade clays under massive hydraulic tonnage and extreme kiln heat.\n\nUnlike traditional natural stone, Marfil tiles demand no complicated sealing upkeep, offer robust defense against scratching and staining, and maintain absolute pattern consistency. From luxury hospitality environments to high-end residential interiors, Marfil delivers an enduring foundation for immaculate design.`}
      aboutImage={MARFIL_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default Marfil;
