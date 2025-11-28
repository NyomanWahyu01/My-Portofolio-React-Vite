import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DetailDesignModal = ({ isOpen, onClose, data }) => {
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
    file: data?.file || itemData?.file || '',
    type: data?.type || itemData?.type || '',
    tahun: data?.tahun || itemData?.tahun || '',
    kantor: data?.kantor || itemData?.kantor || '',
    handle: data?.handle || itemData?.type || ''
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-80 overflow-hidden"
            >
              <img
                src={displayData.image || displayData.gambar}
                alt={displayData.title || displayData.nama}
                className="w-full h-full object-cover"
              />
              
            </motion.div>

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

              {/* Type, Tahun, Kantor Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {displayData.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700"
                  >
                    <span className="text-xs opacity-60 text-white/70 block mb-1">Type</span>
                    <p className="text-white font-medium">{displayData.type}</p>
                  </motion.div>
                )}
                {displayData.tahun && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700"
                  >
                    <span className="text-xs opacity-60 text-white/70 block mb-1">Tahun</span>
                    <p className="text-white font-medium">{displayData.tahun}</p>
                  </motion.div>
                )}
                {displayData.kantor && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700"
                  >
                    <span className="text-xs opacity-60 text-white/70 block mb-1">Kantor/Institusi</span>
                    <p className="text-white font-medium line-clamp-2">{displayData.kantor}</p>
                  </motion.div>
                )}
              </div>

              {/* Tools Used */}
              {displayData.tools && displayData.tools.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <span className="text-sm opacity-60 text-white/70 block mb-2">
                    Tools Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {displayData.tools.map((tool, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.45 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-zinc-800 border border-amber-500/50 text-amber-400 rounded-md text-sm font-medium"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                {displayData.file && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={displayData.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Lihat Full Design
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

export default DetailDesignModal;

