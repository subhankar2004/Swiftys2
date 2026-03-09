"use client";

import { motion } from "framer-motion";
import { FaCarSide, FaShieldAlt, FaTools } from "react-icons/fa";
import Link from "next/link";


const features = [
  {
    icon: FaCarSide,
    title: "Pickup & Delivery",
    description:
      "Secure vehicle pickup and drop-off with complete discretion, professionalism, and real-time updates.",
    stat: "48h",
    statLabel: "Avg. turnaround",
  },
  {
    icon: FaTools,
    title: "Detailing & Maintenance",
    description:
      "Professional detailing, PPF, ceramic coating, and performance maintenance before every delivery.",
    stat: "100%",
    statLabel: "Hand-finished",
  },
  {
    icon: FaShieldAlt,
    title: "Maximum Security",
    description:
      "24/7 monitored facility with controlled access, advanced surveillance, and climate-controlled bays.",
    stat: "24/7",
    statLabel: "Monitored",
  },
];


const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-40px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});


function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      className="group relative flex flex-col border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 sm:p-7 lg:p-8"
    >
      {/* Red top-edge accent — appears on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/80" />

      {/* Subtle corner glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(192,57,43,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Icon */}
      <div className="mb-6 inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-zinc-800 text-zinc-300 transition-all duration-300 group-hover:border-red-600/50 group-hover:text-red-500 sm:h-11 sm:w-11">
        <Icon size={18} />
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold uppercase tracking-widest text-white/88 sm:text-sm">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-zinc-500 sm:text-sm">
        {feature.description}
      </p>

      {/* Stat row */}
      <div className="mt-7 flex items-end gap-3 border-t border-zinc-800 pt-5">
        <span className="font-black tracking-tighter text-white/90 leading-none"
          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)" }}>
          {feature.stat}
        </span>
        <span className="mb-0.5 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          {feature.statLabel}
        </span>
      </div>
    </motion.div>
  );
}


export default function ConciergeSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">

      {/* ── Background atmosphere (matches hero) ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dim red top bloom */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            width: "600px", height: "320px",
            background: "rgba(192,57,43,0.07)",
          }}
        />
        {/* Bottom-right depth */}
        <div
          className="absolute -bottom-24 right-0 rounded-full blur-[100px]"
          style={{
            width: "400px", height: "300px",
            background: "rgba(192,57,43,0.04)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="mb-12 lg:mb-16">

          {/* Eyebrow — matches hero badge style */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-7 bg-red-600" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              White-Glove Service
            </span>
          </div>

          {/* Heading — same weight/tracking as hero */}
          <h2
            className="uppercase font-black tracking-tighter text-white/88 leading-none"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
          >
            Unmatched
            <br />
            <span className="text-zinc-600">Concierge</span>
          </h2>

          {/* Divider + sub-copy row — mirrors hero bottom bar layout */}
          <div className="mt-8 flex flex-col gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-[13px] leading-relaxed text-zinc-500 sm:text-sm">
              Precision services designed to preserve performance, security, and
              excellence — from pickup to final delivery.
            </p>
            {/* Stat trio matching hero stat strip */}
            <div className="flex items-center gap-6 shrink-0">
              {[
                { v: "200+", l: "Vehicles" },
                { v: "24/7", l: "Coverage" },
                { v: "15yr", l: "Experience" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col items-end">
                  <span className="font-bold text-white/90 tabular-nums leading-none"
                    style={{ fontSize: "clamp(1rem, 1.4vw, 1.3rem)" }}>
                    {s.v}
                  </span>
                  <span className="mt-0.5 text-[8.5px] uppercase tracking-widest text-zinc-600">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Feature Cards ── */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 md:grid-cols-3">
          {/*
            gap-px + zinc-800 wrapper creates a thin dividing line between
            cards without any visible gaps — feels more architectural/minimal
          */}
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA strip — mirrors hero bottom bar exactly ── */}
        <motion.div
          {...fadeUp(0.25)}
          className="mt-px border border-t-0 border-zinc-800 bg-zinc-900/40 px-6 py-7 sm:px-8 lg:px-10 lg:py-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
                Ready to experience white-glove service?
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-zinc-600 sm:text-[13px]">
                Get in touch and we'll tailor a concierge plan for your vehicle.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              {/* Primary — filled white, mirrors hero "Request Storage" */}
              <Link
                href="/concierge"
                className="whitespace-nowrap rounded-full bg-white px-5 py-[9px] text-[10.5px] font-bold uppercase tracking-widest text-zinc-950 transition-all duration-150 hover:bg-zinc-100 active:scale-[0.97]"
              >
                Learn More
              </Link>

              {/* Secondary — bordered, mirrors hero "Explore Fleet" */}
              <Link
                href="/contact"
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-700 px-5 py-[9px] text-[10.5px] uppercase tracking-widest text-zinc-400 transition-all duration-150 hover:border-zinc-500 hover:text-white/90 active:scale-[0.97]"
              >
                Book a Call
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}