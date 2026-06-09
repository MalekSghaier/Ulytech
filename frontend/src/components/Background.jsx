import { motion } from 'framer-motion';

export default function Background() {
  const points = [...Array(10)].map((_, i) => ({
    id: i,
    left: (i * 37 + 11) % 100,
    top:  (i * 53 + 17) % 100,
    duration: 12 + (i % 4) * 4,   
    delay: (i * 0.8) % 6,
    dx: ((i * 23 + 7) % 40) - 20, 
    dy: ((i * 31 + 13) % 40) - 20, 
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-primary/30 to-violet/20" />

      {/* Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-electricPink/10 rounded-full blur-3xl" />

      {/* Points animés — migration douce */}
      {points.map(p => (
        <motion.div
          key={p.id}
          className="absolute w-1.5 h-1.5 bg-violet/40 rounded-full"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            x: [0, p.dx, 0],        
            y: [0, p.dy, 0],        
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}