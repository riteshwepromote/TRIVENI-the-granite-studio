// import React from "react";
// import ProductsPage from "../ProductsPage";
// import { 
//   Layers, 
//   Grid, 
//   Home, 
//   Maximize2, 
//   Building2, 
//   FlipToBack 
// } from "lucide-react";

// // Asset Sourcing Placeholders (Swap with your local asset paths)
// import graniteHeroImg from "../assets/granite-hero.jpg";
// import graniteAboutImg from "../assets/granite-about.jpg";
// import blackGalaxyImg from "../assets/textures/black-galaxy.jpg";
// import alaskaWhiteImg from "../assets/textures/alaska-white.jpg";
// import steelGreyImg from "../assets/textures/steel-grey.jpg";
// import riverWhiteImg from "../assets/textures/river-white.jpg";
// import tanBrownImg from "../assets/textures/tan-brown.jpg";
// import absoluteBlackImg from "../assets/textures/absolute-black.jpg";
// import finishPolishedImg from "../assets/finishes/polished.jpg";
// import finishHonedImg from "../assets/finishes/honed.jpg";
// import finishLeatherImg from "../assets/finishes/leather.jpg";
// import proj1Img from "../assets/projects/showcase-1.jpg";
// import proj2Img from "../assets/projects/showcase-2.jpg";

// const Granite = () => {
//   const applicationsData = [
//     { name: "Kitchen Countertops", icon: <Layers size={20} /> },
//     { name: "Premium Flooring", icon: <Grid size={20} /> },
//     { name: "Wall Cladding", icon: <Home size={20} /> },
//     { name: "Exterior Facades", icon: <Maximize2 size={20} /> },
//     { name: "Commercial Spaces", icon: <Building2 size={20} /> },
//     { name: "Luxury Staircases", icon: <FlipToBack size={20} /> },
//   ];

//   const collectionData = [
//     { name: "Black Galaxy", origin: "Premium Indian Quarry", image: blackGalaxyImg },
//     { name: "Alaska White", origin: "Imported Exotic Selection", image: alaskaWhiteImg },
//     { name: "Steel Grey", origin: "Classic Fine Grain", image: steelGreyImg },
//     { name: "River White", origin: "Smooth Linear Veining", image: riverWhiteImg },
//     { name: "Tan Brown", origin: "Deep Rich Crystalline", image: tanBrownImg },
//     { name: "Absolute Black", origin: "Pure Deep Matrix", image: absoluteBlackImg },
//   ];

//   const featuresData = [
//     { title: "Highly Durable", description: "Vitreous crystalline assembly capable of resisting immense load vectors without shear stress structural fractures." },
//     { title: "Heat Resistant", description: "Formed under igneous conditions, it preserves surface stability under elevated temperatures without thermal expansion damage." },
//     { title: "Scratch Resistant", description: "Registers at 6–7 on the Mohs Hardness scale. Defies friction markings from steel utility tooling safely." },
//     { title: "Low Maintenance", description: "Ultra-compact surface porosities prevent fluid stagnation stains when calibrated with our custom stone sealants." },
//     { title: "Natural Beauty", description: "Irregular crystal clusters guarantee that no two matching slabs will ever yield duplicate patterns." },
//     { title: "Long Lifespan", description: "Maintains surface integrity for generations, defying environmental wear in both interior and exterior environments." },
//   ];

//   const finishesData = [
//     { name: "Polished Finishes", description: "A high-gloss specular presentation reflecting 90%+ light values to deeply highlight natural color depth.", image: finishPolishedImg },
//     { name: "Honed Finishes", description: "Satin, zero-glare layout surface providing smooth tactical values with slip-resistant friction metrics.", image: finishHonedImg },
//     { name: "Leather Finishes", description: "Textured contour lines tracking softer stone pockets to render an organic leather-like feel.", image: finishLeatherImg },
//   ];

//   const whyChooseData = [
//     "Curated Premium Materials",
//     "Expert Structural Consultation",
//     "Professional Installation Support",
//     "Wide Product Selection Matrix",
//     "Trusted by Elite Architects & Designers"
//   ];

//   const showcaseData = [
//     {
//       title: "The Apex Corporate Headquarters",
//       location: "Mumbai, MH",
//       scope: "Exterior facade clad configuration spanning 45,000 Sq. Ft. absolute absolute matching matrix.",
//       image: proj1Img
//     },
//     {
//       title: "The Oberoi Residential Estate",
//       location: "Alibaug",
//       scope: "Custom monolithic kitchen culinary counters combined with matching bookmatched flooring arrays.",
//       image: proj2Img
//     }
//   ];

