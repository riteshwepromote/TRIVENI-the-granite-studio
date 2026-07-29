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

// Real, high-resolution Unsplash photography showcasing luxury Marble Artifacts and custom stone decor pieces
const MARBLE_ARTIFACTS_IMAGES = {
  // Hero: Modern luxury interior featuring curated marble artifacts and home decor
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine natural stone texture and custom artifact finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity artifact variants and collection profiles
  sculpturalCenterpiece: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  decorativeBowl: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  stoneCandleHolder: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  architecturalVase: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  marbleTray: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  handCarvedStatuary: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  honedLeather: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const MarbleArtifacts = () => {
  const applicationsData = [
    { name: "Luxury Living Room Display Consoles", icon: <Home size={20} /> },
    { name: "Executive Office & Boardroom Decor", icon: <Building2 size={20} /> },
    { name: "Five-Star Hotel Lobby Accent Tables", icon: <Grid size={20} /> },
    { name: "Bespoke Dining Table Centerpiece Displays", icon: <Maximize2 size={20} /> },
    { name: "Exclusive Boutique Retail Visual Merchandising", icon: <Layers size={20} /> },
    { name: "Private Residential Styling & Shelving", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Sculptural Marble Centerpiece", origin: "Hand-Carved Abstract Stone Art Object", image: MARBLE_ARTIFACTS_IMAGES.sculpturalCenterpiece },
    { name: "Inlaid Decorative Stone Bowl", origin: "Precision-Turned Multi-Mineral Vessel", image: MARBLE_ARTIFACTS_IMAGES.decorativeBowl },
    { name: "Minimalist Marble Candle Holder", origin: "Solid Block Architectural Light Fixture", image: MARBLE_ARTIFACTS_IMAGES.stoneCandleHolder },
    { name: "Cylindrical Stone Flower Vase", origin: "Hand-Polished Natural Vein Planter", image: MARBLE_ARTIFACTS_IMAGES.architecturalVase },
    { name: "Valet & Display Marble Tray", origin: "Sleek Rectified Stone Organizer Plate", image: MARBLE_ARTIFACTS_IMAGES.marbleTray },
    { name: "Classical Hand-Carved Statuary", origin: "Master Artisan Formed Figurine", image: MARBLE_ARTIFACTS_IMAGES.handCarvedStatuary },
  ];

  const featuresData = [
    { 
      title: "Handcrafted Artisanal Mastery", 
      description: "Each artifact is meticulously shaped, turned, and hand-polished by master stonemasons with decades of heritage expertise." 
    },
    { 
      title: "Solid Natural Stone Sourcing", 
      description: "Carved from premium blocks of fine marble, onyx, and travertine, ensuring rich organic veining and structural permanence." 
    },
    { 
      title: "Protective Surface Sealing", 
      description: "Finished with specialized protective sealants that guard against oils, moisture, and daily handling marks." 
    },
    { 
      title: "Unrepeatable Natural Grain Patterns", 
      description: "Due to organic stone variations, no two decorative artifacts are ever identical, guaranteeing a unique collector piece." 
    },
    { 
      title: "Architectural Weight & Stability", 
      description: "Solid mineral density provides a substantial, high-quality tactile feel suited for luxury display settings." 
    },
    { 
      title: "Bespoke Custom Commissions", 
      description: "Tailor-made dimensions, geometric shapes, and corporate branding designs crafted directly to client specifications." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A brilliant, reflective mirror finish that highlights the breathtaking natural veining and deep color saturation of the stone.", 
      image: MARBLE_ARTIFACTS_IMAGES.glossyMirror 
    },
    { 
      name: "Honed Matte Velvet", 
      description: "A smooth, non-reflective touchable surface delivering a contemporary, understated luxury look.", 
      image: MARBLE_ARTIFACTS_IMAGES.velvetMatte 
    },
    { 
      name: "Textured Leather Finish", 
      description: "A tactile, organic surface treatment that accentuates the natural grain and stone character.", 
      image: MARBLE_ARTIFACTS_IMAGES.honedLeather 
    },
  ];

  const whyChooseData = [
    "Exclusive Custom Manufacturing Tailored for Interior Designers and Luxury Stylists",
    "Uncompromising Attention to Detail in Hand-Polishing and Edge Profiling",
    "Secure Packaging and Specialized White-Glove Logistics for Delicate Stone Objects",
    "Harmonious Fusion of Traditional Stonemasonry with Contemporary Design Aesthetics",
    "Timeless Sculptural Elements That Add Sophistication and Character to Any Interior"
  ];

  const showcaseData = [
    {
      title: "The Taj Luxury Collection Display",
      location: "New Delhi",
      scope: "Bespoke hand-carved marble decorative centerpieces and trays curated for exclusive presidential suites.",
      image: MARBLE_ARTIFACTS_IMAGES.project1
    },
    {
      title: "The Address Design Penthouses",
      location: "Dubai, UAE",
      scope: "Custom monolithic stone sculptures and minimalist architectural vases styled for elite residential living spaces.",
      image: MARBLE_ARTIFACTS_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Marble Artifacts"
      subtitle="Bespoke Custom Stone Decor, Sculptures & Luxury Home Artifacts."
      heroDescription="Explore our custom marble artifacts collection—where rare natural stones are masterfully sculpted into exquisite decor pieces and statement art objects that elevate interior styling."
      heroImage={MARBLE_ARTIFACTS_IMAGES.hero}
      aboutTitle="The Craftsmanship of Custom Marble Artifacts"
      aboutText={`Transforming select pieces of natural marble into sophisticated home artifacts requires a delicate balance of artistic vision and master stonemasonry. Our collection features hand-carved centerpieces, sculptural vessels, and decorative accents designed to bring organic luxury and refined elegance to any space.\n\nEvery artifact is precision-crafted, polished to perfection, and engineered to serve as a timeless conversation piece in high-end residential, hospitality, and commercial styling environments.`}
      aboutImage={MARBLE_ARTIFACTS_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default MarbleArtifacts;
