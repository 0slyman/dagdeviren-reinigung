"use client";

import { motion } from "framer-motion";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Impressum</h1>

          <div className="space-y-8 text-gray-700">
            
            {/* ŞİRKET BİLGİLERİ */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Kontaktadresse</h2>
              <p><strong>Dagdeviren Reinigung</strong></p>
              <p>Herr Bilal Dagdeviren</p>
              <p>Hochbergplatz 1</p>
              <p>4057 Basel</p>
              <p>Schweiz</p>
              <br />
              <p><strong>E-Mail:</strong> dagdevirenreinigung25@gmail.com</p>
              <p><strong>Telefon:</strong> +41 76 322 42 43</p>
            </section>

            {/* YASAL TEMSİLCİ */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Vertretungsberechtigte Personen</h2>
              <p>Bilal Dagdeviren, Inhaber</p>
            </section>

            {/* TİCARET SİCİLİ (Varsa UID buraya girilir, yoksa bu standart kalır) */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Handelsregistereintrag</h2>
              <p>Eingetragener Firmenname: Dagdeviren Reinigung</p>
              <p>Nummer (UID): CHE-xxx.xxx.xxx (Falls vorhanden, bitte ergänzen)</p>
            </section>

            {/* SORUMLULUK REDDİ */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Haftungsausschluss</h2>
              <p className="mb-4">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
              <p>
                Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </section>

            {/* TELİF HAKKI */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Urheberrechte</h2>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma <strong>Dagdeviren Reinigung</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}