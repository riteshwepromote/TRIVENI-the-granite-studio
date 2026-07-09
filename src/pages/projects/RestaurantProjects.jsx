import Projects from "../../components/Projects";

const recentProjects = [
  {
    id: 1,
    title: "Oven Fresh",
    location: "Phase 7, Mohali",
    material: "Black Granite & Quartz",
    image:
      "https://imgs.search.brave.com/TxmzoJNzSc-9BUWBw-nWwzarNVo1qA7fqJ85px0MRAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y2hhbmRpZ2FyaC9o/My8wMTcycHgxNzIu/eDE3Mi4yMTA3MDgx/ODA2MTcuaTVoMy9j/YXRhbG9ndWUvb3Zl/bi1mcmVzaC1jaGFu/ZGlnYXJoLXNlY3Rv/ci03Yy1jaGFuZGln/YXJoLWJha2VyaWVz/LWNhZWRwbHpkMDIu/anBnP3c9Mzg0MCZx/PTc1",
  },
  {
    id: 2,
    title: "Chillis",
    location: "Chandigarh",
    material: "Italian Marble",
    image:
      "https://imgs.search.brave.com/nP5csJabMz6kPFGvamhNwrxP9CJqtSXJBFKE7Jkxipo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdDRs/OWJ4MzF0aW9oLmNs/b3VkZnJvbnQubmV0/L2VhenltZWRpYS9y/ZXN0YXVyYW50LzY5/NDQxMS9yZXN0YXVy/YW50MDIwMjQwNDAy/MDQxNTUwLmpwZz93/aWR0aD04MTgmaGVp/Z2h0PTQ1MCZtb2Rl/PWZpdD9mb3JtYXQ9/YXV0byZxdWFsaXR5/PTgw",
  },
  {
    id: 3,
    title: "Madras mustard",
    location: "Sector 29",
    material: "Leather Finish Granite",
    image:
      "https://imgs.search.brave.com/b4P1vWGmJN0ISD9fUxWpFh6dhnwpyNbkUcE-NDKKHE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvZ3VyZ2Fvbi93/OC8wMTFweHgxMS54/eDExLjI0MTIxMzEy/MjQ1OS54NHc4L2Nh/dGFsb2d1ZS9tdXN0/YXJkLW1hZHJhcy1k/bGYtY3liZXItY2l0/eS1ndXJnYW9uLXNv/dXRoLWluZGlhbi1y/ZXN0YXVyYW50cy10/NW14aG4waDNoLTI1/MC5qcGc_dz0zODQw/JnE9NzU",
  },
  {
    id: 4,
    title: "Malleshwaram",
    location: "Bangalore",
    material: "Natural Quartzite",
    image:
      "https://imgs.search.brave.com/xLF2Y62BQx2tvX5iXGUbOqQtIFQcIsEirC2JOLAwI-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvdXRsby5jb20v/YXNzZXRzL2ltYWdl/cy9tZXJjaGFudF9p/bWFnZXMvbWVyY2hh/bnQtMTEyODQ0LTY2/YWM3NTk0MWM0MGQu/anBn",
  },
  {
    id: 5,
    title: "Sindhi Sweets",
    location: "Chandigarh",
    material: "Black Galaxy Granite",
    image:
      "https://imgs.search.brave.com/70N8NtfXOV9x2A08rkC4p9kR1t5O5DGSnSwqF-HejNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGFwcHljb3cu/bmV0L3ZlbnVlcy81/MDAvODEvNDgvaGNt/cDgxNDg3XzE4MjQy/NC5qcGVn",
  },
  {
    id: 6,
    title: "Social",
    location: "Cyber City",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/yyojMXN6JVg90thSRb-KXHwyuvmy2eKcfQc5UU9Pjwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZW5k/b3IubXNjaGlycHku/Y29tL2J1c2luZXNz/X3Bob3RvLzE2Mzk4/NzYxNjAuanBn",
  },
  {
    id: 7,
    title: "Studio xo",
    location: "Cyber City",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/dx_QIBuDt0pELt7fxXApO9SLUdJYWflgK3S1rNm8ZjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvZ3VyZ2Fvbi9x/MS8wMTFweHgxMS54/eDExLjI0MDMyOTEy/NTM1OS5lOXExL2Nh/dGFsb2d1ZS9zdHVk/aW8teG8tYmFyLWd1/cmdhb24tc2VjdG9y/LTg2LWd1cmdhb24t/bG91bmdlLWJhcnMt/bWNlOW12YXBlci5q/cGc_dz0zODQwJnE9/NzU",
  },
  {
    id: 8,
    title: "Double shot coffee roasters",
    location: "Cyber City",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/FWugOvJVJdYdAxl332Qyf4Fg-ZjElS09TwFZYAz_Ld4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YW1yaXRzYXIvbjMv/MDE4M3B4MTgzLngx/ODMuMjMwODIxMjEw/NDM4LnI1bjMvY2F0/YWxvZ3VlL2RvdWJs/ZXNob3QtY29mZmVl/LXJvYXN0ZXJzLWph/bmRpYWxhLWFtcml0/c2FyLWNvZmZlZS1z/aG9wcy03Tlk2T1Zt/Y2h5LmpwZz93PTM4/NDAmcT03NQ",
  },
  {
    id: 9,
    title: "Sagar Ratna",
    location: "Cyber City",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/C_noAuYwSdXaBZwzzMREmoiusWb05Az7lk0MHG0DrjE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y2hhbmRpZ2FyaC9o/MS8wMTcycHgxNzIu/eDE3Mi4xNTA1MDkx/MDE3MjkuaDdoMS9j/YXRhbG9ndWUvc2Fn/YXItcmF0bmEtY2hh/bmRpZ2FyaC1zZWN0/b3ItMzVjLWNoYW5k/aWdhcmgtc291dGgt/aW5kaWFuLXJlc3Rh/dXJhbnRzLW1nOWtz/dDJqZ3guanBnP3c9/Mzg0MCZxPTc1",
  },
  {
    id: 10,
    title: "Swagat",
    location: "Cyber City",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/DfolmoN2M9RtP3j4Dn373vtWbZt5GUSPa8BiwAbZcoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvdXRsby5jb20v/YXNzZXRzL2ltYWdl/cy9tZXJjaGFudF9p/bWFnZXMvbWVyY2hh/bnQtMTQwMTQ4LTVk/NGJkZGY0MTU3MjIu/anBn",
  },
  {
    id: 11,
    title: "Cafe beige",
    location: "Sector 7, Chandigarh",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/3CN89WH9UDKLkhzXL9LIR5C2rjSSTaxSCOVcL72SbhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvdXRsby5jb20v/YXNzZXRzL2ltYWdl/cy9tZXJjaGFudF9p/bWFnZXMvbWVyY2hh/bnQtMTYxNTM0LTYz/Zjc0M2NlOTdkODku/anBn",
  },
  {
    id: 12,
    title: "Awadhi central",
    location: "Sector 8, Chandigarh",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/zh0VYxwpYDsSLF-BcGeoqRZlkdCTovOv7ONpHqSFLp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS53ZWRtZWdvb2Qu/Y29tL3Jlc2l6ZWQv/NDUwWC91cGxvYWRz/L21lbWJlci8yNjA5/MTE1MC8xNzYxNjMw/NTc0X1NjcmVlbnNo/b3RfNjcucG5n",
  },
  {
    id: 13,
    title: "Hira sweets",
    location: "Sector 67, Mohali",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/hNUsLwN9VjbG0t46zACqwXTRCUgfm_Gpy3qs8dFVJnQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTMvOTAvYzcvMTMv/YnVyZ2VyLWtpbmct/bGF4bWktbmFnYXIu/anBn",
  },
  {
    id: 14,
    title: "Melia",
    location: "Sector 8C, Chandigarh",
    material: "Premium Quartz",
    image:
      "https://imgs.search.brave.com/yPz3bxVG_D6DyJtRt_K5nEW3BbIbX3oZ1GAkY_4191I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbWF6/aW5nYXJjaGl0ZWN0/dXJlLmNvbS9zdG9y/YWdlLzEwMDAwLzAx/LW1lbGlhYS1yZXN0/YXVyYW50LWNoYW5k/aWdhcmgtbG9vcC1k/ZXNpZ24tc3R1ZGlv/LmpwZw",
  },
  
  
];

