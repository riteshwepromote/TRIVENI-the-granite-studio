import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logoMain from "../assets/logoTriveni.png";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "#",
    dropdownItems: [
      { label: "About us", href: "/about" },
      { label: "Legacy", href: "/legacy" },
      { label: "Certifications and Approvals", href: "/certifications" },
    ],
  },
  {
    name: "Projects",
    href: "#",
    dropdownItems: [
      { label: "Corporate Projects", href: "/corporate-projects" },
      { label: "Restaurants/cafes", href: "/restaurants" },
      { label: "Residential", href: "/residential" },
    ],
  },
  {
    name: "Products",
    href: "#",
    isMegaMenu: true,
    megaSections: [
      {
        title: "Natural Stone",
        items: [
          { label: "Granite", href: "/granite" },
          { label: "Sandstone", href: "/sandstone" },
          { label: "Limestone", href: "/limestone" },
          { label: "Quartz", href: "/quartz" },
          { label: "Onyx", href: "/onyx" },
        ],
      },
      {
        title: "Flooring",
        items: [
          { label: "Wooden flooring", href: "/wooden-flooring" },
          { label: "Thermopine / Thermoash", href: "/thermopine" },
        ],
      },
      {
        title: "Cladding",
        items: [
          { label: "I clad", href: "/i-clad" },
          { label: "Wpc panelling / decking", href: "/wpc-panelling" },
        ],
      },
    ],
  },
  {
    name: "Tools",
    href: "#",
    dropdownItems: [
      { label: "Weight Calculator", href: "/weight-calculator" },
      { label: "Pressure Calculator", href: "/pressure-calculator" },
    ],
  },
  { name: "Downloads", href: "/downloads" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const desktopLinkClass =
  "flex items-center gap-1 whitespace-nowrap font-['AlbertSans'] text-[14px] font-normal leading-none tracking-normal text-[#141C3A] transition-colors hover:text-[#C67D55]";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Tracks the name of whichever navigation link is currently active under the cursor
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsVisible(false);
          setHoveredLink(null); // Clear all active hover states cleanly on scroll hide
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setHoveredLink(null);
  };

  const productsLink = NAV_LINKS.find((l) => l.isMegaMenu);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full bg-white shadow-md border-b border-[#E4D4C4]/40 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative mx-auto flex h-[72px] max-w-[1440px] items-center px-5 md:px-10 lg:px-[120px]">
        
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="flex shrink-0 items-center">
          <img src={logoMain} alt="Triveni" className="h-[104px] w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[28px] lg:flex">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative py-6"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `${desktopLinkClass} ${
                    isActive && link.href !== "#" ? "text-[#C67D55] font-medium" : ""
                  } ${hoveredLink === link.name ? "text-[#C67D55]" : ""}`
                }
              >
                {link.name}
                {(link.dropdownItems || link.isMegaMenu) && (
                  <ChevronDown
                    size={13}
                    strokeWidth={2}
                    className={`transition-transform duration-200 text-[#141C3A]/70 ${
                      hoveredLink === link.name ? "rotate-180 text-[#C67D55]" : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Standard Dropdowns (About, Projects, Tools) */}
              {link.dropdownItems && !link.isMegaMenu && (
                <div 
                  className={`absolute left-1/2 top-[56px] min-w-[250px] -translate-x-1/2 rounded-b-[10px] border border-[#E4D4C4] bg-white py-1.5 shadow-[0_16px_36px_rgba(20,28,58,0.09)] transition-all duration-200 ${
                    hoveredLink === link.name 
                      ? "visible opacity-100 translate-y-0 pointer-events-auto" 
                      : "invisible opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  {link.dropdownItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 font-['AlbertSans'] text-[13px] font-normal transition-colors hover:bg-[#F8F1E8] hover:text-[#C67D55] ${
                          isActive ? "text-[#C67D55] bg-[#F8F1E8] font-medium" : "text-[#141C3A]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Enquire Button */}
        <button className="ml-auto hidden h-[40px] min-w-[136px] items-center justify-center rounded-full bg-[#14204A] px-5 font-['AlbertSans'] text-[13px] font-medium text-white tracking-wide transition-colors hover:bg-[#1E2B5C] lg:flex shadow-sm">
          Enquire Now
        </button>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-[#141C3A] transition-colors hover:bg-[#F8F8F8] lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* PERFECTLY BOUNDED PRODUCTS MEGA MENU SURFACE PANEL */}
        {productsLink && (
          <div
            onMouseEnter={() => setHoveredLink("Products")}
            onMouseLeave={() => setHoveredLink(null)}
            className={`absolute left-5 right-5 md:left-10 md:right-10 lg:left-[120px] lg:right-[120px] top-[64px] rounded-b-xl border border-t-0 border-[#E4D4C4]/60 bg-white shadow-[0_20px_40px_rgba(20,28,58,0.1)] transition-all duration-300 ease-in-out hidden lg:block ${
              hoveredLink === "Products" 
                ? "opacity-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="p-8 grid grid-cols-12 gap-8">
              
              {/* Left Column Text System Links */}
              <div className="col-span-8 grid grid-cols-3 gap-6">
                {productsLink.megaSections.map((section) => (
                  <div key={section.title} className="flex flex-col">
                    <span className="font-['AlbertSans'] text-[11px] uppercase tracking-[0.15em] font-bold text-[#C67D55] mb-3 pb-1.5 border-b border-[#E4D4C4]/30">
                      {section.title}
                    </span>
                    <div className="flex flex-col gap-1">
                      {section.items.map((item) => (
                        <NavLink
                          key={item.label}
                          to={item.href}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `font-['AlbertSans'] text-[13px] font-normal py-1.5 transition-colors hover:text-[#C67D55] ${
                              isActive ? "text-[#C67D55] font-medium" : "text-[#141C3A]"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bounded Graphic Presentation block */}
              <div className="col-span-4 pl-6 border-l border-[#E4D4C4]/40 flex gap-4 items-center">
                <div className="relative h-[96px] w-[96px] rounded-lg overflow-hidden bg-gray-50 border border-[#E4D4C4]/30 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200" 
                    alt="Triveni Premium Materials Showcase" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-['AlbertSans'] text-[13px] font-semibold text-[#141C3A]">Signature Slabs</h4>
                  <p className="font-['AlbertSans'] text-[12px] text-[#555555] mt-0.5 leading-normal">
                    Explore hand-curated materials tailored for premium global configurations.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Options Dropdown */}
      <div
        className={`overflow-hidden bg-white shadow-[0_14px_32px_rgba(20,28,58,0.08)] transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[850px] border-t border-[#E4D4C4]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-5">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="border-b border-[#E4D4C4]/60 last:border-b-0">
              {(link.dropdownItems || link.isMegaMenu) ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown((prev) => (prev === link.name ? null : link.name))}
                    className="flex w-full items-center justify-between py-3.5 font-['AlbertSans'] text-[15px] font-normal text-[#141C3A]"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform text-[#141C3A]/60 ${
                        openDropdown === link.name ? "rotate-180 text-[#C67D55]" : ""
                      }`}
                    />
                  </button>

                  <div className={`grid transition-all duration-300 ${openDropdown === link.name ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="pb-3 pl-4 flex flex-col gap-0.5">
                        {link.isMegaMenu && link.megaSections
                          ? link.megaSections.flatMap((s) => s.items).map((item) => (
                              <NavLink
                                key={item.label}
                                to={item.href}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                  `block py-2 font-['AlbertSans'] text-[13px] font-normal ${
                                    isActive ? "text-[#C67D55] font-medium" : "text-[#4A4A4A]"
                                  }`
                                }
                              >
                                {item.label}
                              </NavLink>
                            ))
                          : link.dropdownItems?.map((item) => (
                              <NavLink
                                key={item.label}
                                to={item.href}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                  `block py-2 font-['AlbertSans'] text-[13px] font-normal ${
                                    isActive ? "text-[#C67D55] font-medium" : "text-[#4A4A4A]"
                                  }`
                                }
                              >
                                {item.label}
                              </NavLink>
                            ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-3.5 font-['AlbertSans'] text-[15px] font-normal ${
                      isActive ? "text-[#C67D55] font-medium" : "text-[#141C3A]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          <button className="mt-5 flex h-[44px] w-full items-center justify-center rounded-full bg-[#14204A] font-['AlbertSans'] text-[13px] font-medium text-white tracking-wide">
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;