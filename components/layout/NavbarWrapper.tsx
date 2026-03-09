"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";


// ─── Nav data ─────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home",       href: "/"          },
  { label: "Storage",    href: "/services"  },
  { label: "Concierge",  href: "/concierge" },
  { label: "Gallery",    href: "/gallery"   },
  { label: "Pricing",    href: "/pricing"   },
  { label: "About",      href: "/about"     },
];

// ─── Variants ─────────────────────────────────────────────────────────────────
const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: 24 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.06 + 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const navbarVariants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Hamburger icon ───────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-end gap-[5px] w-6 h-6">
      <motion.span
        className="block h-px bg-white/80 origin-right"
        animate={open ? { rotate: -45, y: 3, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="block h-px bg-white/80 origin-right"
        animate={open ? { opacity: 0, width: "0%" } : { opacity: 1, width: "70%" }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-px bg-white/80 origin-right"
        animate={open ? { rotate: 45, y: -3, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

// ─── Desktop nav link ─────────────────────────────────────────────────────────
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="group relative flex flex-col items-center">
      <span
        className={`text-[11px] uppercase tracking-[0.22em] transition-colors duration-200
          ${active ? "text-white/90" : "text-zinc-500 group-hover:text-white/80"}`}
      >
        {label}
      </span>
      {/* Active / hover underline */}
      <motion.span
        className="absolute -bottom-1 h-px bg-red-600"
        initial={false}
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Hover underline for non-active */}
      {!active && (
        <span className="absolute -bottom-1 h-px w-0 bg-zinc-600 transition-all duration-200 group-hover:w-full" />
      )}
    </Link>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname              = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY }           = useScroll();

  // Track scroll for background transition
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 48));
    return unsub;
  }, [scrollY]);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Navbar bg opacity driven by scroll
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="show"
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Background layer — transparent at top, solid on scroll */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: bgOpacity }}
        >
          <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-zinc-800" />
        </motion.div>

        {/* Red progress-style accent — always visible at very top */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-600/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between sm:h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/SwiftysWHITE.png"
                alt="Swiftys Automobile"
                width={96}
                height={38}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                priority
              />
            </Link>

            {/* ── Desktop links (lg+) ── */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                />
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-[11px] uppercase tracking-widest text-zinc-500
                           transition-colors duration-150 hover:text-white/80"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="whitespace-nowrap rounded-full bg-white px-5 py-[8px]
                           text-[10.5px] font-bold uppercase tracking-widest text-zinc-950
                           transition-all duration-150 hover:bg-zinc-100 active:scale-[0.97]"
              >
                Request Storage
              </Link>
            </div>

            {/* ── Mobile: CTA pill + hamburger ── */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-zinc-700 px-4 py-[7px]
                           text-[10px] uppercase tracking-widest text-zinc-400
                           transition-all duration-150 hover:border-zinc-500 hover:text-white/80
                           active:scale-[0.97]"
              >
                Book Now
              </Link>

              {/* Hamburger — no Sheet trigger, we control it manually */}
              <button
                onClick={() => setOpen((p) => !p)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="relative z-50 flex h-9 w-9 items-center justify-center
                           border border-zinc-800 transition-colors duration-150
                           hover:border-zinc-600"
              >
                <HamburgerIcon open={open} />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════
          MOBILE MENU — full-screen overlay
      ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-50 flex w-[min(320px,90vw)] flex-col
                         bg-zinc-950 border-l border-zinc-800 lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* Red top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-600/70 to-transparent" />

              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                    Navigation
                  </span>
                  <Image
                    src="/SwiftysWHITE.png"
                    alt="Swiftys"
                    width={80}
                    height={32}
                    className="object-contain opacity-70 mt-0.5"
                  />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center border border-zinc-800
                             text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white/80"
                  aria-label="Close menu"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col flex-1 px-6 pt-8 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between py-3.5
                                  border-b border-zinc-800/60 transition-colors duration-150
                                  ${pathname === link.href ? "text-white/90" : "text-zinc-500 hover:text-white/80"}`}
                    >
                      <span className="text-[11px] uppercase tracking-[0.25em]">
                        {link.label}
                      </span>
                      <span className="flex items-center gap-2">
                        {pathname === link.href && (
                          <span className="h-px w-4 bg-red-600" />
                        )}
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none"
                          className={`transition-opacity duration-150
                            ${pathname === link.href ? "opacity-60" : "opacity-0 group-hover:opacity-40"}`}>
                          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA block */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="px-6 pb-8 pt-6 border-t border-zinc-800 flex flex-col gap-3"
              >
                {/* Stats strip */}
                <div className="flex items-center gap-5 mb-2">
                  {[
                    { v: "200+", l: "Stored" },
                    { v: "24/7", l: "Security" },
                    { v: "15yr", l: "Experience" },
                  ].map((s) => (
                    <div key={s.l} className="flex flex-col">
                      <span className="text-sm font-bold text-white/85 tabular-nums leading-none">
                        {s.v}
                      </span>
                      <span className="text-[8.5px] uppercase tracking-widest text-zinc-600 mt-0.5">
                        {s.l}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full bg-white py-3 text-center
                             text-[10.5px] font-bold uppercase tracking-widest text-zinc-950
                             transition-all duration-150 hover:bg-zinc-100 active:scale-[0.97]"
                >
                  Request Storage
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full border border-zinc-700 py-3 text-center
                             text-[10.5px] uppercase tracking-widest text-zinc-500
                             transition-all duration-150 hover:border-zinc-500 hover:text-white/80
                             active:scale-[0.97]"
                >
                  Book a Call
                </Link>

                {/* Location tag */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-px w-4 bg-red-600/60" />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
                    Montréal, QC
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}