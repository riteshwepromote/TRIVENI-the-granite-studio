import React from "react";
import ProductsPage from "../ProductsPage";
import {
  Layers,
  Grid,
  Home,
  Maximize2,
  Building2,
  Layers3,
} from "lucide-react";

// Hand-picked, high-resolution photography of real natural granite, slab yards, and architectural installations
const GRANITE_IMAGES = {
  // Hero: High-end luxury kitchen island featuring authentic dark polished granite
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  
  // About: Real granite slab processing yard / architectural stonework
  about: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",

  // Authentic Granite Varieties & Slabs
  blackGalaxy: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  alaskaWhite: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800",
  steelGrey: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800",
  riverWhite: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
  tanBrown: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800",
  absoluteBlack: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",

  // Real Surface Finishes
  polished: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
  honed: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  leathered: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800",
};


const Granite = () => {
  const applicationsData = [
    { name: "Kitchen Countertops & Islands", icon: <Layers size={20} /> },
    { name: "High-Traffic Flooring & Steps", icon: <Grid size={20} /> },
    { name: "Interior Wall Cladding", icon: <Home size={20} /> },
    { name: "Ventilated Exterior Facades", icon: <Maximize2 size={20} /> },
    { name: "Commercial Lobbies & Receptions", icon: <Building2 size={20} /> },
    { name: "Bathroom Vanities & Thresholds", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    {
      name: "Black Galaxy",
      origin: "Chimakurthy, Andhra Pradesh",
      image: GRANITE_IMAGES.blackGalaxy,
    },
    {
      name: "Alaska White",
      origin: "Jalore, Rajasthan",
      image: GRANITE_IMAGES.alaskaWhite,
    },
    {
      name: "Steel Grey",
      origin: "Khammam, Telangana",
      image: GRANITE_IMAGES.steelGrey,
    },
    {
      name: "River White",
      origin: "Srikakulam, Andhra Pradesh",
      image: GRANITE_IMAGES.riverWhite,
    },
    {
      name: "Tan Brown",
      origin: "Karimnagar, Telangana",
      image: GRANITE_IMAGES.tanBrown,
    },
    {
      name: "Absolute Black",
      origin: "Kanakapura, Karnataka",
      image: GRANITE_IMAGES.absoluteBlack,
    },
  ];

  const featuresData = [
    {
      title: "Mohs Hardness Grade 6–7",
      description:
        "Composition of natural quartz and feldspar delivers superior structural rigidity, preventing chips and deep abrasions.",
    },
    {
      title: "Thermal Resistance up to 250°C",
      description:
        "Naturally withstands direct thermal contact from cookware, hearths, and exterior heat exposure without scorching.",
    },
    {
      title: "High Scratch & Impact Tolerant",
      description:
        "Durable crystal matrix resists daily mechanical wear from heavy kitchen utensils, footwear, and commercial utility.",
    },
    {
      title: "Low Water Absorption (<0.2%)",
      description:
        "Dense igneous structure impedes liquid penetration, guarding against oil discoloration and organic moisture damage.",
    },
    {
      title: "Authentic Geological Veining",
      description:
        "Extracted directly from natural block reserves—ensuring every gangsaw slab displays one-of-a-kind mineral patterning.",
    },
    {
      title: "Low Maintenance & Hygiene Safe",
      description:
        "Non-porous surface seal allows effortless cleaning with pH-neutral solutions, maintaining long-term gloss retention.",
    },
  ];

  const finishesData = [
    {
      name: "Mirror Polished Finish",
      description:
        "Achieved using sequential diamond abrasive heads, resulting in a reflective, high-gloss surface that brings out color depth and crystal clarity.",
      image: GRANITE_IMAGES.polished,
    },
    {
      name: "Honed Matte Finish",
      description:
        "A smooth, non-reflective satin finish crafted to provide modern minimalist aesthetics and enhanced slip resistance for flooring.",
      image: GRANITE_IMAGES.honed,
    },
    {
      name: "Leathered / Textured Finish",
      description:
        "Diamond-tipped brushes contour the stone's natural grain to produce a tactile, pebble-like texture that resists smudges and fingerprints.",
      image: GRANITE_IMAGES.leathered,
    },
  ];

  const whyChooseData = [
    "Rigorous block selection directly from primary quarry concessions",
    "Precision gangsaw cutting ensuring uniform 18mm & 20mm slab thickness",
    "Resin-treated surface reinforcement for maximum structural integrity",
    "Calibrated edge profiling and custom CNC fabrication options",
    "Complete batch consistency for large commercial and residential projects",
  ];

  return (
    <ProductsPage
      title="Granite"
      subtitle="Natural Strength & Timeless Elegance"
      heroDescription="Explore premium natural granite slabs curated for kitchen countertops, durable flooring, and high-traffic commercial spaces."
      heroImage={GRANITE_IMAGES.hero}
      aboutTitle="Engineered by Earth: The Definitive Stone for Architectural Endurance"
      aboutText={`Granite is an intrusive igneous rock formed through the slow crystallization of magma deep beneath the Earth's crust over millions of years. Composed primarily of natural quartz, feldspar, and mica, it stands as one of the hardest natural structural materials known to architecture.\n\nAt Triveni Studio, our granite slabs are sourced from renowned quarries, cut with state-of-the-art gangsaw machinery, and hand-inspected for batch uniformity. Whether specified for high-use kitchen islands, heavy-footfall commercial flooring, or weather-exposed exterior facades, granite delivers uncompromised longevity.`}
      aboutImage={GRANITE_IMAGES.about}
      applications={applicationsData}
      gallery={collectionData}
      features={featuresData}
      finishes={finishesData}
      whyChoose={whyChooseData}
    />
  );
};

export default Granite;
