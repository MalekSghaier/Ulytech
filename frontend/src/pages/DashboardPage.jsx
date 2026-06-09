import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'


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
  grid:    "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  chat:    "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  eye:     "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  trend:   "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  partner: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
};

const MOCK = {
  services: [
    { id: 1, nom: 'Développement Web', categorie: 'Tech', prix: '2500 TND', actif: true },
    { id: 2, nom: 'Intelligence Artificielle', categorie: 'IA', prix: '5000 TND', actif: true },
    { id: 3, nom: 'Cybersécurité', categorie: 'Sécurité', prix: '3500 TND', actif: false },
  ],
};

const AVATAR_COLORS = ['bg-violet-500/20 text-violet-300','bg-cyan-500/20 text-cyan-300','bg-emerald-500/20 text-emerald-300','bg-amber-500/20 text-amber-300','bg-rose-500/20 text-rose-300'];
const avatarColor = (i) => AVATAR_COLORS[i % AVATAR_COLORS.length];

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="w-full max-w-md bg-[#0f0f1a] border border-white/10 rounded-2xl p-6 shadow-2xl"
          onClick={e => e.stopPropagation()}>
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

function Field({ label, name, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label className="block text-white/40 text-xs mb-1.5">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none transition-colors" />
    </div>
  );
}

