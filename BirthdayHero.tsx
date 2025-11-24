import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BirthdayHeroProps {
  partyStarted: boolean;
}

export function BirthdayHero({ partyStarted }: BirthdayHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <motion.div
        animate={partyStarted ? { 
          rotate: [0, 5, -5, 5, -5, 0],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ duration: 0.6 }}
        className="relative inline-block mb-6"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1514846528774-8de9d4a07023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmV8ZW58MXx8fHwxNzYzOTIxNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Romantic couple"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -top-2 -right-2 bg-rose-500 rounded-full p-2"
        >
          <Heart className="w-6 h-6 text-white fill-white" />
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-white mb-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Selamat Ulang Tahun Ke-20
        <br />
        <span className="inline-block mt-2">
          Sayangku! 💕
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-2"
      >
        <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
        <p className="text-white text-lg">
          To the most amazing person in my life
        </p>
        <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
      </motion.div>
    </motion.div>
  );
}