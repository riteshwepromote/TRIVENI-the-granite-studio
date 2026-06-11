import HeroSection from "../sections/heroPageSections/HeroSection";
import LegacySection from "../sections/heroPageSections/LegacySection";
import CollectionsSection from "../sections/heroPageSections/CollectionsSection";
import FeaturedCollections from "../sections/heroPageSections/FeaturedCollections";
import BlogSection from "../sections/heroPageSections/BlogSection";
import ContactCTA from "../sections/heroPageSections/Contactcta";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <CollectionsSection />
      <FeaturedCollections />
      <BlogSection />
      <ContactCTA />
    </>
  );
};

export default HomePage;
