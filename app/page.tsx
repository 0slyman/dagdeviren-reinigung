"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      
      {/* 1. HERO BÖLÜMÜ (Giriş) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Arka Plan Resmi */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg" 
            alt="Reinigungsfirma Basel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Sauberkeit, der man <br />
            <span className="text-blue-500">vertrauen kann.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto font-light"
          >
            Ihr zuverlässiger Partner für professionelle Reinigungsdienste in Basel und Umgebung. Gründlich, schnell und diskret.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/kontakt">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto">
                Offerte Anfordern
              </button>
            </Link>
            <Link href="/dienstleistungen/wohnungsreinigung">
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                Dienstleistungen
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. NEDEN BİZ? (Vorteile) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">WARUM DAGDEVIREN?</h2>
            <h3 className="text-4xl font-bold text-slate-900">Ihre Vorteile auf einen Blick</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Kutu 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                💎
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Höchste Qualität</h4>
              <p className="text-gray-600 leading-relaxed">
                Wir verwenden modernste Reinigungstechniken und umweltfreundliche Mittel für strahlende Ergebnisse.
              </p>
            </div>

            {/* Kutu 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                🤝
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Zuverlässigkeit</h4>
              <p className="text-gray-600 leading-relaxed">
                Pünktlichkeit und Vertrauen sind unser Fundament. Wir halten, was wir versprechen.
              </p>
            </div>

            {/* Kutu 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                💰
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Faire Preise</h4>
              <p className="text-gray-600 leading-relaxed">
                Transparente Kosten ohne versteckte Gebühren. Top-Leistung zu einem fairen Preis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HİZMETLER ÖZETİ (Dienstleistungen) - ARTIK LACİVERT (SLATE-900) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">UNSERE DIENSTLEISTUNGEN</h2>
              <h3 className="text-4xl font-bold">Professionelle Reinigungslösungen</h3>
            </div>
            <Link href="/dienstleistungen/wohnungsreinigung">
              <button className="text-white border-b border-blue-500 pb-1 hover:text-blue-500 transition">Alle Services ansehen &rarr;</button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hizmet Kartı 1 */}
            <Link href="/dienstleistungen/wohnungsreinigung" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image src="/hizmet-ev.jpg" alt="Wohnungsreinigung" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold mb-1">Wohnungsreinigung</h4>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Detailreinigung für Ihr Zuhause.</p>
                </div>
              </div>
            </Link>

            {/* Hizmet Kartı 2 */}
            <Link href="/dienstleistungen/umzugsreinigung" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image src="/hizmet-tasinma.jpg" alt="Umzugsreinigung" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold mb-1">Umzugsreinigung</h4>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Mit Abnahmegarantie.</p>
                </div>
              </div>
            </Link>

             {/* Hizmet Kartı 3 */}
             <Link href="/dienstleistungen/bueroreinigung" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image src="/hizmet-ofis.jpg" alt="Büroreinigung" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold mb-1">Büroreinigung</h4>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Für ein sauberes Arbeitsumfeld.</p>
                </div>
              </div>
            </Link>

            {/* Hizmet Kartı 4 */}
            <Link href="/dienstleistungen/fensterreinigung" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image src="/hizmet-cam.jpg" alt="Fensterreinigung" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold mb-1">Fensterreinigung</h4>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Streifenfreier Glanz.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA BÖLÜMÜ (Çağrı) - ARTIK LACİVERT VE ÜSTLE BİRLEŞTİ */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Dekoratif Işık Efektleri (Mavi Parlama) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bereit für glänzende Ergebnisse?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine unverbindliche Offerte. Wir freuen uns auf Sie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Jetzt Offerte Anfordern
              </button>
            </Link>
            <p className="mt-4 sm:mt-0 font-medium opacity-80">oder anrufen: <br className="sm:hidden"/> +41 76 322 42 43</p>
          </div>
        </div>
      </section>

    </main>
  );
}