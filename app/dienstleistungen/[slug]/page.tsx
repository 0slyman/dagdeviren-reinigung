"use client";

import { use } from "react"; // Next.js 15 için gerekli
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesData: Record<string, { 
  title: string; 
  description: string; 
  features: string[]; 
  image: string;
  detailText: string;
}> = {
  wohnungsreinigung: {
    title: "Professionelle Wohnungsreinigung",
    description: "Geniessen Sie Ihre Freizeit, wir kümmern uns um die Sauberkeit. Gründlich, diskret und zuverlässig.",
    image: "/hizmet-ev.jpg",
    features: ["Regelmässige Unterhaltsreinigung", "Reinigung von Küche und Bad", "Bodenpflege (Saugen & Wischen)", "Staubwischen auf allen Oberflächen", "Fensterreinigung (auf Wunsch)"],
    detailText: "Unser Team sorgt dafür, dass Sie sich in Ihrem Zuhause rundum wohlfühlen. Ob wöchentlich, zweiwöchentlich oder einmalig – wir passen uns Ihrem Zeitplan an. Wir verwenden umweltfreundliche Reinigungsmittel und achten auf jedes Detail, damit Ihr Zuhause strahlt."
  },
  umzugsreinigung: {
    title: "Umzugsreinigung mit Abnahmegarantie",
    description: "Stressfrei umziehen! Wir reinigen Ihre alte Wohnung bis zur perfekten Übergabe.",
    image: "/hizmet-tasinma.jpg",
    features: ["100% Abnahmegarantie", "Anwesenheit bei der Übergabe", "Komplettreinigung inkl. Lamellen & Fenster", "Küche & Sanitäranlagen entkalken", "Fixpreis-Angebot"],
    detailText: "Ein Umzug ist stressig genug. Überlassen Sie die Endreinigung uns. Wir garantieren Ihnen eine problemlose Übergabe an die Verwaltung. Sollte es Nachreinigungen geben (was selten vorkommt), übernehmen wir diese sofort und kostenlos."
  },
  bueroreinigung: {
    title: "Büro- & Praxisreinigung",
    description: "Ein sauberer Arbeitsplatz für mehr Produktivität und einen professionellen Eindruck.",
    image: "/hizmet-ofis.jpg",
    features: ["Reinigung der Arbeitsplätze & Schreibtische", "Leeren der Papierkörbe", "Hygienische Reinigung der Sanitäranlagen", "Küche & Pausenräume", "Bodenreinigung & Staubsaugen"],
    detailText: "Der erste Eindruck zählt. Wir sorgen dafür, dass Ihre Büros, Praxen oder Geschäftsräume stets repräsentativ und hygienisch sauber sind. Wir arbeiten ausserhalb Ihrer Geschäftszeiten, um Ihren Betrieb nicht zu stören."
  },
  fensterreinigung: {
    title: "Fenster- & Glasreinigung",
    description: "Streifenfreier Glanz für Ihre Fenster, Wintergärten und Schaufenster.",
    image: "/hizmet-cam.jpg",
    features: ["Reinigung von Glasflächen innen & aussen", "Reinigung der Rahmen & Fensterbänke", "Wintergärten & Glasfassaden", "Lamellenstoren-Reinigung", "Schaufensterreinigung"],
    detailText: "Schmutzige Fenster trüben den Ausblick. Unser professionelles Team bringt streifenfreien Glanz in Ihre Räume. Wir reinigen nicht nur das Glas, sondern auch die Rahmen und Fensterbänke gründlich."
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* METİN KISMI */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 z-10"
            >
              {/* ETİKET: Lacivert Tonlu */}
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-full text-xs md:text-sm mb-4 md:mb-6">
                 DIENSTLEISTUNGEN
              </div>
              <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>
              
              {/* BUTONLAR: Mobilde alt alta, masaüstünde yan yana */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    // BUTON: Lacivert (slate-900)
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Offerte Anfordern
                  </motion.button>
                </Link>
                <Link href="/kontakt" className="w-full sm:w-auto">
                  <button className="w-full bg-white text-slate-700 border border-gray-200 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                    Kontakt
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* GÖRSEL KISMI - MOBİL UYUMLU */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              {/* RESİM: Mobil h-64, Masaüstü h-[500px] */}
              <div className="relative h-64 md:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Dekoratif Kutu: Mobilde gizli, masaüstünde açık */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-slate-100 p-2 rounded-full text-slate-900">✓</div>
                  <span className="font-bold text-slate-800">Kundenzufriedenheit</span>
                </div>
                <p className="text-sm text-gray-500">Wir garantieren höchste Sauberkeit und Professionalität bei jedem Auftrag.</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DETAYLAR VE ÖZELLİKLER */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Warum {service.title}?</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {service.detailText}
              </p>
              
              {/* YARDIM KUTUSU: Lacivert */}
              <div className="bg-slate-900 p-6 md:p-8 rounded-3xl text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">Brauchen Sie Hilfe?</h4>
                  <p className="mb-4 md:mb-6 text-gray-300">Wir beraten Sie gerne unverbindlich.</p>
                  <a href="tel:+41763224243" className="text-2xl md:text-3xl font-bold hover:text-blue-300 transition block">
                    +41 76 322 42 43
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl animate-pulse"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">Unsere Leistungen</h3>
              <ul className="space-y-4 md:space-y-6">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start md:items-center gap-4"
                  >
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 shrink-0 mt-0.5 md:mt-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-gray-700 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}