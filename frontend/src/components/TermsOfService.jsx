import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conditions de Utilisation
            </h1>
            <p className="text-white/50 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptation des Conditions</h2>
                <p className="leading-relaxed mb-4">
                  En accédant et en utilisant les services de Ulytech, vous acceptez de être lié par ces conditions de utilisation. 
                  Si vous ne acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description des Services</h2>
                <p className="leading-relaxed mb-4">
                  Ulytech fournit des solutions technologiques innovantes incluant :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Développement de applications web et mobile</li>
                  <li>Solutions de intelligence artificielle</li>
                  <li>Services de rapprochement bancaire automatisé</li>
                  <li>Gestion de projets et support technique</li>
                  <li>Intégrations avec des outils tiers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Compte Utilisateur</h2>
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Création de Compte</h3>
                <p className="leading-relaxed mb-4">
                  Pour accéder à certains services, vous devez créer un compte. Vous êtes responsable de maintenir 
                  la confidentialité de vos identifiants de connexion.
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">3.2 Responsabilités</h3>
                <p className="leading-relaxed mb-4">
                  Vous êtes responsable de toutes les activités effectuées sous votre compte et devez nous informer 
                  immédiatement de toute utilisation non autorisée.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Utilisation Acceptable</h2>
                <p className="leading-relaxed mb-4">
                  Vous acceptez de ne pas :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Utiliser nos services à des fins illégales ou non autorisées</li>
                  <li>Tenter de accéder de manière non autorisée à nos systèmes</li>
                  <li>Interférer avec le fonctionnement normal de nos services</li>
                  <li>Transmettre des virus ou codes malveillants</li>
                  <li>Violer les droits de propriété intellectuelle</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Propriété Intellectuelle</h2>
                <p className="leading-relaxed mb-4">
                  Tous les contenus, marques, logos et propriétés intellectuelles présents sur nos services sont 
                  la propriété de Ulytech ou de ses concédants de licence. Toute utilisation non autorisée est strictement interdite.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Tarification et Paiement</h2>
                <h3 className="text-xl font-semibold text-white mb-3">6.1 Frais</h3>
                <p className="leading-relaxed mb-4">
                  Certains services peuvent être soumis à des frais. Les prix sont indiqués en euros (€) et sont 
                  susceptibles de modification avec préavis.
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">6.2 Facturation</h3>
                <p className="leading-relaxed mb-4">
                  Les paiements sont traités de manière sécurisée. En cas de non-paiement, nous nous réservons 
                  le droit de suspendre ou résilier votre accès aux services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation de Responsabilité</h2>
                <p className="leading-relaxed mb-4">
                  Ulytech ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs 
                  résultant de le utilisation ou de le impossibilité de utiliser nos services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Garanties</h2>
                <p className="leading-relaxed mb-4">
                  Nos services sont fournis "en le état" sans garantie de aucune sorte. Nous ne garantissons pas 
                  que nos services seront ininterrompus, sécurisés ou exempts de erreurs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Résiliation</h2>
                <p className="leading-relaxed mb-4">
                  Nous nous réservons le droit de suspendre ou résilier votre accès à nos services à tout moment, 
                  avec ou sans préavis, en cas de violation de ces conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Modifications des Conditions</h2>
                <p className="leading-relaxed mb-4">
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
                  entreront en vigueur dès leur publication sur notre site web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Droit Applicable</h2>
                <p className="leading-relaxed mb-4">
                  Ces conditions sont régies par les lois tunisiennes. Tout litige sera soumis à la juridiction 
                  exclusive des tribunaux de Tunisie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact</h2>
                <p className="leading-relaxed mb-4">
                  Pour toute question concernant ces conditions de utilisation, veuillez nous contacter à :
                </p>
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 mt-4">
                  <p className="text-white font-medium mb-2">Ulytech</p>
                  <p className="text-white/60 text-sm">Email : kaissafouene@ulytech.tn</p>
                  <p className="text-white/60 text-sm">Téléphone : +216 99 613 615</p>
                  <p className="text-white/60 text-sm">Adresse : Tunisie</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
