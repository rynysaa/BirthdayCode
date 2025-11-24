import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';

export function LoveMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200 rounded-full opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full opacity-20"
      />

      <div className="relative z-10">
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-center mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Untuk Kamu, Cinta Hidupku
        </motion.h2>

        <div className="space-y-4 text-gray-700">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            Di hari spesialmu ini, aku ingin kamu tahu betapa bersyukurnya aku memilikimu.
            Setiap hari bersamamu adalah hadiah yang luar biasa.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            Kamu membuat hidupku lebih berwarna, lebih bahagia, dan penuh dengan cinta.
            Terima kasih sudah menjadi teman, sahabat, dan kekasih terbaikku.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            Semoga tahun ini membawa kebahagiaan, kesuksesan, dan semua hal indah untukmu.
            Aku akan selalu ada di sisimu untuk merayakan setiap momen berharga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-2 pt-6"
          >
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <p className="text-rose-600 italic">
              I Love You More Than Words Can Say
            </p>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
