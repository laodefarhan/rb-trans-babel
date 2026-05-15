import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Award, Shield } from 'lucide-react';
import aboutBg from '../assets/bg about/Alphard-Gen-4.webp';

const values = [
  { icon: Heart, title: 'Kepercayaan', desc: 'Kami menjunjung tinggi kepercayaan pelanggan' },
  { icon: Award, title: 'Kualitas', desc: 'Armada yang terawat dan berstandar internasional' },
  { icon: Shield, title: 'Keamanan', desc: 'Perjalanan yang aman dan nyaman' },
  { icon: Target, title: 'Profesional', desc: 'Sopir berpengalaman dan berlisensi' },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="tentang-kami" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Tentang Kami</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                Mitra Perjalanan Terbaik di{' '}
                <span className="text-blue-600">Bangka Belitung</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                RB TRANS BABEL adalah perusahaan rental mobil terpercaya yang berpusat di Bangka Belitung. Berdiri sejak 2015, kami telah melayani ribuan pelanggan dengan armada kendaraan berkualitas dan pelayanan prima.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Kami menyediakan layanan <strong>lepas kunci</strong> maupun <strong>dengan sopir profesional</strong>, menjangkau seluruh wilayah Pulau Bangka dan Belitung dengan tarif transparan tanpa biaya tersembunyi.
              </p>

              {/* Criteria List */}
              <ul className="space-y-3 mb-8">
                {[
                  'Unit mobil lengkap, prima, dan terawat.',
                  'Layanan rental fleksibel harian, mingguan, hingga bulanan.',
                  'Harga sewa terjangkau dan transparan.',
                  'Ramah, profesional, dan berpengalaman.',
                  'Pelayanan cepat dan responsif.',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                      <Shield className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>

            {/* Vision & Mission */}
            <div className="space-y-4">
              <FadeIn delay={0.1}>
                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-blue-100 p-2.5 rounded-lg h-fit">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visi</h3>
                    <p className="text-slate-600 text-sm">Menjadi perusahaan rental mobil nomor satu dan paling terpercaya di Kepulauan Bangka Belitung.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="bg-blue-100 p-2.5 rounded-lg h-fit">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Misi</h3>
                    <p className="text-slate-600 text-sm">Memberikan pelayanan transportasi terbaik, aman, dan nyaman dengan harga yang kompetitif kepada setiap pelanggan.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src={aboutBg}
                  alt="RB Trans Babel Fleet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-4">
                    {[
                      { num: '500+', label: 'Pelanggan' },
                      { num: '9+', label: 'Tahun' },
                      { num: '20+', label: 'Armada' },
                    ].map(({ num, label }) => (
                      <div key={label} className="text-center">
                        <div className="text-white font-bold text-xl">{num}</div>
                        <div className="text-slate-300 text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-4">
              {values.map((val, i) => (
                <FadeIn key={val.title} delay={0.1 * (i + 2)}>
                  <div className="flex gap-4 items-start p-4 border border-slate-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200">
                    <div className="bg-blue-600 p-2 rounded-lg h-fit">
                      <val.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-0.5">{val.title}</h3>
                      <p className="text-slate-500 text-sm">{val.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
