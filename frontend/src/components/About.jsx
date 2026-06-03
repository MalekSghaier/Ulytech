import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiTrendingUp, FiLinkedin, FiX } from 'react-icons/fi';

const stats = [
  { image: '/about/create_illustration.png', number: '50+', label: 'Clients Satisfaits' },
  { image: '/about/perfect_bar.png', number: '100+', label: 'Projets Réalisés' },
  { image: '/about/perfect_scatter.png', number: '99%', label: 'Taux de Réussite' },
];

const values = [
  {
    icon: FiTarget,
    title: 'Innovation',
    description: 'Nous restons à la pointe des tendances technologiques pour offrir des solutions innovantes.'
  },
  {
    icon: FiEye,
    title: 'Fiabilité',
    description: 'Nos solutions sont conçues pour durer avec une architecture robuste et les meilleures pratiques.'
  },
  {
    icon: FiHeart,
    title: 'Qualité Avant Tout',
    description: 'Nous ne faisons jamais de compromis sur la qualité, chaque projet dépasse les attentes.'
  },
  {
    icon: FiTrendingUp,
    title: 'Performance',
    description: 'Des solutions optimisées pour une rapidité et une efficacité maximales à chaque étape.'
  }
];

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

  return (
    <section id="about" className="-mt-40 lg:mt-0 py-12 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-aquaBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-lightPurple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden max-w-5xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            À Propos <span className="text-purple-400">de UlyTech</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed">
            Une agence tunisienne de ingénierie digitale spécialisée dans les plateformes web haute performance,
            les solutions SaaS et les systèmes alimentés par l IA.
          </p>
        </motion.div>

        {/* Desktop Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:flex max-w-5xl mx-auto mb-12 items-center gap-8"
        >
          <h2 className="text-6xl font-semibold tracking-tight text-white whitespace-nowrap">
            À Propos <span className="text-purple-400">de UlyTech</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed">
            Une agence tunisienne d'ingénierie digitale spécialisée dans les plateformes web haute performance,
            les solutions SaaS et les systèmes alimentés par l'IA.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 flex flex-col items-center justify-center min-h-[320px]"
            >
              <img
                src={stat.image}
                alt={stat.label}
                className="w-40 h-40 mb-8 object-contain"
                style={{ filter: 'brightness(1.2) contrast(1.1)', opacity: 0.9 }}
              />
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-medium text-white">{stat.number}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200"
          >
            <FiTarget className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3 text-white">Notre Mission</h3>
            <p className="text-white/40 leading-relaxed text-[15px]">
              Donner aux entreprises les moyens d agir avec des solutions digitales intelligentes, fiables et innovantes
              qui transforment leur façon de fonctionner. Nous comblons le fossé entre la technologie complexe
              et le succès commercial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200"
          >
            <FiEye className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-2xl font-medium mb-3 text-white">Notre Vision</h3>
            <p className="text-white/40 leading-relaxed text-[15px]">
              Devenir un leader régional dans les solutions digitales augmentées par l IA, en créant des outils
              qui aident les entreprises à accomplir davantage avec la technologie tout en maintenant les plus hauts
              standards de qualité et de innovation.
            </p>
          </motion.div>
        </div>

        {/* ── Team Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-2xl font-medium text-center mb-16 tracking-tight text-white">
            Notre <span className="text-purple-400">Équipe</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-16 sm:gap-y-20 lg:gap-y-28 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-4 sm:mb-5 group">
                  {/* Photo ou initiales */}
                  {member.image ? (
                    <img
                      src={`${API}${member.image}`}
                      alt={member.nom}
                      onClick={() => setSelectedMember(member)}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover grayscale cursor-pointer hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div
                      onClick={() => setSelectedMember(member)}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      <span className="text-white/40 text-2xl font-medium">
                        {member.nom.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* LinkedIn */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    >
                      <FiLinkedin className="w-4 h-4 text-white/60" />
                    </a>
                  )}
                </div>

                {/* ✅ member.nom (pas member.name) */}
                <h3 className="text-sm sm:text-base font-medium text-white text-center mb-1.5 sm:mb-2">
                  {member.nom}
                </h3>
                <p className="text-xs sm:text-sm text-white/40 text-center leading-relaxed whitespace-pre-line">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Modal détail membre ── */}
          <AnimatePresence>
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-lg w-full backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
                >
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center transition-all"
                  >
                    <FiX className="w-5 h-5 text-white/60" />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    {/* ✅ API + member.image dans le modal aussi */}
                    {selectedMember.image ? (
                      <img
                        src={`${API}${selectedMember.image}`}
                        alt={selectedMember.nom}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover grayscale mb-4 sm:mb-6"
                      />
                    ) : (
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-white/5 flex items-center justify-center mb-4 sm:mb-6">
                        <span className="text-white/40 text-3xl font-medium">
                          {selectedMember.nom.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}

                    {/* ✅ .nom partout */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {selectedMember.nom}
                    </h3>
                    <p className="text-purple-400 text-sm mb-4 sm:mb-6 whitespace-pre-line">
                      {selectedMember.role}
                    </p>
                    {selectedMember.bio && (
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        {selectedMember.bio}
                      </p>
                    )}
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg transition-all text-white/80 hover:text-white"
                      >
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

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium text-center mb-16 tracking-tight text-white">
            Nos <span className="text-purple-400">Valeurs</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <value.icon className="w-4 h-4 text-purple-400" />
                  <h4 className="text-base font-medium text-white">{value.title}</h4>
                </div>
                <p className="text-white/45 leading-relaxed text-[14px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}