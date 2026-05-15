import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Wrench, Clock, User, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Harga Terjangkau',
    desc: 'Tarif kompetitif tanpa biaya tersembunyi. Transparan dan sesuai budget perjalanan Anda.',
    color: 'bg-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Mobil Terawat',
    desc: 'Seluruh armada rutin diservis dan diinspeksi untuk memastikan kondisi prima setiap saat.',
    color: 'bg-blue-500',
  },
  {
    icon: Clock,
    title: 'Layanan 24 Jam',
    desc: 'Kami siap melayani pemesanan dan bantuan darurat kapanpun Anda membutuhkan.',
    color: 'bg-amber-500',
  },
  {
    icon: User,
    title: 'Driver Profesional',
    desc: 'Sopir berpengalaman, familiar dengan rute Bangka Belitung, dan menjunjung tinggi keselamatan.',
    color: 'bg-violet-500',
  },
  {
    icon: Zap,
    title: 'Proses Cepat & Mudah',
    desc: 'Booking via WhatsApp dalam hitungan menit. Konfirmasi instan, tanpa proses rumit.',
    color: 'bg-rose-500',
  },
  {
    icon: Shield,
    title: 'Terjamin Aman',
    desc: 'Kendaraan berinsurance, pengemudi tersertifikat, dan sistem pelacakan armada real-time.',
    color: 'bg-cyan-500',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Keunggulan</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Mengapa Memilih RB TRANS BABEL?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Kami berkomitmen memberikan pengalaman rental terbaik dengan standar kualitas premium di setiap aspek layanan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`${feat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{feat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
