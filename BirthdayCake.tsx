import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function BirthdayCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => {
      setShowWish(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-center"
    >
      <motion.h2
        className="mb-12 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Happy 20th Birthday! 🎂
      </motion.h2>

      <div className="relative inline-block pt-16">
        {/* Number Candles 2 and 0 - Now at the top */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-6 z-20"
        >
          <AnimatePresence>
            {!candlesBlown && (
              <>
                {/* Number 2 Candle */}
                <motion.div
                  exit={{ opacity: 0, scale: 0 }}
                  className="relative"
                >
                  {/* Number 2 shape */}
                  <svg width="32" height="50" viewBox="0 0 32 50" className="relative z-10">
                    <path
                      d="M 5 8 Q 5 3 10 3 L 20 3 Q 25 3 25 8 Q 25 13 20 18 L 15 23 Q 10 28 10 33 L 10 40 L 25 40 L 25 45 L 5 45 L 5 33 Q 5 28 10 23 L 15 18 Q 20 13 20 8 Q 20 6 18 6 L 10 6 Q 8 6 8 8 L 5 8 Z"
                      fill="url(#gradient2)"
                      stroke="#d97706"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Flame for 2 */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                    }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-5 h-8 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full blur-sm" />
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [-2, -4, -2],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                    }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 bg-yellow-300 rounded-full"
                  />
                </motion.div>

                {/* Number 0 Candle */}
                <motion.div
                  exit={{ opacity: 0, scale: 0 }}
                  className="relative"
                >
                  {/* Number 0 shape */}
                  <svg width="32" height="50" viewBox="0 0 32 50" className="relative z-10">
                    <ellipse
                      cx="16"
                      cy="25"
                      rx="11"
                      ry="20"
                      fill="url(#gradient0)"
                      stroke="#d97706"
                      strokeWidth="1"
                    />
                    <ellipse
                      cx="16"
                      cy="25"
                      rx="6"
                      ry="15"
                      fill="white"
                      opacity="0.9"
                    />
                    <defs>
                      <linearGradient id="gradient0" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Flame for 0 */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-5 h-8 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full blur-sm" />
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [-2, -4, -2],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 bg-yellow-300 rounded-full"
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Smoke after blowing */}
          <AnimatePresence>
            {candlesBlown && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 0.6, 0], y: -40, x: -5 }}
                  transition={{ duration: 2.5 }}
                  className="absolute -top-2 left-4 w-10 h-10 bg-gray-400 rounded-full blur-md"
                />
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 0.6, 0], y: -40, x: 5 }}
                  transition={{ duration: 2.5, delay: 0.2 }}
                  className="absolute -top-2 right-4 w-10 h-10 bg-gray-400 rounded-full blur-md"
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cake Layer 3 (Top - Smallest) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="relative z-10"
        >
          <div className="w-48 h-16 bg-gradient-to-b from-purple-400 to-purple-500 rounded-t-xl mx-auto relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex gap-3 px-3 py-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-1 h-full bg-white/20 rounded-sm" />
              ))}
            </div>
            {/* Frosting decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30 rounded-b-xl" />
          </div>
          <div className="w-48 h-2 bg-yellow-300 mx-auto shadow-sm" />
        </motion.div>

        {/* Cake Layer 2 (Middle) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10"
        >
          <div className="w-60 h-18 bg-gradient-to-b from-rose-400 to-rose-500 rounded-t-xl mx-auto relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex gap-3 px-3 py-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex-1 h-full bg-white/20 rounded-sm" />
              ))}
            </div>
            {/* Frosting decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30 rounded-b-xl" />
          </div>
          <div className="w-60 h-2 bg-yellow-300 mx-auto shadow-sm" />
        </motion.div>

        {/* Cake Layer 1 (Bottom - Largest) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10"
        >
          <div className="w-72 h-20 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-xl mx-auto relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex gap-4 px-4 py-3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="flex-1 h-full bg-white/20 rounded-sm" />
              ))}
            </div>
            {/* Frosting decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-white/30 rounded-b-xl" />
          </div>
          <div className="w-72 h-2 bg-yellow-300 mx-auto shadow-sm" />
        </motion.div>

        {/* Cake Plate (at the bottom) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-80 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full mx-auto shadow-lg"
        />
      </div>

      {!candlesBlown ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <p className="text-gray-600 mb-4">
            Tiup lilinnya dan buat permintaan! 🎉
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBlowCandles}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
          >
            💨 Tiup Lilin
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-4"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-12 h-12 mx-auto text-yellow-400 fill-yellow-400" />
          </motion.div>
          
          {showWish && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <p className="text-rose-600 italic">
                "Semoga semua impian dan harapanmu di usia 20 ini terwujud!"
              </p>
              <p className="text-gray-700">
                Selamat memasuki chapter baru kehidupanmu, Sayang! ✨
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
