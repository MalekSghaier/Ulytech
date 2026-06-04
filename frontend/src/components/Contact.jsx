import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || "Erreur lors de l'envoi");
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Impossible de contacter le serveur');
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'kaissafouene@ulytech.tn',
      link: 'mailto:kaissafouene@ulytech.tn'
    },
    {
      icon: FiPhone,
      title: 'Téléphone',
      value: '+216 99 613 615',
      link: 'tel:+21699613615'
    },
    {
      icon: FiMapPin,
      title: 'Adresse',
      value: 'Immeuble ALHAJRI, rue 13 Aout\nKairouan 3100, Tunisie',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiFacebook, href: '#', label: 'Facebook' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-electricPink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Contactez-<span className="gradient-text">Nous</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs digitaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Envoyez-nous un message</h3>

            {/* Succès */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-6"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-emerald-400 text-sm font-medium">Message envoyé avec succès !</p>
                  <p className="text-emerald-400/60 text-xs mt-0.5">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              </motion.div>
            )}

            {/* Erreur */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl mb-6"
              >
                <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <p className="text-rose-400 text-sm">{errorMsg}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-violet focus:outline-none transition-colors text-white placeholder-white/20 disabled:opacity-50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-violet focus:outline-none transition-colors text-white placeholder-white/20 disabled:opacity-50"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm">Société</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-violet focus:outline-none transition-colors text-white placeholder-white/20 disabled:opacity-50"
                  placeholder="Votre société"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-violet focus:outline-none transition-colors text-white resize-none placeholder-white/20 disabled:opacity-50"
                  placeholder="Parlez-nous de votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Coordonnées */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Informations de Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <info.icon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white mb-1">{info.title}</div>
                      {info.link !== '#' ? (
                        <a href={info.link} className="text-white/70 hover:text-purple-300 transition-colors whitespace-pre-line">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white/70 whitespace-pre-line">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Suivez-Nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center neon-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Horaires d'Ouverture</h3>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white/90">8h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi - Dimanche</span>
                  <span className="text-white/30">Fermé</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}