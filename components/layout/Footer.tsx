"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ─── Data ─────────────────────────────────────────────────────────────────────
const companyLinks = [
  { name: "Home",     href: "/"         },
  { name: "Services", href: "/services" },
  { name: "Gallery",  href: "/gallery"  },
  { name: "Pricing",  href: "/pricing"  },
  { name: "About",    href: "/about"    },
];

const supportLinks = [
  { name: "Concierge", href: "/concierge" },
  { name: "Contact",   href: "/contact"   },
  { name: "FAQs",      href: "/faqs"      },
  { name: "Book a Call", href: "/contact" },
];

const socialLinks = [
  { icon: FaXTwitter,  href: "https://x.com",         label: "X / Twitter" },
  { icon: FaInstagram, href: "https://instagram.com",  label: "Instagram"   },
  { icon: FaFacebook,  href: "https://facebook.com",   label: "Facebook"    },
  { icon: FaTiktok,    href: "https://tiktok.com",     label: "TikTok"      },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-zinc-950 border-t border-zinc-800">

      {/* ── Ambient glow ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-[120px]"
          style={{ width: "600px", height: "240px", background: "rgba(192,57,43,0.05)" }}
        />
      </div>

      {/* ══════════════════════════════════════════════════
          TOP BAR — nav pills + email CTA
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl border-b border-zinc-800 px-5 py-5 sm:px-8 md:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* Nav pills — bordered, matches hero secondary button style */}
          <nav className="flex flex-wrap gap-1.5">
            {[...companyLinks, ...supportLinks].slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full border border-zinc-800 px-3.5 py-1.5
                           text-[10.5px] uppercase tracking-widest text-zinc-500
                           transition-all duration-150
                           hover:border-zinc-600 hover:text-white/80"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Email CTA */}
          <motion.a
            href="mailto:hello@swiftys.com"
            whileHover={{ x: 5 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="group flex items-center gap-3 text-white/60
                       transition-colors duration-200 hover:text-white/90"
          >
            <span
              className="font-black uppercase tracking-tighter leading-none"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}
            >
              Hello@Swiftys.com
            </span>
            {/* diagonal arrow */}
            <svg width="14" height="14" viewBox="0 0 10 10" fill="none"
              className="opacity-40 transition-opacity group-hover:opacity-80 shrink-0">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MAIN GRID
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8
                        lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">

            <Link href="/" className="inline-block">
              <Image
                src="/SwiftysWHITE.png"
                alt="Swiftys Automobile"
                width={110}
                height={44}
                className="object-contain opacity-80 sm:w-[120px]"
              />
            </Link>

            {/* Eyebrow line + tagline — matches all section eyebrows */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-5 bg-red-600" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Montréal, QC
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-zinc-600 max-w-xs">
                Premium indoor storage and white-glove concierge services
                for exotic and luxury vehicles.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.15 }}
                  className="flex h-9 w-9 items-center justify-center
                             border border-zinc-800 text-zinc-500
                             transition-all duration-150
                             hover:border-zinc-600 hover:text-white/80"
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-3 lg:grid-cols-3">

            {/* Company */}
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <div className="h-px w-4 bg-red-600/60" />
                <h4 className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                  Company
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-zinc-500 transition-colors duration-150 hover:text-white/80"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <div className="h-px w-4 bg-red-600/60" />
                <h4 className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                  Support
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {supportLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-zinc-500 transition-colors duration-150 hover:text-white/80"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social text column (lg+) */}
            <div className="hidden lg:block">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="h-px w-4 bg-red-600/60" />
                <h4 className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                  Social Media
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-zinc-500 transition-colors duration-150 hover:text-white/80"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          LARGE WATERMARK — same ghost style as before
          but using zinc-950 bg so it's always consistent
      ══════════════════════════════════════════════════ */}
      <div
        className="pointer-events-none select-none relative z-10
                   w-full leading-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Gradient mask: fades in from top, fades out at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,9,11,0.6) 0%, transparent 30%, transparent 70%, rgba(9,9,11,0.9) 100%)",
            zIndex: 1,
          }}
        />
        <span
          className="block w-full text-center font-black uppercase tracking-tighter"
          style={{
            fontSize: "clamp(48px, 13vw, 240px)",
            color: "rgba(255,255,255,0.028)",
            lineHeight: 0.85,
            letterSpacing: "-0.03em",
          }}
        >
          ©Swiftys
        </span>
      </div>

      {/* ══════════════════════════════════════════════════
          BOTTOM BAR — matches hero bottom bar structure
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl border-t border-zinc-800 px-5 py-4 sm:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-700">
            © {new Date().getFullYear()} Swiftys Automobile. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-[10.5px] uppercase tracking-[0.18em] text-zinc-700
                         transition-colors hover:text-zinc-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10.5px] uppercase tracking-[0.18em] text-zinc-700
                         transition-colors hover:text-zinc-500"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}