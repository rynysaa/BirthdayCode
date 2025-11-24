import { useState } from 'react';
import { motion } from 'motion/react';
import { Cake, Heart, PartyPopper, Sparkles, Music } from 'lucide-react';
import { BirthdayHero } from './components/BirthdayHero';
import { LoveMessage } from './components/LoveMessage';
import { PhotoGallery } from './components/PhotoGallery';
import { BirthdayCake } from './components/BirthdayCake';
import { FloatingBalloons } from './components/FloatingBalloons';
import { Confetti } from './components/Confetti';
import { Button } from './components/ui/button';

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [partyStarted, setPartyStarted] = useState(false);

  const startParty = () => {
    setPartyStarted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-300 to-purple-400 relative overflow-hidden">
      {showConfetti && <Confetti />}
      <FloatingBalloons />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <BirthdayHero partyStarted={partyStarted} />

        {!partyStarted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <Button
              onClick={startParty}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white gap-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              Buka Hadiah Ulang Tahun
              <Sparkles className="w-5 h-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 mt-8"
          >
            <BirthdayCake />
            <LoveMessage />
            <PhotoGallery />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center text-white"
              >
                <Heart className="w-12 h-12 mx-auto mb-3 fill-white" />
                <h3 className="mb-2">My Love</h3>
                <p className="text-white/90">
                  Kamu adalah hadiah terbaik dalam hidupku
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center text-white"
              >
                <Cake className="w-12 h-12 mx-auto mb-3" />
                <h3 className="mb-2">Make a Wish</h3>
                <p className="text-white/90">
                  Semoga semua impianmu tercapai tahun ini
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center text-white"
              >
                <PartyPopper className="w-12 h-12 mx-auto mb-3" />
                <h3 className="mb-2">Celebrate</h3>
                <p className="text-white/90">
                  Hari ini adalah hari spesialmu, Sayang!
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}