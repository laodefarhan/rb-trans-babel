import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ZoomIn, Link as LinkIcon } from 'lucide-react';
import { cars } from '../data/cars';

const filters = [
  { label: 'Semua', value: '*' },
  { label: 'MPV', value: 'MPV' },
  { label: 'SUV', value: 'SUV' },
  { label: 'Compact', value: 'Compact' },
  { label: 'Bus & Truk', value: 'Bus' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('*');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const getFilterCategory = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('mpv')) return 'MPV';
    if (cat.includes('suv')) return 'SUV';
    if (cat.includes('city car')) return 'Compact';
    if (cat.includes('van') || cat.includes('bus') || cat.includes('commercial')) return 'Bus';
    return 'Compact';
  };

  const filteredCars = activeFilter === '*' 
    ? cars 
    : cars.filter(car => getFilterCategory(car.category) === activeFilter);

  return (
    <section id="gallery-kendaraan" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Galeri Kendaraan</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Koleksi Lengkap Kendaraan Premium Kami
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Jelajahi berbagai pilihan armada kami yang selalu dalam kondisi prima untuk kenyamanan perjalanan Anda.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-full h-full p-4 flex items-center justify-center">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
                  <motion.h4 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-white font-bold text-lg mb-0.5"
                  >
                    {car.name}
                  </motion.h4>
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-blue-300 text-xs mb-4"
                  >
                    {car.capacity} Penumpang • {car.pricePerDay > 0 ? 'Tersedia' : 'Premium'}
                  </motion.p>
                  
                  <div className="flex gap-3">
                    <button 
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg"
                      title="Perbesar"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <a 
                      href="#daftar-mobil" 
                      className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100 transition-colors shadow-lg"
                      title="Lihat Detail"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
