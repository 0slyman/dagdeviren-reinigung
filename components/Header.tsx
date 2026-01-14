"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { name: "Startseite", href: "/" },
  { name: "Dienstleistungen", href: "/dienstleistungen/wohnungsreinigung" },
  { name: "Über Uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

const menuVars: Variants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
  exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const containerVars: Variants = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
};

const mobileLinkVars: Variants = {
  initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
  open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === "/"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isTransparent
            ? "bg-transparent border-transparent py-6" 
            : "bg-white shadow-sm py-4 border-slate-100" 
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-3 cursor-pointer relative z-50">
              <img 
                src="/icon.png" 
                alt="Dagdeviren Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
              <span className={`text-xl font-bold tracking-wide transition-colors ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}>
                DAGDEVIREN
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${
                    isTransparent 
                        ? "text-white/90 hover:text-white" 
                        : "text-slate-600 hover:text-blue-600"
                }`}
              >
                  {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/kontakt" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all"
              >
                Offerte Anfordern
              </motion.button>
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors z-50 relative ${
                isTransparent && !isMobileMenuOpen ? "text-white" : "text-slate-900"
              }`}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBİL MENÜ - ARTIK BEYAZ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            // DEĞİŞİKLİK: bg-slate-900 yerine bg-white
            className="fixed inset-0 z-40 bg-white origin-top flex flex-col justify-center px-6 md:hidden"
          >
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-8 text-center relative z-10"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      // DEĞİŞİKLİK: text-white yerine text-slate-900
                      className="text-4xl font-bold text-slate-900 hover:text-blue-600 transition-colors tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
              
              <div className="overflow-hidden mt-8">
                <motion.div variants={mobileLinkVars}>
                  <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-blue-700 transition-colors">
                      Offerte Anfordern
                    </button>
                  </Link>
                </motion.div>
              </div>

              <motion.div 
                variants={mobileLinkVars}
                className="mt-8 text-gray-500 text-sm"
              >
                <p>Hochbergplatz 1, 4057 Basel</p>
                <p className="mt-2">+41 76 322 42 43</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}