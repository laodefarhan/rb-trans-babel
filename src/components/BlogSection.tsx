import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Folder, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Blog RB Trans Babel',
    desc: 'Tips Perjalanan Rental Mobil Bangka Belitung',
    date: 'January 23, 2026',
    author: 'Rental Mobil BB',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&cs=tinysrgb&w=800',
    link: '#blog',
    isExternal: false
  },
  {
    title: 'Galeri Foto RB Trans Babel',
    desc: 'Koleksi Foto Armada dan Perjalanan Wisata',
    date: 'January 15, 2026',
    author: 'Tim Dokumentasi',
    category: 'Gallery',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=compress&cs=tinysrgb&w=800',
    link: '/gallery',
    isExternal: true
  },
  {
    title: 'Video RB Trans Babel',
    desc: 'Video Dokumentasi dan Panduan Perjalanan',
    date: 'January 08, 2026',
    author: 'Tim Video',
    category: 'Video Gallery',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=compress&cs=tinysrgb&w=800',
    link: '/videos',
    isExternal: true
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Info Terbaru</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Postingan Blog, Galeri, dan Video Terbaru
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Temukan informasi, koleksi foto, dan video menarik seputar layanan kami di Bangka Belitung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{post.desc}</p>
                <div className="flex items-center gap-4 text-slate-500 text-xs mb-6">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5" /> {post.category}
                  </div>
                </div>
                {post.isExternal ? (
                  <Link to={post.link} className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                    Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a href={post.link} className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                    Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
