import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Fuel, Settings, Calendar, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Car } from '../types';

interface CarDetailProps {
  car: Car;
  onClose: () => void;
}

export default function CarDetail({ car, onClose }: CarDetailProps) {
  const [activeImg, setActiveImg] = useState(0);

  const whatsappMsg = encodeURIComponent(
    car.pricePerDay > 0 
      ? `Halo RB TRANS BABEL, saya tertarik menyewa ${car.name} (Rp ${car.pricePerDay.toLocaleString('id-ID')}/hari). Mohon informasi ketersediaannya.`
      : `Halo RB TRANS BABEL, saya tertarik menyewa ${car.name}. Mohon informasi ketersediaan dan harganya.`
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100 sticky top-0 bg-white z-10">
            <div>
              <h2 className="font-bold text-slate-900 text-xl">{car.name}</h2>
              <span className="text-sm text-blue-600 font-medium">{car.category}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="p-5 space-y-6">
            {/* Gallery */}
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-50 flex items-center justify-center p-2">
                <img
                  src={car.gallery[activeImg]}
                  alt={car.name}
                  className="max-w-full max-h-full object-contain"
                />
                {car.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImg((p) => (p === 0 ? car.gallery.length - 1 : p - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-lg shadow"
                    >
                      <ChevronLeft className="w-4 h-4 text-slate-700" />
                    </button>
                    <button
                      onClick={() => setActiveImg((p) => (p === car.gallery.length - 1 ? 0 : p + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-lg shadow"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-700" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                {car.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all p-1 flex items-center justify-center ${
                      activeImg === i ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="max-w-full max-h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-slate-500 text-sm">Harga Sewa</span>
                <div className="text-2xl font-bold text-blue-600">
                  {car.pricePerDay > 0 ? (
                    <>
                      Rp {car.pricePerDay.toLocaleString('id-ID')}
                      <span className="text-slate-400 font-normal text-sm">/hari</span>
                    </>
                  ) : (
                    'Hubungi Kami'
                  )}
                </div>
              </div>
              <div className="text-sm text-slate-500 text-right">
                <div>Tahun {car.year}</div>
                <div className="text-slate-400 text-xs">Bisa lepas kunci / sopir</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed">{car.description}</p>

            {/* Specs */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Spesifikasi</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Users, label: 'Kapasitas', value: `${car.capacity} Orang` },
                  { icon: Settings, label: 'Transmisi', value: car.transmission },
                  { icon: Fuel, label: 'Bahan Bakar', value: car.fuel },
                  { icon: Calendar, label: 'Tahun', value: String(car.year) },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-3 text-center">
                    <Icon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-slate-400">{label}</div>
                    <div className="font-semibold text-slate-800 text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Fitur Kendaraan</h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-1.5 text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/6282169772358?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-base transition-all w-full shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Booking via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
