import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home as HomeIcon, Calendar, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import video assets
import video1 from '../assets/video rb trans/video_1.mp4';
import video2 from '../assets/video rb trans/video_2.mp4';

const galleryVideos = [
  { 
    src: video1, 
    title: 'Dokumentasi Perjalanan Wisata 1',
    date: 'Januari 08, 2026',
    author: 'Tim Video'
  },
  { 
    src: video2, 
    title: 'Dokumentasi Perjalanan Wisata 2',
    date: 'Januari 15, 2026',
    author: 'Tim Video'
  },
];

export default function FullVideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
            <span className="text-blue-400 font-medium">Galeri Video</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold">Galeri Video RB Trans Babel</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 lg:p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                  Koleksi Video
                </h2>
                
                {/* Video Grid */}
                <div className="grid sm:grid-cols-1 gap-10">
                  {galleryVideos.map((video, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-lg relative group mb-4">
                        <video 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          muted
                          loop
                          onMouseOver={e => e.currentTarget.play()}
                          onMouseOut={e => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        >
                          <source src={video.src} type="video/mp4" />
                        </video>
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 bg-blue-600/90 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 fill-current" />
                          </div>
                        </div>
                        
                        {/* Hover Trigger for Modal */}
                        <button 
                          onClick={() => setActiveVideo(video.src)}
                          className="absolute inset-0 w-full h-full z-10"
                          aria-label={`Putar ${video.title}`}
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" /> {video.date}
                          </div>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span>{video.author}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Sidebar content similar to FullGallery */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Tentang Video Kami
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lihat dokumentasi perjalanan wisata pelanggan kami di Bangka Belitung. Temukan keindahan alam dan kualitas layanan armada kami melalui lensa video.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Kategori Populer
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Wisata', 'Dokumentasi', 'Rental Mobil', 'Vlog'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 py-1.5 px-3 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Video Modal (Popup) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
