import React, { useState } from "react";
import img1 from "../assets/shop/slider2.png";

export default function Container() {
  const [openIndex, setOpenIndex] = useState(0); // Initially, first container is open

  const items = [
    {
      title: "Lawn Collection",
      content: (
        <>
          <strong>Lawn Collection</strong> – Explore our premium lawn suits with
          beautiful embroidery and unique prints. Available in{" "}
          <strong>2 Piece</strong> and <strong>3 Piece</strong> sets, designed
          to give you elegance and comfort for every season.
        </>
      ),
    },
    {
      title: "Embroidery Suits",
      content: (
        <>
          Our <strong>Embroidery Suits</strong> feature delicate threadwork and
          timeless designs. Perfect for formal gatherings or casual wear, these
          suits add grace and charm to your wardrobe.
        </>
      ),
    },
    {
      title: "Wholesale Deals",
      content: (
        <>
          We also deal in <strong>wholesale</strong>. Get exclusive discounts on
          bulk orders of our <strong>2pc</strong> and <strong>3pc suits</strong>
          . Perfect opportunity for resellers and shop owners.
        </>
      ),
    },
    {
      title: "Payment Options",
      content: (
        <>
          <strong>Easy & Secure Online Payment</strong> available. You can shop
          with confidence and convenience directly from our website.
        </>
      ),
    },
    {
      title: "Warranted Stuff",
      content: (
        <>
          Our fabric is <strong>warranted</strong> – high quality, durable and
          comfortable to wear. We believe in providing trusted products that
          last.
        </>
      ),
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={styles.appContainer}>
      <div
        style={styles.imageWrapper}
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector("img");
          const overlay = e.currentTarget.querySelector(".overlay");
          if (img) img.style.transform = "scale(1.05)";
          if (overlay) overlay.style.opacity = 0.6;
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector("img");
          const overlay = e.currentTarget.querySelector(".overlay");
          if (img) img.style.transform = "scale(1)";
          if (overlay) overlay.style.opacity = 0;
        }}
      >
        <img
          src={img1}
          alt="Elegant perfume bottle with transparent glass and beige cap laid on soft pale pink fabric with gentle shadow plays"
          style={styles.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c37a1544-3b56-4e92-9238-8b57c85d84c1.png";
          }}
        />
        <div className="overlay" style={styles.overlay}></div>
      </div>

      <div style={styles.rightSide}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                ...styles.accordionContainer,
                borderRadius: isOpen ? "12px 12px 0 0" : "12px",
              }}
            >
              <button
                style={{
                  ...styles.accordionHeader,
                  color: isOpen ? "#4d4d4d" : "#000",
                  fontWeight: isOpen ? "600" : "500",
                }}
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`panel-${index}`}
                id={`accordion-${index}`}
              >
                <span className="font-semibold">{item.title}</span>
                <span style={styles.sign}>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div
                  id={`panel-${index}`}
                  role="region"
                  aria-labelledby={`accordion-${index}`}
                  style={styles.accordionContent}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#222",
                      fontSize: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
const styles = {
  appContainer: {
    maxWidth: 1160,
    margin: "40px auto",
    fontFamily: "'Georgia', serif",
    padding: "0 20px",
    display: "flex",
    flexWrap: "wrap", // allow wrapping on small screens
    gap: 40,
    justifyContent: "center", // default for small screens
  },

  imageWrapper: {
    position: "relative",
    flex: "1 1 400px", // flexible with minimum 400px width
    maxWidth: 500,
    borderRadius: 16,
    overflow: "hidden",
    cursor: "pointer",
    minHeight: 350,
  },

  image: {
    width: "100%",
    height: "100%",
    maxHeight: 500,
    objectFit: "cover",
    borderRadius: 16,
    transition: "transform 0.5s ease-in-out",
    display: "block",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
    borderRadius: 16,
  },

  rightSide: {
    flex: "1 1 400px",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    minHeight: 350, // match minHeight of image wrapper for alignment
  },

  accordionContainer: {
    border: "1.5px solid #efefef",
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 1.5px 4px rgba(0,0,0,0.04)",
  },

  accordionHeader: {
    width: "100%",
    padding: "18px 26px",
    fontSize: 20,
    fontWeight: 500,
    background: "none",
    border: "none",
    outline: "none",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    userSelect: "none",
    color: "#000",
    borderRadius: 12,
    transition: "color 0.3s ease",
  },

  sign: {
    fontSize: 26,
    lineHeight: 1,
    color: "#1a1a1a",
    fontWeight: 600,
    userSelect: "none",
  },

  accordionContent: {
    padding: "0 26px 24px 26px",
    color: "#333",
    fontSize: 16,
    fontWeight: 400,
    borderTop: "1.5px solid #efefef",
  },
};

// Add responsive override
const mediaQuery = window.matchMedia("(min-width: 768px)");
if (mediaQuery.matches) {
  styles.appContainer.justifyContent = "space-around"; // md and up
}
