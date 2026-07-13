import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const Projects = lazy(() => import("./pages/ProjectsSection"));
const Collections = lazy(() => import("./pages/Collections"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Contact = lazy(() => import("./pages/Contact"));
const BookConsultation = lazy(() => import("./pages/BookConsultation"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Legacy = lazy(() => import("./pages/Legacy"));
const CorporateProjects = lazy(
  () => import("./pages/projects/CorporateProjects"),
);
const ResidentialProjects = lazy(
  () => import("./pages/projects/ResidentialProjects"),
);
const RestaurantProjects = lazy(
  () => import("./pages/projects/RestaurantProjects"),
);
const Granite = lazy(() => import("./pages/products/Granit"));
const Sandstone = lazy(() => import("./pages/products/Sandstone"));
const Limestone = lazy(() => import("./pages/products/Limestone"));
const Quartz = lazy(() => import("./pages/products/Quartz"));
const Onyx = lazy(() => import("./pages/products/Onyx"));
const WoodenForring = lazy(() => import("./pages/products/WoodenForring"));
const Theromine = lazy(() => import("./pages/products/Thermopine"));
const IClad = lazy(() => import("./pages/products/ICLAD"));
const WPCPandelling = lazy(() => import("./pages/products/WPCpendeling"));

const RouteFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center bg-[#0a0a0a] px-6 text-center">
    <div className="rounded-full border border-[#C67D55]/30 bg-[#141414] px-6 py-3 text-sm tracking-[0.25em] text-[#f5ede0]">
      Loading page...
    </div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-clip bg-[#0a0a0a]">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1 w-full flex flex-col">
        <ErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/legacy" element={<Legacy />} />

              <Route
                path="/corporate-projects"
                element={<CorporateProjects />}
              />
              <Route path="/restaurants" element={<RestaurantProjects />} />
              <Route path="/residential" element={<ResidentialProjects />} />

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
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;
