import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import api from '../api';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const response = await api.post('/auth/login', {
      email: formData.email,
      mot_de_passe: formData.password,  
    });
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
        {/* Logo */}
        <Link to="/" className="flex justify-center mb-2">
          <img src="/logoulytech.webp" alt="UlyTech Logo" className="h-8 w-auto" />
        </Link>

        {/* Login Form */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-2 text-center">Se connecter</h2>
          <p className="text-white/40 mb-8 text-center text-sm">Accédez à votre compte UlyTech</p>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/50 mb-1.5 text-xs">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:border-purple-400 focus:outline-none transition-colors text-white text-sm"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-white/50 mb-1.5 text-xs">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:border-purple-400 focus:outline-none transition-colors text-white text-sm"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center text-white/40">
                <input type="checkbox" className="mr-1.5" />
                Se souvenir
              </label>
              <button type="button" className="text-purple-400 hover:text-purple-300">
                <Link to="/forgot-password" className="text-sm text-white/40 hover:text-purple-400 transition-colors">
                  Mot de passe oublié ?
                </Link>
              </button>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-2.5 bg-white text-darkBg rounded-md font-medium hover:bg-white/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </motion.button>
          </form>

          <div className="mt-6 text-center text-white/40 text-xs">
            Pas encore de compte?{' '}
            <Link to="/register" className="text-purple-400 hover:text-purple-300">
              S'inscrire
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
