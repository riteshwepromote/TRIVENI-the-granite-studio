import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import HomePage from "./pages/HomePage";
import Projects from "./pages/ProjectsSection";
import Collections from "./pages/Collections";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import AboutUs from "./pages/AboutUs";
import Legacy from "./pages/Legacy";
import CorporateProjects from "./pages/projects/CorporateProjects";
import ResidentialProjects from "./pages/projects/ResidentialProjects";
import RestaurantProjects from "./pages/projects/RestaurantProjects";
import ScrollToTop from "./components/ScrollToTop";
import Granite from "./pages/products/Granit";
import Sandstone from "./pages/products/Sandstone";
import Limestone from "./pages/products/Limestone";
import Quartz from "./pages/products/Quartz";
import Onyx from "./pages/products/Onyx";
import WoodenForring from "./pages/products/WoodenForring";
import Theromine from "./pages/products/Thermopine";
import IClad from "./pages/products/ICLAD";
import WPCPandelling from "./pages/products/WPCpendeling";

function App() {
  return (
    /* 1. min-h-screen + flex flex-col keeps your base layout structure fluid.
      2. overflow-x-clip handles extreme elements bleeding horizontally on mobile internal 
         sub-pages WITHOUT blocking vertical layout scroll tracking calculations on your main canvas.
    */
    <div className="relative min-h-screen w-full flex flex-col overflow-x-clip bg-[#0a0a0a]">
      {/* Global Navigation Layout */}
      <Navbar />
      
      {/* Scroll Restoration Coordinates Sync */}
      <ScrollToTop />

      {/* Main structural body remains completely wide open vertically so that 
        your 450vh Canvas viewport scrolling container works exactly as intended.
      */}
      <main className="flex-1 w-full flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/legacy" element={<Legacy />} />
          
          {/* Project Portfolio Segments */}
          <Route path="/corporate-projects" element={<CorporateProjects />} />
          <Route path="/restaurants" element={<RestaurantProjects />} />
          <Route path="/residential" element={<ResidentialProjects />} />

          {/* Premium Architectural Product Collections */}
          <Route path="/granite" element={<Granite />} />
          <Route path="/sandstone" element={<Sandstone />} />
          <Route path="/limestone" element={<Limestone />} />
          <Route path="/quartz" element={<Quartz />} />
          <Route path="/onyx" element={<Onyx />} />
          <Route path="/wooden-flooring" element={<WoodenForring />} />
          <Route path="/thermopine" element={<Theromine />} />
          <Route path="/i-clad" element={<IClad />} />
          <Route path="/wpc-panelling" element={<WPCPandelling />} />
        </Routes>
      </main>

      {/* Persistent Base Layout Footer */}
      <Footer />
    </div>
  );
}

export default App;