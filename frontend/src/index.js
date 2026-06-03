import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupLazyLoading } from './utils/imageOptimizer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Setup lazy loading after initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLazyLoading);
} else {
  setupLazyLoading();
}

// Register service worker for caching
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  });
}