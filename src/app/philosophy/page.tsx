"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function PhilosophyPage() {
  return (
    <div className="bg-alabaster min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: Easing }}
          className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson mb-8"
        >
          Philosophy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: Easing }}
          className="font-cormorant text-[clamp(3rem,7vw,6rem)] font-light leading-[1.05] text-obsidian mb-16"
        >
          The Art of
          <br />
          <span className="italic text-crimson">Disappearing</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: Easing }}
          className="space-y-8 font-manrope text-base text-obsidian/60 leading-relaxed max-w-2xl"
        >
          <p>
            We were not always connected. There was a time when silence was not
            a luxury — it was the default. When being unreachable was not
            anxiety-inducing, but simply the state of being alive without a
            device.
          </p>
          <p>
            VÉLURE exists to restore that state. Not as nostalgia, but as
            necessity. The science is clear: constant connectivity degrades
            attention, increases anxiety, and fragments the sense of self.
          </p>
          <p>
            We don&apos;t ask you to quit technology. We ask you to remember what it
            feels like to be whole. To sit in a room without reaching for a
            screen. To have a thought without documenting it. To be present
            without performing presence.
          </p>
          <p className="font-cormorant text-2xl italic text-obsidian/80 pt-8">
            &quot;The quieter you become, the more you can hear.&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: Easing }}
          className="mt-20"
        >
          <Link
            href="/retreats"
            className="text-[11px] uppercase tracking-[0.25em] font-manrope text-obsidian/40 hover:text-crimson transition-colors duration-500"
          >
            → Explore our retreats
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
