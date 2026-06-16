"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ─── HERO ─── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-alabaster"
    >
      {/* Background line animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[min(90vw,1200px)] h-auto opacity-[0.06]"
          viewBox="0 0 800 200"
          fill="none"
        >
          <motion.path
            d="M0 100 C50 100, 80 20, 120 100 C160 180, 200 20, 240 100 C280 180, 320 20, 360 100 C400 180, 440 20, 480 100 C520 180, 560 20, 600 100 C640 180, 680 20, 720 100 C760 180, 800 100, 800 100"
            stroke="currentColor"
            strokeWidth="1"
            className="text-obsidian"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: Easing }}
          className="text-[11px] uppercase tracking-[0.35em] font-manrope text-obsidian/40 mb-8"
        >
          Digital Detox Retreat Network
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: Easing }}
          className="font-cormorant text-[clamp(3rem,10vw,9rem)] font-light leading-[0.9] tracking-[-0.02em] text-obsidian mb-8"
        >
          Silence is
          <br />
          <span className="italic text-crimson">the Ultimate</span>
          <br />
          Luxury
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: Easing }}
          className="font-manrope text-sm md:text-base text-obsidian/50 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          No notifications. No signals. No pressure.
          <br />
          A place engineered for absence.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: Easing }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/retreats"
            className="group relative px-8 py-4 bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.25em] font-manrope overflow-hidden transition-colors duration-700 hover:text-obsidian"
          >
            <span className="relative z-10">Explore Retreats</span>
            <motion.div
              className="absolute inset-0 bg-crimson"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: Easing }}
              style={{ originX: 0 }}
            />
          </Link>
          <Link
            href="/philosophy"
            className="px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-manrope text-obsidian/60 border border-obsidian/15 hover:border-crimson hover:text-crimson transition-all duration-500"
          >
            Our Philosophy
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-manrope text-obsidian/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-obsidian/20"
        />
      </motion.div>
    </section>
  );
}

/* ─── PHILOSOPHY SECTION ─── */
function PhilosophySection() {
  return (
    <section className="bg-alabaster py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Label */}
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: Easing }}
              className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson"
            >
              Philosophy
            </motion.p>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <motion.blockquote
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: Easing }}
              className="font-cormorant text-[clamp(1.8rem,4vw,3.5rem)] font-light leading-[1.15] text-obsidian mb-12"
            >
              We don&apos;t sell rooms. We sell{" "}
              <span className="italic text-crimson">absence</span>. The absence
              of noise, of expectation, of the relentless digital hum that has
              become the soundtrack of modern life.
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: Easing }}
              className="font-manrope text-sm text-obsidian/50 max-w-2xl leading-relaxed"
            >
              Every element is designed to disappear. The walls, the schedule,
              the interface between you and the world. What remains is
              something increasingly rare: the experience of being
              uninterrupted.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RETREATS PREVIEW ─── */
const retreats = [
  {
    name: "The Void",
    location: "Lofoten, Norway",
    duration: "7 days",
    price: "€4,200",
    description:
      "A glass cabin above the Arctic Ocean. No WiFi. No electricity after sunset. Just the Northern Lights and your own thoughts.",
  },
  {
    name: "Monastery",
    location: "Kyoto, Japan",
    duration: "14 days",
    price: "€6,800",
    description:
      "A restored 14th-century Zen monastery. Silence is not optional here — it is architecture.",
  },
  {
    name: "The Deep",
    location: "Santorini, Greece",
    duration: "5 days",
    price: "€3,400",
    description:
      "Carved into volcanic rock. No windows facing the internet. The only view is the caldera and the sky.",
  },
];

