import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiCpu, 
  FiCloud, 
  FiSmartphone, 
  FiDatabase, 
  FiShield
} from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Développement Full-Stack',
    description: 'Applications web complètes avec frameworks modernes, design responsive et performances optimisées.',
    features: ['React & Node.js', 'Développement API', 'Conception BDD', 'Implémentation UI/UX'],
    color: 'from-violet to-electricPink'
  },
  {
    icon: FiCpu,
    title: 'IA & Machine Learning',
    description: 'Solutions intelligentes qui transforment vos processus métier avec une technologie IA de pointe.',
    features: ['Chatbots IA', 'Reconnaissance Vocale', 'Analyse de Données', 'Automatisation'],
    color: 'from-aquaBlue to-lightPurple'
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Infrastructure cloud évolutive avec déploiement automatisé et intégration continue.',
    features: ['Configuration AWS/Azure', 'Pipelines CI/CD', 'Surveillance', 'Sécurité'],
    color: 'from-electricPink to-violet'
  },
  {
    icon: FiSmartphone,
    title: 'Solutions Mobiles',
    description: 'Applications mobiles multiplateformes offrant des expériences utilisateur exceptionnelles.',
    features: ['React Native', 'Progressive Web Apps', 'Déploiement App Store', 'Notifications Push'],
    color: 'from-lightPurple to-aquaBlue'
  },
  {
    icon: FiDatabase,
    title: 'Ingénierie des Données',
    description: 'Pipelines de données robustes et solutions analytiques pour des décisions basées sur les données.',
    features: ['Processus ETL', 'Analytique Temps Réel', 'Entrepôt de Données', 'Business Intelligence'],
    color: 'from-violet to-aquaBlue'
  },
  {
    icon: FiShield,
    title: 'Cybersécurité',
    description: 'Solutions de sécurité complètes pour protéger vos actifs numériques et données utilisateurs.',
    features: ['Audits de Sécurité', 'Tests de Pénétration', 'Conformité', 'Surveillance des Menaces'],
    color: 'from-electricPink to-lightPurple'
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const progress = scrollTop / (scrollHeight - clientHeight);
        setScrollProgress(progress);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="services" className="py-12 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />
      </div>

      {/* Mobile Background Image */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/issuesbanding.png"
          alt="Services Background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-darkBg/80 to-darkBg" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Nos <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed max-w-xl">
              Nous fournissons des solutions digitales complètes qui stimulent linnovation et la croissance pour les entreprises de toutes tailles.
            </p>

            {/* Scrollable Services List */}
            <div ref={scrollRef} className="max-h-[400px] overflow-y-auto scrollbar-hide mb-8 pr-4 space-y-6" style={{ perspective: '1200px' }}>
              {services.slice(1).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="border-l-2 border-white/10 pl-4 cursor-pointer transition-all duration-500"
                  style={{
                    transform: hoveredIndex === null 
                      ? `rotateX(${(index - scrollProgress * 5) * -5}deg) translateZ(${Math.abs((index - scrollProgress * 5) * -30)}px)` 
                      : hoveredIndex === index 
                        ? 'rotateX(0deg) scale(1.05) translateZ(80px)' 
                        : `rotateX(${(index - scrollProgress * 5) * -8}deg) translateZ(-50px)`,
                    filter: hoveredIndex === null 
                      ? 'blur(0px)' 
                      : hoveredIndex === index 
                        ? 'blur(0px)' 
                        : 'blur(2.5px)',
                    opacity: hoveredIndex === null 
                      ? 1 
                      : hoveredIndex === index 
                        ? 1 
                        : 0.25,
                    zIndex: hoveredIndex === null 
                      ? Math.round(100 - Math.abs(index - scrollProgress * 5) * 10) 
                      : hoveredIndex === index 
                        ? 200 
                        : 10,
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center',
                    position: 'relative'
                  }}
                >
                  <h3 className="text-base font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-white/50">
                        {feature}{idx < service.features.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white text-darkBg rounded-lg font-semibold text-sm hover:bg-white/90 transition-all"
            >
              Découvrir tous nos services
            </motion.button>
          </motion.div>

          {/* Right: Image - Krea Style - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex relative group w-full h-[600px] items-center justify-center"
          >
            {/* Outer container with rotation + depth */}
            <div
              className="
                relative 
                overflow-hidden 
                rounded-3xl 
                shadow-[0_0_80px_-10px_rgba(0,0,0,0.8)]
                transition-all 
                duration-700 
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:rotate-[-6deg]
                rotate-[-12deg]
                group-hover:scale-[1.03]
                scale-[1.4]
                w-full
                h-full
              "
            >
              {/* Main image with blend mode */}
              <img
                src="/issuesbanding.png"
                alt="Services Dashboard"
                className="
                  w-full 
                  h-full
                  object-cover
                  opacity-60 
                  mix-blend-screen 
                  select-none 
                  pointer-events-none
                "
              />

              {/* Subtle dark gradient overlay */}
              <div
                className="
                  absolute 
                  inset-0 
                  bg-gradient-to-br 
                  from-transparent 
                  via-black/40 
                  to-black/80
                "
              />

              {/* Soft glow edge */}
              <div
                className="
                  absolute 
                  -inset-10 
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]
                  pointer-events-none
                "
              />
            </div>
          </motion.div>
        </div>




      </div>
    </section>
  );
}