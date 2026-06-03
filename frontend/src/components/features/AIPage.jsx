import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiCpu, FiZap, FiCode, FiDatabase,
  FiActivity, FiTarget, FiArrowRight, FiCheck,
  FiMessageSquare, FiShield
} from 'react-icons/fi';

export default function AIPage() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Le futur de l\'IA tunisienne commence ici';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const aiCapabilities = [
    {
      icon: FiCode,
      title: 'Génération de Code',
      description: 'Création automatique de code optimisé et maintenable',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiMessageSquare,
      title: 'Gestion de Systèmes',
      description: 'Automatisation et optimisation des infrastructures',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiMessageSquare,
      title: 'Traitement du Langage',
      description: 'Compréhension avancée en arabe, français et anglais',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiShield,
      title: 'Sécurité IA',
      description: 'Détection et prévention des menaces en temps réel',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const llmFeatures = [
    'Comprend parfaitement le dialecte tunisien',
    'Agent AI intelligent et conversationnel',
    'Modèle LLM avancé et performant',
    'Support multilingue (Tunisien, Arabe, Français)',
    'Spécialisé pour le marché tunisien',
    'Première IA 100% tunisienne'
  ];

  const stats = [
    { value: '99.9%', label: 'Précision', icon: FiTarget },
    { value: '<100ms', label: 'Latence', icon: FiZap },
    { value: '50B+', label: 'Paramètres', icon: FiDatabase },
    { value: '24/7', label: 'Disponibilité', icon: FiActivity }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6"
            >
              <FiCpu className="w-4 h-4 text-purple-400" />
              <span className="text-xs md:text-sm text-purple-300 font-medium">Intelligence Artificielle Avancée</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Le IA qui révolutionne<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                le développement tunisien
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-6"
            >
              <FiCheck className="w-4 h-4 text-green-400" />
              <span className="text-xs md:text-sm text-green-300 font-semibold">Première IA à comprendre parfaitement le tunisien</span>
            </motion.div>
            
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4 mb-4">
              {typedText}<span className="animate-pulse">|</span>
            </p>
            
            <p className="text-xs md:text-sm text-white/40 max-w-2xl mx-auto px-4 mb-8">
              La seule intelligence artificielle capable de comprendre et communiquer<br className="hidden sm:block" />
              couramment en <span className="text-green-400 font-semibold">dialecte tunisien</span>, <span className="text-purple-400 font-semibold">arabe</span> et <span className="text-pink-400 font-semibold">français</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/50"
                >
                  Accéder à la bêta
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
              >
                Documentation
              </motion.button>
            </div>
          </motion.div>

          {/* AI Neural Network Visualization - Sophisticated LLM Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative h-64 md:h-80 lg:h-96"
          >
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#e879f9" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="nodeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e879f9" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Input Layer - 8 nodes */}
              {[40, 80, 120, 160, 200, 240, 280, 320].map((y, i) => (
                <motion.g key={`input-${i}`}>
                  <motion.circle
                    cx="80"
                    cy={y}
                    r="6"
                    fill="url(#nodeGrad1)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ delay: i * 0.05, repeat: Infinity, duration: 3 }}
                  />
                  <motion.circle
                    cx="80"
                    cy={y}
                    r="10"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="1"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ delay: i * 0.05, repeat: Infinity, duration: 3 }}
                  />
                </motion.g>
              ))}
              
              {/* Hidden Layer 1 - 12 nodes */}
              {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y, i) => (
                <motion.g key={`hidden1-${i}`}>
                  <motion.circle
                    cx="250"
                    cy={y}
                    r="7"
                    fill="url(#nodeGrad1)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ delay: 0.4 + i * 0.04, repeat: Infinity, duration: 2.5 }}
                  />
                </motion.g>
              ))}
              
              {/* Hidden Layer 2 - 16 nodes (Transformer attention) */}
              {[20, 45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395].map((y, i) => (
                <motion.g key={`hidden2-${i}`}>
                  <motion.circle
                    cx="420"
                    cy={y}
                    r="8"
                    fill="url(#nodeGrad2)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ delay: 0.8 + i * 0.03, repeat: Infinity, duration: 2.8 }}
                  />
                </motion.g>
              ))}
              
              {/* Hidden Layer 3 - 12 nodes */}
              {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y, i) => (
                <motion.g key={`hidden3-${i}`}>
                  <motion.circle
                    cx="590"
                    cy={y}
                    r="7"
                    fill="url(#nodeGrad2)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ delay: 1.2 + i * 0.04, repeat: Infinity, duration: 2.5 }}
                  />
                </motion.g>
              ))}
              
              {/* Hidden Layer 4 - 8 nodes */}
              {[60, 100, 140, 180, 220, 260, 300, 340].map((y, i) => (
                <motion.g key={`hidden4-${i}`}>
                  <motion.circle
                    cx="750"
                    cy={y}
                    r="7"
                    fill="url(#nodeGrad3)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ delay: 1.6 + i * 0.05, repeat: Infinity, duration: 2.5 }}
                  />
                </motion.g>
              ))}
              
              {/* Output Layer - 4 nodes */}
              {[100, 150, 200, 250].map((y, i) => (
                <motion.g key={`output-${i}`}>
                  <motion.circle
                    cx="900"
                    cy={y}
                    r="10"
                    fill="url(#nodeGrad3)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ delay: 2 + i * 0.1, repeat: Infinity, duration: 3 }}
                  />
                  <motion.circle
                    cx="900"
                    cy={y}
                    r="15"
                    fill="none"
                    stroke="#d946ef"
                    strokeWidth="1.5"
                    opacity="0.4"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ delay: 2 + i * 0.1, repeat: Infinity, duration: 3 }}
                  />
                </motion.g>
              ))}
              
              {/* Connections - Input to Hidden1 (all-to-all) */}
              {[40, 80, 120, 160, 200, 240, 280, 320].map((y1) =>
                [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y2) => (
                  <motion.line
                    key={`conn-in-h1-${y1}-${y2}`}
                    x1="80"
                    y1={y1}
                    x2="250"
                    y2={y2}
                    stroke="#a78bfa"
                    strokeWidth="0.5"
                    opacity="0.08"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, opacity: [0.04, 0.12, 0.04] }}
                    transition={{ delay: 0.3, duration: 2, repeat: Infinity }}
                  />
                ))
              )}
              
              {/* Connections - Hidden1 to Hidden2 (all-to-all) */}
              {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y1) =>
                [20, 45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395].map((y2) => (
                  <motion.line
                    key={`conn-h1-h2-${y1}-${y2}`}
                    x1="250"
                    y1={y1}
                    x2="420"
                    y2={y2}
                    stroke="#c084fc"
                    strokeWidth="0.6"
                    opacity="0.06"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, opacity: [0.03, 0.1, 0.03] }}
                    transition={{ delay: 0.8, duration: 2.5, repeat: Infinity }}
                  />
                ))
              )}
              
              {/* Connections - Hidden2 to Hidden3 (all-to-all) */}
              {[20, 45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395].map((y1) =>
                [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y2) => (
                  <motion.line
                    key={`conn-h2-h3-${y1}-${y2}`}
                    x1="420"
                    y1={y1}
                    x2="590"
                    y2={y2}
                    stroke="#e879f9"
                    strokeWidth="0.6"
                    opacity="0.06"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, opacity: [0.03, 0.1, 0.03] }}
                    transition={{ delay: 1.2, duration: 2.5, repeat: Infinity }}
                  />
                ))
              )}
              
              {/* Connections - Hidden3 to Hidden4 (all-to-all) */}
              {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y1) =>
                [60, 100, 140, 180, 220, 260, 300, 340].map((y2) => (
                  <motion.line
                    key={`conn-h3-h4-${y1}-${y2}`}
                    x1="590"
                    y1={y1}
                    x2="750"
                    y2={y2}
                    stroke="#e879f9"
                    strokeWidth="0.7"
                    opacity="0.08"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, opacity: [0.04, 0.12, 0.04] }}
                    transition={{ delay: 1.6, duration: 2.5, repeat: Infinity }}
                  />
                ))
              )}
              
              {/* Connections - Hidden4 to Output (all-to-all) */}
              {[60, 100, 140, 180, 220, 260, 300, 340].map((y1) =>
                [100, 150, 200, 250].map((y2) => (
                  <motion.line
                    key={`conn-h4-out-${y1}-${y2}`}
                    x1="750"
                    y1={y1}
                    x2="900"
                    y2={y2}
                    stroke="#d946ef"
                    strokeWidth="0.8"
                    opacity="0.1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, opacity: [0.05, 0.15, 0.05] }}
                    transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
                  />
                ))
              )}
              
              {/* Data flow particles */}
              {[...Array(30)].map((_, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r="2"
                  fill="#e879f9"
                  opacity="0.6"
                  initial={{ cx: 80, cy: 40 + (i * 10) }}
                  animate={{
                    cx: [80, 250, 420, 590, 750, 900],
                    cy: [40 + (i * 10), 60 + (i * 8), 100 + (i * 6), 120 + (i * 8), 150 + (i * 5), 175],
                    opacity: [0, 0.8, 0.6, 0.8, 0.6, 0]
                  }}
                  transition={{
                    delay: i * 0.15,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
            
            {/* Floating particles in background */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  delay: Math.random() * 3,
                  duration: 4,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/[0.08] rounded-xl p-4 md:p-6 text-center hover:border-purple-500/30 transition-all"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Model Announcement */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                >
                  <FiCpu className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-center sm:text-left">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">Punika AI</h2>
                  <p className="text-purple-300 text-xs md:text-sm lg:text-base">Premier modèle AI tunisien</p>
                </div>
              </div>

              <p className="text-white/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                <span className="text-white font-semibold">Punika AI</span> est le premier modèle de intelligence artificielle tunisien 
                qui met la Tunisie sur la carte des pays ayant leur propre modèle AI avancé. Une IA qui comprend parfaitement 
                le <span className="text-green-400 font-semibold">dialecte tunisien</span>, conçue pour révolutionner la manière dont 
                les entreprises tunisiennes interagissent avec la technologie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {llmFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/[0.05] rounded-lg border border-white/[0.08]"
                  >
                    <FiCheck className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/70 text-xs md:text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/50 text-sm md:text-base"
                >
                  Rejoindre la liste de attente
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 md:px-6 py-2 md:py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all text-sm md:text-base"
                >
                  En savoir plus
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Capacités IA avancées</h2>
            <p className="text-white/50 text-sm md:text-base">Des solutions intelligentes pour chaque besoin</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 md:p-6 hover:border-purple-500/30 transition-all">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-3 md:mb-4`}>
                    <capability.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{capability.title}</h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Prêt à intégrer l IA ?
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Transformez votre entreprise avec nos solutions de intelligence artificielle
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-darkBg rounded-lg font-medium hover:bg-white/90 transition-all"
                >
                  Contactez-nous
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
