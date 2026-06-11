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

// Premium Unsplash placeholders showcasing pristine engineered quartz surfaces and settings
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity engineered stone patterns for the product grid
  calacattaGold: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
  statuarioUltra: "https://images.unsplash.com/photo-1635012684880-acc3c43ffd55?auto=format&fit=crop&q=80&w=600",
  concreteGrey: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=600",
  pureWhite: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
  marquinaNero: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  nobleGrey: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  
  // Stone finishes
  polished: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  suede: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  concrete: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  
  // Premium applications and showcase installations
  project1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
};

const Quartz = () => {
  const applicationsData = [
    { name: "Culinary Worktops", icon: <Layers size={20} /> },
    { name: "Bespoke Vanities", icon: <Grid size={20} /> },
    { name: "Full-Height Backsplashes", icon: <Home size={20} /> },
    { name: "Internal Cladding Systems", icon: <Maximize2 size={20} /> },
    { name: "High-Traffic Desking", icon: <Building2 size={20} /> },
    { name: "Monolithic Islands", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Calacatta Gold", origin: "Artisan Vein Configuration", image: DUMMY_IMAGES.calacattaGold },
    { name: "Statuario Ultra", origin: "Crisp Luminescent Matrix", image: DUMMY_IMAGES.statuarioUltra },
    { name: "Concrete Grey", origin: "Industrial Architectural Matte", image: DUMMY_IMAGES.concreteGrey },
    { name: "Pure White", origin: "Zero-Inclusion Minimalist Solid", image: DUMMY_IMAGES.pureWhite },
    { name: "Marquina Nero", origin: "Deep Stark Contrast Veining", image: DUMMY_IMAGES.marquinaNero },
    { name: "Noble Grey", origin: "Refined Interlocking Swirls", image: DUMMY_IMAGES.nobleGrey },
  ];

  const featuresData = [
    { title: "Non-Porous Composition", description: "Engineered configuration leaves absolutely no voids, preventing bacterial incubation and fluid absorption completely." },
    { title: "Stain Impervious", description: "Defies aggressive culinary agents like wine, citrus extracts, and oils without requiring specialized recurring resealing." },
    { title: "High Flexural Strength", description: "Bound with premium polymer resins to yield immense structural elasticity, resisting surface cracking or edge chipping." },
    { title: "Flawless Consistency", description: "Eliminates unexpected geological fissures or structural soft spots, ensuring perfect structural layout parity across matching slabs." },
    { title: "Low Maintenance", description: "Requires zero complex polishing compounds or surface rejuvenators; sanitizes completely with standard neutral cleaning arrays." },
    { title: "Color Permanence", description: "Chemically setting compression ensures structural pigments remain stable over long-term interior exposure." },
  ];

  const finishesData = [
    { name: "Polished Finishes", description: "A high-brilliance specular treatment offering crystal-clear reflections and maximizing mineral depth.", image: DUMMY_IMAGES.polished },
    { name: "Suede Finishes", description: "A premium soft-touch matte presentation offering a unique tactile skin effect with subtle, glare-free properties.", image: DUMMY_IMAGES.suede },
    { name: "Concrete Finishes", description: "A subtly textured, rugged tactile relief profile designed to capture a clean, industrial architectural aesthetic.", image: DUMMY_IMAGES.concrete },
  ];

  const whyChooseData = [
    "93% Pure Natural Quartz Crystals",
    "Flawless Slab-to-Slab Pattern Continuity",
    "Certified Food-Safe & Hygienic Surfaces",
    "Advanced Polymer Resin Architecture",
    "Specified by Premier Residential Architects"
  ];

  const showcaseData = [
    {
      title: "The Marina Bay Penthouse",
      location: "Mumbai, MH",
      scope: "Full-height bookmatched wall cladding combined with integrated seamless vanity structures.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "One Horizon Executive Club",
      location: "Gurugram, HR",
      scope: "Monolithic 20ft central reception desk array paired with high-exposure lounge serving surfaces.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Quartz"
      subtitle="Engineered Perfection. Uncompromising Performance."
      heroDescription="Explore high-definition quartz composites curated with advanced mineral purity to satisfy hyper-hygienic demands and sleek modern interior languages."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Premium Quartz Surface?"
      aboutText={`Quartz is an advanced engineering marvel combining roughly 93% crushed natural quartz aggregates with elite polymer resins and structural pigments.\n\nSynthesized under immense vacuum pressure and thermal setting matrices, it transcends the physical limitations of natural quarries. This builds a surface completely free of structural fault lines, erratic deviations, and microscopic pore networks, creating the ultimate medium for luxury kitchen counter spaces, seamless commercial surfaces, and custom modern paneling.`}
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

export default Quartz;