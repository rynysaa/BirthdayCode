import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotoGallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1664289597477-d5b2d266169d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjM5NjI2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Birthday Celebration',
    },
    {
      url: 'https://images.unsplash.com/photo-1578680034138-b2ee53f2cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwaGVhcnQlMjByb21hbnRpY3xlbnwxfHx8fDE3NjM5MDY2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'My Love for You',
    },
    {
      url: 'https://images.unsplash.com/photo-1576481564650-61d2ed81f6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNlbGVicmF0aW9uJTIwcGFydHl8ZW58MXx8fHwxNzYzOTk0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Happy Moments',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="max-w-5xl mx-auto"
    >
      <motion.h2
        className="text-center text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Memories Together 💑
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="aspect-square">
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
