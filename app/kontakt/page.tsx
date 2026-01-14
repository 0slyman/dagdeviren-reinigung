"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function KontaktPage() {
  const [status, setStatus] = useState(""); // loading, success, error

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("loading");

    const formData = {
      ad: e.target.ad.value,
      soyad: e.target.soyad.value,
      email: e.target.email.value,
      hizmet: e.target.hizmet.value,
      mesaj: e.target.mesaj.value,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen">
      
      {/* 1. HERO BÖLÜMÜ - LACİVERT ZEMİN */}
      <section className="bg-slate-900 pt-40 pb-20 px-6 text-center text-white relative overflow-hidden">
        {/* Dekoratif Işık (Mavi tonunda hafif bir parlama kalabilir, şık durur) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-3xl rounded-full opacity-30 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Kontaktieren Sie <span className="text-blue-500">Uns</span>
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Haben Sie Fragen? Wir helfen Ihnen gerne weiter.
          </p>
        </motion.div>
      </section>

      {/* 2. BÖLÜM: Form ve Bilgiler */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* SOL TARAF: İletişim Bilgileri */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Kontaktinformationen</h3>
                <div className="space-y-6">
                    <p className="text-gray-600"><strong>Adresse:</strong> Hochbergplatz 1, 4057 Basel</p>
                    <p className="text-gray-600"><strong>Tel:</strong> +41 76 322 42 43</p>
                    <p className="text-gray-600"><strong>E-Mail:</strong> dagdevirenreinigung25@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* SAĞ TARAF: FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Schreiben Sie uns</h3>
              <p className="text-gray-500 mb-8">Füllen Sie das Formular aus, wir melden uns schnellstmöglich.</p>
              
              {status === "success" ? (
                <div className="bg-green-100 text-green-700 p-6 rounded-xl text-center animate-pulse">
                  <p className="text-4xl mb-2">✅</p>
                  <p className="font-bold text-lg">Nachricht gesendet!</p>
                  <p className="text-sm">Wir werden uns in Kürze bei Ihnen melden.</p>
                  <button onClick={() => setStatus("")} className="mt-4 text-sm underline text-green-800">Neue Nachricht</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Vorname</label>
                      <input 
                        type="text" name="ad" required 
                        className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:border-slate-900 focus:outline-none transition placeholder-gray-400" 
                        placeholder="Max" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Nachname</label>
                      <input 
                        type="text" name="soyad" required 
                        className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:border-slate-900 focus:outline-none transition placeholder-gray-400" 
                        placeholder="Mustermann" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">E-Mail</label>
                    <input 
                      type="email" name="email" required 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:border-slate-900 focus:outline-none transition placeholder-gray-400" 
                      placeholder="beispiel@email.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Dienstleistung</label>
                    <select 
                      name="hizmet" 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:border-slate-900 focus:outline-none transition cursor-pointer"
                    >
                      <option>Wohnungsreinigung</option>
                      <option>Büroreinigung</option>
                      <option>Umzugsreinigung</option>
                      <option>Fensterreinigung</option>
                      <option>Andere</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Ihre Nachricht</label>
                    <textarea 
                      name="mesaj" required rows={4} 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:border-slate-900 focus:outline-none transition placeholder-gray-400" 
                      placeholder="Wie können wir Ihnen helfen?"
                    ></textarea>
                  </div>

                  {/* BUTON RENGİ LACİVERT (bg-slate-900) */}
                  <button 
                    disabled={status === "loading"}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? "Wird gesendet..." : "Offerte Anfordern"}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-center bg-red-50 p-2 rounded">
                      Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}