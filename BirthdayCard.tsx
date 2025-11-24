import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';

interface BirthdayCardProps {
  partyStarted: boolean;
}

export function BirthdayCard({ partyStarted }: BirthdayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"
      />

      <div className="relative z-10">
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-center mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          animate={partyStarted ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          It's Your Special Day!
        </motion.h2>

        <div className="space-y-4 text-gray-700 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            May this birthday bring you joy, laughter, and all the happiness you deserve.
            Here's to another year of amazing adventures, precious memories, and dreams come true!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-2 text-pink-600 pt-4"
          >
            <Heart className="w-5 h-5 fill-pink-600" />
            <span>Wishing you the best year ahead!</span>
            <Heart className="w-5 h-5 fill-pink-600" />
          </motion.div>
        </div>

        {partyStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-purple-600 italic">
              "Count your life by smiles, not tears. Count your age by friends, not years."
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
