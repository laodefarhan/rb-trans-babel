import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Testimoni</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ribuan pelanggan telah mempercayakan perjalanan mereka kepada RB TRANS BABEL.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-600/30" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <motion.p
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="text-slate-300 text-lg leading-relaxed mb-6 italic"
            >
              "{testimonials[current].review}"
            </motion.p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <div className="font-semibold text-white">{testimonials[current].name}</div>
                <div className="text-slate-400 text-sm">{testimonials[current].location}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-blue-500 w-6' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                current === i
                  ? 'bg-blue-600 border-blue-500'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
              onClick={() => setCurrent(i)}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
                current === i ? 'text-blue-100' : 'text-slate-400'
              }`}>"{t.review}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className={`text-sm font-semibold ${current === i ? 'text-white' : 'text-slate-300'}`}>{t.name}</div>
                  <div className={`text-xs ${current === i ? 'text-blue-200' : 'text-slate-500'}`}>{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
