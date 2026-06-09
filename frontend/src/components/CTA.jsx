import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
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
              De l'idée au produit IA en production — sans friction, sans délai
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
             Vous avez une idée, un problème à résoudre ou un processus à automatiser. Nous prenons en charge tout le reste — conception, développement, déploiement. En quelques semaines, votre solution IA est en production et génère de la valeur réelle pour votre entreprise.            </p>
            <p className="text-white/50 leading-relaxed">
             Pas de promesses floues, pas de projets qui s'éternisent. La méthode UlyTech est simple : comprendre votre métier, construire rapidement, livrer proprement. Du plus petit outil IA à la solution SaaS la plus ambitieuse — chaque solution est taillée pour votre réalité, pas pour un cas générique.             
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
              La qualité et la rapidité ne sont pas un choix — chez UlyTech, c'est les deux
            </h3>
            <p className="text-white/50 leading-relaxed mb-6">
              L'équipe UlyTech est basée à Kairouan, au cœur de la Tunisie. Une équipe jeune, technique et passionnée par l'intelligence artificielle — qui comprend les défis des entreprises tunisiennes et nord-africaines mieux que quiconque.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Chaque projet est traité avec rigueur, de la première ligne de code jusqu'à la mise en production. Aucun détail n'est laissé au hasard — parce que la réussite de votre projet, c'est aussi la nôtre.
            </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/contact');
                }}
                className="px-6 py-3 bg-white text-darkBg rounded-lg font-medium text-sm hover:bg-white/90 transition-all"
              >
                Commencer avec nous
              </motion.button>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
