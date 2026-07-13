import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import footerImg from "../assets/footerImg.png";

// usecasses images
import kichenUsecase from "../assets/usecasses/kitchenUseCase.jpeg";
import staircaseUsecase from "../assets/usecasses/staircaseUsecase.jpeg";
import wallCladding from "../assets/usecasses/wallCladding.jpeg";
import washroomUsecase from "../assets/usecasses/washroomUsecase.jpeg";
import flooringUsecase from "../assets/usecasses/flooringUsecase.jpeg";
import commercialUsecase from "../assets/usecasses/commercialUsecase.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({
  title = "Premium Collections",
  description = "Explore our showcase of exceptionally crafted spaces utilizing premium granite, marble, and quartz.",
  heroImage = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  heroLocation = "Sohna Road, Gurugram",
  heroMaterial = "Titanium Gold Granite",
  stats = [
    { number: "1,200+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "100%", label: "Happy Clients" },
    { number: "300+", label: "Material Varieties" },
  ],
  featuredProject = {
    title: "The Grand Meridian Estate",
    location: "DLF Phase 5, Gurugram",
    material: "Premium Statuario Marble & Black Marquis Granite",
    area: "6,500 sq. ft.",
    year: "2025",
    story:
      "A complete luxury residential mapping balancing absolute stone durability with stunning natural patterns. From zero-tolerance bookmatched drawing-room floors to precision-cut seamless kitchen countertops, this space highlights structural execution built for permanent family legacy.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
  },
  galleryImages = [],
  recentProjects = [],
  applications = [
    {
      name: "Kitchen Countertops",
      image: kichenUsecase,
      description:
        "Engineered for high-impact durability and heat resistance, custom-tailored into seamless, zero-tolerance surfaces.",
      details:
        "Recommended Materials: Quartz, Premium Granite. Features: Stain-proof sealing, seamless joint matching.",
    },
    {
      name: "Staircases",
      image: staircaseUsecase,
      description:
        "Imccably molded stone slabs with profile-milled edges creating a grand architectural transit space.",
      details:
        "Recommended Materials: Imported Marble, Hard Granite. Features: Anti-skid groove lines, bullnose/chamfer edge profiles.",
    },
    {
      name: "Wall Cladding",
      image: wallCladding,
      description:
        "Large-format bookmatched book facings that transform standard structural partitions into high-end art statements.",
      details:
        "Recommended Materials: Italian Marble, Onyx. Features: Mechanical dry-fixing, integrated backlit options.",
    },
    {
      name: "Flooring",
      image: flooringUsecase,
      description:
        "Flawless, mirror-polished expansive floor spreads designed to endure heavy footfalls while preserving premium gloss reflection.",
      details:
        "Recommended Materials: Premium Marble, Granite. Features: Precision diamond polishing, high-uniformity layout mapping.",
    },
    {
      name: "Bathrooms",
      image: washroomUsecase,
      description:
        "Moisture-resistant luxury mappings covering vanity counters, anti-slip shower trays, and floor-to-ceiling ambient stone tiling.",
      details:
        "Recommended Materials: Quartzite, Marble. Features: Specialized water-repellent treatments, custom vanity edge cutting.",
    },
    {
      name: "Commercial Spaces",
      image: commercialUsecase,
      description:
        "High-grade premium stone infrastructure optimized for executive reception lounges, workspaces, and heavy-use corporate lobbies.",
      details:
        "Recommended Materials: Industrial Granite, Engineered Quartz. Features: High traffic durability, scratch-resistant finishes.",
    },
  ],
  testimonials = [
    {
      quote:
        "The precision on our quartzite countertops is masterful. Triveni transformed our kitchen layout entirely into the centerpiece of our home.",
      client: "Rajesh K., DLF Farms",
    },
    {
      quote:
        "Uncompromising material quality. They managed delivery timelines perfectly and worked hand-in-hand with our local design coordinators.",
      client: "Meera Sharma, Nirvana Country",
    },
  ],
}) {
  const mainRef = useRef(null);
  const featuredSectionRef = useRef(null);
  const lenisRef = useRef(null);

  // State to hold the actively viewed project inside the modal popup
  const [activeProject, setActiveProject] = useState(null);
  // State to hold the actively viewed application showcase inside the modal popup
  const [activeApp, setActiveApp] = useState(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    // 2. Clear & Graceful GSAP Animations
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          ".hero-img-container",
          { scale: 1 },
          { scale: 1.08, duration: 2.5, ease: "power2.out" },
        )
        .fromTo(
          ".hero-fade-element",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=2.0",
        );

      gsap.to(".hero-bg-parallax", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-trigger",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const statsItems = gsap.utils.toArray(".stat-item-anim");
      statsItems.forEach((stat) => {
        const counter = stat.querySelector(".stat-counter-number");
        if (counter) {
          const rawVal = counter.innerText;
          const numVal = parseInt(rawVal.replace(/[^0-9]/g, ""), 10) || 0;
          const suffix = rawVal.replace(/[0-9]/g, "");
          const obj = { value: 0 };

          gsap
            .timeline({
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            })
            .fromTo(
              stat,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            )
            .to(
              obj,
              {
                value: numVal,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: () => {
                  counter.innerText =
                    Math.floor(obj.value).toLocaleString() + suffix;
                },
              },
              "-=0.6",
            );
        }
      });

      gsap.fromTo(
        ".featured-img-mask",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".featured-section-trigger",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(".featured-img-scale", {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".featured-section-trigger",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".featured-content-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".featured-section-trigger",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".gallery-item-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: { amount: 0.8 },
          scrollTrigger: {
            trigger: ".gallery-section-trigger",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".recent-card-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".recent-section-trigger",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".app-card-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".app-section-trigger",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".process-item-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".process-section-trigger",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".testimonial-card-anim",
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".testimonial-section-trigger",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(".banner-parallax-target", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".banner-parallax-trigger",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.addEventListener("refresh", () => lenis.resize());
      ScrollTrigger.refresh();
    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, [galleryImages, recentProjects]);

  // Manage body scroll locking when modals open/close to keep Lenis calculations aligned
  useEffect(() => {
    if (activeProject || activeApp) {
      document.body.style.overflow = "hidden";
      if (lenisRef.current) lenisRef.current.stop();
    } else {
      document.body.style.overflow = "";
      if (lenisRef.current) lenisRef.current.start();
    }
  }, [activeProject, activeApp]);

  const scrollToFeatured = () => {
    if (lenisRef.current && featuredSectionRef.current) {
      lenisRef.current.scrollTo(featuredSectionRef.current, {
        offset: -40,
        duration: 1.5,
      });
    }
  };

  const accurateGallery =
    galleryImages.length >= 20
      ? galleryImages
      : [
          ...galleryImages,
          ...Array(24 - galleryImages.length).fill(
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
          ),
        ];

  return (
    <div
      ref={mainRef}
      className="bg-[#F8F5F2] text-[#2D2A28] font-['Inter'] antialiased selection:bg-[#B88272] selection:text-white min-h-screen overflow-x-hidden relative"
    >
      {/* 1. HERO SECTION */}
      <section className="hero-trigger relative h-[90vh] w-full flex flex-col justify-between items-center px-6 py-8 overflow-hidden">
        <div className="hero-img-container absolute inset-0 w-full h-full z-0 overflow-hidden scale-110">
          <img
            src={heroImage}
            alt={title}
            className="hero-bg-parallax w-full h-full object-cover filter brightness-[0.45]"
          />
        </div>

        <header className="hero-fade-element z-10 w-full flex justify-between items-baseline max-w-7xl mx-auto border-b border-white/10 pb-4">
          <span className="text-[11px] tracking-[0.4em] font-medium text-white uppercase">
            TRIVENI GRANITE STORE
          </span>
          <span className="text-xs text-white/60 font-['Cormorant_Garamond'] italic">
            Established Craftsmanship
          </span>
        </header>

        <div className="z-10 text-center max-w-4xl px-4 my-auto space-y-6">
          <h1 className="hero-fade-element text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-wide font-['Bodoni_Moda'] text-white leading-tight">
            {title}
          </h1>
          <p className="hero-fade-element text-white/80 max-w-2xl mx-auto font-['Cormorant_Garamond'] text-lg md:text-xl italic font-light leading-relaxed">
            {description}
          </p>
          <div className="hero-fade-element pt-4">
            <button
              onClick={scrollToFeatured}
              className="bg-[#B88272] text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-white hover:text-[#2D2A28] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              View Featured Project
            </button>
          </div>
        </div>

        <div className="hero-fade-element z-10 w-full max-w-7xl mx-auto flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-white/50 border-t border-white/10 pt-4">
          <span>Location: {heroLocation}</span>
          <span>Material: {heroMaterial}</span>
        </div>
      </section>

      {/* 2. PROJECT STATISTICS */}
      <section className="py-16 bg-white border-b border-[#E5DDD6]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item-anim space-y-1">
              <h3 className="stat-counter-number text-3xl md:text-5xl font-light font-['Bodoni_Moda'] text-[#B88272]">
                {stat.number}
              </h3>
              <p className="uppercase tracking-widest text-[10px] font-semibold text-[#A89A92]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROJECT HIGHLIGHT */}
      <section
        ref={featuredSectionRef}
        className="featured-section-trigger py-24 max-w-7xl mx-auto px-6"
      >
        <div className="featured-content-anim text-center md:text-left mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B88272] uppercase block mb-2">
            THE PINNACLE WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-['Bodoni_Moda'] uppercase text-[#2D2A28]">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="featured-img-mask lg:col-span-7 overflow-hidden bg-stone-100 shadow-md group">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="featured-img-scale w-full h-[350px] sm:h-[500px] object-cover transition-transform duration-500 ease-out"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="featured-content-anim text-2xl md:text-4xl font-light font-['Bodoni_Moda'] text-[#2D2A28] uppercase">
              {featuredProject.title}
            </h3>

            <p className="featured-content-anim text-sm text-[#5A5552] leading-relaxed font-light">
              {featuredProject.story}
            </p>

            <div className="featured-content-anim grid grid-cols-2 gap-4 pt-4 border-t border-[#E5DDD6] font-mono text-xs text-[#5A5552]">
              <div>
                <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                  LOCATION
                </span>
                <span>{featuredProject.location}</span>
              </div>
              <div>
                <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                  TOTAL COVERAGE
                </span>
                <span>{featuredProject.area}</span>
              </div>
              <div>
                <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                  MATERIAL SLABS
                </span>
                <span className="font-sans font-medium text-[#2D2A28]">
                  {featuredProject.material}
                </span>
              </div>
              <div>
                <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                  COMPLETION YEAR
                </span>
                <span>{featuredProject.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE PROJECT GALLERY */}
      <section className="gallery-section-trigger py-24 bg-[#EFEAE4]">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B88272] uppercase block mb-2">
            VISUAL ARCHIVE
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-['Bodoni_Moda'] uppercase text-[#2D2A28]">
            Completed Projects Showcase
          </h2>
          <p className="text-sm font-light text-[#5A5552] mt-2 max-w-md mx-auto">
            Browse through real architectural settings showcasing pristine cuts
            and high-grade natural variations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {accurateGallery.map((imgSrc, idx) => {
            const blockHeights = [
              "h-64",
              "h-96",
              "h-80",
              "h-72",
              "h-96",
              "h-64",
            ];
            const chosenHeight = blockHeights[idx % blockHeights.length];

            return (
              <div
                key={idx}
                className={`gallery-item-anim break-inside-avoid overflow-hidden bg-stone-300 relative group shadow-sm ${chosenHeight}`}
              >
                <img
                  src={imgSrc}
                  alt={`Triveni Client Space Elevation ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-mono text-[9px] tracking-widest uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    TRIVENI COMMITTED EXECUTION // NO. 0{idx + 1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. RECENT PROJECTS GRID */}
      <section className="recent-section-trigger py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B88272] uppercase block mb-2">
            RECENT RELEASES
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-['Bodoni_Moda'] uppercase text-[#2D2A28]">
            Executed Residences & Commercial Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="recent-card-anim bg-white border border-[#E5DDD6] overflow-hidden flex flex-col justify-between group shadow-xs hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out"
            >
              <div className="overflow-hidden h-72 w-full bg-stone-200 pointer-events-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#B88272] uppercase block">
                    {project.location}
                  </span>
                  <h3 className="text-xl font-light font-['Bodoni_Moda'] text-[#2D2A28] uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A89A92] font-mono uppercase mt-1">
                    Material:{" "}
                    <span className="text-[#5A5552] font-sans font-medium normal-case">
                      {project.material}
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project); // Mounts item payload directly into view state
                  }}
                  className="w-full text-center border border-[#2D2A28] text-[#2D2A28] text-[10px] tracking-widest font-bold uppercase py-3.5 hover:bg-[#2D2A28] hover:text-white transition-colors duration-300 mt-4 relative z-20 cursor-pointer"
                >
                  View Project Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. APPLICATION SHOWCASE */}
      <section className="app-section-trigger py-24 bg-[#F2EDE8] border-t border-b border-[#E5DDD6]">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B88272] uppercase block mb-2">
            VERSATILITY IN PLACEMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-['Bodoni_Moda'] uppercase text-[#2D2A28]">
            Application Formats
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <div
              key={i}
              onClick={() => setActiveApp(app)}
              className="app-card-anim relative h-80 group overflow-hidden bg-stone-900 shadow-sm cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-cover filter brightness-[0.65] transition-transform duration-1000 ease-out group-hover:scale-107"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl md:text-2xl font-light font-['Bodoni_Moda'] text-white uppercase tracking-wide group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                  {app.name}
                </h3>
                <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-2 group-hover:translate-y-0">
                  Explore Format Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INSTALLATION PROCESS */}
      <section className="process-section-trigger py-24 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B88272] uppercase block mb-2">
            PREDICTABLE LIFECYCLE
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-['Bodoni_Moda'] uppercase text-[#2D2A28]">
            The Path to Permanent Elegance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              name: "Material Selection",
              desc: "Browse full slabs down to raw variations inside our primary interactive showyards.",
            },
            {
              step: "02",
              name: "Cutting & Finishing",
              desc: "Custom industrial block trimming done down to zero-tolerance specifications for a perfect fit.",
            },
            {
              step: "03",
              name: "Safe Delivery",
              desc: "Insured heavy flatbed dispatch guaranteeing that raw sheets arrive completely undamaged.",
            },
            {
              step: "04",
              name: "On-Site Installation",
              desc: "Final joint locking and diamond polish treatments completed by master stone specialists.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="process-item-anim border-t border-[#E5DDD6] pt-6 flex flex-col justify-between h-44"
            >
              <div>
                <span className="text-[#B88272] text-2xl font-light font-['Bodoni_Moda'] block mb-2">
                  {item.step}
                </span>
                <h3 className="text-md font-semibold text-[#2D2A28] uppercase tracking-wide">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-[#5A5552] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIAL SECTION */}
      <section className="testimonial-section-trigger py-24 bg-white border-y border-[#E5DDD6]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B88272] uppercase block">
            VERIFIED EXPERIENCES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="testimonial-card-anim space-y-4 p-6 bg-[#F8F5F2] border-l-2 border-[#B88272]"
              >
                <p className="font-['Cormorant_Garamond'] text-lg md:text-xl italic text-[#2D2A28] leading-relaxed">
                  "{t.quote}"
                </p>
                <span className="block font-mono text-[10px] tracking-widest text-[#A89A92] uppercase">
                  — {t.client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FULL-WIDTH PARALLAX BANNER */}
      <section className="banner-parallax-trigger relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full scale-125 pointer-events-none">
          <img
            src={footerImg}
            alt="Luxury Stone Surface Structure"
            className="banner-parallax-target w-full h-full object-bottom-right filter brightness-[0.35]"
          />
        </div>
        <div className="banner-content-anim z-10 text-center max-w-3xl px-6 space-y-4"></div>
      </section>

      {/* ================= EDITORIAL DIALOG MODAL OVERLAY (PROJECTS) ================= */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-[#2D2A28]/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#F8F5F2] text-[#2D2A28] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#E5DDD6] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-[#2D2A28] hover:text-[#B88272] transition-colors z-50 p-2 bg-[#F8F5F2]/80 backdrop-blur-xs font-mono text-xs uppercase tracking-widest border border-[#E5DDD6]"
            >
              ✕ Close
            </button>

            <div className="md:w-1/2 min-h-[300px] md:h-auto relative bg-stone-200 overflow-hidden">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A28]/40 via-transparent pointer-events-none" />
            </div>

            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#B88272] uppercase block">
                  {activeProject.location || "Triveni Premium Execution"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-light font-['Bodoni_Moda'] uppercase tracking-wide leading-tight">
                  {activeProject.title}
                </h2>
                <hr className="border-[#E5DDD6] w-12" />
                <p className="text-sm font-light text-[#5A5552] leading-relaxed">
                  {activeProject.story ||
                    "A custom tailored architectural integration built with uncompromising material verification, custom sizing alignments, and a continuous high-gloss polished premium finish."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E5DDD6] font-mono text-xs text-[#5A5552]">
                <div>
                  <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                    MATERIAL ARCHIVE
                  </span>
                  <span className="font-sans font-medium text-[#2D2A28]">
                    {activeProject.material || "Premium Selection"}
                  </span>
                </div>
                <div>
                  <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                    SURFACE FINISH
                  </span>
                  <span>High Gloss Mirror Finish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDITORIAL DIALOG MODAL OVERLAY (APPLICATION SHOWCASE) ================= */}
      {activeApp && (
        <div
          className="fixed inset-0 bg-[#2D2A28]/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
          onClick={() => setActiveApp(null)}
        >
          <div
            className="bg-[#F8F5F2] text-[#2D2A28] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#E5DDD6] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveApp(null)}
              className="absolute top-4 right-4 text-[#2D2A28] hover:text-[#B88272] transition-colors z-50 p-2 bg-[#F8F5F2]/80 backdrop-blur-xs font-mono text-xs uppercase tracking-widest border border-[#E5DDD6]"
            >
              ✕ Close
            </button>

            <div className="md:w-1/2 min-h-[300px] md:h-auto relative bg-stone-200 overflow-hidden">
              <img
                src={activeApp.image}
                alt={activeApp.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A28]/40 via-transparent pointer-events-none" />
            </div>

            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#B88272] uppercase block">
                  Application Specification
                </span>
                <h2 className="text-2xl sm:text-4xl font-light font-['Bodoni_Moda'] uppercase tracking-wide leading-tight">
                  {activeApp.name}
                </h2>
                <hr className="border-[#E5DDD6] w-12" />
                <p className="text-sm font-light text-[#5A5552] leading-relaxed">
                  {activeApp.description ||
                    "Premium edge milling, structural back-reinforcements, and precision seamless cut-outs customized to fit exact space templates beautifully."}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5DDD6] font-mono text-xs text-[#5A5552] space-y-2">
                <div>
                  <span className="text-[#B88272] block font-bold text-[9px] tracking-widest uppercase mb-1">
                    ARCHITECTURAL GUIDELINES
                  </span>
                  <span className="font-sans font-normal text-[#2D2A28] text-xs block leading-relaxed">
                    {activeApp.details ||
                      "Custom execution tailored dynamically by our specialized internal stone artisans."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
