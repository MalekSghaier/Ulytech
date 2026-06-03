import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="-mt-24 lg:mt-0 lg:py-20 relative overflow-hidden">
      {/* Background Chart/Plot */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full opacity-30 blur-sm" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {/* Grid lines */}
          <g stroke="#8B5CF6" strokeWidth="1" opacity="0.4">
            {[...Array(10)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 60} x2="1200" y2={i * 60} />
            ))}
            {[...Array(20)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="600" />
            ))}
          </g>
          {/* Chart line */}
          <path
            d="M 0 400 Q 150 350, 300 300 T 600 200 T 900 150 T 1200 100"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            opacity="0.8"
          />
          {/* Area under curve */}
          <path
            d="M 0 400 Q 150 350, 300 300 T 600 200 T 900 150 T 1200 100 L 1200 600 L 0 600 Z"
            fill="url(#areaGradient)"
            opacity="0.25"
          />
          {/* Data points */}
          {[0, 300, 600, 900, 1200].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={400 - i * 75}
              r="6"
              fill="#A78BFA"
              opacity="0.9"
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white leading-tight">
              Nous créons l outil de gestion de projets pour les équipes qui se soucient de la qualité
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              La technologie était autrefois magique. Mais une grande partie de cette magie s est perdue avec le temps, remplacée par des outils et des pratiques médiocres qui ralentissent les équipes et freinent le travail de qualité. Frustrés par le statu quo, nous avons décidé de construire quelque chose de meilleur. Quelque chose que les équipes aimeraient vraiment utiliser.
            </p>
            <p className="text-white/50 leading-relaxed">
              Ce qui a commencé comme un simple tracker de problèmes, a depuis évolué en un système puissant de gestion de projets qui rationalise les flux de travail tout au long du processus de développement. Nous ne considérons pas UlyTech comme un simple "outil" meilleur, mais comme une meilleure "façon" de construire des logiciels.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white leading-tight">
              Nous nous soucions profondément de la qualité de notre travail
            </h3>
            <p className="text-white/50 leading-relaxed mb-6">
              UlyTech a toujours été une entreprise entièrement distante. Aujourdhui, notre petite mais puissante équipe est répartie entre le Afrique du Nord et l Europe. Ce qui nous unit, c est notre concentration implacable, notre exécution rapide et notre passion pour le artisanat logiciel.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Nous sommes tous des créateurs dans l âme et nous nous soucions profondément de la qualité de notre travail, jusqu au moindre détail. Aujourd hui, des milliers d équipes à travers le monde utilisent nos solutions pour construire leurs produits.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-darkBg rounded-lg font-medium text-sm hover:bg-white/90 transition-all"
              >
                Commencer avec nous
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
