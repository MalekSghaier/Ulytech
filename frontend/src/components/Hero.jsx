import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCode, FiCpu, FiCloud } from 'react-icons/fi';



export default function Hero() {

  const phrases = [
    { avant: 'Créateurs de',   accent: 'Produits Numériques',  apres: 'Innovants'     },
    { avant: 'Ingénierie de',  accent: 'Solutions Digitales',  apres: 'Intelligentes' },
    { avant: 'Architectes de', accent: 'Systèmes IA',          apres: 'Performants'   },
    { avant: 'Bâtisseurs de',  accent: 'Plateformes SaaS',     apres: 'Évolutives'    },
    { avant: 'Experts en',     accent: 'Transformation',       apres: 'Digitale'      },
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const navigate = useNavigate();


  useEffect(() => {
    const current = phrases[phraseIndex];
    const fullText = `${current.avant} ${current.accent} ${current.apres}`;
    let timeout;

    if (phase === 'typing') {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), 50);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 3000);
      }
    }
    if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 200);
    }
    if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      } else {
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, phase, phraseIndex]);

  const current = phrases[phraseIndex];
  const avantEnd  = current.avant.length;
  const accentEnd = current.avant.length + 1 + current.accent.length;
  const part1 = displayed.slice(0, Math.min(displayed.length, avantEnd));
  const part2 = displayed.length > avantEnd ? displayed.slice(avantEnd, Math.min(displayed.length, accentEnd)).trimStart() : '';
  const part3 = displayed.length > accentEnd ? displayed.slice(accentEnd).trimStart() : '';
  const cursorAfter = displayed.length > accentEnd ? 'part3' : displayed.length > avantEnd ? 'part2' : 'part1';

  const Cursor = () => (
    <span className={`inline-block w-[2px] h-[0.78em] align-middle ml-[2px] rounded-sm ${phase === 'pause' ? 'animate-pulse bg-violet-300' : 'bg-violet-400'}`} />
  );

  const titleStyle = { fontFamily: "'Manrope', sans-serif", fontWeight: 300, letterSpacing: '-0.01em' };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap');`}</style>

      {/* Desktop gradient */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-darkBg via-primary/30 to-violet/20" />

      {/* Floating particles */}
      <div className="hidden lg:block absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 bg-violet/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Mobile background */}
      <div className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/two-factor-authentication-confirmation.jpg)' }} />
      <div className="lg:hidden absolute inset-0 bg-darkBg/60" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">

        {/* ── Desktop ── */}
        <div className="hidden lg:grid max-w-7xl mx-auto lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">

            <motion.h1
              style={titleStyle}
              className="text-5xl md:text-6xl lg:text-[4.2rem] font-light mb-6 min-h-[300px] flex flex-col justify-start leading-[1.18]"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white/90 block">
                {part1}{cursorAfter === 'part1' && <Cursor />}
                {!part1 && <span className="opacity-0">.</span>}
              </span>
              <span className="gradient-text block">
                {part2}{cursorAfter === 'part2' && <Cursor />}
                {!part2 && <span className="opacity-0">.</span>}
              </span>
              <span className="text-white/90 block">
                {part3}{cursorAfter === 'part3' && <Cursor />}
                {!part3 && <span className="opacity-0">.</span>}
              </span>
            </motion.h1>

            <motion.p className="text-base md:text-lg text-white/50 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Nous combinons expertise technique, innovation et compréhension métier pour créer des produits digitaux{' '}
              <span className="text-violet-300/80">évolutifs, sécurisés et intelligents</span>.
            </motion.p>

            <motion.div className="flex flex-wrap gap-5 mb-8"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              {[
                { icon: FiCode,  label: 'Développement Web', color: 'text-electricPink' },
                { icon: FiCpu,   label: 'Solutions IA',       color: 'text-aquaBlue'    },
                { icon: FiCloud, label: 'Cloud & DevOps',     color: 'text-lightPurple' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center space-x-2 text-white/40">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-sm" style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 300 }}>{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-white text-darkBg rounded-lg font-medium text-sm hover:bg-white/90 transition-all flex items-center space-x-2 group justify-center"
                style={{ fontFamily: "'Manrope',sans-serif" }}>
                <span>Discutons de votre projet</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const el = document.getElementById('portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                className="px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-all flex items-center space-x-2 group justify-center"
                style={{ fontFamily: "'Manrope',sans-serif" }}>
                <FiPlay className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Découvrir nos Réalisations</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — Illustration SVG animée */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Halo violet derrière */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
              </div>

              <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto relative z-10">
                <defs>
                  <linearGradient id="gv" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="gp" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#f472b6" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.5"/>
                  </linearGradient>
                </defs>

                {/* Lignes de connexion entre les cartes */}
                <line x1="260" y1="140" x2="130" y2="240" stroke="url(#gv)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <line x1="260" y1="140" x2="390" y2="240" stroke="url(#gb)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="130" y1="300" x2="200" y2="370" stroke="url(#gp)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.8s" repeatCount="indefinite"/>
                </line>
                <line x1="390" y1="300" x2="320" y2="370" stroke="url(#gg)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite"/>
                </line>

                {/* Nœud central — UlyTech */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="3s" repeatCount="indefinite"/>
                  <rect x="205" y="90" width="110" height="100" rx="20" fill="url(#gv)" opacity="0.15"/>
                  <rect x="205" y="90" width="110" height="100" rx="20" stroke="url(#gv)" strokeWidth="1.5" fill="none"/>
                  {/* Logo UlyTech stylisé */}
                  <circle cx="260" cy="128" r="22" fill="url(#gv)" opacity="0.3"/>
                  <text x="260" y="134" textAnchor="middle" fill="white" fontSize="13" fontFamily="Manrope,sans-serif" fontWeight="700" opacity="0.95">UlyTech</text>
                  <text x="260" y="172" textAnchor="middle" fill="white" fontSize="9" fontFamily="Manrope,sans-serif" fontWeight="300" opacity="0.5">Solutions Digitales</text>
                </g>

                {/* Carte Web */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,5;0,0" dur="3.5s" repeatCount="indefinite"/>
                  <rect x="60" y="230" width="140" height="80" rx="16" fill="rgba(124,58,237,0.08)" stroke="url(#gv)" strokeWidth="1.2"/>
                  {/* Icône code */}
                  <text x="90" y="262" fill="#a78bfa" fontSize="18" fontFamily="monospace" opacity="0.9">&lt;/&gt;</text>
                  <text x="90" y="280" fill="white" fontSize="11" fontFamily="Manrope,sans-serif" fontWeight="400" opacity="0.85">Développement</text>
                  <text x="90" y="296" fill="white" fontSize="11" fontFamily="Manrope,sans-serif" fontWeight="300" opacity="0.5">Web & Mobile</text>
                </g>

                {/* Carte IA */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,5;0,0" dur="4s" repeatCount="indefinite"/>
                  <rect x="320" y="230" width="140" height="80" rx="16" fill="rgba(14,165,233,0.08)" stroke="url(#gb)" strokeWidth="1.2"/>
                  {/* Icône IA — neurones */}
                  <circle cx="350" cy="262" r="5" fill="#38bdf8" opacity="0.7"/>
                  <circle cx="366" cy="255" r="4" fill="#38bdf8" opacity="0.5"/>
                  <circle cx="366" cy="269" r="4" fill="#38bdf8" opacity="0.5"/>
                  <line x1="355" y1="262" x2="362" y2="255" stroke="#38bdf8" strokeWidth="1" opacity="0.5"/>
                  <line x1="355" y1="262" x2="362" y2="269" stroke="#38bdf8" strokeWidth="1" opacity="0.5"/>
                  <text x="378" y="264" fill="white" fontSize="11" fontFamily="Manrope,sans-serif" fontWeight="400" opacity="0.85">Intelligence</text>
                  <text x="320" y="296" fill="white" fontSize="11" fontFamily="Manrope,sans-serif" fontWeight="300" opacity="0.5" textAnchor="start">Artificielle</text>
                </g>

                {/* Carte Cybersécurité */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="4.5s" repeatCount="indefinite"/>
                  <rect x="130" y="355" width="120" height="75" rx="16" fill="rgba(236,72,153,0.08)" stroke="url(#gp)" strokeWidth="1.2"/>
                  {/* Icône bouclier */}
                  <path d="M178 373 L190 377 L190 390 C190 396 178 400 178 400 C178 400 166 396 166 390 L166 377 Z" fill="none" stroke="#f472b6" strokeWidth="1.5" opacity="0.8"/>
                  <path d="M174 386 L177 389 L183 383" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                  <text x="178" y="416" textAnchor="middle" fill="white" fontSize="10" fontFamily="Manrope,sans-serif" fontWeight="400" opacity="0.85">Cybersécurité</text>
                </g>

                {/* Carte Cloud */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="5s" repeatCount="indefinite"/>
                  <rect x="270" y="355" width="120" height="75" rx="16" fill="rgba(16,185,129,0.08)" stroke="url(#gg)" strokeWidth="1.2"/>
                  {/* Icône cloud */}
                  <path d="M305 388 C305 383 309 379 314 379 C316 375 320 372 325 372 C332 372 338 378 338 385 C341 385 344 388 344 391 C344 395 341 398 337 398 L305 398 C301 398 298 395 298 391 C298 388 301 386 305 388 Z" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.8"/>
                  <text x="330" y="416" textAnchor="middle" fill="white" fontSize="10" fontFamily="Manrope,sans-serif" fontWeight="400" opacity="0.85">Cloud & DevOps</text>
                </g>

                {/* Points lumineux flottants */}
                <circle cx="180" cy="180" r="3" fill="#a78bfa" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="340" cy="195" r="2" fill="#38bdf8" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="420" cy="350" r="2.5" fill="#f472b6" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="340" r="2" fill="#34d399" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden max-w-md mx-auto text-center">
          <motion.h1
            style={{ ...titleStyle, fontWeight: 300 }}
            className="text-3xl font-light mb-6 min-h-[200px] flex flex-col items-center justify-start leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-white/90 block">
              {part1}{cursorAfter === 'part1' && <Cursor />}
              {!part1 && <span className="opacity-0">.</span>}
            </span>
            <span className="gradient-text block">
              {part2}{cursorAfter === 'part2' && <Cursor />}
              {!part2 && <span className="opacity-0">.</span>}
            </span>
            <span className="text-white/90 block">
              {part3}{cursorAfter === 'part3' && <Cursor />}
              {!part3 && <span className="opacity-0">.</span>}
            </span>
          </motion.h1>

          <motion.div className="flex justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {[
              { icon: FiCode,  color: 'from-electricPink/20 to-electricPink/5 border-electricPink/20', ic: 'text-electricPink', label: 'Web' },
              { icon: FiCpu,   color: 'from-aquaBlue/20 to-aquaBlue/5 border-aquaBlue/20',             ic: 'text-aquaBlue',    label: 'IA'  },
              { icon: FiCloud, color: 'from-lightPurple/20 to-lightPurple/5 border-lightPurple/20',    ic: 'text-lightPurple', label: 'Cloud' },
            ].map(({ icon: Ic, color, ic, label }) => (
              <div key={label} className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} border flex items-center justify-center`}>
                  <Ic className={`w-6 h-6 ${ic}`} />
                </div>
                <span className="text-xs text-white/60" style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 300 }}>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <motion.button whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="w-full px-6 py-3 bg-white text-darkBg rounded-lg font-medium text-sm hover:bg-white/90 transition-all flex items-center justify-center space-x-2"
              style={{ fontFamily: "'Manrope',sans-serif" }}>
              <span>Discutons de votre projet</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('portfolio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              style={{ fontFamily: "'Manrope',sans-serif" }}>
              <FiPlay className="w-4 h-4" />
              <span>Découvrir nos Réalisations</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}