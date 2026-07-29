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

// Real, high-resolution Unsplash photography showcasing smooth limestone textures and luxury architectural interiors
const LIMESTONE_IMAGES = {
  // Hero: Minimalist architectural interior with smooth limestone surfaces
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
  
  // About: Architectural stone masonry / light limestone wall
  about: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
  
  // Authentic Limestone Varieties & Textures
  kotaBlue: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800",
  indianaBuff: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
  jaisalmerYellow: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  molyvosGrey: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  tandurYellow: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800",
  creamBeige: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
  
  // Real Stone Finishes
  velvetHoned: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  tumbled: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  sandblasted: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
};

const Limestone = () => {
  const applicationsData = [
    { name: "Minimalist Interior Flooring", icon: <Grid size={20} /> },
    { name: "Acoustic Wall Cladding", icon: <Home size={20} /> },
    { name: "Monolithic Exterior Facades", icon: <Maximize2 size={20} /> },
    { name: "Bespoke Fireplace Surrounds", icon: <Layers size={20} /> },
    { name: "Commercial Lobbies & Receptions", icon: <Building2 size={20} /> },
    { name: "Floating Stair Treads & Risers", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Kota Blue", origin: "Kota, Rajasthan", image: LIMESTONE_IMAGES.kotaBlue },
    { name: "Indiana Buff", origin: "Bedford, Indiana (Imported)", image: LIMESTONE_IMAGES.indianaBuff },
    { name: "Jaisalmer Yellow", origin: "Jaisalmer, Rajasthan", image: LIMESTONE_IMAGES.jaisalmerYellow },
    { name: "Molyvos Grey", origin: "Peloponnese Region (Imported)", image: LIMESTONE_IMAGES.molyvosGrey },
    { name: "Tandur Yellow", origin: "Tandur, Telangana", image: LIMESTONE_IMAGES.tandurYellow },
    { name: "Cream Beige", origin: "Antalya, Turkey (Imported)", image: LIMESTONE_IMAGES.creamBeige },
  ];

  const featuresData = [
    { 
      title: "Textural Uniformity", 
      description: "Fine-grained calcite matrix provides an ultra-consistent palette, allowing architectural lighting and structural lines to take focus." 
    },
    { 
      title: "High Thermal Dissipation", 
      description: "Low heat retention keeps indoor and outdoor floor surfaces cool under heavy radiant sunlight and high temperatures." 
    },
    { 
      title: "Low-Glare Velvet Tactility", 
      description: "Delivers a soft, non-reflective matte finish under ambient light that feels comfortable underfoot." 
    },
    { 
      title: "Organic Patina Development", 
      description: "Durable calcium carbonate structure ages gracefully over time, deepening in character without losing core density." 
    },
    { 
      title: "Bespoke Carving & Masonry Workability", 
      description: "Homogeneous density allows for clean CNC carving, precise bullnozing, chamfering, and intricate architectural detail." 
    },
    { 
      title: "Low Carbon Extraction Footprint", 
      description: "Sourced with low processing energy requirements, serving as a sustainable choice for green building design." 
    },
  ];

  const finishesData = [
    { 
      name: "Velvet Honed Finish", 
      description: "A smooth, ultra-matte surface achieved through fine abrasives that emphasizes color consistency and clean architectural lines.", 
      image: LIMESTONE_IMAGES.velvetHoned 
    },
    { 
      name: "Tumbled Antique Finish", 
      description: "Gently softened edges paired with a subtle, worn surface texture that conveys immediate warmth and historical character.", 
      image: LIMESTONE_IMAGES.tumbled 
    },
    { 
      name: "Sandblasted / Micro-Textured Finish", 
      description: "High-pressure micro-stippling creates a uniform slip-resistant surface while retaining soft pastel background tones.", 
      image: LIMESTONE_IMAGES.sandblasted 
    },
  ];

  const whyChooseData = [
    "Strict color-matching and density control across large quarry lots",
    "Calibrated gangsaw cutting ensuring exact slab thickness tolerances",
    "Sourced from sustainable geological reserves in India and Europe",
    "High flexural strength suited for both glued and mechanical clad facades",
    "Selected by leading minimalist architects for modern luxury design"
  ];

  const showcaseData = [
    {
      title: "The Zenith Museum of Contemporary Art",
      location: "New Delhi, India",
      scope: "Sub-structural tensioned exterior wall cladding over a continuous 32,000 sq. ft. facade surface.",
      image: LIMESTONE_IMAGES.project1
    },
    {
      title: "The Alila Courtyard Pavilion",
      location: "Udaipur, Rajasthan",
      scope: "Seamless monolithic interior flooring layout interacting with open-air terrace paving.",
      image: LIMESTONE_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Limestone"
      subtitle="Subtle Textures. Refined Minimalist Luxury."
      heroDescription="Explore pristine, low-glare limestone slabs optimized to enrich timeless interior configurations, monumental facades, and elite outdoor landscapes."
      heroImage={LIMESTONE_IMAGES.hero}
      aboutTitle="Soft Elegance, Structural Rigidity: The Minimalist Stone of Choice"
      aboutText={`Limestone is a sedimentary rock formed over millions of years through the accumulation of organic marine calcite crystals, celebrated globally for its smooth pastel tones and soft visual texture.\n\nBypassing the heavy veining of marble and granite, limestone offers clean visual calm and structural durability. Its heat resistance, non-glare surface, and smooth feel make it a preferred material for high-end residential flooring, floating staircases, and modern ventilated exterior facades.`}
      aboutImage={LIMESTONE_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default Limestone;
