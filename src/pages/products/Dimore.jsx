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

// Real, high-resolution Unsplash photography showcasing luxury vitrified tiles and architectural porcelain slabs
const DIMORE_IMAGES = {
  // Hero: Luxurious large-format architectural tile interior setting
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine porcelain tile grain and rectified edge finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity tile variants and collection profiles
  carraraVena: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  neroMarquina: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  terrazzoGranular: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  travertineVein: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  satinConcrete: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  metalOxideSlab: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  polishedMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  matteVelvet: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  sugarGrip: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const Dimore = () => {
  const applicationsData = [
    { name: "Seamless Living Room Flooring", icon: <Home size={20} /> },
    { name: "High-Traffic Commercial Lobbies", icon: <Building2 size={20} /> },
    { name: "Luxury Bathroom Wall Cladding", icon: <Grid size={20} /> },
    { name: "Kitchen Countertops & Islands", icon: <Maximize2 size={20} /> },
    { name: "Exterior Ventilated Facades", icon: <Layers size={20} /> },
    { name: "Bespoke Staircases & Vanity Tops", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Carrara Vena Slab", origin: "High-Definition Italian Marble Replication", image: DIMORE_IMAGES.carraraVena },
    { name: "Nero Marquina Luxe", origin: "Deep Obsidian Body with White Veining", image: DIMORE_IMAGES.neroMarquina },
    { name: "Terrazzo Granular Art", origin: "Multi-Mineral Aggregate Composite", image: DIMORE_IMAGES.terrazzoGranular },
    { name: "Travertine Vein Cut", origin: "Linear Earth-Tone Architectural Profile", image: DIMORE_IMAGES.travertineVein },
    { name: "Satin Concrete Minimal", origin: "Industrial Urban Surface Aesthetic", image: DIMORE_IMAGES.satinConcrete },
    { name: "Metal Oxide Industrial", origin: "Oxidized Copper & Steel Fusion Look", image: DIMORE_IMAGES.metalOxideSlab },
  ];

  const featuresData = [
    { 
      title: "Zero Porosity & Water Absorption", 
      description: "Vitrified under ultra-high hydraulic pressure and extreme kiln temperatures, achieving <0.05% water absorption to completely block stains and moisture." 
    },
    { 
      title: "Exceptional Scratch & Wear Hardness", 
      description: "Boasts a Mohs hardness rating of 8, making it completely immune to surface scratching from heavy foot traffic, furniture, or abrasive grit." 
    },
    { 
      title: "Absolute UV & Thermal Resistance", 
      description: "Inorganic composition ensures zero fading under direct sunlight and complete fireproof safety against high thermal shock environments." 
    },
    { 
      title: "Precision Rectified Edges", 
      description: "Laser-cut squared edges allow for ultra-narrow grout lines (as thin as 1.5mm), creating a continuous, monolithic stone appearance." 
    },
    { 
      title: "Chemical & Acid Proof", 
      description: "Impervious to household cleaning chemicals, acidic spills like wine or citrus, and harsh industrial detergents." 
    },
    { 
      title: "Large-Format Architectural Scale", 
      description: "Available in expansive formats that minimize grout grid lines, maximizing visual space continuity across walls and floors." 
    },
  ];

  const finishesData = [
    { 
      name: "Mirror Glossy Polish", 
      description: "An ultra-reflective diamond-buffed surface treatment that maximizes ambient light reflection and delivers peerless luxury depth.", 
      image: DIMORE_IMAGES.polishedMirror 
    },
    { 
      name: "Velvet Matte Touch", 
      description: "A soft, light-absorbing sensory finish designed for understated modern interiors with high tactile elegance.", 
      image: DIMORE_IMAGES.matteVelvet 
    },
    { 
      name: "Anti-Slip Sugar Grip", 
      description: "Engineered micro-textured finish providing high friction coefficients for wet rooms, bathrooms, and outdoor terraces without sacrificing visual polish.", 
      image: DIMORE_IMAGES.sugarGrip 
    },
  ];

  const whyChooseData = [
    "Premium Italian-Standard Vitrified Porcelain Technology",
    "Extreme Flexural Strength Resistant to Bending and Heavy Loads",
    "Zero Maintenance Requirements with No Sealing or Polishing Needed",
    "Eco-Sustainable Manufacturing Using Pure Natural Clays and Minerals",
    "Trusted by Leading Interior Architects for High-End Residential and Commercial Projects"
  ];

  const showcaseData = [
    {
      title: "The Grand Palazzo Hotel Atrium",
      location: "Udaipur, Rajasthan",
      scope: "Large-format polished Calacatta vitrified tile flooring spanning 45,000 sq. ft. of luxury hospitality lobby space.",
      image: DIMORE_IMAGES.project1
    },
    {
      title: "The Omaxe Corporate Towers",
      location: "Gurugram, Haryana",
      scope: "High-performance matte finish architectural wall cladding and heavy-traffic corridor floor systems.",
      image: DIMORE_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Dimore Tiles"
      subtitle="Architectural Porcelain & Vitrified Slabs. Timeless Elegance."
      heroDescription="Discover Dimore tiles—engineered porcelain masterpieces that combine the breathtaking aesthetic of rare natural stone with the unbeatable durability of modern vitrified technology."
      heroImage={DIMORE_IMAGES.hero}
      aboutTitle="The Art of Advanced Vitrified Porcelain"
      aboutText={`Dimore represents the pinnacle of surface engineering, bringing together pure raw clays, feldspar, and mineral oxides fused under intense hydraulic pressure and 1200°C kiln firing.\n\nUnlike natural stone or granite, Dimore porcelain tiles require zero periodic sealing, offer absolute resistance to staining and scratching, and deliver consistent, flawless pattern continuity. From grand commercial lobbies to luxury residential living spaces, Dimore provides the ultimate canvas for uncompromising contemporary design.`}
      aboutImage={DIMORE_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default Dimore;
