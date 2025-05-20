'use client';

import React, { useState } from 'react';
import { cn } from "@/components/lib/utils";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Example slider data (lookalike content, open images)
const slides = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "MURDERBOT",
    description: "Sci-Fi, a robot helper finds her will—and passion for cool options.",
    button: "Stream now"
  },
  {
    image: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=800&q=80",
    title: "YOUR NEXT TRIP",
    description: "Inspiring journeys for every wanderer. Adventure awaits.",
    button: "Watch now"
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "GREEN FITNESS",
    description: "Quick calm comfort for busy days. Get active anywhere.",
    button: "Try Fitness+"
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    title: "MUSIC BEATS",
    description: "Seth Rogen & Zane Lowe: Interviews that connect. Exclusive playlists.",
    button: "Listen now"
  },
  {
    image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=800&q=80",
    title: "GOLF TOUR WIN GOLF",
    description: "Challenge yourself: new digital courses each week.",
    button: "Explore now"
  }
];

export default function AppleStyleSlider() {
  const [current, setCurrent] = useState(0);
  const visibleSlides = 3;
  const slideCount = slides.length;

  // Helper: get indices for prev, center, next
  function getVisibleIndices(centerIdx: number) {
    const prev = (centerIdx - 1 + slideCount) % slideCount;
    const next = (centerIdx + 1) % slideCount;
    return [prev, centerIdx, next];
  }
  const visibleIndices = getVisibleIndices(current);

  // On next/prev, just change current, center stays fixed
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => goTo((current - 1 + slideCount) % slideCount);
  const next = () => goTo((current + 1) % slideCount);

  // Card dimensions: large and keep aspect ratio
  // Use responsive units for width, but clamp for min/max
  // 8.5:5.5 ratio
  const cardWidth = 480; // px, tweak as needed for your layout
  const cardHeight = Math.round(cardWidth * 5.5 / 8.5); // 8.5:5.5 ratio

  return (
    <div className="relative w-screen flex flex-col items-center bg-[#1d1d1f] pt-8 pb-8 px-0 overflow-x-hidden">
      {/* Controls */}
      <button
        className="absolute left-0 top-1/2 z-10 bg-black/70 rounded-full p-2 text-white hover:bg-black/90 hidden md:block"
        onClick={prev}
        aria-label="Previous"
        style={{ transform: "translateY(-50%)" }}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="absolute right-0 top-1/2 z-10 bg-black/70 rounded-full p-2 text-white hover:bg-black/90 hidden md:block"
        onClick={next}
        aria-label="Next"
        style={{ transform: "translateY(-50%)" }}
      >
        <ChevronRight size={32} />
      </button>
      {/* Slider: only 3 cards visible and centered */}
      <div
        className="relative flex justify-center items-center w-full max-w-[1520px] mx-auto"
        style={{ minHeight: cardHeight + 48 + 'px' }} // card plus room for shadows/buttons
      >
        {visibleIndices.map((i, idx) => {
          // Animate left (0), center (1), right (2)
          const isCenter = idx === 1;
          const isSide = idx !== 1;
          // Layout: arrange cards with absolute positioning, so center always centered
          // Use responsive units for width/height
          // For left/right, use clamp to keep responsive
          // The lefts array is in px, but you can use calc for responsive
          const lefts = [
            `calc(50% - ${cardWidth * 1.06}px)`, // left card (scaled slightly)
            `calc(50% - ${cardWidth/2}px)`,
            `calc(50% + ${cardWidth * 0.06}px)`, // right card (scaled slightly)
          ];
          return (
            <div
              key={slides[i].title + i}
              className={cn(
                "absolute transition-all duration-400 ease-in-out cursor-pointer",
                isCenter ? "z-20 scale-110 opacity-100 shadow-2xl" : "z-10 scale-100 opacity-55"
              )}
              style={{
                width: 'clamp(320px, 32vw, 540px)',
                height: 'clamp(180px, 20vw, 350px)',
                aspectRatio: '8.5 / 5.5',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                left: lefts[idx],
                boxShadow: isCenter ? '0px 12px 32px 6px #0008' : '',
                transition: 'left 0.45s cubic-bezier(0.5,1,0.5,1), transform 0.35s, opacity 0.45s',
                pointerEvents: isCenter ? 'auto' : 'auto',
                opacity: isCenter ? 1 : 0.55,
              }}
              onClick={() => isSide && goTo(i)}
              tabIndex={0}
            >
              <img
                src={slides[i].image}
                className="w-full h-full object-cover pointer-events-none select-none"
                alt={slides[i].title}
                draggable={false}
              />
              <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black/75 to-black/0 text-white pointer-events-none">
                <div className="font-bold text-xl md:text-2xl drop-shadow-lg">{slides[i].title}</div>
                <div className="text-sm md:text-base mb-2 drop-shadow">{slides[i].description}</div>
                <button
                  className="bg-white/90 text-black px-4 py-2 mt-2 rounded-xl font-semibold shadow hover:bg-white"
                  style={{ pointerEvents: 'auto' }}
                >
                  {slides[i].button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Dots */}
      <div className="flex space-x-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            className={cn(
              "h-3 w-3 rounded-full",
              i === current ? "bg-blue-400" : "bg-neutral-500/40"
            )}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
