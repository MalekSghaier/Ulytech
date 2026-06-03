import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiCode, FiCpu, FiCloud } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Desktop: Gradient Background */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-darkBg via-primary/30 to-violet/20" />
      
      {/* Desktop: Floating Particles */}
      <div className="hidden lg:block absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mobile: Background Image */}
      <div 
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/two-factor-authentication-confirmation.jpg)' }}
      />
      <div className="lg:hidden absolute inset-0 bg-darkBg/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        {/* Desktop Layout */}
        <div className="hidden lg:grid max-w-7xl mx-auto lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ingénierie de
              <br />
              <span className="gradient-text">Solutions Digitales</span>
              <br />
              Intelligentes
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-white/70 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nous combinons expertise technique, innovation et compréhension métier pour créer des produits digitaux 
              <span className="text-lightPurple"> évolutifs, sécurisés et intelligents</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-white/60">
                <FiCode className="w-5 h-5 text-electricPink" />
                <span className="text-sm">Développement Web</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <FiCpu className="w-5 h-5 text-aquaBlue" />
                <span className="text-sm">Solutions IA</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <FiCloud className="w-5 h-5 text-lightPurple" />
                <span className="text-sm">Cloud & DevOps</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-darkBg rounded-lg font-semibold text-sm hover:bg-white/90 transition-all flex items-center space-x-2 group justify-center"
              >
                <span>Démarrer un Projet</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all flex items-center space-x-2 group justify-center"
              >
                <FiPlay className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Découvrir nos Réalisations</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Desktop Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Mockup Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet/30 to-electricPink/30 rounded-2xl blur-3xl opacity-50" />
              
              {/* Browser Mockup */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4 h-6 bg-white/5 rounded-md" />
                </div>
                
                {/* Image Content */}
                <div className="relative overflow-hidden">
                  <img 
                    src="/programming-background-concept.jpg" 
                    alt="Concept de Programmation" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg/50 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden max-w-md mx-auto text-center">
          {/* Mobile Services Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center gap-8 mb-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electricPink/20 to-electricPink/5 border border-electricPink/20 flex items-center justify-center">
                <FiCode className="w-6 h-6 text-electricPink" />
              </div>
              <span className="text-xs text-white/60">Web</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aquaBlue/20 to-aquaBlue/5 border border-aquaBlue/20 flex items-center justify-center">
                <FiCpu className="w-6 h-6 text-aquaBlue" />
              </div>
              <span className="text-xs text-white/60">IA</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lightPurple/20 to-lightPurple/5 border border-lightPurple/20 flex items-center justify-center">
                <FiCloud className="w-6 h-6 text-lightPurple" />
              </div>
              <span className="text-xs text-white/60">Cloud</span>
            </div>
          </motion.div>

          {/* Mobile Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-white text-darkBg rounded-lg font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center space-x-2"
            >
              <span>Démarrer un Projet</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
            >
              <FiPlay className="w-4 h-4" />
              <span>Découvrir nos Réalisations</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}