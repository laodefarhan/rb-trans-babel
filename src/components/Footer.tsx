import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo rb trans/rb trans babel.jpg';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Daftar Mobil', href: '#daftar-mobil' },
  { label: 'Gallery Kendaraan', href: '#gallery-kendaraan' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    if (href === '#beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="RB TRANS BABEL" className="h-12 w-auto object-contain rounded-lg shadow-sm" />
              
              {/* Garis Pemisah */}
              <div className="h-10 w-px bg-slate-700/50 mx-1" />
              
              {/* Teks Brand */}
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-wide">RB TRANS</span>
                <span className="text-blue-400 font-bold text-xs tracking-[0.15em] mt-1">BABEL</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Solusi rental mobil terpercaya di Bangka Belitung. Melayani perjalanan wisata, bisnis, dan keperluan sehari-hari dengan armada terbaik.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Navigasi</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <span>depati amir belakang cave vinoty, Jl. Stadion Dalam, Air Salemba, Kec. Gabek, Kota Pangkal Pinang, Kepulauan Bangka Belitung 33172</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="https://wa.me/6282169772358" className="hover:text-white transition-colors">+62 821 6977 2358</a>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:oyenbs12@gmail.com" className="hover:text-white transition-colors">oyenbs12@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} RB TRANS BABEL. Semua Hak Dilindungi.
          </p>
          
          <p className="text-slate-600 text-xs">
            Rental Mobil Terpercaya di Bangka Belitung
          </p>
        </div>
      </div>
    </footer>
  );
}
