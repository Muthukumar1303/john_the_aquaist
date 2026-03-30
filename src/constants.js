import fish1 from './assets/fish1.jpeg';
import fish2 from './assets/fish2.jpeg';
import fish3 from './assets/fish3.jpeg';

export const COMPANY_NAME = "Aqua Elara";
export const COMPANY_NAME_STYLED = {
  first: "AQUA",
  second: "ELARA"
};
export const COMPANY_FULL_NAME = "Aqua Elara Exports Inc.";

export const CONTACT_DETAILS = {
  email: "exports@aquaelara.com",
  phone: "+1 (555) 123-4567",
  address: "123 Aquatic Way, Ocean City, CA 90210",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=123+Aquatic+Way,+Ocean+City,+CA+90210"
};

export const navLinks = [
  { id: 1, href: '#home', label: 'Home' },
  { id: 2, href: '#services', label: 'Services' },
  { id: 3, href: '#products', label: 'Our Fish' },
  { id: 4, href: '#contact', label: 'Inquiry' },
];

export const serviceList = [
  {
    id: 1,
    icon: "✈️",
    title: "Express Logistics",
    description: "Direct door-to-door delivery within 48-72 hours via our specialized temperature-controlled air freight network.",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Live Arrival",
    description: "Our proprietary oxygenation and packing techniques ensure your fish arrive healthy and vibrant, every single time.",
  },
  {
    id: 3,
    icon: "🌿",
    title: "Ethical Sourcing",
    description: "We partner only with certified sustainable breeders and collectors to protect delicate aquatic ecosystems.",
  },
];

export const statsList = [
  { id: 1, value: "50+", label: "Countries Served" },
  { id: 2, value: "1200+", label: "Species Available" },
  { id: 3, value: "99.8%", label: "Success Rate" },
  { id: 4, value: "24/7", label: "Expert Support" },
];

export const productList = [
  {
    id: 1,
    image: fish1,
    name: "Blue Diamond Discus",
    description: "Grade A+ vibrant blue tropical beauty.",
  },
  {
    id: 2,
    image: fish2,
    name: "Premium Kohaku Koi",
    description: "Select Japanese lineage Japanese Koi.",
  },
  {
    id: 3,
    image: fish3,
    name: "Royal Halfmoon Betta",
    description: "Exquisite fins and majestic colors.",
  },
];

export const socialLinks = [
  { id: 1, label: "LinkedIn", url: "#" },
  { id: 2, label: "Instagram", url: "#" },
  { id: 3, label: "Facebook", url: "#" },
];
