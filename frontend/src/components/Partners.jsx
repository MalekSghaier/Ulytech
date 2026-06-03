import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const partners = [
  { name: 'Partner 1', logo: '/partners/Image1.png', url: '#' },
  { name: 'Suzuli', logo: '/partners/suzuli_logo.png', url: '#' }
];

export default function Partners() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-white/40 text-sm">
            Propulsant les meilleures équipes produit au monde.
          </p>
          <p className="text-white/30 text-xs mt-1">
            Des startups de nouvelle génération aux entreprises établies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group cursor-pointer"
        >
          {/* Logos - Desktop: Static, Mobile: Slider */}
          <div className={`transition-all duration-300 ${
            isHovered ? 'blur-sm opacity-30' : ''
          }`}>
            {/* Desktop */}
            <div className="hidden sm:flex flex-wrap justify-center items-center gap-12 sm:gap-16 lg:gap-20">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grayscale opacity-50 transition-all duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="sm:hidden overflow-hidden">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="flex items-center gap-12"
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="grayscale opacity-50 flex-shrink-0"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Button on Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.9,
              pointerEvents: isHovered ? 'auto' : 'none'
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-darkBg rounded-lg font-medium text-sm hover:bg-white/90 transition-all flex items-center gap-2 shadow-xl"
            >
              <span>Rencontrer nos clients</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
