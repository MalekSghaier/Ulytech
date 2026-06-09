import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiX, FiPlus, FiTrash2 } from 'react-icons/fi';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
;

export default function Team() {
  const [members, setMembers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nom: '', role: '', linkedin: '', bio: '' });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const isAdmin = !!localStorage.getItem('token');

  const fetchTeam = async () => {
    try {
      const res = await fetch(`${API}/team`);
      const data = await res.json();
      setMembers(data);
    } catch (err) {
      console.error('Erreur chargement équipe', err);
    }
  };

  useEffect(() => { fetchTeam(); }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleAdd = async () => {
    if (!form.nom || !form.role) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('nom', form.nom);
    formData.append('role', form.role);
    formData.append('linkedin', form.linkedin);
    formData.append('bio', form.bio);
    if (imageFile) formData.append('image', imageFile);

    try {
      await fetch(`${API}/team`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: formData,
      });
      setForm({ nom: '', role: '', linkedin: '', bio: '' });
      setImageFile(null);
      setPreview(null);
      setModal(false);
      fetchTeam();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm('Supprimer ce membre ?')) return;
    await fetch(`${API}/team/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchTeam();
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
            Notre <span className="text-purple-400">Équipe</span>
          </h2>
          <p className="text-white/40 text-base max-w-2xl mx-auto">
            Les experts derrière UlyTech
          </p>
        </motion.div>

        {/* Grille membres */}
        <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-16 sm:gap-y-20 lg:gap-y-28">
          {members.map((member, index) => (
            <motion.div key={member.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 sm:mb-5 group">
                {/* Photo */}
                {member.image ? (
                  <img
                    src={`${API.replace('/api', '')}${member.image}`}
                    alt={member.nom}
                    onClick={() => setSelected(member)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover grayscale cursor-pointer hover:scale-105 transition-transform"
                  />
                ) : (
                  <div
                    onClick={() => setSelected(member)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="text-white/40 text-2xl font-medium">
                      {member.nom.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}

                {/* LinkedIn */}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    <FiLinkedin className="w-4 h-4 text-white/60" />
                  </a>
                )}

                {/* Supprimer (admin seulement) */}
                {isAdmin && (
                  <button onClick={(e) => handleDelete(member.id, e)}
                    className="absolute -top-2 -left-2 w-7 h-7 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 rounded-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    <FiTrash2 className="w-3 h-3 text-red-400" />
                  </button>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-medium text-white text-center mb-1.5">
                {member.nom}
              </h3>
              <p className="text-xs sm:text-sm text-white/40 text-center leading-relaxed whitespace-pre-line">
                {member.role}
              </p>
            </motion.div>
          ))}

          {/* Bouton ajouter (admin seulement) */}
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <button onClick={() => setModal(true)}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg border border-dashed border-white/20 hover:border-purple-400/50 hover:bg-purple-500/5 flex flex-col items-center justify-center gap-2 transition-all group mb-4"
              >
                <FiPlus className="w-6 h-6 text-white/20 group-hover:text-purple-400 transition-colors" />
                <span className="text-xs text-white/20 group-hover:text-purple-400 transition-colors">Ajouter</span>
              </button>
            </motion.div>
          )}
        </div>

        {/* ── Modal détail membre ── */}
        <AnimatePresence>
          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-lg w-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl"
              >
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] flex items-center justify-center transition-all">
                  <FiX className="w-4 h-4 text-white/60" />
                </button>
                <div className="flex flex-col items-center text-center">
                  {selected.image ? (
                    <img src={`${API.replace('/api', '')}${selected.image}`} alt={selected.nom}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover grayscale mb-5" />
                  ) : (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-white/5 flex items-center justify-center mb-5">
                      <span className="text-white/40 text-3xl font-medium">{selected.nom.slice(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{selected.nom}</h3>
                  <p className="text-purple-400 text-sm mb-4 whitespace-pre-line">{selected.role}</p>
                  {selected.bio && <p className="text-white/50 text-sm leading-relaxed mb-5">{selected.bio}</p>}
                  {selected.linkedin && (
                    <a href={selected.linkedin} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.08] rounded-lg text-white/70 hover:text-white text-sm transition-all">
                      <FiLinkedin className="w-4 h-4" /> Voir le profil LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Modal ajout membre ── */}
        <AnimatePresence>
          {modal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-md w-full bg-[#0f0f12] border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-white font-medium">Ajouter un membre</h3>
                  <button onClick={() => setModal(false)} className="text-white/30 hover:text-white transition-colors">
                    <FiX size={16} />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Upload photo */}
                  <div>
                    <label className="block text-white/40 text-xs mb-2">Photo</label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                        {preview
                          ? <img src={preview} alt="preview" className="w-full h-full object-cover grayscale" />
                          : <span className="text-white/20 text-xs">Photo</span>
                        }
                      </div>
                      <label className="flex-1 cursor-pointer px-3 py-2 bg-white/5 border border-dashed border-white/20 hover:border-purple-400/50 rounded-lg text-white/30 hover:text-purple-400 text-xs text-center transition-all">
                        Choisir une image
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                      </label>
                    </div>
                  </div>

                  {/* Champs texte */}
                  {[
                    { label: 'Nom complet *', name: 'nom', placeholder: 'Prénom Nom' },
                    { label: 'Rôle / Poste *', name: 'role', placeholder: 'ex: Développeur Frontend' },
                    { label: 'LinkedIn', name: 'linkedin', placeholder: 'https://linkedin.com/in/...' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-white/40 text-xs mb-1.5">{f.label}</label>
                      <input
                        type="text" value={form[f.name]} placeholder={f.placeholder}
                        onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-white/40 text-xs mb-1.5">Bio</label>
                    <textarea
                      value={form.bio} rows={3}
                      placeholder="Courte description..."
                      onChange={e => setForm({ ...form, bio: e.target.value })}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button onClick={handleAdd} disabled={loading || !form.nom || !form.role}
                    className="w-full py-2.5 bg-violet-500/20 hover:bg-violet-500/30 disabled:opacity-40 text-violet-300 rounded-lg text-sm transition-colors">
                    {loading ? 'Ajout en cours...' : 'Confirmer'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}