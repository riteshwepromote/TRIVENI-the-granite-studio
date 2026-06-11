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

// Premium Unsplash placeholders showcasing high-end thermal timber architecture and tracking elements
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity profile selections highlighting rich caramelization tones
  nordicClad: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
  scandicDeck: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  amberLouvre: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  rusticChar: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  premiumClear: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  deepEspresso: "https://images.unsplash.com/photo-1635012684880-acc3c43ffd55?auto=format&fit=crop&q=80&w=600",
  
  // Textures & Finishes
  brushedRaw: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=600",
  oiledSatin: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
  weatheredGrey: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  
  // Elite architectural landmarks
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
    { name: "Nordic Clad V-Joint", origin: "Scandinavian Sustainable Forests", image: DUMMY_IMAGES.nordicClad },
    { name: "Scandic Deck Profile", origin: "Anti-Slip Calibrated Grooves", image: DUMMY_IMAGES.scandicDeck },
    { name: "Amber Architectural Louvres", origin: "Engineered Linear Shading Planks", image: DUMMY_IMAGES.amberLouvre },
    { name: "Rustic Carbon Charred", origin: "Traditional Carbonized Face Coating", image: DUMMY_IMAGES.rusticChar },
    { name: "Premium Clear Grade", origin: "Knot-Free Selected Heartwood", image: DUMMY_IMAGES.premiumClear },
    { name: "Deep Espresso Planks", origin: "Extended Kiln Thermofusion Cycle", image: DUMMY_IMAGES.deepEspresso },
  ];

  const featuresData = [
    { title: "Enhanced Decay Resistance", description: "High-temperature cooking permanently alters internal sugars, removing the biological nutrient setup required by fungi or wood pests." },
    { title: "Geometric Dimensional Stability", description: "Thermal modification slices core moisture equilibrium by up to 50%, minimizing shifting, cupping, or swelling vectors under rain." },
    { title: "100% Chemical Free", description: "Engineered entirely through heat and steam processes. Completely free from toxic chemical treatments or heavy metal additives." },
    { title: "Uniform Caramelized Tone", description: "The heat process bakes wood sugars uniformly through the core, producing a rich, permanent color profile that stands deep cuts." },
    { title: "Lower Thermal Conductivity", description: "Altered cellular geometry lowers heat retention values, making it highly comfortable under bare feet on outdoor decks." },
    { title: "Sustainable Timber Footprint", description: "Transforms fast-growing certified softwoods into a premium unit displaying durability scores competing with rare tropical hardwoods." },
  ];

  const finishesData = [
    { name: "Brushed Raw Texture", description: "Gently scales out softer grain surfaces to emphasize natural timber lines and deliver excellent slip protection metrics.", image: DUMMY_IMAGES.brushedRaw },
    { name: "UV-Oiled Protective Satin", description: "A high-performance natural oil shield configured to seal underlying sugars while retaining initial rich brown hues.", image: DUMMY_IMAGES.oiledSatin },
    { name: "Natural Weathered Patina", description: "Left untreated to interact beautifully with outdoor UV rays, turning slowly into a pristine architectural silver-grey tone.", image: DUMMY_IMAGES.weatheredGrey },
  ];

  const whyChooseData = [
    "PEFC & FSC Certified Sustainable Wood Sourcing",
    "Class 2 Durability Classification (EN 350-2 Standards)",
    "Calibrated Precision Millwork for Seamless Joint Lines",
    "Completely Organic Thermal Engineering Protocol",
    "Trusted by Luxury Eco-Resort Architects Globally"
  ];

  const showcaseData = [
    {
      title: "The Aman Resort Eco-Villas",
      location: "Rishikesh, UK",
      scope: "Full exterior vertical building envelope and connecting pool terrace decking covering 32,000 Sq. Ft.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Zero-Carbon Corporate Pavilion",
      location: "Navi Mumbai, MH",
      scope: "Dynamic open-joint multi-profile wall cladding integrated with architectural louvre sun-shading panels.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Thermopine"
      subtitle="Thermally Modified Timber. Ultimate Structural Endurance."
      heroDescription="Discover high-performance Scandinavian pine modified using thermal kiln cycles to achieve superior weathering defense, absolute flatness, and zero toxicity paths."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Thermopine Timber?"
      aboutText={`Thermopine represents an advanced thermal engineering milestone where natural softwoods are modified inside specialized kilns at temperatures exceeding 210°C.\n\nUsing only heat and water steam, this natural process reorganizes cellular wall chemical makeups, cutting down moisture absorption potential and destroying organic wood sugars. The resulting timber is exceptionally stable, light, and resistant to environmental rot—yielding an elite material path for clean modern facades, outdoor decks, and open landscaping concepts.`}
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

export default Thermopine;