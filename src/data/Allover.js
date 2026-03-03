// src/data/ThreePc.js

import img1 from "../../src/assets/3pc/navy-blue.webp";
import img11 from "../../src/assets/3pc/aaira2.webp";
import img12 from "../../src/assets/3pc/aaira3.webp";

import img2 from "../../src/assets/3pc/pink.webp";
import img13 from "../../src/assets/3pc/pink2.webp";
import img14 from "../../src/assets/3pc/pink3.webp";

import img3 from "../../src/assets/3pc/orange.webp";
import img15 from "../../src/assets/3pc/olive.webp";
import img16 from "../../src/assets/3pc/olive3.webp";

import img4 from "../../src/assets/3pc/yellow.webp";
import img17 from "../../src/assets/3pc/lemon2.webp";
import img18 from "../../src/assets/3pc/lemon3.webp";

import img5 from "../../src/assets/3pc/mustard.webp";
import img19 from "../../src/assets/3pc/mustard2.webp";
import img20 from "../../src/assets/3pc/mustard3.webp";

export const products = [
  {
    id: 1,
    images: [img1, img11, img12], // 👈 change to array

    name: "AAIRA | Navy Blue",
    colors: ["Navy Blue"],
    description:
      " Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot.",

    careInstructions: "Hand wash or gentle machine wash",
    perfectFor: "Casual summer outings",
    note: " Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot.",

    fabricDetails: {
      Gown: "Crinkle Chiffon",
      Shirt: "Grip Silk",
      Pants: "Korean Raw Silk",
    },
  },
  {
    id: 2,
    images: [img2, img13, img14],
    image: img2,
    name: "AAIRA | Pink",
    colors: ["Pink"],

    description:
      " Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot.",
    fabricDetails: {
      TOP: " Georgette",
      SHARARA: "Georgette",
      Dupatta: "Organza",
    },
    careInstructions: "Hand wash recommended",
    perfectFor: "Festive casual wear",
  },
  {
    id: 3,
    image: img3,
    images: [img3, img15, img16],
    name: "AAIRA | Olive Green & Burnt Orange",
    colors: ["Olive Green"],

    description:
      " Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot.",
    fabricDetails: {
      Shirt: "Pure Raw Silk",
      Sharara: "Crushed Medium Silk",
      Dupata: " Organza",
    },
    careInstructions: "Machine wash cold",
    perfectFor: "Summer outings",
  },
  {
    id: 4,
    images: [img4, img17, img18],
    name: "AAIRA | Lemon Yellow",
    fabric: "Embroidered Lawn",
    colors: ["Rose gold Beige Blac kBlue"],
    shippingTime: "5-6 Weeks",
    customization: "For Customization please contact our Fashion consultant.",
    description:
      "Elegance meets sophistication in this stunning rose gold sharara outfit , perfect for formal events and weddings. Intricate hand embellishments, eye pleasing colour palette makes the attire a class apart.",
    fabricDetails: {
      Shirt: "Organza",
      Sharara: "Sharara",
      Dupata: "Organza",
      Dupata: "Lavender",
      Shirt: "Rose Gold",
    },

    careInstructions: "Dry clean recommended",
    perfectFor: "Weddings & parties",
  },
  {
    id: 5,
    images: [img5, img19, img20],
    name: " AAIRA | Mustard",
    fabric: "Luxury Lawn",
    colors: [" Off White"],
    description:
      "Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot.",
    shippingTime: "5-6 Weeks",
    customization: "For Customization please contact our Fashion consultant.",
    fabricDetails: {
      Pants: " Korean Raw Silk",
      Dupata: "Organza",
    },

    careInstructions: "Hand wash or dry clean",
    perfectFor: "Evening events",
  },
];
