import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiCode, FiCpu, FiZap, FiTrendingUp, FiLayers, FiDatabase,
  FiCloud, FiShield, FiActivity, FiBarChart2,
  FiUsers, FiCheckCircle, FiArrowRight
} from 'react-icons/fi';
import { 
  SiReact, SiNodedotjs, SiPython, SiTensorflow, SiAmazonaws, SiDocker,
  SiPostgresql, SiMongodb, SiGraphql, SiTypescript, SiNextdotjs, SiFastapi,
  SiVuedotjs, SiAngular, SiDjango, SiFlask, SiKubernetes, SiRedis,
  SiElasticsearch, SiFirebase, SiSupabase, SiTailwindcss, SiGit, SiGithub
} from 'react-icons/si';

export default function BuildPage() {
  const [activeTab, setActiveTab] = useState('web');

  const solutions = [
    {
      id: 'web',
      icon: FiCode,
      title: 'Développement Web',
      subtitle: 'Applications modernes et performantes',
      features: [
        { icon: FiLayers, text: 'Architecture scalable' },
        { icon: FiZap, text: 'Performance optimisée' },
        { icon: FiShield, text: 'Sécurité renforcée' },
        { icon: FiCloud, text: 'Déploiement cloud' }
      ]
    },
    {
      id: 'ai',
      icon: FiCpu,
      title: 'Intelligence Artificielle',
      subtitle: 'Solutions IA sur mesure',
      features: [
        { icon: FiActivity, text: 'Machine Learning' },
        { icon: FiBarChart2, text: 'Analyse prédictive' },
        { icon: FiDatabase, text: 'Big Data' },
        { icon: FiDatabase, text: 'Automatisation' }
      ]
    }
  ];

  const stats = [
    { value: '98%', label: 'Satisfaction client', icon: FiCheckCircle },
    { value: '150+', label: 'Projets livrés', icon: FiTrendingUp },
    { value: '24/7', label: 'Support technique', icon: FiUsers },
    { value: '5x', label: 'ROI moyen', icon: FiBarChart2 }
  ];

  const technologiesRow1 = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
  ];

  const technologiesRow2 = [
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }
  ];

  const technologiesRow3 = [
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    { name: 'Flask', icon: SiFlask, color: '#FFFFFF' }
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
            <p className="text-xs md:text-sm text-white/40 mb-3 md:mb-4 tracking-wider uppercase">ulytech Solutions</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 md:mb-6 tracking-tight leading-tight">
              Construisez le avenir avec<br /><span className="text-purple-400">nos solutions digitales</span>
            </h1>
            <p className="text-sm md:text-lg text-white/50 max-w-3xl mx-auto px-4">
              Développement web moderne et intelligence artificielle<br className="hidden sm:block" />pour transformer votre entreprise
            </p>
          </motion.div>

          {/* Animated Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm rounded-2xl border border-white/[0.08] p-4 md:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <FiActivity className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm md:text-base">Tableau de bord</h3>
                    <p className="text-white/40 text-xs">Gestion en temps réel</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-white/60">En ligne</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 md:p-4 hover:bg-white/[0.05] transition-all cursor-pointer"
                  >
                    <stat.icon className="w-5 h-5 text-purple-400 mb-2" />
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Visualization - Line Chart */}
              <div className="bg-black/20 rounded-xl p-4 md:p-6 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white/70 text-sm">Performance mensuelle</h4>
                  <FiTrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="relative h-32 md:h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    
                    {/* Gradient fill under line */}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#e879f9" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    
                    {/* Area under the line */}
                    <motion.path
                      d="M 0 35 L 9 22 L 18 15 L 27 28 L 36 10 L 45 12 L 54 5 L 63 8 L 72 2 L 81 6 L 90 3 L 100 0 L 100 100 L 0 100 Z"
                      fill="url(#lineGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                    
                    {/* Animated line */}
                    <motion.path
                      d="M 0 35 L 9 22 L 18 15 L 27 28 L 36 10 L 45 12 L 54 5 L 63 8 L 72 2 L 81 6 L 90 3 L 100 0"
                      stroke="url(#lineStroke)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Gradient for line stroke */}
                    <defs>
                      <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#e879f9" />
                      </linearGradient>
                    </defs>
                    
                    {/* Animated dots on data points */}
                    {[0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 100].map((x, i) => {
                      const yValues = [35, 22, 15, 28, 10, 12, 5, 8, 2, 6, 3, 0];
                      return (
                        <motion.circle
                          key={i}
                          cx={x}
                          cy={yValues[i]}
                          r="1.5"
                          fill="#e879f9"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + (i * 0.15), duration: 0.3 }}
                          className="cursor-pointer"
                          whileHover={{ scale: 2 }}
                        />
                      );
                    })}
                  </svg>
                </div>
                <div className="flex justify-between mt-2 text-xs text-white/30">
                  <span>Jan</span>
                  <span>Déc</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {solutions.map((solution) => (
              <motion.button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl border transition-all ${
                  activeTab === solution.id
                    ? 'bg-purple-500/20 border-purple-500/50 text-white'
                    : 'bg-white/[0.02] border-white/[0.08] text-white/60 hover:text-white'
                }`}
              >
                <solution.icon className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">{solution.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          {solutions.map((solution) => (
            activeTab === solution.id && (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/[0.08]">
                      <solution.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-4xl font-bold text-white">{solution.title}</h2>
                      <p className="text-white/60 text-sm md:text-base">{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-white/50 mb-8 leading-relaxed text-sm md:text-base">
                    Nous créons des solutions sur mesure qui allient performance, sécurité et innovation. 
                    Notre expertise technique garantit des résultats exceptionnels pour votre entreprise.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] transition-all"
                      >
                        <feature.icon className="w-5 h-5 text-purple-400" />
                        <span className="text-white/70 text-sm">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Code/AI Mockup */}
                <div className="relative">
                  <div className="bg-[#1e1e1e] rounded-xl border border-white/[0.08] overflow-hidden">
                    <div className="bg-[#323233] px-4 py-2 flex items-center gap-2 border-b border-white/[0.08]">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                      </div>
                      <span className="text-xs text-white/50 ml-2">
                        {solution.id === 'web' ? 'app.jsx' : 'model.py'}
                      </span>
                    </div>
                    <div className="p-4 font-mono text-xs md:text-sm space-y-2">
                      {solution.id === 'web' ? (
                        <>
                          <div><span className="text-purple-400">import</span> <span className="text-white/70">React</span> <span className="text-purple-400">from</span> <span className="text-orange-300">react</span>;</div>
                          <div><span className="text-purple-400">import</span> <span className="text-white/70">{'{ '}</span><span className="text-blue-300">useState</span><span className="text-white/70">{' }'}</span> <span className="text-purple-400">from</span> <span className="text-orange-300">react</span>;</div>
                          <div className="text-white/30"></div>
                          <div><span className="text-purple-400">const</span> <span className="text-blue-300">Dashboard</span> <span className="text-white/70">= () =&gt; {'{'}</span></div>
                          <div className="pl-4"><span className="text-purple-400">const</span> [<span className="text-blue-300">data</span>, <span className="text-blue-300">setData</span>] = <span className="text-blue-300">useState</span>([]);</div>
                          <div className="pl-4 text-white/30"></div>
                          <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-white/50">{'<'}</span><span className="text-green-400">div</span><span className="text-white/50">{'>'}</span>...</div>
                          <div><span className="text-white/70">{'}'}</span>;</div>
                        </>
                      ) : (
                        <>
                          <div><span className="text-purple-400">import</span> <span className="text-white/70">tensorflow</span> <span className="text-purple-400">as</span> <span className="text-white/70">tf</span></div>
                          <div><span className="text-purple-400">from</span> <span className="text-white/70">sklearn.model_selection</span> <span className="text-purple-400">import</span> <span className="text-white/70">train_test_split</span></div>
                          <div className="text-white/30"></div>
                          <div><span className="text-purple-400">class</span> <span className="text-blue-300">AIModel</span>:</div>
                          <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(<span className="text-orange-300">self</span>):</div>
                          <div className="pl-8"><span className="text-orange-300">self</span>.model = tf.keras.Sequential()</div>
                          <div className="pl-4 text-white/30"></div>
                          <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">train</span>(<span className="text-orange-300">self</span>, data):</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Technologies Slider */}
      <section className="py-12 md:py-20 px-4 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Technologies de pointe</h2>
            <p className="text-white/50 text-sm md:text-base">Stack technique moderne et performant</p>
          </motion.div>

          <div className="space-y-6">
            {/* Row 1 - Scroll Right */}
            <div className="relative">
              <div className="flex gap-6 animate-scroll-right">
                {[...technologiesRow1, ...technologiesRow1].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/[0.08] rounded-xl hover:border-purple-500/30 transition-all cursor-pointer group"
                  >
                    <tech.icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                    <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Scroll Left */}
            <div className="relative">
              <div className="flex gap-6 animate-scroll-left">
                {[...technologiesRow2, ...technologiesRow2].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/[0.08] rounded-xl hover:border-purple-500/30 transition-all cursor-pointer group"
                  >
                    <tech.icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                    <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 - Scroll Right */}
            <div className="relative">
              <div className="flex gap-6 animate-scroll-right-slow">
                {[...technologiesRow3, ...technologiesRow3].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/[0.08] rounded-xl hover:border-purple-500/30 transition-all cursor-pointer group"
                  >
                    <tech.icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                    <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS animations */}
        <style jsx>{`
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-left {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right-slow {
            animation: scroll-right 40s linear infinite;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Discutons de votre projet et créons ensemble la solution idéale
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-darkBg rounded-lg font-medium hover:bg-white/90 transition-all"
                >
                  Démarrer un projet
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
