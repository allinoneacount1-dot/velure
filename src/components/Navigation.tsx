"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Retreats", href: "/retreats" },
  { label: "Contact", href: "/contact" },
];

const Easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("velure-sound");
    if (stored) setSoundOn(stored === "true");
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const toggleSound = useCallback(() => {
    const next = !soundOn;
    setSoundOn(next);
    localStorage.setItem("velure-sound", String(next));
  }, [soundOn]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-12 py-6 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group relative z-50"
          aria-label="VÉLURE Home"
          onClick={closeMobile}
        >
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[11px] uppercase tracking-[0.25em] font-manrope text-alabaster/70 hover:text-alabaster transition-colors duration-500"
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-alabaster"
                  transition={{ duration: 0.6, ease: Easing }}
                />
              )}
              {pathname !== item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-alabaster/0 group-hover:bg-alabaster/40 transition-colors duration-500" />
              )}
            </Link>
          ))}

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="text-[11px] uppercase tracking-[0.25em] font-manrope text-alabaster/50 hover:text-alabaster transition-colors duration-500"
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute ambient sound" : "Enable ambient sound"}
          >
            <SoundIcon on={soundOn} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          <span
            className={`block w-6 h-[1px] bg-alabaster transition-all duration-500 ${
              isMobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-alabaster transition-all duration-500 ${
              isMobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: Easing }}
            className="fixed inset-0 z-40 bg-alabaster flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: Easing,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="text-[clamp(2rem,6vw,4rem)] font-cormorant font-light text-obsidian hover:text-crimson transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-alabaster"
      >
        <motion.path
          d="M0 10 C4 10, 6 2, 8 10 C10 18, 12 2, 14 10 C16 18, 18 2, 20 10 C22 18, 24 2, 26 10 C28 18, 30 10, 32 10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          whileHover={{
            d: "M0 10 L32 10",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
        />
      </svg>
      <span className="text-[11px] uppercase tracking-[0.3em] font-manrope text-alabaster">
        VÉLURE
      </span>
    </div>
  );
}

function SoundIcon({ on }: { on: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-current"
    >
      {on ? (
        <>
          <path d="M4 7H7L11 3V17L7 13H4C3.45 13 3 12.55 3 12V8C3 7.45 3.45 7 4 7Z" fill="currentColor" />
          <path d="M13 8C13.5 8.5 14 9.2 14 10C14 10.8 13.5 11.5 13 12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 6C16 7 17 8.4 17 10C17 11.6 16 13 15 14" stroke="currentColor" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <path d="M4 7H7L11 3V17L7 13H4C3.45 13 3 12.55 3 12V8C3 7.45 3.45 7 4 7Z" fill="currentColor" />
          <line x1="13" y1="7" x2="17" y2="13" stroke="currentColor" strokeWidth="1.5" />
          <line x1="17" y1="7" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
