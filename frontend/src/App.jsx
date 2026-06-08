import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import CTA from './components/CTA';
import AISection from './components/AISection';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import CookieConsent from './components/CookieConsent';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Background from './components/Background';
import useTracker from './hooks/useTracker';

import './styles/index.css';

// Lazy load pages
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const PlanPage = lazy(() => import('./components/features/PlanPage'));
const BuildPage = lazy(() => import('./components/features/BuildPage'));
const CustomerRequestsPage = lazy(() => import('./components/features/CustomerRequestsPage'));
const IntegrationsPage = lazy(() => import('./components/features/IntegrationsPage'));
const InsightsPage = lazy(() => import('./components/features/InsightsPage'));
const MobileAppPage = lazy(() => import('./components/features/MobileAppPage'));
const LinearAsksPage = lazy(() => import('./components/features/LinearAsksPage'));
const AIPage = lazy(() => import('./components/features/AIPage'));
const CybersecurityPage = lazy(() => import('./components/features/CybersecurityPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));


// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-darkBg">
    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AppContent() {
  useTracker();
  return null;
}

function App() {
  return (
    <Router>
      <AppContent />
      <Background /> 
      <CookieConsent />
      <Chatbot />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <div className="App">
              <Navbar />
              <Hero />
              <Partners />
              <Services />
              <CTA />
              <AISection />
              <Portfolio />
              <About />
              <Contact />
              <Footer />
              
            </div>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/features/plan" element={<PlanPage />} />
          <Route path="/features/build" element={<BuildPage />} />
          <Route path="/features/customer-requests" element={<CustomerRequestsPage />} />
          <Route path="/features/integrations" element={<IntegrationsPage />} />
          <Route path="/features/insights" element={<InsightsPage />} />
          <Route path="/features/mobile-app" element={<MobileAppPage />} />
          <Route path="/features/linear-asks" element={<LinearAsksPage />} />
          <Route path="/features/ai" element={<AIPage />} />
          <Route path="/features/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;