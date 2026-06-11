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

// Premium Unsplash placeholders showcasing high-end WPC louvre lines and fluted interior setups
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity fluted textures and timber tones for the product grid
  teakFlute: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
  walnutGroove: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  charcoalLouvre: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  oakStripe: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
  smokeGrey: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=600",
  cedarShield: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600",
  
  // Premium surface treatments
  coExtrusion: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  matteEmbossed: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  brushedLinear: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  
  // Elite architectural landmarks
  project1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const WPCPandelling = () => {
  const applicationsData = [
    { name: "Fluted Accent Walls", icon: <Layers size={20} /> },
    { name: "TV Console Backdrops", icon: <Home size={20} /> },
    { name: "Commercial Pillar Wraps", icon: <Building2 size={20} /> },
    { name: "Exterior Soffit Ceilings", icon: <Maximize2 size={20} /> },
    { name: "Premium Bed Backrest Panels", icon: <Grid size={20} /> },
    { name: "Corridor & Foyer Cladding", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Classic Teak Flute", origin: "Premium Co-Extruded Polymer", image: DUMMY_IMAGES.teakFlute },
    { name: "Deep Walnut Groove", origin: "High-Density Composite Core", image: DUMMY_IMAGES.walnutGroove },
    { name: "Charcoal Matte Louvre", origin: "Modern Minimalist Stripe Matrix", image: DUMMY_IMAGES.charcoalLouvre },
    { name: "Natural Oak Stripe", origin: "Light Linear Timber Grain", image: DUMMY_IMAGES.oakStripe },
    { name: "Urban Smoke Grey", origin: "Sleek Industrial Monochromatic", image: DUMMY_IMAGES.smokeGrey },
    { name: "Western Cedar Shield", origin: "Weather-Resistant Outer Envelope", image: DUMMY_IMAGES.cedarShield },
  ];

  const featuresData = [
    { title: "Termite & Pest Proof", description: "Engineered synthetic polymer matrix entirely removes organic wood sugars, preventing burrowing pests or fungal lifecycle anchors." },
    { title: "100% Water Resistant", description: "Zero-porosity core shielding stops dynamic water logging, preventing core rot, structural swelling, or splitting liabilities." },
    { title: "Interlocking Tongue & Groove", description: "Precision engineered clip-fit click systems hide anchor tracking screws while accelerating wall face alignments." },
    { title: "Zero Post-Maintenance", description: "Pre-finished surface skins remove requirements for periodic structural sanding, clear varnishing, or chemical oiling routines." },
    { title: "Eco-Friendly Footprint", description: "Forged cleanly using recycled wood fibers combined with high-grade reclaimed polymers to support green architecture loops." },
    { title: "Color Fast Shielding", description: "Advanced UV stabilizers infused deep within outer composite shells block early sun fading vectors in internal spaces." },
  ];

  const finishesData = [
    { name: "360° Co-Extruded Shield", description: "An advanced protective layer wrapped entirely around the panel core to guard against stains, impacts, and heavy scrapes.", image: DUMMY_IMAGES.coExtrusion },
    { name: "Matte Deep-Embossed", description: "A non-glare finish presenting clear architectural timber lines matching natural luxury wood elements.", image: DUMMY_IMAGES.matteEmbossed },
    { name: "Brushed Linear Grain", description: "Slight directional micro-grooves that add premium texture and hand-feel depth to wide flat panel rows.", image: DUMMY_IMAGES.brushedLinear },
  ];

  const whyChooseData = [
    "High-Density Recycled Composite Core Frameworks",
    "Rapid System Assembly over Standard GI or Wood Pannels",
    "Class B Fire Retardant Material Classifications",
    "Completely Free from Volatile Organic Compounds (VOCs)",
    "Preferred Option for Fast Premium Commercial Transitions"
  ];

  const showcaseData = [
    {
      title: "The Grand Meridian Corporate Lounge",
      location: "Gurugram, HR",
      scope: "Continuous floor-to-ceiling charcoal fluted panel wall configuration expanding cleanly over 8,500 Sq. Ft.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Zenith Premium Penthouse",
      location: "Mumbai, MH",
      scope: "Custom walnut-grain TV backdrop arrays integrated smoothly with concealed LED lighting runs.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="WPC Paneling"
      subtitle="Engineered Fluted Lines. Modern Wall Horizons."
      heroDescription="Explore premium wood plastic composite louvres and wall panels balancing real wood warmth with advanced long-lasting structural polymer protections."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Premium WPC Paneling?"
      aboutText={`WPC (Wood Plastic Composite) paneling represents a breakthrough configuration combining natural wood flour with tough thermoplastic resins through a hot extrusion matrix.\n\nThis high-performance mix yields an ultra-stable wall panel line presenting the raw visual character of hardwood while defending against moisture rot, insect attacks, and warping failures. Optimized with a modern fluted layout profile, it serves as an excellent option for bold feature walls, office reception structures, and fast, premium interior makeovers.`}
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

export default WPCPandelling;