import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiShield, FiLock, FiEye, FiAlertTriangle,
  FiCode, FiCheck, FiArrowRight, FiTerminal
} from 'react-icons/fi';

export default function CybersecurityPage() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Votre forteresse numérique commence ici';

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

  const securityServices = [
    {
      icon: FiShield,
      title: 'Tests de Pénétration',
      description: 'Simulations d\'attaques réelles pour identifier les vulnérabilités',
      color: 'from-red-500 to-purple-500'
    },
    {
      icon: FiEye,
      title: 'Surveillance 24/7',
      description: 'Monitoring continu et détection des menaces en temps réel',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FiLock,
      title: 'Audit de Sécurité',
      description: 'Analyse approfondie de votre infrastructure et conformité',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiCode,
      title: 'Sécurité Applicative',
      description: 'Protection de vos applications contre les vulnérabilités OWASP',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const cyberThreats = [
    'Protection contre les ransomwares',
    'Détection d\'intrusions avancée',
    'Prévention des fuites de données',
    'Sécurisation des API et endpoints',
    'Protection DDoS multicouche',
    'Analyse forensique et réponse aux incidents'
  ];



  const tools = [
    'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark',
    'Nmap', 'OWASP ZAP', 'Nessus', 'Splunk'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Cyberpunk Style */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/app/kali.png" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-darkBg/80 to-darkBg"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-500/30 rounded-full mb-6"
            >
              <FiShield className="w-4 h-4 text-red-400" />
              <span className="text-xs md:text-sm text-red-300 font-medium">Cybersécurité Avancée</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Défendez votre empire<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400">
                contre toutes les menaces
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full mb-6"
            >
              <FiTerminal className="w-4 h-4 text-purple-400" />
              <span className="text-xs md:text-sm text-purple-300 font-semibold">Powered by Kali Linux & Elite Tools</span>
            </motion.div>
            
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4 mb-4">
              {typedText}<span className="animate-pulse">|</span>
            </p>
            
            <p className="text-xs md:text-sm text-white/40 max-w-2xl mx-auto px-4 mb-8">
              Protection militaire pour votre infrastructure digitale.<br className="hidden sm:block" />
              <span className="text-red-400 font-semibold">Tests de pénétration</span>, <span className="text-purple-400 font-semibold">surveillance 24/7</span> et <span className="text-cyan-400 font-semibold">réponse aux incidents</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-purple-600 transition-all shadow-lg shadow-red-500/50"
                >
                  Audit Gratuit
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
              >
                Nos Services
              </motion.button>
            </div>
          </motion.div>

          {/* Cyberpunk Kali Dragon Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative h-auto min-h-[300px] md:h-80 lg:h-[500px] pb-8"
          >
            {/* Terminal Window */}
            <div className="relative max-w-5xl mx-auto overflow-hidden">
              <div className="bg-black/90 backdrop-blur-xl border border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 border-b border-red-500/30 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-cyan-400 font-mono">root@ulytech-security:~#</span>
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-cyan-400 mb-2">$ nmap -sV -sC target.example.com</p>
                    <p className="text-green-400 mb-1">Starting Nmap 7.94 ( https://nmap.org )</p>
                    <p className="text-white/60 mb-4">Nmap scan report for target.example.com (192.168.1.100)</p>
                    
                    <p className="text-purple-400 mb-2">PORT     STATE SERVICE     VERSION</p>
                    <p className="text-white/80 mb-1">22/tcp   open  ssh         OpenSSH 8.9</p>
                    <p className="text-white/80 mb-1">80/tcp   open  http        nginx 1.24.0</p>
                    <p className="text-white/80 mb-4">443/tcp  open  ssl/http    nginx 1.24.0</p>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-red-400 mb-2"
                    >
                      ⚠ VULNERABILITY DETECTED: CVE-2023-XXXX
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-cyan-400"
                    >
                      $ metasploit -x "use exploit/multi/handler"<span className="animate-pulse">_</span>
                    </motion.p>
                  </motion.div>
                </div>
              </div>

              {/* Matrix Rain Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={`matrix-${i}`}
                    className="absolute text-green-400 font-mono text-sm opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${-20 + Math.random() * 20}%`
                    }}
                    animate={{
                      y: [0, 400],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      delay: Math.random() * 5,
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Arsenal - Hacker Terminal Style */}
      <section className="py-12 md:py-20 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl border border-red-500/30 bg-black/80 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 border-b border-red-500/30 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-green-400 font-mono ml-2">root@ulytech:~/arsenal#</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-green-400 mb-4">$ cat /etc/security/arsenal.txt</p>
                <p className="text-white/80 mb-2">[+] Loading security toolkit...</p>
                <p className="text-cyan-400 mb-6">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <span className="text-green-400">[✓]</span>
                      <span className="text-red-400">└─$</span>
                      <span className="text-white font-semibold">{tool}</span>
                      <span className="text-green-400 text-xs ml-auto">READY</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-cyan-400 mb-4">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p className="text-green-400 mb-2">[+] All systems operational</p>
                <p className="text-white/60 mb-6">└─ Professional penetration testing suite loaded</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded font-medium hover:from-red-600 hover:to-purple-600 transition-all shadow-lg shadow-red-500/50 text-sm"
                    >
                      $ ./request_audit.sh
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded font-medium hover:bg-green-500/20 transition-all text-sm"
                  >
                    $ cat certifications.txt
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Services - 2 Column Layout */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Services & Protection</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-500"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Services */}
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-8 flex items-center gap-2">
                <FiShield className="w-5 h-5" />
                Services de Cybersécurité
              </h3>
              <div className="space-y-6">
                {securityServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-red-500/30 pl-4 hover:border-red-500 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <service.icon className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                        <p className="text-white/50 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Threats */}
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-8 flex items-center gap-2">
                <FiAlertTriangle className="w-5 h-5" />
                Protection Contre les Menaces
              </h3>
              <div className="space-y-3">
                {cyberThreats.map((threat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <FiCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{threat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
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
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-red-500/10 to-purple-500/10 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Prêt à sécuriser votre infrastructure ?
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Obtenez un audit de sécurité gratuit et découvrez vos vulnérabilités
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-purple-600 transition-all shadow-lg shadow-red-500/50"
                >
                  Demander un Audit Gratuit
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
