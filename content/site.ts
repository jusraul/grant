export const siteConfig = {
  name: "Lower Withlacoochee River Keeper",
  shortName: "LWRK",
  tagline: "Field-Based Stewardship for Florida's Nature Coast",
  description:
    "The Lower Withlacoochee River Keeper is an environmental nonprofit focused on documented river cleanups, volunteer engagement, estuary stewardship, and pilot water monitoring along Florida's Nature Coast.",
  url: "https://lwrk.org",
  contact: {
    email: "lowerwithlacoocheeriverkeeper@gmail.com",
    phone: "(352) 464-4244",
    address: "One Tide Over Island\nYankeetown, Florida 34439",
  },
  social: {
    // PLACEHOLDER: Update with real social media links
    facebook: "#",
    instagram: "#",
  },
  board: [
    { name: "Kenneth Raulerson", role: "CEO" },
    { name: "Carl Zervis", role: "President" },
    { name: "Laurence Neace", role: "Secretary" },
    { name: "Carla Chaffin", role: "Treasurer" },
    { name: "Justin Raulerson", role: "Operations Director" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Pilot Monitoring", href: "/pilot-monitoring" },
    { label: "Partners", href: "/partners" },
    { label: "Get Involved", href: "/get-involved" },
  ],
  sponsorTiers: [
    {
      name: "Field Supporter",
      amount: 250,
      description:
        "Cover supplies for a single cleanup event — bags, gloves, signage, and volunteer coordination materials.",
    },
    {
      name: "Cleanup Sponsor",
      amount: 1000,
      description:
        "Fund a full documented cleanup operation including equipment, volunteer logistics, debris hauling, and post-event reporting.",
    },
    {
      name: "Pilot Sponsor",
      amount: 5000,
      description:
        "Support the development of our pilot water monitoring program — equipment acquisition, protocol development, and early baseline data collection.",
    },
  ],
  programs: [
    {
      title: "River Cleanups",
      description:
        "Organized, documented debris removal events along the Lower Withlacoochee River and surrounding waterways. Every cleanup includes sign-in sheets, photo documentation, and debris tallies.",
      href: "/programs",
    },
    {
      title: "Estuary Stewardship",
      description:
        "Focused care for the sensitive transition zones where the Withlacoochee meets the Gulf. We coordinate access-based stewardship with attention to marsh habitat and tidal debris patterns.",
      href: "/programs",
    },
    {
      title: "Pilot Water Monitoring",
      description:
        "An early-stage initiative to establish baseline water quality observations along key points of the Lower Withlacoochee. This program is in pilot phase and does not yet produce regulatory-grade data.",
      href: "/pilot-monitoring",
    },
    {
      title: "Volunteer Engagement",
      description:
        "We recruit, train, and coordinate volunteers for hands-on field work. This is real outdoor labor — not symbolic participation. Volunteers are the backbone of every operation we run.",
      href: "/get-involved",
    },
  ],
};
