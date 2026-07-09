import Projects from "../../components/Projects";

const recentProjects = [
  {
    id: 1,
    title: "Oven fresh",
    location: "Phase 7, Mohali",
    material: "Statuario Marble",
    image:
      "https://imgs.search.brave.com/TxmzoJNzSc-9BUWBw-nWwzarNVo1qA7fqJ85px0MRAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y2hhbmRpZ2FyaC9o/My8wMTcycHgxNzIu/eDE3Mi4yMTA3MDgx/ODA2MTcuaTVoMy9j/YXRhbG9ndWUvb3Zl/bi1mcmVzaC1jaGFu/ZGlnYXJoLXNlY3Rv/ci03Yy1jaGFuZGln/YXJoLWJha2VyaWVz/LWNhZWRwbHpkMDIu/anBnP3c9Mzg0MCZx/PTc1",
  },
  {
    id: 2,
    title: "Royal Courtyard Villa",
    location: "Nirvana Country",
    material: "Titanium Gold Granite",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Palm Residency",
    location: "South City",
    material: "Italian Marble",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 4,
    title: "Luxury Courtyard Home",
    location: "Sushant Lok",
    material: "Premium Quartz",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 5,
    title: "Modern Family Retreat",
    location: "Golf Course Extension",
    material: "Black Galaxy Granite",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 6,
    title: "Signature Penthouse",
    location: "DLF Camellias",
    material: "Imported Quartzite",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1600",
  },
];

const galleryImages = Array(20).fill(
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
);

export default function ResidentialProjects() {
  return (
    <Projects
      title="Residential Projects"
      description="Luxury residences crafted with timeless stone surfaces, elegant detailing, and enduring architectural beauty."
      heroImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
      heroLocation="Premium Residential Communities"
      heroMaterial="Statuario Marble"
      stats={[
        { number: "800+", label: "Homes Completed" },
        { number: "25+", label: "Years Experience" },
        { number: "300+", label: "Luxury Villas" },
        { number: "100%", label: "Client Satisfaction" },
      ]}
      featuredProject={{
        title: "The Grand Meridian Estate",
        location: "DLF Phase 5, Gurugram",
        material: "Premium Statuario Marble",
        area: "6,500 sq.ft",
        year: "2025",
        story:
          "A luxury family residence showcasing bookmatched marble flooring, bespoke staircases, designer bathrooms, and seamless kitchen surfaces built for generations.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
      }}
      galleryImages={galleryImages}
      recentProjects={recentProjects}
      testimonials={[
        {
          quote:
            "The craftsmanship and finishing transformed our dream home into reality.",
          client: "Villa Owner",
        },
        {
          quote:
            "Outstanding material quality and flawless installation throughout the project.",
          client: "Homeowner",
        },
      ]}
    />
  );
}