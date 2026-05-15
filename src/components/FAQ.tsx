import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';

const faqData = [
  {
    question: 'Berapa harga sewa mobil per hari di Rental Mobil Bangka Belitung?',
    answer: 'Harga sewa mobil kami sangat kompetitif dan bervariasi tergantung jenis kendaraan. Untuk informasi harga terlengkap, silakan lihat daftar mobil kami atau hubungi tim customer service kami. Kami juga menawarkan paket spesial untuk penyewaan jangka panjang dan grup.',
  },
  {
    question: 'Dokumen apa saja yang dibutuhkan untuk menyewa mobil?',
    answer: 'Untuk menyewa mobil, Anda memerlukan: Kartu Identitas (KTP/Paspor), Surat Izin Mengemudi (SIM) yang masih berlaku, dan fotokopi keduanya. Kami juga memerlukan data pribadi Anda untuk keperluan administrasi.',
  },
  {
    question: 'Apakah tersedia layanan antar-jemput mobil?',
    answer: 'Ya, kami menyediakan layanan antar-jemput mobil ke lokasi Anda. Layanan ini tersedia untuk area Pangkal Pinang dan sekitarnya. Hubungi tim kami untuk mengetahui biaya dan ketersediaan layanan antar-jemput.',
  },
  {
    question: 'Bagaimana jika terjadi kerusakan pada mobil selama penyewaan?',
    answer: 'Seluruh risiko kerusakan kendaraan selama masa sewa menjadi tanggung jawab penyewa. Kendaraan wajib dikembalikan dalam kondisi yang sama seperti saat diterima. Jika terjadi kecelakaan atau kerusakan, biaya perbaikan akan dikenakan di luar tarif sewa.',
  },
  {
    question: 'Apakah ada biaya tambahan untuk bahan bakar atau kilometer?',
    answer: 'Paket rental kami sudah dirancang transparan. Silakan hubungi admin kami untuk detail apakah paket yang Anda pilih sudah termasuk bahan bakar atau tidak, karena tergantung pada opsi lepas kunci atau dengan sopir yang Anda pilih.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Temukan jawaban atas pertanyaan umum mengenai layanan rental mobil kami di Bangka Belitung.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="mb-4 bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="font-semibold text-slate-900">{item.question}</span>
                </div>
                <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-slate-600 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
