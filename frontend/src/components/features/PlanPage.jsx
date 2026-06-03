import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FiTarget, FiTrendingUp, FiFileText, FiGitBranch, FiBox, FiEdit3, FiMessageSquare, FiLayers, FiCommand } from 'react-icons/fi';

export default function PlanPage() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastAngleRef = useRef(0);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.3;
  }, []);

  const playTick = () => {
    if (audioRef.current) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastAngleRef.current = e.clientX;
  };
  
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastAngleRef.current;
    
    if (Math.abs(deltaX) > 3) {
      playTick();
      lastAngleRef.current = e.clientX;
    }
    
    setRotation(prev => prev + deltaX * 0.5);
  };
  const features = [
    {
      icon: FiTarget,
      title: 'Projets',
      subtitle: 'Gérez vos projets de bout en bout',
      description: 'Façonnez les idées, spécifiez ce qu’il faut construire ensuite et collaborez sur des documents de projet avec des commentaires en ligne. Utilisez des modèles de projet et des commandes texte vers tâche pour passer des spécifications aux tâches concrètes de manière fluide.'
    },
    {
      icon: FiTrendingUp,
      title: 'Étapes & Dépendances',
      subtitle: 'Décomposez les projets en phases',
      description: 'Décomposez les projets en étapes pour une planification plus granulaire avec des dates et phases clés. Cartographiez les dépendances entre projets pour visualiser les chemins critiques et optimiser l’allocation des ressources.'
    },
    {
      icon: FiFileText,
      title: 'Documentation Unifiée',
      subtitle: 'Tout en un seul endroit pour les docs projet',
      description: 'Stockez spécifications, documents et tâches ensemble. Basculez entre spécs et tâches, suivez la santé du projet avec des analyses et conservez tous les artefacts du projet dans un emplacement central.'
    },
    {
      icon: FiGitBranch,
      title: 'Initiatives',
      subtitle: 'Planification stratégique',
      description: 'Alignez les projets sous des efforts stratégiques plus larges. Fournissez des résumés, liez des ressources, connectez des projets liés et surveillez les progrès à grande échelle pour voir si les initiatives sont sur la bonne voie.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-xs md:text-sm text-white/40 mb-3 md:mb-4 tracking-wider uppercase">ulytech Plan</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 md:mb-6 tracking-tight leading-tight">
              Planifiez et naviguez de<br /><span className="text-purple-400">l'idée au lancement</span>
            </h1>
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4">
              Définissez la direction et cartographiez votre parcours produit<br className="hidden sm:block" />avec des fonctionnalités de planification dédiées.
            </p>
          </motion.div>

          {/* Hero Visual - Futuristic HUD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative cursor-grab active:cursor-grabbing h-[300px] md:h-[400px]"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform={`rotate(${rotation} 500 200)`}>
              {/* Top Label */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <text x="500" y="40" fill="#ffffff" fillOpacity="0.6" fontSize="11" textAnchor="middle" fontFamily="monospace">Plan au Lancement</text>
              </motion.g>
              
              {/* Concentric Arcs */}
              <motion.g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <path d="M 200 150 Q 500 120 800 150" fill="none" />
                <path d="M 150 200 Q 500 160 850 200" fill="none" />
                <path d="M 100 260 Q 500 200 900 260" fill="none" />
              </motion.g>
              
              {/* Small tick marks on arcs */}
              <motion.g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.25" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                {[250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750].map((x, i) => (
                  <line key={i} x1={x} y1={145 + Math.sin((x - 500) / 150) * 15} x2={x} y2={150 + Math.sin((x - 500) / 150) * 15} />
                ))}
                {[200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800].map((x, i) => (
                  <line key={`m${i}`} x1={x} y1={195 + Math.sin((x - 500) / 180) * 20} x2={x} y2={200 + Math.sin((x - 500) / 180) * 20} />
                ))}
              </motion.g>
              
              {/* Longer interval ticks */}
              <motion.g stroke="#a78bfa" strokeWidth="0.8" strokeOpacity="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                {[300, 400, 500, 600, 700].map((x, i) => (
                  <line key={i} x1={x} y1={143 + Math.sin((x - 500) / 150) * 15} x2={x} y2={155 + Math.sin((x - 500) / 150) * 15} />
                ))}
              </motion.g>
              
              {/* Vertical lines extending down */}
              <motion.g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }}>
                <line x1="300" y1="155" x2="300" y2="320" />
                <line x1="400" y1="148" x2="400" y2="300" />
                <line x1="500" y1="145" x2="500" y2="340" />
                <line x1="600" y1="148" x2="600" y2="300" />
                <line x1="700" y1="155" x2="700" y2="320" />
              </motion.g>
              
              {/* Center accent lines */}
              <motion.g stroke="#c084fc" strokeWidth="1" strokeOpacity="0.4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <line x1="480" y1="145" x2="480" y2="280" />
                <line x1="520" y1="145" x2="520" y2="280" />
              </motion.g>
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Small Title with Icon */}
              <div className="flex items-center gap-2 mb-6">
                <FiBox className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-white/70">Projets</span>
              </div>

              {/* Main Heading - 2 rows */}
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Gérez vos projets<br />de bout en bout
              </h2>

              {/* Description Paragraph */}
              <p className="text-white/40 mb-6 md:mb-10 leading-relaxed text-sm md:text-[15px]">
                Façonnez vos idées produit. Idéalisez et spécifiez ce qu'il faut construire ensuite. Travaillez sur des propositions et discutez des spécifications dans des documents de projet collaboratifs.
              </p>

              {/* Features Grid - 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <FiEdit3 className="w-5 h-5 text-purple-400" />
                  <span className="text-white/60 text-xs md:text-sm">Édition collaborative</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMessageSquare className="w-5 h-5 text-purple-400" />
                  <span className="text-white/60 text-xs md:text-sm">Commentaires en ligne</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiLayers className="w-5 h-5 text-purple-400" />
                  <span className="text-white/60 text-xs md:text-sm">Modèles de projet</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCommand className="w-5 h-5 text-purple-400" />
                  <span className="text-white/60 text-xs md:text-sm">Commandes texte vers tâche</span>
                </div>
              </div>
            </motion.div>

            {/* IDE Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border border-white/[0.08]" style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)' }}>
                <div className="bg-[#1e1e1e]">
                  {/* Top Menu Bar */}
                  <div className="bg-[#323233] px-3 py-1.5 flex items-center justify-between border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                      </div>
                      <span className="text-[10px] text-white/50 ml-2">File Edit View</span>
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">12:34 PM</span>
                  </div>

                  <div className="flex">
                    {/* Sidebar */}
                    <div className="bg-[#252526] w-12 flex flex-col items-center py-3 gap-3 border-r border-white/[0.08]">
                      <div className="w-6 h-6 flex items-center justify-center text-white/60">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 0h13l.5.5v15l-.5.5h-13l-.5-.5v-15l.5-.5zM2 1v14h12V1H2z"/><path d="M4 3h8v1H4V3zm0 2h8v1H4V5zm0 2h8v1H4V7zm0 2h5v1H4V9z"/></svg>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center text-white/40">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M14.5 1h-13l-.5.5v13l.5.5h13l.5-.5v-13l-.5-.5zM14 14H2V2h12v12z"/><path d="M11 6L8 9 5 6h6z"/></svg>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center text-white/40">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7"/></svg>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                      {/* Tabs */}
                      <div className="bg-[#252526] flex items-center border-b border-white/[0.08]">
                        <div className="bg-[#1e1e1e] px-3 py-2 text-[11px] text-white/70 font-mono border-r border-white/[0.08] flex items-center gap-2">
                          <span className="text-yellow-400">●</span>
                          ProjectManager.js
                        </div>
                        <div className="px-3 py-2 text-[11px] text-white/40 font-mono">utils.js</div>
                      </div>

                      {/* Code Editor */}
                      <div className="p-4 font-mono text-[11px] leading-relaxed">
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">1</span><span className="text-purple-400">import</span><span className="text-white/70"> React </span><span className="text-purple-400">from</span><span className="text-orange-300"> 'react'</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">2</span><span className="text-purple-400">import</span><span className="text-white/70"> </span><span className="text-white/50">{'{ '}</span><span className="text-blue-300">useState</span><span className="text-white/50">{' }'}</span><span className="text-purple-400"> from</span><span className="text-orange-300"> 'react'</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">3</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">4</span><span className="text-purple-400">const</span><span className="text-white/70"> </span><span className="text-blue-300">ProjectManager</span><span className="text-white/70"> = </span><span className="text-white/50">()</span><span className="text-purple-400"> =&gt;</span><span className="text-white/70"> </span><span className="text-white/50">{'{'}</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">5</span><span className="text-purple-400">  const</span><span className="text-white/70"> [</span><span className="text-blue-300">projects</span><span className="text-white/70">, </span><span className="text-blue-300">setProjects</span><span className="text-white/70">] = </span><span className="text-blue-300">useState</span><span className="text-white/50">([])</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">6</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">7</span><span className="text-purple-400">  const</span><span className="text-white/70"> </span><span className="text-blue-300">createProject</span><span className="text-white/70"> = </span><span className="text-white/50">(</span><span className="text-orange-300">name</span><span className="text-white/50">)</span><span className="text-purple-400"> =&gt;</span><span className="text-white/70"> </span><span className="text-white/50">{'{'}</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">8</span><span className="text-purple-400">    const</span><span className="text-white/70"> newProject = </span><span className="text-white/50">{'{'}</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">9</span><span className="text-white/70">      id: </span><span className="text-blue-300">Date</span><span className="text-white/50">.</span><span className="text-blue-300">now</span><span className="text-white/50">()</span><span className="text-white/50">,</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">10</span><span className="text-white/70">      name,</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">11</span><span className="text-white/70">      status: </span><span className="text-orange-300">'active'</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">12</span><span className="text-white/50">    {'}'}</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">13</span><span className="text-blue-300">    setProjects</span><span className="text-white/50">([...</span><span className="text-blue-300">projects</span><span className="text-white/50">, newProject])</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">14</span><span className="text-white/50">  {'}'}</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">15</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">16</span><span className="text-purple-400">  return</span><span className="text-white/70"> </span><span className="text-white/50">{'<'}</span><span className="text-green-400">div</span><span className="text-white/50">{'>'}</span><span className="text-white/50">...</span><span className="text-white/50">{'</'}</span><span className="text-green-400">div</span><span className="text-white/50">{'>'}</span><span className="text-white/50">;</span></div>
                        <div className="flex"><span className="text-white/30 w-10 text-right mr-4">17</span><span className="text-white/50">{'}'}</span><span className="text-white/50">;</span></div>
                      </div>

                      {/* Status Bar */}
                      <div className="bg-[#007acc] px-3 py-1 flex items-center justify-between text-[10px] text-white">
                        <div className="flex items-center gap-3">
                          <span>⚡ Ln 7, Col 15</span>
                          <span>UTF-8</span>
                          <span>JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✓ Prettier</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Documentation Mockup */}
      <section className="py-16 md:py-32 px-4 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Large Background Text */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-light text-white/5 tracking-tight">documentation projet</h2>
          </div>

          {/* Central Floating Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* SVG Arrows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Top arrow */}
              <line x1="50%" y1="40" x2="50%" y2="80" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
              {/* Left arrow */}
              <line x1="80" y1="180" x2="140" y2="180" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
              {/* Right arrow */}
              <line x1="calc(100% - 80px)" y1="220" x2="calc(100% - 140px)" y2="220" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
              {/* Bottom left arrow */}
              <line x1="90" y1="calc(100% - 120px)" x2="140" y2="calc(100% - 160px)" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
              {/* Bottom right arrow */}
              <line x1="calc(100% - 90px)" y1="calc(100% - 100px)" x2="calc(100% - 140px)" y2="calc(100% - 140px)" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
            </svg>

            {/* Annotation Labels - Hidden on mobile */}
            <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-blue-400">Basculez rapidement entre spécs et tâches</div>
            <div className="hidden lg:block absolute top-12 -left-32 text-xs text-blue-400">Propriétés clés</div>
            <div className="hidden lg:block absolute top-1/3 -right-40 text-xs text-blue-400">Analyses en temps réel</div>
            <div className="hidden lg:block absolute bottom-20 -left-36 text-xs text-blue-400">Tous les artefacts du projet</div>
            <div className="hidden lg:block absolute bottom-16 -right-32 text-xs text-blue-400">Description du projet</div>

            {/* Main Panel */}
            <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-4 md:p-8 shadow-2xl">
              {/* Task Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">Partage de frais</h3>
                <p className="text-white/50 text-xs md:text-sm">Permettre aux utilisateurs de partager les frais avec des amis</p>
              </div>

              {/* Status and Avatars */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full cursor-pointer"
                  >
                    En cours
                  </motion.span>
                  <div className="flex -space-x-2">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-6 h-6 rounded-full bg-purple-500/30 border border-white/10 cursor-pointer"></motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="w-6 h-6 rounded-full bg-pink-500/30 border border-white/10 cursor-pointer"></motion.div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <div className="text-xs text-white/40 mb-2">Chronologie</div>
                <div className="text-sm text-white/70">14 Mai → T4 2024</div>
              </div>

              {/* Initiatives */}
              <div className="mb-6">
                <div className="text-xs text-white/40 mb-2">Initiatives</div>
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  className="inline-block px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded text-sm text-white/70 cursor-pointer"
                >
                  Rider App 2.0
                </motion.div>
              </div>

              {/* Depends on */}
              <div className="mb-6">
                <div className="text-xs text-white/40 mb-2">Dépend de</div>
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  className="inline-block px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded text-sm text-white/70 cursor-pointer"
                >
                  Stripe Connect integration
                </motion.div>
              </div>

              {/* Docs & Links */}
              <div className="mb-6">
                <div className="text-xs text-white/40 mb-3">Docs & liens</div>
                <div className="flex flex-wrap gap-2">
                  <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-white/60 cursor-pointer">Entretiens utilisateurs</motion.span>
                  <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-white/60 cursor-pointer">Designs</motion.span>
                  <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-white/60 cursor-pointer">Notes de réunion</motion.span>
                  <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-blue-400 cursor-pointer">#clients-beta</motion.span>
                  <motion.button whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }} className="w-7 h-7 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] rounded-full text-white/40">+</motion.button>
                </div>
              </div>

              {/* Requirements Section */}
              <div>
                <div className="text-xs text-white/40 mb-3">Exigences</div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/[0.03] rounded w-full"></div>
                  <div className="h-3 bg-white/[0.03] rounded w-5/6"></div>
                  <div className="h-3 bg-white/[0.03] rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-12 md:gap-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Icon with gradient background */}
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-3 rounded-xl border border-white/[0.08]">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3 tracking-tight">{feature.title}</h3>
                
                {/* Subtitle */}
                <p className="text-base md:text-lg text-white/60 mb-4 md:mb-5 font-light">{feature.subtitle}</p>
                
                {/* Description */}
                <p className="text-white/40 leading-relaxed text-sm md:text-[15px]">{feature.description}</p>

                {/* Decorative line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mt-8 origin-left"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-12 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3 md:mb-4">
              Prêt à commencer la planification ?
            </h2>
            <p className="text-white/50 mb-8">
              Transformez votre flux de travail de planification produit dès aujourd'hui.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-darkBg rounded-lg font-medium hover:bg-white/90 transition-all"
              >
                Commencer
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
