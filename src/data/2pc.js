// src/data/ThreePcProductsData.js
import img1 from "../../src/assets/3pc/peral.webp";
import img2 from "../../src/assets/3pc/peral.webp";
import img3 from "../../src/assets/3pc/shahana.webp";
import img4 from "../../src/assets/3pc/RangeIshq.webp";
import img5 from "../../src/assets/3pc/ankarali.jpg";

export const products = [
  {
    id: 3,
    image: img3,
    name: "SHAHANA",
    price: "PKR 2,450",
    fabric: "Premium Printed Lawn (Shirt & Trouser), Voil & Lawn (Dupatta)",
    size: "Available in 90/72 & 90/90",
    colorDesign: "Red base with elegant floral patterns",
    features: [
      "Vibrant summer color",
      "Breathable and lightweight fabric",
      "Soft voil dupatta",
    ],
    careInstructions: "Hand wash only with mild detergent",
    perfectFor: "Festive occasions, casual outings",
  },
  {
    id: 2,
    image: img1,
    link: "/chahatcollection/3pc/suit/2",
    name: "PEARL MAJESTY",
    fabric: "Premium Lawn",
    color: "Ocean Blue",
    description: "Bold ocean-inspired patterns for casual events.",
    features: [
      "3-piece suit",
      "Premium breathable fabric",
      "Ethnic prints",
      "Comfort fit",
      "Durable material",
    ],
    careInstructions: "Hand wash recommended",
    perfectFor: "Festive casual wear",
  },
  {
    id: 4,
    image: img4,
    link: "/chahatcollection/3pc/suit/4",
    name: "RANG E ISHQ",
    fabric: "Embroidered Lawn",
    color: "Deep Maroon",
    description: "Rich maroon embroidery for festive occasions.",
    features: [
      "Embroidered detail",
      "Luxury fabric",
      "3-piece",
      "Elegant design",
      "Festive wear",
    ],
    careInstructions: "Dry clean recommended",
    perfectFor: "Weddings & parties",
  },
  {
    id: 5,
    image: img5,
    link: "/chahatcollection/3pc/suit/5",
    name: "ANARKALI",
    fabric: "Luxury Lawn",
    color: "Black & Gold",
    description: "Luxury black lawn with golden motifs.",
    features: [
      "3-piece set",
      "Gold printed",
      "Soft fabric",
      "Formal wear",
      "Premium quality",
    ],
    careInstructions: "Hand wash or dry clean",
    perfectFor: "Evening events",
  },
];
