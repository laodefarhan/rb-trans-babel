import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Shield, Clock } from 'lucide-react';
import heroBg from '../assets/bg hero/hero rb trans babel.png';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4" />
            Bangka Belitung, Indonesia
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Solusi Rental Mobil{' '}
            <span className="text-blue-400">Terpercaya</span>
            {' '}di Bangka Belitung
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Layanan rental mobil profesional dengan pilihan{' '}
            <span className="text-white font-semibold">lepas kunci</span> maupun{' '}
            <span className="text-white font-semibold">dengan sopir</span>. Armada lengkap, harga transparan, siap 24 jam.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              { icon: Shield, text: '500+ Pelanggan Puas' },
              { icon: Clock, text: 'Layanan 24 Jam' },
              { icon: MapPin, text: 'Seluruh Babel' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                <Icon className="w-4 h-4 text-blue-400" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#armada')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40"
            >
              Lihat Mobil
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/6282169772358?text=Halo%20RB%20TRANS%20BABEL%2C%20saya%20ingin%20melakukan%20booking%20rental%20mobil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Booking Sekarang
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.8 } }}
        onClick={() => scrollTo('#tentang')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
