import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiMessageSquare, FiMail, FiUsers, FiCheckCircle, FiLock,
  FiArrowRight, FiCheck, FiSlack, FiInbox, FiSettings, FiTool,
  FiLifeBuoy, FiCode, FiAlertCircle, FiTrendingUp, FiClock
} from 'react-icons/fi';

export default function LinearAsksPage() {
  const [activeTab, setActiveTab] = useState('slack');

  const features = [
    {
      icon: FiMessageSquare,
      title: 'Rapports de bugs simplifiés',
      description: 'Permettez à tous de signaler des bugs rapidement sans détails complexes'
    },
    {
      icon: FiTool,
      title: 'Support IT instantané',
      description: 'Transformez n\'importe quel message en ticket IT avec une simple réaction emoji'
    },
    {
      icon: FiMail,
      title: 'Escalade client',
      description: 'Transférez les emails clients pour créer des tickets traçables'
    },
    {
      icon: FiSettings,
      title: 'Requêtes standardisées',
      description: 'Configurez des templates avec instructions et champs personnalisés'
    },
    {
      icon: FiUsers,
      title: 'Service client amélioré',
      description: 'Permettez à vos clients VIP de créer des demandes directement'
    },
    {
      icon: FiLock,
      title: 'Tickets RH sensibles',
      description: 'Créez des demandes privées pour les requêtes confidentielles'
    }
  ];

  const integrations = [
    {
      id: 'slack',
      name: 'Slack',
      icon: FiSlack,
      color: '#5E30B5',
      features: [
        'Créez des demandes depuis Slack',
        'Formulaires personnalisés par canal',
        'Notifications en temps réel',
        'Déclencheurs emoji',
        'Canaux partagés externes',
        'Auto-création de tickets'
      ]
    },
    {
      id: 'email',
      name: 'Email',
      icon: FiMail,
      color: '#8B5CF6',
      features: [
        'Transformez les emails en tickets',
        'CC ou transfert automatique',
        'Synchronisation bidirectionnelle',
        'Threads de discussion',
        'Réponses automatiques',
        'Gestion multi-boîtes'
      ]
    }
  ];

  const stats = [
    { value: '30K€', label: 'Économisés/an', icon: FiTrendingUp },
    { value: '< 2min', label: 'Temps de réponse', icon: FiClock },
    { value: '99.9%', label: 'Disponibilité', icon: FiCheckCircle },
    { value: '24/7', label: 'Support actif', icon: FiLifeBuoy }
  ];

  const useCases = [
    {
      title: 'Support technique',
      description: 'Gestion complète des tickets de support avec priorisation automatique',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Maintenance applicative',
      description: 'Suivi des demandes de maintenance et mises à jour',
      icon: FiTool,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Consultation & Conseil',
      description: 'Accompagnement expert pour vos projets et applications',
      icon: FiUsers,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Correction de bugs',
      description: 'Équipe dédiée pour résoudre vos problèmes rapidement',
      icon: FiAlertCircle,
      color: 'from-orange-500 to-red-500'
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5E30B5]/20 to-[#8B5CF6]/20 border border-[#5E30B5]/30 rounded-full mb-6"
            >
              <FiInbox className="w-4 h-4" style={{ color: '#8B5CF6' }} />
              <span className="text-xs md:text-sm font-medium" style={{ color: '#8B5CF6' }}>Support & Maintenance</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Transformez vos demandes<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #5E30B5, #8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                en actions concrètes
              </span>
            </h1>
            
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4 mb-8">
              La solution la plus simple pour gérer les demandes internes depuis Slack et Email.<br className="hidden sm:block" />
              Support technique, maintenance, bugs et consultations centralisés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 text-white rounded-lg font-medium transition-all"
                  style={{ background: 'linear-gradient(to right, #5E30B5, #8B5CF6)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.5)' }}
                >
                  Démarrer gratuitement
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
              >
                Voir la démo
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 md:p-6 text-center hover:border-[#5E30B5]/30 transition-all"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: '#8B5CF6' }} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mockup - Triage Inbox */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
            style={{ background: 'linear-gradient(to bottom, rgba(94, 48, 181, 0.05), rgba(0, 0, 0, 0.2))' }}
          >
            {/* Mockup Header */}
            <div className="border-b border-white/[0.08] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FiInbox className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                <span className="text-white font-semibold">Boîte de réception</span>
                <span className="px-2 py-1 bg-[#5E30B5]/20 text-[#8B5CF6] text-xs rounded-full">12 nouvelles</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/[0.05] rounded-lg transition-all">
                  <FiSettings className="w-4 h-4 text-white/50" />
                </button>
              </div>
            </div>

            {/* Mockup Content */}
            <div className="p-4 space-y-2">
              {[
                { title: 'Bug: Erreur de connexion', user: 'Client A', priority: 'Urgent', time: '2min' },
                { title: 'Demande: Nouvelle fonctionnalité', user: 'Client B', priority: 'Normal', time: '15min' },
                { title: 'Support: Question technique', user: 'Client C', priority: 'Faible', time: '1h' },
                { title: 'Maintenance: Mise à jour requise', user: 'Équipe IT', priority: 'Normal', time: '2h' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 hover:border-[#5E30B5]/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs">{item.user}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.priority === 'Urgent' ? 'bg-red-500/20 text-red-400' :
                        item.priority === 'Normal' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.priority}
                      </span>
                      <span className="text-white/30 text-xs">{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 md:py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Fonctionne où votre équipe travaille</h2>
            <p className="text-white/50 text-sm md:text-base">Soumettez des demandes directement depuis Slack et Email</p>
          </motion.div>

          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {integrations.map((integration) => (
              <motion.button
                key={integration.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(integration.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === integration.id
                    ? 'text-white border-2'
                    : 'bg-white/[0.02] border border-white/[0.08] text-white/50 hover:text-white'
                }`}
                style={activeTab === integration.id ? { 
                  background: 'linear-gradient(to right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))',
                  borderColor: '#5E30B5'
                } : {}}
              >
                <integration.icon className="w-5 h-5" />
                {integration.name}
              </motion.button>
            ))}
          </div>

          {/* Integration Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {activeTab === 'slack' ? 'Intégration Slack complète' : 'Gestion Email intelligente'}
              </h3>
              <p className="text-white/50 mb-6">
                {activeTab === 'slack' 
                  ? 'Permettez à votre équipe de créer des demandes sans quitter Slack. Même sans compte Linear.'
                  : 'Transformez n\'importe quel thread email en ticket traçable avec CC ou transfert.'}
              </p>
              <ul className="space-y-3">
                {integrations.find(i => i.id === activeTab)?.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FiCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} />
                    <span className="text-white/70">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-xl"
              style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.1), rgba(0, 0, 0, 0.3))' }}
            >
              <div className="p-6">
                {activeTab === 'slack' ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#5E30B5]/30 flex items-center justify-center">
                        <FiUsers className="w-4 h-4 text-[#8B5CF6]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm mb-1">Jean Dupont</div>
                        <div className="bg-white/[0.05] rounded-lg p-3 text-white/70 text-sm">
                          Le bouton de connexion ne fonctionne pas sur mobile 🐛
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button className="text-xs text-[#8B5CF6] hover:underline">Créer un ticket</button>
                          <span className="text-white/30 text-xs">ou réagir avec 🎫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="border-b border-white/[0.08] pb-3">
                      <div className="text-white/40 text-xs mb-2">De: client@example.com</div>
                      <div className="text-white font-medium">Problème urgent de paiement</div>
                    </div>
                    <div className="text-white/70 text-sm">
                      Bonjour, nous rencontrons un problème avec le module de paiement...
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <FiArrowRight className="w-4 h-4 text-[#8B5CF6]" />
                      <span className="text-[#8B5CF6] text-sm">Transféré vers support@ulytech.tn</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Comment les équipes utilisent notre service</h2>
            <p className="text-white/50 text-sm md:text-base">Support, maintenance, consultation et correction de bugs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" 
                     style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.3), rgba(139, 92, 246, 0.3))' }}
                />
                <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 hover:border-[#5E30B5]/30 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 opacity-80`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-white/50 text-sm">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Fonctionnalités puissantes</h2>
            <p className="text-white/50 text-sm md:text-base">Tout ce dont vous avez besoin pour gérer vos demandes</p>
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                     style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                  <feature.icon className="w-6 h-6" style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] p-8 md:p-12 text-center"
            style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.1), rgba(139, 92, 246, 0.1))' }}
          >
            <FiCheckCircle className="w-12 h-12 mx-auto mb-6" style={{ color: '#8B5CF6' }} />
            <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
              "Nous économisons près de 30 000€ par an depuis que nous utilisons ce service"
            </blockquote>
            <div className="text-white/50">
              <div className="font-medium text-white">Équipe Technique</div>
              <div className="text-sm">Entreprise Cliente</div>
            </div>
          </motion.div>
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
                Prêt à transformer vos demandes ?
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Notre équipe est prête à faire passer votre projet au niveau supérieur
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 text-white rounded-lg font-medium transition-all"
                  style={{ background: 'linear-gradient(to right, #5E30B5, #8B5CF6)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.5)' }}
                >
                  Commencer maintenant
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
