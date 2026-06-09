import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const STATUT_STYLE = {
  production: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', dot: 'bg-emerald-400', label: 'Production' },
  beta:       { bg: 'bg-amber-500/15',   text: 'text-amber-400',   dot: 'bg-amber-400',   label: 'Bêta'       },
  dev:        { bg: 'bg-sky-500/15',     text: 'text-sky-400',     dot: 'bg-sky-400',     label: 'En dev'     },
  archive:    { bg: 'bg-white/5',        text: 'text-white/30',    dot: 'bg-white/20',    label: 'Archivé'    },
};

export default function Portfolio() {
  const [apps, setApps] = useState([]);
  const [selected, setSelected] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    fetch(`${API}/apps`)
      .then(res => res.json())
      .then(data => setApps(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  }, []);

  if (apps.length === 0) return null;

  const categories = ['Tous', ...new Set(apps.map(a => a.categorie).filter(Boolean))];
  const filtered = filter === 'Tous' ? apps : apps.filter(a => a.categorie === filter);

  const openApp = (app) => { setSelected(app); setImgIndex(0); };
  const closeApp = () => setSelected(null);
  const prevImg = (e) => { e.stopPropagation(); setImgIndex(i => Math.max(0, i - 1)); };
  const nextImg = (e) => { e.stopPropagation(); setImgIndex(i => Math.min(selected.screenshots.length - 1, i + 1)); };

  return (
    <section  id="portfolio" className="py-24 lg:py-20 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16">
          <p className="text-white/20 text-xs uppercase tracking-[0.25em] mb-3">Ce que nous construisons</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Nos <span className="text-purple-400">Réalisations</span>
            </h2>

            {/* Filtres catégories */}
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setFilter(cat)}
                    className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                      filter === cat
                        ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                        : 'bg-white/[0.03] border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/20'
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((app, i) => {
            const statut = STATUT_STYLE[app.statut] || STATUT_STYLE.production;
            const cover = app.screenshots?.[0];
            return (
              <motion.article key={app.id}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => openApp(app)}
                className="group cursor-pointer relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 bg-white/[0.02]">

                  {/* Image cover */}
                  <div className="relative h-56 overflow-hidden bg-white/[0.03]">
                    {cover ? (
                      <img src={`${API.replace('/api', '')}${cover.image}`} alt={app.nom}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Badge statut */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 ${statut.bg} ${statut.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statut.dot}`} />
                        {statut.label}
                      </span>
                    </div>

                    {/* Bouton voir */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <FiExternalLink size={13} className="text-white" />
                      </div>
                    </div>

                    {/* Compteur screenshots */}
                    {app.screenshots?.length > 1 && (
                      <div className="absolute bottom-4 right-4">
                        <span className="text-xs text-white/50 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                          {app.screenshots.length} captures
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Infos */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-medium text-base leading-snug group-hover:text-purple-200 transition-colors">
                        {app.nom}
                      </h3>
                      {app.categorie && (
                        <span className="text-xs px-2 py-0.5 rounded-lg bg-white/5 text-white/30 flex-shrink-0 border border-white/[0.06]">
                          {app.categorie}
                        </span>
                      )}
                    </div>

                    {app.description && (
                      <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4">
                        {app.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {app.technologies?.slice(0, 3).map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400/70 border border-violet-500/10">
                            {t}
                          </span>
                        ))}
                        {app.technologies?.length > 3 && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/20">
                            +{app.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {app.url_site && (
                        <a href={app.url_site} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-white/20 hover:text-white/60 transition-colors flex-shrink-0">
                          <FiExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* ── Modal détail projet ── */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeApp}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-3xl bg-[#0e0e12] border border-white/[0.10] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Galerie screenshots */}
              {selected.screenshots?.length > 0 && (
                <div className="relative h-72 bg-black flex-shrink-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIndex}
                      src={`${API.replace('/api', '')}${selected.screenshots[imgIndex].image}`}
                      alt=""
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>

                  {/* Navigation galerie */}
                  {selected.screenshots.length > 1 && (
                    <>
                      <button onClick={prevImg} disabled={imgIndex === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/70 transition-all">
                        <FiChevronLeft size={16} />
                      </button>
                      <button onClick={nextImg} disabled={imgIndex === selected.screenshots.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/70 transition-all">
                        <FiChevronRight size={16} />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selected.screenshots.map((_, i) => (
                          <button key={i} onClick={e => { e.stopPropagation(); setImgIndex(i); }}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-4' : 'bg-white/30'}`} />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Fermer */}
                  <button onClick={closeApp}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                    <FiX size={14} />
                  </button>
                </div>
              )}

              {/* Contenu */}
              <div className="p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-white text-xl font-semibold mb-1">{selected.nom}</h2>
                    {selected.categorie && (
                      <span className="text-white/30 text-sm">{selected.categorie}</span>
                    )}
                  </div>
                  {selected.screenshots?.length === 0 && (
                    <button onClick={closeApp}
                      className="text-white/30 hover:text-white transition-colors">
                      <FiX size={18} />
                    </button>
                  )}
                </div>

                {selected.description && (
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{selected.description}</p>
                )}

                {/* Technologies */}
                {selected.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {selected.technologies.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Lien site uniquement */}
                {selected.url_site && (
                  <a href={selected.url_site} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/70 hover:text-white text-sm transition-all">
                    <FiExternalLink size={14} />
                    Voir le site
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}