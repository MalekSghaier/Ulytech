import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch((process.env.REACT_APP_API_URL || 'http://localhost:5000/api') + '/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('success');
    } catch {
      setStatus('success'); // On affiche toujours succès pour ne pas révéler les emails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 w-full max-w-md"
      >
        <Link to="/login" className="flex items-center space-x-2 text-white/50 hover:text-white mb-6 transition-colors text-sm">
          <FiArrowLeft /> <span>Retour à la connexion</span>
        </Link>

        <h1 className="text-2xl font-bold mb-2">Mot de passe oublié</h1>
        <p className="text-white/50 mb-6 text-sm">
          Entrez votre email et nous vous enverrons un lien de réinitialisation.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
            ✅ Si cet email existe, un lien de réinitialisation a été envoyé.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/70 mb-2 text-sm">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-violet focus:outline-none text-white placeholder-white/20"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Envoi...</span></>
              ) : (
                <span>Envoyer le lien</span>
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}