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

// Real, high-resolution Unsplash photography showcasing luxury Triveni Wash Basins and custom stone pieces
const WASH_BASIN_IMAGES = {
  // Hero: Modern luxury interior featuring custom marble wash basins
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine natural stone texture and custom wash basin finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity basin variants and collection profiles
  countertopBasin: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  monolithicBasin: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  wallMountedBasin: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  pedestalBasin: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  integratedVanity: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  bowlBasin: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  honedLeather: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const WashBasin = () => {
  const applicationsData = [
    { name: "Luxury Residential Bathrooms & En-Suites", icon: <Home size={20} /> },
    { name: "Five-Star Hotel & Spa Restrooms", icon: <Building2 size={20} /> },
    { name: "Bespoke Powder Room Vanity Tops", icon: <Grid size={20} /> },
    { name: "Architectural Countertop Installations", icon: <Maximize2 size={20} /> },
    { name: "Free-Standing Monolithic Wash Stations", icon: <Layers size={20} /> },
    { name: "Custom Wall-Mounted Basin Units", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Triveni Calacatta Countertop Bowl", origin: "Hand-Carved Italian Marble Basin", image: WASH_BASIN_IMAGES.countertopBasin },
    { name: "Triveni Monolith Floor Basin", origin: "Seamless Solid Stone Pedestal Unit", image: WASH_BASIN_IMAGES.monolithicBasin },
    { name: "Triveni Nero Wall-Mounted Basin", origin: "Sleek Cantilevered Dark Stone Sink", image: WASH_BASIN_IMAGES.wallMountedBasin },
    { name: "Triveni Travertine Cylindrical", origin: "Cylindrical Natural Earth-Tone Basin", image: WASH_BASIN_IMAGES.pedestalBasin },
    { name: "Triveni Integrated Slab Vanity", origin: "Continuous Basin and Countertop Design", image: WASH_BASIN_IMAGES.integratedVanity },
    { name: "Triveni Terrazzo Art Basin", origin: "Contemporary Aggregate Composite Sink", image: WASH_BASIN_IMAGES.bowlBasin },
  ];

  const featuresData = [
    { 
      title: "Handcrafted Custom Sizing", 
      description: "Precision-milled and custom-carved dimensions tailored precisely to your bathroom layout and vanity dimensions." 
    },
    { 
      title: "Solid Natural Stone Sourcing", 
      description: "Carved from premium blocks of marble, granite, and travertine, ensuring rich organic veining and structural strength." 
    },
    { 
      title: "Advanced Waterproof Sealing", 
      description: "Treated with industrial-grade protective sealants that prevent moisture absorption, water spots, and chemical staining." 
    },
    { 
      title: "Ergonomic Drainage Engineering", 
      description: "Expertly sloped interior basins designed to ensure seamless water flow and optimal drainage without pooling." 
    },
    { 
      title: "Scratch & Thermal Resilience", 
      description: "Naturally robust stone construction that withstands everyday bathroom usage, cosmetics, and thermal fluctuations." 
    },
    { 
      title: "Unique One-of-a-Kind Aesthetics", 
      description: "Every basin features unrepeatable natural grain patterns, turning an everyday fixture into a sculptural centerpiece." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A brilliant, reflective mirror finish that highlights the breathtaking natural veining and depth of the stone.", 
      image: WASH_BASIN_IMAGES.glossyMirror 
    },
    { 
      name: "Honed Matte Velvet", 
      description: "A smooth, non-reflective touchable surface delivering a contemporary, understated luxury look.", 
      image: WASH_BASIN_IMAGES.velvetMatte 
    },
    { 
      name: "Textured Leather Finish", 
      description: "A tactile, organic surface treatment that accentuates the natural grain and stone character.", 
      image: WASH_BASIN_IMAGES.honedLeather 
    },
  ];

  const whyChooseData = [
    "Exclusive Custom Manufacturing Tailored for Architects and Interior Designers",
    "Uncompromising Attention to Detail in Hand-Polishing and Edge Profiling",
    "Expert Packaging and Safe Logistics Designed for Delicate Stone Fixtures",
    "Precision Waterjet Cutting Combined with Master Stonemasonry",
    "Timeless Elegance That Elevates Powder Rooms into High-End Luxury Spaces"
  ];

  const showcaseData = [
    {
      title: "The Leela Palace Spa Suites",
      location: "Udaipur, Rajasthan",
      scope: "Custom monolithic marble wash basins hand-carved for 40 luxury presidential suites and spa lounges.",
      image: WASH_BASIN_IMAGES.project1
    },
    {
      title: "Azure Skyline Penthouses",
      location: "Mumbai, Maharashtra",
      scope: "Bespoke integrated marble vanity tops and countertop basins engineered for elite modern residences.",
      image: WASH_BASIN_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title=" Wash Basins"
      subtitle="Bespoke Custom Stone Wash Basins & Architectural Vanities."
      heroDescription="Explore Triveni's custom wash basin collection—where rare natural marble and stone are sculpted into mastercrafted fixtures that redefine bathroom elegance."
      heroImage={WASH_BASIN_IMAGES.hero}
      aboutTitle="The Craftsmanship of Triveni Wash Basins"
      aboutText={`Triveni transforms natural stone blocks into sculptural wash basins that serve as the focal point of luxury bathrooms. Combining traditional stonemasonry with high-precision cutting technology, each basin is meticulously carved, sloped, and hand-polished.\n\nDesigned to integrate seamlessly into custom vanities or stand alone as architectural statements, our wash basins offer exceptional durability, easy maintenance, and uncompromised aesthetic distinction.`}
      aboutImage={WASH_BASIN_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default WashBasin;
