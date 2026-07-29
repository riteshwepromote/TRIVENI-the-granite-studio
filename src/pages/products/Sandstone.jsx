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

// Real, high-resolution Unsplash photography showcasing authentic sandstone textures and installations
const SANDSTONE_IMAGES = {
  // Hero: Warm, high-end architectural estate featuring luxury sandstone cladding
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
  
  // About: Real architectural masonry and stone facade work
  about: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1000",
  
  // Authentic Sandstone Varieties & Textures
  teakwood: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800",
  dholpurBeige: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
  agraRed: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  rainbow: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  kandlaGrey: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800",
  gwaliorMint: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
  
  // Real Stone Surface Finishes
  naturalCleft: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  shotBlasted: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  brushed: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
};

const Sandstone = () => {
  const applicationsData = [
    { name: "Ventilated Exterior Facades", icon: <Maximize2 size={20} /> },
    { name: "Pedestrian Paving & Plazas", icon: <Grid size={20} /> },
    { name: "Architectural Wall Cladding", icon: <Home size={20} /> },
    { name: "Pool Surrounds & Coping", icon: <Layers size={20} /> },
    { name: "Courtyards & Driveway Arrays", icon: <Building2 size={20} /> },
    { name: "Monolithic Steps & Risers", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Teakwood Sandstone", origin: "Khatu, Nagaur, Rajasthan", image: SANDSTONE_IMAGES.teakwood },
    { name: "Dholpur Beige", origin: "Dholpur, Rajasthan", image: SANDSTONE_IMAGES.dholpurBeige },
    { name: "Agra Red", origin: "Karauli / Bharatpur, Rajasthan", image: SANDSTONE_IMAGES.agraRed },
    { name: "Rainbow Sandstone", origin: "Khatu, Nagaur, Rajasthan", image: SANDSTONE_IMAGES.rainbow },
    { name: "Kandla Grey", origin: "Bhilwara, Rajasthan", image: SANDSTONE_IMAGES.kandlaGrey },
    { name: "Gwalior Mint", origin: "Shivpuri, Madhya Pradesh", image: SANDSTONE_IMAGES.gwaliorMint },
  ];

  const featuresData = [
    { 
      title: "Low Thermal Conductivity", 
      description: "Inherent thermal mass keeps surfaces comfortable under direct radiant heat, ideal for tropical climates and pool decking." 
    },
    { 
      title: "Freeze-Thaw Weather Stability", 
      description: "Dense quartz matrix prevents frost heave, surface micro-fracturing, or spalling in extreme sub-zero weather." 
    },
    { 
      title: "Natural Slip Resistance (R11–R13)", 
      description: "Granular silica composition delivers certified wet traction without requiring chemical anti-slip coatings." 
    },
    { 
      title: "Acid & Environmental Tolerant", 
      description: "Chemically inert mineral structure resists acid rain degradation and atmospheric pollutants in dense urban centers." 
    },
    { 
      title: "Stratified Geological Veining", 
      description: "Formed through organic sedimentary layers, offering distinct color banding that enhances architectural depth." 
    },
    { 
      title: "Precision Masonry Workability", 
      description: "Responds exceptionally well to hand-dressing, CNC carving, calibration, and custom edge profiling." 
    },
  ];

  const finishesData = [
    { 
      name: "Natural Split / Cleft Finish", 
      description: "Split along natural bedding planes to reveal organic, textured fissures with deep tactile character.", 
      image: SANDSTONE_IMAGES.naturalCleft 
    },
    { 
      name: "Shot-Blasted / Grit Finish", 
      description: "High-velocity particle impact produces an evenly stippled, matte texture optimized for wet pool surrounds.", 
      image: SANDSTONE_IMAGES.shotBlasted 
    },
    { 
      name: "Honed & Brushed Satin Finish", 
      description: "Smooth diamond-honed surface softened with wire brushes for an elegant, comfortable barefoot interior feel.", 
      image: SANDSTONE_IMAGES.brushed 
    },
  ];

  const whyChooseData = [
    "Hand-selected block reserves directly from primary quarry concessions",
    "Calibrated thickness options (20mm, 30mm, and custom masonry blocks)",
    "Precision gangsaw and CNC dimensional cutting",
    "Carbon-neutral extraction and sustainable quarrying practices",
    "Trusted by leading landscape architects and heritage restorers globally"
  ];

  const showcaseData = [
    {
      title: "The Aman Pavilion Estate",
      location: "Jaipur, Rajasthan",
      scope: "Asymmetric exterior wall cladding and 1,200 sq. m. of continuous hand-dressed courtyard pavement.",
      image: SANDSTONE_IMAGES.project1
    },
    {
      title: "The Coastal Horizon Villa",
      location: "Goa, India",
      scope: "Monolithic pool surrounds featuring calibrated 30mm shot-blasted salt-resistant Kandla Grey sandstone.",
      image: SANDSTONE_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Sandstone"
      subtitle="Earthy Textures. Architectural Depth."
      heroDescription="Discover exceptional sedimentary sandstone cuts engineered to provide pristine thermal stability, structural endurance, and rich stratified aesthetics."
      heroImage={SANDSTONE_IMAGES.hero}
      aboutTitle="Engineered by Time: Organic Sedimentary Stone for Timeless Facades"
      aboutText={`Sandstone is a classic clastic sedimentary rock composed primarily of quartz grains and silicate minerals bound together over millions of years by natural geological pressure.\n\nFamed for its presence in historic Indian architectural landmarks like the Red Fort and Hawa Mahal, sandstone remains a premier choice for modern architecture. Its natural insulation properties, slip resistance, and rich warm tones make it ideal for ventilated exterior cladding, grand landscape plazas, pool decks, and bespoke estate pathways.`}
      aboutImage={SANDSTONE_IMAGES.about}
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
