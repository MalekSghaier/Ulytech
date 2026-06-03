import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';
import { TbCookie } from 'react-icons/tb';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-400/20 flex items-center justify-center flex-shrink-0">
                  <TbCookie className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Cookies & Confidentialité</h3>
              </div>
              <button
                onClick={declineCookies}
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
              En continuant, vous acceptez notre utilisation des cookies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={acceptCookies}
                className="flex-1 px-4 py-2.5 bg-white text-darkBg rounded-lg font-medium text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                <FiCheck className="w-4 h-4" />
                <span>Accepter</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={declineCookies}
                className="flex-1 px-4 py-2.5 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] text-white rounded-lg font-medium text-sm transition-all"
              >
                Refuser
              </motion.button>
            </div>

            <a
              href="/privacy-policy"
              className="block text-center text-purple-400 hover:text-purple-300 text-xs mt-4 transition-colors"
            >
              En savoir plus sur notre politique de confidentialité
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
