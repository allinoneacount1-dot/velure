"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function ContactPage() {
  return (
    <div className="bg-alabaster min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: Easing }}
          className="text-[11px] uppercase tracking-[0.25em] font-manrope text-crimson mb-8"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: Easing }}
          className="font-cormorant text-[clamp(3rem,7vw,6rem)] font-light leading-[1.05] text-obsidian mb-16"
        >
          Request
          <br />
          <span className="italic text-crimson">Access</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: Easing }}
          className="space-y-8"
        >
          <p className="font-manrope text-base text-obsidian/60 leading-relaxed max-w-xl">
            VÉLURE retreats are limited to 12 guests per session. Each
            application is reviewed personally. We&apos;re not looking for
            celebrities — we&apos;re looking for people who genuinely need to
            disappear.
          </p>

          <div className="pt-8">
            <a
              href="mailto:hello@velure.com"
              className="font-cormorant text-3xl md:text-4xl italic text-obsidian hover:text-crimson transition-colors duration-500"
            >
              hello@velure.com
            </a>
          </div>

          <div className="pt-12 flex flex-col gap-4">
            <Link
              href="/retreats"
              className="text-[11px] uppercase tracking-[0.25em] font-manrope text-obsidian/40 hover:text-crimson transition-colors duration-500 w-fit"
            >
              → View all retreats
            </Link>
            <Link
              href="/philosophy"
              className="text-[11px] uppercase tracking-[0.25em] font-manrope text-obsidian/40 hover:text-crimson transition-colors duration-500 w-fit"
            >
              → Read our philosophy
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
