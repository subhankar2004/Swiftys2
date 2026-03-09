"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  FaHeart,
  FaRegHeart,
  FaRegCommentDots,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const posts = [
  {
    image: "/ig1.png",
    likes: 56,
    comments: 3,
    date: "February 2",
    caption: "Luxury winter drive experience.",
  },
  {
    image: "/ig2.png",
    likes: 32,
    comments: 1,
    date: "May 4",
    caption: "Precision engineering showcase.",
  },
  {
    image: "/ig3.png",
    likes: 51,
    comments: 0,
    date: "May 3",
    caption: "Performance meets elegance.",
  },
  {
    image: "/ig4.png",
    likes: 89,
    comments: 4,
    date: "April 11",
    caption: "Exclusive supercar collection.",
  },
  {
    image: "/ig5.png",
    likes: 42,
    comments: 2,
    date: "March 20",
    caption: "Automotive artistry.",
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-40px" as const },
  transition:  { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ─── Instagram Card ───────────────────────────────────────────────────────────
function InstagramCard({
  post,
  index,
}: {
  post: (typeof posts)[0];
  index: number;
}) {
  const [liked, setLiked]         = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      {...fadeUp(index * 0.08)}
      className="group relative flex flex-col w-full border border-zinc-800 bg-zinc-900/50
                 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
    >
      {/* Red top accent — appears on hover, matches all other cards */}
      <div className="absolute inset-x-0 top-0 h-px bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/75" />

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60">
        <div className="flex items-center gap-2.5">
          {/* Avatar — IG gradient ring replaced with red/zinc ring */}
          <div className="p-[2px] rounded-full bg-linear-to-tr from-red-700 via-red-500 to-zinc-400">
            <div className="bg-zinc-900 p-[2px] rounded-full">
              <Image
                src="/instagram.png"
                alt="swiftyluxury"
                width={28}
                height={28}
                className="rounded-full object-cover w-[28px] h-[28px]"
              />
            </div>
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-[12px] font-bold uppercase tracking-wider text-white/88">
              swiftyluxury
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Montréal, QC
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-[10px] uppercase tracking-widest text-red-500 font-semibold hover:text-red-400 transition-colors">
            Follow
          </button>
          <FaEllipsisH className="text-zinc-600 text-xs" />
        </div>
      </div>

      {/* ── Image — square ── */}
      <div className="relative w-full aspect-square bg-zinc-900 overflow-hidden">
        <Image
          src={post.image}
          alt="Instagram post"
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {/* Subtle inner vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* ── Actions ── */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLike}
            className="transition-transform active:scale-90"
            aria-label="Like"
          >
            {liked ? (
              <FaHeart className="text-red-600 text-[20px]" />
            ) : (
              <FaRegHeart className="text-zinc-400 text-[20px] hover:text-white transition-colors" />
            )}
          </button>
          <button aria-label="Comment">
            <FaRegCommentDots className="text-zinc-400 text-[20px] hover:text-white transition-colors" />
          </button>
          <button aria-label="Share">
            <IoPaperPlaneOutline className="text-zinc-400 text-[20px] hover:text-white transition-colors" />
          </button>
        </div>
        <button aria-label="Save">
          <FaRegBookmark className="text-zinc-400 text-[19px] hover:text-white transition-colors" />
        </button>
      </div>

      {/* ── Likes ── */}
      <div className="px-4 pb-1.5">
        <span className="text-[12px] font-bold text-white/88">
          {likeCount.toLocaleString()} likes
        </span>
      </div>

      {/* ── Caption ── */}
      <div className="px-4 pb-1.5">
        <p className="text-[12px] leading-snug text-zinc-400">
          <span className="font-bold text-white/80 mr-1.5 uppercase tracking-wide text-[11px]">
            swiftyluxury
          </span>
          {post.caption}
        </p>
      </div>

      {/* ── Comments ── */}
      {post.comments > 0 && (
        <div className="px-4 pb-1.5">
          <button className="text-[11px] text-zinc-600 uppercase tracking-widest hover:text-zinc-400 transition-colors">
            View {post.comments} comment{post.comments !== 1 ? "s" : ""}
          </button>
        </div>
      )}

      {/* ── Comment input ── */}
      <div className="px-4 pb-3 pt-2 flex items-center gap-2 border-t border-zinc-800/60 mt-1">
        <div className="w-5 h-5 rounded-full bg-zinc-800 shrink-0" />
        <input
          type="text"
          placeholder="Add a comment…"
          className="flex-1 bg-transparent text-[12px] text-zinc-600 placeholder:text-zinc-700 outline-none"
          readOnly
        />
        <button className="text-[10px] uppercase tracking-widest text-red-600/50 font-semibold cursor-default">
          Post
        </button>
      </div>

      {/* ── Date ── */}
      <div className="px-4 pb-3 border-t border-zinc-800/40 pt-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
          {post.date}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">

      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-[120px]"
          style={{ width: "600px", height: "280px", background: "rgba(192,57,43,0.06)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── Header — same pattern as all other sections ── */}
        <motion.div {...fadeUp()} className="mb-12 sm:mb-16">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-7 bg-red-600" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Follow Along
            </span>
          </div>

          {/* Heading + sub-copy row */}
          <div className="flex flex-col gap-6 border-b border-zinc-800 pb-8
                          sm:flex-row sm:items-end sm:justify-between sm:gap-12">
            <div className="flex items-end gap-4 shrink-0">
              {/* Instagram logo — small, architectural */}
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={36}
                height={36}
                className="rounded-md mb-1 opacity-70"
              />
              <h2
                className="uppercase font-black tracking-tighter text-white/88 leading-none"
                style={{ fontSize: "clamp(2.4rem, 5vw, 5vw)" }}
              >
                Our<br />
                <span className="text-zinc-600">Feed</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-2 sm:items-end">
              <p className="max-w-xs text-[13px] leading-relaxed text-zinc-500 sm:text-sm sm:text-right">
                Behind-the-scenes access to our collection, facility, and
                white-glove service — follow us for daily updates.
              </p>
              <a
                href="https://instagram.com/swiftyluxury"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10.5px] uppercase tracking-widest
                           text-zinc-400 transition-colors hover:text-white/80"
              >
                @swiftyluxury
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Desktop grid (≥ md) ── */}
        <div className="hidden md:grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
          {posts.slice(0, 4).map((post, i) => (
            <InstagramCard key={i} post={post} index={i} />
          ))}
        </div>

        {/* ── Mobile carousel (< md) ── */}
        <div className="md:hidden">
          <Carousel>
            <CarouselContent>
              {posts.map((post, i) => (
                <CarouselItem key={i} className="basis-[88%] pl-3 sm:basis-4/5">
                  <InstagramCard post={post} index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ── Bottom rule ── */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-10 sm:mt-12 border-t border-zinc-800 pt-8
                     flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-700">
            Premium Vehicle Storage · Est. 2018
          </p>
          <a
            href="https://instagram.com/swiftyluxury"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]
                       text-zinc-600 transition-colors hover:text-white/80"
          >
            View full profile
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-60">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}