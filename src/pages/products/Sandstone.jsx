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

// Premium architectural Unsplash placeholders showcasing organic sandstone textures
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity natural sediment textures for the collection grid
  teakwood: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=600",
  dholpurBeige: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600",
  agraRed: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600",
  rainbow: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=600",
  kandlaGrey: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=600",
  gwaliorMint: "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?auto=format&fit=crop&q=80&w=600",
  
  // Stone finishes
  naturalCleft: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  shotBlasted: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  brushed: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  
  // Premium commercial and residential projects using Sandstone
  project1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
};

const Sandstone = () => {
  const applicationsData = [
    { name: "Exterior Facades", icon: <Maximize2 size={20} /> },
    { name: "Premium Paving", icon: <Grid size={20} /> },
    { name: "Wall Cladding", icon: <Home size={20} /> },
    { name: "Pool Coping Arrays", icon: <Layers size={20} /> },
    { name: "Courtyard Matrix", icon: <Building2 size={20} /> },
    { name: "Sculptural Steps", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Teakwood Sandstone", origin: "Premium Radial Veining", image: DUMMY_IMAGES.teakwood },
    { name: "Dholpur Beige", origin: "Heritage Clean Palette", image: DUMMY_IMAGES.dholpurBeige },
    { name: "Agra Red", origin: "Monolithic Historic Ochre", image: DUMMY_IMAGES.agraRed },
    { name: "Rainbow Sandstone", origin: "Exotic Concentric Bands", image: DUMMY_IMAGES.rainbow },
    { name: "Kandla Grey", origin: "High-Density Basal Tones", image: DUMMY_IMAGES.kandlaGrey },
    { name: "Gwalior Mint", origin: "Refined Pale Ivory Spec", image: DUMMY_IMAGES.gwaliorMint },
  ];

  const featuresData = [
    { title: "Thermal Insulation", description: "Low thermal conductivity vectors maintain cool surface variables under extreme radiant heat loads." },
    { title: "Weather Proof", description: "Resists intense freeze-thaw cycles without surface spalling, micro-fracturing, or structural degradation." },
    { title: "Slip Resistant", description: "Inherent granular silica architecture provides safe natural slip resistance ratings without chemical processing." },
    { title: "Acid Tolerant", description: "Chemically stable sedimentary assembly prevents structural tracking when exposed to environmental pollutants." },
    { title: "Organic Aesthetic", description: "Stratified mineral sedimentation profiles form distinct color bands that emphasize architectural form." },
    { title: "High Workability", description: "Offers excellent responsive parameters during precise structural masonry cutting and edge profiling." },
  ];

  const finishesData = [
    { name: "Natural Cleft Finishes", description: "An authentic split surface showcasing organic sedimentary fissures and high structural depth.", image: DUMMY_IMAGES.naturalCleft },
    { name: "Shot-Blasted Finishes", description: "High-velocity treatment producing an evenly stippled, uniform texture with slip-resistant friction metrics.", image: DUMMY_IMAGES.shotBlasted },
    { name: "Brushed Finishes", description: "Gently satined surface textures creating clean, softened contours with comfortable tactile responses.", image: DUMMY_IMAGES.brushed },
  ];

  const whyChooseData = [
    "Curated Organic Sedimentary Vectors",
    "Calibrated Multi-Thickness Structural Slabs",
    "Precision Machine-Cut Dimensional Control",
    "Eco-Friendly Carbon-Neutral Sourcing",
    "Trusted by Elite Landscape Architects Globally"
  ];

  const showcaseData = [
    {
      title: "The Aman Pavilion Estate",
      location: "Jaipur, RJ",
      scope: "Asymmetric exterior wall cladding and continuous hand-dressed courtyard pavement arrays.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Coastal Horizon Villa",
      location: "Goa, IN",
      scope: "Monolithic pool deck decking systems featuring calibrated shot-blasted salt-resistant surfaces.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Sandstone"
      subtitle="Earthy Textures. Architectural Depth."
      heroDescription="Discover exceptional sedimentary sandstone cuts engineered to provide pristine thermal stability, structural endurance, and rich stratified aesthetics."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Sandstone Structural Surface?"
      aboutText={`Sandstone is a premium clastic sedimentary rock composed primarily of quartz grains and organic mineral binders, celebrated globally for its rich earth tones.\n\nFormed over millennia by geological pressure, it embodies a deep connection to historic and contemporary design languages. Its unique structural insulation and texture make it highly sought after for monolithic exterior cladding, grand architectural facades, landscaping matrices, and bespoke estate pathways.`}
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

export default Sandstone;