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

// Real, high-resolution Unsplash photography showcasing translucent onyx textures, stone finishes, and luxury installations
const ONYX_IMAGES = {
  // Hero: Luxury modern interior featuring translucent stone & backlit accents
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed view of exotic stone veining & crystal formations
  about: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
  
  // Authentic Onyx Varieties & Translucent Slabs
  honeyOnyx: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  whiteOnyx: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
  pinkOnyx: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800",
  greenOnyx: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  blueOnyx: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  blackOnyx: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes
  mirrorPolished: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800",
  satinHoned: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  translucentSlab: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
};

const Onyx = () => {
  const applicationsData = [
    { name: "Backlit Feature Walls", icon: <Maximize2 size={20} /> },
    { name: "Statement Kitchen Islands", icon: <Layers size={20} /> },
    { name: "Luxury Bath Vanities", icon: <Grid size={20} /> },
    { name: "Bespoke Bar Counters", icon: <Building2 size={20} /> },
    { name: "Intricate Waterjet Inlay Work", icon: <Home size={20} /> },
    { name: "Luminous Fireplace Surrounds", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Honey Onyx", origin: "Sistan and Baluchestan, Iran", image: ONYX_IMAGES.honeyOnyx },
    { name: "White Onyx", origin: "Carrara / Brescia, Italy", image: ONYX_IMAGES.whiteOnyx },
    { name: "Sultry Pink Onyx", origin: "Puebla, Mexico", image: ONYX_IMAGES.pinkOnyx },
    { name: "Jade Green Onyx", origin: "Chagai, Pakistan", image: ONYX_IMAGES.greenOnyx },
    { name: "Ocean Blue Onyx", origin: "Salta, Argentina", image: ONYX_IMAGES.blueOnyx },
    { name: "Matrix Black Onyx", origin: "Antofagasta, Chile", image: ONYX_IMAGES.blackOnyx },
  ];

  const featuresData = [
    { 
      title: "Cryptocrystalline Translucency", 
      description: "Fine quartz and microcrystalline calcite structure allows backlighting LED vectors to illuminate deep internal crystal layers." 
    },
    { 
      title: "Concentric Mineral Veining", 
      description: "Parallel sedimentary banding forms dramatic fluid patterns, turning every slab into a natural piece of structural art." 
    },
    { 
      title: "High-Gloss Mirror Polish", 
      description: "Achieves an intense specular reflection that accentuates multi-tonal depth and crystal clarity under ambient light." 
    },
    { 
      title: "Rare Geological Exclusivity", 
      description: "Formed in low-volume thermal cave environments, ensuring that every quarried lot remains completely unique." 
    },
    { 
      title: "Dynamic Light Sensitivity", 
      description: "Transforms room ambience when activated by warm (2700K) or cool (4000K) backlighting panel configurations." 
    },
    { 
      title: "Precision Edge Workability", 
      description: "Dense chalcedony structure enables clean mitered edges, continuous bookmatching, and delicate inlay craft." 
    },
  ];

  const finishesData = [
    { 
      name: "Mirror Polished Finish", 
      description: "A high-brilliance glassy surface that sharpens color definition and maximizes light transmission clarity.", 
      image: ONYX_IMAGES.mirrorPolished 
    },
    { 
      name: "Satin Honed Finish", 
      description: "A smooth, non-reflective matte surface that diffuses light softly for an elegant tactile experience.", 
      image: ONYX_IMAGES.satinHoned 
    },
    { 
      name: "Translucent Calibrated Slab", 
      description: "Back-milled to precise 16mm or 20mm uniform thickness, specifically calibrated for integrated rear LED light diffusion.", 
      image: ONYX_IMAGES.translucentSlab 
    },
  ];

  const whyChooseData = [
    "Hand-selected exotic blocks sourced from world-renowned thermal deposits",
    "Light-tested slab calibration for uniform translucency and zero hot spots",
    "Fiberglass mesh and resin backing for structural integrity during installation",
    "Full-scope bookmatching layout and CAD preview services",
    "Preferred choice for ultra-luxury hospitality, penthouses, and executive lounges"
  ];

  const showcaseData = [
    {
      title: "The Penthouse Atrium Lounge",
      location: "Mumbai, Maharashtra",
      scope: "Bookmatched, 24-foot floor-to-ceiling backlit Honey Onyx focal wall with smart dimming integrations.",
      image: ONYX_IMAGES.project1
    },
    {
      title: "The Grand Imperial Boardroom",
      location: "South Mumbai, India",
      scope: "Monolithic translucent reception counter featuring edge-lit RGBW LED panel housing.",
      image: ONYX_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Onyx"
      subtitle="Ethereal Translucence. Ultimate Opulence."
      heroDescription="Immerse your layouts in the unmatched luminous luxury of premium Onyx slabs, curated specifically to leverage rear illumination vectors and artistic design statements."
      heroImage={ONYX_IMAGES.hero}
      aboutTitle="Light Metamorphosis: Rare Cryptocrystalline Art Stone"
      aboutText={`Onyx is an exotic, parallel-banded chalcedony stone formed inside thermal caves through gradual drip-stone calcite deposition over thousands of years.\n\nUnlike traditional granite or marble, onyx offers natural translucency. When paired with backlight arrays, it transitions from a rich stone surface into a warm, glowing architectural artwork. It is the gold standard for signature reception desks, luxury bar counters, backlit feature walls, and bespoke executive interiors.`}
      aboutImage={ONYX_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default Onyx;
