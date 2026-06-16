"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

const retreats = [
  {
    name: "The Void",
    location: "Lofoten, Norway",
    duration: "7 days",
    price: "€4,200",
    description:
      "A glass cabin above the Arctic Ocean. No WiFi. No electricity after sunset. Just the Northern Lights and your own thoughts.",
    availability: "3 spots left",
  },
  {
    name: "Monastery",
    location: "Kyoto, Japan",
    duration: "14 days",
    price: "€6,800",
    description:
      "A restored 14th-century Zen monastery. Silence is not optional here — it is architecture.",
    availability: "Waitlist",
  },
  {
    name: "The Deep",
    location: "Santorini, Greece",
    duration: "5 days",
    price: "€3,400",
    description:
      "Carved into volcanic rock. No windows facing the internet. The only view is the caldera and the sky.",
    availability: "1 spot left",
  },
  {
    name: "Whiteout",
    location: "Reykjavik, Iceland",
    duration: "10 days",
    price: "€5,600",
    description:
      "A geothermal retreat in the Icelandic highlands. White noise is not a feature — it is the landscape.",
    availability: "5 spots left",
  },
  {
    name: "The Fold",
    location: "Marrakech, Morocco",
    duration: "7 days",
    price: "€4,800",
    description:
      "A riad with no clocks, no mirrors, no screens. Time moves differently when you cannot measure it.",
    availability: "2 spots left",
  },
  {
    name: "Canopy",
    location: "Bali, Indonesia",
    duration: "14 days",
    price: "€5,200",
    description:
      "Suspended in the jungle canopy. The only notifications are birdsong and rain.",
    availability: "Open",
  },
];

export default function RetreatsPage() {
  return (
    <div className="bg-alabaster min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: Easing }}
          className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson mb-8"
        >
          Retreats
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: Easing }}
          className="font-cormorant text-[clamp(3rem,7vw,6rem)] font-light leading-[1.05] text-obsidian mb-20"
        >
          Where Silence
          <br />
          <span className="italic text-crimson">Lives</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retreats.map((retreat, i) => (
            <motion.div
              key={retreat.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                ease: Easing,
              }}
              className="group border border-obsidian/8 hover:border-crimson/30 p-8 md:p-10 transition-all duration-700 hover:bg-obsidian/[0.02] relative overflow-hidden bg-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/0 to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <span className="text-[10px] font-manrope text-obsidian/20 tracking-wider block mb-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-cormorant text-2xl md:text-3xl font-light text-obsidian mb-2 group-hover:text-crimson transition-colors duration-500">
                  {retreat.name}
                </h3>

                <p className="text-[11px] uppercase tracking-[0.2em] font-manrope text-obsidian/30 mb-6">
                  {retreat.location}
                </p>

                <p className="font-manrope text-sm text-obsidian/40 leading-relaxed mb-8 group-hover:text-obsidian/50 transition-colors duration-500">
                  {retreat.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-obsidian/8">
                  <span className="text-[11px] font-manrope text-obsidian/30">
                    {retreat.duration}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-manrope text-crimson/60">
                      {retreat.availability}
                    </span>
                    <span className="text-[11px] font-manrope text-crimson/70 group-hover:text-crimson transition-colors duration-500">
                      {retreat.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: Easing }}
          className="text-center mt-20"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.25em] font-manrope hover:bg-crimson transition-colors duration-700"
          >
            Request Access
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
