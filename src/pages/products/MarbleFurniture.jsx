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

// Real, high-resolution Unsplash photography showcasing luxury Triveni Marble Furniture and custom stone pieces
const MARBLE_FURNITURE_IMAGES = {
  // Hero: Modern luxury interior featuring custom marble furniture
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine natural marble texture and custom stone finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity furniture variants and collection profiles
  diningTable: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  coffeeTable: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  consoleTable: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  washBasin: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  tvUnit: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  accentStool: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  honedLeather: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const MarbleFurniture = () => {
  const applicationsData = [
    { name: "Statement Dining Room Tables", icon: <Home size={20} /> },
    { name: "Executive Office & Boardroom Desks", icon: <Building2 size={20} /> },
    { name: "Luxury Living Room Coffee & Side Tables", icon: <Grid size={20} /> },
    { name: "Bespoke Console & Entrance Tables", icon: <Maximize2 size={20} /> },
    { name: "Designer Marble Wash Basins & Vanities", icon: <Layers size={20} /> },
    { name: "Custom Architectural TV Units & Shelving", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Triveni Calacatta Dining Set", origin: "Bespoke Italian Marble Statement Table", image: MARBLE_FURNITURE_IMAGES.diningTable },
    { name: "Triveni Nero Coffee Table", origin: "Sleek Minimalist Black Stone Centerpiece", image: MARBLE_FURNITURE_IMAGES.coffeeTable },
    { name: "Triveni Vein Console", origin: "Linear Earth-Tone Architectural Furniture", image: MARBLE_FURNITURE_IMAGES.consoleTable },
    { name: "Triveni Monolith Basin", origin: "Carved Solid Stone Countertop Basin", image: MARBLE_FURNITURE_IMAGES.washBasin },
    { name: "Triveni Travertine Media Unit", origin: "Textured Natural Stone Entertainment Console", image: MARBLE_FURNITURE_IMAGES.tvUnit },
    { name: "Triveni Terrazzo Accent Piece", origin: "Contemporary Composite Stone Decor", image: MARBLE_FURNITURE_IMAGES.accentStool },
  ];

  const featuresData = [
    { 
      title: "Handcrafted Custom Sizing", 
      description: "Tailor-made dimensions, edge profiles, and geometric configurations precision-cut to fit your exact interior blueprint." 
    },
    { 
      title: "Premium Natural & Engineered Slabs", 
      description: "Sourced from the world's finest quarries, ensuring authentic veining, structural integrity, and breathtaking aesthetic depth." 
    },
    { 
      title: "Advanced Stain & Scratch Sealing", 
      description: "Treated with professional-grade sealants that protect the porous stone surface against everyday spills, oils, and wear." 
    },
    { 
      title: "Robust Metallic & Wood Base Integration", 
      description: "Combined with high-tensile stainless steel, brushed brass, or solid wood frames for unmatched stability and modern flair." 
    },
    { 
      title: "Heat & Thermal Resilience", 
      description: "Naturally fireproof and heat-resistant properties make marble furniture exceptionally functional for dining and living spaces." 
    },
    { 
      title: "One-of-a-Kind Veining Patterns", 
      description: "Every single furniture piece features organic, unrepeatable natural patterns that make your installation entirely unique." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A brilliant, light-reflecting buff that highlights the rich color palette and intricate natural veins of the marble.", 
      image: MARBLE_FURNITURE_IMAGES.glossyMirror 
    },
    { 
      name: "Honed Matte Velvet", 
      description: "A smooth, non-reflective touchable finish that offers a warm, contemporary, and understated aesthetic.", 
      image: MARBLE_FURNITURE_IMAGES.velvetMatte 
    },
    { 
      name: "Textured Leather Finish", 
      description: "A specialized tactile surface treatment that accentuates the organic grains and depth of the stone.", 
      image: MARBLE_FURNITURE_IMAGES.honedLeather 
    },
  ];

  const whyChooseData = [
    "Exclusive Custom Manufacturing Tailored to Interior Designers and Architects",
    "Uncompromising Attention to Detail in Edge Polishing and Base Assembly",
    "Expert Logistics and Safe White-Glove Delivery for Heavy Stone Pieces",
    "Sustainable Sourcing and Precision Waterjet Cutting Technology",
    "Timeless Elegance That Adds Lifelong Value and Luxury to Any Space"
  ];

  const showcaseData = [
    {
      title: "The Taj Presidential Lounge",
      location: "Mumbai, Maharashtra",
      scope: "Custom 10-seater Calacatta marble dining tables and matching coffee arrangements custom-crafted for VIP suites.",
      image: MARBLE_FURNITURE_IMAGES.project1
    },
    {
      title: "Aura Private Residence",
      location: "Hyderabad, Telangana",
      scope: "Bespoke monolithic marble vanities and floating console tables engineered for modern luxury villas.",
      image: MARBLE_FURNITURE_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title=" Marble Furniture"
      subtitle="Bespoke Custom Stone Furniture & Architectural Pieces."
      heroDescription="Discover Triveni's custom marble furniture collection—where rare natural stone is masterfully shaped into functional works of art, tailored precisely to your design vision."
      heroImage={MARBLE_FURNITURE_IMAGES.hero}
      aboutTitle="The Craftsmanship of Triveni Marble Furniture"
      aboutText={`Triveni brings decades of stone expertise into the realm of custom furniture design. By merging traditional stonemasonry with advanced CNC and waterjet fabrication, we turn raw marble slabs into stunning dining tables, coffee tables, wash basins, and architectural units.\n\nEach custom piece is meticulously balanced with high-grade metal or wood supports, hand-polished to perfection, and custom-engineered to match the unique aesthetic of your residential or commercial space.`}
      aboutImage={MARBLE_FURNITURE_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default MarbleFurniture;
