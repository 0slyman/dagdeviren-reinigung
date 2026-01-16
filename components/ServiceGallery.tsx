"use client";

import Image from "next/image";
import { useRef } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export default function ServiceGallery({ items }: { items: MediaItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative group mt-6">
      {/* Kaydırılabilir Alan */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="min-w-[280px] md:min-w-[350px] h-[220px] relative rounded-xl overflow-hidden shadow-lg snap-center shrink-0 border border-slate-700/50 bg-slate-800"
          >
            {item.type === "video" ? (
              <video 
                src={item.src} 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            ) : (
              <Image 
                src={item.src} 
                alt={item.alt || "Hizmet Görseli"} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        ))}
      </div>
      {/* Kaydırma ipucu */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}