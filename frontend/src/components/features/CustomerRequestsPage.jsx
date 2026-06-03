import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiShield, FiShoppingCart, FiCpu, FiBookOpen, FiGithub, 
  FiExternalLink, FiLayers, FiTrendingUp, FiZap, FiAward
} from 'react-icons/fi';

export default function CustomerRequestsPage() {

  const projects = [
    {
      id: 1,
      title: 'ARS Dashboard AI',
      category: 'Intelligence Artificielle',
      description: 'Tableau de bord intelligent pour le suivi complet des opérations d\'assurance avec analyse prédictive et automatisation',
      icon: FiShield,
      color: 'from-blue-500 to-cyan-500',
      tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      features: ['Analyse prédictive', 'Automatisation', 'Rapports en temps réel'],
      mockup: {
        type: 'dashboard',
        stats: [{ label: 'Dossiers', value: '2.4K' }, { label: 'Précision', value: '98%' }]
      }
    },
    {
      id: 2,
      title: 'AutoMarket Pro',
      category: 'E-commerce',
      description: 'Plateforme e-commerce complète pour la vente de véhicules avec système de recherche avancé et gestion des stocks',
      icon: FiShoppingCart,
      color: 'from-purple-500 to-pink-500',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Recherche avancée', 'Paiement sécurisé', 'Gestion stocks'],
      mockup: {
        type: 'ecommerce',
        products: 3
      }
    },
    {
      id: 3,
      title: 'Fashion Store Elite',
      category: 'E-commerce',
      description: 'Boutique en ligne haut de gamme avec expérience utilisateur immersive et système de recommandation',
      icon: FiShoppingCart,
      color: 'from-pink-500 to-rose-500',
      tags: ['React', 'Firebase', 'Tailwind', 'Algolia'],
      features: ['UI/UX Premium', 'Recommandations', 'Panier intelligent'],
      mockup: {
        type: 'fashion',
        items: 4
      }
    },
    {
      id: 4,
      title: 'CropVision AI',
      category: 'Intelligence Artificielle',
      description: 'Réseau de neurones pour la détection et classification des cultures avec précision de 96%',
      icon: FiCpu,
      color: 'from-green-500 to-emerald-500',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      features: ['Détection temps réel', 'Classification', 'API REST'],
      mockup: {
        type: 'ai',
        accuracy: 96
      }
    },
    {
      id: 5,
      title: 'EduPlatform AI',
      category: 'EdTech',
      description: 'Plateforme d\'apprentissage avec IA, chat Discord intégré, quiz interactifs et gestion de cours',
      icon: FiBookOpen,
      color: 'from-indigo-500 to-purple-500',
      tags: ['React', 'Node.js', 'Discord.js', 'OpenAI'],
      features: ['Chat Discord', 'Quiz IA', 'Cours interactifs'],
      mockup: {
        type: 'education',
        courses: 12
      }
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
            <p className="text-xs md:text-sm text-white/40 mb-3 md:mb-4 tracking-wider uppercase">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 md:mb-6 tracking-tight leading-tight">
              Nos réalisations<br /><span className="text-purple-400">qui font la différence</span>
            </h1>
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4">
              Découvrez nos projets innovants alliant<br className="hidden sm:block" />technologie de pointe et excellence
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { icon: FiAward, value: '5+', label: 'Projets livrés' },
              { icon: FiTrendingUp, value: '100%', label: 'Satisfaction' },
              { icon: FiZap, value: '24/7', label: 'Support' },
              { icon: FiLayers, value: '15+', label: 'Technologies' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 text-center hover:bg-white/[0.05] transition-all"
              >
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}

                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all">
                  {/* Project Mockup */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.color} p-6 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                    
                    {/* Mockup Content */}
                    <div className="relative z-10 h-full">
                      {project.mockup.type === 'dashboard' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                              <project.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-white font-medium text-sm">Dashboard</div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {project.mockup.stats.map((stat, i) => (
                              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-white/70">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2">
                            {[80, 65, 90].map((width, i) => (
                              <div key={i} className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-white/40"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${width}%` }}
                                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(project.mockup.type === 'ecommerce' || project.mockup.type === 'fashion') && (
                        <div className="grid grid-cols-2 gap-3">
                          {[...Array(project.mockup.products || project.mockup.items)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                            >
                              <div className="w-full h-16 bg-white/20 rounded mb-2"></div>
                              <div className="h-2 bg-white/20 rounded w-3/4 mb-1"></div>
                              <div className="h-2 bg-white/20 rounded w-1/2"></div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {project.mockup.type === 'ai' && (
                        <div className="flex flex-col items-center justify-center h-full">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white/80 mb-4"
                          />
                          <div className="text-4xl font-bold text-white mb-2">{project.mockup.accuracy}%</div>
                          <div className="text-sm text-white/70">Précision du modèle</div>
                        </div>
                      )}

                      {project.mockup.type === 'education' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                              <project.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-white font-medium text-sm">Plateforme</div>
                          </div>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex items-center gap-3"
                            >
                              <div className="w-10 h-10 bg-white/20 rounded"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-white/20 rounded w-3/4 mb-2"></div>
                                <div className="h-2 bg-white/20 rounded w-1/2"></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <project.icon className="w-5 h-5 text-purple-400" />
                          <span className="text-xs text-purple-400 font-medium">{project.category}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      </div>
                    </div>

                    <p className="text-white/50 text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/[0.05] border border-white/[0.08] rounded text-white/60">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white/70 hover:text-white hover:border-purple-500/30 transition-all text-sm"
                      >
                        <FiGithub className="w-4 h-4" />
                        GitHub
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all text-sm"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Démo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
