
// --- IMAGE IMPORTS ---
// Product 1: AARIA - Using AAIRA Pink images (since AARIA is similar to AAIRA)
import aaira1 from "../../assets/AAIRA/Pink/1.jpg";
import aaira2 from "../../assets/AAIRA/Pink/2.jpg";
import aaira3 from "../../assets/AAIRA/Pink/3.jpg";
import aaira4 from "../../assets/AAIRA/Pink/4.jpg";

// Product 2: ZARA (Dew) - Using Formal/Dew images
import dew1 from "../../assets/Formal/Dew/1.jpg";
import dew2 from "../../assets/Formal/Dew/2.jpg";
import dew3 from "../../assets/Formal/Dew/3.jpg";
import dew4 from "../../assets/Formal/Dew/4.jpg";

// Product 3: NIRA (Mustard) - Using AAIRA Mustard images
import mustard1 from "../../assets/AAIRA/Mustard/1.jpg";
import mustard2 from "../../assets/AAIRA/Mustard/2.jpg";
import mustard3 from "../../assets/AAIRA/Mustard/3.jpg";

// Product 4: MEHR (Pink) - Using Formal/Gulaab images (pink-themed)
import pink1 from "../../assets/Formal/Gulaab/1.jpg";
import pink2 from "../../assets/Formal/Gulaab/2.jpg";
import pink3 from "../../assets/Formal/Gulaab/3.jpg";

// Product 5: RABIA - Using Bridal/Shahana images
import rabia1 from "../../assets/3pc/shahana.webp";
import rabia2 from "../../assets/3pc/sha3.webp";
import rabia3 from "../../assets/3pc/sha4.webp";

// Product 6: SOFIA - Using Formal/Bahaar images (lawn/summer collection)
import sofia1 from "../../assets/Formal/Bahaar/1.jpg";
import sofia2 from "../../assets/Formal/Bahaar/2.jpg";
import sofia3 from "../../assets/Formal/Bahaar/3.jpg";

// --- DATA EXPORT ---
export const products = [
  {
    id: 1,
    slug: "aaira-pink", // Updated to match master data (AAIRA | Pink)
    name: "AARIA - Pink",
    price: "42,500",
    description: "Intricately embroidered velvet shirt with silk crushed pants and an organza dupatta.",
    images: [aaira1, aaira2, aaira3, aaira4],
  },
  {
    id: 2,
    slug: "dew-mint-lavender", // Updated to match master data (DEW)
    name: "FORMAL - Dew",
    price: "38,000",
    description: "Classic pishwas silhouette with hand-crafted tilla work and mirror detailing.",
    images: [dew1, dew2, dew3, dew4],
  },
  {
    id: 3,
    slug: "aaira-mustard", // Updated to match master data (AAIRA | Mustard)
    name: "Aaira - Mustard",
    price: "45,000",
    description: "Powder blue chiffon ensemble with silver kora dabka work.",
    images: [mustard1, mustard2, mustard3],
  },
  {
    id: 4,
    slug: "gulaab-maroon", // Updated to match master data (GULAAB)
    name: "Formal - Ghulaab",
    price: "32,500",
    description: "Raw silk straight shirt with heavy floral embroidery on neckline.",
    images: [pink1, pink2, pink3],
  },
  {
    id: 5,
    slug: "shahana-bridal-red", // Updated to match master data (SHAHANA)
    name: "Bridal - Shahana",
    price: "55,000",
    description: "Traditional maroon bridal wear with heavy zardozi craftsmanship.",
    images: [rabia2, rabia1, rabia3],
  },
  {
    id: 6,
    slug: "bahaar-neon-yellow", // Updated to match master data (BAHAAR)
    name: "Formal - Bahaar",
    price: "18,500",
    description: "Summer breeze printed lawn with embroidered patches.",
    images: [sofia1, sofia2, sofia3],
  }
];