import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUp, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '/', isRoute: true },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'À Propos', href: '#about', isRoute: false },
    { name: 'Contact', href: '/contact', isRoute: true }
  ];

  const services = [
    { name: 'Développement Web', href: '/#services' },
    { name: 'Solutions IA', href: '/features/ai' },
    { name: 'Cloud & DevOps', href: '/#services' },
    { name: 'Applications Mobiles', href: '/features/mobile-app' },
    { name: 'Ingénierie des Données', href: '/#services' },
    { name: 'Cybersécurité', href: '/features/cybersecurity' }
  ];

  return (
    <footer className="relative bg-darkBg border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logoulytech.png" alt="UlyTech Logo" className="h-8 w-auto" />
            </Link>
            
            <ul className="space-y-2 mb-6">
              <li>
                <a href="mailto:kaissafouene@ulytech.tn" className="text-white/40 hover:text-white transition-colors text-sm">
                  kaissafouene@ulytech.tn
                </a>
              </li>
              <li>
                <a href="tel:+21699613615" className="text-white/40 hover:text-white transition-colors text-sm">
                  +216 99 613 615
                </a>
              </li>
              <li className="text-white/40 text-sm">
                Kairouan, Tunisie
              </li>
            </ul>

            <div className="flex space-x-4">
              <button className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center transition-all" aria-label="LinkedIn">
                <FiLinkedin className="w-4 h-4 text-white/60" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center transition-all" aria-label="GitHub">
                <FiGithub className="w-4 h-4 text-white/60" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center transition-all" aria-label="Facebook">
                <FiFacebook className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium mb-4 text-white">Services</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="text-white/40 hover:text-white transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="py-6 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-xs text-white/30 mb-1">Forme Juridique</div>
              <div className="text-sm text-white/60">SARL</div>
            </div>
            <div>
              <div className="text-xs text-white/30 mb-1">Capital</div>
              <div className="text-sm text-white/60">150 000 TND</div>
            </div>
            <div>
              <div className="text-xs text-white/30 mb-1">N° R.C</div>
              <div className="text-sm text-white/60">1943273B</div>
            </div>
            <div>
              <div className="text-xs text-white/30 mb-1">Localisation</div>
              <div className="text-sm text-white/60">Kairouan</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/30 text-xs">
              © 2026 UlyTech SARL. Tous droits réservés. 
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-white/30 hover:text-white transition-colors text-xs">
                Politique de Confidentialité
              </Link>
              <Link to="/terms-of-service" className="text-white/30 hover:text-white transition-colors text-xs">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-10 h-10 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg flex items-center justify-center transition-all z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5 text-white/60" />
      </motion.button>
    </footer>
  );
}