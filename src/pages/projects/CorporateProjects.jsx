import Projects from "../../components/Projects";
import featuredmg from "../../assets/featuredP.png";

const recentProjects = [
  {
    id: 1,
    title: "DMRC",
    location: "Delhi",
    material: "Sadar Ali Granite, Rain Forest Brown & Exotic White",
    image:
      "https://media.istockphoto.com/id/1287044261/photo/train-arrives-at-metro-station-of-delhi-metro-system.jpg?s=612x612&w=0&k=20&c=jbmqu3pCu9ew1MtRPnGsmlmAY3tEl81N-fkhgp07whQ=",
  },
  {
    id: 2,
    title: "Apollo Hospital",
    location: "Mohali",
    material: "Italian Marble & Anti-Skid Granite",
    image:
      "https://imgs.search.brave.com/uCwcV5VVu79IWe-2Napam_lAtW0zqu_BkBfZ_WQhzpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbS5y/ZWRpZmYuY29tL21v/bmV5LzIwMjMvYXVn/LzI0YXBvbGxvLWhv/c3BpdGFscy5qcGc_/ZnI9bW9uZXk",
  },
  {
    id: 3,
    title: "Netsmartz IT Building",
    location: "Mohali",
    material: "Flamed Granite & Premium Quartz",
    image:
      "https://imgs.search.brave.com/tnlYlus6O8UwTzEnDSF7VnxjAmlZDzZ7T1Np48_EFxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb3Jt/c2Rlc2lnbi5pbi9w/dWJsaWMvc3RvcmFn/ZS9wcm9kdWN0L21h/aW4vMDIwMjIzMDUz/NzUxLTAxLmpwZw",
  },
  {
    id: 4,
    title: "Aerovista",
    location: "Mohali",
    material: "Imported Marble & Natural Quartzite",
    image:
      "https://imgs.search.brave.com/rZ5JRUYFR0oQo-cYjSg5UnHZ9kHoPUFcDH30ov_NIYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9teXBy/b3BlcnRpZXMuY28u/aW4vVGZlM0ZlODlI/bi93cC1jb250ZW50/L3VwbG9hZHMvRHVw/bGV4LWluLWFlcm8t/Y2l0eS1tb2hhbGkt/YWVyb3Zpc3RhLmpw/Zw",
  },
  {
    id: 5,
    title: "Affinity",
    location: "Zirakpur",
    material: "Black Galaxy Granite & Quartz",
    image:
      "https://imgs.search.brave.com/l82_yM8thHioYSutWftDHmoVixdfNAJYI4JLcd50loo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9zYXMtbmFn/YXItbW9oYWxpLXB1/bmphYi1pbmRpYS0y/NjBudy0yNDUxNjI0/OTQzLmpwZw",
  },
  {
    id: 6,
    title: "Amyra",
    location: "Mohali",
    material: "Italian Marble & Premium Quartz",
    image:
      "https://imgs.search.brave.com/SLLrukvDTqEq_eA9H1eXifvl7gBPzf5lKLi1KsjP_kw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keWlt/ZzIucmVhbGVzdGF0/ZWluZGlhLmNvbS9w/cm9qX2ltYWdlcy9w/cm9qZWN0MzYyMDQv/cHJval9oZWFkZXJf/aW1hZ2UtMzYyMDQt/NzcweDQwMC5qcGc",
  },
  {
    id: 7,
    title: "Ramada Encore Hotel",
    location: "Zirakpur",
    material: "Imported Marble, Granite & Quartz",
    image:
      "https://imgs.search.brave.com/t8_qfI4Jyaw7RTfWzf_N2T5FDlqfc90Aqnpjq6rfK_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yMmlt/Z2h0bGFrLm1tdGNk/bi5jb20vcjItbW10/LWh0bC1pbWFnZS9o/dGwtaW1ncy8yMDI1/MDUwNzE0MTYyMzcx/NTEtNWFlYjkyMmQt/NTAwNi00OTdkLWIx/NGUtZmQyYTQ4ZDZj/YzI1LmpwZz8mb3V0/cHV0LXF1YWxpdHk9/NzUmZG93bnNpemU9/NTIwOjM1MCZjcm9w/PTUyMDozNTA7Miww/Jm91dHB1dC1mb3Jt/YXQ9anBnJmRvd25z/aXplPTQ4MDozMzYm/Y3JvcD00ODA6MzM2",
  },
  {
    id: 8,
    title: "Pride Inn Hotel",
    location: "Zirakpur",
    material: "Luxury Marble & Engineered Quartz",
    image:
      "https://imgs.search.brave.com/w3HSl_TS0fvyfIMLRlMcxZHTKVvSDjYIT2pI88_XdzY/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5o/b3RlbHByaWRlLmlu/L3RlbXAvc2xpLTIu/anBn",
  },
  {
    id: 9,
    title: "Vista Land",
    location: "Yamunanagar, Haryana",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/SzcJ1-UsNy4c345FvLxXEqs4YeRAul-ozsDpxMV3zMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y2hhbmRpZ2FyaC9h/NC8wMTcycHgxNzIu/eDE3Mi4xODAzMjEw/MjE5MDYuYzNhNC9j/YXRhbG9ndWUvdmlz/dGEtdG93ZXItbW9o/YWxpLWNoYW5kaWdh/cmgtZXN0YXRlLWFn/ZW50cy1mb3ItcmVz/aWRlbnRpYWwtcmVu/dGFsLWNqdHB4bzFl/NWEuanBnP3c9Mzg0/MCZxPTc1",
  },
  {
    id: 10,
    title: "Hotel Court Regalia",
    location: "Yamunanagar, Haryana",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/fgZaIxQf_oSIW_eZ8jbRacvELrC75zveabnJt_qG6GM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC13ZXN0ZXJuLWNv/dXJ0LWNoYW5kaWdh/cmguc2hpbWxhaG90/ZWxzLm5ldC9kYXRh/L0ltZ3MvMTkyMHgx/MDgwdy83ODQ0Lzc4/NDQzMC83ODQ0MzA1/MzgvaW1nLWhvdGVs/LXdlc3Rlcm4tY291/cnQtY2hhbmRpZ2Fy/aC0yMi5KUEVH",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80&w=1200",

  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",

  "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",

  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200",
];

export default function RestaurantCafeProjects() {
  return (
    <Projects
      title="Corporate Projects"
      description="Modern corporate spaces crafted with premium granite, marble, and quartz solutions that combine durability, elegance, and functionality for offices, business parks, and commercial developments."
      heroImage="https://images.trvl-media.com/lodging/117000000/116920000/116913500/116913487/6acd1229.jpg?impolicy=resizecrop&rw=1200&ra=fit"
      heroLocation="Netsmartz IT Park, Mohali"
      heroMaterial="Premium Granite, Italian Marble & Engineered Quartz"
      stats={[
        { number: "150+", label: "Corporate Projects" },
        { number: "35+", label: "Years Experience" },
        { number: "50+", label: "Commercial Spaces" },
        { number: "100%", label: "Client Satisfaction" },
      ]}
      featuredProject={{
        title: "NSP METRO STATION, DELHI",
        location: "Netaji Subhash Place, Delhi",
        material: "Sadar Ali Granite, Rain Forest Brown & Exotic White",
        area: "18,500 sq.ft",
        year: "2025",
        story:
          "A high-traffic metro infrastructure project featuring premium granite flooring, staircase cladding, platform finishes, wall panels, and durable architectural stone solutions designed to withstand heavy daily commuter movement while maintaining long-term aesthetics and structural performance.",
        image: featuredmg,
      }}
      galleryImages={galleryImages}
      recentProjects={recentProjects}
      testimonials={[
        {
          quote:
            "The stone finishes transformed our café into a premium destination.",
          client: "Café Owner",
        },
        {
          quote:
            "Beautiful execution with excellent durability for daily operations.",
          client: "Restaurant Founder",
        },
      ]}
    />
  );
}
