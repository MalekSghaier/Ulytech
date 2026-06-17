import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
;

export default function Partners() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${API}/clients`)
      .then(res => res.json())
      .then(data => setClients(Array.isArray(data) ? data : []))
      .catch(err => console.error('Erreur clients:', err));
  }, []);

  if (clients.length === 0) return null;

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-white/20 text-xs uppercase tracking-[0.25em] mb-3">
            Ils nous font confiance
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            Nos <span className="text-purple-400">Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {client.site_web ? (
                <a
                  href={client.site_web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ClientCard client={client} />
                </a>
              ) : (
                <ClientCard client={client} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }) {
  const [hovered, setHovered] = useState(false);
  const ref = React.useRef(null);
  const initiales = client.nom.slice(0, 2).toUpperCase();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHovered(true);
        else setHovered(false);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)} 
      onTouchEnd={() => setTimeout(() => setHovered(false), 600)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: hovered
          ? '1px solid rgba(124,58,237,0.45)'
          : '1px solid rgba(255,255,255,0.07)',
        background: hovered
          ? 'rgba(124,58,237,0.07)'
          : 'rgba(255,255,255,0.02)',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        overflow: 'hidden',
      }}
    >
      {/* Halo radial en haut */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Ligne violette en bas */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #7c3aed, #a855f7, transparent)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.4s ease',
      }} />

      {/* Anneau d'expansion */}
      <div style={{
        position: 'absolute',
        width: '90px', height: '90px',
        borderRadius: '50%',
        border: '1px solid rgba(124,58,237,0.25)',
        top: '50%', left: '50%',
        transform: hovered
          ? 'translate(-50%, -50%) scale(2.2)'
          : 'translate(-50%, -50%) scale(0)',
        opacity: hovered ? 1 : 0,
        transition: 'transform 0.55s ease, opacity 0.55s ease',
        pointerEvents: 'none',
      }} />

      {/* Particules flottantes */}
      {hovered && [20, 50, 80].map((left, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: '10px',
          left: `${left}%`,
          width: '3px', height: '3px',
          borderRadius: '50%',
          background: '#a78bfa',
          animation: `floatUp 0.9s ease-out ${i * 0.1}s forwards`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Logo ou initiales */}
      <div style={{
        width: '72px', height: '48px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: hovered ? 'grayscale(0) opacity(1)' : 'grayscale(1) opacity(0.4)',
        transform: hovered ? 'scale(1.12)' : 'scale(1)',
        transition: 'filter 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        {client.logo ? (
          <img
            src={`${API.replace('/api', '')}${client.logo}`}
            alt={client.nom}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        ) : (
          <span style={{
            fontSize: '20px', fontWeight: 600,
            color: hovered ? '#a78bfa' : 'rgba(255,255,255,0.25)',
            transition: 'color 0.3s ease',
            fontFamily: 'sans-serif',
          }}>
            {initiales}
          </span>
        )}
      </div>

      {/* Nom */}
      <p style={{
        fontSize: '13px', fontWeight: 500,
        color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
        textAlign: 'center', lineHeight: 1.3,
        transition: 'color 0.3s ease',
        fontFamily: 'sans-serif',
      }}>
        {client.nom}
      </p>

      {/* Ville */}
      {client.ville && (
        <p style={{
          fontSize: '11px',
          color: hovered ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)',
          transition: 'color 0.3s ease',
          fontFamily: 'sans-serif',
        }}>
          {client.ville}
        </p>
      )}

      {/* Visiter */}
      {client.site_web && (
        <span style={{
          fontSize: '11px',
          color: hovered ? 'rgba(167,139,250,0.75)' : 'rgba(167,139,250,0)',
          transform: hovered ? 'translateY(0)' : 'translateY(5px)',
          transition: 'color 0.3s ease, transform 0.3s ease',
          fontFamily: 'sans-serif',
        }}>
          Visiter →
        </span>
      )}

      {/* Keyframes particules */}
      <style>{`
        @keyframes floatUp {
          0%   { opacity: 0.8; transform: translateY(0); }
          100% { opacity: 0;   transform: translateY(-45px); }
        }
      `}</style>
    </div>
  );
}