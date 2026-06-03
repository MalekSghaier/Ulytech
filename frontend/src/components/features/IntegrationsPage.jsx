import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiGithub, FiSlack, FiMail, FiCode, FiZap, FiCpu, FiMessageSquare,
  FiLayers, FiShield, FiTrendingUp, FiUsers, FiBox, FiGrid,
  FiArrowRight, FiGitlab, FiDatabase, FiSettings, FiClock,
  FiLock, FiFileText
} from 'react-icons/fi';
import { SiNotion, SiFigma, SiOpenai, SiGoogle, SiMicrosoft, SiTrello } from 'react-icons/si';

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('essentials');

  const categories = [
    { id: 'essentials', name: 'Essentiels', icon: FiLayers },
    { id: 'ai', name: 'IA & Agents', icon: FiCpu },
    { id: 'engineering', name: 'Engineering', icon: FiCode },
    { id: 'collaboration', name: 'Collaboration', icon: FiUsers },
    { id: 'automation', name: 'Automatisation', icon: FiZap },
    { id: 'security', name: 'Sécurité', icon: FiShield }
  ];

  const integrations = {
    essentials: [
      {
        name: 'GitHub',
        icon: FiGithub,
        description: 'Automatisez vos workflows de pull requests et commits',
        color: '#FFFFFF',
        by: 'GitHub'
      },
      {
        name: 'Slack',
        icon: FiSlack,
        description: 'Créez des tickets depuis Slack et synchronisez les threads',
        color: '#4A154B',
        by: 'Slack'
      },
      {
        name: 'GitLab',
        icon: FiGitlab,
        description: 'Automatisez votre workflow de Merge Request',
        color: '#FC6D26',
        by: 'GitLab'
      },
      {
        name: 'Figma',
        icon: SiFigma,
        description: 'Créez et liez des tickets directement depuis Figma',
        color: '#F24E1E',
        by: 'Figma'
      },
      {
        name: 'Notion',
        icon: SiNotion,
        description: 'Prévisualisations et synchronisation avec Notion',
        color: '#000000',
        by: 'Notion'
      },
      {
        name: 'Google Sheets',
        icon: SiGoogle,
        description: 'Créez des dashboards personnalisés depuis vos données',
        color: '#34A853',
        by: 'Google'
      }
    ],
    ai: [
      {
        name: 'ChatGPT',
        icon: SiOpenai,
        description: 'Connectez ChatGPT pour recherche approfondie et analyse',
        color: '#10A37F',
        by: 'OpenAI'
      },
      {
        name: 'Claude AI',
        icon: FiMessageSquare,
        description: 'Intégration avec Claude pour assistance IA avancée',
        color: '#D97757',
        by: 'Anthropic'
      },
      {
        name: 'Gemini',
        icon: SiGoogle,
        description: 'Utilisez Google Gemini pour analyse et génération',
        color: '#4285F4',
        by: 'Google'
      },
      {
        name: 'GitHub Copilot',
        icon: FiGithub,
        description: 'Transformez les tickets en code avec Copilot',
        color: '#FFFFFF',
        by: 'GitHub'
      },
      {
        name: 'Cursor',
        icon: FiCode,
        description: 'Transformez les tickets en pull requests automatiquement',
        color: '#000000',
        by: 'Cursor'
      },
      {
        name: 'Microsoft Copilot',
        icon: SiMicrosoft,
        description: 'Assistant IA pour productivité et automatisation',
        color: '#00A4EF',
        by: 'Microsoft'
      }
    ],
    engineering: [
      {
        name: 'GitHub',
        icon: FiGithub,
        description: 'Synchronisation complète avec vos repositories',
        color: '#FFFFFF',
        by: 'GitHub'
      },
      {
        name: 'GitLab',
        icon: FiGitlab,
        description: 'CI/CD et gestion de code intégrée',
        color: '#FC6D26',
        by: 'GitLab'
      },
      {
        name: 'VS Code',
        icon: FiCode,
        description: 'Extension pour gérer vos tickets depuis VS Code',
        color: '#007ACC',
        by: 'Microsoft'
      },
      {
        name: 'Docker',
        icon: FiBox,
        description: 'Gestion de conteneurs et déploiements',
        color: '#2496ED',
        by: 'Docker'
      },
      {
        name: 'Vercel',
        icon: FiZap,
        description: 'Déploiement automatique et preview',
        color: '#000000',
        by: 'Vercel'
      },
      {
        name: 'PostgreSQL',
        icon: FiDatabase,
        description: 'Gestion de base de données et migrations',
        color: '#336791',
        by: 'PostgreSQL'
      }
    ],
    collaboration: [
      {
        name: 'Slack',
        icon: FiSlack,
        description: 'Communication d\'équipe en temps réel',
        color: '#4A154B',
        by: 'Slack'
      },
      {
        name: 'Notion',
        icon: SiNotion,
        description: 'Documentation et wiki d\'équipe',
        color: '#000000',
        by: 'Notion'
      },
      {
        name: 'Figma',
        icon: SiFigma,
        description: 'Design collaboratif et prototypage',
        color: '#F24E1E',
        by: 'Figma'
      },
      {
        name: 'Trello',
        icon: SiTrello,
        description: 'Gestion de projets visuelle',
        color: '#0052CC',
        by: 'Trello'
      },
      {
        name: 'Microsoft Teams',
        icon: SiMicrosoft,
        description: 'Collaboration et visioconférence',
        color: '#6264A7',
        by: 'Microsoft'
      },
      {
        name: 'Google Meet',
        icon: SiGoogle,
        description: 'Réunions vidéo intégrées',
        color: '#00897B',
        by: 'Google'
      }
    ],
    automation: [
      {
        name: 'Zapier',
        icon: FiZap,
        description: 'Automatisations personnalisées sans code',
        color: '#FF4A00',
        by: 'Zapier'
      },
      {
        name: 'Email Integration',
        icon: FiMail,
        description: 'Créez des tickets par email automatiquement',
        color: '#5E30B5',
        by: 'Ulytech'
      },
      {
        name: 'GitHub Actions',
        icon: FiGithub,
        description: 'CI/CD et automatisation de workflows',
        color: '#FFFFFF',
        by: 'GitHub'
      },
      {
        name: 'Webhooks',
        icon: FiSettings,
        description: 'Intégrations personnalisées via webhooks',
        color: '#8B5CF6',
        by: 'Ulytech'
      },
      {
        name: 'API Access',
        icon: FiGrid,
        description: 'API REST complète pour intégrations custom',
        color: '#5E30B5',
        by: 'Ulytech'
      },
      {
        name: 'Cron Jobs',
        icon: FiClock,
        description: 'Tâches planifiées et automatisations',
        color: '#8B5CF6',
        by: 'Ulytech'
      }
    ],
    security: [
      {
        name: 'OAuth 2.0',
        icon: FiShield,
        description: 'Authentification sécurisée OAuth',
        color: '#5E30B5',
        by: 'Ulytech'
      },
      {
        name: 'SSO',
        icon: FiUsers,
        description: 'Single Sign-On pour entreprises',
        color: '#8B5CF6',
        by: 'Ulytech'
      },
      {
        name: 'Two-Factor Auth',
        icon: FiLock,
        description: 'Authentification à deux facteurs',
        color: '#5E30B5',
        by: 'Ulytech'
      },
      {
        name: 'Audit Logs',
        icon: FiFileText,
        description: 'Journaux d\'audit complets',
        color: '#8B5CF6',
        by: 'Ulytech'
      },
      {
        name: 'Data Encryption',
        icon: FiLock,
        description: 'Chiffrement de bout en bout',
        color: '#5E30B5',
        by: 'Ulytech'
      },
      {
        name: 'GDPR Compliance',
        icon: FiShield,
        description: 'Conformité RGPD complète',
        color: '#8B5CF6',
        by: 'Ulytech'
      }
    ]
  };

  const featuredIntegrations = [
    {
      name: 'GitHub',
      icon: FiGithub,
      description: 'Automatisez vos workflows de développement',
      color: '#FFFFFF',
      features: ['Sync automatique', 'PR tracking', 'Commit linking']
    },
    {
      name: 'ChatGPT',
      icon: SiOpenai,
      description: 'Assistant IA pour analyse et génération',
      color: '#10A37F',
      features: ['Analyse de code', 'Génération', 'Documentation']
    },
    {
      name: 'Slack',
      icon: FiSlack,
      description: 'Communication d\'équipe centralisée',
      color: '#4A154B',
      features: ['Notifications', 'Création tickets', 'Threads sync']
    },
    {
      name: 'Figma',
      icon: SiFigma,
      description: 'Design et prototypage collaboratif',
      color: '#F24E1E',
      features: ['Link designs', 'Commentaires', 'Versions']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5E30B5]/20 to-[#8B5CF6]/20 border border-[#5E30B5]/30 rounded-full mb-6"
            >
              <FiGrid className="w-4 h-4" style={{ color: '#8B5CF6' }} />
              <span className="text-xs md:text-sm font-medium" style={{ color: '#8B5CF6' }}>Intégrations</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Connectez vos outils<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #5E30B5, #8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                préférés
              </span>
            </h1>
            
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4">
              Intégrations puissantes avec les outils que vous utilisez déjà.<br className="hidden sm:block" />
              GitHub, ChatGPT, Slack, Figma, Claude AI, Gemini et plus encore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Intégrations essentielles</h2>
            <p className="text-white/50 text-sm">Les outils clés pour améliorer votre workflow</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" 
                     style={{ background: `${integration.color}20` }}
                />
                <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 hover:border-[#5E30B5]/30 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                       style={{ backgroundColor: `${integration.color}15` }}>
                    <integration.icon className="w-6 h-6" style={{ color: integration.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{integration.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {integration.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-white/[0.05] text-white/60 text-xs rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          {/* Category Selector */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  selectedCategory === category.id
                    ? 'text-white border-2'
                    : 'bg-white/[0.02] border border-white/[0.08] text-white/50 hover:text-white'
                }`}
                style={selectedCategory === category.id ? { 
                  background: 'linear-gradient(to right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))',
                  borderColor: '#5E30B5'
                } : {}}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Integrations Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {integrations[selectedCategory]?.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 hover:border-[#5E30B5]/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: `${integration.color}15` }}>
                    <integration.icon className="w-6 h-6" style={{ color: integration.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-base font-semibold text-white">{integration.name}</h3>
                    </div>
                    <p className="text-xs text-white/40 mb-2">Par {integration.by}</p>
                    <p className="text-white/60 text-sm">{integration.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '50+', label: 'Intégrations', icon: FiGrid },
              { value: '99.9%', label: 'Uptime', icon: FiTrendingUp },
              { value: '<100ms', label: 'Latence API', icon: FiZap },
              { value: '24/7', label: 'Support', icon: FiShield }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 text-center hover:border-[#5E30B5]/30 transition-all"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: '#8B5CF6' }} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              <FiGrid className="w-12 h-12 mx-auto mb-6" style={{ color: '#8B5CF6' }} />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Besoin d'une intégration personnalisée ?
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Notre API REST complète vous permet de créer n'importe quelle intégration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 md:px-8 py-3 text-white rounded-lg font-medium transition-all"
                    style={{ background: 'linear-gradient(to right, #5E30B5, #8B5CF6)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.5)' }}
                  >
                    Contactez-nous
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
                >
                  Documentation API
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
