import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ── Icons (inline SVG pour éviter toute dépendance) ──────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const ICONS = {
  stats:   "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  team:    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  clients: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  services:"M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  logout:  "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  plus:    "M12 4v16m8-8H4",
  close:   "M6 18L18 6M6 6l12 12",
  menu:    "M4 6h16M4 12h16M4 18h16",
  user:    "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
  check:   "M5 13l4 4L19 7",
  trash:   "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
};

// ── Données mock ──────────────────────────────────────────────────────────────
const MOCK = {
  team: [
    { id: 1, nom: 'Kaiss Afouene', role: 'CEO & Fondateur', email: 'kaiss@ulytech.tn', avatar: 'KA' },
    { id: 2, nom: 'Mohamed Khiari', role: 'Lead Developer', email: 'mohamed@ulytech.tn', avatar: 'MK' },
  ],
  clients: [
    { id: 1, nom: 'Société Tunisair', contact: 'Ali Ben Salah', email: 'ali@tunisair.com', ville: 'Tunis' },
    { id: 2, nom: 'StartupHub Sfax', contact: 'Rania Mzoughi', email: 'rania@sfaxhub.tn', ville: 'Sfax' },
  ],
  services: [
    { id: 1, nom: 'Développement Web', categorie: 'Tech', prix: '2500 TND', actif: true },
    { id: 2, nom: 'Intelligence Artificielle', categorie: 'IA', prix: '5000 TND', actif: true },
    { id: 3, nom: 'Cybersécurité', categorie: 'Sécurité', prix: '3500 TND', actif: false },
  ],
};

// ── Couleurs avatar ───────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  'bg-violet-500/20 text-violet-300',
  'bg-cyan-500/20 text-cyan-300',
  'bg-emerald-500/20 text-emerald-300',
  'bg-amber-500/20 text-amber-300',
  'bg-rose-500/20 text-rose-300',
];
const avatarColor = (i) => AVATAR_COLORS[i % AVATAR_COLORS.length];

// ── Composant Modal générique ─────────────────────────────────────────────────
function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="w-full max-w-md bg-[#0f0f12] border border-white/10 rounded-2xl p-6 shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-white font-medium text-base">{title}</h3>
            <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
              <Icon d={ICONS.close} size={16} />
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Champ input réutilisable ──────────────────────────────────────────────────
function Field({ label, name, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label className="block text-white/40 text-xs mb-1.5">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none transition-colors"
      />
    </div>
  );
}

