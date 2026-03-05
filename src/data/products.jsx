// ==========================================
// 1. IMAGE IMPORTS (Organized by Collection)
// ==========================================

// --- BRIDAL COLLECTIONS ---
import shahanaMain from "../assets/3pc/shahana.webp";
import shahana2 from "../assets/3pc/sha3.webp";
import shahana3 from "../assets/3pc/sha4.webp";

import rangeIshqMain from "../assets/3pc/RangeIshq.webp";
import rangeIshq2 from "../assets/3pc/rgisq3.webp";
import rangeIshq3 from "../assets/3pc/rgisq2.webp";

import pearlMain from "../assets/3pc/peral.webp";

import anarkaliMain from "../assets/3pc/ankarali.jpg";
import anarkali2 from "../assets/3pc/anar.webp";
import anarkali3 from "../assets/3pc/anarkali3.webp";

import tabeerMain from "../assets/3pc/Tabeer.webp";
import tabeer2 from "../assets/3pc/taber2.webp";
import tabeer3 from "../assets/3pc/taber3.webp";

// --- LUXURY PRET: AAIRA ---
import aairaNavy from "../assets/3pc/navy-blue.webp";
import aairaNavy2 from "../assets/3pc/aaira2.webp";
import aairaNavy3 from "../assets/3pc/aaira3.webp";

import aairaPink from "../assets/3pc/pink.webp";
import aairaPink2 from "../assets/3pc/pink2.webp";
import aairaPink3 from "../assets/3pc/pink3.webp";

import aairaOrange from "../assets/3pc/orange.webp";
import aairaOlive from "../assets/3pc/olive.webp";
import aairaOlive3 from "../assets/3pc/olive3.webp";

import aairaYellow from "../assets/3pc/yellow.webp";
import aairaLemon2 from "../assets/3pc/lemon2.webp";
import aairaLemon3 from "../assets/3pc/lemon3.webp";

import aairaMustard from "../assets/3pc/mustard.webp";
import aairaMustard2 from "../assets/3pc/mustard2.webp";
import aairaMustard3 from "../assets/3pc/mustard3.webp";

// --- LUXURY PRET: WANIA ---
import waniaBlackMain from "../assets/3pc/black-dress.webp";
import waniaBlack2 from "../assets/3pc/dark-suit.webp";
import waniaBlackBack from "../assets/3pc/back-black.webp";

import redElegance from "../assets/3pc/red-suit.webp";
import red2 from "../assets/3pc/hot2.webp";
import red3 from "../assets/3pc/hot3.webp";

import waniaMagenta from "../assets/3pc/megenta.webp";
import waniaMagenta2 from "../assets/3pc/magenta2.webp";
import waniaMagenta3 from "../assets/3pc/magenta3.webp";

import waniaZinc from "../assets/3pc/gresh-suit.webp";
import waniaZinc2 from "../assets/3pc/zinc_2.webp";
import waniaZinc3 from "../assets/3pc/zinc_3.webp";

import waniaNavy from "../assets/3pc/navia-blue.webp";
import waniaNavy2 from "../assets/3pc/blue2.webp";
import waniaNavy3 from "../assets/3pc/blue3.webp";

import waniaWhite from "../assets/3pc/Wania-white.webp";
import waniaWhite2 from "../assets/3pc/white2.webp";
import waniaWhite3 from "../assets/3pc/white3.webp";

// --- FORMAL COLLECTIONS ---
import gulaabMain from "../assets/3pc/Gulabo.webp";
import redTwo from "../assets/3pc/red-two.webp";
import redThree from "../assets/3pc/red-three.webp";

import dewMain from "../assets/3pc/dew.webp";
import dew11 from "../assets/3pc/dew11.webp";
import dew12 from "../assets/3pc/dew12.webp";

import diljaanMain from "../assets/3pc/diljaan.webp";
import diljaan55 from "../assets/3pc/diljaan55.webp";
import diljaan555 from "../assets/3pc/dilja555.jpg";

