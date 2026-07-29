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

// Real, high-resolution Unsplash photography showcasing luxury Wall Murals and custom stone/artistic installations
const WALL_MURAL_IMAGES = {
  // Hero: Modern luxury interior featuring an accent wall mural
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine artistic texture and custom wall mural finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity mural variants and collection profiles
  stoneMosaicMural: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  reliefCarvedMural: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  abstractInlayMural: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  botanicalStoneMural: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  geometricReliefMural: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  customPortraitMural: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  honedLeather: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const WallMurals = () => {
  const applicationsData = [
    { name: "Luxury Living Room Accent Feature Walls", icon: <Home size={~~(20)} /> },
    { name: "Corporate Executive Lobby Backdrops", icon: <Building2 size={20} /> },
    { name: "Five-Star Hotel Reception Feature Panels", icon: <Grid size={20} /> },
    { name: "Grand Foyer & Entrance Way Cladding", icon: <Maximize2 size={20} /> },
    { name: "Bespoke Dining Room Artistic Wall Murals", icon: <Layers size={20} /> },
    { name: "Private Villa Architectural Art Installations", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Hand-Inlaid Stone Mosaic Mural", origin: "Precise Multi-Mineral Waterjet Artistry", image: WALL_MURAL_IMAGES.stoneMosaicMural },
    { name: "Bas-Relief Carved Marble Panel", origin: "Three-Dimensional Sculpted Natural Stone", image: WALL_MURAL_IMAGES.reliefCarvedMural },
    { name: "Abstract Metal & Stone Inlay", origin: "Contrasting Brass and Marble Composition", image: WALL_MURAL_IMAGES.abstractInlayMural },
    { name: "Botanical Travertine Wall Art", origin: "Earthy Relief Floral and Foliage Profiles", image: WALL_MURAL_IMAGES.botanicalStoneMural },
    { name: "Geometric Minimalist Stone Panel", origin: "Architectural Precision-Milled Line Art", image: WALL_MURAL_IMAGES.geometricReliefMural },
    { name: "Custom Commissioned Art Mural", origin: "Tailored Visionary Stone Masterpiece", image: WALL_MURAL_IMAGES.customPortraitMural },
  ];

  const featuresData = [
    { 
      title: "Bespoke Scale & Dimensioning", 
      description: "Custom-designed and precision-cut to seamlessly fit the exact architectural dimensions of any wall space or feature area." 
    },
    { 
      title: "Advanced Waterjet Stonemasonry", 
      description: "Utilizes ultra-high-pressure waterjet technology to interlock diverse natural stones, marbles, and metals with micrometer accuracy." 
    },
    { 
      title: "Three-Dimensional Sculpted Reliefs", 
      description: "Expertly hand-chiseled and machine-milled textures that bring extraordinary depth, shadow, and tactile dimension to walls." 
    },
    { 
      title: "Permanent Structural Durability", 
      description: "Unlike paper or painted murals, natural stone wall murals are completely fade-proof, moisture-resistant, and enduring for generations." 
    },
    { 
      title: "Seamless Modular Panel Alignment", 
      description: "Engineered with interlocking grid systems that ensure continuous, hidden joint lines across massive feature walls." 
    },
    { 
      title: "Exclusive Custom Art Direction", 
      description: "Collaborate directly with master designers to translate personal concepts, corporate branding, or abstract themes into permanent stone art." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A brilliant, reflective mirror finish that enhances luminosity, color saturation, and intricate stone grain depth.", 
      image: WALL_MURAL_IMAGES.glossyMirror 
    },
    { 
      name: "Honed Matte Velvet", 
      description: "A smooth, non-reflective touchable surface delivering a contemporary, understated luxury architectural look.", 
      image: WALL_MURAL_IMAGES.velvetMatte 
    },
    { 
      name: "Textured Relief Finish", 
      description: "A multi-layered tactile surface treatment that highlights sculpted shadows and natural stone grain variations.", 
      image: WALL_MURAL_IMAGES.honedLeather 
    },
  ];

  const whyChooseData = [
    "Exclusive Custom Manufacturing Tailored for Elite Interior Designers and Architects",
    "Uncompromising Attention to Detail in Hand-Polishing and Waterjet Inlay Assembly",
    "Specialized White-Glove Logistics and Modular Installation Support for Large-Scale Art",
    "Fusion of Traditional Artisanal Stonemasonry with Advanced CNC Technology",
    "Magnificent Focal Points That Instantly Elevate Ordinary Rooms into Gallery-Grade Spaces"
  ];

  const showcaseData = [
    {
      title: "The Taj Mahal Palace Grand Atrium",
      location: "Mumbai, Maharashtra",
      scope: "Custom 30-foot multi-mineral stone inlay wall mural depicting heritage botanical motifs for the main reception hall.",
      image: WALL_MURAL_IMAGES.project1
    },
    {
      title: "CyberCity Corporate Headquarters",
      location: "Gurugram, Haryana",
      scope: "Bespoke geometric marble and brushed brass executive boardroom feature wall installations.",
      image: WALL_MURAL_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Wall Murals"
      subtitle="Bespoke Custom Stone Wall Murals & Architectural Art Installations."
      heroDescription="Explore our custom wall mural collection—where rare natural stones, marbles, and metals are sculpted and waterjet-cut into breathtaking architectural masterpieces that define interior spaces."
      heroImage={WALL_MURAL_IMAGES.hero}
      aboutTitle="The Craftsmanship of Custom Stone Wall Murals"
      aboutText={`Transforming plain walls into awe-inspiring visual narratives requires an extraordinary fusion of fine art and high-precision stonemasonry. Our custom wall murals combine advanced waterjet cutting, hand-carved relief textures, and intricate mineral inlays to create permanent installations of unmatched luxury.\n\nDesigned as grand focal points for elite residential and commercial spaces, each mural is custom-engineered to your exact spatial dimensions, bringing timeless elegance, depth, and prestige to any interior.`}
      aboutImage={WALL_MURAL_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default WallMurals;
