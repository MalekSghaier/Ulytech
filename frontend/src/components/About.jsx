import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiTrendingUp, FiLinkedin, FiX, FiUsers, FiStar } from 'react-icons/fi';

const values = [
  { icon: FiTarget,     title: 'Innovation',       description: 'Nous restons à la pointe des tendances technologiques pour offrir des solutions innovantes.' },
  { icon: FiEye,        title: 'Fiabilité',         description: 'Nos solutions sont conçues pour durer avec une architecture robuste et les meilleures pratiques.' },
  { icon: FiHeart,      title: 'Qualité Avant Tout',description: 'Nous ne faisons jamais de compromis sur la qualité, chaque projet dépasse les attentes.' },
  { icon: FiTrendingUp, title: 'Performance',       description: 'Des solutions optimisées pour une rapidité et une efficacité maximales à chaque étape.' },
];

const spinStyle = `
  @keyframes spinBorder {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;

function CounterCard({ stat, delay }) {
  const [count, setCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => {
          const duration = 1800;
          const steps = 60;
          const increment = stat.target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, stat.target);
            setCount(Math.round(current));
            setBarWidth(Math.round(current));
            if (current >= stat.target) clearInterval(timer);
          }, duration / steps);
        }, delay);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, stat.target]);

  return (
    <div ref={ref} className="relative p-[1.5px] rounded-2xl">
      <style>{spinStyle}</style>

      {/* Bordure tournante — overflow-hidden ici seulement */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div style={{
          position: 'absolute',
          width: '200%', height: '200%',
          top: '-50%', left: '-50%',
          background: 'conic-gradient(from 0deg, transparent 0deg, transparent 100deg, #7c3aed 140deg, #a855f7 180deg, #7c3aed 220deg, transparent 260deg, transparent 360deg)',
          animation: 'spinBorder 3s linear infinite',
        }} />
      </div>

      {/* Contenu intérieur — fond sombre, pas d'overflow-hidden */}
      <div className="relative rounded-2xl bg-[#0d0b18] hover:bg-[#110e20] transition-colors duration-300 p-7 flex flex-col items-center gap-3">

        {/* Icône */}
        <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
          <stat.icon className="w-5 h-5 text-violet-400" />
        </div>

        {/* Nombre animé */}
        <div className="text-5xl font-light text-white" style={{ letterSpacing: '-0.02em' }}>
          {count}<span className="text-violet-400">{stat.suffix}</span>
        </div>

        {/* Label */}
        <p className="text-white/40 text-sm text-center">{stat.label}</p>

        {/* Barre de progression */}
        <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-[1800ms] ease-out"
            style={{ width: `${barWidth}%`, background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const API = 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API}/api/team`)
      .then(res => res.json())
      .then(data => setTeamMembers(Array.isArray(data) ? data : []))
      .catch(err => console.error('Erreur équipe:', err));
  }, []);

  const statsData = [
    { icon: FiUsers,      target: 50,  suffix: '+', label: 'Clients satisfaits' },
    { icon: FiTrendingUp, target: 100, suffix: '+', label: 'Projets réalisés'   },
    { icon: FiStar,       target: 99,  suffix: '%', label: 'Taux de réussite'   },
  ];

  return (
    <section id="about" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-aquaBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-lightPurple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header mobile */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="lg:hidden max-w-5xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            À Propos <span className="text-purple-400">de UlyTech</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed">
            Une agence tunisienne de ingénierie digitale spécialisée dans les plateformes web haute performance,
            les solutions SaaS et les systèmes alimentés par l IA.
          </p>
        </motion.div>

        {/* Header desktop */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="hidden lg:flex max-w-5xl mx-auto mb-12 items-center gap-8">
          <h2 className="text-6xl font-semibold tracking-tight text-white whitespace-nowrap">
            À Propos <span className="text-purple-400">de UlyTech</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed">
            Une agence tunisienne d'ingénierie digitale spécialisée dans les plateformes web haute performance,
            les solutions SaaS et les systèmes alimentés par l'IA.
          </p>
        </motion.div>

        {/* Stats animées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 max-w-5xl mx-auto">
          {statsData.map((stat, i) => (
            <CounterCard key={stat.label} stat={stat} delay={i * 200} />
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200">
            <FiTarget className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3 text-white">Notre Mission</h3>
            <p className="text-white/40 leading-relaxed text-[15px]">
              Donner aux entreprises les moyens d agir avec des solutions digitales intelligentes, fiables et innovantes
              qui transforment leur façon de fonctionner. Nous comblons le fossé entre la technologie complexe
              et le succès commercial.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200">
            <FiEye className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3 text-white">Notre Vision</h3>
            <p className="text-white/40 leading-relaxed text-[15px]">
              Devenir un leader régional dans les solutions digitales augmentées par l IA, en créant des outils
              qui aident les entreprises à accomplir davantage avec la technologie tout en maintenant les plus hauts
              standards de qualité et de innovation.
            </p>
          </motion.div>
        </div>

        {/* Équipe */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-20">
          <h3 className="text-2xl font-medium text-center mb-16 tracking-tight text-white">
            Notre <span className="text-purple-400">Équipe</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-16 sm:gap-y-20 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div key={member.id || index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center">
                <div className="relative mb-4 sm:mb-5 group">
                  {member.image ? (
                    <img src={`${API}${member.image}`} alt={member.nom}
                      onClick={() => setSelectedMember(member)}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover grayscale cursor-pointer hover:scale-105 transition-transform" />
                  ) : (
                    <div onClick={() => setSelectedMember(member)}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                      <span className="text-white/40 text-2xl font-medium">{member.nom.slice(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                      className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                      <FiLinkedin className="w-4 h-4 text-white/60" />
                    </a>
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-medium text-white text-center mb-1.5">{member.nom}</h3>
                <p className="text-xs sm:text-sm text-white/40 text-center leading-relaxed whitespace-pre-line">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedMember && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                  className="relative max-w-lg w-full backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                  <button onClick={() => setSelectedMember(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center transition-all">
                    <FiX className="w-5 h-5 text-white/60" />
                  </button>
                  <div className="flex flex-col items-center text-center">
                    {selectedMember.image ? (
                      <img src={`${API}${selectedMember.image}`} alt={selectedMember.nom}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover grayscale mb-4 sm:mb-6" />
                    ) : (
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-white/5 flex items-center justify-center mb-4 sm:mb-6">
                        <span className="text-white/40 text-3xl font-medium">{selectedMember.nom.slice(0, 2).toUpperCase()}</span>
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{selectedMember.nom}</h3>
                    <p className="text-purple-400 text-sm mb-4 sm:mb-6 whitespace-pre-line">{selectedMember.role}</p>
                    {selectedMember.bio && (
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{selectedMember.bio}</p>
                    )}
                    {selectedMember.linkedin && (
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg transition-all text-white/80 hover:text-white">
                        <FiLinkedin className="w-4 h-4" />
                        <span className="text-sm">Voir le profil LinkedIn</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Valeurs */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-medium text-center mb-10 tracking-tight text-white">
            Nos <span className="text-purple-400">Valeurs</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div key={value.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/20 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 flex items-center justify-center mb-4 transition-colors">
                  <value.icon className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-2">{value.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}