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

// Premium architectural Unsplash placeholders showcasing smooth, matte limestone configurations
const DUMMY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
  
  // High-fidelity natural sediment textures for the collection matrix
  kotaBlue: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
  indianaBuff: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600",
  jaisalmerYellow: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
  molyvosGrey: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
  tandurYellow: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600",
  creamBelge: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
  
  // Stone finishes
  velvetHoned: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=600",
  tumbled: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600",
  sandblasted: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
  
  // Premium commercial and residential projects using Limestone
  project1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
  project2: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
};

const Limestone = () => {
  const applicationsData = [
    { name: "Premium Flooring", icon: <Grid size={20} /> },
    { name: "Minimalist Cladding", icon: <Home size={20} /> },
    { name: "Monolithic Facades", icon: <Maximize2 size={20} /> },
    { name: "Bespoke Fireplaces", icon: <Layers size={20} /> },
    { name: "Executive Boardrooms", icon: <Building2 size={20} /> },
    { name: "Floating Staircases", icon: <Layers3 size={20} /> },
  ];

  const collectionData = [
    { name: "Kota Blue", origin: "Calibrated Hard-Slab Matrix", image: DUMMY_IMAGES.kotaBlue },
    { name: "Indiana Buff", origin: "Classic Fine-Grained Oolitic", image: DUMMY_IMAGES.indianaBuff },
    { name: "Jaisalmer Yellow", origin: "Warm Bio-Clastic Ochre", image: DUMMY_IMAGES.jaisalmerYellow },
    { name: "Molyvos Grey", origin: "Deep Contemporary Basal Tones", image: DUMMY_IMAGES.molyvosGrey },
    { name: "Tandur Yellow", origin: "Sleek Earthy Homogeneous Cut", image: DUMMY_IMAGES.tandurYellow },
    { name: "Cream Beige", origin: "Imported Premium Velvet Blend", image: DUMMY_IMAGES.creamBelge },
  ];

  const featuresData = [
    { title: "Sleek Uniformity", description: "Provides an ultra-consistent textural canvas, allowing structural geometries and lighting vectors to take absolute center stage." },
    { title: "Thermal Performance", description: "High internal density handles heat dissemination effectively, staying cool to the touch under sustained harsh climate loads." },
    { title: "Velvety Tactility", description: "Offers a soft, sophisticated matte profile that eliminates glare and feels completely premium underfoot." },
    { title: "Natural Agelessness", description: "Composed of prehistoric marine sedimentations, it develops a highly refined, graceful organic patina over centuries." },
    { title: "Bespoke Versatility", description: "Its smooth structural composition is ideal for intricate custom edge carving, dynamic detailing, and architectural masonry work." },
    { title: "Eco-Friendly Footprint", description: "Sourced as an unadulterated natural structural unit, yielding minimal processing emissions and maximum sustainability." },
  ];

  const finishesData = [
    { name: "Velvet Honed Finish", description: "A super-smooth, non-reflective matte finish that heavily accentuates structural consistency and clean line work.", image: DUMMY_IMAGES.velvetHoned },
    { name: "Tumbled Antique Finish", description: "Distressed edge detailing combined with a worn face matrix to convey an immediate sense of heritage and historical permanence.", image: DUMMY_IMAGES.tumbled },
    { name: "Sandblasted Finish", description: "A finely micro-textured slip-resistant profile that preserves soft pastel hues across high-exposure exterior coordinates.", image: DUMMY_IMAGES.sandblasted },
  ];

  const whyChooseData = [
    "Curated Homogeneous Sedimentary Batches",
    "Precision Diamond-Wire Dimension Controls",
    "Sourced from Elite Sustainable Geological Strata",
    "Uncompromising Resistance to Weather Vectors",
    "Favored by Leading High-End Minimalist Architects"
  ];

  const showcaseData = [
    {
      title: "The Zenith Museum of Contemporary Art",
      location: "New Delhi, DL",
      scope: "Sub-structural tensioned exterior wall cladding over a continuous 32,000 Sq. Ft. surface area.",
      image: DUMMY_IMAGES.project1
    },
    {
      title: "The Alila Courtyard Pavilion",
      location: "Udaipur, RJ",
      scope: "Seamless monolithic interior flooring layout interacting beautifully with open-air terrace paving vectors.",
      image: DUMMY_IMAGES.project2
    }
  ];

  return (
    <ProductsPage
      title="Limestone"
      subtitle="Subtle Textures. Refined Minimalist Luxury."
      heroDescription="Explore pristine, low-glare limestone slabs optimized to enrich timeless interior configurations, monumental facades, and elite outdoor landscapes."
      heroImage={DUMMY_IMAGES.hero}
      aboutTitle="What is Limestone Architectural Surface?"
      aboutText={`Limestone is an elite sedimentary stone formed over millennia within calm marine environments, celebrated globally for its soft pastel palettes and clean textual uniformity.\n\nComposed chiefly of premium calcite crystals, it bypasses the heavy patterns of marble and granite to champion pure architectural form. Its exceptional thermal properties and velvety matte quality make it the definitive medium for luxury minimalist structures, expansive internal flooring matrices, and smooth external facade wraps.`}
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

export default Limestone;