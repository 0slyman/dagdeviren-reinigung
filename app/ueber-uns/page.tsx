"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">Über Uns</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Ihr vertrauenswürdiger Partner für professionelle Reinigungsdienste in Basel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. HİKAYEMİZ */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* GÖRSEL ALANI - MOBİL UYUMLU */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              {/* MOBİL AYARI: h-64 (mobil), md:h-96 (tablet), lg:h-[500px] (masaüstü) */}
              <div className="relative h-64 md:h-96 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/hero.jpg" 
                  alt="Unser Team" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20"></div>
              </div>
              
              {/* Kutu mobilde gizli (hidden), masaüstünde açık (md:block) */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">100%</p>
                <p className="text-gray-600 font-medium text-sm md:text-base">Kundenzufriedenheit</p>
              </div>
            </motion.div>

            {/* METİN ALANI */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-full text-sm mb-4 md:mb-6">
                 WER WIR SIND
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                Qualität und Vertrauen seit Tag eins.
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                <strong>Dagdeviren Reinigung</strong> wurde mit einer klaren Vision gegründet: Reinigungsdienstleistungen in Basel auf ein neues Niveau zu heben. Unter der Leitung von <strong>Bilal Dagdeviren</strong> haben wir uns darauf spezialisiert, Wohnungen, Büros und Gebäude nicht nur zu reinigen, sondern zu pflegen.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Wir wissen, dass es schwierig ist, fremden Menschen den Zutritt zur eigenen Privatsphäre zu gewähren. Deshalb setzen wir auf Diskretion, Zuverlässigkeit und feste Ansprechpartner.
              </p>
              
              <div className="flex gap-4">
                <Link href="/kontakt">
                  {/* BUTON: Lacivert */}
                  <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg w-full md:w-auto">
                    Kontaktieren Sie uns
                  </button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. DEĞERLERİMİZ */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Werte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leidenschaft für Details und unser Versprechen an Sie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 text-2xl mb-4 md:mb-6">🛡️</div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Zuverlässigkeit</h3>
              <p className="text-gray-600 text-sm md:text-base">Pünktlichkeit und Absprachen sind für uns heilig.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 text-2xl mb-4 md:mb-6">✨</div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Perfektion</h3>
              <p className="text-gray-600 text-sm md:text-base">Wir streben nach makelloser Reinheit in jeder Ecke.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 text-2xl mb-4 md:mb-6">🌱</div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Verantwortung</h3>
              <p className="text-gray-600 text-sm md:text-base">Wir verwenden umweltschonende Reinigungsmittel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lernen Sie uns kennen</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihnen helfen können. Wir freuen uns auf Ihre Nachricht.
          </p>
          <Link href="/kontakt">
            {/* BUTON: Koyu zemin üzerinde dikkat çekmesi için Mavi (veya Beyaz) kalması daha iyidir ama isteğine göre Lacivert yaparsak kaybolur. O yüzden burada kontrast renk (Mavi) bıraktım veya Beyaz yapabiliriz. Şimdilik Mavi: */}
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-700 hover:scale-105 transition-all w-full md:w-auto">
              Jetzt Offerte Anfordern
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}