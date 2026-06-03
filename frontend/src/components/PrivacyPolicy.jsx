import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { FiShield, FiLock, FiEye, FiDatabase, FiUsers, FiCheckCircle } from 'react-icons/fi';

export default function PrivacyPolicy() {
  const principles = [
    {
      icon: FiShield,
      title: 'Protection des Données',
      description: 'Vos données sont cryptées et sécurisées'
    },
    {
      icon: FiLock,
      title: 'Confidentialité',
      description: 'Nous ne vendons jamais vos informations'
    },
    {
      icon: FiEye,
      title: 'Transparence',
      description: 'Vous contrôlez vos données personnelles'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
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
              <FiShield className="w-4 h-4" style={{ color: '#8B5CF6' }} />
              <span className="text-xs md:text-sm font-medium" style={{ color: '#8B5CF6' }}>Votre vie privée est importante</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Politique de<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #5E30B5, #8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                Confidentialité
              </span>
            </h1>
            
            <p className="text-white/50 text-sm max-w-2xl mx-auto">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Principles Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#5E30B5]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                     style={{ background: 'linear-gradient(135deg, rgba(94, 48, 181, 0.2), rgba(139, 92, 246, 0.2))' }}>
                  <principle.icon className="w-6 h-6" style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                <p className="text-white/50 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Chez Ulytech, nous prenons la protection de vos données personnelles très au sérieux. Cette politique 
                  de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations 
                  lorsque vous utilisez nos services.
                </p>
                <p className="text-white/70 leading-relaxed">
                  En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. Données Collectées</h2>
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Informations que vous nous fournissez</h3>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 mb-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} />
                      <span className="text-white/70">Informations de compte (nom, email, mot de passe)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} />
                      <span className="text-white/70">Informations de profil et préférences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} />
                      <span className="text-white/70">Données de paiement et facturation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} />
                      <span className="text-white/70">Communications avec notre support</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">2.2 Données collectées automatiquement</h3>
                <p className="text-white/70 leading-relaxed">
                  Nous collectons automatiquement certaines informations techniques telles que votre adresse IP, 
                  type de navigateur, système d exploitation, pages visitées et durée de visite.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Utilisation des Données</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Nous utilisons vos données pour :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <FiDatabase className="w-6 h-6 mb-2" style={{ color: '#8B5CF6' }} />
                    <h4 className="text-white font-medium mb-2">Fourniture de Services</h4>
                    <p className="text-white/60 text-sm">Créer et gérer votre compte, traiter vos transactions</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <FiUsers className="w-6 h-6 mb-2" style={{ color: '#8B5CF6' }} />
                    <h4 className="text-white font-medium mb-2">Communication</h4>
                    <p className="text-white/60 text-sm">Vous envoyer des notifications et mises à jour importantes</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <FiShield className="w-6 h-6 mb-2" style={{ color: '#8B5CF6' }} />
                    <h4 className="text-white font-medium mb-2">Sécurité</h4>
                    <p className="text-white/60 text-sm">Détecter et prévenir les fraudes et abus</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <FiCheckCircle className="w-6 h-6 mb-2" style={{ color: '#8B5CF6' }} />
                    <h4 className="text-white font-medium mb-2">Amélioration</h4>
                    <p className="text-white/60 text-sm">Analyser et améliorer nos services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Partage des Données</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span>Avec votre consentement explicite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span>Avec nos prestataires de services de confiance (hébergement, paiement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span>Pour se conformer aux obligations légales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span>Pour protéger nos droits et notre sécurité</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Sécurité des Données</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
                  vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
                <div className="bg-gradient-to-br from-[#5E30B5]/10 to-[#8B5CF6]/10 border border-[#5E30B5]/30 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-3">Nos mesures de sécurité incluent :</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>✓ Cryptage SSL/TLS pour toutes les transmissions de données</li>
                    <li>✓ Authentification à deux facteurs (2FA)</li>
                    <li>✓ Surveillance continue de la sécurité</li>
                    <li>✓ Audits de sécurité réguliers</li>
                    <li>✓ Accès restreint aux données personnelles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Vos Droits</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Conformément au RGPD et aux lois tunisiennes, vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <h4 className="text-white font-medium mb-2">Droit d accès</h4>
                    <p className="text-white/60 text-sm">Accéder à vos données personnelles</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <h4 className="text-white font-medium mb-2">Droit de rectification</h4>
                    <p className="text-white/60 text-sm">Corriger vos données inexactes</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <h4 className="text-white font-medium mb-2">Droit à l effacement</h4>
                    <p className="text-white/60 text-sm">Supprimer vos données personnelles</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <h4 className="text-white font-medium mb-2">Droit à la portabilité</h4>
                    <p className="text-white/60 text-sm">Recevoir vos données dans un format structuré</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">7. Cookies</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Nous utilisons des cookies et technologies similaires pour améliorer votre expérience. Vous pouvez 
                  gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">8. Conservation des Données</h2>
                <p className="text-white/70 leading-relaxed">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services 
                  et respecter nos obligations légales. Lorsque vos données ne sont plus nécessaires, nous les supprimons 
                  ou les anonymisons de manière sécurisée.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">9. Modifications</h2>
                <p className="text-white/70 leading-relaxed">
                  Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Nous vous informerons 
                  de tout changement important par email ou via une notification sur notre site.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5E30B5] to-[#8B5CF6] rounded-full" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">10. Nous Contacter</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                  nhésitez pas à nous contacter :
                </p>
                <div className="bg-gradient-to-br from-[#5E30B5]/10 to-[#8B5CF6]/10 border border-[#5E30B5]/30 rounded-2xl p-8">
                  <h3 className="text-white font-bold text-xl mb-4">Ulytech</h3>
                  <div className="space-y-3 text-white/70">
                    <p className="flex items-center gap-3">
                      <span className="text-[#8B5CF6]">📧</span>
                      <span>Email : kaissafouene@ulytech.tn</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-[#8B5CF6]">📞</span>
                      <span>Téléphone : +216 99 613 615</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-[#8B5CF6]">📍</span>
                      <span>Adresse : Tunisie</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
