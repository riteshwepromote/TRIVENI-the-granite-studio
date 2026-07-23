import HeroSection from "../sections/heroPageSections/HeroSection";
import LegacySection from "../sections/heroPageSections/LegacySection";
import OurFounders from "../sections/heroPageSections/OurFounders.jsx";
import ContactCTA from "../sections/heroPageSections/Contactcta";
import TriveniShowcaseSection from "../sections/heroPageSections/TriveniShowcaseSection.jsx";
import TriveniWhySection from "../sections/heroPageSections/TriveniWhySection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <TriveniWhySection />
      <TriveniShowcaseSection />
      <OurFounders />

      <ContactCTA />
    </>
  );
};

export default HomePage;
