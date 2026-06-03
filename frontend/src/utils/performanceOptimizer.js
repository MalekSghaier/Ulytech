// Debounce utility for scroll/resize events
export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for frequent events
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Reduce motion for users who prefer it
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on device performance
export const getAnimationConfig = () => {
  const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                   navigator.deviceMemory <= 4;
  
  return {
    duration: isLowEnd ? 0.3 : 0.6,
    ease: isLowEnd ? 'linear' : 'easeInOut',
    reduce: shouldReduceMotion()
  };
};
