import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CarCard from './CarCard';
import { cars } from '../data/cars';
import type { Car } from '../types';

interface CarFleetProps {
  onViewDetail: (car: Car) => void;
}

export default function CarFleet({ onViewDetail }: CarFleetProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="daftar-mobil" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Armada Kami</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Pilih Kendaraan yang Tepat
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Tersedia berbagai pilihan kendaraan untuk setiap kebutuhan perjalanan Anda di Bangka Belitung.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <CarCard car={car} onViewDetail={onViewDetail} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
