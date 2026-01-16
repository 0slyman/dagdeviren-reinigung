"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export default function ServiceGallery({ items }: { items: MediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* --- MEVCUT GALERİ ŞERİDİ --- */}
      <div className="relative group mt-6">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {items.map((item, index) => (
            <div 
              key={index}
              onClick={() => setSelectedItem(item)} // TIKLAMA ÖZELLİĞİ EKLENDİ
              className="min-w-[280px] md:min-w-[350px] h-[220px] relative rounded-xl overflow-hidden shadow-lg snap-center shrink-0 border border-slate-700/50 bg-slate-800 cursor-pointer group/item"
            >
              {/* Üzerine gelince çıkan büyüteç efekti */}
              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-all z-10 flex items-center justify-center">
                <span className="opacity-0 group-hover/item:opacity-100 text-white bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm transform translate-y-4 group-hover/item:translate-y-0 transition-all duration-300">
                  🔍 Büyüt
                </span>
              </div>

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
                  className="object-cover transition-transform duration-500 group-hover/item:scale-105"
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Sağ taraftaki hafif gölge */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* --- BÜYÜK MODAL (AÇILIR PENCERE) --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)} // Boşluğa tıklayınca kapat
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          >
            {/* KAPATMA BUTONU (ÇARPI) */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-3xl transition-all focus:outline-none z-50"
            >
              &times;
            </button>

            {/* İÇERİK ALANI */}
            <div 
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // İçeriğe tıklayınca kapanmasını engelle
            >
              {selectedItem.type === "video" ? (
                <video 
                  src={selectedItem.src} 
                  className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
                  controls // Büyük videoda kontrol çubuğu olsun
                  autoPlay
                />
              ) : (
                <div className="relative w-full h-[85vh]">
                  <Image 
                    src={selectedItem.src} 
                    alt={selectedItem.alt || "Büyük Görsel"} 
                    fill 
                    className="object-contain" // Resmi kesmeden sığdır
                    quality={100}
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}