// ── Badge statut ──────────────────────────────────────────────────────────────
function Badge({ actif }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${actif
      ? 'bg-emerald-500/15 text-emerald-400'
      : 'bg-white/5 text-white/30'}`}>
      {actif ? 'Actif' : 'Inactif'}
    </span>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTIONS
// ══════════════════════════════════════════════════════════════════════════════

// ── Vue Aperçu ────────────────────────────────────────────────────────────────
function VueApercu({ user }) {
  const stats = [
    { label: 'Membres équipe', value: MOCK.team.length, color: 'text-violet-400' },
    { label: 'Clients actifs', value: MOCK.clients.length, color: 'text-cyan-400' },
    { label: 'Services', value: MOCK.services.length, color: 'text-emerald-400' },
    { label: 'Services actifs', value: MOCK.services.filter(s => s.actif).length, color: 'text-amber-400' },
  ];
  return (
    <div>
      <p className="text-white/30 text-sm mb-8">Vue d'ensemble de votre espace UlyTech</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4"
          >
            <p className="text-white/30 text-xs mb-2">{s.label}</p>
            <p className={`text-3xl font-light ${s.color}`}>{s.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
        <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Activité récente</p>
        {[
          { txt: 'Nouveau client ajouté — StartupHub Sfax', time: 'Il y a 2h' },
          { txt: 'Service Cybersécurité mis à jour', time: 'Hier' },
          { txt: 'Mohamed Khiari rejoint l\'équipe', time: 'Il y a 3 jours' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-white/60 text-sm">{item.txt}</span>
            </div>
            <span className="text-white/20 text-xs">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Vue Équipe ────────────────────────────────────────────────────────────────
const AVATAR_BG = [
  { bg: 'bg-violet-500/15', text: 'text-violet-300', ring: 'border-violet-500/20' },
  { bg: 'bg-cyan-500/15',   text: 'text-cyan-300',   ring: 'border-cyan-500/20'   },
  { bg: 'bg-emerald-500/15',text: 'text-emerald-300',ring: 'border-emerald-500/20'},
  { bg: 'bg-amber-500/15',  text: 'text-amber-300',  ring: 'border-amber-500/20'  },
  { bg: 'bg-rose-500/15',   text: 'text-rose-300',   ring: 'border-rose-500/20'   },
  { bg: 'bg-sky-500/15',    text: 'text-sky-300',    ring: 'border-sky-500/20'    },
];

function VueEquipe() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ nom: '', role: '', linkedin: '', bio: '' });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmId, setConfirmId] = useState(null);


  const API = 'http://localhost:5000';

  const fetchTeam = async () => {
    try {
      const res = await fetch(`${API}/api/team`);
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) { console.error(err); }
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
    const fd = new FormData();
    fd.append('nom', form.nom);
    fd.append('role', form.role);
    fd.append('linkedin', form.linkedin);
    fd.append('bio', form.bio);
    if (imageFile) fd.append('image', imageFile);
    await fetch(`${API}/api/team`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: fd,
    });
    setForm({ nom: '', role: '', linkedin: '', bio: '' });
    setImageFile(null);
    setPreview(null);
    setModal(false);
    setLoading(false);
    fetchTeam();
  };

  const handleDelete = async () => {
    await fetch(`${API}/api/team/${confirmId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setConfirmId(null);
    fetchTeam();
  };  

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-white/30 text-sm">{items.length} membre{items.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-lg text-sm transition-colors">
          <Icon d={ICONS.plus} size={14} /> Ajouter
        </button>
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((m, i) => {
          const colors = AVATAR_BG[i % AVATAR_BG.length];
          const initiales = m.nom.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
          return (
            <motion.div key={m.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className="relative group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-200"
            >
              {/* Bouton supprimer */}
              <button
                onClick={() => setConfirmId(m.id)}
                className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-rose-500/0 hover:bg-rose-500/20 text-white/0 group-hover:text-rose-400 transition-all flex items-center justify-center"
              >
                <Icon d={ICONS.trash} size={13} />
              </button>

              {/* Avatar ou photo */}
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-4 overflow-hidden flex-shrink-0 ${colors.bg} ${colors.ring}`}>
                {m.image ? (
                  <img src={`${API}${m.image}`} alt={m.nom}
                    className="w-full h-full object-cover grayscale" />
                ) : (
                  <span className={`text-base font-medium ${colors.text}`}>{initiales}</span>
                )}
              </div>

              {/* Nom */}
              <p className="text-white text-sm font-medium leading-tight mb-1 w-full truncate px-1">
                {m.nom}
              </p>

              {/* Rôle */}
              <p className="text-white/40 text-xs leading-snug mb-3 line-clamp-2">
                {m.role}
              </p>

              {/* Email pill */}
              {m.email && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] text-white/30 border border-white/[0.07] truncate max-w-full">
                  {m.email}
                </span>
              )}

              {/* LinkedIn */}
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                  className="mt-2 text-xs text-violet-400/60 hover:text-violet-300 transition-colors">
                  LinkedIn →
                </a>
              )}
            </motion.div>
          );
        })}

        {/* Carte ajout */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: items.length * 0.06 }}
          onClick={() => setModal(true)}
          className="bg-white/[0.01] hover:bg-white/[0.04] border border-dashed border-white/[0.12] hover:border-violet-500/40 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[180px] group"
        >
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 flex items-center justify-center transition-colors">
            <Icon d={ICONS.plus} size={18} />
          </div>
          <span className="text-white/20 group-hover:text-violet-300 text-xs transition-colors">
            Nouveau membre
          </span>
        </motion.button>
      </div>

      {/* Modal ajout */}
      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter un membre">
        <div className="space-y-4">
          {/* Upload photo */}
          <div>
            <label className="block text-white/40 text-xs mb-2">Photo</label>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                {preview
                  ? <img src={preview} alt="preview" className="w-full h-full object-cover grayscale" />
                  : <span className="text-white/20 text-xs">Photo</span>}
              </div>
              <label className="flex-1 cursor-pointer px-3 py-2 bg-white/5 border border-dashed border-white/20 hover:border-violet-400/50 rounded-lg text-white/30 hover:text-violet-400 text-xs text-center transition-all">
                Choisir une image
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
          </div>

          <Field label="Nom complet *" name="nom" value={form.nom}
            onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="Prénom Nom" />
          <Field label="Rôle / Poste *" name="role" value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })} placeholder="ex: Développeur Frontend" />
          <Field label="LinkedIn" name="linkedin" value={form.linkedin}
            onChange={e => setForm({ ...form, linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
          <div>
            <label className="block text-white/40 text-xs mb-1.5">Bio</label>
            <textarea value={form.bio} rows={3} placeholder="Courte description..."
              onChange={e => setForm({ ...form, bio: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none transition-colors resize-none" />
          </div>

<button onClick={handleAdd} disabled={loading || !form.nom || !form.role}
            className="w-full py-2.5 bg-violet-500/20 hover:bg-violet-500/30 disabled:opacity-40 text-violet-300 rounded-lg text-sm transition-colors">
            {loading ? 'Ajout en cours...' : 'Confirmer'}
          </button>
        </div>
      </Modal>

      {/* Modal confirmation suppression */}
      <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title="Confirmer la suppression">
        <div className="space-y-5">
          <div className="flex items-start gap-3 p-4 bg-rose-500/5 border border-rose-500/15 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-rose-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon d={ICONS.trash} size={15} />
            </div>
            <div>
              <p className="text-white text-sm font-medium mb-1">
                Supprimer ce membre ?
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                Cette action est irréversible. Le membre sera définitivement retiré de l'équipe et de la page d'accueil.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setConfirmId(null)}
              className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg text-sm transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-lg text-sm transition-colors"
            >
              Supprimer
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ── Vue Clients ───────────────────────────────────────────────────────────────
function VueClients() {
  const [items, setItems] = useState(MOCK.clients);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ nom: '', contact: '', email: '', ville: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => {
    if (!form.nom || !form.email) return;
    setItems([...items, { id: Date.now(), ...form }]);
    setForm({ nom: '', contact: '', email: '', ville: '' });
    setModal(false);
  };
  const handleDelete = id => setItems(items.filter(i => i.id !== id));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-white/30 text-sm">{items.length} client{items.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg text-sm transition-colors">
          <Icon d={ICONS.plus} size={14} /> Ajouter
        </button>
      </div>

      <div className="space-y-3">
        {items.map((c, i) => (
          <motion.div key={c.id}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:border-white/10 transition-colors group"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium flex-shrink-0 ${avatarColor(i + 2)}`}>
              {c.nom.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{c.nom}</p>
              <p className="text-white/30 text-xs truncate">{c.contact} · {c.email} · {c.ville}</p>
            </div>
            <button onClick={() => handleDelete(c.id)}
              className="opacity-0 group-hover:opacity-100 text-white/20 hover:text-rose-400 transition-all">
              <Icon d={ICONS.trash} size={15} />
            </button>
          </motion.div>
        ))}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter un client">
        <div className="space-y-4">
          <Field label="Nom de la société" name="nom" value={form.nom} onChange={handleChange} placeholder="Société XYZ" />
          <Field label="Contact principal" name="contact" value={form.contact} onChange={handleChange} placeholder="Prénom Nom" />
          <Field label="Email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="contact@societe.tn" />
          <Field label="Ville" name="ville" value={form.ville} onChange={handleChange} placeholder="Tunis, Sfax..." />
          <button onClick={handleAdd}
            className="w-full py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg text-sm transition-colors mt-2">
            Confirmer
          </button>
        </div>
      </Modal>
    </div>
  );
}

