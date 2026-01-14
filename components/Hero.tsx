"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. KATMAN: Arka Plan Resmi */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // Otomatik lüks ev fotoğrafı çeken servis
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Resmi biraz karartalım ki yazılar okunsun */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 2. KATMAN: Yazılar ve İçerik */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        
        {/* Animasyonlu Başlık */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
        >
          Sauberkeit, der man <br />
          <span className="text-blue-500">vertrauen kann.</span>
        </motion.h1>

        {/* Alt Açıklama */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl mb-10 text-gray-200 font-light"
        >
          Eviniz ve ofisiniz için Basel'in en güvenilir temizlik hizmeti.
        </motion.p>

        {/* Butonlar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105">
            Hizmetlerimiz
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
            İletişime Geçin
          </button>
        </motion.div>
      </div>
    </div>
  );
}