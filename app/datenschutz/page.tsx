"use client";

import { motion } from "framer-motion";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <p>
                Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere des Schweizerischen Datenschutzgesetzes (DSG) und der EU-Datenschutzgrundverordnung (DSGVO), ist:
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-xl">
                <p><strong>Dagdeviren Reinigung</strong></p>
                <p>Herr Bilal Dagdeviren</p>
                <p>Hochbergplatz 1</p>
                <p>4057 Basel</p>
                <p>E-Mail: dagdevirenreinigung25@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Allgemeiner Hinweis</h2>
              <p>
                Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">SSL-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}