import { motion } from 'framer-motion';
import { Users, Fuel, Settings, ChevronRight } from 'lucide-react';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
  onViewDetail: (car: Car) => void;
}

export default function CarCard({ car, onViewDetail }: CarCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer group"
      onClick={() => onViewDetail(car)}
    >
      <div className="relative overflow-hidden aspect-video bg-slate-50 flex items-center justify-center p-6">
        <img
          src={car.image}
          alt={car.name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-lg mb-3">{car.name}</h3>

        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Users className="w-4 h-4 text-blue-500" />
            {car.capacity} Orang
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Settings className="w-4 h-4 text-blue-500" />
            {car.transmission}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Fuel className="w-4 h-4 text-blue-500" />
            {car.fuel}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <span className="text-slate-400 text-xs">Mulai dari</span>
            <div className="text-blue-600 font-bold text-lg">
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
          <motion.button
            whileHover={{ x: 3 }}
            className="flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
          >
            Lihat Detail
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