function RetreatsPreview() {
  return (
    <section className="bg-obsidian text-alabaster py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: Easing }}
              className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson mb-4"
            >
              Retreats
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: Easing }}
              className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05]"
            >
              Where Silence
              <br />
              <span className="italic">Lives</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: Easing }}
          >
            <Link
              href="/retreats"
              className="text-[11px] uppercase tracking-[0.25em] font-manrope text-alabaster/40 hover:text-crimson transition-colors duration-500 flex items-center gap-3"
            >
              View all retreats
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                className="text-current"
              >
                <path
                  d="M0 4H15M15 4L11.5 1M15 4L11.5 7"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Retreat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {retreats.map((retreat, i) => (
            <motion.div
              key={retreat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: Easing,
              }}
              className="group border border-alabaster/8 hover:border-crimson/30 p-8 md:p-10 transition-all duration-700 hover:bg-alabaster/[0.03] relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/0 to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {/* Number */}
                <span className="text-[10px] font-manrope text-alabaster/20 tracking-wider block mb-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <h3 className="font-cormorant text-2xl md:text-3xl font-light text-alabaster mb-2 group-hover:text-crimson transition-colors duration-500">
                  {retreat.name}
                </h3>

                {/* Location */}
                <p className="text-[11px] uppercase tracking-[0.2em] font-manrope text-alabaster/30 mb-6">
                  {retreat.location}
                </p>

                {/* Description */}
                <p className="font-manrope text-sm text-alabaster/40 leading-relaxed mb-8 group-hover:text-alabaster/50 transition-colors duration-500">
                  {retreat.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-6 border-t border-alabaster/8">
                  <span className="text-[11px] font-manrope text-alabaster/30">
                    {retreat.duration}
                  </span>
                  <span className="text-[11px] font-manrope text-crimson/70 group-hover:text-crimson transition-colors duration-500">
                    {retreat.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE SECTION ─── */
function ExperienceSection() {
  const stats = [
    { value: "0", label: "Notifications" },
    { value: "24/7", label: "Silence" },
    { value: "12", label: "Global Locations" },
    { value: "100%", label: "Signal-Free" },
  ];

  return (
    <section className="bg-alabaster py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {/* Left */}
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: Easing }}
              className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson mb-6"
            >
              The Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: Easing }}
              className="font-cormorant text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.05] text-obsidian mb-8"
            >
              Engineered
              <br />
              for <span className="italic text-crimson">Absence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: Easing }}
              className="font-manrope text-sm text-obsidian/50 leading-relaxed max-w-md"
            >
              Every detail has been considered and then removed. What&apos;s left is
              not emptiness — it&apos;s space. Space to think, to breathe, to
              remember what it feels like to be unreachable.
            </motion.p>
          </div>

          {/* Right — Stats */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: Easing,
                  }}
                  className="border-t border-obsidian/10 pt-6"
                >
                  <span className="font-cormorant text-4xl md:text-5xl font-light text-obsidian block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-manrope text-obsidian/40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA SECTION ─── */
function CTASection() {
  return (
    <section className="bg-obsidian text-alabaster py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[min(80vw,900px)] h-auto opacity-[0.03]"
          viewBox="0 0 600 150"
          fill="none"
        >
          <motion.path
            d="M0 75 C30 75, 50 15, 80 75 C110 135, 140 15, 170 75 C200 135, 230 15, 260 75 C290 135, 320 15, 350 75 C380 135, 410 15, 440 75 C470 135, 500 15, 530 75 C560 135, 600 75, 600 75"
            stroke="currentColor"
            strokeWidth="1"
            className="text-alabaster"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: Easing }}
          className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson mb-8"
        >
          Begin Your Silence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: Easing }}
          className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] mb-8"
        >
          The world will wait.
          <br />
          <span className="italic text-crimson">Will you?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: Easing }}
          className="font-manrope text-sm text-alabaster/40 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Limited to 12 guests per retreat. Each stay is private, curated, and
          completely disconnected.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: Easing }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border border-alabaster/20 text-[11px] uppercase tracking-[0.25em] font-manrope text-alabaster hover:bg-crimson hover:border-crimson transition-all duration-700"
          >
            Request Access
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <RetreatsPreview />
      <ExperienceSection />
      <CTASection />
    </>
  );
}
