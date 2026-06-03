import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProduitMenu, setShowProduitMenu] = useState(false);
  const [showMobileProduit, setShowMobileProduit] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navItems = [
    { name: 'Produit', href: '/', isRoute: true, hasDropdown: true },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'À Propos', href: '#about', isRoute: false },
    { name: 'Contact', href: '/contact', isRoute: true }
  ];

  const coreFeatures = [
    { name: 'Planification', desc: 'Définissez la direction produit avec projets et initiatives', href: '/features/plan' },
    { name: 'Développement', desc: 'Progressez avec suivi des tâches et planification des cycles', href: '/features/build' }
  ];

  const moreFeatures = [
    { name: 'Demandes clients', desc: 'Gérez les retours utilisateurs', href: '/features/customer-requests' },
    { name: 'Intégrations', desc: 'Collaborez entre outils', href: '/features/integrations' },
    { name: 'Analyses', desc: 'Analytiques en temps réel', href: '/features/insights' },
    { name: 'Application mobile', desc: 'UlyTech dans votre poche', href: '/features/mobile-app' },
    { name: 'Demandes internes', desc: 'Requêtes en entreprise', href: '/features/linear-asks' },
    { name: 'Intelligence artificielle', desc: 'Workflows propulsés par IA', href: '/features/ai' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-darkBg/80 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-start h-[60px] relative">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ opacity: 0.8 }}
            className="flex items-center md:ml-[15%] h-full translate-y-[4px]"
          >
            <img src="/logoulytech.png" alt="UlyTech Logo" className="h-[32px] md:h-[40px] w-auto object-contain" />
          </motion.a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-6">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (closeTimeout) clearTimeout(closeTimeout);
                    setShowProduitMenu(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setShowProduitMenu(false), 300);
                    setCloseTimeout(timeout);
                  }}
                >
                  <Link
                    to={item.href}
                    className="px-3 py-1.5 text-white/60 hover:text-white transition-colors duration-150 text-[15px] font-normal"
                  >
                    {item.name}
                  </Link>
                  {showProduitMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[800px] backdrop-blur-xl bg-darkBg/95 border border-white/[0.08] rounded-md p-6 shadow-2xl"
                    >
                      {/* Blur Container for Main Content */}
                      <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-md p-4 mb-4">
                        {/* Main Content: 2 Columns */}
                        <div className="grid grid-cols-[1fr_2fr] gap-8 relative">
                          {/* Vertical Divider Line */}
                          <div className="absolute left-[calc(33.33%-1rem)] top-0 bottom-0 w-px bg-white/[0.08] backdrop-blur-sm" />
                          
                          {/* Left Column: Core Features */}
                          <div>
                            <h3 className="text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">Fonctionnalités principales</h3>
                            <div className="space-y-3">
                              {coreFeatures.map((feature) => (
                                <Link
                                  key={feature.name}
                                  to={feature.href}
                                  className="block p-2 rounded hover:bg-white/[0.05] transition-colors group"
                                >
                                  <div className="text-sm font-medium text-white mb-1 group-hover:text-purple-400 transition-colors">
                                    {feature.name}
                                  </div>
                                  <div className="text-xs text-white/40 leading-relaxed">
                                    {feature.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Column: More (2-column grid) */}
                          <div>
                            <h3 className="text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">Plus</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                              {moreFeatures.map((feature) => (
                                <Link
                                  key={feature.name}
                                  to={feature.href}
                                  className="block p-2 rounded hover:bg-white/[0.05] transition-colors group"
                                >
                                  <div className="text-sm font-medium text-white mb-1 group-hover:text-purple-400 transition-colors">
                                    {feature.name}
                                  </div>
                                  <div className="text-xs text-white/40 leading-relaxed">
                                    {feature.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Row */}
                      <div className="flex items-center justify-center pt-2">
                        <Link to="/features/cybersecurity" className="text-xs text-white/60 hover:text-white transition-colors">
                          Cybersécurité
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-1.5 text-white/60 hover:text-white transition-colors duration-150 text-[15px] font-normal"
                >
                  {item.name}
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 text-white/60 hover:text-white transition-colors duration-150 text-[15px] font-normal"
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-3 ml-auto mr-[10%]">
            <Link
              to="/login"
              className="flex items-center space-x-1.5 text-white/60 hover:text-white transition-colors duration-150 text-[15px] font-normal px-3 py-1.5"
            >
              <FiLogIn className="w-[15px] h-[15px]" />
              <span>Se connecter</span>
            </Link>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-1.5 px-4 py-1.5 bg-white text-darkBg rounded-md font-medium text-[15px] hover:bg-white/90 transition-all duration-150"
              >
                <FiUserPlus className="w-[15px] h-[15px]" />
                <span>S inscrire</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-xl bg-darkBg/80 border border-white/5 mt-2 rounded-lg p-2"
          >
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setShowMobileProduit(!showMobileProduit)}
                    className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    {item.name}
                  </button>
                  {showMobileProduit && (
                    <div className="mt-2 ml-4 space-y-2">
                      <div className="text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Fonctionnalités principales</div>
                      {coreFeatures.map((feature) => (
                        <Link
                          key={feature.name}
                          to={feature.href}
                          className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-sm font-medium mb-0.5">{feature.name}</div>
                          <div className="text-xs text-white/40">{feature.desc}</div>
                        </Link>
                      ))}
                      <div className="text-xs font-medium text-white/40 mb-2 mt-4 uppercase tracking-wider">Plus</div>
                      {moreFeatures.map((feature) => (
                        <Link
                          key={feature.name}
                          to={feature.href}
                          className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-sm font-medium mb-0.5">{feature.name}</div>
                          <div className="text-xs text-white/40">{feature.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="flex gap-2 mt-2">
              <Link to="/login" className="flex-1">
                <button className="w-full px-5 py-3 text-white border border-white/10 rounded-lg font-semibold text-sm hover:bg-white/5 transition-all flex items-center justify-center space-x-2">
                  <FiLogIn className="w-4 h-4" />
                  <span>Se connecter</span>
                </button>
              </Link>
              <Link to="/register" className="flex-1">
                <button className="w-full px-5 py-3 bg-white text-darkBg rounded-lg font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center space-x-2">
                  <FiUserPlus className="w-4 h-4" />
                  <span>S inscrire</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}