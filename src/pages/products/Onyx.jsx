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

// Premium high-fidelity Unsplash placeholders highlighting translucent, striking onyx textures
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
  
  // Vibrant, highly-figured parallel mineral banding for the collection matrix
  honeyOnyx: "https://images.unsplash.com/photo-1635012684880-acc3c43ffd55?auto=format&fit=crop&q=80&w=600",
  whiteOnyx: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
  pinkOnyx: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=600",
  greenOnyx: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  blueOnyx: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  blackOnyx: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=600",
  
  // Stone finishes
  mirrorPolished: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  satinHoned: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  translucentSlab: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  
  // Ultra-luxury signature installations
  project1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
};

const Onyx = () => {
  const applicationsData = [
    { name: "Backlit Feature Walls", icon: <Maximize2 size={20} /> },
    { name: "Statement Islands", icon: <Layers size={20} /> },
    { name: "Luxury Vanities", icon: <Grid size={20} /> },
    { name: "Bespoke Bar Counters", icon: <Building2 size={20} /> },
    { name: "Intricate Inlay Work", icon: <Home size={20} /> },
    { name: "Luminous Fireplaces", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Honey Onyx", origin: "Amber Cryptocrystalline Matrix", image: DUMMY_IMAGES.honeyOnyx },
    { name: "White Onyx", origin: "Pure Alabaster Translucent Cut", image: DUMMY_IMAGES.whiteOnyx },
    { name: "Sultry Pink Onyx", origin: "Exotic Roseate Veining", image: DUMMY_IMAGES.pinkOnyx },
    { name: "Jade Green Onyx", origin: "Deep Emerald Stratified Banding", image: DUMMY_IMAGES.greenOnyx },
    { name: "Ocean Blue Onyx", origin: "Rare Cerulean Wave Profile", image: DUMMY_IMAGES.blueOnyx },
    { name: "Matrix Black Onyx", origin: "Intense Charcoal Linear Fractures", image: DUMMY_IMAGES.blackOnyx },
  ];

  const featuresData = [
    { title: "Translucent Composition", description: "Cryptocrystalline quartz structures allow light transmission vectors to illuminate the internal depth of the slab beautifully." },
    { title: "Striking Veining Maps", description: "Bold, parallel concentric layers form swirling mineral arrangements that serve as natural custom masterworks." },
    { title: "High Gloss Specular", description: "Achieves an incredibly rich mirror finish reflection that elevates the vibrancy of complex multi-color crystal beds." },
    { title: "Bespoke Exclusivity", description: "Highly rare geological yields make every selected block a completely unique statement of luxury design." },
    { title: "Responsive to Light", description: "Interacts dynamically under warm or cool backlighting matrices, changing ambient mood layouts completely when activated." },
    { title: "Fine Grain Detailing", description: "Ultra-tight stone chalcedony formations provide an incredibly smooth surface finish ideal for high-precision edge detailing." },
  ];

  const finishesData = [
    { name: "Mirror Polished Finish", description: "A high-brilliance glassy finish that sharpens color definition and highlights rich underlying mineral variations.", image: DUMMY_IMAGES.mirrorPolished },
    { name: "Satin Honed Finish", description: "A smooth, velvet-like presentation that dials back specular reflections while maintaining deep structural luminescence.", image: DUMMY_IMAGES.satinHoned },
    { name: "Translucent Raw Finish", description: "Custom calibrated thickness profiling optimized specifically for integrated rear LED backlighting applications.", image: DUMMY_IMAGES.translucentSlab },
  ];

  const whyChooseData = [
    "Hand-Selected Ultra-Rare Exotic Blocks",
    "Calibrated Slabs Checked For Light Transmission Clarity",
    "Custom Resinated Structural Mesh Backing For Security",
    "Expert Layout Bookmatching Consultation Services",
    "Favored For Ultra-Luxury Hospitality & Residential Spaces"
  ];

  const showcaseData = [
    {
      title: "The Penthouse Atrium Lounge",
      location: "Mumbai, MH",
      scope: "Bookmatched, floor-to-ceiling backlit Honey Onyx focal point array scaling 24 feet high.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Grand Imperial Boardroom",
      location: "Colaba",
      scope: "Monolithic translucent reception desk housing complex dimmable light integration configurations.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Onyx"
      subtitle="Ethereal Translucence. Ultimate Opulence."
      heroDescription="Immerse your layouts in the unmatched luminous luxury of premium Onyx slabs, curated specifically to leverage rear illumination vectors and artistic design statements."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Onyx Architectural Art Surface?"
      aboutText={`Onyx is an elite, exotic chalcedony stone formed inside quiet thermal caves over millions of years by slow drip-stone calcite deposit configurations.\n\nRenowned for its rare translucent matrix and dramatic parallel veining bands, it steps away from conventional stone boundaries to behave as functional architectural lighting. When paired with calculated rear light arrays, it completely shifts structural atmospheres, making it the definitive option for signature statement reception counters, luxury accent surfaces, and elite focal walls.`}
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

export default Onyx;