//   return (
//     <ProductsPage
//       title="Granite"
//       subtitle="Timeless Strength. Natural Elegance."
//       heroDescription="Explore premium engineered and natural granite collections built to satisfy demanding residential layouts and high-traffic commercial spaces."
//       heroImage={graniteHeroImg}
//       aboutTitle="What is Granite Stone Surface?"
//       aboutText={`Granite is a premium coarse-grained plutonic igneous stone renowned globally for structural density, natural elegance, and design durability.\n\nFormed deep under Earth's crust through magma crystallization, it bridges the gap between technical endurance and organic fine art. This renders it perfect for luxury kitchen counters, high-traffic commercial floors, heavy impact facade systems, and custom internal architecture.`}
//       aboutImage={graniteAboutImg}
//       applications={applicationsData}
//       gallery={collectionData}
//       features={featuresData}
//       finishes={finishesData}
//       whyChoose={whyChooseData}
//       showcaseProjects={showcaseData}
//     />
//   );
// };

// export default Granite;



import React from "react";
import ProductsPage from "../ProductsPage";
import { 
  Layers, 
  Grid, 
  Home, 
  Maximize2, 
  Building2, 
  Layers3 // Changed from FlipToBack to prevent version compilation crashes
} from "lucide-react";

// Premium Unsplash placeholders tailored for a luxury architectural brand
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity marble/granite textures for the product grid
  blackGalaxy: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  alaskaWhite: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
  steelGrey: "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&q=80&w=600",
  riverWhite: "https://images.unsplash.com/photo-1635012684880-acc3c43ffd55?auto=format&fit=crop&q=80&w=600",
  tanBrown: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600",
  absoluteBlack: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  
  // Stone finishes
  polished: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
  honed: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  leather: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
  
  // Premium commercial and residential projects
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
};

const Granite = () => {
  const applicationsData = [
    { name: "Kitchen Countertops", icon: <Layers size={20} /> },
    { name: "Premium Flooring", icon: <Grid size={20} /> },
    { name: "Wall Cladding", icon: <Home size={20} /> },
    { name: "Exterior Facades", icon: <Maximize2 size={20} /> },
    { name: "Commercial Spaces", icon: <Building2 size={20} /> },
    { name: "Luxury Staircases", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Black Galaxy", origin: "Premium Indian Quarry", image: DUMMY_IMAGES.blackGalaxy },
    { name: "Alaska White", origin: "Imported Exotic Selection", image: DUMMY_IMAGES.alaskaWhite },
    { name: "Steel Grey", origin: "Classic Fine Grain", image: DUMMY_IMAGES.steelGrey },
    { name: "River White", origin: "Smooth Linear Veining", image: DUMMY_IMAGES.riverWhite },
    { name: "Tan Brown", origin: "Deep Rich Crystalline", image: DUMMY_IMAGES.tanBrown },
    { name: "Absolute Black", origin: "Pure Deep Matrix", image: DUMMY_IMAGES.absoluteBlack },
  ];

  const featuresData = [
    { title: "Highly Durable", description: "Vitreous crystalline assembly capable of resisting immense load vectors without shear stress structural fractures." },
    { title: "Heat Resistant", description: "Formed under igneous conditions, it preserves surface stability under elevated temperatures without thermal expansion damage." },
    { title: "Scratch Resistant", description: "Registers at 6–7 on the Mohs Hardness scale. Defies friction markings from steel utility tooling safely." },
    { title: "Low Maintenance", description: "Ultra-compact surface porosities prevent fluid stagnation stains when calibrated with our custom stone sealants." },
    { title: "Natural Beauty", description: "Irregular crystal clusters guarantee that no two matching slabs will ever yield duplicate patterns." },
    { title: "Long Lifespan", description: "Maintains surface integrity for generations, defying environmental wear in both interior and exterior environments." },
  ];

  const finishesData = [
    { name: "Polished Finishes", description: "A high-gloss specular presentation reflecting 90%+ light values to deeply highlight natural color depth.", image: DUMMY_IMAGES.polished },
    { name: "Honed Finishes", description: "Satin, zero-glare layout surface providing smooth tactical values with slip-resistant friction metrics.", image: DUMMY_IMAGES.honed },
    { name: "Leather Finishes", description: "Textured contour lines tracking softer stone pockets to render an organic leather-like feel.", image: DUMMY_IMAGES.leather },
  ];

  const whyChooseData = [
    "Curated Premium Materials",
    "Expert Structural Consultation",
    "Professional Installation Support",
    "Wide Product Selection Matrix",
    "Trusted by Elite Architects & Designers"
  ];

  const showcaseData = [
    {
      title: "The Apex Corporate Headquarters",
      location: "Mumbai, MH",
      scope: "Exterior facade clad configuration spanning 45,000 Sq. Ft. absolute absolute matching matrix.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Oberoi Residential Estate",
      location: "Alibaug",
      scope: "Custom monolithic kitchen culinary counters combined with matching bookmatched flooring arrays.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Granite"
      subtitle="Timeless Strength. Natural Elegance."
      heroDescription="Explore premium engineered and natural granite collections built to satisfy demanding residential layouts and high-traffic commercial spaces."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Granite Stone Surface?"
      aboutText={`Granite is a premium coarse-grained plutonic igneous stone renowned globally for structural density, natural elegance, and design durability.\n\nFormed deep under Earth's crust through magma crystallization, it bridges the gap between technical endurance and organic fine art. This renders it perfect for luxury kitchen counters, high-traffic commercial floors, heavy impact facade systems, and custom internal architecture.`}
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

export default Granite;