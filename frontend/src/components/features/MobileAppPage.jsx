import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  FiSmartphone, FiZap, FiBell, FiInbox, FiMessageSquare, FiCheck,
  FiCamera, FiClock, FiDownload, FiArrowRight,
  FiLayers, FiMoon
} from 'react-icons/fi';
import { SiAndroid, SiApple } from 'react-icons/si';

export default function MobileAppPage() {
  const features = [
    {
      icon: FiInbox,
      title: 'Boîte de réception intelligente',
      description: 'Restez informé des tâches prioritaires qui nécessitent votre attention'
    },
    {
      icon: FiZap,
      title: 'Création ultra-rapide',
      description: 'Créez des tickets en quelques secondes avec notre interface optimisée'
    },
    {
      icon: FiCamera,
      title: 'Screenshots instantanés',
      description: 'Partagez des captures d\'écran pour créer des tickets ou rapports de bugs'
    },
    {
      icon: FiMessageSquare,
      title: 'Discussions en temps réel',
      description: 'Commentez et mettez à jour les détails pour débloquer votre équipe'
    },
    {
      icon: FiBell,
      title: 'Notifications intelligentes',
      description: 'Recevez des alertes en temps réel sur les mises à jour importantes'
    },
    {
      icon: FiClock,
      title: 'Mode Ne pas déranger',
      description: 'Configurez votre planning de notifications selon vos horaires'
    }
  ];



  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Image and Content */}
      <section className="pt-20 md:pt-24 pb-0 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />
        </div>
        
        {/* Hero Content - Left Side with Higher Z-Index */}
        <div className="max-w-7xl mx-auto px-4 relative z-20 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5E30B5]/20 to-[#8B5CF6]/20 border border-[#5E30B5]/30 rounded-full mb-6"
            >
              <FiSmartphone className="w-4 h-4" style={{ color: '#8B5CF6' }} />
              <span className="text-xs md:text-sm font-medium" style={{ color: '#8B5CF6' }}>En cours de développement</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Découvrez l'application<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #5E30B5, #8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                mobile Ulytech
              </span>
            </h1>
            
            <p className="text-sm md:text-lg text-white/50 mb-4">
              Le compagnon portable de notre système de gestion
            </p>
            
            <p className="text-xs md:text-sm text-white/40 mb-8">
              Des workflows complexes dans un format compact.<br />
              Bientôt disponible sur iOS et Android.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
              >
                <SiApple className="w-5 h-5" />
                App Store (Bientôt)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white/[0.05] border border-white/[0.08] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-all"
              >
                <SiAndroid className="w-5 h-5" />
                Google Play (Bientôt)
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Main Hero Image - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-0 left-0 w-full h-full z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkBg pointer-events-none" />
          <img 
            src="/app/ap1.jpg" 
            alt="Application mobile Ulytech" 
            className="w-full h-full object-cover object-center"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
            }}
          />
        </motion.div>
      </section>

      {/* Highlights - 2 Column Layout */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source src="/app/PixVerse_V5_Image_Text_360P_generate_an_image_--SR_coral_v2.0__640x288_h264.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Conçu pour les activités<br />"loin du clavier"
              </h2>
              <p className="text-white/50 text-sm md:text-base mb-8 leading-relaxed">
                L'application mobile Ulytech est spécialement conçue pour les workflows à la demande<br />
                qui complètent l'expérience desktop. Un assistant puissant, toujours disponible.
              </p>

              {/* Custom Card Layout */}
              <div className="space-y-4">
                {/* First Card - Rectangle (Full Width) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#5E30B5]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" 
                         style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                      <FiSmartphone className="w-6 h-6" style={{ color: '#8B5CF6' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Ultra-portable</h3>
                      <p className="text-white/50 text-sm">Interface redessinée pour être légère et performante</p>
                    </div>
                  </div>
                </motion.div>

                {/* Second and Third Cards - Cubes (Side by Side) */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#5E30B5]/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                         style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                      <FiLayers className="w-6 h-6" style={{ color: '#8B5CF6' }} />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">Natif 100%</h3>
                    <p className="text-white/50 text-xs">Développé en Swift et Kotlin pour une expérience fluide</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#5E30B5]/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                         style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                      <FiZap className="w-6 h-6" style={{ color: '#8B5CF6' }} />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">Toujours disponible</h3>
                    <p className="text-white/50 text-xs">Votre assistant puissant, toujours dans votre poche</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with Image */}
      <section className="py-12 md:py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Restez au top de vos flux de travail importants
              </h2>
              <p className="text-white/60 mb-8">
                La boîte de réception vous tient informé des tâches et projets prioritaires qui nécessitent votre attention. 
                Appuyez pour agir, glissez pour supprimer, reportez pour plus tard.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                    <FiCheck className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Réagissez à ce qui compte</h4>
                    <p className="text-white/50 text-sm">Discutez et mettez à jour les détails pour débloquer votre équipe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                    <FiClock className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Reportez le reste pour plus tard</h4>
                    <p className="text-white/50 text-sm">Retirez temporairement les notifications pour vous concentrer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <img src="/app/2pm.jpg" alt="Interface mobile" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - Creative Bento Layout */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Faites avancer votre travail. Peu importe où vous êtes.
            </h2>
            <p className="text-white/50 text-sm md:text-base">
              Écrivez quand l'inspiration frappe. Avec son design ergonomique et parfait pour la paume.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Feature 1 - Large Card (Spans 2 columns, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(94, 48, 181, 0.15), rgba(139, 92, 246, 0.05))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5E30B5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                     style={{ background: 'linear-gradient(135deg, #5E30B5, #8B5CF6)' }}>
                  <FiInbox className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{features[0].title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{features[0].description}</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full" 
                   style={{ background: 'radial-gradient(circle, rgba(94, 48, 181, 0.2), transparent)' }} />
            </motion.div>

            {/* Feature 2 - Medium Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm"
              style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(94, 48, 181, 0.05))' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" 
                   style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)' }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" 
                     style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                  <FiZap className="w-7 h-7" style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{features[1].title}</h3>
                <p className="text-white/50 text-sm">{features[1].description}</p>
              </div>
            </motion.div>

            {/* Feature 3 - Medium Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm"
              style={{ background: 'linear-gradient(135deg, rgba(94, 48, 181, 0.1), rgba(139, 92, 246, 0.05))' }}
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl" 
                   style={{ background: 'radial-gradient(circle, rgba(94, 48, 181, 0.3), transparent)' }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" 
                     style={{ background: 'rgba(94, 48, 181, 0.2)' }}>
                  <FiCamera className="w-7 h-7" style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{features[2].title}</h3>
                <p className="text-white/50 text-sm">{features[2].description}</p>
              </div>
            </motion.div>

            {/* Feature 4 - Wide Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 group relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm"
              style={{ background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(94, 48, 181, 0.05))' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" 
                     style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                  <FiMessageSquare className="w-7 h-7" style={{ color: '#8B5CF6' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{features[3].title}</h3>
                  <p className="text-white/50 text-sm">{features[3].description}</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl" 
                   style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)' }} />
            </motion.div>

            {/* Feature 5 - Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-3 md:row-span-1 group relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm"
              style={{ background: 'linear-gradient(135deg, rgba(94, 48, 181, 0.15), rgba(139, 92, 246, 0.05))' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" 
                     style={{ background: 'rgba(94, 48, 181, 0.2)' }}>
                  <FiBell className="w-7 h-7" style={{ color: '#8B5CF6' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{features[4].title}</h3>
                  <p className="text-white/50 text-sm">{features[4].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Feature 6 - Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-3 md:row-span-1 group relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm"
              style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(94, 48, 181, 0.05))' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" 
                     style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                  <FiClock className="w-7 h-7" style={{ color: '#8B5CF6' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{features[5].title}</h3>
                  <p className="text-white/50 text-sm">{features[5].description}</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl" 
                   style={{ background: 'radial-gradient(circle, rgba(94, 48, 181, 0.2), transparent)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notifications Section - Professional Layout with QR Code */}
      <section className="py-12 md:py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Disponible 24/7. Ou juste 9h-17h.
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-3xl mx-auto">
              Recevez des notifications push sur les mises à jour importantes en temps réel (mais pas tout le temps).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Notification Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm group"
              style={{ background: 'linear-gradient(135deg, rgba(94, 48, 181, 0.15), rgba(139, 92, 246, 0.05))' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" 
                   style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                     style={{ background: 'linear-gradient(135deg, #5E30B5, #8B5CF6)' }}>
                  <FiBell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Notifications en temps réel</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Restez à jour sur les flux de travail importants et agissez instantanément où et quand nécessaire.
                </p>
              </div>
            </motion.div>

            {/* Notification Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm group"
              style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(94, 48, 181, 0.05))' }}
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl" 
                   style={{ background: 'radial-gradient(circle, rgba(94, 48, 181, 0.3), transparent)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                     style={{ background: 'linear-gradient(135deg, #8B5CF6, #5E30B5)' }}>
                  <FiMoon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planning de notifications</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Configurez votre propre planning pour rester en contact avec votre travail uniquement pendant certaines périodes.
                </p>
              </div>
            </motion.div>

            {/* QR Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm group flex flex-col items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(94, 48, 181, 0.1), rgba(139, 92, 246, 0.1))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5E30B5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 text-center">
                <p className="text-white/60 text-sm mb-4">Scannez pour<br />télécharger</p>
                
                {/* Real QR Code with Logo */}
                <div className="relative inline-block p-4 bg-white rounded-2xl shadow-2xl">
                  <div className="relative w-40 h-40">
                    {/* QR Code - Replace with your actual URL */}
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://ulytech.tn" 
                      alt="QR Code" 
                      className="w-full h-full"
                    />
                    
                    {/* Logo in Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg p-1 shadow-lg">
                      <img 
                        src="/logoulytech.png" 
                        alt="Ulytech Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                <p className="text-white/40 text-xs mt-4">iOS & Android</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Prêt où que vous soyez
            </h2>
            <p className="text-white/50 text-sm md:text-base mb-8">
              Bientôt disponible sur vos plateformes préférées
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" 
                   style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.3), rgba(139, 92, 246, 0.3))' }}
              />
              <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 hover:border-[#5E30B5]/30 transition-all text-center">
                <SiApple className="w-16 h-16 mx-auto mb-4" style={{ color: '#8B5CF6' }} />
                <h3 className="text-2xl font-bold text-white mb-2">iOS</h3>
                <p className="text-white/50 mb-6">Développé en Swift natif</p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.08] text-white/50 rounded-lg font-medium">
                  <FiDownload className="w-4 h-4" />
                  Bientôt sur App Store
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" 
                   style={{ background: 'linear-gradient(to bottom right, rgba(94, 48, 181, 0.3), rgba(139, 92, 246, 0.3))' }}
              />
              <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 hover:border-[#5E30B5]/30 transition-all text-center">
                <SiAndroid className="w-16 h-16 mx-auto mb-4" style={{ color: '#8B5CF6' }} />
                <h3 className="text-2xl font-bold text-white mb-2">Android</h3>
                <p className="text-white/50 mb-6">Développé en Kotlin natif</p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.08] text-white/50 rounded-lg font-medium">
                  <FiDownload className="w-4 h-4" />
                  Bientôt sur Google Play
                </div>
              </div>
            </motion.div>
          </div>
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
              <FiSmartphone className="w-12 h-12 mx-auto mb-6" style={{ color: '#8B5CF6' }} />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Soyez notifié du lancement
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base">
                Inscrivez-vous pour être parmi les premiers à découvrir l'application mobile Ulytech
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 text-white rounded-lg font-medium transition-all"
                  style={{ background: 'linear-gradient(to right, #5E30B5, #8B5CF6)', boxShadow: '0 10px 40px rgba(94, 48, 181, 0.5)' }}
                >
                  M'inscrire à la liste d'attente
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
