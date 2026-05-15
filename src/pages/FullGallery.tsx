import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home as HomeIcon, Calendar, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import all gallery images
import foto1 from '../assets/gallery foto rb trans/foto_1.jpeg';
import foto2 from '../assets/gallery foto rb trans/foto_2.jpeg';
import foto3 from '../assets/gallery foto rb trans/foto_3.jpeg';
import foto4 from '../assets/gallery foto rb trans/foto_4.jpeg';
import foto5 from '../assets/gallery foto rb trans/foto_5.jpeg';
import foto6 from '../assets/gallery foto rb trans/foto_6.jpeg';
import foto7 from '../assets/gallery foto rb trans/foto_7.jpeg';
import foto8 from '../assets/gallery foto rb trans/foto_8.jpeg';
import foto9 from '../assets/gallery foto rb trans/foto_9.jpeg';

const galleryPhotos = [
  { src: foto1, alt: 'Wisata Bangka Belitung 1' },
  { src: foto2, alt: 'Wisata Bangka Belitung 2' },
  { src: foto3, alt: 'Wisata Bangka Belitung 3' },
  { src: foto4, alt: 'Wisata Bangka Belitung 4' },
  { src: foto5, alt: 'Wisata Bangka Belitung 5' },
  { src: foto6, alt: 'Wisata Bangka Belitung 6' },
  { src: foto7, alt: 'Wisata Bangka Belitung 7' },
  { src: foto8, alt: 'Wisata Bangka Belitung 8' },
  { src: foto9, alt: 'Wisata Bangka Belitung 9' },
];

export default function FullGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      {/* Page Title / Breadcrumbs */}
      <div className="pt-24 pb-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <HomeIcon className="w-3.5 h-3.5" /> Beranda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/#blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400 font-medium">Detail Galery</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold">Postingan Galery Foto</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 lg:p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                  Galery Foto
                </h2>
                
                {/* Photo Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {galleryPhotos.map((photo, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-xl overflow-hidden aspect-video bg-slate-100 cursor-pointer"
                      onClick={() => setSelectedImage(photo.src)}
                    >
                      <img 
                        src={photo.src} 
                        alt={photo.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                          <Search className="w-6 h-6" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Postingan Terbaru
              </h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                    Foto Terbaru dari Rental Mobil Bangka Belitung
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" /> Jan 23, 2026
                  </div>
                </div>
                {/* Add more recent posts if needed */}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Kategori
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Travel Tips', count: 5 },
                  { name: 'Rental Guide', count: 8 },
                  { name: 'Safety Tips', count: 6 },
                  { name: 'Destinasi Wisata', count: 12 },
                  { name: 'Panduan', count: 10 },
                ].map((cat) => (
                  <li key={cat.name} className="flex items-center justify-between text-slate-600 hover:text-blue-600 cursor-pointer transition-colors group">
                    <span className="text-sm font-medium">{cat.name}</span>
                    <span className="text-xs bg-slate-100 text-slate-500 py-1 px-2 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      ({cat.count})
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Tag
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Rental Mobil', 'Bangka Belitung', 'Wisata', 'Liburan', 
                  'Perjalanan', 'Pantai', 'Tips Berkendara', 'Destinasi', 
                  'Keselamatan', 'Petualangan', 'Mobilitas'
                ].map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 py-1.5 px-3 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-blue-500/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