const galleryImages = Array(20).fill(
  "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
);

export default function RestaurantProjects() {
  return (
    <Projects
      title="Restaurant & Café Projects"
      description="Premium hospitality spaces designed to create unforgettable dining experiences through exceptional stone craftsmanship."
      heroImage="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
      heroLocation="Hospitality & Dining Spaces"
      heroMaterial="Premium Granite & Quartz"
      stats={[
        { number: "250+", label: "Hospitality Projects" },
        { number: "25+", label: "Years Experience" },
        { number: "100+", label: "Restaurants Completed" },
        { number: "100%", label: "Client Satisfaction" },
      ]}
      featuredProject={{
  title: "Studio XO",
  location: "Mohali",
  material: "Imported Marble, Black Granite & Quartz",
  area: "3,200 sq.ft",
  year: "2025",
  story:
    "A contemporary dining and nightlife destination in Mohali, crafted with luxurious stone interiors. The project features bespoke marble tabletops, black granite bar counters, quartz service stations, statement wall cladding, and durable flooring that seamlessly blends elegance with high-performance functionality.",
  image:
    "https://imgs.search.brave.com/8NngPzlFNehWVW4JBRH-iN5DMy4GTRQktxWDAkIcxhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVudWVsb29rLmNv/bS91cGxvYWRzL3Nw/YWNlXzM2ODU1LzE2/OTM5MTU4NzNfNTk1/eDQwMC5wbmc",
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
            "Beautiful execution with exceptional durability for everyday operations.",
          client: "Restaurant Founder",
        },
      ]}
    />
  );
}