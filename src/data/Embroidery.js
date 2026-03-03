// src/data/Embroidery.js

import img1 from "../../src/assets/3pc/peral.webp";

import img2 from "../../src/assets/3pc/shahana.webp";
import img13 from "../../src/assets/3pc/sha3.webp";
import img14 from "../../src/assets/3pc/sha4.webp";

import img3 from "../../src/assets/3pc/rgisq2.webp";
import img15 from "../../src/assets/3pc/rgisq3.webp";
import img16 from "../../src/assets/3pc/RangeIshq.webp";

import img4 from "../../src/assets/3pc/ankarali.jpg";
import img17 from "../../src/assets/3pc/anar.webp";
import img18 from "../../src/assets/3pc/anarkali3.webp";

import img5 from "../../src/assets/3pc/Tabeer.webp";
import img19 from "../../src/assets/3pc/taber2.webp";
import img20 from "../../src/assets/3pc/taber3.webp";
export function getProducts() {
  return [
    {
      id: 2,
      images: [img1], // 👈 change to array
      link: "/chahatcollection/3pc/suit/2",
      name: "PEARL MAJESTY",
      colors: ["Peral White"],
      description:
        "The perfect blend of elegance and sophistication. This pearl white bridal attire is a class apart. Raw silk lehnga choli is hand embellished beautifully using pearls, beads, swarovskies, diamonties, kora, dabka, and resham threads! Hues of gold and resham make it more eye pleasing. Lehnga choli is blended with a subtle organza dupatta with cutwork borders and dense chan booti. Exquisite embroidery, intricate details, and pure fabrics make the attire wholesome and worth it❤️",
      customization: "For Customization please contact our Fashion consultant.",
      note: "Please note that the color of the item you receive may vary slightly from that shown in the product shoot.",
      shippingTime: "3 months",
      fabricDetails: {
        Choli: "Pure Raw silk",
        Lehnga: "Pure Raw silk",
        Dupatta: "Organza",
        Color: " pearl white",
      },
      careInstructions: "Hand wash recommended",
      perfectFor: "Festive casual wear",
    },

    {
      id: 3,
      images: [img2, img13, img14], // 👈 change to array
      name: "SHAHANA",
      description:
        " A classic red bridal attire which more than an outfit is a piece of art. The intricate details and complex handwork techniques and details make this out super classic! Farshi lehnga choli with a dramatic back trail is beautifully embellished with Gold Dabka, Swarovski, Resham, Crystals, Beads, diamonties and sequence. Details like FAREESHIA stitched in the attire bring such beauty and class. Shade of Aubergine added in the borders pleases eyes. Net Dupatta with detailed Borders and Motifs on corners completes the outfi",
      colors: ["Jet Black Gold"],
      shippingTime: "3 months",
      customization: "For Customization please contact our Fashion consultant.",
      note: "Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot..",
      fabricDetails: {
        Lengha: "Korean Netet",
        Choli: "Korean Net",
        Dupatta: " Korean Net",
      },
    },

    {
      id: 6,
      images: [img3, img15, img16],
      name: "RANG E ISHQ",
      description:
        "Velvet lehnga with Chiffon Choli and Dupatta is embellished with loaded Zardosi work using sparkly gold tilla, kora, dabka, crystals, beads, Resham and sequence. The astonishing embellishment pattern is a blend of architectural and floral patterns. As inspired from Mughal era, this perplexing attire has a royal and classy feel. The traditional silhouette lehnga and choli is always loved and admired. The intricate detailing in hand work, flawless stitching and eye pleasing color of this master piece is to die for.",
      colors: ["Crimson Red"],
      shippingTime: "3 to 4 Months",
      customization:
        "Velvet lehnga with Chiffon Choli and Dupatta is embellished with loaded Zardosi work using sparkly gold tilla, kora, dabka, crystals, beads, Resham and sequence. The astonishing embellishment pattern is a blend of architectural and floral patterns. As inspired from Mughal era, this perplexing attire has a royal and classy feel. The traditional silhouette lehnga and choli is always loved and admired. The intricate detailing in hand work, flawless stitching and eye pleasing color of this master piece is to die for.",
      note: "Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot..",

      fabricDetails: {
        Lehnga: " Velvet",
        Choli: "Crinkle Chiffon",
        Dupatta: "Crinkle Chiffon",
      },
    },

    {
      id: 5,
      images: [img4, img17, img18],
      name: "ANARKALI",
      description:
        "A breathtaking traditional bridal attire which speaks for itself. Korean net pishwas comes with such detailed and intricate hand embroidery using marori work techniques. Pishwas is blended with an atlas Lehnga and Gold zari net dupatta. Subtle color combo, artistic fabric blend and detailed hand embroidery makes the outfit subtle and flawless.",
      colors: ["Gold Bottle Green"],
      shippingTime: " 2-3 months",
      customization:
        "Velvet lehnga with Chiffon Choli and Dupatta is embellished with loaded Zardosi work using sparkly gold tilla, kora, dabka, crystals, beads, Resham and sequence. The astonishing embellishment pattern is a blend of architectural and floral patterns. As inspired from Mughal era, this perplexing attire has a royal and classy feel. The traditional silhouette lehnga and choli is always loved and admired. The intricate detailing in hand work, flawless stitching and eye pleasing color of this master piece is to die for.",
      note: "Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot..",
      fabricDetails: {
        Pishwas: "Net",
        Lehnga: "Atlas",
        Dupatta: "Zari net",
      },
    },
    {
      id: 4,
      images: [img5, img19, img20],
      name: "TABEER",

      description:
        "An Exquisite Bridal Attire to make your Big Day Memorable. Benson Gold gown and Lehnga with a Corel contrasting Dupatta pleases the eyes. Beautiful and intricate architectural and calligraphic Motifs are executed with extra detailing in hand embroidery. The color Palette is a blend of beautiful pastels and florescent Dark colors and the silhouettes are contemporary and trendy keeping the Royal Ambiance alive.",
      colors: ["Carol Gold"],
      shippingTime: "3 to 4 months",
      customization: "For Customization please contact our Fashion consultant.",
      note: "Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot..",

      fabricDetails: {
        Dupatta: "Net",
        Gown: "Zari net",
        Lehnga: "Organza",
      },
    },
  ];
}
