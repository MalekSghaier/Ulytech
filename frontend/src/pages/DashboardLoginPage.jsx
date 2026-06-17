import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../api';

export default function DashboardLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', {
        email: formData.email,
        mot_de_passe: formData.password,
      });

      if (response.data.user.role !== 'admin') {
        setError('Accès refusé — compte non autorisé');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="flex justify-center mb-6">
          <img src="/logoulytech.webp" alt="UlyTech" className="h-8 w-auto" />
        </div>

        <div className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl">
          <h2 className="text-white font-medium text-lg mb-1">Accès Dashboard</h2>
          <p className="text-white/30 text-xs mb-6">Réservé aux administrateurs UlyTech</p>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/40 text-xs mb-1.5">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none"
                placeholder="admin@ulytechai.com"
              />
            </div>
            <div>
              <label className="block text-white/40 text-xs mb-1.5">Mot de passe</label>
              <input
                type="password"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:border-violet-500/50 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={loading}
              className="w-full py-2.5 bg-violet-500/20 hover:bg-violet-500/30 disabled:opacity-50 text-violet-300 rounded-lg text-sm transition-colors"
            >
              {loading ? 'Connexion...' : 'Accéder au dashboard'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}