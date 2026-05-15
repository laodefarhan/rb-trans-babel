import type { Car } from '../types';
import alphardImg from '../assets/daftar mobil/Toyota Alphard Gen 4 2025.jpg';
import alphardGen3Img from '../assets/daftar mobil/Toyota Alphard Gen 3.jpg';
import pajeroImg from '../assets/daftar mobil/Mitsubishi Pajero.jpg';
import fortunerImg from '../assets/daftar mobil/Toyota Fortuner.jpg';
import innovaRebornImg from '../assets/daftar mobil/Inova Reborn.png';
import innovaVenturerImg from '../assets/daftar mobil/Inova Venturer.png';
import avanzaNewImg from '../assets/daftar mobil/Toyota Avanza New.png';
import avanzaAllNewImg from '../assets/daftar mobil/Toyota Avanza All New.png';
import ertigaImg from '../assets/daftar mobil/Suzuki Ertiga All New.png';
import xeniaImg from '../assets/daftar mobil/Daihatsu Xenia All New.png';
import avanza2016Img from '../assets/daftar mobil/Avanza 2016.png';
import brioImg from '../assets/daftar mobil/Honda Brio.png';
import mobilioImg from '../assets/daftar mobil/Honda Mobilio.png';
import inovaGrandImg from '../assets/daftar mobil/Toyota Inova Grand.png';
import haicePremioImg from '../assets/daftar mobil/Haice Premio.png';
import haiceCommuterImg from '../assets/daftar mobil/Haice Commuter.png';
import zenixImg from '../assets/daftar mobil/Zenix Type G.png';
import granMaxImg from '../assets/daftar mobil/Daihatsu Pickup Gren Max.png';
import busImg from '../assets/daftar mobil/Bus Pariwisata.png';