function Badge({ actif }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${actif ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/5 text-white/30'}`}>
      {actif ? 'Actif' : 'Inactif'}
    </span>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// GRAPHIQUE SVG
// ══════════════════════════════════════════════════════════════════════════════
function MiniLineChart({ data, color, height = 60 }) {
  if (!data || data.length < 2) return null;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const w = 200, h = height;
  const xStep = w / (data.length - 1);
  const yPos = (v) => h - ((v - min) / range) * h * 0.85 - h * 0.05;
  const points = data.map((v, i) => `${i * xStep},${yPos(v)}`).join(' ');
  const areaPoints = `0,${h} ${points} ${(data.length - 1) * xStep},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AreaChartSVG({ data }) {
  const [tooltip, setTooltip] = useState(null);
  if (!data || data.length === 0) return (
    <div className="h-48 flex items-center justify-center">
      <p className="text-white/20 text-sm">Naviguez sur le site pour générer des données</p>
    </div>
  );
  const width = 600, height = 180;
  const padL = 35, padR = 10, padT = 10, padB = 30;
  const W = width - padL - padR, H = height - padT - padB;
  const maxVal = Math.max(...data.map(d => Math.max(d.Visites, d.Uniques)), 1);
  const xPos = (i) => padL + (i / (data.length - 1 || 1)) * W;
  const yPos = (v) => padT + H - (v / maxVal) * H;
  const pathD = (key) => data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xPos(i).toFixed(1)} ${yPos(d[key]).toFixed(1)}`).join(' ');
  const areaD = (key) => `${pathD(key)} L ${xPos(data.length - 1).toFixed(1)} ${(padT + H).toFixed(1)} L ${padL} ${(padT + H).toFixed(1)} Z`;
  const yLabels = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div className="relative w-full" style={{ paddingBottom: '32%' }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gU" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Axes */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Grid + labels Y */}
        {yLabels.map((v, i) => (
          <g key={i}>
            <line x1={padL} y1={padT + H * (1 - v)} x2={padL + W} y2={padT + H * (1 - v)}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <text x={padL - 4} y={padT + H * (1 - v) + 3} textAnchor="end"
              fill="rgba(255,255,255,0.25)" fontSize="8">
              {Math.round(maxVal * v)}
            </text>
          </g>
        ))}
        <path d={areaD('Visites')} fill="url(#gV)" />
        <path d={areaD('Uniques')} fill="url(#gU)" />
        <path d={pathD('Visites')} fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={pathD('Uniques')} fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => (
          <g key={i} onMouseEnter={() => setTooltip({ x: xPos(i), d })} onMouseLeave={() => setTooltip(null)} style={{ cursor: 'pointer' }}>
            <rect x={xPos(i) - 15} y={padT} width={30} height={H} fill="transparent" />
            <circle cx={xPos(i)} cy={yPos(d.Visites)} r="3.5" fill="#7c3aed" stroke="rgba(124,58,237,0.4)" strokeWidth="3" />
            <circle cx={xPos(i)} cy={yPos(d.Uniques)} r="3.5" fill="#06b6d4" stroke="rgba(6,182,212,0.4)" strokeWidth="3" />
          </g>
        ))}
        {tooltip && (() => {
          const tx = tooltip.x > W * 0.7 ? tooltip.x - 115 : tooltip.x + 12;
          return (
            <g>
              <line x1={tooltip.x} y1={padT} x2={tooltip.x} y2={padT + H} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
              <rect x={tx} y={padT + 5} width={110} height={58} rx="7" fill="#0e0c1e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x={tx + 9} y={padT + 20} fill="rgba(255,255,255,0.5)" fontSize="9.5">{tooltip.d.date}</text>
              <circle cx={tx + 9} cy={padT + 32} r="3" fill="#7c3aed" />
              <text x={tx + 17} y={padT + 36} fill="white" fontSize="10">{tooltip.d.Visites} visites</text>
              <circle cx={tx + 9} cy={padT + 48} r="3" fill="#06b6d4" />
              <text x={tx + 17} y={padT + 52} fill="white" fontSize="10">{tooltip.d.Uniques} uniques</text>
            </g>
          );
        })()}
        {data.map((d, i) => (
          <text key={i} x={xPos(i)} y={height - 5} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">{d.date}</text>
        ))}
      </svg>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VUE APERCU
// ══════════════════════════════════════════════════════════════════════════════
function VueApercu({ user }) {
  const [stats, setStats] = useState(null);
  const [counts, setCounts] = useState({ team: 0, clients: 0, apps: 0, services: 0, conversations: 0 });
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    Promise.all([
      fetch(`${API}/analytics/stats`, { headers }).then(r => r.json()),
      fetch(`${API}/team`).then(r => r.json()),
      fetch(`${API}/clients`).then(r => r.json()),
      fetch(`${API}/apps`).then(r => r.json()),
      fetch(`${API}/chat/conversations`, { headers }).then(r => r.json()),
    ]).then(([analytics, team, clients, apps, convs]) => {
      setStats(analytics);
      setCounts({
        team: Array.isArray(team) ? team.length : 0,
        clients: Array.isArray(clients) ? clients.length : 0,
        apps: Array.isArray(apps) ? apps.length : 0,
        services: MOCK.services.length,
        conversations: Array.isArray(convs) ? convs.length : 0,
      });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const chartData = stats?.chart7days?.map(d => ({
    date: new Date(d.date).toLocaleDateString('fr-TN', { weekday: 'short', day: 'numeric' }),
    Visites: parseInt(d.total),
    Uniques: parseInt(d.uniques),
  })) || [];

  const visitHistory = chartData.map(d => d.Visites);
  const uniqueHistory = chartData.map(d => d.Uniques);

  const kpiCards = [
    { label: "Visites aujourd'hui", value: stats?.today?.total || 0, sub: `${stats?.today?.uniques || 0} uniques`, color: '#7c3aed', history: visitHistory, icon: ICONS.eye },
    { label: 'Visites hier',        value: stats?.yesterday?.total || 0, sub: `${stats?.yesterday?.uniques || 0} uniques`, color: '#06b6d4', history: uniqueHistory, icon: ICONS.trend },
    { label: '30 derniers jours',   value: stats?.last30days?.total || 0, sub: `${stats?.last30days?.uniques || 0} uniques`, color: '#10b981', history: visitHistory.slice(-5), icon: ICONS.stats },
    { label: 'Total visites',       value: stats?.total?.total || 0, sub: `${stats?.total?.uniques || 0} visiteurs uniques`, color: '#f59e0b', history: uniqueHistory, icon: ICONS.trend },
  ];

  const entityCards = [
    { label: 'Membres équipe',  value: counts.team,          color: '#a78bfa', icon: ICONS.team,    section: 'equipe'   },
    { label: 'Clients',         value: counts.clients,       color: '#38bdf8', icon: ICONS.clients, section: 'clients'  },
    { label: 'Applications',    value: counts.apps,          color: '#34d399', icon: ICONS.grid,    section: 'apps'     },
    { label: 'Services',        value: counts.services,      color: '#fbbf24', icon: ICONS.services,section: 'services' },
    { label: 'Conversations',   value: counts.conversations, color: '#f472b6', icon: ICONS.chat,    section: 'conversations' },
  ];

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="text-white/70 text-sm font-medium">Vue d'ensemble</p>
        <p className="text-white/30 text-xs mt-0.5">
          {new Date().toLocaleDateString('fr-TN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* ── Entités UlyTech ── */}
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Ressources UlyTech</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {entityCards.map((card, i) => (
            <motion.div key={card.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 group hover:border-white/[0.16] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 0%, ${card.color}15 0%, transparent 70%)` }} />
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${card.color}20` }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke={card.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={card.icon} />
                </svg>
              </div>
              <p className="text-3xl font-light mb-1" style={{ color: card.color, letterSpacing: '-0.02em' }}>
                {card.value}
              </p>
              <p className="text-white/40 text-xs leading-tight">{card.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── KPI visites ── */}
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Trafic du site</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiCards.map((card, i) => (
            <motion.div key={card.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 overflow-hidden group hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 0%, ${card.color}10 0%, transparent 70%)` }} />
              <div className="relative">
                <p className="text-white/40 text-xs mb-3">{card.label}</p>
                <p className="text-3xl font-light mb-1" style={{ color: card.color, letterSpacing: '-0.02em' }}>
                  {parseInt(card.value).toLocaleString()}
                </p>
                <p className="text-white/25 text-xs mb-3">{card.sub}</p>
                {card.history.length > 1 && (
                  <div className="h-10 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                    <MiniLineChart data={card.history} color={card.color} height={40} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Graphique 7 jours ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white/90 font-medium text-sm">Courbe de trafic — 7 jours</h3>
            <p className="text-white/30 text-xs mt-0.5">Visites totales vs visiteurs uniques avec axes</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-400" />
              <span className="text-white/40 text-xs">Visites</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-white/40 text-xs">Uniques</span>
            </div>
          </div>
        </div>
        <AreaChartSVG data={chartData} />
      </motion.div>

      {/* ── Pages populaires + Résumé ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5"
        >
          <h3 className="text-white/80 text-sm font-medium mb-5">Pages les plus visitées</h3>
          <div className="space-y-4">
            {(!stats?.topPages || stats.topPages.length === 0) && (
              <p className="text-white/20 text-sm">Aucune donnée</p>
            )}
            {stats?.topPages?.map((page, i) => {
              const max = parseInt(stats.topPages[0]?.visits) || 1;
              const pct = Math.round((parseInt(page.visits) / max) * 100);
              const colors = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white/65 text-xs truncate max-w-[65%]">
                      {page.page === '/' ? '🏠 Accueil' : page.page}
                    </span>
                    <span className="text-white/40 text-xs">{page.visits} visites</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: colors[i % colors.length] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5"
        >
          <h3 className="text-white/80 text-sm font-medium mb-5">Résumé global</h3>
          <div className="space-y-0">
            {[
              { txt: `${stats?.today?.total || 0} visites aujourd'hui`,          dot: 'bg-violet-400', time: "Aujourd'hui" },
              { txt: `${stats?.today?.uniques || 0} visiteurs uniques`,           dot: 'bg-cyan-400',   time: "Aujourd'hui" },
              { txt: `${stats?.last30days?.total || 0} visites ce mois`,          dot: 'bg-emerald-400',time: '30 jours'    },
              { txt: `${stats?.total?.uniques || 0} visiteurs uniques au total`,  dot: 'bg-amber-400',  time: 'Tout temps'  },
              { txt: `${counts.conversations} conversation${counts.conversations > 1 ? 's' : ''} chatbot`, dot: 'bg-pink-400', time: 'Total' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
                  <span className="text-white/70 text-sm">{item.txt}</span>
                </div>
                <span className="text-white/30 text-xs">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// AUTRES VUES (inchangées)
// ══════════════════════════════════════════════════════════════════════════════

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

  const fetchTeam = async () => {
    try { const res = await fetch(`${API}/team`); const data = await res.json(); setItems(Array.isArray(data) ? data : []); } catch (err) { console.error(err); }
  };
  useEffect(() => { fetchTeam(); }, []);

  const handleImageChange = (e) => { const file = e.target.files[0]; if (!file) return; setImageFile(file); setPreview(URL.createObjectURL(file)); };
  const handleAdd = async () => {
    if (!form.nom || !form.role) return; setLoading(true);
    const fd = new FormData();
    fd.append('nom', form.nom); fd.append('role', form.role); fd.append('linkedin', form.linkedin); fd.append('bio', form.bio);
    if (imageFile) fd.append('image', imageFile);
    await fetch(`${API}/team`, { method: 'POST', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, body: fd });
    setForm({ nom: '', role: '', linkedin: '', bio: '' }); setImageFile(null); setPreview(null); setModal(false); setLoading(false); fetchTeam();
  };
  const handleDelete = async () => {
    await fetch(`${API}/team/${confirmId}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    setConfirmId(null); fetchTeam();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-white/50 text-sm">{items.length} membre{items.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)} className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-lg text-sm transition-colors">
          <Icon d={ICONS.plus} size={14} /> Ajouter
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((m, i) => {
          const colors = AVATAR_BG[i % AVATAR_BG.length];
          const initiales = m.nom.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
          return (
            <motion.div key={m.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
              className="relative group bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-200">
              <button onClick={() => setConfirmId(m.id)} className="absolute top-3 right-3 w-7 h-7 rounded-lg hover:bg-rose-500/20 text-white/0 group-hover:text-rose-400 transition-all flex items-center justify-center">
                <Icon d={ICONS.trash} size={13} />
              </button>
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-4 overflow-hidden flex-shrink-0 ${colors.bg} ${colors.ring}`}>
                {m.image ? <img src={`${API.replace('/api', '')}${m.image}`} alt={m.nom} className="w-full h-full object-cover grayscale" /> : <span className={`text-base font-medium ${colors.text}`}>{initiales}</span>}
              </div>
              <p className="text-white text-sm font-medium leading-tight mb-1 w-full truncate px-1">{m.nom}</p>
              <p className="text-white/50 text-xs leading-snug mb-3 line-clamp-2">{m.role}</p>
              {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 text-xs text-violet-400/60 hover:text-violet-300 transition-colors">LinkedIn →</a>}
            </motion.div>
          );
        })}
        <motion.button initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: items.length * 0.06 }}
          onClick={() => setModal(true)}
          className="bg-white/[0.01] hover:bg-white/[0.04] border border-dashed border-white/[0.12] hover:border-violet-500/40 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[180px] group">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 flex items-center justify-center transition-colors">
            <Icon d={ICONS.plus} size={18} />
          </div>
          <span className="text-white/20 group-hover:text-violet-300 text-xs transition-colors">Nouveau membre</span>
        </motion.button>
      </div>
      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter un membre">
        <div className="space-y-4">
          <div>
            <label className="block text-white/40 text-xs mb-2">Photo</label>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                {preview ? <img src={preview} alt="preview" className="w-full h-full object-cover grayscale" /> : <span className="text-white/20 text-xs">Photo</span>}
              </div>
              <label className="flex-1 cursor-pointer px-3 py-2 bg-white/5 border border-dashed border-white/20 hover:border-violet-400/50 rounded-lg text-white/30 hover:text-violet-400 text-xs text-center transition-all">
                Choisir une image <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
          </div>
          <Field label="Nom complet *" name="nom" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="Prénom Nom" />
          <Field label="Rôle / Poste *" name="role" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="ex: Développeur Frontend" />
          <Field label="LinkedIn" name="linkedin" value={form.linkedin} onChange={e => setForm({ ...form, linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
          <div>
            <label className="block text-white/40 text-xs mb-1.5">Bio</label>
            <textarea value={form.bio} rows={3} placeholder="Courte description..." onChange={e => setForm({ ...form, bio: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none transition-colors resize-none" />
          </div>
          <button onClick={handleAdd} disabled={loading || !form.nom || !form.role}
            className="w-full py-2.5 bg-violet-500/20 hover:bg-violet-500/30 disabled:opacity-40 text-violet-300 rounded-lg text-sm transition-colors">
            {loading ? 'Ajout en cours...' : 'Confirmer'}
          </button>
        </div>
      </Modal>
      <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title="Confirmer la suppression">
        <div className="space-y-5">
          <div className="flex items-start gap-3 p-4 bg-rose-500/5 border border-rose-500/15 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-rose-500/15 flex items-center justify-center flex-shrink-0"><Icon d={ICONS.trash} size={15} /></div>
            <div><p className="text-white text-sm font-medium mb-1">Supprimer ce membre ?</p><p className="text-white/40 text-xs">Cette action est irréversible.</p></div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setConfirmId(null)} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg text-sm transition-colors">Annuler</button>
            <button onClick={handleDelete} className="flex-1 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-lg text-sm transition-colors">Supprimer</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function VueClients() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmId, setConfirmId] = useState(null);
  const [form, setForm] = useState({ nom: '', contact: '', email: '', ville: '', site_web: '' });
  const [logoFile, setLogoFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => { try { const res = await fetch(`${API}/clients`); const data = await res.json(); setItems(Array.isArray(data) ? data : []); } catch (err) { console.error(err); } };
  useEffect(() => { fetchClients(); }, []);

  const handleLogoChange = (e) => { const file = e.target.files[0]; if (!file) return; setLogoFile(file); setPreview(URL.createObjectURL(file)); };
  const handleAdd = async () => {
    if (!form.nom) return; setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (logoFile) fd.append('logo', logoFile);
    await fetch(`${API}/clients`, { method: 'POST', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, body: fd });
    setForm({ nom: '', contact: '', email: '', ville: '', site_web: '' }); setLogoFile(null); setPreview(null); setModal(false); setLoading(false); fetchClients();
  };
  const handleDelete = async () => {
    await fetch(`${API}/clients/${confirmId}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    setConfirmId(null); fetchClients();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-white/50 text-sm">{items.length} client{items.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)} className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg text-sm transition-colors"><Icon d={ICONS.plus} size={14} /> Ajouter</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((c, i) => {
          const colors = AVATAR_BG[i % AVATAR_BG.length];
          return (
            <motion.div key={c.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
              className="relative group bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-200">
              <button onClick={() => setConfirmId(c.id)} className="absolute top-3 right-3 w-7 h-7 rounded-lg hover:bg-rose-500/20 text-white/0 group-hover:text-rose-400 transition-all flex items-center justify-center"><Icon d={ICONS.trash} size={13} /></button>
              <div className="w-14 h-14 flex items-center justify-center mb-4 overflow-hidden flex-shrink-0">
                {c.logo ? <img src={`${API.replace('/api', '')}${c.logo}`} alt={c.nom} className="w-14 h-14 object-contain" /> : <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-base font-medium ${colors.bg} ${colors.text}`}>{c.nom.slice(0, 2).toUpperCase()}</div>}
              </div>
              <p className="text-white text-sm font-medium leading-tight mb-1 w-full truncate px-1">{c.nom}</p>
              {c.ville && <p className="text-white/40 text-xs mb-2">{c.ville}</p>}
              {c.site_web && <a href={c.site_web} target="_blank" rel="noopener noreferrer" className="mt-1 text-xs text-cyan-400/60 hover:text-cyan-300 transition-colors">Site web →</a>}
            </motion.div>
          );
        })}
        <motion.button initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: items.length * 0.06 }}
          onClick={() => setModal(true)}
          className="bg-white/[0.01] hover:bg-white/[0.04] border border-dashed border-white/[0.12] hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[180px] group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 flex items-center justify-center transition-colors"><Icon d={ICONS.plus} size={18} /></div>
          <span className="text-white/20 group-hover:text-cyan-300 text-xs transition-colors">Nouveau client</span>
        </motion.button>
      </div>
      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter un client">
        <div className="space-y-4">
          <div>
            <label className="block text-white/40 text-xs mb-2">Logo</label>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                {preview ? <img src={preview} alt="preview" className="w-full h-full object-contain p-1" /> : <span className="text-white/20 text-xs">Logo</span>}
              </div>
              <label className="flex-1 cursor-pointer px-3 py-2 bg-white/5 border border-dashed border-white/20 hover:border-cyan-400/50 rounded-lg text-white/30 hover:text-cyan-400 text-xs text-center transition-all">
                Choisir un logo <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
              </label>
            </div>
          </div>
          <Field label="Nom *" name="nom" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="Société XYZ" />
          <Field label="Contact" name="contact" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="Prénom Nom" />
          <Field label="Email" name="email" value={form.email} type="email" onChange={e => setForm({ ...form, email: e.target.value })} placeholder="contact@societe.tn" />
          <Field label="Ville" name="ville" value={form.ville} onChange={e => setForm({ ...form, ville: e.target.value })} placeholder="Tunis, Sfax..." />
          <Field label="Site web" name="site_web" value={form.site_web} onChange={e => setForm({ ...form, site_web: e.target.value })} placeholder="https://societe.tn" />
          <button onClick={handleAdd} disabled={loading || !form.nom} className="w-full py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-40 text-cyan-300 rounded-lg text-sm transition-colors">{loading ? 'Ajout...' : 'Confirmer'}</button>
        </div>
      </Modal>
      <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title="Supprimer ce client ?">
        <div className="space-y-5">
          <div className="p-4 bg-rose-500/5 border border-rose-500/15 rounded-xl"><p className="text-white/70 text-sm">Cette action est irréversible.</p></div>
          <div className="flex gap-3">
            <button onClick={() => setConfirmId(null)} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white/60 rounded-lg text-sm transition-colors">Annuler</button>
            <button onClick={handleDelete} className="flex-1 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-lg text-sm transition-colors">Supprimer</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function VueServices() {
  const [items, setItems] = useState(MOCK.services);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ nom: '', categorie: '', prix: '', actif: true });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => { if (!form.nom) return; setItems([...items, { id: Date.now(), ...form }]); setForm({ nom: '', categorie: '', prix: '', actif: true }); setModal(false); };
  const handleDelete = id => setItems(items.filter(i => i.id !== id));
  const toggleActif = id => setItems(items.map(i => i.id === id ? { ...i, actif: !i.actif } : i));
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-white/50 text-sm">{items.length} service{items.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)} className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-sm transition-colors"><Icon d={ICONS.plus} size={14} /> Ajouter</button>
      </div>
      <div className="space-y-3">
        {items.map((s, i) => (
          <motion.div key={s.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-white/[0.14] transition-colors group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1"><p className="text-white text-sm font-medium truncate">{s.nom}</p><Badge actif={s.actif} /></div>
              <p className="text-white/40 text-xs">{s.categorie} · {s.prix}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
              <button onClick={() => toggleActif(s.id)} className="text-white/20 hover:text-emerald-400 transition-colors"><Icon d={ICONS.check} size={15} /></button>
              <button onClick={() => handleDelete(s.id)} className="text-white/20 hover:text-rose-400 transition-colors"><Icon d={ICONS.trash} size={15} /></button>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter un service">
        <div className="space-y-4">
          <Field label="Nom" name="nom" value={form.nom} onChange={handleChange} placeholder="ex: Développement Web" />
          <Field label="Catégorie" name="categorie" value={form.categorie} onChange={handleChange} placeholder="Tech, IA, Design..." />
          <Field label="Prix (TND)" name="prix" value={form.prix} onChange={handleChange} placeholder="ex: 2500 TND" />
          <button onClick={handleAdd} className="w-full py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-sm transition-colors mt-2">Confirmer</button>
        </div>
      </Modal>
    </div>
  );
}

const STATUT_COLORS = {
  production: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', label: 'Production' },
  beta:       { bg: 'bg-amber-500/15',   text: 'text-amber-400',   label: 'Bêta'       },
  dev:        { bg: 'bg-sky-500/15',     text: 'text-sky-400',     label: 'En dev'     },
  archive:    { bg: 'bg-white/5',        text: 'text-white/30',    label: 'Archivé'    },
};

function VueApps() {
  const [apps, setApps] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [confirmId, setConfirmId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [screenshotFiles, setScreenshotFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [form, setForm] = useState({ nom: '', description: '', url_site: '', url_repo: '', categorie: '', technologies: '', statut: 'production' });

  const fetchApps = async () => { try { const res = await fetch(`${API}/apps`); const data = await res.json(); setApps(Array.isArray(data) ? data : []); } catch (err) { console.error(err); } };
  useEffect(() => { fetchApps(); }, []);

  const handleScreenshots = (e) => { const files = Array.from(e.target.files).slice(0, 10); setScreenshotFiles(files); setPreviews(files.map(f => URL.createObjectURL(f))); };
  const handleAdd = async () => {
    if (!form.nom) return; setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    screenshotFiles.forEach(f => fd.append('screenshots', f));
    await fetch(`${API}/apps`, { method: 'POST', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, body: fd });
    setForm({ nom: '', description: '', url_site: '', url_repo: '', categorie: '', technologies: '', statut: 'production' });
    setScreenshotFiles([]); setPreviews([]); setModal(false); setLoading(false); fetchApps();
  };
  const handleDelete = async () => {
    await fetch(`${API}/apps/${confirmId}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    setConfirmId(null); if (selected?.id === confirmId) setSelected(null); fetchApps();
  };

  if (selected) {
    const app = apps.find(a => a.id === selected.id) || selected;
    const statut = STATUT_COLORS[app.statut] || STATUT_COLORS.production;
    return (
      <div>
        <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-6 transition-colors">
          <Icon d="M15 19l-7-7 7-7" size={16} /> Retour aux applications
        </button>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div><h2 className="text-white font-medium text-lg">{app.nom}</h2>{app.categorie && <p className="text-white/30 text-xs mt-0.5">{app.categorie}</p>}</div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statut.bg} ${statut.text}`}>{statut.label}</span>
              </div>
              {app.description && <p className="text-white/50 text-sm leading-relaxed mb-4">{app.description}</p>}
              {app.technologies?.length > 0 && <div className="flex flex-wrap gap-2 mb-4">{app.technologies.map(t => <span key={t} className="text-xs px-2 py-1 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20">{t}</span>)}</div>}
              <div className="space-y-2">
                {app.url_site && <a href={app.url_site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cyan-400/70 hover:text-cyan-300 transition-colors"><Icon d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" size={14} />Voir le site</a>}
                {app.url_repo && <a href={app.url_repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"><Icon d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" size={14} />Code source</a>}
              </div>
            </div>
            <button onClick={() => setConfirmId(app.id)} className="w-full py-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"><Icon d={ICONS.trash} size={14} /> Supprimer</button>
          </div>
          <div className="lg:col-span-2">
            {app.screenshots?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {app.screenshots.map((s, i) => (
                  <motion.div key={s.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} className="rounded-xl overflow-hidden border border-white/[0.07] group">
                    <img src={`${API.replace('/api', '')}${s.image}`} alt={`capture ${i + 1}`} className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="h-48 rounded-2xl border border-dashed border-white/10 flex items-center justify-center"><p className="text-white/20 text-sm">Aucune capture</p></div>
            )}
          </div>
        </div>
        <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title="Supprimer l'application">
          <div className="space-y-5">
            <div className="p-4 bg-rose-500/5 border border-rose-500/15 rounded-xl"><p className="text-white/70 text-sm">Toutes les captures seront supprimées.</p></div>
            <div className="flex gap-3">
              <button onClick={() => setConfirmId(null)} className="flex-1 py-2.5 bg-white/5 text-white/60 rounded-lg text-sm">Annuler</button>
              <button onClick={handleDelete} className="flex-1 py-2.5 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Supprimer</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-white/50 text-sm">{apps.length} application{apps.length > 1 ? 's' : ''}</p>
        <button onClick={() => setModal(true)} className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg text-sm transition-colors"><Icon d={ICONS.plus} size={14} /> Ajouter</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map((app, i) => {
          const statut = STATUT_COLORS[app.statut] || STATUT_COLORS.production;
          const cover = app.screenshots?.[0];
          return (
            <motion.div key={app.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              onClick={() => setSelected(app)}
              className="group cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/[0.16] rounded-2xl overflow-hidden transition-all duration-200">
              <div className="h-40 bg-white/[0.02] overflow-hidden relative">
                {cover ? <img src={`${API.replace('/api', '')}${cover.image}`} alt={app.nom} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" /> : <div className="w-full h-full flex items-center justify-center text-white/10"><Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" size={32} /></div>}
                <div className="absolute top-3 right-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium backdrop-blur-sm ${statut.bg} ${statut.text}`}>{statut.label}</span></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="text-white text-xs">Voir les détails →</span></div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-white text-sm font-medium">{app.nom}</p>
                  {app.categorie && <span className="text-xs px-2 py-0.5 rounded-lg bg-white/5 text-white/30 flex-shrink-0">{app.categorie}</span>}
                </div>
                {app.description && <p className="text-white/40 text-xs line-clamp-2 mb-3">{app.description}</p>}
                {app.technologies?.length > 0 && <div className="flex flex-wrap gap-1.5">{app.technologies.slice(0, 3).map(t => <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400/70">{t}</span>)}{app.technologies.length > 3 && <span className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-white/20">+{app.technologies.length - 3}</span>}</div>}
              </div>
            </motion.div>
          );
        })}
        <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: apps.length * 0.07 }}
          onClick={() => setModal(true)}
          className="h-full min-h-[260px] bg-white/[0.01] hover:bg-white/[0.04] border border-dashed border-white/[0.10] hover:border-indigo-500/40 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-200 group">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center transition-colors"><Icon d={ICONS.plus} size={20} /></div>
          <span className="text-white/20 group-hover:text-indigo-300 text-sm transition-colors">Nouvelle application</span>
        </motion.button>
      </div>
      <Modal open={modal} onClose={() => setModal(false)} title="Ajouter une application">
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-white/40 text-xs mb-2">Captures (max 10)</label>
            {previews.length > 0 && <div className="grid grid-cols-3 gap-2 mb-2">{previews.map((p, i) => <img key={i} src={p} alt="" className="w-full h-20 object-cover rounded-lg border border-white/10" />)}</div>}
            <label className="block cursor-pointer px-3 py-2.5 bg-white/5 border border-dashed border-white/20 hover:border-indigo-400/50 rounded-lg text-white/30 hover:text-indigo-400 text-xs text-center transition-all">
              {previews.length > 0 ? `${previews.length} capture(s)` : 'Choisir des captures'}
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleScreenshots} />
            </label>
          </div>
          <Field label="Nom *" name="nom" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="ex: UlyShop" />
          <div><label className="block text-white/40 text-xs mb-1.5">Description</label><textarea value={form.description} rows={2} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-violet-500/50 focus:outline-none resize-none" /></div>
          <Field label="URL site" name="url_site" value={form.url_site} onChange={e => setForm({ ...form, url_site: e.target.value })} placeholder="https://monapp.tn" />
          <Field label="URL repo" name="url_repo" value={form.url_repo} onChange={e => setForm({ ...form, url_repo: e.target.value })} placeholder="https://github.com/..." />
          <Field label="Catégorie" name="categorie" value={form.categorie} onChange={e => setForm({ ...form, categorie: e.target.value })} placeholder="SaaS, E-commerce..." />
          <Field label="Technologies (virgule)" name="technologies" value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })} placeholder="React, Node.js..." />
          <div><label className="block text-white/40 text-xs mb-1.5">Statut</label>
            <select value={form.statut} onChange={e => setForm({ ...form, statut: e.target.value })} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-violet-500/50 focus:outline-none">
              <option value="production">Production</option><option value="beta">Bêta</option><option value="dev">En développement</option><option value="archive">Archivé</option>
            </select>
          </div>
          <button onClick={handleAdd} disabled={loading || !form.nom} className="w-full py-2.5 bg-indigo-500/20 hover:bg-indigo-500/30 disabled:opacity-40 text-indigo-300 rounded-lg text-sm transition-colors">{loading ? 'Ajout...' : 'Confirmer'}</button>
        </div>
      </Modal>
    </div>
  );
}

function VueConversations() {
  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [confirmId, setConfirmId] = useState(null);

  const fetchConversations = async () => { const res = await fetch(`${API}/chat/conversations`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }); const data = await res.json(); setConversations(Array.isArray(data) ? data : []); };
  const fetchMessages = async (id) => { const res = await fetch(`${API}/chat/conversations/${id}/messages`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }); const data = await res.json(); setMessages(Array.isArray(data) ? data : []); };
  const handleDelete = async () => { await fetch(`${API}/chat/conversations/${confirmId}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }); setConfirmId(null); if (selected?.id === confirmId) { setSelected(null); setMessages([]); } fetchConversations(); };

  useEffect(() => { fetchConversations(); }, []);
  useEffect(() => { if (selected) fetchMessages(selected.id); }, [selected]);

  const formatDate = (d) => new Date(d).toLocaleDateString('fr-TN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex gap-5 h-[calc(100vh-180px)]">
      <div className="w-72 flex-shrink-0 flex flex-col gap-3 overflow-y-auto pr-1">
        <p className="text-white/50 text-sm mb-2">{conversations.length} discussion{conversations.length > 1 ? 's' : ''}</p>
        {conversations.length === 0 && <p className="text-white/20 text-sm text-center py-12">Aucune discussion</p>}
        {conversations.map((conv, i) => (
          <motion.div key={conv.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
            onClick={() => setSelected(conv)}
            className={`group cursor-pointer p-3.5 rounded-xl border transition-all duration-200 ${selected?.id === conv.id ? 'bg-violet-500/10 border-violet-500/30' : 'bg-white/[0.03] border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.05]'}`}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0"><Icon d={ICONS.chat} size={13} /></div>
              <div className="flex-1 min-w-0"><p className="text-white/70 text-xs truncate">{conv.premier_message || 'Nouvelle conversation'}</p></div>
              <button onClick={e => { e.stopPropagation(); setConfirmId(conv.id); }} className="opacity-0 group-hover:opacity-100 text-white/20 hover:text-rose-400 transition-all"><Icon d={ICONS.trash} size={13} /></button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/30 text-xs">{formatDate(conv.updated_at)}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">{conv.total_messages} msg</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
        {!selected ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center"><div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-3"><Icon d={ICONS.chat} size={20} /></div><p className="text-white/20 text-sm">Sélectionnez une discussion</p></div>
          </div>
        ) : (
          <>
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
              <div><p className="text-white/70 text-sm font-medium truncate max-w-xs">{selected.premier_message?.slice(0, 50) || 'Discussion'}</p><p className="text-white/30 text-xs mt-0.5">{formatDate(selected.created_at)} · {selected.total_messages} messages</p></div>
              <button onClick={() => setConfirmId(selected.id)} className="text-white/20 hover:text-rose-400 transition-colors"><Icon d={ICONS.trash} size={15} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2"><Icon d={ICONS.user} size={12} /></div>}
                  <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-violet-600/70 text-white rounded-br-sm' : 'bg-white/[0.06] text-white/80 rounded-bl-sm border border-white/[0.05]'}`}>{msg.content}</div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
      <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title="Supprimer la discussion">
        <div className="space-y-5">
          <div className="p-4 bg-rose-500/5 border border-rose-500/15 rounded-xl"><p className="text-white/70 text-sm">Tous les messages seront supprimés.</p></div>
          <div className="flex gap-3">
            <button onClick={() => setConfirmId(null)} className="flex-1 py-2.5 bg-white/5 text-white/60 rounded-lg text-sm">Annuler</button>
            <button onClick={handleDelete} className="flex-1 py-2.5 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Supprimer</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DASHBOARD PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
const NAV = [
  { id: 'apercu',        label: 'Aperçu',       icon: ICONS.stats    },
  { id: 'equipe',        label: 'Équipe',        icon: ICONS.team     },
  { id: 'clients',       label: 'Clients',       icon: ICONS.clients  },
  { id: 'apps',          label: 'Applications',  icon: ICONS.grid     },
  { id: 'conversations', label: 'Discussions',   icon: ICONS.chat     },
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

  const handleLogout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); navigate('/login'); };

  if (!user) return null;

  const SECTION_TITLES = {
    apercu: `Bonjour, ${user.nom} 👋`,
    equipe: 'Équipe', clients: 'Clients', services: 'Services',
    apps: 'Applications', conversations: 'Discussions',
  };

  return (
    <div className="min-h-screen bg-darkBg flex relative" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* SIDEBAR — sticky, ne scroll pas */}
        <aside className={`
          fixed top-0 left-0 h-screen w-60
          bg-[#08080d]/95 backdrop-blur-md border-r border-white/[0.10]
          flex flex-col z-30 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:fixed lg:z-30
        `}>
        <div className="px-5 py-5 border-b border-white/[0.08] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <img src="/logoulytech.webp" alt="UlyTech" className="h-6 w-auto" />
            <span className="text-white/80 text-xs font-medium tracking-wide">Dashboard</span>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV.map(item => {
            const active = section === item.id;
            return (
              <button key={item.id} onClick={() => { setSection(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left ${active ? 'bg-violet-500/20 text-violet-200' : 'text-white/60 hover:text-white hover:bg-white/[0.06]'}`}>
                <Icon d={item.icon} size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="px-3 py-4 border-t border-white/[0.08] space-y-1 flex-shrink-0 mt-auto">
          <div className="flex items-center gap-3 px-3 py-2.5">
            <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-300 text-xs font-medium">{user.nom?.slice(0, 2).toUpperCase()}</div>
            <div className="flex-1 min-w-0">
              <p className="text-white/90 text-xs font-medium truncate">{user.nom}</p>
              <p className="text-white/50 text-xs truncate">{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-rose-400 hover:bg-rose-500/5 transition-all">
            <Icon d={ICONS.logout} size={16} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen bg-[#08080d]/75 backdrop-blur-sm lg:pl-60">
        {/* HEADER FIXE */}
        <header className="sticky top-0 z-10 h-14 border-b border-white/[0.08] flex items-center px-5 lg:px-8 gap-4 flex-shrink-0 bg-[#08080d]/95 backdrop-blur-md">
          <button className="lg:hidden text-white/60 hover:text-white transition-colors" onClick={() => setSidebarOpen(true)}>
            <Icon d={ICONS.menu} size={20} />
          </button>
          <h1 className="text-white font-medium text-base flex-1">{SECTION_TITLES[section]}</h1>
          <div className="text-white/50 text-xs hidden sm:block">
            {new Date().toLocaleDateString('fr-TN', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </header>

        {/* CONTENU SCROLLABLE */}
        <div className="flex-1 overflow-auto px-5 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div key={section} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              {section === 'apercu'        && <VueApercu user={user} />}
              {section === 'equipe'        && <VueEquipe />}
              {section === 'clients'       && <VueClients />}
              {section === 'services'      && <VueServices />}
              {section === 'apps'          && <VueApps />}
              {section === 'conversations' && <VueConversations />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}