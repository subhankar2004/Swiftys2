"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const images = [
  "/mclarenwebsite3.jpg",
  "/mclarenwebsite4.jpg",
  "/swiftypic1.jpg",
  "/swiftypic2.jpg",
  "/swiftypic5.jpg",
  "/swiftypic6.jpg",
  "/swiftypic7.jpg",
  "/mclarenwebsite.jpg",
  "/mclarenwebsite2.jpg",
  "/111.jpg",
  "/ferrariwebsite.jpg",
  "/audiswift26.jpg",
  "/audiswift27.jpg",
  "/audiswift4.jpg",
  "/audiswift5.jpg",
  "/audiswift7.jpg",
];

const COLUMNS: { src: string; tall: boolean }[][] = [
  [
    { src: images[0],  tall: true  },
    { src: images[4],  tall: false },
    { src: images[8],  tall: true  },
    { src: images[12], tall: false },
  ],
  [
    { src: images[1],  tall: false },
    { src: images[5],  tall: true  },
    { src: images[9],  tall: false },
    { src: images[13], tall: true  },
  ],
  [
    { src: images[2],  tall: true  },
    { src: images[6],  tall: false },
    { src: images[10], tall: true  },
    { src: images[14], tall: false },
  ],
  [
    { src: images[3],  tall: false },
    { src: images[7],  tall: true  },
    { src: images[11], tall: false },
    { src: images[15], tall: true  },
  ],
];

const MOBILE_IMAGES = images.slice(0, 6);

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-50px" as const },
  transition:  { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ─── Component ───────────────────────────────────────────────────────────────
export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAll, setShowAll]   = useState(false);

  const mobileVisible = showAll ? MOBILE_IMAGES : MOBILE_IMAGES.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">

      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-[130px]"
          style={{ width: "700px", height: "300px", background: "rgba(192,57,43,0.06)" }}
        />
        <div
          className="absolute -bottom-20 right-0 rounded-full blur-[110px]"
          style={{ width: "380px", height: "280px", background: "rgba(192,57,43,0.04)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── Header — mirrors ConciergeSection / ServiceSection header ── */}
        <motion.div {...fadeUp()} className="mb-12 sm:mb-16 lg:mb-20">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-7 bg-red-600" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Our Facility &amp; Vehicles
            </span>
          </div>

          {/* Heading + sub-copy row */}
          <div className="flex flex-col gap-6 border-b border-zinc-800 pb-8
                          sm:flex-row sm:items-end sm:justify-between sm:gap-12">
            <h2
              className="uppercase font-black tracking-tighter text-white/88 leading-none shrink-0"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5vw)" }}
            >
              The<br />
              <span className="text-zinc-600">Collection</span>
            </h2>
            <p className="max-w-sm text-[13px] leading-relaxed text-zinc-500 sm:text-sm sm:text-right">
              A curated look into our luxury automotive storage environment —
              every bay designed to protect what matters most.
            </p>
          </div>
        </motion.div>

        {/* ── Mobile grid (< lg) ── */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {mobileVisible.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightbox(src)}
                className="group relative cursor-pointer overflow-hidden border border-zinc-800 bg-zinc-900"
                style={{ aspectRatio: i % 3 === 0 ? "3/4" : "1/1" }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/30" />
                {/* Red top accent on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/80" />
                {/* Badge */}
                <div className="absolute bottom-2.5 left-2.5 flex translate-y-1 flex-col items-start gap-0.5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[8px] uppercase tracking-[0.28em] text-white/40">Swiftys</span>
                  <div className="h-px w-full bg-red-600/60" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more / less */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="rounded-full border border-zinc-700 px-6 py-[9px] text-[10.5px] uppercase tracking-widest text-zinc-400 transition-all duration-150 hover:border-zinc-500 hover:text-white/90 active:scale-[0.97]"
            >
              {showAll ? "Show less" : `Show more (${MOBILE_IMAGES.length - 4} more)`}
            </button>
          </div>
        </div>

        {/* ── Desktop Pinterest grid (≥ lg) ── */}
        <div className="hidden lg:grid grid-cols-4 gap-2.5 xl:gap-3 items-start">
          {COLUMNS.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2.5 xl:gap-3">
              {col.map(({ src, tall }, itemIdx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    delay: colIdx * 0.07 + itemIdx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setLightbox(src)}
                  className="group relative cursor-pointer overflow-hidden border border-zinc-800 bg-zinc-900"
                  style={{ aspectRatio: tall ? "3/4" : "4/3" }}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${colIdx}-${itemIdx}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 1280px) 25vw, 320px"
                  />

                  {/* Bottom gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Red top accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/75" />

                  {/* Hover badge — hero style */}
                  <div className="absolute bottom-3.5 left-3.5 flex translate-y-1 flex-col items-start gap-0.5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                      Swiftys Automobile
                    </span>
                    <div className="h-px bg-red-600/65" style={{ width: "100%" }} />
                  </div>

                  {/* Image index — top left, faint */}
                  <div className="absolute left-3 top-3 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="font-black tabular-nums text-white/15 leading-none"
                      style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)" }}>
                      {String(colIdx * 4 + itemIdx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Bottom rule — matches other sections ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-12 sm:mt-16 border-t border-zinc-800 pt-8
                     flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-700">
            Premium Vehicle Storage · Est. 2018
          </p>
          <button
            onClick={() => setShowAll((p) => !p)}
            className="hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition-colors duration-150 hover:text-white/80"
          >
            {showAll ? "Collapse gallery" : "View full gallery"}
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.94,    opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden border border-zinc-800 shadow-2xl"
            >
              {/* Red top accent */}
              <div className="absolute inset-x-0 top-0 z-10 h-px bg-red-600/70" />

              <Image
                src={lightbox}
                alt="Gallery preview"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[90vh] object-contain"
              />

              {/* Bottom badge */}
              <div className="absolute bottom-0 inset-x-0 flex items-center justify-between
                              border-t border-zinc-800 bg-zinc-950/90 px-5 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Swiftys Automobile
                  </span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-[9px] uppercase tracking-[0.28em] text-zinc-600 transition-colors hover:text-white/80"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}