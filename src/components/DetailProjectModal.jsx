import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DetailProjectModal = ({ isOpen, onClose, data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  // Gunakan originalData jika ada, jika tidak gunakan data langsung
  const itemData = data?.originalData || data || {};
  
  // Gabungkan data untuk memastikan semua field tersedia
  const displayData = {
    ...itemData,
    ...data,
    image: data?.image || itemData?.gambar || '',
    title: data?.title || itemData?.nama || '',
    subtitle: data?.subtitle || itemData?.desk || '',
    tools: data?.tools || itemData?.tools || [],
    github: data?.github || itemData?.github || '',
    demo: data?.demo || itemData?.demo || '',
    status: data?.status || itemData?.status || '',
    kantor: data?.kantor || itemData?.kantor || '',
    location: data?.location || itemData?.tahun || '',
    handle: data?.handle || itemData?.type || ''
  };

  // Siapkan array gambar (jika ada multiple images, bisa ditambahkan di data.js)
  const images = displayData.images || [displayData.image || displayData.gambar].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors text-white"
            >
              <i className="ri-close-line text-xl"></i>
            </motion.button>

            {/* Image Slider */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={images[currentImageIndex]}
                  alt={displayData.title || displayData.nama}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Gradient Overlay */}
              

              {/* Navigation Arrows (jika lebih dari 1 gambar) */}
              {images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors"
                  >
                    <i className="ri-arrow-left-line text-xl"></i>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors"
                  >
                    <i className="ri-arrow-right-line text-xl"></i>
                  </motion.button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToImage(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="p-6 md:p-8"
            >
              {/* Title */}
              <h2 className="text-3xl font-bold mb-2 text-white">
                {displayData.title || displayData.nama}
              </h2>

              {/* Subtitle/Description */}
              <p className="text-base opacity-80 mb-6 text-white/90">
                {displayData.subtitle || displayData.desk}
              </p>

              {/* Project Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {displayData.status && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-sm opacity-60 text-white/70">Status</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`w-2 h-2 rounded-full ${
                        displayData.status === "Online" ? "bg-green-500" : "bg-gray-500"
                      }`} />
                      <span className="text-white">{displayData.status}</span>
                    </div>
                  </motion.div>
                )}
                {displayData.location && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <span className="text-sm opacity-60 text-white/70">Tahun</span>
                    <p className="text-white">{displayData.location}</p>
                  </motion.div>
                )}
                {displayData.handle && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-sm opacity-60 text-white/70">Type</span>
                    <p className="text-white">{displayData.handle}</p>
                  </motion.div>
                )}
                {displayData.kantor && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <span className="text-sm opacity-60 text-white/70">Kantor/Institusi</span>
                    <p className="text-white">{displayData.kantor}</p>
                  </motion.div>
                )}
              </div>

              {/* Technologies */}
              {displayData.tools && displayData.tools.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <span className="text-sm opacity-60 text-white/70 block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {displayData.tools.map((tool, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.55 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-zinc-800 border border-amber-500/50 text-amber-400 rounded-md text-sm font-medium"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                {displayData.demo && displayData.demo !== "app.jsx" && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={displayData.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    <i className="ri-global-line mr-2"></i>
                    Lihat Website
                  </motion.a>
                )}
                {displayData.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={displayData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center border border-zinc-700"
                  >
                    <i className="ri-github-fill mr-2"></i>
                    View on Github
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailProjectModal;