import shabMain from "../assets/3pc/shabewasel.webp";
import shab66 from "../assets/3pc/shabewasal66.webp";
import shab77 from "../assets/3pc/shabewasal77.webp";

import bahaarMain from "../assets/3pc/bahaar-one.webp";
import tangerineMain from "../assets/3pc/tangerine-one.webp";

import formalNavy from "../assets/formal1.webp";
import formalGrey from "../assets/formal2.jpg";
import formalBlack from "../assets/formal3.webp";

// ==========================================
// 2. MASTER PRODUCTS ARRAY
// ==========================================

export const products = [
  // --- BRIDAL: SHAHANA ---
  {
    id: 1,
    slug: "shahana-bridal-red",
    name: "SHAHANA",
    price: "450,000",
    category: "bridal",
    subcategory: "shahana",
    images: [shahanaMain, shahana2, shahana3],
    description: "A classic red bridal attire which more than an outfit is a piece of art. The intricate details and complex handwork techniques make this out super classic! Farshi lehnga choli with a dramatic back trail.",
    colors: ["Jet Black Gold"],
    shippingTime: "3 months",
    fabricDetails: { Lengha: "Korean Net", Choli: "Korean Net", Dupatta: "Korean Net" },
    customization: "For Customization please contact our Fashion consultant.",
  },

  // --- BRIDAL: RANG E ISHQ ---
  {
    id: 2,
    slug: "rang-e-ishq-velvet",
    name: "RANG E ISHQ",
    price: "385,000",
    category: "bridal",
    subcategory: "rang-e-ishq",
    images: [rangeIshqMain, rangeIshq2, rangeIshq3],
    description: "Velvet lehnga with Chiffon Choli and Dupatta is embellished with loaded Zardosi work using sparkly gold tilla, kora, dabka, crystals, and beads. Inspired from Mughal architecture.",
    colors: ["Crimson Red"],
    shippingTime: "3 to 4 Months",
    fabricDetails: { Lehnga: "Velvet", Choli: "Crinkle Chiffon", Dupatta: "Crinkle Chiffon" },
    customization: "For Customization please contact our Fashion consultant.",
  },

  // --- BRIDAL: PEARL MAJESTY ---
  {
    id: 3,
    slug: "pearl-majesty-white",
    name: "PEARL MAJESTY",
    price: "425,000",
    category: "bridal",
    subcategory: "pearl-majesty",
    images: [pearlMain],
    description: "The perfect blend of elegance and sophistication. Raw silk lehnga choli is hand embellished beautifully using pearls, beads, swarovskies, and kora dabka.",
    colors: ["Pearl White"],
    shippingTime: "3 months",
    fabricDetails: { Choli: "Pure Raw silk", Lehnga: "Pure Raw silk", Dupatta: "Organza" },
  },

  // --- BRIDAL: GENERAL ---
  {
    id: 4,
    slug: "anarkali-traditional-pishwas",
    name: "ANARKALI",
    price: "320,000",
    category: "bridal",
    subcategory: "shahana", // Grouped under sub-menu as per Navbar context
    images: [anarkaliMain, anarkali2, anarkali3],
    description: "A breathtaking traditional bridal attire. Korean net pishwas with detailed hand embroidery using marori work techniques blended with an atlas Lehnga.",
    colors: ["Gold Bottle Green"],
    shippingTime: "2-3 months",
    fabricDetails: { Pishwas: "Net", Lehnga: "Atlas", Dupatta: "Zari net" },
  },
  {
    id: 5,
    slug: "tabeer-exquisite-bridal",
    name: "TABEER",
    price: "350,000",
    category: "bridal",
    subcategory: "shahana",
    images: [tabeerMain, tabeer2, tabeer3],
    description: "Benson Gold gown and Lehnga with a Coral contrasting Dupatta. Beautiful architectural and calligraphic Motifs executed with extra detailing.",
    colors: ["Coral Gold"],
    shippingTime: "3 to 4 months",
    fabricDetails: { Gown: "Zari net", Lehnga: "Organza", Dupatta: "Net" },
  },

  // --- LUXURY PRET: AAIRA ---
  {
    id: 6,
    slug: "aaira-navy-blue",
    name: "AAIRA | Navy Blue",
    price: "42,500",
    category: "luxury-pret",
    subcategory: "aaira",
    images: [aairaNavy, aairaNavy2, aairaNavy3],
    description: "Elegance meets sophistication in this stunning Navy Blue ensemble. Perfect for festive casual wear.",
    colors: ["Navy Blue"],
    fabricDetails: { Gown: "Crinkle Chiffon", Shirt: "Grip Silk", Pants: "Korean Raw Silk" },
  },
  {
    id: 7,
    slug: "aaira-pink-festive",
    name: "AAIRA | Pink",
    price: "42,500",
    category: "luxury-pret",
    subcategory: "aaira",
    images: [aairaPink, aairaPink2, aairaPink3],
    description: "Fresh pink tones with intricate detailing. A symphony of elegance and modern flair.",
    colors: ["Pink"],
    fabricDetails: { Top: "Georgette", Sharara: "Georgette", Dupatta: "Organza" },
  },

  // --- LUXURY PRET: WANIA ---
  {
    id: 8,
    slug: "wania-jet-black-luxury",
    name: "Wania | Jet Black 2",
    price: "48,000",
    category: "luxury-pret",
    subcategory: "wania",
    images: [waniaBlackMain, waniaBlack2, waniaBlackBack],
    description: "Floor length maxi made of crinkle chiffon embellished in an A-symmetrical pattern using crystals and swarovski.",
    colors: ["Jet Black"],
    fabricDetails: { Gown: "Crinkle Chiffon", Shirt: "Grip Silk", Pants: "Korean Raw Silk" },
  },
  {
    id: 9,
    slug: "wania-off-white-elegance",
    name: "Wania | Off-white",
    price: "45,000",
    category: "luxury-pret",
    subcategory: "wania",
    images: [waniaWhite, waniaWhite2, waniaWhite3],
    description: "Elegance redefined in white with intricate floral embroidery and ruffled organza dupatta.",
    colors: ["Off White"],
    fabricDetails: { Shirt: "Organza", Pants: "Korean Raw Silk", Dupatta: "Organza" },
  },

  // --- FORMAL ---
  {
    id: 10,
    slug: "gulaab-maroon-applique",
    name: "GULAAB",
    price: "35,000",
    category: "formal",
    subcategory: "formal",
    images: [gulaabMain, redTwo, redThree],
    description: "Beautifully hand embellished using Applique work technique, Dabka, Kora, and Swarovski.",
    colors: ["Maroon"],
    fabricDetails: { Shirt: "Net", Dupatta: "Organza", Pants: "Raw silk" },
  },
  {
    id: 11,
    slug: "dew-ethnic-pishwas",
    name: "DEW",
    price: "38,000",
    category: "formal",
    subcategory: "formal",
    images: [dewMain, dew11, dew12],
    description: "An ethnic pishwas with a classy silhouette and zardosi work blended with a velvet shawl.",
    colors: ["Mint", "Lavender"],
    fabricDetails: { Shirt: "Net", Dupatta: "Organza", Pants: "Raw silk" },
  },
  {
    id: 12,
    slug: "elegant-navy-suit-formal",
    name: "Elegant Navy Suit",
    price: "12,500",
    category: "formal",
    subcategory: "formal",
    images: [formalNavy],
    description: "A professional navy blue formal suit for corporate and evening events.",
    colors: ["Navy"],
    fabricDetails: { Suit: "Wool Blend" },
  },
  {
    id: 12,
    slug: "nira-luxury-chiffon",
    name: "Elegant Navy Suit",
    price: "12,500",
    category: "formal",
    subcategory: "formal",
    images: [formalNavy],
    description: "A professional navy blue formal suit for corporate and evening events.",
    colors: ["Navy"],
    fabricDetails: { Suit: "Wool Blend" },
},
];