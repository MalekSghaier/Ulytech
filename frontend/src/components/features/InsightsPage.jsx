import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiDollarSign, FiZap, FiShield,
  FiBarChart2, FiFileText, FiRefreshCw, FiAlertCircle,
  FiArrowRight, FiCheck
} from 'react-icons/fi';

export default function InsightsPage() {

  const features = [
    {
      icon: FiRefreshCw,
      title: 'Rapprochement Automatique',
      description: 'Automatisation complète du rapprochement bancaire avec IA'
    },
    {
      icon: FiZap,
      title: 'Traitement Instantané',
      description: 'Analyse et rapprochement en temps réel'
    },
    {
      icon: FiShield,
      title: 'Sécurité Bancaire',
      description: 'Cryptage de niveau bancaire pour vos données'
    },
    {
      icon: FiBarChart2,
      title: 'Rapports Détaillés',
      description: 'Tableaux de bord et rapports personnalisables'
    },
    {
      icon: FiFileText,
      title: 'Export Multi-formats',
      description: 'Export en Excel, PDF, CSV et plus'
    },
    {
      icon: FiAlertCircle,
      title: 'Alertes Intelligentes',
      description: 'Notifications pour les écarts et anomalies'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '49',
      description: 'Pour les petites entreprises',
      features: [
        'Jusqu\'à 1000 transactions/mois',
        'Rapprochement automatique',
        'Rapports basiques',
        'Support email',
        '1 utilisateur'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '99',
      description: 'Pour les entreprises en croissance',
      popular: true,
      features: [
        'Jusqu\'à 10000 transactions/mois',
        'Rapprochement avancé avec IA',
        'Rapports personnalisés',
        'Support prioritaire 24/7',
        '5 utilisateurs',
        'API accès',
        'Alertes intelligentes'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Sur mesure',
      description: 'Pour les grandes organisations',
      features: [
        'Transactions illimitées',
        'IA personnalisée',
        'Rapports avancés',
        'Support dédié',
        'Utilisateurs illimités',
        'Intégration sur mesure',
        'Formation incluse'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5E30B5]/20 to-[#5E30B5]/30 border border-[#5E30B5]/30 rounded-full mb-6"
            >
              <FiDollarSign className="w-4 h-4" style={{ color: '#5E30B5' }} />
              <span className="text-xs md:text-sm font-medium" style={{ color: '#8B5CF6' }}>Solution Financière Automatisée</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Rapprochement bancaire<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #5E30B5, #8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                100% automatisé
              </span>
            </h1>
            
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4 mb-8">
              Gagnez des heures chaque mois avec notre solution intelligente<br className="hidden sm:block" />
              de rapprochement bancaire automatisé
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 text-white rounded-lg font-medium transition-all"
                  style={{ background: 'linear-gradient(to right, #5E30B5, #8B5CF6)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.5)' }}
                >
                  Essai gratuit 14 jours
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
              >
                Démo en direct
              </motion.button>
            </div>
          </motion.div>

          {/* Screenshot Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* Screenshot 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
              >
                <img src="/1rp.png" alt="Interface de rapprochement bancaire" className="w-full h-auto" />
              </motion.div>

              {/* Screenshot 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
              >
                <img src="/2rp.png" alt="Tableau de bord analytique" className="w-full h-auto" />
              </motion.div>

              {/* Screenshot 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
              >
                <img src="/3rp.png" alt="Rapports détaillés" className="w-full h-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Fonctionnalités puissantes</h2>
            <p className="text-white/50 text-sm md:text-base">Tout ce dont vous avez besoin pour automatiser votre comptabilité</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 hover:border-[#5E30B5]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                  <feature.icon className="w-6 h-6" style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Tarifs transparents</h2>
            <p className="text-white/50 text-sm md:text-base">Choisissez le plan qui correspond à vos besoins</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white/[0.02] border rounded-2xl p-6 md:p-8 hover:border-[#5E30B5]/30 transition-all ${
                  plan.popular ? 'shadow-lg' : 'border-white/[0.08]'
                }`}
                style={plan.popular ? { borderColor: 'rgba(94, 48, 181, 0.5)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.2)' } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium text-white" style={{ background: 'linear-gradient(to right, #5E30B5, #8B5CF6)' }}>
                    Populaire
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {typeof plan.price === 'string' && plan.price !== 'Sur mesure' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/50">€/mois</span>
                    </div>
                  ) : plan.price === 'Sur mesure' ? (
                    <div className="text-2xl font-bold text-white">{plan.price}</div>
                  ) : null}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <FiCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'text-white'
                      : 'bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1]'
                  }`}
                  style={plan.popular ? { background: 'linear-gradient(to right, #5E30B5, #8B5CF6)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.5)' } : {}}
                >
                  Commencer
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] p-8 md:p-12 text-center"
            style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.1), rgba(139, 92, 246, 0.1))' }}
          >
            <div className="absolute inset-0 blur-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.05), rgba(139, 92, 246, 0.05))' }}></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Prêt à automatiser votre comptabilité ?
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Rejoignez des centaines dentreprises qui nous font confiance
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-darkBg rounded-lg font-medium hover:bg-white/90 transition-all"
                >
                  Démarrer maintenant
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
