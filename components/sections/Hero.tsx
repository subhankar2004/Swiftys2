"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count   = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const ctrl  = animate(count, to, { duration: 2, ease: "easeOut", delay: 1.2 });
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return () => { ctrl.stop(); unsub(); };
  }, []);

  return <span>{display}{suffix}</span>;
}


const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const lineReveal = {
  hidden: { opacity: 0, y: 48 },
  show:   {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};


const headingLines = ["Luxury", "Vehicle", "Storage &", "Concierge"];
const subLines = [
  "Secure indoor storage for exotic and luxury vehicles",
  "White-glove automotive concierge services in Montréal",
];
const stats = [
  { value: 200, suffix: "+",  label: "Vehicles Stored" },
  { value: 24,  suffix: "/7", label: "Surveillance"    },
  { value: 15,  suffix: "yr", label: "Experience"      },
];

/*
  LOGO HEIGHT LOGIC
  ─────────────────
  h1 font-size  = clamp(2.6rem, 7vw, 7.4vw)
  h1 line-height = 1 (leading-none)
  So the rendered cap-height ≈ 0.72 × font-size (typical for heavy uppercase)

  To make the logo block exactly as tall as one line of text we match:
    height = clamp(2.6rem, 7vw, 7.4vw)   ← same clamp as the h1

  Width is auto-calculated by the aspect ratio of the logo image.
  We set a generous max-width so it never gets too wide on large screens.
*/
const LOGO_HEIGHT = "clamp(2.6rem, 7vw, 7.4vw)";
// Width is unconstrained — we let the container be wide enough that
// object-contain never clips. The animated width drives the reveal,
// but the final settled width must be wide enough for the full logo.
const LOGO_WIDTH  = "clamp(120px, 14vw, 220px)";


export default function Hero() {
  return (
    <section className="relative w-full bg-zinc-950 overflow-hidden flex flex-col md:flex-row md:h-screen">

      {/* Mobile photo */}
      <div className="relative w-full h-[42vh] overflow-hidden md:hidden">
        <Image
          src="/swiftypic7.jpg"
          alt="Luxury vehicle in Swiftys showroom"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{ background: "linear-gradient(to top, #09090b 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #09090b 0%, transparent 100%)" }} />
      </div>

      {/* Desktop photo */}
      <div className="hidden md:block absolute right-0 top-0 w-[58%] h-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1,    opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/swiftypic7.jpg"
            alt="Luxury vehicle in Swiftys showroom"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <div className="absolute inset-y-0 left-0 z-10 pointer-events-none"
          style={{
            width: "52%",
            background: "linear-gradient(to right, #09090b 0%, #09090b 20%, rgba(9,9,11,0.55) 58%, transparent 100%)",
          }} />
        <div className="absolute inset-x-0 top-0 h-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #09090b 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "44%",
            background: "linear-gradient(to top, #09090b 0%, #09090b 30%, rgba(9,9,11,0.7) 65%, transparent 100%)",
          }} />
        <div className="absolute z-10 pointer-events-none"
          style={{
            bottom: "18%", left: "10%", right: "5%", height: "32%",
            background: "radial-gradient(ellipse at 50% 85%, rgba(192,57,43,0.16) 0%, transparent 70%)",
          }} />
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 70% at 68% 44%, black 10%, transparent 72%)",
          }}
        />
        <motion.div
          className="absolute inset-y-0 z-20 pointer-events-none"
          style={{
            width: "28%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
          }}
          initial={{ left: "-28%" }}
          animate={{ left: "130%" }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 5.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-7 right-8 z-30 flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-[9px] text-white/30 uppercase tracking-[0.32em]">Currently Available</span>
          <span className="text-white/82 font-semibold text-[15px] tracking-tight leading-none">12 Premium Bays</span>
          <span className="block w-full h-px bg-red-600/65 mt-1" />
        </motion.div>
        <div
          className="absolute bottom-14 right-5 z-30 pointer-events-none select-none"
          style={{
            writingMode: "vertical-rl",
            fontSize: "9px",
            letterSpacing: "0.38em",
            color: "rgba(255,255,255,0.80)",
            textTransform: "uppercase",
          }}
        >
          Premium Vehicle Storage · Est. 2018
        </div>
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            bottom: "17.3%", left: "0", right: "0", height: "1px",
            background: "linear-gradient(to right, transparent 0%, rgba(192,57,43,0.5) 25%, rgba(255,255,255,0.12) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Content column */}
      <div className="relative z-20 w-full flex flex-col md:w-1/2 md:h-screen md:shrink-0">

        {/* A — nav spacer */}
        <div className="hidden md:block flex-none h-20" />

        {/* B — Heading */}
        <div className="
          flex-none px-5 pt-2 pb-6
          md:flex-1 md:flex md:items-center md:px-10 md:pt-0 md:pb-0 md:overflow-hidden
        ">
          <motion.div className="w-full" variants={stagger} initial="hidden" animate="show">
            {headingLines.map((line, i) => (
              <motion.div key={i} variants={lineReveal} className="overflow-hidden">
                <div
                  className="flex items-center"
                  style={{ gap: "clamp(6px, 1vw, 14px)" }}
                >
                  {/* ── Logo thumbnail ──────────────────────────────────────
                      Height matches h1 exactly: clamp(2.6rem, 7vw, 7.4vw)
                      items-center on the parent row keeps it vertically
                      centred against the text cap-height.
                  ─────────────────────────────────────────────────────── */}
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: LOGO_WIDTH, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 0.38, ease: [0.76, 0, 0.24, 1] }}
                      className="relative overflow-hidden rounded-md shrink-0"
                      style={{ height: LOGO_HEIGHT }}
                    >
                      <Image
                        src="/SwiftysWHITE.png"
                        alt="Swiftys Automobile"
                        fill
                        className="object-contain object-left"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=200&q=80";
                        }}
                      />
                    </motion.div>
                  )}

                  <h1
                    className="text-white/88 uppercase font-black tracking-tighter leading-none"
                    style={{ fontSize: "clamp(2.6rem, 7vw, 7.4vw)" }}
                  >
                    {line}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* C — Bottom bar */}
        <motion.div
          className="flex-none"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-5 md:mx-10 h-px bg-zinc-800" />

          {/* Sub-copy */}
          <div className="px-5 md:px-10 pt-4 pb-3 flex flex-col gap-1 text-center md:text-left">
            {subLines.map((line, i) => (
              <p
                key={i}
                className="text-white/45 font-light tracking-wide leading-snug"
                style={{ fontSize: "clamp(11px, 1.1vw, 13px)" }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTAs + Stats */}
          <div className="
            px-5 pb-8
            flex flex-col items-center gap-5
            md:px-10 md:pb-9 md:flex-row md:items-center md:justify-between md:gap-4
          ">
            <div className="flex items-center gap-3">
              <button className="
                px-5 py-[9px] bg-white text-zinc-950 font-bold rounded-full
                uppercase tracking-widest whitespace-nowrap
                hover:bg-zinc-100 active:scale-[0.97] transition-all duration-150
                text-[10px] md:text-[10.5px]
              ">
                Request Storage
              </button>
              <button className="
                px-5 py-[9px] border border-zinc-700 text-white/60 rounded-full
                uppercase tracking-widest whitespace-nowrap
                hover:border-zinc-500 hover:text-white/90
                active:scale-[0.97] transition-all duration-150
                flex items-center gap-2
                text-[10px] md:text-[10.5px]
              ">
                Explore Fleet
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
                  <path d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-6 md:gap-5">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center md:items-end">
                  <span
                    className="text-white/90 font-bold tabular-nums leading-none"
                    style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}
                  >
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                  <span
                    className="text-white/28 uppercase tracking-widest mt-0.5"
                    style={{ fontSize: "8.5px" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}