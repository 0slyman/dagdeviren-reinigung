"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceGallery from "@/components/ServiceGallery";

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* 1. HERO BÖLÜMÜ (Giriş) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* 2. AVANTAJLAR (Neden Biz?) */}
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

      {/* 3. HİZMETLER VE GALERİLER */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">UNSERE DIENSTLEISTUNGEN</h2>
            <h3 className="text-4xl font-bold">Professionelle Reinigungslösungen</h3>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Entdecken Sie unsere Arbeit. Scrollen Sie durch die Galerien, um unsere Ergebnisse zu sehen.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            
            {/* --- HİZMET 1: EV TEMİZLİĞİ --- */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <span className="text-blue-500">🏠</span> Wohnungsreinigung
                  </h4>
                  <p className="text-gray-400 mt-2 max-w-xl">
                    Detailreinigung für Küche, Bad, Böden und Wohnräume.
                  </p>
                </div>
                <Link href="/dienstleistungen/wohnungsreinigung">
                  <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-slate-900 transition-all text-sm font-bold">
                    Details ansehen
                  </button>
                </Link>
              </div>

              
              <ServiceGallery items={[
                { type: 'video', src: '/video2.mp4' }, 
                { type: 'image', src: '/foto1.jpeg', alt: 'Wohnung 1' },
                { type: 'image', src: '/foto2.jpeg', alt: 'Wohnung 2' },
                { type: 'image', src: '/foto3.jpeg', alt: 'Wohnung 3' },
                { type: 'image', src: '/foto4.jpeg', alt: 'Wohnung 4' },
                { type: 'image', src: '/foto5.jpeg', alt: 'Wohnung 5' },
                { type: 'image', src: '/foto6.jpeg', alt: 'Wohnung 6' },
                { type: 'image', src: '/foto7.jpeg', alt: 'Wohnung 7' },
              ]} />
            </div>

            {/* --- HİZMET 2: OFİS TEMİZLİĞİ --- */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <span className="text-blue-500">💼</span> Büroreinigung
                  </h4>
                  <p className="text-gray-400 mt-2 max-w-xl">
                    Saubere Arbeitsplätze für produktives Arbeiten. Diskret und schnell.
                  </p>
                </div>
                <Link href="/dienstleistungen/bueroreinigung">
                  <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-slate-900 transition-all text-sm font-bold">
                    Details ansehen
                  </button>
                </Link>
              </div>

              <ServiceGallery items={[
                { type: 'image', src: '/foto8.jpeg', alt: 'Büro 1' },
                { type: 'image', src: '/foto9.jpeg', alt: 'Büro 2' },
                { type: 'image', src: '/foto10.jpeg', alt: 'Büro 3' },
                { type: 'image', src: '/foto11.jpeg', alt: 'Büro 4' },
                { type: 'image', src: '/foto12.jpeg', alt: 'Büro 5' },
                { type: 'image', src: '/foto13.jpeg', alt: 'Büro 6' },
                { type: 'image', src: '/foto14.jpeg', alt: 'Büro 7' },
              ]} />
            </div>

            {/* --- HİZMET 3: TAŞINMA & CAM --- */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <span className="text-blue-500">✨</span> Umzugs & Fenster
                  </h4>
                  <p className="text-gray-400 mt-2 max-w-xl">
                    Stressfreier Umzug mit Abnahmegarantie und streifenfreie Fenster.
                  </p>
                </div>
                <Link href="/dienstleistungen/umzugsreinigung">
                  <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-slate-900 transition-all text-sm font-bold">
                    Details ansehen
                  </button>
                </Link>
              </div>

              <ServiceGallery items={[
                { type: 'video', src: '/video1.mp4' },
                { type: 'image', src: '/foto15.jpeg', alt: 'Umzug 1' },
                { type: 'image', src: '/foto16.jpeg', alt: 'Umzug 2' },
                { type: 'image', src: '/foto17.jpeg', alt: 'Umzug 3' },
                { type: 'image', src: '/foto18.jpeg', alt: 'Umzug 4' },
                { type: 'image', src: '/foto19.jpeg', alt: 'Umzug 5' },
                { type: 'image', src: '/foto20.jpeg', alt: 'Fenster 1' },
                { type: 'image', src: '/foto21.jpeg', alt: 'Fenster 2' },
              ]} />
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA (Alt Çağrı) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-white/10">
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