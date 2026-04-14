import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Generate array of 30 image URLs
  const images = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    url: `https://gbe88.uk/BS/${i + 1}.webp`
  }));

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 30 ? 1 : selectedImage + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 1 ? 30 : selectedImage - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 min-h-screen bg-[#121212]"
    >
      <div className="max-w-4xl mx-auto px-2 py-8">
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl text-[#8B0000] tracking-widest mb-2">SECRET ARCHIVES</h1>
          <p className="text-gray-500 text-xs font-mono tracking-widest">OBSERVATION LOGS</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 md:gap-2">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square relative cursor-pointer overflow-hidden bg-[#1a1a1a]"
              onClick={() => openLightbox(img.id)}
            >
              <img
                src={img.url}
                alt={`Observation Log ${img.id}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-1 right-1 bg-black/60 px-1 rounded text-[8px] font-mono text-[#8B0000]">
                {String(img.id).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center touch-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-[110] p-2 text-gray-400 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons (Desktop/Tap) */}
            <button 
              className="absolute left-4 z-[110] p-4 text-gray-600 hover:text-white transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={36} />
            </button>
            <button 
              className="absolute right-4 z-[110] p-4 text-gray-600 hover:text-white transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={36} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -50 }}
              transition={{ duration: 0.2 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  // Swipe left -> next image
                  if (selectedImage !== null) {
                    setSelectedImage(selectedImage === 30 ? 1 : selectedImage + 1);
                  }
                } else if (swipe > 50) {
                  // Swipe right -> prev image
                  if (selectedImage !== null) {
                    setSelectedImage(selectedImage === 1 ? 30 : selectedImage - 1);
                  }
                }
              }}
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`https://gbe88.uk/BS/${selectedImage}.webp`}
                alt={`Observation Log ${selectedImage}`}
                className="max-w-full max-h-full object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Minimal Info */}
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <span className="font-mono text-xs text-[#8B0000]/70 tracking-widest">
                LOG_{String(selectedImage).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
