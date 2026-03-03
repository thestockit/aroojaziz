// src/data/formalProducts.js
import img1 from "../../src/assets/formal1.webp";
import img2 from "../../src/assets/formal2.webp";
import img3 from "../../src/assets/formal3.webp";

const formalProducts = [
  {
    id: 1,
    name: "Elegant Navy Suit",
    image: img1,
    price: "PKR 12,500",
    brand: "Formal",
  },
  {
    id: 2,
    name: "Classic Grey Suit",
    image: img2,
    price: "PKR 11,500",
    brand: "Formal",
  },
  {
    id: 3,
    name: "Royal Black Suit",
    image: img3,
    price: "PKR 13,000",
    brand: "Formal",
  },
];

export function getProducts() {
  return formalProducts;
}
