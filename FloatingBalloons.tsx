import { motion } from 'motion/react';

export function FloatingBalloons() {
  const balloons = [
    { color: 'bg-red-400', left: '10%', delay: 0 },
    { color: 'bg-blue-400', left: '25%', delay: 0.5 },
    { color: 'bg-yellow-400', left: '75%', delay: 1 },
    { color: 'bg-green-400', left: '85%', delay: 1.5 },
    { color: 'bg-pink-400', left: '50%', delay: 2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: balloon.left, bottom: '-100px' }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(index) * 50, 0],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: balloon.delay,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <motion.div
              className={`w-16 h-20 ${balloon.color} rounded-full relative`}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Shine effect */}
              <div className="absolute top-3 left-3 w-4 h-4 bg-white/40 rounded-full" />
            </motion.div>
            {/* String */}
            <div className="absolute left-1/2 top-full w-0.5 h-20 bg-gray-400 -translate-x-1/2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
