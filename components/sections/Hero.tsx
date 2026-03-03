import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* ── Background Image ── */}
      <Image
        src="/111.jpg"
        alt="Luxury car storage"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* ── Layer 1: Cinematic vignette ──
          Darkens all four edges, keeps the car in the centre spotlight.
          Opacity slightly reduced so the steel-blue of the photo still reads.
      ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 50%,
            rgba(0,0,0,0) 30%,
            rgba(0,0,0,0.55) 100%)`,
        }}
      />

      {/* ── Layer 2: Warm amber accent — bottom-left ──
          Picks up the amber/orange from your "Book a Call" CTA button.
          Sits low-left, mimicking a garage floor light source.
          Kept subtle (0.18 max) so it tints rather than floods.
      ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 10% 90%,
            rgba(251,146,60,0.18) 0%,
            rgba(234,88,12,0.10) 45%,
            transparent 70%)`,
        }}
      />

      {/* ── Layer 3: Cool steel-blue accent — top-right ──
          Echoes the steel/carbon tone of the garage wall in the photo.
          Balances the warm amber on the opposite corner.
      ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 45% 40% at 92% 8%,
            rgba(96,165,250,0.10) 0%,
            rgba(59,130,246,0.06) 50%,
            transparent 70%)`,
        }}
      />

      {/* ── Layer 4: Bottom fade ──
          Smoothly transitions the hero into the dark section below.
          Heavier than a standard fade so the button row sits on a clean base.
      ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top,
            rgba(0,0,0,0.75) 0%,
            rgba(0,0,0,0.20) 30%,
            rgba(0,0,0,0) 55%)`,
        }}
      />

      {/* ── Layer 5: Top fade ──
          Feathers into the navbar so there's no hard edge at the top.
      ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            rgba(0,0,0,0.45) 0%,
            rgba(0,0,0,0) 18%)`,
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6">

        {/* Eyebrow label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
            Montréal, Québec
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Luxury Vehicle Storage
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 max-w-lg text-sm text-neutral-300 sm:text-base md:max-w-xl">
          Premium automotive concierge services in Montréal.
          White-glove care for the cars that matter most.
        </p>

        {/* ── CTA Buttons ── */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">

          {/* Primary: Explore Facility */}
          <Link
            href="/gallery"
            className="
              group relative inline-flex items-center justify-center gap-2
              overflow-hidden rounded-full
              bg-linear-to-r from-amber-400 to-orange-500
              px-7 py-3 text-sm font-semibold text-black
              shadow-lg shadow-orange-500/20
              transition-all duration-300
              hover:shadow-orange-500/40 hover:shadow-xl
              hover:-translate-y-0.5
              active:translate-y-0 active:shadow-md
            "
          >
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Explore Facility</span>
            {/* Arrow icon */}
            <svg className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Secondary: Contact Us */}
          <Link
            href="/contact"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-full border border-white/25
              bg-white/5 backdrop-blur-sm
              px-7 py-3 text-sm font-semibold text-white
              transition-all duration-300
              hover:border-white/50 hover:bg-white/12
              hover:-translate-y-0.5
              active:translate-y-0
            "
          >
            <span>Contact Us</span>
            {/* Envelope icon */}
            <svg className="h-4 w-4 opacity-60 transition-opacity duration-200 group-hover:opacity-100" fill="none" viewBox="0 0 16 16">
              <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M1.5 5.5l6.5 4 6.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>

        </div>

        {/* Scroll hint */}
        <div className="mt-14 hidden sm:flex flex-col items-center gap-2 text-neutral-500">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-linear-to-b from-neutral-500 to-transparent animate-pulse" />
        </div>

      </div>

    </section>
  );
}