// ── Vue Services ──────────────────────────────────────────────────────────────
function VueServices() {
  const [items, setItems] = useState(MOCK.services);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ nom: '', categorie: '', prix: '', actif: true });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => {
    if (!form.nom) return;
    setItems([...items, { id: Date.now(), ...form }]);
    setForm({ nom: '', categorie: '', prix: '', actif: true });
    setModal(false);
  };
  const handleDelete = id => setItems(items.filter(i => i.id !== id));
  const toggleActif = id => setItems(items.map(i => i.id === id ? { ...i, actif: !i.actif } : i));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-white/30 text-sm">{items.length} service{items.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-sm transition-colors">
          <Icon d={ICONS.plus} size={14} /> Ajouter
        </button>
      </div>

      <div className="space-y-3">
        {items.map((s, i) => (
          <motion.div key={s.id}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:border-white/10 transition-colors group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-white text-sm font-medium truncate">{s.nom}</p>
                <Badge actif={s.actif} />
              </div>
              <p className="text-white/30 text-xs">{s.categorie} · {s.prix}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
              <button onClick={() => toggleActif(s.id)}
                className="text-white/20 hover:text-emerald-400 transition-colors">
                <Icon d={ICONS.check} size={15} />
              </button>
              <button onClick={() => handleDelete(s.id)}
                className="text-white/20 hover:text-rose-400 transition-colors">
                <Icon d={ICONS.trash} size={15} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter un service">
        <div className="space-y-4">
          <Field label="Nom du service" name="nom" value={form.nom} onChange={handleChange} placeholder="ex: Développement Web" />
          <Field label="Catégorie" name="categorie" value={form.categorie} onChange={handleChange} placeholder="Tech, IA, Design..." />
          <Field label="Prix (TND)" name="prix" value={form.prix} onChange={handleChange} placeholder="ex: 2500 TND" />
          <button onClick={handleAdd}
            className="w-full py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-sm transition-colors mt-2">
            Confirmer
          </button>
        </div>
      </Modal>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DASHBOARD PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
const NAV = [
  { id: 'apercu',    label: 'Aperçu',   icon: ICONS.stats   },
  { id: 'equipe',    label: 'Équipe',   icon: ICONS.team    },
  { id: 'clients',   label: 'Clients',  icon: ICONS.clients },
  { id: 'services',  label: 'Services', icon: ICONS.services},
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [section, setSection] = useState('apercu');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) { navigate('/login'); return; }
    setUser(JSON.parse(stored));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  const SECTION_TITLES = {
    apercu:   `Bonjour, ${user.nom} 👋`,
    equipe:   'Équipe',
    clients:  'Clients',
    services: 'Services',
  };

  return (
    <div className="min-h-screen bg-darkBg flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Overlay mobile ── */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)} />
      )}

      {/* ══════════════ SIDEBAR ══════════════ */}
      <aside className={`
        fixed top-0 left-0 h-screen w-60 bg-black/40 backdrop-blur-sm border-r border-white/[0.08]
        flex flex-col z-30 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:top-0 lg:z-auto
      `}>
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <img src="/logoulytech.png" alt="UlyTech" className="h-6 w-auto" />
            <span className="text-white/60 text-xs font-medium tracking-wide">Dashboard</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV.map(item => {
            const active = section === item.id;
            return (
              <button key={item.id}
                onClick={() => { setSection(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left
                  ${active
                    ? 'bg-violet-500/15 text-violet-300'
                    : 'text-white/30 hover:text-white/60 hover:bg-white/[0.04]'
                  }`}
              >
                <Icon d={item.icon} size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* User + Logout */}
        <div className="px-3 py-4 border-t border-white/[0.06] space-y-1">
          <div className="flex items-center gap-3 px-3 py-2.5">
            <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-300 text-xs font-medium">
              {user.nom?.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/60 text-xs font-medium truncate">{user.nom}</p>
              <p className="text-white/20 text-xs truncate">{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/20 hover:text-rose-400 hover:bg-rose-500/5 transition-all">
            <Icon d={ICONS.logout} size={16} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* ══════════════ MAIN ══════════════ */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Topbar */}
        <header className="h-14 border-b border-white/[0.08] flex items-center px-5 lg:px-8 gap-4 flex-shrink-0 bg-black/20">
          <button className="lg:hidden text-white/30 hover:text-white transition-colors"
            onClick={() => setSidebarOpen(true)}>
            <Icon d={ICONS.menu} size={20} />
          </button>
          <h1 className="text-white font-medium text-base flex-1">
            {SECTION_TITLES[section]}
          </h1>
          <div className="text-white/20 text-xs hidden sm:block">
            {new Date().toLocaleDateString('fr-TN', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </header>

        {/* Contenu */}
        <div className="flex-1 overflow-auto px-5 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {section === 'apercu'   && <VueApercu user={user} />}
              {section === 'equipe'   && <VueEquipe />}
              {section === 'clients'  && <VueClients />}
              {section === 'services' && <VueServices />}
            </motion.div>
          </AnimatePresence>

          
        </div>
      </main>
    </div>
  );
}