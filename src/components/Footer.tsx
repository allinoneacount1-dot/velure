"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "Twitter", href: "https://twitter.com", external: true },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian text-alabaster py-20 px-6 md:px-12" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <svg
            width="48"
            height="30"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-alabaster/60"
          >
            <motion.path
              d="M0 10 L32 10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-alabaster/40 mb-4 font-manrope">
              Newsletter
            </p>
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-cormorant text-2xl text-alabaster/70 italic"
              >
                You&apos;ll hear nothing. That&apos;s the point.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <label htmlFor="footer-email" className="sr-only">Email</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-transparent border-b border-alabaster/20 pb-2 text-alabaster placeholder:text-alabaster/30 focus:outline-none focus:border-crimson transition-colors duration-500 font-manrope text-sm flex-1"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="text-[11px] uppercase tracking-[0.25em] text-alabaster/60 hover:text-crimson transition-colors duration-500 font-manrope border border-alabaster/20 hover:border-crimson px-6 py-2 hover:bg-crimson/10"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-alabaster/40 mb-4 font-manrope">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm text-alabaster/50 hover:text-alabaster transition-colors duration-500 font-manrope w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-alabaster/10 gap-4">
          <p className="text-[11px] text-alabaster/30 font-manrope tracking-wider">
            © {new Date().getFullYear()} VÉLURE. Silence is the Ultimate Luxury.
          </p>
          <button
            onClick={scrollToTop}
            className="text-[11px] uppercase tracking-[0.25em] text-alabaster/40 hover:text-alabaster transition-colors duration-500 font-manrope"
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
