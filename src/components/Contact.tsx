import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo RB TRANS BABEL!\n\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );
    window.open(`https://wa.me/6282169772358?text=${msg}`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Kontak</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Siap membantu Anda 24 jam. Hubungi kami untuk informasi dan pemesanan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: 'Alamat',
                  value: 'depati amir belakang cave vinoty, Jl. Stadion Dalam, Air Salemba, Kec. Gabek, Kota Pangkal Pinang, Kepulauan Bangka Belitung 33172',
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  icon: Phone,
                  label: 'WhatsApp / Telepon',
                  value: '+62 821 6977 2358',
                  color: 'bg-green-100 text-green-600',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'oyenbs12@gmail.com',
                  color: 'bg-amber-100 text-amber-600',
                },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/20 transition-all">
                  <div className={`${color} p-2.5 rounded-lg h-fit`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-medium mb-0.5">{label}</div>
                    <div className="text-slate-800 font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/6282169772358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20 w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </motion.a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-52 border border-slate-100">
              <iframe
                src="https://www.google.com/maps?q=RB+TRANS+rental+mobil+bangka+belitung,+Depati+Amir+Belakang+Cave+Vinoty,+Jl.+Stadion+Dalam,+Air+Salemba,+Gabek,+Pangkal+Pinang,+Bangka+Belitung&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi RB Trans Babel"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 text-xl mb-6">Kirim Pesan</h3>
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tulis pesan atau pertanyaan Anda..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/25 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Kirim via WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