export const cars: Car[] = [
  {
    id: 'haice-premio',
    name: 'Haice Premio',
    category: 'Van',
    pricePerDay: 0,
    image: haicePremioImg,
    gallery: [haicePremioImg],
    capacity: 14,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin / Diesel',
    year: 2023,
    features: [
      'Harga: Hubungi Kami',
      'Kabin Super Luas',
      'Air Conditioner',
      'Audio System',
      'Cocok untuk Grup VIP'
    ],
    description: 'Haice Premio memberikan standar baru dalam transportasi grup dengan kabin yang lebih mewah dan luas.',
  },
  {
    id: 'haice-commuter',
    name: 'Haice Commuter',
    category: 'Van',
    pricePerDay: 1300000,
    image: haiceCommuterImg,
    gallery: [haiceCommuterImg],
    capacity: 15,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin / Diesel',
    year: 2022,
    features: [
      'Paket: All in (Mobil + Driver + BBM + Parkir)',
      'Kapasitas hingga 15 Orang',
      'Air Conditioner',
      'Audio System',
      'Nyaman untuk Perjalanan Wisata'
    ],
    description: 'Haice Commuter adalah pilihan favorit untuk perjalanan grup dengan kapasitas besar dan efisiensi yang terjamin.',
  },
  {
    id: 'bus-pariwisata',
    name: 'Bus Pariwisata',
    category: 'Bus',
    pricePerDay: 1700000,
    image: busImg,
    gallery: [busImg],
    capacity: 30,
    transmission: 'Automatic',
    fuel: 'Diesel',
    year: 2022,
    features: [
      'Kapasitas Besar',
      'Full AC',
      'Entertainment System (TV/Karaoke)',
      'Reclining Seats',
      'Bagasi Luas'
    ],
    description: 'Bus Pariwisata kami adalah solusi transportasi terbaik untuk perjalanan grup besar, study tour, atau acara korporat dengan kenyamanan maksimal.',
  },
  {
    id: 'granmax-pickup',
    name: 'Daihatsu Pickup Gran Max',
    category: 'Commercial',
    pricePerDay: 300000,
    image: granMaxImg,
    gallery: [granMaxImg],
    capacity: 2,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2022,
    features: [
      'Kapasitas Bak Luas',
      'Irit Bahan Bakar',
      'Mesin Bandel',
      'Cocok untuk Angkutan Barang'
    ],
    description: 'Daihatsu Pickup Gran Max adalah solusi angkutan barang yang handal, efisien, dan memiliki kapasitas bak yang luas.',
  },
  {
    id: 'avanza-1',
    name: 'Toyota Avanza New',
    category: 'MPV',
    pricePerDay: 350000,
    image: avanzaNewImg,
    gallery: [avanzaNewImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2023,
    features: [
      'Paket: Lepas Kunci',
      'AC',
      'Audio',
      'Power Window',
      'Central Lock'
    ],
    description: 'Toyota Avanza New adalah pilihan keluarga terbaik dengan desain terbaru, kapasitas 7 penumpang, nyaman dan irit bahan bakar.',
  },
  {
    id: 'avanza-all-new',
    name: 'Toyota Avanza All New',
    category: 'MPV',
    pricePerDay: 400000,
    image: avanzaAllNewImg,
    gallery: [avanzaAllNewImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2023,
    features: [
      'Lepas Kunci: Rp400.000',
      'Paket All in (Mobil + Driver + BBM + Parkir): Rp800.000',
      'Electric Mirror',
      'Airbag',
      'Digital AC'
    ],
    description: 'Toyota Avanza All New hadir dengan fitur modern dan kenyamanan ekstra untuk perjalanan keluarga Anda.',
  },
  {
    id: 'xenia-all-new',
    name: 'Daihatsu Xenia All New',
    category: 'MPV',
    pricePerDay: 400000,
    image: xeniaImg,
    gallery: [xeniaImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2023,
    features: [
      'Lepas Kunci: Rp400.000',
      'Paket All in (Mobil + Driver + BBM + Parkir): Rp800.000',
      'Shark Fin Antenna',
      'LED Headlamp',
      'Digital AC'
    ],
    description: 'Daihatsu Xenia All New adalah teman setia perjalanan keluarga dengan kabin yang fleksibel dan irit bahan bakar.',
  },
  {
    id: 'ertiga-1',
    name: 'Suzuki Ertiga All New',
    category: 'MPV',
    pricePerDay: 300000,
    image: ertigaImg,
    gallery: [ertigaImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2023,
    features: [
      'AC Double Blower',
      'Spacious Cabin',
      'Audio System',
      'Power Steering'
    ],
    description: 'Suzuki Ertiga All New memberikan kenyamanan berkendara dengan kabin luas dan performa mesin yang efisien.',
  },
  {
    id: 'avanza-2016',
    name: 'Avanza 2016',
    category: 'MPV',
    pricePerDay: 300000,
    image: avanza2016Img,
    gallery: [avanza2016Img],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2016,
    features: [
      'Paket Mobil + Driver: Rp500.000',
      'AC Cold',
      'Audio System',
      'Power Steering',
      'Hemat Bahan Bakar'
    ],
    description: 'Avanza 2016 adalah pilihan ekonomis dan handal untuk kebutuhan transportasi harian Anda di Bangka Belitung.',
  },
  {
    id: 'brio-1',
    name: 'Honda Brio',
    category: 'City Car',
    pricePerDay: 300000,
    image: brioImg,
    gallery: [brioImg],
    capacity: 5,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2022,
    features: [
      'Paket Mobil + Driver: Rp500.000',
      'Compact & Stylish',
      'Lincah di Jalan Kota',
      'Hemat Bahan Bakar',
      'Modern Entertainment'
    ],
    description: 'Honda Brio adalah city car yang lincah dan hemat bahan bakar, sangat cocok untuk mobilitas perkotaan di Bangka Belitung.',
  },
  {
    id: 'mobilio-1',
    name: 'Honda Mobilio',
    category: 'MPV',
    pricePerDay: 350000,
    image: mobilioImg,
    gallery: [mobilioImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin',
    year: 2022,
    features: [
      'Lepas Kunci: Rp350.000',
      'Desain Sporty',
      'Kabin Nyaman',
      'Irit Bahan Bakar',
      'Bagasi Luas'
    ],
    description: 'Honda Mobilio adalah MPV keluarga yang sporty and efisien, memberikan kenyamanan maksimal untuk perjalanan Anda.',
  },
  {
    id: 'inova-grand',
    name: 'Toyota Inova Grand',
    category: 'MPV',
    pricePerDay: 350000,
    image: inovaGrandImg,
    gallery: [inovaGrandImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin / Diesel',
    year: 2014,
    features: [
      'Lepas Kunci: Rp350.000',
      'Kabin Luas',
      'AC Double Blower',
      'Audio System',
      'Nyaman untuk Keluarga'
    ],
    description: 'Toyota Inova Grand tetap menjadi favorit keluarga Indonesia dengan kenyamanan kabin yang legendaris dan performa yang tangguh.',
  },
  {
    id: 'innova-1',
    name: 'Innova Reborn',
    category: 'MPV Premium',
    pricePerDay: 500000,
    image: innovaRebornImg,
    gallery: [innovaRebornImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Diesel',
    year: 2023,
    features: [
      'Lepas Kunci: Rp500.000',
      'Paket All in (Mobil + Driver + BBM + Parkir): Rp1.000.000',
      'AC Double Blower',
      'Audio Premium',
      'Airbag'
    ],
    description: 'Innova Reborn menawarkan kenyamanan premium dengan pilihan lepas kunci maupun paket All-in untuk perjalanan Anda di Bangka Belitung.',
  },
  {
    id: 'innova-venturer',
    name: 'Innova Venturer',
    category: 'MPV Premium',
    pricePerDay: 1500000,
    image: innovaVenturerImg,
    gallery: [innovaVenturerImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin / Diesel',
    year: 2023,
    features: [
      'Paket: All in (Mobil + Driver + BBM + Parkir)',
      'Luxury Interior',
      'Kamera Mundur',
      'AC Double Blower'
    ],
    description: 'Innova Venturer MPV kasta tertinggi dari keluarga Innova, memberikan kemewahan dan kenyamanan ekstra untuk perjalanan Anda.',
  },
  {
    id: 'zenix-type-g',
    name: 'Zenix Type G',
    category: 'MPV Premium',
    pricePerDay: 700000,
    image: zenixImg,
    gallery: [zenixImg],
    capacity: 7,
    transmission: 'Automatic',
    fuel: 'Bensin',
    year: 2023,
    features: [
      'Tipe: 1.5L 4 Silinder',
      'Paket All in (Mobil + Driver + BBM + Parkir): Rp1.200.000',
      'Modern Design',
      'Electric Parking Brake',
      'Digital AC'
    ],
    description: 'Zenix Type G menghadirkan teknologi terbaru dan kenyamanan berkendara yang modern untuk perjalanan Anda.',
  },
  {
    id: 'fortuner-2',
    name: 'Toyota Fortuner',
    category: 'SUV Premium',
    pricePerDay: 2500000,
    image: fortunerImg,
    gallery: [fortunerImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin / Diesel',
    year: 2022,
    features: [
      'Paket: All in (Mobil + Driver + BBM + Parkir)',
      'Kamera Mundur',
      'AC Double Blower',
      'Leather Seat'
    ],
    description: 'Toyota Fortuner SUV premium bertenaga tinggi untuk perjalanan eksklusif dan petualangan di Bangka Belitung.',
  },
  {
    id: 'pajero-1',
    name: 'Mitsubishi Pajero',
    category: 'SUV Premium',
    pricePerDay: 2700000,
    image: pajeroImg,
    gallery: [pajeroImg],
    capacity: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Diesel',
    year: 2022,
    features: [
      'Paket: All in (Mobil + Driver + BBM + Parkir)',
      'Sunroof',
      'Kamera Mundur',
      'Leather Seat'
    ],
    description: 'Mitsubishi Pajero SUV gagah dan bertenaga, siap menemani perjalanan dinas maupun wisata Anda di Bangka Belitung.',
  },
  {
    id: 'alphard-gen3',
    name: 'Toyota Alphard Gen 3',
    category: 'Luxury',
    pricePerDay: 6500000,
    image: alphardGen3Img,
    gallery: [alphardGen3Img],
    capacity: 7,
    transmission: 'CVT',
    fuel: 'Bensin',
    year: 2020,
    features: [
      'Paket: All in (Mobil + Driver + BBM + Parkir)',
      'Luxury Captain Seat',
      'Dual Sunroof',
      'Premium Audio'
    ],
    description: 'Toyota Alphard Gen 3 tetap menjadi simbol kemewahan dan kenyamanan untuk perjalanan eksklusif Anda di Bangka Belitung.',
  },
  {
    id: 'alphard-1',
    name: 'Toyota Alphard Gen 4 2025',
    category: 'Luxury',
    pricePerDay: 8000000,
    image: alphardImg,
    gallery: [alphardImg],
    capacity: 7,
    transmission: 'CVT',
    fuel: 'Bensin',
    year: 2025,
    features: [
      'Tipe: 2AR-FE 4 silinder inline',
      'Paket: All in (Mobil + Driver + BBM + Parkir)',
      'Executive Lounge',
      'Dual Sunroof',
      'Ottoman Seats'
    ],
    description: 'Toyota Alphard Gen 4 2025 menawarkan kemewahan tertinggi dengan paket All-in untuk kenyamanan VIP Anda di Bangka Belitung.',
  },
];
