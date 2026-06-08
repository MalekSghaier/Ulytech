import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useTracker() {
  const location = useLocation();

  useEffect(() => {
    // Vérifier si la session a déjà été enregistrée aujourd'hui
    const today = new Date().toDateString();
    const lastTracked = sessionStorage.getItem('uly_tracked_date');

    // Si déjà tracké aujourd'hui dans cette session → ne rien faire
    if (lastTracked === today) return;

    // Sinon enregistrer et marquer
    fetch('http://localhost:5000/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: location.pathname }),
    })
      .then(() => {
        sessionStorage.setItem('uly_tracked_date', today);
      })
      .catch(() => {});
  }, []); 
}