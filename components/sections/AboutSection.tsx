"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaHeart, FaRegHeart, FaRegCommentDots, FaRegBookmark, FaEllipsisH } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useState } from "react";

const posts = [
  {
    image: "/ig1.png",
    likes: 56,
    comments: 3,
    date: "FEBRUARY 2",
    caption: "Luxury winter drive experience.",
  },
  {
    image: "/ig2.png",
    likes: 32,
    comments: 1,
    date: "MAY 4",
    caption: "Precision engineering showcase.",
  },
  {
    image: "/ig3.png",
    likes: 51,
    comments: 0,
    date: "MAY 3",
    caption: "Performance meets elegance.",
  },
  {
    image: "/ig4.png",
    likes: 89,
    comments: 4,
    date: "APRIL 11",
    caption: "Exclusive supercar collection.",
  },
  {
    image: "/ig5.png",
    likes: 42,
    comments: 2,
    date: "MARCH 20",
    caption: "Automotive artistry.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-linear-to-b from-neutral-950 to-black text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-12 sm:mb-16 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            {/* Real Instagram logo from public folder */}
            <Image src="/instagram.png" alt="Instagram" width={28} height={28} className="rounded-lg" />
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Follow Us On Instagram
            </h2>
          </div>
          <p className="mt-2 text-neutral-400 text-sm ml-[44px]">@swiftyluxury</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-6">
          {posts.slice(0, 4).map((post, index) => (
            <InstagramCard key={index} post={post} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel>
            <CarouselContent>
              {posts.map((post, index) => (
                <CarouselItem key={index} className="basis-[85%] pl-4 sm:basis-4/5">
                  <InstagramCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}

function InstagramCard({ post }: { post: typeof posts[0] }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-black border border-neutral-800 rounded-xl overflow-hidden w-full">

      {/* ── Header: Avatar + username + follow + ellipsis ── */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2.5">
          {/* Avatar ring — Instagram gradient border */}
          <div className="p-[2px] rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="bg-black p-[2px] rounded-full">
              <Image
                src="/instagram.png"
                alt="swiftyluxury"
                width={30}
                height={30}
                className="rounded-full object-cover w-[30px] h-[30px]"
              />
            </div>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold text-white">swiftyluxury</span>
            <span className="text-[11px] text-neutral-400 mt-0.5">Sponsored</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Follow button */}
          <button className="text-[13px] font-semibold text-[#0095f6] hover:text-white transition-colors">
            Follow
          </button>
          <FaEllipsisH className="text-neutral-400 text-sm" />
        </div>
      </div>

      {/* ── Post Image — square crop like real IG ── */}
      <div className="relative w-full aspect-square bg-neutral-900">
        <Image
          src={post.image}
          alt="Instagram Post"
          fill
          className="object-cover"
        />
      </div>

      {/* ── Action Bar ── */}
      <div className="px-3 pt-2.5 pb-1">
        <div className="flex items-center justify-between">
          {/* Left: like, comment, share */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={toggleLike}
              className="transition-transform active:scale-90"
              aria-label="Like"
            >
              {liked
                ? <FaHeart className="text-red-500 text-[22px]" />
                : <FaRegHeart className="text-white text-[22px] hover:text-neutral-400 transition-colors" />
              }
            </button>
            <button aria-label="Comment">
              <FaRegCommentDots className="text-white text-[22px] hover:text-neutral-400 transition-colors" />
            </button>
            <button aria-label="Share">
              <IoPaperPlaneOutline className="text-white text-[22px] hover:text-neutral-400 transition-colors" />
            </button>
          </div>
          {/* Right: bookmark */}
          <button aria-label="Save">
            <FaRegBookmark className="text-white text-[20px] hover:text-neutral-400 transition-colors" />
          </button>
        </div>
      </div>

      {/* ── Likes count ── */}
      <div className="px-3 pb-1">
        <span className="text-[13px] font-semibold text-white">
          {likeCount.toLocaleString()} likes
        </span>
      </div>

      {/* ── Caption ── */}
      <div className="px-3 pb-1">
        <p className="text-[13px] text-white leading-snug">
          <span className="font-semibold mr-1.5">swiftyluxury</span>
          <span className="text-neutral-200">{post.caption}</span>
        </p>
      </div>

      {/* ── Comments count ── */}
      {post.comments > 0 && (
        <div className="px-3 pb-1">
          <button className="text-[13px] text-neutral-500 hover:text-neutral-300 transition-colors">
            View all {post.comments} comment{post.comments !== 1 ? "s" : ""}
          </button>
        </div>
      )}

      {/* ── Add comment row ── */}
      <div className="px-3 pb-3 flex items-center gap-2 border-t border-neutral-900 mt-1 pt-2">
        <div className="w-6 h-6 rounded-full bg-neutral-800 shrink-0" />
        <input
          type="text"
          placeholder="Add a comment…"
          className="flex-1 bg-transparent text-[13px] text-neutral-500 placeholder:text-neutral-600 outline-none"
          readOnly
        />
        <button className="text-[13px] font-semibold text-[#0095f6] opacity-50 cursor-default">
          Post
        </button>
      </div>

      {/* ── Date ── */}
      <div className="px-3 pb-3">
        <span className="text-[10px] uppercase tracking-wider text-neutral-600">
          {post.date}
        </span>
      </div>

    </div>
  );
}