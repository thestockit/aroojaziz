"use client";
import { motion } from "framer-motion";

export default function Background({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Base Black Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0d0d0d, #1a1a1a, #262626)",
        }}
      />

      {/* Subtle Moving Wave Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 20px)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Central Spotlight Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-5 blur-[200px] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content Layer */}
      <main className="relative z-10 text-white">{children}</main>
    </div>
  );
}
