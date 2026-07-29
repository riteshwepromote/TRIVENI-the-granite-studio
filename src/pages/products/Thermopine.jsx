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

// Real, high-resolution Unsplash photography showcasing thermally modified timber & exterior cladding
const THERMOPINE_IMAGES = {
  // Hero: Contemporary exterior building facade featuring warm wood cladding
  hero: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed view of real thermal timber grain & joinery
  about: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity timber profiles highlighting rich caramelized tones
  nordicClad: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
  scandicDeck: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  amberLouvre: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  rusticChar: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  premiumClear: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  deepEspresso: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Textures & Surface Finishes
  brushedRaw: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  oiledSatin: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  weatheredGrey: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const Thermopine = () => {
  const applicationsData = [
    { name: "Exterior Wall Cladding", icon: <Home size={20} /> },
    { name: "Premium Pool Decking", icon: <Grid size={20} /> },
    { name: "Architectural Louvres", icon: <Maximize2 size={20} /> },
    { name: "Ceiling & Soffit Panels", icon: <Layers size={20} /> },
    { name: "High-Exposure Facades", icon: <Building2 size={20} /> },
    { name: "Bespoke Outdoor Fencing", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Nordic Clad V-Joint", origin: "Scandinavian PEFC-Certified Forests", image: THERMOPINE_IMAGES.nordicClad },
    { name: "Scandic Deck Profile", origin: "Anti-Slip Calibrated Grooves", image: THERMOPINE_IMAGES.scandicDeck },
    { name: "Amber Architectural Louvres", origin: "Engineered Linear Shading Planks", image: THERMOPINE_IMAGES.amberLouvre },
    { name: "Rustic Carbon Charred", origin: "Traditional Shou Sugi Ban Finish", image: THERMOPINE_IMAGES.rusticChar },
    { name: "Premium Clear Grade", origin: "Knot-Free Selected Heartwood", image: THERMOPINE_IMAGES.premiumClear },
    { name: "Deep Espresso Planks", origin: "Extended Kiln Thermo-D Process", image: THERMOPINE_IMAGES.deepEspresso },
  ];

  const featuresData = [
    { 
      title: "Enhanced Biological Resistance", 
      description: "High-temperature kiln processing (>210°C) breaks down hemicellulose, eliminating the nutrients required by fungi and wood-boring insects." 
    },
    { 
      title: "Dimensional Stability", 
      description: "Thermal modification reduces equilibrium moisture content by up to 50%, virtually eliminating warping, cupping, and swelling under severe weather." 
    },
    { 
      title: "100% Chemical-Free Modification", 
      description: "Engineered using only heat and steam. Completely non-toxic, eco-friendly, and free from heavy metals or synthetic chemical preservatives." 
    },
    { 
      title: "Rich Core Caramelization", 
      description: "Wood sugars are baked evenly throughout the entire board thickness, maintaining a uniform warm bronze color even after cutting or sanding." 
    },
    { 
      title: "Lower Thermal Conductivity", 
      description: "Altered cellular structure decreases heat absorption, making floor boards comfortable under bare feet on sunny outdoor pool decks." 
    },
    { 
      title: "Sustainable Hardwood Alternative", 
      description: "Transforms fast-growing Nordic softwoods into Class 2 durable timber that rivals rare exotic hardwoods without deforestation." 
    },
  ];

  const finishesData = [
    { 
      name: "Brushed Raw Texture", 
      description: "Removes soft springwood fibers to emphasize natural timber grain, delivering enhanced tactile grip and outdoor slip resistance.", 
      image: THERMOPINE_IMAGES.brushedRaw 
    },
    { 
      name: "UV-Oiled Protective Satin", 
      description: "A breathable, eco-friendly oil treatment that protects wood sugars against UV radiation while preserving the warm caramelized hue.", 
      image: THERMOPINE_IMAGES.oiledSatin 
    },
    { 
      name: "Natural Weathered Patina", 
      description: "Left un-oiled to interact naturally with sunlight and ambient moisture, developing a graceful, architectural silver-grey patina over time.", 
      image: THERMOPINE_IMAGES.weatheredGrey 
    },
  ];

  const whyChooseData = [
    "100% PEFC & FSC Certified Scandinavian Sustainable Timber",
    "Class 2 Durability Classification according to EN 350-2 standards",
    "Precision millwork profiles for seamless hidden-clip system installations",
    "Completely chemical-free, eco-friendly thermal modification protocol",
    "Trusted by eco-resort architects for high-humidity and seaside environments"
  ];

  const showcaseData = [
    {
      title: "The Aman Resort Eco-Villas",
      location: "Rishikesh, Uttarakhand",
      scope: "Exterior vertical building envelope and continuous poolside deck covering over 32,000 sq. ft.",
      image: THERMOPINE_IMAGES.project1
    },
    {
      title: "The Zero-Carbon Corporate Pavilion",
      location: "Navi Mumbai, Maharashtra",
      scope: "Dynamic open-joint multi-profile wall cladding integrated with automated louvre sun-shading panels.",
      image: THERMOPINE_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Thermopine"
      subtitle="Thermally Modified Timber. Ultimate Structural Endurance."
      heroDescription="Discover high-performance Scandinavian pine modified using thermal kiln cycles to achieve superior weathering defense, absolute flatness, and zero toxicity paths."
      heroImage={THERMOPINE_IMAGES.hero}
      aboutTitle="The Science of Thermal Timber Modification"
      aboutText={`Thermopine represents a major leap in sustainable building materials, where natural Scandinavian softwoods are heat-treated inside specialized kilns at temperatures exceeding 210°C.\n\nBy utilizing only heat and water steam, this natural process permanently alters the wood's cell structure. It reduces equilibrium moisture absorption, destroys food sources for rot-causing fungi, and enhances thermal insulation. The result is lightweight, dimensionally stable timber built to endure harsh exterior facades, seaside decks, and architectural louvre screens.`}
      aboutImage={THERMOPINE_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default Thermopine;
