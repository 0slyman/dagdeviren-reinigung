import Link from "next/link";

export default function Footer() {
  return (
    // DEĞİŞİKLİK: bg-slate-50 yerine bg-white (Tam Beyaz)
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-100">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* 1. SÜTUN: Marka ve Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/icon.png" 
                alt="Dagdeviren Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-xl font-bold tracking-wide text-slate-900">DAGDEVIREN</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Professionelle Reinigungsdienste in Basel und Umgebung. Zuverlässig, gründlich und zu fairen Preisen.
            </p>
          </div>

          {/* 2. SÜTUN: Hızlı Erişim */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 border-b border-slate-100 pb-2 inline-block">Schnellzugriff</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href="/" className="hover:text-blue-600 transition flex items-center gap-2"><span>&rsaquo;</span> Startseite</Link></li>
              <li><Link href="/dienstleistungen/wohnungsreinigung" className="hover:text-blue-600 transition flex items-center gap-2"><span>&rsaquo;</span> Dienstleistungen</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-blue-600 transition flex items-center gap-2"><span>&rsaquo;</span> Über Uns</Link></li>
              <li><Link href="/kontakt" className="hover:text-blue-600 transition flex items-center gap-2"><span>&rsaquo;</span> Kontakt</Link></li>
            </ul>
          </div>

          {/* 3. SÜTUN: İletişim */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 border-b border-slate-100 pb-2 inline-block">Kontakt</h3>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-0.5">📍</span>
                <span>Hochbergplatz 1, <br />4057 Basel, Schweiz</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600">📞</span>
                <span className="font-semibold text-slate-900">+41 76 322 42 43</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600">✉️</span>
                <span>dagdevirenreinigung25@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* 4. SÜTUN: Çalışma Saatleri */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 border-b border-slate-100 pb-2 inline-block">Öffnungszeiten</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span>Mo - Fr</span>
                <span className="text-slate-900 font-medium">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span>Samstag</span>
                <span className="text-slate-900 font-medium">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span>Sonntag</span>
                <span className="text-red-500 font-medium bg-red-50 px-2 py-0.5 rounded text-xs">Geschlossen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dagdeviren Reinigung. Alle Rechte vorbehalten.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-blue-600 transition">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-blue-600 transition">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-blue-600 transition">AGB</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}