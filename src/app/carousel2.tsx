import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import {
  SiWindows, SiIntel, SiAmd, SiLg, SiSamsung, SiLogitech, SiLinux, SiHp, SiAdobe, SiUbiquiti, SiMikrotik, SiWesterndigital
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa6'; // Para Vertiv (no existe icono de marca)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const brandIcons = [
  { icon: SiWindows, label: 'Windows', color: '#0078D6' },
  { icon: SiIntel, label: 'Intel', color: '#0071C5' },
  { icon: SiAmd, label: 'AMD', color: '#ED1C24' },
  { icon: SiLg, label: 'LG', color: '#A50034' },
  { icon: SiSamsung, label: 'Samsung', color: '#1428A0' },
  { icon: SiLogitech, label: 'Logitech', color: '#00B8FC' },
  { icon: SiLinux, label: 'Linux', color: '#FCC624' },
  { icon: SiHp, label: 'HP', color: '#0096D6' },
  { icon: SiAdobe, label: 'Adobe', color: '#FF0000' },
  { icon: SiUbiquiti, label: 'Ubiquiti', color: '#0559C9' },
  { icon: FaServer, label: 'Vertiv', color: '#F97316' }, // Genérico para Vertiv
  { icon: SiMikrotik, label: 'Mikrotik', color: '#1A1918' },
  { icon: SiWesterndigital, label: 'Western Digital', color: '#005195' },
];

const ArrowButton = ({ onClick, direction }: { onClick?: () => void; direction: 'prev' | 'next'; }) => (
  <motion.button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500`}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    style={{ [direction === 'prev' ? 'left' : 'right']: '10px' }}
  >
    {direction === 'prev' ? <IoChevronBackOutline size={24} color="#fff" /> : <IoChevronForwardOutline size={24} color="#fff" />}
  </motion.button>
);

export default function Carousel2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 40000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
    appendDots: (dots: React.ReactNode) => (
      <ul className="flex justify-center mt-4">{dots}</ul>
    ),
    customPaging: (i: number) => (
      <button className="w-3 h-3 rounded-full bg-gray-700">
        <motion.div
          className="w-full h-full rounded-full"
          animate={i === currentSlide ? { scale: [1, 1.4, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </button>
    ),
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-400 p-6 rounded-3xl shadow-xl overflow-hidden">
      <Slider {...settings}>
        {brandIcons.map(({ icon: Icon, label, color }, idx) => (
          <div key={idx} className="flex flex-col justify-center items-center p-4">
            <motion.div
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <Icon size={90} color={color} className="drop-shadow-lg" title={label} />
            </motion.div>
            <span className="mt-2 text-sm text-gray-200">{label}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}