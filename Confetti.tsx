import { motion } from 'motion/react';

export function Confetti() {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    color: [
      'bg-pink-400',
      'bg-purple-400',
      'bg-blue-400',
      'bg-yellow-400',
      'bg-green-400',
      'bg-red-400',
    ][Math.floor(Math.random() * 6)],
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 3 + Math.random() * 2,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-3 h-3 ${piece.color}`}
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
          initial={{
            y: -20,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation * 4,
            opacity: [1, 1, 0.8, 0],
            x: [0, Math.sin(piece.id) * 100],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
