"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// HİZMET LİSTESİ (Resimler 'public' klasöründen çekiliyor)
const services = [
  {
    title: "Wohnungsreinigung",
    description: "Profesyonel ev temizliği ile yaşam alanlarınız parlasın.",
    image: "/hizmet-ev.jpg", // Bu isme sahip resim public klasöründe olmalı
    link: "/dienstleistungen/wohnungsreinigung"
  },
  {
    title: "Umzugsreinigung",
    description: "Taşınma sonrası %100 teslim garantili temizlik.",
    image: "/hizmet-tasinma.jpg",
    link: "/dienstleistungen/umzugsreinigung"
  },
  {
    title: "Fensterreinigung",
    description: "Cam, çerçeve ve panjurlarınız için lekesiz temizlik.",
    image: "/hizmet-cam.jpg",
    link: "/dienstleistungen/fensterreinigung"
  },
  {
    title: "Büroreinigung",
    description: "İş yeriniz için düzenli ve hijyenik temizlik çözümleri.",
    image: "/hizmet-ofis.jpg",
    link: "/dienstleistungen/bueroreinigung"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Başlık Kısmı */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Hizmetlerimiz
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun profesyonel çözümler sunuyoruz. 
            Basel ve çevresinde güvenilir temizlik.
          </p>
        </div>

        {/* Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// --- AKILLI KART BİLEŞENİ (Mobil Tıklama + Desktop Hover) ---
function ServiceCard({ service, index }: { service: any, index: number }) {
  // Kartın tıklanıp tıklanmadığını hafızada tutar
  const [isTapped, setIsTapped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      // Masaüstü: Mouse ile gelince yukarı kalk
      whileHover={{ y: -10 }} 
      // Mobil: Tıklayınca 'isTapped' durumunu tersine çevir (Aç/Kapa)
      onClick={() => setIsTapped(!isTapped)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      {/* Resim Alanı */}
      <div className="h-48 overflow-hidden relative">
        {/* Mobilde tıklandığını belli eden hafif mavi perde */}
        <div className={`absolute inset-0 bg-blue-900/10 transition-opacity duration-300 ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-0'}`}></div>
        
        <img 
          src={service.image} 
          alt={service.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isTapped ? 'scale-110' : 'group-hover:scale-110'}`}
        />
      </div>

      {/* Yazı Alanı */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 transition-colors ${isTapped ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {service.description}
        </p>
        
        {/* Link */}
        <Link href={service.link} className={`flex items-center text-blue-600 font-semibold text-sm hover:underline ${isTapped ? 'underline' : ''}`}>
          Detayları Gör 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}