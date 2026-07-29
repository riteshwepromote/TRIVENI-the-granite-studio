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

// Real, high-resolution Unsplash photography showcasing luxury Bath Tubs and custom stone fixtures
const BATH_TUB_IMAGES = {
  // Hero: Modern luxury bathroom interior featuring a custom stone bathtub
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  
  // About: Detailed macro view of fine natural stone texture and custom tub finish
  about: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity bathtub variants and collection profiles
  freestandingTub: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  monolithicTub: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=800",
  ovalSculptedTub: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
  travertineSoakingTub: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
  cornerAlcoveTub: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
  customInsetTub: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  
  // Surface Finishes & Textures
  glossyMirror: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  velvetMatte: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  honedLeather: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
  
  // Showcase Projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const BathTub = () => {
  const applicationsData = [
    { name: "Luxury Master Bathroom En-Suites", icon: <Home size={20} /> },
    { name: "Five-Star Hotel & Spa Wellness Rooms", icon: <Building2 size={20} /> },
    { name: "Bespoke Resort Villa Bathing Areas", icon: <Grid size={20} /> },
    { name: "Architectural Freestanding Installations", icon: <Maximize2 size={20} /> },
    { name: "Custom Monolithic Wet Rooms", icon: <Layers size={20} /> },
    { name: "Private Penthouse Soaking Suites", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Calacatta Freestanding Soaking Tub", origin: "Hand-Carved Italian Marble Masterpiece", image: BATH_TUB_IMAGES.freestandingTub },
    { name: "Monolith Solid Stone Tub", origin: "Seamless Block-Carved Natural Basin", image: BATH_TUB_IMAGES.monolithicTub },
    { name: "Oval Sculpted Marble Tub", origin: "Ergonomic Curvilinear Stone Design", image: BATH_TUB_IMAGES.ovalSculptedTub },
    { name: "Travertine Deep Soak Tub", origin: "Earthy Textural Architectural Profile", image: BATH_TUB_IMAGES.travertineSoakingTub },
    { name: "Nero Marquina Luxury Tub", origin: "Deep Obsidian Body with White Veining", image: BATH_TUB_IMAGES.cornerAlcoveTub },
    { name: "Custom Inset Stone Tub", origin: "Tailored Built-In Bath Fixture", image: BATH_TUB_IMAGES.customInsetTub },
  ];

  const featuresData = [
    { 
      title: "Handcrafted Custom Sizing", 
      description: "Precision-milled and custom-carved dimensions tailored precisely to your bathroom floor plan and ergonomic comfort requirements." 
    },
    { 
      title: "Solid Natural Stone Sourcing", 
      description: "Carved from monolithic blocks of premium marble, granite, and travertine, ensuring rich organic veining and enduring structural integrity." 
    },
    { 
      title: "Advanced Waterproof Sealing", 
      description: "Treated with industrial-grade protective sealants that completely prevent moisture absorption, water spotting, and chemical staining." 
    },
    { 
      title: "Ergonomic Contour Engineering", 
      description: "Expertly angled interior backrests and optimized depth designed to provide supreme comfort for extended relaxation soaking." 
    },
    { 
      title: "Natural Thermal Retention", 
      description: "Thick natural stone walls possess superior thermal mass properties, keeping bathwater warm significantly longer than acrylic or fiberglass." 
    },
    { 
      title: "Unrepeatable Unique Aesthetics", 
      description: "Every single bathtub features exclusive organic natural grain patterns, turning a functional fixture into a monumental sculptural centerpiece." 
    },
  ];

  const finishesData = [
    { 
      name: "High-Gloss Mirror Polish", 
      description: "A brilliant, reflective mirror finish that highlights the breathtaking natural veining and depth of the stone.", 
      image: BATH_TUB_IMAGES.glossyMirror 
    },
    { 
      name: "Honed Matte Velvet", 
      description: "A smooth, non-reflective touchable surface delivering a contemporary, understated luxury look.", 
      image: BATH_TUB_IMAGES.velvetMatte 
    },
    { 
      name: "Textured Leather Finish", 
      description: "A tactile, organic surface treatment that accentuates the natural grain and stone character.", 
      image: BATH_TUB_IMAGES.honedLeather 
    },
  ];

  const whyChooseData = [
    "Exclusive Custom Manufacturing Tailored for Architects and Interior Designers",
    "Uncompromising Attention to Detail in Hand-Polishing and Contour Profiling",
    "Expert Heavy-Duty Packaging and Specialized White-Glove Logistics for Stone Fixtures",
    "Precision Waterjet Cutting Combined with Master Stonemasonry",
    "Timeless Elegance That Elevates Bathrooms into Sanctuary-Grade Luxury Spaces"
  ];

  const showcaseData = [
    {
      title: "The Oberoi Sanctuary Spa Villas",
      location: "Udaipur, Rajasthan",
      scope: "Custom monolithic marble bathtubs hand-carved for 25 elite presidential suites and private wellness gazebos.",
      image: BATH_TUB_IMAGES.project1
    },
    {
      title: "Azure Skyline Penthouses",
      location: "Mumbai, Maharashtra",
      scope: "Bespoke freestanding Calacatta soaking tubs engineered for panoramic high-rise master bathrooms.",
      image: BATH_TUB_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Bath Tubs"
      subtitle="Bespoke Custom Stone Bathtubs & Luxury Architectural Soaking Basins."
      heroDescription="Explore our custom bathtub collection—where rare natural marble and stone are sculpted into mastercrafted sanctuary fixtures that redefine luxury bathing."
      heroImage={BATH_TUB_IMAGES.hero}
      aboutTitle="The Craftsmanship of Custom Stone Bathtubs"
      aboutText={`Transforming massive blocks of natural stone into ergonomic, sculptural bathtubs requires an exceptional blend of artistry and precision engineering. Each tub is meticulously carved, hollowed, and hand-polished to achieve supreme comfort and breathtaking visual impact.\n\nDesigned to stand alone as striking architectural centerpieces, our natural stone bathtubs offer superior heat retention, unmatched durability, and uncompromised aesthetic distinction for high-end residential and hospitality projects.`}
      aboutImage={BATH_TUB_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
      showcaseProjects={showcaseData}
    />
  );
};

export default BathTub;
