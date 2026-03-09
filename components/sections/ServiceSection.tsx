"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    eyebrow: "Premium Storage",
    heading: "Built for the\nDiscerning",
    body: "Premium automotive storage and concierge services crafted with precision, innovation, and uncompromising quality — for the cars that deserve nothing less.",
    cta: { label: "View Services", href: "/services" },
    image: "/mclarenwebsite.jpg",
    imageAlt: "McLaren luxury vehicle",
    reversed: false,
  },
  {
    eyebrow: "Advanced Security",
    heading: "Intelligent\nProtection",
    body: "Advanced security systems and intelligent vehicle care ensure your automotive investment is protected and preserved around the clock.",
    cta: { label: "Learn More", href: "/concierge" },
    image: "/swiftypic7.jpg",
    imageAlt: "Swiftys facility",
    reversed: true,
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-60px" as const },
  transition:  { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ─── Service Block ─────────────────────────────────────────────────────────────
function ServiceBlock({
  eyebrow,
  heading,
  body,
  cta,
  image,
  imageAlt,
  reversed,
}: (typeof sections)[0]) {
  const lines = heading.split("\n");

  return (
    <motion.div
      {...fadeUp(0.05)}
      className={`grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-16 lg:gap-24`}
    >
      {/* ── Text side ── */}
      <div className={reversed ? "md:order-2" : ""}>

        {/* Eyebrow — red line + label, matches hero badge */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-7 bg-red-600" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            {eyebrow}
          </span>
        </div>

        {/* Heading — hero-weight uppercase */}
        <h2
          className="uppercase font-black tracking-tighter text-white/88 leading-none"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.4vw)" }}
        >
          {lines.map((line, i) => (
            <span key={i} className={i === 1 ? "text-zinc-600" : ""}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Divider — matches hero bottom bar separator */}
        <div className="mt-7 h-px bg-zinc-800" />

        {/* Body */}
        <p className="mt-6 max-w-md text-[13px] leading-relaxed text-zinc-500 sm:text-sm">
          {body}
        </p>

        {/* CTAs — exact hero button pair */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={cta.href}
            className="whitespace-nowrap rounded-full bg-white px-5 py-[9px] text-[10.5px] font-bold uppercase tracking-widest text-zinc-950 transition-all duration-150 hover:bg-zinc-100 active:scale-[0.97]"
          >
            {cta.label}
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-700 px-5 py-[9px] text-[10.5px] uppercase tracking-widest text-zinc-400 transition-all duration-150 hover:border-zinc-500 hover:text-white/90 active:scale-[0.97]"
          >
            Book a consultation
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Image side ── */}
      <div className={`relative ${reversed ? "md:order-1" : ""}`}>

        {/* Dim red ambient glow behind image */}
        <div
          className="pointer-events-none absolute -inset-4 blur-3xl sm:-inset-6"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(192,57,43,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Image frame — sharp corners to match hero's architectural feel */}
        <motion.div
          whileHover={{ scale: 1.012 }}
          transition={{ type: "tween", duration: 0.35 }}
          className="relative overflow-hidden border border-zinc-800 shadow-2xl"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Inner vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.45) 100%)",
            }}
          />

          {/* Red top accent line on hover */}
          <div className="absolute inset-x-0 top-0 h-px bg-red-600/60" />

          {/* Corner badge — matches hero top-right badge style */}
          <div className="absolute bottom-4 left-4 flex flex-col items-start gap-0.5">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Swiftys Automobile
            </span>
            <div className="h-px w-full bg-red-600/60" />
          </div>

          {/* Live dot — top right */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-white/30">Live</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ServiceSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-1/4 rounded-full blur-[110px]"
          style={{ width: "400px", height: "300px", background: "rgba(192,57,43,0.05)" }}
        />
        <div
          className="absolute left-0 bottom-1/4 rounded-full blur-[100px]"
          style={{ width: "350px", height: "280px", background: "rgba(192,57,43,0.04)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── Section header ── */}
        <motion.div {...fadeUp()} className="mb-16 sm:mb-20 lg:mb-24">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-7 bg-red-600" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              What We Offer
            </span>
          </div>

          {/* Heading + sub-copy on same baseline row (desktop) */}
          <div className="flex flex-col gap-6 border-b border-zinc-800 pb-8
                          sm:flex-row sm:items-end sm:justify-between sm:gap-12">
            <h2
              className="uppercase font-black tracking-tighter text-white/88 leading-none shrink-0"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5vw)" }}
            >
              Our<br />
              <span className="text-zinc-600">Services</span>
            </h2>
            <p className="max-w-sm text-[13px] leading-relaxed text-zinc-500 sm:text-sm sm:text-right">
              Every service is designed around one principle — treating your
              vehicle with the same care and precision its maker intended.
            </p>
          </div>
        </motion.div>

        {/* ── Blocks ── */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {sections.map((s) => (
            <ServiceBlock key={s.heading} {...s} />
          ))}
        </div>

        {/* ── Bottom rule — visual closure matching hero divider ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-20 sm:mt-24 lg:mt-32 border-t border-zinc-800 pt-8
                     flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-700">
            Premium Vehicle Storage · Est. 2018
          </p>
          <Link
            href="/services"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-600
                       transition-colors duration-150 hover:text-white/80"
          >
            View all services
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}