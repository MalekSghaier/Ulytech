import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const API = 'http://localhost:5000';

export default function Partners() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/clients`)
      .then(res => res.json())
      .then(data => setClients(Array.isArray(data) ? data : []))
      .catch(err => console.error('Erreur clients:', err));
  }, []);

  if (clients.length === 0) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14">
          <p className="text-white/20 text-xs uppercase tracking-[0.2em] mb-3">Ils nous font confiance</p>
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            Nos <span className="text-purple-400">Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div key={client.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            >
              {client.site_web ? (
                <a href={client.site_web} target="_blank" rel="noopener noreferrer"
                  className="block group">
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
  const initiales = client.nom.slice(0, 2).toUpperCase();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 p-6 flex flex-col items-center gap-4 group">
      {/* Logo */}
      <div className="w-20 h-16 flex items-center justify-center flex-shrink-0">
      {client.logo ? (
        <img src={`${API}${client.logo}`} alt={client.nom}
          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300" />
      ) : (
        <span className="text-white/30 group-hover:text-purple-300 text-lg font-medium transition-colors">
          {initiales}
        </span>
      )}
      </div>

      {/* Nom */}
      <div className="text-center">
        <p className="text-white/60 group-hover:text-white text-sm font-medium transition-colors leading-tight">
          {client.nom}
        </p>
        {client.ville && (
          <p className="text-white/20 text-xs mt-1">{client.ville}</p>
        )}
      </div>

      {/* Indicateur site web */}
      {client.site_web && (
        <span className="text-purple-400/0 group-hover:text-purple-400/60 text-xs transition-all duration-300">
          Visiter →
        </span>
      )}
    </div>
  );
}